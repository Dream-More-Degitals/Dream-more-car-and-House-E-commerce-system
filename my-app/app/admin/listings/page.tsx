'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { StatusBadge } from '@/components/ui/StatusBadge'

const allListings = [
  { id: 1, type: 'Car' as const, title: '2023 Toyota Land Cruiser 300', price: '18,500,000', seller: 'Abel M.', status: 'Active' as const, date: 'Aug 20', views: 234 },
  { id: 2, type: 'House' as const, title: 'Luxury Villa in Bole', price: '45,000,000', seller: 'Sara T.', status: 'Active' as const, date: 'Aug 18', views: 512 },
  { id: 3, type: 'Car' as const, title: 'Mercedes-Benz G63 AMG', price: '32,000,000', seller: 'Yonas B.', status: 'Pending' as const, date: 'Aug 22', views: 0 },
  { id: 4, type: 'House' as const, title: 'Modern Penthouse in Kazanchis', price: '28,000,000', seller: 'Tigist H.', status: 'Pending' as const, date: 'Aug 25', views: 0 },
  { id: 5, type: 'Car' as const, title: 'Hyundai Tucson Hybrid', price: '6,200,000', seller: 'Kidus T.', status: 'Active' as const, date: 'Aug 15', views: 189 },
  { id: 6, type: 'House' as const, title: 'Entoto Heights Estate', price: '62,000,000', seller: 'Hana G.', status: 'Active' as const, date: 'Aug 12', views: 876 },
  { id: 7, type: 'Car' as const, title: 'Range Rover Velar', price: '14,800,000', seller: 'Dawit A.', status: 'Sold' as const, date: 'Aug 10', views: 445 },
  { id: 8, type: 'Car' as const, title: '2024 BMW X7 xDrive40i', price: '22,000,000', seller: 'Mulugeta D.', status: 'Pending' as const, date: 'Aug 25', views: 0 },
  { id: 9, type: 'House' as const, title: 'Rental Apartment in CMC', price: '35,000/mo', seller: 'Frehiwot N.', status: 'Active' as const, date: 'Aug 8', views: 321 },
  { id: 10, type: 'Car' as const, title: 'Toyota Prado VX', price: '9,500,000', seller: 'Abel M.', status: 'Rejected' as const, date: 'Aug 5', views: 0 },
]

export default function ListingsPage() {
  const [filter, setFilter] = useState('All')
  const [search, setSearch] = useState('')

  const filtered = allListings.filter((l) => {
    const matchStatus = filter === 'All' || l.status === filter
    const matchSearch = l.title.toLowerCase().includes(search.toLowerCase()) || l.seller.toLowerCase().includes(search.toLowerCase())
    return matchStatus && matchSearch
  })

  const counts = {
    All: allListings.length,
    Active: allListings.filter(l => l.status === 'Active').length,
    Pending: allListings.filter(l => l.status === 'Pending').length,
    Sold: allListings.filter(l => l.status === 'Sold').length,
    Rejected: allListings.filter(l => l.status === 'Rejected').length,
  }

  return (
    <div className="space-y-5">
      {/* --- Header --- */}
      <div className="bento-card p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-xl font-bold text-on-surface">Manage Listings</h1>
          <p className="text-[12px] text-on-surface-variant mt-0.5">{allListings.length} total listings across cars and properties.</p>
        </div>
        <Button icon="add">Add Listing</Button>
      </div>

      {/* --- Filter Stats --- */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
        {(['All', 'Active', 'Pending', 'Sold', 'Rejected'] as const).map((s) => (
          <button
            key={s}
            onClick={() => setFilter(s)}
            className={`bento-card p-3 text-center transition-all ${
              filter === s ? 'ring-2 ring-primary bg-primary/5' : ''
            }`}
          >
            <p className="text-lg font-bold text-on-surface">{counts[s]}</p>
            <p className={`text-[10px] font-semibold uppercase tracking-wider ${filter === s ? 'text-primary' : 'text-on-surface-variant'}`}>{s}</p>
          </button>
        ))}
      </div>

      {/* --- Search --- */}
      <div className="bento-card p-3">
        <div className="relative">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]">search</span>
          <input
            className="w-full bg-surface-container-low border-none rounded-xl py-2.5 pl-10 pr-4 text-[13px] focus:outline-none focus:ring-2 focus:ring-primary/20 placeholder:text-outline-variant"
            placeholder="Search by title or seller..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* --- Listings Table --- */}
      <div className="bento-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-[13px]">
            <thead>
              <tr className="border-b border-outline-variant/20">
                <th className="text-left px-5 py-3 font-semibold text-on-surface-variant text-[10px] uppercase tracking-wider">Listing</th>
                <th className="text-left px-5 py-3 font-semibold text-on-surface-variant text-[10px] uppercase tracking-wider">Type</th>
                <th className="text-left px-5 py-3 font-semibold text-on-surface-variant text-[10px] uppercase tracking-wider">Price (ETB)</th>
                <th className="text-left px-5 py-3 font-semibold text-on-surface-variant text-[10px] uppercase tracking-wider">Seller</th>
                <th className="text-left px-5 py-3 font-semibold text-on-surface-variant text-[10px] uppercase tracking-wider">Status</th>
                <th className="text-left px-5 py-3 font-semibold text-on-surface-variant text-[10px] uppercase tracking-wider">Views</th>
                <th className="text-right px-5 py-3 font-semibold text-on-surface-variant text-[10px] uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/15">
              {filtered.map((listing) => (
                <tr key={listing.id} className="hover:bg-surface-container-low/40 transition-colors">
                  <td className="px-5 py-3.5">
                    <p className="font-semibold text-on-surface truncate max-w-[200px]">{listing.title}</p>
                    <p className="text-[10px] text-outline mt-0.5">{listing.date}</p>
                  </td>
                  <td className="px-5 py-3.5">
                    <StatusBadge status={listing.type} variant="type" />
                  </td>
                  <td className="px-5 py-3.5 font-semibold text-on-surface">{listing.price}</td>
                  <td className="px-5 py-3.5 text-on-surface-variant">{listing.seller}</td>
                  <td className="px-5 py-3.5">
                    <StatusBadge status={listing.status} />
                  </td>
                  <td className="px-5 py-3.5 text-on-surface-variant">{listing.views.toLocaleString()}</td>
                  <td className="px-5 py-3.5 text-right">
                    <div className="flex items-center justify-end gap-0.5">
                      <button className="w-7 h-7 rounded-lg flex items-center justify-center text-on-surface-variant hover:bg-surface-container-low hover:text-primary transition-colors">
                        <span className="material-symbols-outlined text-[15px]">visibility</span>
                      </button>
                      <button className="w-7 h-7 rounded-lg flex items-center justify-center text-on-surface-variant hover:bg-surface-container-low hover:text-primary transition-colors">
                        <span className="material-symbols-outlined text-[15px]">edit</span>
                      </button>
                      <button className="w-7 h-7 rounded-lg flex items-center justify-center text-on-surface-variant hover:bg-red-50 hover:text-red-500 transition-colors">
                        <span className="material-symbols-outlined text-[15px]">delete</span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {filtered.length === 0 && (
          <div className="flex flex-col items-center justify-center py-16">
            <span className="material-symbols-outlined text-[40px] mb-2 text-outline">search_off</span>
            <p className="text-[13px] font-medium text-on-surface-variant">No listings found</p>
          </div>
        )}
      </div>

      {/* --- Pagination --- */}
      <div className="flex items-center justify-between text-[12px] text-on-surface-variant">
        <p>Showing <span className="font-semibold text-on-surface">{filtered.length}</span> of {allListings.length}</p>
        <div className="flex items-center gap-1.5">
          <button className="px-3 py-1.5 rounded-lg border border-outline-variant/50 hover:bg-surface-container-low transition-colors font-medium" disabled>Prev</button>
          <span className="px-3 py-1.5 bg-primary-container text-on-primary-container rounded-lg text-[11px] font-bold">1</span>
          <button className="px-3 py-1.5 rounded-lg border border-outline-variant/50 hover:bg-surface-container-low transition-colors font-medium" disabled>Next</button>
        </div>
      </div>
    </div>
  )
}
