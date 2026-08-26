'use client'

import { StatCard } from '@/components/ui/StatCard'
import { StatusBadge } from '@/components/ui/StatusBadge'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'

import Link from 'next/link'
import { useState } from 'react'

const stats = [
  { label: 'Active Listings', value: '12', icon: 'apartment', change: '+2 this month', changeType: 'positive' },
  { label: 'Total Views', value: '8,921', icon: 'visibility', change: '+12% vs last month', changeType: 'positive' },
  { label: 'Inquiries', value: '23', icon: 'mail', change: '5 new', changeType: 'positive' },
  { label: 'Revenue', value: '1.8M ETB', icon: 'payments', change: '+8% vs last month', changeType: 'positive' },
]

const recentInquiries = [
  { id: 1, buyer: 'Abebe Kebede', listing: '2021 Toyota Camry', message: 'Is this still available? Can I schedule a test drive this weekend?', time: '10 min ago', status: 'new' },
  { id: 2, buyer: 'Sara Mohammed', listing: '3BR Villa in Bole', message: 'What is the monthly rent? Is parking included?', time: '1 hour ago', status: 'new' },
  { id: 3, buyer: 'Dawit Tesfaye', listing: '2019 Honda CR-V', message: 'Do you accept trade-ins? Mine is a 2016 Hyundai Tucson.', time: '3 hours ago', status: 'responded' },
  { id: 4, buyer: 'Hana Alemayehu', listing: 'Studio Apartment Kazanchis', message: 'Is the price negotiable? I am a long-term tenant.', time: '5 hours ago', status: 'responded' },
  { id: 5, buyer: 'Yonas Girma', listing: '2022 Mercedes C-Class', message: 'Can you send more interior photos?', time: '1 day ago', status: 'closed' },
]

const topListings = [
  { name: '2021 Toyota Camry', views: 2340 },
  { name: '3BR Villa in Bole', views: 1890 },
  { name: '2022 Mercedes C-Class', views: 1560 },
]

const maxViews = Math.max(...topListings.map((l) => l.views))

export default function SellerDashboard() {
  const [seller] = useState({ name: 'Ato Daniel Tadesse' })

  return (
    <div className="space-y-5">
      <div className="bento-card flex items-center justify-between bg-primary-container p-5">
        <div>
          <h1 className="text-lg font-semibold text-on-primary-container">Welcome back, {seller.name}</h1>
          <p className="text-xs text-on-primary-container/80 mt-1">Manage your listings and track performance</p>
        </div>
        <Link href="/seller/listings/create">
          <Button variant="primary" icon="add">
            Create Listing
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {stats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-3">
        <Card className="lg:col-span-2">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-sm font-semibold text-on-surface">Recent Inquiries</h2>
            <Link href="/seller/inquiries" className="text-xs text-primary hover:underline">
              View All
            </Link>
          </div>
          <div className="space-y-2">
            {recentInquiries.map((inq) => (
              <div
                key={inq.id}
                className="flex items-start gap-3 p-3 rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container text-xs font-semibold shrink-0">
                  {inq.buyer
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-medium text-on-surface">{inq.buyer}</span>
                    <StatusBadge status={inq.status} />
                    <span className="text-[10px] text-on-surface-variant ml-auto whitespace-nowrap">{inq.time}</span>
                  </div>
                  <p className="text-[10px] text-on-surface-variant mt-0.5">Re: {inq.listing}</p>
                  <p className="text-xs text-on-surface-variant truncate mt-0.5">{inq.message}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <div className="space-y-3">
          <Card>
            <h2 className="text-sm font-semibold text-on-surface mb-3">Listing Performance</h2>
            <div className="space-y-2">
              {topListings.map((listing) => (
                <div key={listing.name}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-on-surface truncate pr-2">{listing.name}</span>
                    <span className="text-[10px] text-on-surface-variant shrink-0">{listing.views.toLocaleString()} views</span>
                  </div>
                  <div className="h-1.5 bg-surface-container-low rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full"
                      style={{ width: `${(listing.views / maxViews) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card>
            <h2 className="text-sm font-semibold text-on-surface mb-3">Account Status</h2>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs text-on-surface-variant">Verification</span>
                <StatusBadge status="verified" />
              </div>
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-on-surface-variant">Profile Completion</span>
                  <span className="text-[10px] text-on-surface font-medium">85%</span>
                </div>
                <div className="h-1.5 bg-surface-container-low rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-deep rounded-full" style={{ width: '85%' }} />
                </div>
              </div>
            </div>
          </Card>

          <Card>
            <h2 className="text-sm font-semibold text-on-surface mb-3">Quick Actions</h2>
            <div className="space-y-2">
              <Link href="/seller/listings/create">
                <button className="w-full flex items-center gap-2 p-2.5 rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors text-left">
                  <span className="material-symbols-outlined text-sm text-primary">add_circle</span>
                  <span className="text-xs text-on-surface">Create Listing</span>
                </button>
              </Link>
              <Link href="/seller/inquiries">
                <button className="w-full flex items-center gap-2 p-2.5 rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors text-left">
                  <span className="material-symbols-outlined text-sm text-primary">mail</span>
                  <span className="text-xs text-on-surface">View Inquiries</span>
                </button>
              </Link>
              <Link href="/seller/performance">
                <button className="w-full flex items-center gap-2 p-2.5 rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors text-left">
                  <span className="material-symbols-outlined text-sm text-primary">monitoring</span>
                  <span className="text-xs text-on-surface">Performance</span>
                </button>
              </Link>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
