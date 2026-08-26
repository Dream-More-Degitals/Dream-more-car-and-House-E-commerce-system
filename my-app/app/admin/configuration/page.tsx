'use client'

import { useState } from 'react'
import AdminSidebar from '@/components/layout/AdminSidebar'
import Topbar from '@/components/layout/Topbar'
import { Button } from '@/components/ui/Button'

interface SystemConfig {
  listingExpiry: {
    vehicle: number
    property: number
  }
  maxListingsPerSeller: number
  maxMessagesPerHour: number
  sessionTimeout: number
  premiumListingMaxPercent: number
  featuredRotationHours: number
  newAccountWaitingPeriod: number
  verificationValidity: number
  maxLoginAttempts: number
  lockoutDuration: number
}

const DEFAULT_CONFIG: SystemConfig = {
  listingExpiry: { vehicle: 60, property: 90 },
  maxListingsPerSeller: 50,
  maxMessagesPerHour: 20,
  sessionTimeout: 45,
  premiumListingMaxPercent: 20,
  featuredRotationHours: 24,
  newAccountWaitingPeriod: 24,
  verificationValidity: 12,
  maxLoginAttempts: 5,
  lockoutDuration: 15,
}

function ConfigField({
  label,
  value,
  onChange,
  unit,
  description,
}: {
  label: string
  value: number
  onChange: (val: number) => void
  unit: string
  description?: string
}) {
  return (
    <div className="flex items-center justify-between py-2">
      <div>
        <p className="text-xs font-medium text-on-surface">{label}</p>
        {description && <p className="text-[10px] text-on-surface-variant">{description}</p>}
      </div>
      <div className="flex items-center gap-1">
        <input
          type="number"
          value={value}
          onChange={(e) => onChange(parseInt(e.target.value) || 0)}
          className="w-16 px-2 py-1.5 rounded-lg bg-surface-container-low text-xs text-on-surface text-right border border-outline-variant focus:border-primary focus:outline-none"
        />
        <span className="text-[10px] text-on-surface-variant w-8">{unit}</span>
      </div>
    </div>
  )
}

export default function AdminConfigurationPage() {
  const [config, setConfig] = useState<SystemConfig>(DEFAULT_CONFIG)
  const [saved, setSaved] = useState(false)

  const updateConfig = (section: keyof SystemConfig, key: string, value: number) => {
    setConfig(prev => {
      if (section === 'listingExpiry') {
        return { ...prev, listingExpiry: { ...prev.listingExpiry, [key]: value } }
      }
      return { ...prev, [key]: value }
    })
    setSaved(false)
  }

  const handleSave = async () => {
    await new Promise(r => setTimeout(r, 500))
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  const handleReset = () => {
    setConfig(DEFAULT_CONFIG)
    setSaved(false)
  }

  return (
    <div className="flex min-h-screen bg-surface">
      <AdminSidebar />
      <div className="flex-1 ml-64">
        <Topbar title="System Configuration" subtitle="Configure platform settings and limits" />
        <main className="p-6 max-w-3xl mx-auto space-y-6">
          {saved && (
            <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center gap-2">
              <span className="material-symbols-outlined text-emerald-600 text-sm">check_circle</span>
              <span className="text-xs text-emerald-700">Configuration saved successfully</span>
            </div>
          )}

          <div className="bento-card space-y-1">
            <h3 className="text-sm font-semibold text-on-surface mb-2 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-lg">list</span>
              Listing Configuration
            </h3>
            <ConfigField label="Vehicle Listing Expiry" value={config.listingExpiry.vehicle} onChange={(val) => updateConfig('listingExpiry', 'vehicle', val)} unit="days" description="Automatically expire vehicle listings after this period" />
            <ConfigField label="Property Listing Expiry" value={config.listingExpiry.property} onChange={(val) => updateConfig('listingExpiry', 'property', val)} unit="days" description="Automatically expire property listings after this period" />
            <ConfigField label="Max Active Listings per Seller" value={config.maxListingsPerSeller} onChange={(val) => updateConfig('maxListingsPerSeller', 'maxListingsPerSeller', val)} unit="listings" />
          </div>

          <div className="bento-card space-y-1">
            <h3 className="text-sm font-semibold text-on-surface mb-2 flex items-center gap-2">
              <span className="material-symbols-outlined text-amber-600 text-lg">star</span>
              Premium & Featured Listings
            </h3>
            <ConfigField label="Max Premium Listings in Results" value={config.premiumListingMaxPercent} onChange={(val) => updateConfig('premiumListingMaxPercent', 'premiumListingMaxPercent', val)} unit="%" description="Maximum percentage of premium listings in search results" />
            <ConfigField label="Featured Rotation Period" value={config.featuredRotationHours} onChange={(val) => updateConfig('featuredRotationHours', 'featuredRotationHours', val)} unit="hours" description="How often featured listings rotate for equal visibility" />
          </div>

          <div className="bento-card space-y-1">
            <h3 className="text-sm font-semibold text-on-surface mb-2 flex items-center gap-2">
              <span className="material-symbols-outlined text-blue-600 text-lg">group</span>
              User & Session Management
            </h3>
            <ConfigField label="Session Timeout" value={config.sessionTimeout} onChange={(val) => updateConfig('sessionTimeout', 'sessionTimeout', val)} unit="min" description="Auto-logout after inactivity" />
            <ConfigField label="New Account Waiting Period" value={config.newAccountWaitingPeriod} onChange={(val) => updateConfig('newAccountWaitingPeriod', 'newAccountWaitingPeriod', val)} unit="hours" description="Waiting period before new accounts can create listings" />
            <ConfigField label="Max Messages per Hour" value={config.maxMessagesPerHour} onChange={(val) => updateConfig('maxMessagesPerHour', 'maxMessagesPerHour', val)} unit="/hour" description="Spam prevention limit" />
          </div>

          <div className="bento-card space-y-1">
            <h3 className="text-sm font-semibold text-on-surface mb-2 flex items-center gap-2">
              <span className="material-symbols-outlined text-red-600 text-lg">shield</span>
              Security Settings
            </h3>
            <ConfigField label="Max Login Attempts" value={config.maxLoginAttempts} onChange={(val) => updateConfig('maxLoginAttempts', 'maxLoginAttempts', val)} unit="attempts" description="Before temporary lockout" />
            <ConfigField label="Lockout Duration" value={config.lockoutDuration} onChange={(val) => updateConfig('lockoutDuration', 'lockoutDuration', val)} unit="min" description="Duration of account lockout after max attempts" />
            <ConfigField label="Verification Validity" value={config.verificationValidity} onChange={(val) => updateConfig('verificationValidity', 'verificationValidity', val)} unit="months" description="After which re-verification is required" />
          </div>

          <div className="flex gap-3">
            <Button variant="primary" icon="save" onClick={handleSave}>Save Configuration</Button>
            <Button variant="outline" icon="restart_alt" onClick={handleReset}>Reset to Defaults</Button>
          </div>
        </main>
      </div>
    </div>
  )
}
