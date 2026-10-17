import crypto from "crypto";
import { NextResponse } from "next/server";

export const REFRESH_COOKIE = "refresh_token";
export const REFRESH_TTL_MS = 7 * 24 * 60 * 60 * 1000;

export function hashToken(raw: string) {
  return crypto.createHash("sha256").update(raw).digest("hex");
}

export function newRefreshToken() {
  const raw = crypto.randomBytes(48).toString("base64url");
  return { raw, hash: hashToken(raw) };
}

const cookieBase = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "strict" as const,
  path: "/api/auth",
};

export function setRefreshCookie(res: NextResponse, raw: string) {
  res.cookies.set(REFRESH_COOKIE, raw, {
    ...cookieBase,
    maxAge: REFRESH_TTL_MS / 1000,
  });
}

export function clearRefreshCookie(res: NextResponse) {
  res.cookies.set(REFRESH_COOKIE, "", { ...cookieBase, maxAge: 0 });
}

export function clientInfo(req: Request) {
  return {
    ip: req.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? null,
    userAgent: req.headers.get("user-agent"),
  };
}