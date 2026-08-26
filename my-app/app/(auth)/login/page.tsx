'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { useAuth } from '@/context/auth-context'
import { useLocale } from '@/context/locale-context'

type LoginMode = 'email' | 'phone' | 'otp-verify'

export default function LoginPage() {
  const router = useRouter()
  const { login, loginWithOTP, verifyOTP, isLoading } = useAuth()
  const { t } = useLocale()
  const [mode, setMode] = useState<LoginMode>('email')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [phone, setPhone] = useState('+251')
  const [otp, setOtp] = useState('')
  const [rememberMe, setRememberMe] = useState(false)
  const [error, setError] = useState('')

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    const result = await login(email, password)
    if (result.success) {
      router.push('/')
    } else {
      setError(result.error || 'Login failed')
    }
  }

  const handlePhoneLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    const result = await loginWithOTP(phone)
    if (result.success) {
      setMode('otp-verify')
    } else {
      setError(result.error || 'Failed to send OTP')
    }
  }

  const handleOTPVerify = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    const result = await verifyOTP(phone, otp)
    if (result.success) {
      router.push('/')
    } else {
      setError(result.error || 'Invalid OTP')
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
          <h1 className="text-2xl font-bold text-on-surface">{t('auth_login')}</h1>
          <p className="text-sm text-on-surface-variant mt-1">
            {mode === 'otp-verify'
              ? t('auth_enter_otp')
              : 'Sign in to access your account'}
          </p>
        </div>

        <div className="bento-card">
          {error && (
            <div className="mb-4 p-3 rounded-xl bg-error/10 border border-error/20 text-error text-xs flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">error</span>
              {error}
            </div>
          )}

          {/* Mode Tabs */}
          {mode !== 'otp-verify' && (
            <div className="flex gap-1 p-1 rounded-xl bg-surface-container-low mb-6">
              <button
                onClick={() => { setMode('email'); setError(''); }}
                className={`flex-1 py-2 rounded-lg text-xs font-medium transition-colors ${
                  mode === 'email'
                    ? 'bg-primary text-on-primary'
                    : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                <span className="material-symbols-outlined text-sm align-middle mr-1">mail</span>
                Email
              </button>
              <button
                onClick={() => { setMode('phone'); setError(''); }}
                className={`flex-1 py-2 rounded-lg text-xs font-medium transition-colors ${
                  mode === 'phone'
                    ? 'bg-primary text-on-primary'
                    : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                <span className="material-symbols-outlined text-sm align-middle mr-1">phone</span>
                Phone
              </button>
            </div>
          )}

          {/* Email Login */}
          {mode === 'email' && (
            <form onSubmit={handleEmailLogin} className="space-y-4">
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
                  {t('auth_password')}
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="w-full px-3 py-2.5 rounded-xl bg-surface-container-low text-sm text-on-surface placeholder:text-on-surface-variant border border-outline-variant focus:border-primary focus:outline-none transition-colors"
                />
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-4 h-4 rounded border-outline-variant text-primary focus:ring-primary"
                  />
                  <span className="text-xs text-on-surface-variant">{t('auth_remember_me')}</span>
                </label>
                <Link href="/forgot-password" className="text-xs text-primary hover:text-primary/80">
                  {t('auth_forgot_password')}
                </Link>
              </div>

              <Button
                type="submit"
                variant="primary"
                className="w-full"
                icon="login"
                disabled={isLoading}
              >
                {isLoading ? t('common_loading') : t('auth_login')}
              </Button>
            </form>
          )}

          {/* Phone Login */}
          {mode === 'phone' && (
            <form onSubmit={handlePhoneLogin} className="space-y-4">
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
                <p className="text-[10px] text-on-surface-variant mt-1">
                  We&apos;ll send a 6-digit verification code via SMS
                </p>
              </div>

              <Button
                type="submit"
                variant="primary"
                className="w-full"
                icon="send"
                disabled={isLoading}
              >
                {isLoading ? t('common_loading') : 'Send OTP'}
              </Button>
            </form>
          )}

          {/* OTP Verify */}
          {mode === 'otp-verify' && (
            <form onSubmit={handleOTPVerify} className="space-y-4">
              <div className="text-center mb-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-2">
                  <span className="material-symbols-outlined text-primary text-xl">sms</span>
                </div>
                <p className="text-xs text-on-surface-variant">
                  Code sent to <span className="font-medium text-on-surface">{phone}</span>
                </p>
              </div>

              <div>
                <label className="text-[11px] font-medium text-on-surface-variant mb-1.5 block">
                  {t('auth_enter_otp')}
                </label>
                <input
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
                  placeholder="000000"
                  maxLength={6}
                  required
                  className="w-full px-3 py-3 rounded-xl bg-surface-container-low text-lg text-center tracking-[0.5em] text-on-surface placeholder:text-on-surface-variant border border-outline-variant focus:border-primary focus:outline-none transition-colors"
                />
              </div>

              <Button
                type="submit"
                variant="primary"
                className="w-full"
                icon="verified"
                disabled={isLoading || otp.length !== 6}
              >
                {isLoading ? t('common_loading') : t('auth_verify')}
              </Button>

              <button
                type="button"
                onClick={() => setMode('phone')}
                className="w-full text-center text-xs text-on-surface-variant hover:text-on-surface"
              >
                Change phone number
              </button>

              <button
                type="button"
                onClick={() => handlePhoneLogin({ preventDefault: () => {} } as React.FormEvent)}
                className="w-full text-center text-xs text-primary hover:text-primary/80"
                disabled={isLoading}
              >
                {t('auth_resend_otp')}
              </button>
            </form>
          )}
        </div>

        <p className="text-center text-xs text-on-surface-variant mt-6">
          {t('auth_dont_have_account')}{' '}
          <Link href="/register" className="text-primary font-medium hover:text-primary/80">
            {t('auth_register')}
          </Link>
        </p>
      </div>
    </div>
  )
}
