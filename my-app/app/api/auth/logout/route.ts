import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { audit } from "@/lib/audit";
import { REFRESH_COOKIE, clearRefreshCookie, hashToken } from "@/lib/refresh";

export async function POST(req: NextRequest) {
  const raw = req.cookies.get(REFRESH_COOKIE)?.value;
  if (raw) {
    const row = await prisma.refreshToken.findUnique({
      where: { tokenHash: hashToken(raw) },
    });
    if (row) {
      await prisma.refreshToken.updateMany({
        where: { familyId: row.familyId, revokedAt: null },
        data: { revokedAt: new Date() },
      });
      await audit("logout", req, row.userId);
    }
  }
  const res = NextResponse.json({ ok: true });
  clearRefreshCookie(res);
  return res;
}