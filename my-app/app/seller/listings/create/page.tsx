'use client'

import { Button } from '@/components/ui/Button'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function CreateListingStep1() {
  const router = useRouter()
  const [listingType, setListingType] = useState<'car' | 'house' | null>(null)
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const [location, setLocation] = useState('')
  const [description, setDescription] = useState('')

  const steps = [
    { num: 1, label: 'Basic Info', active: true },
    { num: 2, label: 'Details', active: false },
    { num: 3, label: 'Media', active: false },
  ]

  const handleNext = () => {
    if (!listingType || !title || !price) return
    localStorage.setItem(
      'listing-creation',
      JSON.stringify({ type: listingType, title, price, location, description })
    )
    router.push('/seller/listings/create/details')
  }

  return (
    <div className="space-y-5">
      <h1 className="text-lg font-semibold text-on-surface">Create New Listing</h1>

      <div className="flex items-center gap-2">
        {steps.map((step, i) => (
          <div key={step.num} className="flex items-center gap-2">
            <div
              className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold ${
                step.active
                  ? 'bg-primary text-on-primary'
                  : step.num < 1
                    ? 'bg-emerald-deep text-white'
                    : 'bg-surface-container-low text-on-surface-variant'
              }`}
            >
              {step.num < 1 ? (
                <span className="material-symbols-outlined text-sm">check</span>
              ) : (
                step.num
              )}
            </div>
            <span className={`text-xs ${step.active ? 'text-on-surface font-medium' : 'text-on-surface-variant'}`}>
              {step.label}
            </span>
            {i < steps.length - 1 && <div className="w-8 h-px bg-outline-variant mx-2" />}
          </div>
        ))}
      </div>

      <div className="bento-card">
        <h2 className="text-sm font-semibold text-on-surface mb-4">Listing Type</h2>
        <div className="grid grid-cols-2 gap-3 mb-5">
          <button
            onClick={() => setListingType('car')}
            className={`p-5 rounded-xl border-2 transition-all flex flex-col items-center gap-2 ${
              listingType === 'car'
                ? 'border-primary bg-primary-container/30'
                : 'border-outline-variant bg-surface-container-low hover:border-on-surface-variant'
            }`}
          >
            <span className="material-symbols-outlined text-3xl text-primary">directions_car</span>
            <span className="text-xs font-semibold text-on-surface">Car</span>
          </button>
          <button
            onClick={() => setListingType('house')}
            className={`p-5 rounded-xl border-2 transition-all flex flex-col items-center gap-2 ${
              listingType === 'house'
                ? 'border-primary bg-primary-container/30'
                : 'border-outline-variant bg-surface-container-low hover:border-on-surface-variant'
            }`}
          >
            <span className="material-symbols-outlined text-3xl text-primary">apartment</span>
            <span className="text-xs font-semibold text-on-surface">House</span>
          </button>
        </div>

        <h2 className="text-sm font-semibold text-on-surface mb-3">Basic Information</h2>
        <div className="space-y-3">
          <div>
            <label className="text-[10px] text-on-surface-variant mb-1 block">Title *</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. 2021 Toyota Camry SE"
              className="w-full px-3 py-2 rounded-xl bg-surface-container-low text-xs text-on-surface placeholder:text-on-surface-variant border border-outline-variant focus:border-primary focus:outline-none"
            />
          </div>
          <div>
            <label className="text-[10px] text-on-surface-variant mb-1 block">Price *</label>
            <div className="flex">
              <input
                type="text"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="e.g. 2,800,000"
                className="flex-1 px-3 py-2 rounded-l-xl bg-surface-container-low text-xs text-on-surface placeholder:text-on-surface-variant border border-outline-variant focus:border-primary focus:outline-none"
              />
              <span className="px-3 py-2 rounded-r-xl bg-surface-container text-xs text-on-surface-variant border border-l-0 border-outline-variant">
                ETB
              </span>
            </div>
          </div>
          <div>
            <label className="text-[10px] text-on-surface-variant mb-1 block">Location</label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="e.g. Bole, Addis Ababa"
              className="w-full px-3 py-2 rounded-xl bg-surface-container-low text-xs text-on-surface placeholder:text-on-surface-variant border border-outline-variant focus:border-primary focus:outline-none"
            />
          </div>
          <div>
            <label className="text-[10px] text-on-surface-variant mb-1 block">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
              placeholder="Describe your listing..."
              className="w-full px-3 py-2 rounded-xl bg-surface-container-low text-xs text-on-surface placeholder:text-on-surface-variant border border-outline-variant focus:border-primary focus:outline-none resize-none"
            />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <Link href="/seller/listings">
          <Button variant="outline">Cancel</Button>
        </Link>
        <Button variant="primary" icon="arrow_forward" onClick={handleNext}>
          Next Step
        </Button>
      </div>
    </div>
  )
}
