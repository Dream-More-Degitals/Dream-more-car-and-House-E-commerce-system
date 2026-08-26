'use client'

import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { StatusBadge } from '@/components/ui/StatusBadge'
import Link from 'next/link'
import { useState } from 'react'

type Status = 'active' | 'pending' | 'draft' | 'sold'

interface Listing {
  id: number
  title: string
  price: string
  status: Status
  views: number
  inquiries: number
  thumbnail: string
  type: 'car' | 'house'
}

const allListings: Listing[] = [
  { id: 1, title: '2021 Toyota Camry SE', price: '2,800,000 ETB', status: 'active', views: 2340, inquiries: 8, thumbnail: '', type: 'car' },
  { id: 2, title: '3BR Villa in Bole', price: '45,000 ETB/mo', status: 'active', views: 1890, inquiries: 5, thumbnail: '', type: 'house' },
  { id: 3, title: '2022 Mercedes C200', price: '5,200,000 ETB', status: 'active', views: 1560, inquiries: 3, thumbnail: '', type: 'car' },
  { id: 4, title: 'Studio Apartment Kazanchis', price: '18,000 ETB/mo', status: 'active', views: 980, inquiries: 2, thumbnail: '', type: 'house' },
  { id: 5, title: '2019 Honda CR-V', price: '3,100,000 ETB', status: 'pending', views: 670, inquiries: 1, thumbnail: '', type: 'car' },
  { id: 6, title: '2BR Condo in Mekelle', price: '2,400,000 ETB', status: 'draft', views: 0, inquiries: 0, thumbnail: '', type: 'house' },
  { id: 7, title: '2020 Hyundai Tucson', price: '2,900,000 ETB', status: 'sold', views: 3120, inquiries: 12, thumbnail: '', type: 'car' },
  { id: 8, title: '4BR House in Addis Ketema', price: '18,000,000 ETB', status: 'active', views: 450, inquiries: 2, thumbnail: '', type: 'house' },
]

const tabs: { label: string; value: string }[] = [
  { label: 'All', value: 'all' },
  { label: 'Active', value: 'active' },
  { label: 'Pending', value: 'pending' },
  { label: 'Draft', value: 'draft' },
  { label: 'Sold', value: 'sold' },
]

export default function ListingsPage() {
  const [activeTab, setActiveTab] = useState('all')

  const filtered = activeTab === 'all' ? allListings : allListings.filter((l) => l.status === activeTab)

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold text-on-surface">My Listings</h1>
        <Link href="/seller/listings/create">
          <Button variant="primary" icon="add">
            Create New Listing
          </Button>
        </Link>
      </div>

      <div className="flex gap-1 bg-surface-container-low rounded-xl p-1 w-fit">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setActiveTab(tab.value)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
              activeTab === tab.value
                ? 'bg-primary text-on-primary'
                : 'text-on-surface-variant hover:bg-surface-container'
            }`}
          >
            {tab.label}
            {tab.value !== 'all' && (
              <span className="ml-1 text-[10px]">
                ({allListings.filter((l) => l.status === tab.value).length})
              </span>
            )}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
        {filtered.map((listing) => (
          <Card key={listing.id} className="overflow-hidden">
            <div className="h-32 bg-surface-container-low rounded-lg mb-3 flex items-center justify-center">
              <span className="material-symbols-outlined text-3xl text-on-surface-variant">
                {listing.type === 'car' ? 'directions_car' : 'apartment'}
              </span>
            </div>
            <div className="space-y-2">
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-xs font-semibold text-on-surface leading-tight">{listing.title}</h3>
                <StatusBadge status={listing.status} />
              </div>
              <p className="text-sm font-bold text-primary">{listing.price}</p>
              <div className="flex items-center gap-3 text-[10px] text-on-surface-variant">
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-xs">visibility</span>
                  {listing.views.toLocaleString()}
                </span>
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-xs">mail</span>
                  {listing.inquiries}
                </span>
              </div>
              <div className="flex gap-2 pt-1">
                <Button variant="outline" size="sm" icon="edit">
                  Edit
                </Button>
                <Button variant="outline" size="sm" icon="delete" className="text-error">
                  Delete
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-12">
          <span className="material-symbols-outlined text-4xl text-on-surface-variant">inventory_2</span>
          <p className="text-sm text-on-surface-variant mt-2">No listings found</p>
        </div>
      )}
    </div>
  )
}
