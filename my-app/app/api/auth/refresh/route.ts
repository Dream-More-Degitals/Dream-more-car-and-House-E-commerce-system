import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { signAccessToken } from "@/lib/jwt";
import { audit } from "@/lib/audit";
import {
  REFRESH_COOKIE,
  REFRESH_TTL_MS,
  clearRefreshCookie,
  clientInfo,
  hashToken,
  newRefreshToken,
  setRefreshCookie,
} from "@/lib/refresh";

function unauthorized() {
  const res = NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  clearRefreshCookie(res);
  return res;
}

export async function POST(req: NextRequest) {
  const raw = req.cookies.get(REFRESH_COOKIE)?.value;
  if (!raw) return unauthorized();

  const current = await prisma.refreshToken.findUnique({
    where: { tokenHash: hashToken(raw) },
    include: { user: true },
  });
  if (!current || current.expiresAt < new Date()) return unauthorized();

  const user = current.user;
  if (user.status !== "ACTIVE" || user.deletedAt) return unauthorized();

  const next = newRefreshToken();
  const { ip, userAgent } = clientInfo(req);

  const rotated = await prisma.$transaction(async (tx) => {
    const claimed = await tx.refreshToken.updateMany({
      where: { id: current.id, revokedAt: null },
      data: { revokedAt: new Date() },
    });
    if (claimed.count === 0) return false;

    const created = await tx.refreshToken.create({
      data: {
        userId: user.id,
        tokenHash: next.hash,
        familyId: current.familyId,
        expiresAt: new Date(Date.now() + REFRESH_TTL_MS),
        ip,
        userAgent,
      },
    });
    await tx.refreshToken.update({
      where: { id: current.id },
      data: { replacedById: created.id },
    });
    return true;
  });

  if (!rotated) {
    await prisma.refreshToken.updateMany({
      where: { familyId: current.familyId, revokedAt: null },
      data: { revokedAt: new Date() },
    });
    await audit("refresh_reuse_detected", req, user.id, {
      familyId: current.familyId,
    });
    return unauthorized();
  }

  const res = NextResponse.json({
    accessToken: signAccessToken({ sub: user.id, role: user.role }),
  });
  setRefreshCookie(res, next.raw);
  return res;
}