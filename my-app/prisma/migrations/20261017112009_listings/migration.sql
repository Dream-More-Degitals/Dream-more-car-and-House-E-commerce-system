-- CreateEnum
CREATE TYPE "ListingCategory" AS ENUM ('VEHICLE', 'PROPERTY');

-- CreateEnum
CREATE TYPE "ListingType" AS ENUM ('SALE', 'RENT');

-- CreateEnum
CREATE TYPE "ListingStatus" AS ENUM ('DRAFT', 'PENDING', 'ACTIVE', 'EXPIRED', 'REMOVED');

-- CreateTable
CREATE TABLE "Listing" (
    "id" UUID NOT NULL,
    "sellerId" UUID NOT NULL,
    "category" "ListingCategory" NOT NULL,
    "listingType" "ListingType" NOT NULL,
    "status" "ListingStatus" NOT NULL DEFAULT 'PENDING',
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "region" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "subCity" TEXT,
    "make" TEXT,
    "model" TEXT,
    "year" INTEGER,
    "mileageKm" INTEGER,
    "fuelType" TEXT,
    "transmission" TEXT,
    "bodyType" TEXT,
    "engineCc" INTEGER,
    "previousOwners" INTEGER,
    "propertyType" TEXT,
    "bedrooms" INTEGER,
    "bathrooms" INTEGER,
    "sizeSqm" INTEGER,
    "condition" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Listing_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Listing_status_createdAt_idx" ON "Listing"("status", "createdAt");

-- CreateIndex
CREATE INDEX "Listing_status_category_listingType_price_idx" ON "Listing"("status", "category", "listingType", "price");

-- CreateIndex
CREATE INDEX "Listing_status_region_city_idx" ON "Listing"("status", "region", "city");

-- CreateIndex
CREATE INDEX "Listing_sellerId_status_idx" ON "Listing"("sellerId", "status");

-- AddForeignKey
ALTER TABLE "Listing" ADD CONSTRAINT "Listing_sellerId_fkey" FOREIGN KEY ("sellerId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
