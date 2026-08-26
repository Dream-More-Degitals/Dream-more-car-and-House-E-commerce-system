'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { StatusBadge } from '@/components/ui/StatusBadge'
import { formatPrice, formatRelativeTime } from '@/lib/utils'

interface FavoriteItem {
  id: string
  title: string
  price: number
  location: string
  type: 'car' | 'house'
  listingType: 'sale' | 'rent'
  image: string
  savedAt: string
  notes?: string
}

const DMOCK_FAVORITES: FavoriteItem[] = [
  {
    id: '1',
    title: 'Toyota Camry 2021 - Low Mileage',
    price: 2800000,
    location: 'Bole, Addis Ababa',
    type: 'car',
    listingType: 'sale',
    image: '/placeholder-car.jpg',
    savedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    notes: 'Check service history',
  },
  {
    id: '2',
    title: 'Modern 3BR Apartment',
    price: 45000,
    location: 'Kazanchis, Addis Ababa',
    type: 'house',
    listingType: 'rent',
    image: '/placeholder-house.jpg',
    savedAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: '3',
    title: 'Hyundai Tucson 2022',
    price: 3500000,
    location: 'Adama, Oromia',
    type: 'car',
    listingType: 'sale',
    image: '/placeholder-car2.jpg',
    savedAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
    notes: 'Good condition, negotiate price',
  },
]

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState<FavoriteItem[]>(DMOCK_FAVORITES)
  const [filter, setFilter] = useState<'all' | 'car' | 'house'>('all')

  const filteredFavorites = filter === 'all'
    ? favorites
    : favorites.filter((f: FavoriteItem) => f.type === filter)

  const removeFavorite = (id: string) => {
    setFavorites((prev: FavoriteItem[]) => prev.filter((f: FavoriteItem) => f.id !== id))
  }

  return (
    <div className="min-h-screen bg-surface">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-surface/80 backdrop-blur-xl border-b border-outline-variant">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/" className="text-on-surface-variant hover:text-on-surface">
              <span className="material-symbols-outlined">arrow_back</span>
            </Link>
            <div>
              <h1 className="text-base font-semibold text-on-surface">My Favorites</h1>
              <p className="text-[10px] text-on-surface-variant">{favorites.length} saved listings</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-4">
        {/* Filters */}
        <div className="flex gap-2 mb-4">
          {[
            { key: 'all', label: 'All', icon: 'bookmark' },
            { key: 'car', label: 'Vehicles', icon: 'directions_car' },
            { key: 'house', label: 'Properties', icon: 'home' },
          ].map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key as typeof filter)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                filter === f.key
                  ? 'bg-primary text-on-primary'
                  : 'bg-surface-container-low text-on-surface-variant hover:bg-surface-container'
              }`}
            >
              <span className="material-symbols-outlined text-sm">{f.icon}</span>
              {f.label}
            </button>
          ))}
        </div>

        {/* Favorites List */}
        {filteredFavorites.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-16 h-16 rounded-full bg-surface-container-low flex items-center justify-center mx-auto mb-4">
              <span className="material-symbols-outlined text-on-surface-variant text-2xl">bookmark_border</span>
            </div>
            <h3 className="text-sm font-medium text-on-surface mb-1">No favorites yet</h3>
            <p className="text-xs text-on-surface-variant mb-4">
              Save listings you like to view them later
            </p>
            <Link href="/search">
              <Button variant="primary" icon="search">Browse Listings</Button>
            </Link>
          </div>
        ) : (
          <div className="space-y-3">
            {filteredFavorites.map((item: FavoriteItem) => (
              <div key={item.id} className="bento-card">
                <div className="flex gap-3">
                  <div className="w-24 h-24 rounded-xl bg-surface-container-high flex-shrink-0 flex items-center justify-center">
                    <span className="material-symbols-outlined text-on-surface-variant">
                      {item.type === 'car' ? 'directions_car' : 'home'}
                    </span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <Link href={`/property/${item.id}`} className="min-w-0">
                        <h3 className="text-sm font-semibold text-on-surface truncate hover:text-primary transition-colors">
                          {item.title}
                        </h3>
                      </Link>
                      <button
                        onClick={() => removeFavorite(item.id)}
                        className="text-on-surface-variant hover:text-error transition-colors flex-shrink-0"
                      >
                        <span className="material-symbols-outlined text-lg">bookmark_remove</span>
                      </button>
                    </div>

                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-sm font-bold text-primary">{formatPrice(item.price)}</span>
                      <StatusBadge status={item.listingType === 'sale' ? 'For Sale' : 'For Rent'} />
                    </div>

                    <div className="flex items-center gap-1 mt-1 text-on-surface-variant">
                      <span className="material-symbols-outlined text-xs">location_on</span>
                      <span className="text-[10px]">{item.location}</span>
                    </div>

                    {item.notes && (
                      <div className="mt-2 p-2 rounded-lg bg-surface-container-low">
                        <p className="text-[10px] text-on-surface-variant italic">
                          <span className="material-symbols-outlined text-xs align-middle mr-1">sticky_note_2</span>
                          {item.notes}
                        </p>
                      </div>
                    )}

                    <p className="text-[10px] text-on-surface-variant mt-1">
                      Saved {formatRelativeTime(item.savedAt)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
