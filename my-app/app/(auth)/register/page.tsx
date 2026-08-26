'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { useAuth, type UserRole } from '@/context/auth-context'
import { useLocale } from '@/context/locale-context'
import { validateEmail, validatePhone, validatePassword } from '@/lib/utils'

type Step = 'role' | 'details' | 'otp-verify'

export default function RegisterPage() {
  const router = useRouter()
  const { register, isLoading } = useAuth()
  const { t } = useLocale()
  const [step, setStep] = useState<Step>('role')
  const [role, setRole] = useState<UserRole>('buyer')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('+251')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [agreeToTerms, setAgreeToTerms] = useState(false)
  const [error, setError] = useState('')
  const [passwordErrors, setPasswordErrors] = useState<string[]>([])

  const handlePasswordChange = (value: string) => {
    setPassword(value)
    if (value.length > 0) {
      const result = validatePassword(value)
      setPasswordErrors(result.errors)
    } else {
      setPasswordErrors([])
    }
  }

  const handleRoleSelect = (selectedRole: UserRole) => {
    setRole(selectedRole)
    setStep('details')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!validateEmail(email)) {
      setError(t('error_email_invalid'))
      return
    }

    if (!validatePhone(phone)) {
      setError(t('error_phone_invalid'))
      return
    }

    const pwResult = validatePassword(password)
    if (!pwResult.valid) {
      setError('Password requirements not met')
      return
    }

    if (password !== confirmPassword) {
      setError(t('error_password_mismatch'))
      return
    }

    if (!agreeToTerms) {
      setError('You must agree to the Terms of Service')
      return
    }

    const result = await register({
      name,
      email,
      phone,
      password,
      role,
      agreeToTerms,
    })

    if (result.success) {
      if (role === 'seller') {
        router.push('/seller')
      } else {
        router.push('/')
      }
    } else {
      setError(result.error || 'Registration failed')
    }
  }

  return (
    <div className="min-h-screen bg-surface flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-4">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-on-primary text-xl">home</span>
            </div>
            <span className="text-xl font-bold text-on-surface">DreamMore</span>
          </Link>
          <h1 className="text-2xl font-bold text-on-surface">{t('auth_create_account')}</h1>
          <p className="text-sm text-on-surface-variant mt-1">
            {step === 'role' ? t('auth_select_role') : 'Complete your registration'}
          </p>
        </div>

        {/* Step Indicator */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold ${
            step === 'role' ? 'bg-primary text-on-primary' : 'bg-emerald-deep text-white'
          }`}>
            {step === 'role' ? '1' : <span className="material-symbols-outlined text-sm">check</span>}
          </div>
          <div className="w-12 h-px bg-outline-variant" />
          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold ${
            step === 'details' ? 'bg-primary text-on-primary' : step === 'otp-verify' ? 'bg-emerald-deep text-white' : 'bg-surface-container-low text-on-surface-variant'
          }`}>
            2
          </div>
        </div>

        {error && (
          <div className="mb-4 p-3 rounded-xl bg-error/10 border border-error/20 text-error text-xs flex items-center gap-2">
            <span className="material-symbols-outlined text-sm">error</span>
            {error}
          </div>
        )}

        {/* Step 1: Role Selection */}
        {step === 'role' && (
          <div className="space-y-3">
            <button
              onClick={() => handleRoleSelect('buyer')}
              className="w-full bento-card text-left hover:border-primary/50 transition-colors group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                  <span className="material-symbols-outlined text-blue-600 text-xl">shopping_cart</span>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-on-surface">{t('auth_role_buyer')}</h3>
                  <p className="text-xs text-on-surface-variant">Browse and purchase vehicles & properties</p>
                </div>
                <span className="material-symbols-outlined text-on-surface-variant ml-auto">chevron_right</span>
              </div>
            </button>

            <button
              onClick={() => handleRoleSelect('seller')}
              className="w-full bento-card text-left hover:border-primary/50 transition-colors group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center group-hover:bg-emerald-100 transition-colors">
                  <span className="material-symbols-outlined text-emerald-600 text-xl">storefront</span>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-on-surface">{t('auth_role_seller')}</h3>
                  <p className="text-xs text-on-surface-variant">List and sell vehicles & properties</p>
                </div>
                <span className="material-symbols-outlined text-on-surface-variant ml-auto">chevron_right</span>
              </div>
            </button>
          </div>
        )}

        {/* Step 2: Details */}
        {step === 'details' && (
          <div className="bento-card">
            <div className="flex items-center gap-2 mb-4">
              <button onClick={() => setStep('role')} className="text-on-surface-variant hover:text-on-surface">
                <span className="material-symbols-outlined text-lg">arrow_back</span>
              </button>
              <span className="text-xs text-on-surface-variant">
                Registering as <span className="font-medium text-primary capitalize">{role}</span>
              </span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-[11px] font-medium text-on-surface-variant mb-1.5 block">
                  Full Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Abebe Kebede"
                  required
                  className="w-full px-3 py-2.5 rounded-xl bg-surface-container-low text-sm text-on-surface placeholder:text-on-surface-variant border border-outline-variant focus:border-primary focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="text-[11px] font-medium text-on-surface-variant mb-1.5 block">
                  {t('auth_email')}
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  required
                  className="w-full px-3 py-2.5 rounded-xl bg-surface-container-low text-sm text-on-surface placeholder:text-on-surface-variant border border-outline-variant focus:border-primary focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="text-[11px] font-medium text-on-surface-variant mb-1.5 block">
                  {t('auth_phone')}
                </label>
                <div className="flex">
                  <span className="flex items-center px-3 rounded-l-xl bg-surface-container-highest border border-r-0 border-outline-variant text-xs text-on-surface-variant">
                    +251
                  </span>
                  <input
                    type="tel"
                    value={phone.replace('+251', '')}
                    onChange={(e) => setPhone('+251' + e.target.value.replace(/\D/g, '').slice(0, 9))}
                    placeholder="9XXXXXXXX"
                    required
                    className="flex-1 px-3 py-2.5 rounded-r-xl bg-surface-container-low text-sm text-on-surface placeholder:text-on-surface-variant border border-outline-variant focus:border-primary focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="text-[11px] font-medium text-on-surface-variant mb-1.5 block">
                  {t('auth_password')}
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => handlePasswordChange(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="w-full px-3 py-2.5 rounded-xl bg-surface-container-low text-sm text-on-surface placeholder:text-on-surface-variant border border-outline-variant focus:border-primary focus:outline-none transition-colors"
                />
                {passwordErrors.length > 0 && (
                  <div className="mt-1.5 space-y-0.5">
                    {passwordErrors.map((err) => (
                      <p key={err} className="text-[10px] text-error flex items-center gap-1">
                        <span className="material-symbols-outlined text-xs">info</span>
                        {err}
                      </p>
                    ))}
                  </div>
                )}
              </div>

              <div>
                <label className="text-[11px] font-medium text-on-surface-variant mb-1.5 block">
                  {t('auth_confirm_password')}
                </label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className={`w-full px-3 py-2.5 rounded-xl bg-surface-container-low text-sm text-on-surface placeholder:text-on-surface-variant border focus:outline-none transition-colors ${
                    confirmPassword && password !== confirmPassword
                      ? 'border-error focus:border-error'
                      : 'border-outline-variant focus:border-primary'
                  }`}
                />
                {confirmPassword && password !== confirmPassword && (
                  <p className="text-[10px] text-error mt-1 flex items-center gap-1">
                    <span className="material-symbols-outlined text-xs">info</span>
                    {t('error_password_mismatch')}
                  </p>
                )}
              </div>

              <label className="flex items-start gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={agreeToTerms}
                  onChange={(e) => setAgreeToTerms(e.target.checked)}
                  className="w-4 h-4 mt-0.5 rounded border-outline-variant text-primary focus:ring-primary"
                />
                <span className="text-[11px] text-on-surface-variant leading-tight">
                  {t('auth_terms_agree')}{' '}
                  <Link href="/terms" className="text-primary hover:text-primary/80">Terms of Service</Link>
                  {' '}and{' '}
                  <Link href="/privacy" className="text-primary hover:text-primary/80">Privacy Policy</Link>
                </span>
              </label>

              <Button
                type="submit"
                variant="primary"
                className="w-full"
                icon="person_add"
                disabled={isLoading}
              >
                {isLoading ? t('common_loading') : t('auth_create_account')}
              </Button>
            </form>
          </div>
        )}

        <p className="text-center text-xs text-on-surface-variant mt-6">
          {t('auth_already_have_account')}{' '}
          <Link href="/login" className="text-primary font-medium hover:text-primary/80">
            {t('auth_login')}
          </Link>
        </p>
      </div>
    </div>
  )
}
