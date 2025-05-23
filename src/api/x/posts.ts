export async function GET() {
  const timeunit = Math.floor(new Date().getTime() / CACHE_INTERVAL);
  const posts = await getTopPosts(timeunit, USER_ID);
  return Response.json(posts, {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "s-maxage=86400, stale-while-revalidate=3600",
    },
  });
}

// "username": "ChainSight_"
export const USER_ID = "1654772598578765824";
// 2 days in milliseconds
const CACHE_INTERVAL = 60 * 60 * 24 * 2 * 1000; 
const cacheKey = (timeunit: number, userId: string) =>
  `x/posts/${timeunit}/${userId}`;

export const getTopPosts = async (
  timeunit: number,
  userId: string
): Promise<Tweet[]> => {
  const key = cacheKey(timeunit, userId);
  const cached = (await getFromCache(key)) as Tweet[] | undefined;
  if (cached) return cached;

  const response = await getTweets(userId);
  await saveCache(key, response);
  return response;
};

// ------------- Twitter API -------------
export const X_API_BEARER_TOKEN = process.env.X_API_BEARER_TOKEN;

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

const getFromCache = async (key: string) => redis.get(key);

const saveCache = (key: string, data: unknown) =>
  redis.set(key, JSON.stringify(data));
