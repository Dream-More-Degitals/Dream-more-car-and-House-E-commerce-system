import jwt from "jsonwebtoken";

export type AccessPayload = { sub: string; role: "BUYER" | "SELLER" | "ADMIN" };

function secret() {
  const s = process.env.JWT_ACCESS_SECRET;
  if (!s) throw new Error("JWT_ACCESS_SECRET is not set");
  return s;
}

export function signAccessToken(payload: AccessPayload) {
  return jwt.sign(payload, secret(), { expiresIn: "15m" });
}

export function verifyAccessToken(token: string) {
  return jwt.verify(token, secret(), { algorithms: ["HS256"] }) as AccessPayload & { exp: number };
}