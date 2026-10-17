import { NextRequest, NextResponse } from "next/server";
import { verifyAccessToken, type AccessPayload } from "@/lib/jwt";

type Role = AccessPayload["role"];
type Ctx = { params: Promise<Record<string, string>> };

type AuthedHandler = (
  req: NextRequest,
  ctx: Ctx,
  auth: AccessPayload,
) => Promise<Response> | Response;

export function withAuth(roles: Role[] | null, handler: AuthedHandler) {
  return async (req: NextRequest, ctx: Ctx) => {
    const [scheme, token] = (req.headers.get("authorization") ?? "").split(" ");
    if (scheme !== "Bearer" || !token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    let auth: AccessPayload;
    try {
      auth = verifyAccessToken(token);
    } catch {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    if (roles && !roles.includes(auth.role)) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }
    return handler(req, ctx, auth);
  };
}