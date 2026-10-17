import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { withAuth } from "@/lib/auth";
import { audit } from "@/lib/audit";
import { cached } from "@/lib/cache";
import type { Prisma } from "@/lib/generated/prisma/client";
import { createListingSchema, searchSchema } from "@/lib/validators/listing";

const listSelect = {
  id: true,
  title: true,
  price: true,
  category: true,
  listingType: true,
  region: true,
  city: true,
  make: true,
  model: true,
  year: true,
  mileageKm: true,
  propertyType: true,
  bedrooms: true,
  bathrooms: true,
  sizeSqm: true,
  createdAt: true,
} satisfies Prisma.ListingSelect;

export async function GET(req: NextRequest) {
  const parsed = searchSchema.safeParse(
    Object.fromEntries(req.nextUrl.searchParams),
  );
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid query", issues: parsed.error.issues },
      { status: 400 },
    );
  }
  const f = parsed.data;

  const { value, hit } = await cached(
    `search:${JSON.stringify(f)}`,
    60,
    async () => {
      const where: Prisma.ListingWhereInput = {
        status: "ACTIVE",
        category: f.category,
        listingType: f.listingType,
        region: f.region,
        city: f.city,
        price: { gte: f.minPrice, lte: f.maxPrice },
        make: f.make ? { equals: f.make, mode: "insensitive" } : undefined,
        year: { gte: f.minYear, lte: f.maxYear },
        fuelType: f.fuelType,
        transmission: f.transmission,
        propertyType: f.propertyType,
        bedrooms: { gte: f.minBedrooms },
        ...(f.q
          ? {
              OR: [
                { title: { contains: f.q, mode: "insensitive" } },
                { description: { contains: f.q, mode: "insensitive" } },
              ],
            }
          : {}),
      };

      const orderByOptions: Record<
        typeof f.sort,
        Prisma.ListingOrderByWithRelationInput[]
      > = {
        newest: [{ createdAt: "desc" }, { id: "desc" }],
        oldest: [{ createdAt: "asc" }, { id: "asc" }],
        price_asc: [{ price: "asc" }, { id: "asc" }],
        price_desc: [{ price: "desc" }, { id: "desc" }],
      };
      const orderBy = orderByOptions[f.sort];

      const [total, items] = await Promise.all([
        prisma.listing.count({ where }),
        prisma.listing.findMany({
          where,
          orderBy,
          skip: (f.page - 1) * f.pageSize,
          take: f.pageSize,
          select: listSelect,
        }),
      ]);

      return {
        items,
        page: f.page,
        pageSize: f.pageSize,
        total,
        totalPages: Math.ceil(total / f.pageSize),
      };
    },
  );

  return NextResponse.json(value, {
    headers: { "x-cache": hit ? "HIT" : "MISS" },
  });
}

export const POST = withAuth(["SELLER"], async (req, _ctx, auth) => {
  const parsed = createListingSchema.safeParse(
    await req.json().catch(() => null),
  );
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid input", issues: parsed.error.issues },
      { status: 400 },
    );
  }

  const listing = await prisma.listing.create({
    data: { ...parsed.data, sellerId: auth.sub, status: "PENDING" },
    select: { id: true, status: true },
  });
  await audit("listing_created", req, auth.sub, { listingId: listing.id });
  return NextResponse.json({ listing }, { status: 201 });
});