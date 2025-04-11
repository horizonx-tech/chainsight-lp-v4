import { Redis } from "@upstash/redis";
export async function GET() {
    const yyyyMMdd = new Date().toISOString().split("T")[0].replace(/-/g, "");
    const posts = await getTopPosts(yyyyMMdd, USER_ID);
    return new Response(posts, {
        status: 200,
        headers: {
            "Content-Type": "application/json",
            "Cache-Control": "s-maxage=86400, stale-while-revalidate=3600",
        },
    });
}
// "username": "ChainSight_"
const USER_ID = "1654772598578765824";
const X_API_BEARER_TOKEN = process.env.X_API_BEARER_TOKEN;
const REDIS_URL = process.env.UPSTASH_REDIS_REST_URL;
const REDIS_TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN;
const getTopPosts = async (date, userId) => {
    const key = cacheKey(date, userId);
    const cached = await getFromCache(key);
    if (cached)
        return cached;
    const response = await getFromX();
    if (!response.ok)
        throw new Error(await response.text());
    const data = await response.text();
    await saveCache(key, data);
    return data;
};
const cacheKey = (yyyyMMdd, userId) => `x/posts/${yyyyMMdd}/${userId}`;
const getFromX = () => fetch(`https://api.twitter.com/2/users/${USER_ID}/tweets?max_results=5&tweet.fields=created_at&exclude=retweets,replies&expansions=attachments.media_keys&media.fields=url,preview_image_url`, { headers: { Authorization: `Bearer ${X_API_BEARER_TOKEN}` } });
const getFromCache = async (key) => {
    const value = (await redis.get(key));
    if (!value)
        return null;
    try {
        return JSON.parse(value);
    }
    catch (error) {
        console.error("Failed to parse cached value:", error);
        return null;
    }
};
const saveCache = (key, data) => redis.set(key, data);
const redis = new Redis({ url: REDIS_URL, token: REDIS_TOKEN });
