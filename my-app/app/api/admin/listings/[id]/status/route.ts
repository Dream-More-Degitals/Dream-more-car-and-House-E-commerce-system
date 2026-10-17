import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { withAuth } from "@/lib/auth";
import { audit } from "@/lib/audit";
import { invalidateListings } from "@/lib/cache";

const bodySchema = z.object({ status: z.enum(["ACTIVE", "REMOVED"]) });

export const PATCH = withAuth(["ADMIN"], async (req, ctx, auth) => {
  const { id } = await ctx.params;
  if (!z.uuid().safeParse(id).success) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  const parsed = bodySchema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid input" }, { status: 400 });
  }

  const listing = await prisma.listing
    .update({
      where: { id },
      data: { status: parsed.data.status },
      select: { id: true, status: true },
    })
    .catch(() => null);
  if (!listing) return NextResponse.json({ error: "Not found" }, { status: 404 });

  await invalidateListings();
  await audit("listing_status_changed", req, auth.sub, {
    listingId: id,
    status: parsed.data.status,
  });
  return NextResponse.json({ listing });
});