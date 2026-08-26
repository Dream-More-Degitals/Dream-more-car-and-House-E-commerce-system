'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'
import SellerSidebar from '@/components/layout/SellerSidebar'
import Topbar from '@/components/layout/Topbar'
import { Button } from '@/components/ui/Button'
import { StatusBadge } from '@/components/ui/StatusBadge'
import { formatDate } from '@/lib/utils'
import { useAuth } from '@/context/auth-context'

type VerificationStep = 'select' | 'upload' | 'submitted' | 'verified'

type DocumentType = 'national_id' | 'passport' | 'business_license'

interface UploadedDocument {
  type: DocumentType
  frontImage: string | null
  backImage: string | null
  documentNumber: string
}

const DOCUMENT_TYPES = [
  {
    key: 'national_id' as const,
    title: 'National ID Card',
    description: 'Ethiopian national identification card',
    icon: 'badge',
    fields: ['front', 'back'],
  },
  {
    key: 'passport' as const,
    title: 'Passport',
    description: 'Valid Ethiopian passport',
    icon: 'flight',
    fields: ['front'],
  },
  {
    key: 'business_license' as const,
    title: 'Business License',
    description: 'Valid business registration license',
    icon: 'corporate_fare',
    fields: ['front', 'back'],
  },
]

export default function SellerVerificationPage() {
  const { user } = useAuth()
  const [step, setStep] = useState<VerificationStep>(
    user?.isVerified ? 'verified' : 'select'
  )
  const [selectedDocType, setSelectedDocType] = useState<DocumentType | null>(null)
  const [document, setDocument] = useState<UploadedDocument>({
    type: 'national_id',
    frontImage: null,
    backImage: null,
    documentNumber: '',
  })
  const frontInputRef = useRef<HTMLInputElement>(null)
  const backInputRef = useRef<HTMLInputElement>(null)

  const handleDocTypeSelect = (type: DocumentType) => {
    setSelectedDocType(type)
    setDocument(prev => ({ ...prev, type }))
    setStep('upload')
  }

  const handleImageUpload = (side: 'front' | 'back', e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        alert('File size must be less than 10MB')
        return
      }
      const reader = new FileReader()
      reader.onload = (event) => {
        const result = event.target?.result as string
        if (side === 'front') {
          setDocument(prev => ({ ...prev, frontImage: result }))
        } else {
          setDocument(prev => ({ ...prev, backImage: result }))
        }
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = async () => {
    // Simulate submission
    await new Promise(r => setTimeout(r, 1500))
    setStep('submitted')
  }

  const docType = DOCUMENT_TYPES.find(d => d.key === selectedDocType)

  return (
    <div className="flex min-h-screen bg-surface">
      <SellerSidebar />
      <div className="flex-1 ml-64">
        <Topbar title="Seller Verification" subtitle="Verify your identity to earn a verified badge" />
        <main className="p-6 max-w-2xl mx-auto">
          {/* Verified State */}
          {step === 'verified' && (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto">
                <span className="material-symbols-outlined text-emerald-600 text-3xl">verified</span>
              </div>
              <h2 className="text-lg font-semibold text-on-surface">You are Verified!</h2>
              <p className="text-sm text-on-surface-variant">
                Your identity has been verified. You have a verified seller badge on your listings.
              </p>
              <div className="bento-card max-w-sm mx-auto">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                    <span className="material-symbols-outlined text-emerald-600 text-xl">verified</span>
                  </div>
                  <div className="text-left">
                    <p className="text-xs font-semibold text-on-surface">Verified Seller</p>
                    <p className="text-[10px] text-on-surface-variant">Valid for 12 months</p>
                  </div>
                </div>
              </div>
              <Link href="/seller">
                <Button variant="primary" icon="home">Back to Dashboard</Button>
              </Link>
            </div>
          )}

          {/* Submitted State */}
          {step === 'submitted' && (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center mx-auto">
                <span className="material-symbols-outlined text-amber-600 text-3xl">pending</span>
              </div>
              <h2 className="text-lg font-semibold text-on-surface">Verification Submitted</h2>
              <p className="text-sm text-on-surface-variant">
                Your documents have been submitted for review. This usually takes 1-2 business days.
              </p>
              <div className="bento-card max-w-sm mx-auto space-y-2">
                <div className="flex justify-between">
                  <span className="text-[10px] text-on-surface-variant">Document Type</span>
                  <span className="text-[10px] font-medium text-on-surface">{docType?.title}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[10px] text-on-surface-variant">Submitted</span>
                  <span className="text-[10px] font-medium text-on-surface">{formatDate(new Date())}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[10px] text-on-surface-variant">Status</span>
                  <StatusBadge status="Pending" />
                </div>
              </div>
              <Link href="/seller">
                <Button variant="outline" icon="home">Back to Dashboard</Button>
              </Link>
            </div>
          )}

          {/* Select Document Type */}
          {step === 'select' && (
            <div className="space-y-4">
              <div className="bento-card">
                <h2 className="text-sm font-semibold text-on-surface mb-1">Why Verify?</h2>
                <p className="text-[10px] text-on-surface-variant mb-4">
                  Verified sellers get a badge on their profile and listings, building trust with buyers.
                </p>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { icon: 'verified', label: 'Trust Badge', desc: 'Build buyer confidence' },
                    { icon: 'trending_up', label: 'More Views', desc: 'Listings get 40% more views' },
                    { icon: 'priority_high', label: 'Priority Support', desc: 'Faster customer support' },
                  ].map((benefit) => (
                    <div key={benefit.label} className="p-3 rounded-xl bg-surface-container-low text-center">
                      <span className="material-symbols-outlined text-primary text-xl mb-1">{benefit.icon}</span>
                      <p className="text-[10px] font-semibold text-on-surface">{benefit.label}</p>
                      <p className="text-[9px] text-on-surface-variant">{benefit.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <h3 className="text-xs font-semibold text-on-surface">Select Document Type</h3>
              <div className="space-y-2">
                {DOCUMENT_TYPES.map((dt) => (
                  <button
                    key={dt.key}
                    onClick={() => handleDocTypeSelect(dt.key)}
                    className="w-full bento-card text-left hover:border-primary/50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                        <span className="material-symbols-outlined text-primary text-xl">{dt.icon}</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xs font-semibold text-on-surface">{dt.title}</h4>
                        <p className="text-[10px] text-on-surface-variant">{dt.description}</p>
                      </div>
                      <span className="material-symbols-outlined text-on-surface-variant">chevron_right</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Upload Step */}
          {step === 'upload' && docType && (
            <div className="space-y-4">
              <button
                onClick={() => setStep('select')}
                className="flex items-center gap-1 text-xs text-on-surface-variant hover:text-on-surface"
              >
                <span className="material-symbols-outlined text-sm">arrow_back</span>
                Back to document types
              </button>

              <div className="bento-card">
                <h2 className="text-sm font-semibold text-on-surface mb-4">
                  Upload {docType.title}
                </h2>

                {/* Document Number */}
                <div className="mb-4">
                  <label className="text-[11px] font-medium text-on-surface-variant mb-1.5 block">
                    Document Number
                  </label>
                  <input
                    type="text"
                    value={document.documentNumber}
                    onChange={(e) => setDocument(prev => ({ ...prev, documentNumber: e.target.value }))}
                    placeholder="Enter document number"
                    className="w-full px-3 py-2.5 rounded-xl bg-surface-container-low text-sm text-on-surface placeholder:text-on-surface-variant border border-outline-variant focus:border-primary focus:outline-none"
                  />
                </div>

                {/* Front Image */}
                <div className="mb-4">
                  <label className="text-[11px] font-medium text-on-surface-variant mb-1.5 block">
                    Front of Document *
                  </label>
                  <input
                    ref={frontInputRef}
                    type="file"
                    accept="image/jpeg,image/png,image/webp"
                    onChange={(e) => handleImageUpload('front', e)}
                    className="hidden"
                  />
                  <button
                    onClick={() => frontInputRef.current?.click()}
                    className={`w-full aspect-[16/9] rounded-xl border-2 border-dashed transition-colors flex items-center justify-center ${
                      document.frontImage
                        ? 'border-emerald-300 bg-emerald-50'
                        : 'border-outline-variant hover:border-primary bg-surface-container-low'
                    }`}
                  >
                    {document.frontImage ? (
                      <div className="text-center">
                        <span className="material-symbols-outlined text-emerald-600 text-2xl">check_circle</span>
                        <p className="text-[10px] text-emerald-600 font-medium mt-1">Image uploaded</p>
                        <p className="text-[9px] text-on-surface-variant">Click to change</p>
                      </div>
                    ) : (
                      <div className="text-center">
                        <span className="material-symbols-outlined text-on-surface-variant text-2xl">upload</span>
                        <p className="text-[10px] text-on-surface-variant mt-1">Click to upload front of document</p>
                        <p className="text-[9px] text-on-surface-variant">JPEG, PNG or WebP (max 10MB)</p>
                      </div>
                    )}
                  </button>
                </div>

                {/* Back Image (if needed) */}
                {docType.fields.includes('back') && (
                  <div className="mb-4">
                    <label className="text-[11px] font-medium text-on-surface-variant mb-1.5 block">
                      Back of Document *
                    </label>
                    <input
                      ref={backInputRef}
                      type="file"
                      accept="image/jpeg,image/png,image/webp"
                      onChange={(e) => handleImageUpload('back', e)}
                      className="hidden"
                    />
                    <button
                      onClick={() => backInputRef.current?.click()}
                      className={`w-full aspect-[16/9] rounded-xl border-2 border-dashed transition-colors flex items-center justify-center ${
                        document.backImage
                          ? 'border-emerald-300 bg-emerald-50'
                          : 'border-outline-variant hover:border-primary bg-surface-container-low'
                      }`}
                    >
                      {document.backImage ? (
                        <div className="text-center">
                          <span className="material-symbols-outlined text-emerald-600 text-2xl">check_circle</span>
                          <p className="text-[10px] text-emerald-600 font-medium mt-1">Image uploaded</p>
                          <p className="text-[9px] text-on-surface-variant">Click to change</p>
                        </div>
                      ) : (
                        <div className="text-center">
                          <span className="material-symbols-outlined text-on-surface-variant text-2xl">upload</span>
                          <p className="text-[10px] text-on-surface-variant mt-1">Click to upload back of document</p>
                          <p className="text-[9px] text-on-surface-variant">JPEG, PNG or WebP (max 10MB)</p>
                        </div>
                      )}
                    </button>
                  </div>
                )}
              </div>

              <div className="bento-card bg-amber-50 border-amber-200">
                <div className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-amber-600 text-sm mt-0.5">info</span>
                  <div>
                    <p className="text-[10px] font-medium text-amber-800">Important</p>
                    <ul className="text-[9px] text-amber-700 mt-1 space-y-0.5">
                      <li>• Ensure all text on the document is clearly visible</li>
                      <li>• Document must not be expired</li>
                      <li>• Name on document must match your profile name</li>
                      <li>• Processing takes 1-2 business days</li>
                    </ul>
                  </div>
                </div>
              </div>

              <Button
                variant="primary"
                className="w-full"
                icon="upload"
                onClick={handleSubmit}
                disabled={!document.frontImage || !document.documentNumber || (docType.fields.includes('back') && !document.backImage)}
              >
                Submit for Verification
              </Button>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}
