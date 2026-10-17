import { z } from "zod";

const common = {
  title: z.string().trim().min(5).max(120),
  description: z.string().trim().min(20).max(5000),
  price: z.number().int().positive().max(2_000_000_000),
  listingType: z.enum(["SALE", "RENT"]),
  region: z.string().trim().min(2).max(60),
  city: z.string().trim().min(2).max(60),
  subCity: z.string().trim().max(60).optional(),
};

const vehicle = z.object({
  ...common,
  category: z.literal("VEHICLE"),
  make: z.string().trim().min(1).max(60),
  model: z.string().trim().min(1).max(60),
  year: z.number().int().min(1950).max(new Date().getFullYear() + 1),
  mileageKm: z.number().int().min(0).max(2_000_000),
  fuelType: z.enum(["PETROL", "DIESEL", "ELECTRIC", "HYBRID"]),
  transmission: z.enum(["MANUAL", "AUTOMATIC"]),
  bodyType: z.string().trim().min(2).max(40),
  engineCc: z.number().int().min(0).max(10000),
  previousOwners: z.number().int().min(0).max(20),
});

const property = z.object({
  ...common,
  category: z.literal("PROPERTY"),
  propertyType: z.enum(["APARTMENT", "HOUSE", "VILLA", "COMMERCIAL", "LAND"]),
  bedrooms: z.number().int().min(0).max(50),
  bathrooms: z.number().int().min(0).max(50),
  sizeSqm: z.number().int().positive().max(1_000_000),
  condition: z.enum(["NEW", "RENOVATED", "STANDARD"]),
});

export const createListingSchema = z.discriminatedUnion("category", [
  vehicle,
  property,
]);

export const updateListingSchema = z
  .object({
    title: common.title,
    description: common.description,
    price: common.price,
  })
  .partial();

export const searchSchema = z.object({
  category: z.enum(["VEHICLE", "PROPERTY"]).optional(),
  listingType: z.enum(["SALE", "RENT"]).optional(),
  q: z.string().trim().max(100).optional(),
  region: z.string().trim().max(60).optional(),
  city: z.string().trim().max(60).optional(),
  minPrice: z.coerce.number().int().min(0).optional(),
  maxPrice: z.coerce.number().int().min(0).optional(),
  make: z.string().trim().max(60).optional(),
  minYear: z.coerce.number().int().optional(),
  maxYear: z.coerce.number().int().optional(),
  fuelType: z.enum(["PETROL", "DIESEL", "ELECTRIC", "HYBRID"]).optional(),
  transmission: z.enum(["MANUAL", "AUTOMATIC"]).optional(),
  propertyType: z
    .enum(["APARTMENT", "HOUSE", "VILLA", "COMMERCIAL", "LAND"])
    .optional(),
  minBedrooms: z.coerce.number().int().min(0).optional(),
  sort: z
    .enum(["newest", "oldest", "price_asc", "price_desc"])
    .default("newest"),
  page: z.coerce.number().int().min(1).default(1),
  pageSize: z.coerce.number().int().min(1).max(50).default(20),
});