import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { redis } from "@/lib/redis";

export const dynamic = "force-dynamic";

export async function GET() {
  const [db, cache] = await Promise.allSettled([
    prisma.$queryRaw`SELECT 1`,
    redis.ping(),
  ]);

  const ok = db.status === "fulfilled" && cache.status === "fulfilled";
  return NextResponse.json(
    {
      status: ok ? "ok" : "degraded",
      postgres: db.status === "fulfilled" ? "up" : "down",
      redis: cache.status === "fulfilled" ? "up" : "down",
    },
    { status: ok ? 200 : 503 },
  );
}