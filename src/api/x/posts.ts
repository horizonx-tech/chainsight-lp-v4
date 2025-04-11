export async function GET() {
  const yyyyMMdd = new Date().toISOString().split("T")[0].replace(/-/g, "");
  const posts = await getTopPosts(yyyyMMdd, USER_ID);
  return Response.json(posts, {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "s-maxage=86400, stale-while-revalidate=3600",
    },
  });
}

// "username": "ChainSight_"
const USER_ID = "1654772598578765824";
const cacheKey = (yyyyMMdd: string, userId: string) =>
  `x/posts/${yyyyMMdd}/${userId}`;

const getTopPosts = async (date: string, userId: string): Promise<Tweet[]> => {
  const key = cacheKey(date, userId);
  const cached = await getFromCache(key);
  if (cached) return cached;

  const response = await getTweets(USER_ID);
  await saveCache(key, response);
  return response;
};

// ------------- Twitter API -------------
const X_API_BEARER_TOKEN = process.env.X_API_BEARER_TOKEN;

type Tweet = {
  id: string;
  text: string;
  attachments?: {
    media: Media[];
  };
  created_at: string;
};

const getTweets = async (userId: string): Promise<Tweet[]> => {
  const resp = await fetchTweets(userId, X_API_BEARER_TOKEN!);
  const { data, includes } = resp;
  return data.map((tweet) => {
    const { attachments, ...rest } = tweet;
    const media = attachments?.media_keys
      ?.map((key) => includes?.media?.find((m) => m.media_key === key))
      .filter((m) => !!m);
    return { ...rest, attachments: media ? { media } : undefined };
  });
};

const fetchTweets = async (
  userId: string,
  token: string
): Promise<TwitterApiResponse> => {
  const r = await fetch(
    `https://api.twitter.com/2/users/${userId}/tweets?max_results=5&tweet.fields=created_at&exclude=retweets,replies&expansions=attachments.media_keys&media.fields=url,preview_image_url`,
    { headers: { Authorization: `Bearer ${token}` } }
  );
  if (!r.ok) throw new Error("Failed to fetch data from X");
  return r.json();
};

type TwitterApiResponse = {
  data: TweetRaw[];
  includes?: {
    media?: Media[];
  };
  meta: Meta;
};
type TweetRaw = {
  id: string;
  text: string;
  attachments?: {
    media_keys: string[];
  };
  created_at: string;
  edit_history_tweet_ids: string[];
};
type Media = {
  media_key: string;
  type: "photo" | "video" | string;
  preview_image_url?: string;
  url?: string;
};
type Meta = {
  next_token: string;
  result_count: number;
  newest_id: string;
  oldest_id: string;
};

// ------------- Upstash Redis client -------------
import { Redis } from "@upstash/redis";

const REDIS_URL = process.env.UPSTASH_REDIS_REST_URL!;
const REDIS_TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN!;
const redis = new Redis({ url: REDIS_URL!, token: REDIS_TOKEN! });

const getFromCache = async (key: string) => {
  const value = (await redis.get(key)) as string;
  if (!value) return null;
  try {
    return JSON.parse(value);
  } catch (error) {
    console.error("Failed to parse cached value:", error);
    return null;
  }
};

const saveCache = (key: string, data: unknown) =>
  redis.set(key, JSON.stringify(data));
