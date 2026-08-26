'use client'

import { useState } from 'react'
import Link from 'next/link'
import { StatusBadge } from '@/components/ui/StatusBadge'
import { formatPrice } from '@/lib/utils'
import { ethiopianRegions } from '@/lib/locations'
import { VEHICLE_MAKES, FUEL_TYPES, TRANSMISSIONS, BODY_TYPES, PROPERTY_TYPES, FURNISHING_STATUS } from '@/lib/utils'

type Category = 'all' | 'car' | 'house'
type ListingType = 'all' | 'sale' | 'rent'
type SortBy = 'relevance' | 'price-low' | 'price-high' | 'newest' | 'oldest'

interface Filters {
  category: Category
  listingType: ListingType
  minPrice: string
  maxPrice: string
  location: string
  city: string
  subCity: string
  radius: string
  sortBy: SortBy
  // Car filters
  make: string
  model: string
  minYear: string
  maxYear: string
  fuelType: string
  transmission: string
  bodyType: string
  condition: string
  // Property filters
  propertyType: string
  minBedrooms: string
  maxBedrooms: string
  minBathrooms: string
  furnished: string
}

const INITIAL_FILTERS: Filters = {
  category: 'all',
  listingType: 'all',
  minPrice: '',
  maxPrice: '',
  location: '',
  city: '',
  subCity: '',
  radius: '25',
  sortBy: 'relevance',
  make: '',
  model: '',
  minYear: '',
  maxYear: '',
  fuelType: '',
  transmission: '',
  bodyType: '',
  condition: '',
  propertyType: '',
  minBedrooms: '',
  maxBedrooms: '',
  minBathrooms: '',
  furnished: '',
}

const MOCK_LISTINGS = [
  { id: '1', title: 'Toyota Camry 2021', price: 2800000, location: 'Bole, Addis Ababa', type: 'car' as const, listingType: 'sale' as const, year: 2021, make: 'Toyota', image: '/placeholder-car.jpg', featured: true },
  { id: '2', title: 'Modern 3BR Apartment', price: 45000, location: 'Kazanchis, Addis Ababa', type: 'house' as const, listingType: 'rent' as const, bedrooms: 3, image: '/placeholder-house.jpg', featured: false },
  { id: '3', title: 'Hyundai Tucson 2022', price: 3500000, location: 'Adama, Oromia', type: 'car' as const, listingType: 'sale' as const, year: 2022, make: 'Hyundai', image: '/placeholder-car2.jpg', featured: true },
  { id: '4', title: 'Luxury Villa with Pool', price: 150000, location: 'Old Airport, Addis Ababa', type: 'house' as const, listingType: 'rent' as const, bedrooms: 5, image: '/placeholder-villa.jpg', featured: false },
  { id: '5', title: 'Honda CR-V 2020', price: 2200000, location: 'Bahir Dar, Amhara', type: 'car' as const, listingType: 'sale' as const, year: 2020, make: 'Honda', image: '/placeholder-car3.jpg', featured: false },
  { id: '6', title: '2BR Furnished Condo', price: 35000, location: 'Merkato, Addis Ababa', type: 'house' as const, listingType: 'rent' as const, bedrooms: 2, image: '/placeholder-condo.jpg', featured: false },
  { id: '7', title: 'Mercedes-Benz C-Class 2023', price: 5500000, location: 'Kazanchis, Addis Ababa', type: 'car' as const, listingType: 'sale' as const, year: 2023, make: 'Mercedes-Benz', image: '/placeholder-car4.jpg', featured: true },
  { id: '8', title: 'Commercial Office Space', price: 85000, location: 'Bole, Addis Ababa', type: 'house' as const, listingType: 'rent' as const, bedrooms: 0, image: '/placeholder-office.jpg', featured: false },
]

export default function SearchPage() {
  const [filters, setFilters] = useState<Filters>(INITIAL_FILTERS)
  const [showFilters, setShowFilters] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const updateFilter = (key: keyof Filters, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }))
  }

  const selectedRegion = ethiopianRegions.find(r => r.name === filters.location)
  const cities = selectedRegion?.cities || []

  const clearFilters = () => {
    setFilters(INITIAL_FILTERS)
    setSearchQuery('')
  }

  const activeFilterCount = Object.entries(filters).filter(([key, value]) => {
    if (key === 'category' && value !== 'all') return true
    if (key === 'listingType' && value !== 'all') return true
    if (key === 'sortBy' && value !== 'relevance') return true
    if (value && key !== 'category' && key !== 'listingType' && key !== 'sortBy' && key !== 'radius') return true
    return false
  }).length

  return (
    <div className="min-h-screen bg-surface">
      {/* Search Header */}
      <div className="sticky top-0 z-10 bg-surface/80 backdrop-blur-xl border-b border-outline-variant">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex items-center gap-3">
            <Link href="/" className="text-on-surface-variant hover:text-on-surface">
              <span className="material-symbols-outlined">arrow_back</span>
            </Link>
            <div className="flex-1 relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-lg">search</span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search cars and properties..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-surface-container-low text-sm text-on-surface placeholder:text-on-surface-variant border border-outline-variant focus:border-primary focus:outline-none"
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`relative p-2.5 rounded-xl transition-colors ${
                showFilters ? 'bg-primary text-on-primary' : 'bg-surface-container-low text-on-surface-variant'
              }`}
            >
              <span className="material-symbols-outlined text-lg">tune</span>
              {activeFilterCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-error text-white text-[9px] flex items-center justify-center">
                  {activeFilterCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex gap-6">
          {/* Filter Sidebar */}
          {showFilters && (
            <div className="w-72 flex-shrink-0 space-y-4">
              <div className="bento-card space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-semibold text-on-surface">Filters</h3>
                  <button onClick={clearFilters} className="text-[10px] text-primary hover:text-primary/80">
                    Clear all
                  </button>
                </div>

                {/* Category */}
                <div>
                  <label className="text-[10px] font-medium text-on-surface-variant mb-1.5 block">Category</label>
                  <div className="flex gap-1">
                    {[
                      { key: 'all', label: 'All' },
                      { key: 'car', label: 'Vehicles' },
                      { key: 'house', label: 'Properties' },
                    ].map((c) => (
                      <button
                        key={c.key}
                        onClick={() => updateFilter('category', c.key)}
                        className={`flex-1 py-1.5 rounded-lg text-[10px] font-medium transition-colors ${
                          filters.category === c.key
                            ? 'bg-primary text-on-primary'
                            : 'bg-surface-container-low text-on-surface-variant'
                        }`}
                      >
                        {c.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Listing Type */}
                <div>
                  <label className="text-[10px] font-medium text-on-surface-variant mb-1.5 block">Listing Type</label>
                  <div className="flex gap-1">
                    {[
                      { key: 'all', label: 'All' },
                      { key: 'sale', label: 'For Sale' },
                      { key: 'rent', label: 'For Rent' },
                    ].map((t) => (
                      <button
                        key={t.key}
                        onClick={() => updateFilter('listingType', t.key)}
                        className={`flex-1 py-1.5 rounded-lg text-[10px] font-medium transition-colors ${
                          filters.listingType === t.key
                            ? 'bg-primary text-on-primary'
                            : 'bg-surface-container-low text-on-surface-variant'
                        }`}
                      >
                        {t.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div>
                  <label className="text-[10px] font-medium text-on-surface-variant mb-1.5 block">Price Range (Br)</label>
                  <div className="flex gap-2">
                    <input
                      type="number"
                      value={filters.minPrice}
                      onChange={(e) => updateFilter('minPrice', e.target.value)}
                      placeholder="Min"
                      className="flex-1 px-2 py-1.5 rounded-lg bg-surface-container-low text-[10px] text-on-surface border border-outline-variant focus:border-primary focus:outline-none"
                    />
                    <input
                      type="number"
                      value={filters.maxPrice}
                      onChange={(e) => updateFilter('maxPrice', e.target.value)}
                      placeholder="Max"
                      className="flex-1 px-2 py-1.5 rounded-lg bg-surface-container-low text-[10px] text-on-surface border border-outline-variant focus:border-primary focus:outline-none"
                    />
                  </div>
                </div>

                {/* Location */}
                <div>
                  <label className="text-[10px] font-medium text-on-surface-variant mb-1.5 block">Region</label>
                  <select
                    value={filters.location}
                    onChange={(e) => { updateFilter('location', e.target.value); updateFilter('city', ''); }}
                    className="w-full px-2 py-1.5 rounded-lg bg-surface-container-low text-[10px] text-on-surface border border-outline-variant focus:border-primary focus:outline-none appearance-none"
                  >
                    <option value="">All Regions</option>
                    {ethiopianRegions.map((r) => (
                      <option key={r.name} value={r.name}>{r.name}</option>
                    ))}
                  </select>
                </div>

                {filters.location && (
                  <div>
                    <label className="text-[10px] font-medium text-on-surface-variant mb-1.5 block">City</label>
                    <select
                      value={filters.city}
                      onChange={(e) => updateFilter('city', e.target.value)}
                      className="w-full px-2 py-1.5 rounded-lg bg-surface-container-low text-[10px] text-on-surface border border-outline-variant focus:border-primary focus:outline-none appearance-none"
                    >
                      <option value="">All Cities</option>
                      {cities.map((c) => (
                        <option key={c.name} value={c.name}>{c.name}</option>
                      ))}
                    </select>
                  </div>
                )}

                {/* Sort By */}
                <div>
                  <label className="text-[10px] font-medium text-on-surface-variant mb-1.5 block">Sort By</label>
                  <select
                    value={filters.sortBy}
                    onChange={(e) => updateFilter('sortBy', e.target.value)}
                    className="w-full px-2 py-1.5 rounded-lg bg-surface-container-low text-[10px] text-on-surface border border-outline-variant focus:border-primary focus:outline-none appearance-none"
                  >
                    <option value="relevance">Relevance</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="newest">Newest First</option>
                    <option value="oldest">Oldest First</option>
                  </select>
                </div>

                {/* Vehicle Filters */}
                {filters.category === 'car' || filters.category === 'all' ? (
                  <>
                    <div>
                      <label className="text-[10px] font-medium text-on-surface-variant mb-1.5 block">Make</label>
                      <select
                        value={filters.make}
                        onChange={(e) => updateFilter('make', e.target.value)}
                        className="w-full px-2 py-1.5 rounded-lg bg-surface-container-low text-[10px] text-on-surface border border-outline-variant focus:border-primary focus:outline-none appearance-none"
                      >
                        <option value="">All Makes</option>
                        {VEHICLE_MAKES.map((m) => (
                          <option key={m} value={m}>{m}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="text-[10px] font-medium text-on-surface-variant mb-1.5 block">Year Range</label>
                      <div className="flex gap-2">
                        <input
                          type="number"
                          value={filters.minYear}
                          onChange={(e) => updateFilter('minYear', e.target.value)}
                          placeholder="From"
                          className="flex-1 px-2 py-1.5 rounded-lg bg-surface-container-low text-[10px] text-on-surface border border-outline-variant focus:border-primary focus:outline-none"
                        />
                        <input
                          type="number"
                          value={filters.maxYear}
                          onChange={(e) => updateFilter('maxYear', e.target.value)}
                          placeholder="To"
                          className="flex-1 px-2 py-1.5 rounded-lg bg-surface-container-low text-[10px] text-on-surface border border-outline-variant focus:border-primary focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-[10px] font-medium text-on-surface-variant mb-1.5 block">Fuel Type</label>
                      <select
                        value={filters.fuelType}
                        onChange={(e) => updateFilter('fuelType', e.target.value)}
                        className="w-full px-2 py-1.5 rounded-lg bg-surface-container-low text-[10px] text-on-surface border border-outline-variant focus:border-primary focus:outline-none appearance-none"
                      >
                        <option value="">All</option>
                        {FUEL_TYPES.map((f) => (
                          <option key={f} value={f}>{f}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="text-[10px] font-medium text-on-surface-variant mb-1.5 block">Transmission</label>
                      <select
                        value={filters.transmission}
                        onChange={(e) => updateFilter('transmission', e.target.value)}
                        className="w-full px-2 py-1.5 rounded-lg bg-surface-container-low text-[10px] text-on-surface border border-outline-variant focus:border-primary focus:outline-none appearance-none"
                      >
                        <option value="">All</option>
                        {TRANSMISSIONS.map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="text-[10px] font-medium text-on-surface-variant mb-1.5 block">Body Type</label>
                      <select
                        value={filters.bodyType}
                        onChange={(e) => updateFilter('bodyType', e.target.value)}
                        className="w-full px-2 py-1.5 rounded-lg bg-surface-container-low text-[10px] text-on-surface border border-outline-variant focus:border-primary focus:outline-none appearance-none"
                      >
                        <option value="">All</option>
                        {BODY_TYPES.map((b) => (
                          <option key={b} value={b}>{b}</option>
                        ))}
                      </select>
                    </div>
                  </>
                ) : null}

                {/* Property Filters */}
                {filters.category === 'house' || filters.category === 'all' ? (
                  <>
                    <div>
                      <label className="text-[10px] font-medium text-on-surface-variant mb-1.5 block">Property Type</label>
                      <select
                        value={filters.propertyType}
                        onChange={(e) => updateFilter('propertyType', e.target.value)}
                        className="w-full px-2 py-1.5 rounded-lg bg-surface-container-low text-[10px] text-on-surface border border-outline-variant focus:border-primary focus:outline-none appearance-none"
                      >
                        <option value="">All</option>
                        {PROPERTY_TYPES.map((p) => (
                          <option key={p} value={p}>{p}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="text-[10px] font-medium text-on-surface-variant mb-1.5 block">Bedrooms</label>
                      <div className="flex gap-2">
                        <input
                          type="number"
                          value={filters.minBedrooms}
                          onChange={(e) => updateFilter('minBedrooms', e.target.value)}
                          placeholder="Min"
                          className="flex-1 px-2 py-1.5 rounded-lg bg-surface-container-low text-[10px] text-on-surface border border-outline-variant focus:border-primary focus:outline-none"
                        />
                        <input
                          type="number"
                          value={filters.maxBedrooms}
                          onChange={(e) => updateFilter('maxBedrooms', e.target.value)}
                          placeholder="Max"
                          className="flex-1 px-2 py-1.5 rounded-lg bg-surface-container-low text-[10px] text-on-surface border border-outline-variant focus:border-primary focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-[10px] font-medium text-on-surface-variant mb-1.5 block">Furnishing</label>
                      <select
                        value={filters.furnished}
                        onChange={(e) => updateFilter('furnished', e.target.value)}
                        className="w-full px-2 py-1.5 rounded-lg bg-surface-container-low text-[10px] text-on-surface border border-outline-variant focus:border-primary focus:outline-none appearance-none"
                      >
                        <option value="">All</option>
                        {FURNISHING_STATUS.map((f) => (
                          <option key={f} value={f}>{f}</option>
                        ))}
                      </select>
                    </div>
                  </>
                ) : null}
              </div>
            </div>
          )}

          {/* Search Results */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-4">
              <p className="text-xs text-on-surface-variant">
                <span className="font-medium text-on-surface">{MOCK_LISTINGS.length}</span> results found
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {MOCK_LISTINGS.map((listing) => (
                <Link
                  key={listing.id}
                  href={`/property/${listing.id}`}
                  className="bento-card hover:border-primary/50 transition-all group"
                >
                  <div className="aspect-[4/3] rounded-xl bg-surface-container-high mb-3 flex items-center justify-center relative">
                    <span className="material-symbols-outlined text-on-surface-variant text-3xl">
                      {listing.type === 'car' ? 'directions_car' : 'home'}
                    </span>
                    {listing.featured && (
                      <span className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-amber-500 text-white text-[9px] font-semibold flex items-center gap-1">
                        <span className="material-symbols-outlined text-[10px]">star</span>
                        Featured
                      </span>
                    )}
                    <button className="absolute top-2 right-2 w-7 h-7 rounded-full bg-surface/80 backdrop-blur-sm flex items-center justify-center text-on-surface-variant hover:text-error transition-colors">
                      <span className="material-symbols-outlined text-sm">bookmark</span>
                    </button>
                  </div>

                  <div className="space-y-1.5">
                    <div className="flex items-center gap-1.5">
                      <StatusBadge status={listing.listingType === 'sale' ? 'For Sale' : 'For Rent'} />
                      <StatusBadge status={listing.type === 'car' ? 'Vehicle' : 'Property'} />
                    </div>

                    <h3 className="text-sm font-semibold text-on-surface truncate group-hover:text-primary transition-colors">
                      {listing.title}
                    </h3>

                    <p className="text-base font-bold text-primary">{formatPrice(listing.price)}</p>

                    <div className="flex items-center gap-1 text-on-surface-variant">
                      <span className="material-symbols-outlined text-xs">location_on</span>
                      <span className="text-[10px]">{listing.location}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
