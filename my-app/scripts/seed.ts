import "dotenv/config";
import { PrismaClient } from "../lib/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const prisma = new PrismaClient({
  adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL }),
});

function pick<T>(items: readonly T[]): T {
  return items[Math.floor(Math.random() * items.length)];
}
function int(min: number, max: number) {
  return min + Math.floor(Math.random() * (max - min + 1));
}

const places = [
  ["Addis Ababa", "Addis Ababa"],
  ["Oromia", "Adama"],
  ["Amhara", "Bahir Dar"],
  ["Sidama", "Hawassa"],
  ["Tigray", "Mekelle"],
] as const;

const models: Record<string, string[]> = {
  Toyota: ["Corolla", "Vitz", "Hilux", "Land Cruiser"],
  Hyundai: ["Accent", "Tucson", "i10"],
  Suzuki: ["Swift", "Dzire", "Alto"],
  Nissan: ["Sunny", "Qashqai", "Patrol"],
  Isuzu: ["D-Max", "NPR"],
};
const makes = Object.keys(models);
const bodies = ["Sedan", "SUV", "Truck", "Hatchback"] as const;
const propertyTypes = ["APARTMENT", "HOUSE", "VILLA", "COMMERCIAL", "LAND"] as const;

async function main() {
  const seller = await prisma.user.findUnique({
    where: { email: "second@example.com" },
    select: { id: true },
  });
  if (!seller) throw new Error("second@example.com not found");

  const TOTAL = 100_000;
  const BATCH = 1_000;
  const dayMs = 24 * 60 * 60 * 1000;

  for (let i = 0; i < TOTAL; i += BATCH) {
    const rows = Array.from({ length: BATCH }, (_, k) => {
      const [region, city] = pick(places);
      const common = {
        sellerId: seller.id,
        status: "ACTIVE" as const,
        listingType: pick(["SALE", "RENT"] as const),
        region,
        city,
        description: "Seeded listing for load testing. Not a real advertisement.",
        createdAt: new Date(Date.now() - int(0, 90) * dayMs),
      };

      if (Math.random() < 0.6) {
        const make = pick(makes);
        const model = pick(models[make]);
        const year = int(2005, 2025);
        return {
          ...common,
          category: "VEHICLE" as const,
          title: `[seed] ${make} ${model} ${year} #${i + k}`,
          price: int(300_000, 9_000_000),
          make,
          model,
          year,
          mileageKm: int(0, 300_000),
          fuelType: pick(["PETROL", "DIESEL", "ELECTRIC", "HYBRID"] as const),
          transmission: pick(["MANUAL", "AUTOMATIC"] as const),
          bodyType: pick(bodies),
          engineCc: int(800, 4500),
          previousOwners: int(0, 4),
        };
      }

      const propertyType = pick(propertyTypes);
      return {
        ...common,
        category: "PROPERTY" as const,
        title: `[seed] ${propertyType} in ${city} #${i + k}`,
        price: int(1_500_000, 80_000_000),
        propertyType,
        bedrooms: int(0, 6),
        bathrooms: int(1, 4),
        sizeSqm: int(30, 600),
        condition: pick(["NEW", "RENOVATED", "STANDARD"] as const),
      };
    });

    await prisma.listing.createMany({ data: rows });
    console.log(`${i + BATCH} / ${TOTAL}`);
  }
}

main().finally(() => prisma.$disconnect());