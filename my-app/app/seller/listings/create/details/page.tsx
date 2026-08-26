'use client'

import { Button } from '@/components/ui/Button'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

function getInitialState() {
  if (typeof window === 'undefined') return 'car'
  const stored = localStorage.getItem('listing-creation')
  if (stored) {
    const data = JSON.parse(stored)
    return data.type as 'car' | 'house'
  }
  return 'car'
}

export default function CreateListingStep2() {
  const router = useRouter()
  const [listingType] = useState<'car' | 'house'>(getInitialState)
  const [form, setForm] = useState<Record<string, string>>({})

  const updateField = (key: string, value: string) => setForm((prev) => ({ ...prev, [key]: value }))

  const carFields = [
    { key: 'year', label: 'Year *', placeholder: 'e.g. 2021', type: 'text' },
    { key: 'make', label: 'Make *', placeholder: 'e.g. Toyota', type: 'text' },
    { key: 'model', label: 'Model *', placeholder: 'e.g. Camry', type: 'text' },
    { key: 'mileage', label: 'Mileage', placeholder: 'e.g. 45,000 km', type: 'text' },
    { key: 'fuelType', label: 'Fuel Type', placeholder: 'Select fuel type', type: 'select', options: ['Gasoline', 'Diesel', 'Hybrid', 'Electric'] },
    { key: 'transmission', label: 'Transmission', placeholder: 'Select transmission', type: 'select', options: ['Automatic', 'Manual'] },
    { key: 'color', label: 'Color', placeholder: 'e.g. Silver', type: 'text' },
    { key: 'engineSize', label: 'Engine Size', placeholder: 'e.g. 2.5L', type: 'text' },
  ]

  const houseFields = [
    { key: 'bedrooms', label: 'Bedrooms *', placeholder: 'e.g. 3', type: 'text' },
    { key: 'bathrooms', label: 'Bathrooms *', placeholder: 'e.g. 2', type: 'text' },
    { key: 'sqft', label: 'Square Footage', placeholder: 'e.g. 2,500 sq ft', type: 'text' },
    { key: 'lotSize', label: 'Lot Size', placeholder: 'e.g. 500 sqm', type: 'text' },
    { key: 'yearBuilt', label: 'Year Built', placeholder: 'e.g. 2018', type: 'text' },
    { key: 'garage', label: 'Garage', placeholder: 'Select option', type: 'select', options: ['None', '1 Car', '2 Car', '3+ Car'] },
    { key: 'furnished', label: 'Furnished', placeholder: '', type: 'toggle' },
  ]

  const fields = listingType === 'car' ? carFields : houseFields

  const handleNext = () => {
    const stored = localStorage.getItem('listing-creation')
    const data = stored ? JSON.parse(stored) : {}
    localStorage.setItem('listing-creation', JSON.stringify({ ...data, details: form }))
    router.push('/seller/listings/create/media')
  }

  const steps = [
    { num: 1, label: 'Basic Info', active: false, done: true },
    { num: 2, label: 'Details', active: true },
    { num: 3, label: 'Media', active: false },
  ]

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
        <h2 className="text-sm font-semibold text-on-surface mb-4">
          {listingType === 'car' ? 'Car Details' : 'Property Details'}
        </h2>
        <div className="grid grid-cols-2 gap-3">
          {fields.map((field) => (
            <div key={field.key}>
              <label className="text-[10px] text-on-surface-variant mb-1 block">{field.label}</label>
              {field.type === 'select' ? (
                <select
                  value={form[field.key] || ''}
                  onChange={(e) => updateField(field.key, e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-surface-container-low text-xs text-on-surface border border-outline-variant focus:border-primary focus:outline-none appearance-none"
                >
                  <option value="">{field.placeholder}</option>
                  {field.options?.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              ) : field.type === 'toggle' ? (
                <button
                  onClick={() => updateField(field.key, form[field.key] === 'yes' ? 'no' : 'yes')}
                  className={`flex items-center gap-2 px-3 py-2 rounded-xl border text-xs ${
                    form[field.key] === 'yes'
                      ? 'bg-primary/10 border-primary text-primary'
                      : 'bg-surface-container-low border-outline-variant text-on-surface-variant'
                  }`}
                >
                  <span className={`material-symbols-outlined text-sm ${form[field.key] === 'yes' ? 'text-primary' : ''}`}>
                    toggle_{form[field.key] === 'yes' ? 'on' : 'off'}
                  </span>
                  {form[field.key] === 'yes' ? 'Yes' : 'No'}
                </button>
              ) : (
                <input
                  type="text"
                  value={form[field.key] || ''}
                  onChange={(e) => updateField(field.key, e.target.value)}
                  placeholder={field.placeholder}
                  className="w-full px-3 py-2 rounded-xl bg-surface-container-low text-xs text-on-surface placeholder:text-on-surface-variant border border-outline-variant focus:border-primary focus:outline-none"
                />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between">
        <Link href="/seller/listings/create">
          <Button variant="outline" icon="arrow_back">Back</Button>
        </Link>
        <Button variant="primary" icon="arrow_forward" onClick={handleNext}>Next Step</Button>
      </div>
    </div>
  )
}
