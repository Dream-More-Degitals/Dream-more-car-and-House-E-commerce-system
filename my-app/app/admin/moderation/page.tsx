'use client'

import { useState } from 'react'
import AdminSidebar from '@/components/layout/AdminSidebar'
import Topbar from '@/components/layout/Topbar'
import { Button } from '@/components/ui/Button'
import { StatusBadge } from '@/components/ui/StatusBadge'
import { formatPrice, formatDate, getInitials } from '@/lib/utils'

type ModerationStatus = 'pending' | 'approved' | 'rejected'

interface ListingForModeration {
  id: string
  title: string
  price: number
  type: 'car' | 'house'
  listingType: 'sale' | 'rent'
  sellerName: string
  sellerEmail: string
  location: string
  submittedAt: string
  status: ModerationStatus
  rejectionReason?: string
  imageUrl?: string
}

const MOCK_LISTINGS: ListingForModeration[] = [
  {
    id: 'l1',
    title: 'Toyota Camry 2021 - Low Mileage',
    price: 2800000,
    type: 'car',
    listingType: 'sale',
    sellerName: 'Abebe Kebede',
    sellerEmail: 'abebe@example.com',
    location: 'Bole, Addis Ababa',
    submittedAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
    status: 'pending',
  },
  {
    id: 'l2',
    title: 'Modern 3BR Apartment for Rent',
    price: 45000,
    type: 'house',
    listingType: 'rent',
    sellerName: 'Hanna Tesfaye',
    sellerEmail: 'hanna@example.com',
    location: 'Kazanchis, Addis Ababa',
    submittedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    status: 'pending',
  },
  {
    id: 'l3',
    title: 'Mercedes-Benz C-Class 2023',
    price: 5500000,
    type: 'car',
    listingType: 'sale',
    sellerName: 'Dawit Alemayehu',
    sellerEmail: 'dawit@example.com',
    location: 'Old Airport, Addis Ababa',
    submittedAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
    status: 'pending',
  },
  {
    id: 'l4',
    title: 'Luxury Villa with Pool',
    price: 150000,
    type: 'house',
    listingType: 'rent',
    sellerName: 'Sara Mohammed',
    sellerEmail: 'sara@example.com',
    location: 'Bole, Addis Ababa',
    submittedAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    status: 'approved',
  },
  {
    id: 'l5',
    title: 'Honda CR-V 2019 - Good Condition',
    price: 1800000,
    type: 'car',
    listingType: 'sale',
    sellerName: 'Unknown Seller',
    sellerEmail: 'unknown@example.com',
    location: 'Adama, Oromia',
    submittedAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
    status: 'rejected',
    rejectionReason: 'Listing contains misleading price information.',
  },
]

export default function AdminModerationPage() {
  const [listings, setListings] = useState<ListingForModeration[]>(MOCK_LISTINGS)
  const [filter, setFilter] = useState<'all' | ModerationStatus>('all')
  const [selectedListing, setSelectedListing] = useState<ListingForModeration | null>(null)
  const [rejectReason, setRejectReason] = useState('')
  const [showRejectModal, setShowRejectModal] = useState(false)

  const filtered = filter === 'all' ? listings : listings.filter(l => l.status === filter)
  const pendingCount = listings.filter(l => l.status === 'pending').length

  const handleApprove = (id: string) => {
    setListings(prev =>
      prev.map(l => (l.id === id ? { ...l, status: 'approved' as const } : l))
    )
    setSelectedListing(null)
  }

  const handleReject = (id: string) => {
    if (!rejectReason.trim()) return
    setListings(prev =>
      prev.map(l =>
        l.id === id ? { ...l, status: 'rejected' as const, rejectionReason: rejectReason } : l
      )
    )
    setRejectReason('')
    setShowRejectModal(false)
    setSelectedListing(null)
  }

  return (
    <div className="flex min-h-screen bg-surface">
      <AdminSidebar />
      <div className="flex-1 ml-64">
        <Topbar title="Listing Moderation" subtitle="Review and approve pending listings" />
        <main className="p-6">
          {/* Stats */}
          <div className="grid grid-cols-4 gap-4 mb-6">
            {[
              { label: 'Total Listings', value: listings.length, icon: 'list', color: 'text-blue-600' },
              { label: 'Pending Review', value: pendingCount, icon: 'pending', color: 'text-amber-600' },
              { label: 'Approved', value: listings.filter(l => l.status === 'approved').length, icon: 'check_circle', color: 'text-emerald-600' },
              { label: 'Rejected', value: listings.filter(l => l.status === 'rejected').length, icon: 'cancel', color: 'text-red-600' },
            ].map((stat) => (
              <div key={stat.label} className="bento-card">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-surface-container-low flex items-center justify-center">
                    <span className={`material-symbols-outlined text-xl ${stat.color}`}>{stat.icon}</span>
                  </div>
                  <div>
                    <p className="text-lg font-bold text-on-surface">{stat.value}</p>
                    <p className="text-[10px] text-on-surface-variant">{stat.label}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Filter Tabs */}
          <div className="flex gap-2 mb-4">
            {(['all', 'pending', 'approved', 'rejected'] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-3 py-1.5 rounded-full text-[10px] font-medium transition-colors ${
                  filter === f
                    ? 'bg-primary text-on-primary'
                    : 'bg-surface-container-low text-on-surface-variant hover:bg-surface-container'
                }`}
              >
                {f.charAt(0).toUpperCase() + f.slice(1)}
                {f === 'pending' && pendingCount > 0 && (
                  <span className="ml-1 w-4 h-4 rounded-full bg-amber-500 text-white text-[8px] inline-flex items-center justify-center">
                    {pendingCount}
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Listings Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((listing) => (
              <div key={listing.id} className="bento-card">
                <div className="aspect-[4/3] rounded-xl bg-surface-container-high mb-3 flex items-center justify-center relative">
                  <span className="material-symbols-outlined text-on-surface-variant text-3xl">
                    {listing.type === 'car' ? 'directions_car' : 'home'}
                  </span>
                  <div className="absolute top-2 left-2 flex gap-1">
                    <StatusBadge status={listing.listingType === 'sale' ? 'For Sale' : 'For Rent'} />
                    <StatusBadge status={listing.type === 'car' ? 'Vehicle' : 'Property'} />
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-sm font-semibold text-on-surface truncate">{listing.title}</h3>
                  <p className="text-sm font-bold text-primary">{formatPrice(listing.price)}</p>

                  <div className="flex items-center gap-1 text-on-surface-variant">
                    <span className="material-symbols-outlined text-xs">location_on</span>
                    <span className="text-[10px]">{listing.location}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-[8px] font-semibold text-primary">{getInitials(listing.sellerName)}</span>
                    </div>
                    <span className="text-[10px] text-on-surface-variant">{listing.sellerName}</span>
                  </div>

                  <p className="text-[9px] text-on-surface-variant">Submitted {formatDate(listing.submittedAt)}</p>

                  <div className="flex items-center gap-2 pt-2">
                    <StatusBadge status={listing.status.charAt(0).toUpperCase() + listing.status.slice(1)} />
                    {listing.status === 'pending' && (
                      <div className="flex gap-1 ml-auto">
                        <button
                          onClick={() => handleApprove(listing.id)}
                          className="w-7 h-7 rounded-lg flex items-center justify-center text-emerald-600 hover:bg-emerald-50"
                          title="Approve"
                        >
                          <span className="material-symbols-outlined text-sm">check_circle</span>
                        </button>
                        <button
                          onClick={() => { setSelectedListing(listing); setShowRejectModal(true); }}
                          className="w-7 h-7 rounded-lg flex items-center justify-center text-red-600 hover:bg-red-50"
                          title="Reject"
                        >
                          <span className="material-symbols-outlined text-sm">cancel</span>
                        </button>
                        <button
                          onClick={() => setSelectedListing(listing)}
                          className="w-7 h-7 rounded-lg flex items-center justify-center text-on-surface-variant hover:bg-surface-container"
                          title="View Details"
                        >
                          <span className="material-symbols-outlined text-sm">visibility</span>
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Detail Modal */}
          {selectedListing && !showRejectModal && (
            <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4" onClick={() => setSelectedListing(null)}>
              <div className="bg-surface rounded-2xl w-full max-w-lg p-6 space-y-4" onClick={(e) => e.stopPropagation()}>
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-semibold text-on-surface">Listing Details</h3>
                  <button onClick={() => setSelectedListing(null)} className="text-on-surface-variant">
                    <span className="material-symbols-outlined">close</span>
                  </button>
                </div>

                <div className="space-y-3">
                  <div className="aspect-[16/9] rounded-xl bg-surface-container-high flex items-center justify-center">
                    <span className="material-symbols-outlined text-on-surface-variant text-3xl">
                      {selectedListing.type === 'car' ? 'directions_car' : 'home'}
                    </span>
                  </div>

                  <div className="flex gap-2">
                    <StatusBadge status={selectedListing.listingType === 'sale' ? 'For Sale' : 'For Rent'} />
                    <StatusBadge status={selectedListing.type === 'car' ? 'Vehicle' : 'Property'} />
                    <StatusBadge status={selectedListing.status.charAt(0).toUpperCase() + selectedListing.status.slice(1)} />
                  </div>

                  <h2 className="text-base font-semibold text-on-surface">{selectedListing.title}</h2>
                  <p className="text-lg font-bold text-primary">{formatPrice(selectedListing.price)}</p>

                  <div className="p-3 rounded-xl bg-surface-container-low space-y-2">
                    <div className="flex justify-between">
                      <span className="text-[10px] text-on-surface-variant">Seller</span>
                      <span className="text-[10px] font-medium text-on-surface">{selectedListing.sellerName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[10px] text-on-surface-variant">Email</span>
                      <span className="text-[10px] font-medium text-on-surface">{selectedListing.sellerEmail}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[10px] text-on-surface-variant">Location</span>
                      <span className="text-[10px] font-medium text-on-surface">{selectedListing.location}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[10px] text-on-surface-variant">Submitted</span>
                      <span className="text-[10px] font-medium text-on-surface">{formatDate(selectedListing.submittedAt)}</span>
                    </div>
                  </div>

                  {selectedListing.rejectionReason && (
                    <div className="p-3 rounded-xl bg-error/5 border border-error/20">
                      <p className="text-[10px] font-medium text-error mb-1">Rejection Reason</p>
                      <p className="text-[10px] text-on-surface">{selectedListing.rejectionReason}</p>
                    </div>
                  )}
                </div>

                {selectedListing.status === 'pending' && (
                  <div className="flex gap-2">
                    <Button
                      variant="primary"
                      icon="check_circle"
                      className="flex-1 bg-emerald-600 hover:bg-emerald-700"
                      onClick={() => handleApprove(selectedListing.id)}
                    >
                      Approve
                    </Button>
                    <Button
                      variant="danger"
                      icon="cancel"
                      className="flex-1"
                      onClick={() => setShowRejectModal(true)}
                    >
                      Reject
                    </Button>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Reject Modal */}
          {showRejectModal && selectedListing && (
            <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4" onClick={() => { setShowRejectModal(false); setRejectReason(''); }}>
              <div className="bg-surface rounded-2xl w-full max-w-md p-6 space-y-4" onClick={(e) => e.stopPropagation()}>
                <h3 className="text-sm font-semibold text-on-surface">Reject Listing</h3>
                <p className="text-xs text-on-surface-variant">
                  Please provide a reason for rejecting &quot;{selectedListing.title}&quot;
                </p>
                <textarea
                  value={rejectReason}
                  onChange={(e) => setRejectReason(e.target.value)}
                  placeholder="Enter rejection reason..."
                  rows={3}
                  className="w-full px-3 py-2 rounded-xl bg-surface-container-low text-xs text-on-surface placeholder:text-on-surface-variant border border-outline-variant focus:border-primary focus:outline-none resize-none"
                />
                <div className="flex gap-2">
                  <Button variant="outline" className="flex-1" onClick={() => { setShowRejectModal(false); setRejectReason(''); }}>
                    Cancel
                  </Button>
                  <Button
                    variant="danger"
                    icon="cancel"
                    className="flex-1"
                    onClick={() => handleReject(selectedListing.id)}
                    disabled={!rejectReason.trim()}
                  >
                    Reject
                  </Button>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}
