'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/Button'
import { useAuth } from '@/context/auth-context'

type PaymentMethod = 'chapa' | 'telebirr' | 'cbe'
type PaymentStep = 'select' | 'confirm' | 'processing' | 'success' | 'failed'

interface PaymentDetails {
  title: string
  description: string
  amount: number
  type: 'premium_listing' | 'bump_up' | 'featured' | 'transaction_fee'
}

const PAYMENT_SERVICES: PaymentDetails[] = [
  { title: 'Premium Listing', description: 'Get priority placement in search results', amount: 500, type: 'premium_listing' },
  { title: 'Featured Badge', description: 'Display featured badge on your listing', amount: 300, type: 'featured' },
  { title: 'Bump Up', description: 'Move your listing to the top of results', amount: 150, type: 'bump_up' },
]

export default function PaymentPage() {
  const router = useRouter()
  const { } = useAuth()
  const [selectedService, setSelectedService] = useState<PaymentDetails | null>(null)
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('chapa')
  const [step, setStep] = useState<PaymentStep>('select')
  const [phoneNumber, setPhoneNumber] = useState('+251')
  const [processing, setProcessing] = useState(false)
  const [transactionId] = useState(() => Date.now().toString(36).toUpperCase())

  const handlePay = async () => {
    if (!selectedService) return
    setStep('processing')
    setProcessing(true)

    // Simulate payment processing
    await new Promise(r => setTimeout(r, 2000))

    // Simulate 90% success rate
    if (Math.random() > 0.1) {
      setStep('success')
    } else {
      setStep('failed')
    }
    setProcessing(false)
  }

  if (step === 'success' && selectedService) {
    return (
      <div className="min-h-screen bg-surface flex items-center justify-center p-4">
        <div className="w-full max-w-md text-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto">
            <span className="material-symbols-outlined text-emerald-600 text-3xl">check_circle</span>
          </div>
          <h2 className="text-lg font-semibold text-on-surface">Payment Successful!</h2>
          <p className="text-sm text-on-surface-variant">
            {selectedService.title} has been activated for your account.
          </p>
          <div className="bento-card space-y-2">
            <div className="flex justify-between">
              <span className="text-xs text-on-surface-variant">Service</span>
              <span className="text-xs font-medium text-on-surface">{selectedService.title}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-xs text-on-surface-variant">Amount Paid</span>
              <span className="text-xs font-medium text-primary">{formatPrice(selectedService.amount)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-xs text-on-surface-variant">Payment Method</span>
              <span className="text-xs font-medium text-on-surface capitalize">{paymentMethod}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-xs text-on-surface-variant">Transaction ID</span>
              <span className="text-xs font-medium text-on-surface">TXN-{transactionId}</span>
            </div>
          </div>
          <Link href="/seller">
            <Button variant="primary" className="w-full" icon="home">
              Back to Dashboard
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  if (step === 'failed') {
    return (
      <div className="min-h-screen bg-surface flex items-center justify-center p-4">
        <div className="w-full max-w-md text-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mx-auto">
            <span className="material-symbols-outlined text-red-600 text-3xl">cancel</span>
          </div>
          <h2 className="text-lg font-semibold text-on-surface">Payment Failed</h2>
          <p className="text-sm text-on-surface-variant">
            There was an issue processing your payment. Please try again.
          </p>
          <div className="flex gap-2">
            <Button variant="outline" className="flex-1" onClick={() => setStep('select')}>
              Try Again
            </Button>
            <Link href="/seller" className="flex-1">
              <Button variant="primary" className="w-full">Back to Dashboard</Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-surface">
      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-xl font-bold text-on-surface">Payment</h1>
          <p className="text-sm text-on-surface-variant mt-1">Complete your payment to activate services</p>
        </div>

        {/* Step Indicator */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold ${
            step === 'select' || step === 'confirm' ? 'bg-primary text-on-primary' : 'bg-surface-container-low text-on-surface-variant'
          }`}>1</div>
          <div className="w-12 h-px bg-outline-variant" />
          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold ${
            step === 'confirm' ? 'bg-primary text-on-primary' : 'bg-surface-container-low text-on-surface-variant'
          }`}>2</div>
        </div>

        {/* Step 1: Select Service */}
        {step === 'select' && (
          <div className="space-y-4">
            <h2 className="text-sm font-semibold text-on-surface">Select a Service</h2>
            <div className="space-y-3">
              {PAYMENT_SERVICES.map((service) => (
                <button
                  key={service.type}
                  onClick={() => { setSelectedService(service); setStep('confirm'); }}
                  className="w-full bento-card text-left hover:border-primary/50 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                        <span className="material-symbols-outlined text-primary text-xl">
                          {service.type === 'premium_listing' ? 'star' : service.type === 'featured' ? 'emoji_events' : 'trending_up'}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-on-surface">{service.title}</h3>
                        <p className="text-[10px] text-on-surface-variant">{service.description}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold text-primary">{formatPrice(service.amount)}</p>
                      <span className="material-symbols-outlined text-on-surface-variant text-sm">chevron_right</span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Confirm & Pay */}
        {step === 'confirm' && selectedService && (
          <div className="space-y-6">
            <button onClick={() => setStep('select')} className="flex items-center gap-1 text-xs text-on-surface-variant hover:text-on-surface">
              <span className="material-symbols-outlined text-sm">arrow_back</span>
              Back to services
            </button>

            <div className="bento-card">
              <h2 className="text-sm font-semibold text-on-surface mb-3">Order Summary</h2>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-xs text-on-surface-variant">Service</span>
                  <span className="text-xs font-medium text-on-surface">{selectedService.title}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs text-on-surface-variant">Description</span>
                  <span className="text-xs text-on-surface-variant">{selectedService.description}</span>
                </div>
                <div className="border-t border-outline-variant pt-2 flex justify-between">
                  <span className="text-xs font-semibold text-on-surface">Total</span>
                  <span className="text-sm font-bold text-primary">{formatPrice(selectedService.amount)}</span>
                </div>
              </div>
            </div>

            <div className="bento-card">
              <h2 className="text-sm font-semibold text-on-surface mb-3">Payment Method</h2>
              <div className="space-y-2">
                {[
                  { key: 'chapa' as const, name: 'Chapa', icon: 'account_balance_wallet', desc: 'Pay with Chapa' },
                  { key: 'telebirr' as const, name: 'Telebirr', icon: 'phone_iphone', desc: 'Pay with Telebirr' },
                  { key: 'cbe' as const, name: 'CBE Birr', icon: 'account_balance', desc: 'Pay with CBE Birr' },
                ].map((method) => (
                  <button
                    key={method.key}
                    onClick={() => setPaymentMethod(method.key)}
                    className={`w-full flex items-center gap-3 p-3 rounded-xl border transition-colors ${
                      paymentMethod === method.key
                        ? 'border-primary bg-primary/5'
                        : 'border-outline-variant hover:border-primary/30'
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      paymentMethod === method.key ? 'bg-primary/10' : 'bg-surface-container-low'
                    }`}>
                      <span className={`material-symbols-outlined text-xl ${
                        paymentMethod === method.key ? 'text-primary' : 'text-on-surface-variant'
                      }`}>{method.icon}</span>
                    </div>
                    <div className="text-left">
                      <p className="text-xs font-semibold text-on-surface">{method.name}</p>
                      <p className="text-[10px] text-on-surface-variant">{method.desc}</p>
                    </div>
                    {paymentMethod === method.key && (
                      <span className="material-symbols-outlined text-primary ml-auto">check_circle</span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {paymentMethod === 'telebirr' && (
              <div className="bento-card">
                <label className="text-[11px] font-medium text-on-surface-variant mb-1.5 block">Phone Number</label>
                <div className="flex">
                  <span className="flex items-center px-3 rounded-l-xl bg-surface-container-highest border border-r-0 border-outline-variant text-xs text-on-surface-variant">
                    +251
                  </span>
                  <input
                    type="tel"
                    value={phoneNumber.replace('+251', '')}
                    onChange={(e) => setPhoneNumber('+251' + e.target.value.replace(/\D/g, '').slice(0, 9))}
                    placeholder="9XXXXXXXX"
                    className="flex-1 px-3 py-2.5 rounded-r-xl bg-surface-container-low text-sm text-on-surface placeholder:text-on-surface-variant border border-outline-variant focus:border-primary focus:outline-none"
                  />
                </div>
              </div>
            )}

            <Button
              variant="primary"
              className="w-full"
              icon="payment"
              onClick={handlePay}
              disabled={processing}
            >
              {processing ? 'Processing...' : `Pay ${formatPrice(selectedService.amount)}`}
            </Button>

            <p className="text-[10px] text-on-surface-variant text-center">
              Your payment is secured by {paymentMethod === 'chapa' ? 'Chapa' : paymentMethod === 'telebirr' ? 'Telebirr' : 'CBE Birr'}.
              No card details are stored on our servers.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
