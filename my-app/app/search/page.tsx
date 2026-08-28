'use client'

import { useState } from 'react'
import Link from 'next/link'
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
  make: string
  model: string
  minYear: string
  maxYear: string
  fuelType: string
  transmission: string
  bodyType: string
  condition: string
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
  const [showFilters, setShowFilters] = useState(true)
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

  const filterInputClass = "w-full px-3 py-2 rounded-xl bg-gray-50 text-[12px] text-gray-800 border border-gray-100 focus:border-emerald-deep/40 focus:bg-white focus:ring-2 focus:ring-emerald-deep/10 outline-none transition-all"
  const filterLabelClass = "text-[11px] font-semibold text-gray-500 uppercase tracking-wider mb-1.5 block"

  return (
    <div className="min-h-screen bg-white">
      {/* ── Search Header ── */}
      <div className="sticky top-0 z-20 bg-white/90 backdrop-blur-xl border-b border-gray-100">
        <div className="max-w-[1200px] mx-auto px-6 py-3">
          <div className="flex items-center gap-3">
            <Link href="/" className="p-2 rounded-xl hover:bg-gray-50 text-gray-400 hover:text-gray-600 transition-colors">
              <span className="material-symbols-outlined text-[20px]">arrow_back</span>
            </Link>

            <div className="flex-1 relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-[18px]">search</span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search properties, vehicles, locations..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-gray-50 text-[13px] text-gray-800 placeholder:text-gray-400 border border-gray-100 focus:border-emerald-deep/30 focus:bg-white focus:ring-2 focus:ring-emerald-deep/10 outline-none transition-all"
              />
            </div>

            {/* Active filter chips */}
            {activeFilterCount > 0 && (
              <span className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-deep/10 text-emerald-deep text-[11px] font-semibold">
                {activeFilterCount} filters active
                <button onClick={clearFilters} className="hover:text-emerald-deep/70">
                  <span className="material-symbols-outlined text-[14px]">close</span>
                </button>
              </span>
            )}

            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`p-2.5 rounded-xl transition-all ${showFilters ? 'bg-emerald-deep text-white shadow-md shadow-emerald-deep/20' : 'bg-gray-50 text-gray-500 hover:bg-gray-100'}`}
            >
              <span className="material-symbols-outlined text-[20px]">tune</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 py-6">
        <div className="flex gap-8">
          {/* ── Filter Sidebar ── */}
          {showFilters && (
            <aside className="w-64 flex-shrink-0 space-y-5 animate-fade-in-up">
              <div className="flex items-center justify-between">
                <h3 className="text-[13px] font-bold text-gray-900">Filters</h3>
                <button onClick={clearFilters} className="text-[11px] font-medium text-emerald-deep hover:text-emerald-deep/70 transition-colors">
                  Clear all
                </button>
              </div>

              {/* Category */}
              <div>
                <label className={filterLabelClass}>Category</label>
                <div className="flex gap-1 p-1 bg-gray-50 rounded-xl">
                  {[
                    { key: 'all', label: 'All' },
                    { key: 'car', label: 'Vehicles' },
                    { key: 'house', label: 'Properties' },
                  ].map((c) => (
                    <button
                      key={c.key}
                      onClick={() => updateFilter('category', c.key)}
                      className={`flex-1 py-2 rounded-lg text-[11px] font-semibold transition-all duration-200 ${
                        filters.category === c.key
                          ? 'bg-emerald-deep text-white shadow-md shadow-emerald-deep/20'
                          : 'text-gray-500 hover:text-gray-700'
                      }`}
                    >
                      {c.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Listing Type */}
              <div>
                <label className={filterLabelClass}>Listing Type</label>
                <div className="flex gap-1 p-1 bg-gray-50 rounded-xl">
                  {[
                    { key: 'all', label: 'All' },
                    { key: 'sale', label: 'For Sale' },
                    { key: 'rent', label: 'For Rent' },
                  ].map((t) => (
                    <button
                      key={t.key}
                      onClick={() => updateFilter('listingType', t.key)}
                      className={`flex-1 py-2 rounded-lg text-[11px] font-semibold transition-all duration-200 ${
                        filters.listingType === t.key
                          ? 'bg-emerald-deep text-white shadow-md shadow-emerald-deep/20'
                          : 'text-gray-500 hover:text-gray-700'
                      }`}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <label className={filterLabelClass}>Price Range (Br)</label>
                <div className="flex gap-2">
                  <input
                    type="number"
                    value={filters.minPrice}
                    onChange={(e) => updateFilter('minPrice', e.target.value)}
                    placeholder="Min"
                    className={filterInputClass}
                  />
                  <input
                    type="number"
                    value={filters.maxPrice}
                    onChange={(e) => updateFilter('maxPrice', e.target.value)}
                    placeholder="Max"
                    className={filterInputClass}
                  />
                </div>
              </div>

              {/* Location */}
              <div>
                <label className={filterLabelClass}>Region</label>
                <select
                  value={filters.location}
                  onChange={(e) => { updateFilter('location', e.target.value); updateFilter('city', ''); }}
                  className={filterInputClass}
                >
                  <option value="">All Regions</option>
                  {ethiopianRegions.map((r) => (
                    <option key={r.name} value={r.name}>{r.name}</option>
                  ))}
                </select>
              </div>

              {filters.location && (
                <div>
                  <label className={filterLabelClass}>City</label>
                  <select
                    value={filters.city}
                    onChange={(e) => updateFilter('city', e.target.value)}
                    className={filterInputClass}
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
                <label className={filterLabelClass}>Sort By</label>
                <select
                  value={filters.sortBy}
                  onChange={(e) => updateFilter('sortBy', e.target.value)}
                  className={filterInputClass}
                >
                  <option value="relevance">Relevance</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="newest">Newest First</option>
                  <option value="oldest">Oldest First</option>
                </select>
              </div>

              <div className="divider-glow" />

              {/* Vehicle Filters */}
              {(filters.category === 'car' || filters.category === 'all') && (
                <div className="space-y-4">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Vehicle Details</span>
                  <div>
                    <label className={filterLabelClass}>Make</label>
                    <select value={filters.make} onChange={(e) => updateFilter('make', e.target.value)} className={filterInputClass}>
                      <option value="">All Makes</option>
                      {VEHICLE_MAKES.map((m) => <option key={m} value={m}>{m}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className={filterLabelClass}>Year Range</label>
                    <div className="flex gap-2">
                      <input type="number" value={filters.minYear} onChange={(e) => updateFilter('minYear', e.target.value)} placeholder="From" className={filterInputClass} />
                      <input type="number" value={filters.maxYear} onChange={(e) => updateFilter('maxYear', e.target.value)} placeholder="To" className={filterInputClass} />
                    </div>
                  </div>
                  <div>
                    <label className={filterLabelClass}>Fuel Type</label>
                    <select value={filters.fuelType} onChange={(e) => updateFilter('fuelType', e.target.value)} className={filterInputClass}>
                      <option value="">All</option>
                      {FUEL_TYPES.map((f) => <option key={f} value={f}>{f}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className={filterLabelClass}>Transmission</label>
                    <select value={filters.transmission} onChange={(e) => updateFilter('transmission', e.target.value)} className={filterInputClass}>
                      <option value="">All</option>
                      {TRANSMISSIONS.map((t) => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className={filterLabelClass}>Body Type</label>
                    <select value={filters.bodyType} onChange={(e) => updateFilter('bodyType', e.target.value)} className={filterInputClass}>
                      <option value="">All</option>
                      {BODY_TYPES.map((b) => <option key={b} value={b}>{b}</option>)}
                    </select>
                  </div>
                </div>
              )}

              {/* Property Filters */}
              {(filters.category === 'house' || filters.category === 'all') && (
                <div className="space-y-4">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Property Details</span>
                  <div>
                    <label className={filterLabelClass}>Property Type</label>
                    <select value={filters.propertyType} onChange={(e) => updateFilter('propertyType', e.target.value)} className={filterInputClass}>
                      <option value="">All</option>
                      {PROPERTY_TYPES.map((p) => <option key={p} value={p}>{p}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className={filterLabelClass}>Bedrooms</label>
                    <div className="flex gap-2">
                      <input type="number" value={filters.minBedrooms} onChange={(e) => updateFilter('minBedrooms', e.target.value)} placeholder="Min" className={filterInputClass} />
                      <input type="number" value={filters.maxBedrooms} onChange={(e) => updateFilter('maxBedrooms', e.target.value)} placeholder="Max" className={filterInputClass} />
                    </div>
                  </div>
                  <div>
                    <label className={filterLabelClass}>Furnishing</label>
                    <select value={filters.furnished} onChange={(e) => updateFilter('furnished', e.target.value)} className={filterInputClass}>
                      <option value="">All</option>
                      {FURNISHING_STATUS.map((f) => <option key={f} value={f}>{f}</option>)}
                    </select>
                  </div>
                </div>
              )}
            </aside>
          )}

          {/* ── Results ── */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-5">
              <p className="text-[13px] text-gray-500">
                <span className="font-bold text-gray-900">{MOCK_LISTINGS.length}</span> results found
              </p>
            </div>

            <div className={`grid grid-cols-1 sm:grid-cols-2 ${showFilters ? 'lg:grid-cols-2' : 'lg:grid-cols-3'} gap-5 stagger-children`}>
              {MOCK_LISTINGS.map((listing) => (
                <Link
                  key={listing.id}
                  href={`/property/${listing.id}`}
                  className="premium-card group"
                >
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden rounded-t-[19px]">
                    <div className="card-image absolute inset-0 bg-gray-100 flex items-center justify-center">
                      <span className="material-symbols-outlined text-gray-300 text-[40px]">
                        {listing.type === 'car' ? 'directions_car' : 'home'}
                      </span>
                    </div>
                    {listing.featured && (
                      <span className="absolute top-3 left-3 badge-featured px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                        <span className="material-symbols-outlined text-[12px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                        Featured
                      </span>
                    )}
                    <button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-gray-500 hover:text-red-500 hover:bg-white transition-all shadow-sm" onClick={(e) => e.preventDefault()}>
                      <span className="material-symbols-outlined text-[18px]">bookmark</span>
                    </button>
                    <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent">
                      <span className="text-white text-[18px] font-extrabold">{formatPrice(listing.price)}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider ${
                        listing.listingType === 'sale' ? 'badge-sale' : 'badge-rent'
                      }`}>
                        {listing.listingType === 'sale' ? 'For Sale' : 'For Rent'}
                      </span>
                      <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider ${
                        listing.type === 'car' ? 'bg-blue-50 text-blue-700' : 'bg-emerald-50 text-emerald-700'
                      }`}>
                        {listing.type === 'car' ? 'Vehicle' : 'Property'}
                      </span>
                    </div>
                    <h3 className="text-[14px] font-bold text-gray-900 mb-1 truncate group-hover:text-emerald-deep transition-colors">
                      {listing.title}
                    </h3>
                    <p className="text-[12px] text-gray-500 flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">location_on</span>
                      {listing.location}
                    </p>
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
