import { redis } from "@/lib/redis";

if (process.env.CACHE_ENABLED === "false") {
  return { value: await loader(), hit: false };
}

const VERSION_KEY = "listings:version";

async function currentVersion() {
  try {
    return (await redis.get(VERSION_KEY)) ?? "0";
  } catch {
    return "0";
  }
}

export async function cached<T>(
  name: string,
  ttlSeconds: number,
  loader: () => Promise<T>,
): Promise<{ value: T; hit: boolean }> {
  const key = `listings:v${await currentVersion()}:${name}`;

  try {
    const raw = await redis.get(key);
    if (raw !== null) return { value: JSON.parse(raw) as T, hit: true };
  } catch {}

  const value = await loader();
  if (value !== null && value !== undefined) {
    try {
      await redis.set(key, JSON.stringify(value), "EX", ttlSeconds);
    } catch {}
  }
  return { value, hit: false };
}

export async function invalidateListings() {
  try {
    await redis.incr(VERSION_KEY);
  } catch {}
}