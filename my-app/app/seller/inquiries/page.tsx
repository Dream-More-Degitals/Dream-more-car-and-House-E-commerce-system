'use client'

import { Card } from '@/components/ui/Card'
import { StatusBadge } from '@/components/ui/StatusBadge'
import { Button } from '@/components/ui/Button'
import { useState } from 'react'

type FilterStatus = 'all' | 'new' | 'responded' | 'closed'

interface Inquiry {
  id: number
  buyer: string
  initials: string
  listing: string
  message: string
  time: string
  status: string
}

const inquiries: Inquiry[] = [
  {
    id: 1,
    buyer: 'Abebe Kebede',
    initials: 'AK',
    listing: '2021 Toyota Camry SE',
    message: 'Is this still available? Can I schedule a test drive this weekend?',
    time: '10 min ago',
    status: 'new',
  },
  {
    id: 2,
    buyer: 'Sara Mohammed',
    initials: 'SM',
    listing: '3BR Villa in Bole',
    message: 'What is the monthly rent? Is parking included? Also, are pets allowed?',
    time: '1 hour ago',
    status: 'new',
  },
  {
    id: 3,
    buyer: 'Dawit Tesfaye',
    initials: 'DT',
    listing: '2022 Mercedes C200',
    message: 'Do you accept trade-ins? Mine is a 2016 Hyundai Tucson in good condition.',
    time: '3 hours ago',
    status: 'responded',
  },
  {
    id: 4,
    buyer: 'Hana Alemayehu',
    initials: 'HA',
    listing: 'Studio Apartment Kazanchis',
    message: 'Is the price negotiable? I am a long-term tenant, 3+ years commitment.',
    time: '5 hours ago',
    status: 'responded',
  },
  {
    id: 5,
    buyer: 'Yonas Girma',
    initials: 'YG',
    listing: '2019 Honda CR-V',
    message: 'Can you send more interior photos? Also, has it been in any accidents?',
    time: '1 day ago',
    status: 'closed',
  },
  {
    id: 6,
    buyer: 'Meron Tadesse',
    initials: 'MT',
    listing: '2020 Hyundai Tucson',
    message: 'What is the final price? Can we meet this week to see the car in person?',
    time: '2 days ago',
    status: 'closed',
  },
]

const filterTabs: { label: string; value: FilterStatus }[] = [
  { label: 'All', value: 'all' },
  { label: 'New', value: 'new' },
  { label: 'Responded', value: 'responded' },
  { label: 'Closed', value: 'closed' },
]

export default function InquiriesPage() {
  const [activeFilter, setActiveFilter] = useState<FilterStatus>('all')
  const [replyingTo, setReplyingTo] = useState<number | null>(null)
  const [replyText, setReplyText] = useState('')

  const filtered = activeFilter === 'all' ? inquiries : inquiries.filter((i) => i.status === activeFilter)

  return (
    <div className="space-y-5">
      <h1 className="text-lg font-semibold text-on-surface">Inquiries</h1>

      <div className="flex gap-1 bg-surface-container-low rounded-xl p-1 w-fit">
        {filterTabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setActiveFilter(tab.value)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
              activeFilter === tab.value
                ? 'bg-primary text-on-primary'
                : 'text-on-surface-variant hover:bg-surface-container'
            }`}
          >
            {tab.label}
            {tab.value === 'new' && (
              <span className="ml-1 w-4 h-4 inline-flex items-center justify-center rounded-full bg-error text-[9px] text-white">
                {inquiries.filter((i) => i.status === 'new').length}
              </span>
            )}
          </button>
        ))}
      </div>

      <div className="space-y-3">
        {filtered.map((inq) => (
          <Card key={inq.id}>
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container text-xs font-semibold shrink-0">
                {inq.initials}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-semibold text-on-surface">{inq.buyer}</span>
                  <StatusBadge status={inq.status} />
                  <span className="text-[10px] text-on-surface-variant ml-auto">{inq.time}</span>
                </div>
                <div className="flex items-center gap-1 mb-1.5">
                  <span className="material-symbols-outlined text-xs text-on-surface-variant">apartment</span>
                  <span className="text-[10px] text-primary font-medium">{inq.listing}</span>
                </div>
                <p className="text-xs text-on-surface-variant leading-relaxed">{inq.message}</p>

                {replyingTo === inq.id ? (
                  <div className="mt-3 space-y-2">
                    <textarea
                      value={replyText}
                      onChange={(e) => setReplyText(e.target.value)}
                      rows={3}
                      placeholder="Type your reply..."
                      className="w-full px-3 py-2 rounded-xl bg-surface-container-low text-xs text-on-surface placeholder:text-on-surface-variant border border-outline-variant focus:border-primary focus:outline-none resize-none"
                    />
                    <div className="flex gap-2">
                      <Button
                        variant="primary"
                        size="sm"
                        icon="send"
                        onClick={() => {
                          setReplyingTo(null)
                          setReplyText('')
                        }}
                      >
                        Send Reply
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => { setReplyingTo(null); setReplyText('') }}
                      >
                        Cancel
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="mt-2">
                    <Button
                      variant="outline"
                      size="sm"
                      icon="reply"
                      onClick={() => setReplyingTo(inq.id)}
                    >
                      Reply
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-12">
          <span className="material-symbols-outlined text-4xl text-on-surface-variant">inbox</span>
          <p className="text-sm text-on-surface-variant mt-2">No inquiries found</p>
        </div>
      )}
    </div>
  )
}
