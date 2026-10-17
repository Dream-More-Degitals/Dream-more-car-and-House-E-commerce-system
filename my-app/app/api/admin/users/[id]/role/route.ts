import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { withAuth } from "@/lib/auth";
import { audit } from "@/lib/audit";

const bodySchema = z.object({ role: z.enum(["BUYER", "SELLER", "ADMIN"]) });

export const PATCH = withAuth(["ADMIN"], async (req, ctx, auth) => {
  const { id } = await ctx.params;
  const parsed = bodySchema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid input" }, { status: 400 });
  }
  if (id === auth.sub) {
    return NextResponse.json(
      { error: "You cannot change your own role" },
      { status: 400 },
    );
  }

  const user = await prisma.user
    .update({
      where: { id },
      data: { role: parsed.data.role },
      select: { id: true, name: true, email: true, role: true },
    })
    .catch(() => null);
  if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

  await audit("role_changed", req, auth.sub, {
    targetUserId: id,
    newRole: parsed.data.role,
  });
  return NextResponse.json({ user });
});