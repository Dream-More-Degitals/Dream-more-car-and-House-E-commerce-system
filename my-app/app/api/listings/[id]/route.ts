import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { withAuth } from "@/lib/auth";
import { audit } from "@/lib/audit";
import { cached, invalidateListings } from "@/lib/cache";
import { updateListingSchema } from "@/lib/validators/listing";

const isUuid = (v: string) => z.uuid().safeParse(v).success;
const notFound = () => NextResponse.json({ error: "Not found" }, { status: 404 });

export async function GET(
  _req: NextRequest,
  ctx: { params: Promise<{ id: string }> },
) {
  const { id } = await ctx.params;
  if (!isUuid(id)) return notFound();

  const { value: listing, hit } = await cached(`detail:${id}`, 300, () =>
    prisma.listing.findFirst({
      where: { id, status: "ACTIVE" },
      include: { seller: { select: { id: true, name: true } } },
    }),
  );
  if (!listing) return notFound();

  return NextResponse.json(
    { listing },
    { headers: { "x-cache": hit ? "HIT" : "MISS" } },
  );
}

export const PATCH = withAuth(["SELLER"], async (req, ctx, auth) => {
  const { id } = await ctx.params;
  if (!isUuid(id)) return notFound();

  const parsed = updateListingSchema.safeParse(
    await req.json().catch(() => null),
  );
  if (!parsed.success || Object.keys(parsed.data).length === 0) {
    return NextResponse.json({ error: "Invalid input" }, { status: 400 });
  }

  const existing = await prisma.listing.findFirst({
    where: { id, sellerId: auth.sub, status: { not: "REMOVED" } },
    select: { id: true },
  });
  if (!existing) return notFound();

  const needsReview =
    parsed.data.title !== undefined || parsed.data.description !== undefined;

  const listing = await prisma.listing.update({
    where: { id },
    data: { ...parsed.data, ...(needsReview ? { status: "PENDING" } : {}) },
    select: { id: true, status: true },
  });
  await invalidateListings();
  return NextResponse.json({ listing });
});

export const DELETE = withAuth(["SELLER", "ADMIN"], async (req, ctx, auth) => {
  const { id } = await ctx.params;
  if (!isUuid(id)) return notFound();

  const owner = auth.role === "ADMIN" ? { id } : { id, sellerId: auth.sub };
  const result = await prisma.listing.updateMany({
    where: { ...owner, status: { not: "REMOVED" } },
    data: { status: "REMOVED" },
  });
  if (result.count === 0) return notFound();

  await invalidateListings();
  await audit("listing_removed", req, auth.sub, { listingId: id });
  return NextResponse.json({ ok: true });
});