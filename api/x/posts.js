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
const USER_ID = "1654772598578765824";
// 2 days in milliseconds
const CACHE_INTERVAL = 60 * 60 * 24 * 2 * 1000;
const cacheKey = (timeunit, userId) => `x/posts/${timeunit}/${userId}`;
const getTopPosts = async (timeunit, userId) => {
    const key = cacheKey(timeunit, userId);
    const cached = (await getFromCache(key));
    if (cached)
        return cached;
    const response = await getTweets(userId);
    await saveCache(key, response);
    return response;
};
// ------------- Twitter API -------------
const X_API_BEARER_TOKEN = process.env.X_API_BEARER_TOKEN;
const getTweets = async (userId) => {
    const resp = await fetchTweets(userId, X_API_BEARER_TOKEN);
    const { data, includes } = resp;
    return data.map((tweet) => {
        const { attachments, ...rest } = tweet;
        const media = attachments?.media_keys
            ?.map((key) => includes?.media?.find((m) => m.media_key === key))
            .filter((m) => !!m);
        return { ...rest, attachments: media ? { media } : undefined };
    });
};
const fetchTweets = async (userId, token) => {
    const r = await fetch(`https://api.twitter.com/2/users/${userId}/tweets?max_results=5&tweet.fields=created_at&exclude=retweets,replies&expansions=attachments.media_keys&media.fields=url,preview_image_url`, { headers: { Authorization: `Bearer ${token}` } });
    if (!r.ok)
        throw new Error("Failed to fetch data from X");
    return r.json();
};
// ------------- Upstash Redis client -------------
import { Redis } from "@upstash/redis";
const REDIS_URL = process.env.UPSTASH_REDIS_REST_URL;
const REDIS_TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN;
const redis = new Redis({ url: REDIS_URL, token: REDIS_TOKEN });
const getFromCache = async (key) => redis.get(key);
const saveCache = (key, data) => redis.set(key, JSON.stringify(data));
