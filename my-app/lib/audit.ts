import { prisma } from "@/lib/prisma";
import { clientInfo } from "@/lib/refresh";

export async function audit(
  action: string,
  req: Request,
  userId?: string | null,
  metadata?: Record<string, string | number | boolean>,
) {
  const { ip, userAgent } = clientInfo(req);
  await prisma.auditLog
    .create({ data: { action, userId: userId ?? null, ip, userAgent, metadata } })
    .catch(() => {});
}