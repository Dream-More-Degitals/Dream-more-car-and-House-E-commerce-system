'use client'

import { Button } from '@/components/ui/Button'
import Link from 'next/link'
import { useState } from 'react'

export default function CreateListingStep3() {
  const [images, setImages] = useState<string[]>([])
  const [primaryIndex, setPrimaryIndex] = useState(0)
  const [submitted, setSubmitted] = useState(false)
  const [isDragging, setIsDragging] = useState(false)

  const steps = [
    { num: 1, label: 'Basic Info', active: false, done: true },
    { num: 2, label: 'Details', active: false, done: true },
    { num: 3, label: 'Media', active: true },
  ]

  const addPlaceholderImages = () => {
    const placeholders = [
      'Car front view',
      'Car side profile',
      'Interior dashboard',
      'Engine bay',
      'Trunk space',
    ]
    const available = placeholders.filter((p) => !images.includes(p))
    if (available.length > 0) {
      setImages((prev) => [...prev, available[0]])
    }
  }

  const removeImage = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index))
    if (primaryIndex >= images.length - 1 && primaryIndex > 0) {
      setPrimaryIndex(primaryIndex - 1)
    }
  }

  const handleSubmit = () => {
    const stored = localStorage.getItem('listing-creation')
    const data = stored ? JSON.parse(stored) : {}
    localStorage.setItem('listing-creation', JSON.stringify({ ...data, media: { images, primaryIndex } }))
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="space-y-5">
        <h1 className="text-lg font-semibold text-on-surface">Create New Listing</h1>
        <div className="bento-card flex flex-col items-center py-12 text-center">
          <div className="w-16 h-16 rounded-full bg-emerald-deep/10 flex items-center justify-center mb-4">
            <span className="material-symbols-outlined text-3xl text-emerald-deep">check_circle</span>
          </div>
          <h2 className="text-base font-semibold text-on-surface mb-1">Listing Submitted!</h2>
          <p className="text-xs text-on-surface-variant max-w-xs">
            Your listing has been submitted for review. It will be visible to buyers within 24 hours.
          </p>
          <div className="flex gap-3 mt-6">
            <Link href="/seller/listings">
              <Button variant="outline">View My Listings</Button>
            </Link>
            <Link href="/seller/listings/create">
              <Button variant="primary" onClick={() => { localStorage.removeItem('listing-creation') }}>
                Create Another
              </Button>
            </Link>
          </div>
        </div>
      </div>
    )
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
                  : step.done
                    ? 'bg-emerald-deep text-white'
                    : 'bg-surface-container-low text-on-surface-variant'
              }`}
            >
              {step.done ? (
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
        <h2 className="text-sm font-semibold text-on-surface mb-4">Upload Photos</h2>

        <div
          onDragOver={(e) => { e.preventDefault(); setIsDragging(true) }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={(e) => { e.preventDefault(); setIsDragging(false); addPlaceholderImages() }}
          onClick={addPlaceholderImages}
          className={`border-2 border-dashed rounded-xl p-8 flex flex-col items-center justify-center cursor-pointer transition-colors ${
            isDragging ? 'border-primary bg-primary/5' : 'border-outline-variant hover:border-on-surface-variant'
          }`}
        >
          <span className="material-symbols-outlined text-3xl text-on-surface-variant mb-2">cloud_upload</span>
          <p className="text-xs text-on-surface font-medium">Click or drag to upload photos</p>
          <p className="text-[10px] text-on-surface-variant mt-1">JPG, PNG up to 10MB each</p>
        </div>

        {images.length > 0 && (
          <div className="mt-4">
            <div className="flex items-center justify-between mb-2">
              <p className="text-xs text-on-surface-variant">
                {images.length} photo{images.length !== 1 ? 's' : ''} uploaded
              </p>
              <p className="text-[10px] text-primary">Click star to set primary</p>
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-2">
              {images.map((img, idx) => (
                <div
                  key={idx}
                  className={`relative rounded-xl overflow-hidden aspect-square border-2 transition-colors ${
                    idx === primaryIndex ? 'border-primary' : 'border-transparent'
                  } bg-surface-container-low flex items-center justify-center`}
                >
                  <div className="text-center">
                    <span className="material-symbols-outlined text-xl text-on-surface-variant">image</span>
                    <p className="text-[10px] text-on-surface-variant mt-0.5">{img}</p>
                  </div>
                  <button
                    onClick={(e) => { e.stopPropagation(); setPrimaryIndex(idx) }}
                    className="absolute top-1 left-1"
                  >
                    <span
                      className={`material-symbols-outlined text-sm ${
                        idx === primaryIndex ? 'text-primary' : 'text-on-surface-variant'
                      }`}
                    >
                      star
                    </span>
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); removeImage(idx) }}
                    className="absolute top-1 right-1 w-4 h-4 rounded-full bg-error flex items-center justify-center"
                  >
                    <span className="material-symbols-outlined text-[10px] text-white">close</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mt-4 p-3 rounded-xl bg-surface-container-low">
          <p className="text-[10px] text-on-surface-variant">
            <span className="material-symbols-outlined text-xs align-middle mr-1">info</span>
            The first photo will be used as the listing cover. You can upload up to 20 photos.
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <Link href="/seller/listings/create/details">
          <Button variant="outline" icon="arrow_back">
            Back
          </Button>
        </Link>
        <Button
          variant="primary"
          icon="check"
          onClick={handleSubmit}
          disabled={images.length === 0}
        >
          Submit Listing
        </Button>
      </div>
    </div>
  )
}
