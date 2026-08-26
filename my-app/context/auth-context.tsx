'use client'

import { createContext, useContext, useState, useEffect, useCallback, useRef, type ReactNode } from 'react'

export type UserRole = 'buyer' | 'seller' | 'admin'

export interface User {
  id: string
  name: string
  email: string
  phone: string
  role: UserRole
  avatar?: string
  isVerified: boolean
  createdAt: string
  lastLogin?: string
}

interface AuthContextType {
  user: User | null
  isLoading: boolean
  isAuthenticated: boolean
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>
  loginWithOTP: (phone: string) => Promise<{ success: boolean; error?: string }>
  verifyOTP: (phone: string, otp: string) => Promise<{ success: boolean; error?: string }>
  register: (data: RegisterData) => Promise<{ success: boolean; error?: string }>
  logout: () => void
  updateProfile: (data: Partial<User>) => void
  requestPasswordReset: (email: string) => Promise<{ success: boolean; error?: string }>
  resetPassword: (token: string, newPassword: string) => Promise<{ success: boolean; error?: string }>
}

interface RegisterData {
  name: string
  email: string
  phone: string
  password: string
  role: UserRole
  agreeToTerms: boolean
}

const SESSION_TIMEOUT = 45 * 60 * 1000 // 45 minutes

const AuthContext = createContext<AuthContextType | undefined>(undefined)

// Simulated user store (in real app, this would be API calls)
const MOCK_USERS: (User & { password: string })[] = [
  {
    id: '1',
    name: 'Admin User',
    email: 'admin@dreammore.com',
    phone: '+251911111111',
    role: 'admin',
    isVerified: true,
    createdAt: '2026-01-01',
    password: 'Admin123!',
  },
  {
    id: '2',
    name: 'Abebe Kebede',
    email: 'abebe@example.com',
    phone: '+251922222222',
    role: 'seller',
    isVerified: true,
    createdAt: '2026-02-15',
    password: 'Seller123!',
  },
  {
    id: '3',
    name: 'Hanna Tesfaye',
    email: 'hanna@example.com',
    phone: '+251933333333',
    role: 'buyer',
    isVerified: false,
    createdAt: '2026-03-10',
    password: 'Buyer123!',
  },
]

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(() => {
    if (typeof window === 'undefined') return null
    const saved = localStorage.getItem('dreammore-session')
    if (saved) {
      try {
        const parsed = JSON.parse(saved)
        return parsed.user
      } catch {
        localStorage.removeItem('dreammore-session')
      }
    }
    return null
  })
  const [isLoading, setIsLoading] = useState(false)
  const lastActivityRef = useRef(Date.now())

  // Session timeout check
  useEffect(() => {
    const checkSession = () => {
      if (user && Date.now() - lastActivityRef.current > SESSION_TIMEOUT) {
        setUser(null)
        localStorage.removeItem('dreammore-session')
      }
    }

    const interval = setInterval(checkSession, 60000)
    return () => clearInterval(interval)
  }, [user])

  // Track user activity
  useEffect(() => {
    const handleActivity = () => { lastActivityRef.current = Date.now() }
    window.addEventListener('mousemove', handleActivity)
    window.addEventListener('keydown', handleActivity)
    window.addEventListener('click', handleActivity)
    return () => {
      window.removeEventListener('mousemove', handleActivity)
      window.removeEventListener('keydown', handleActivity)
      window.removeEventListener('click', handleActivity)
    }
  }, [])

  const login = useCallback(async (email: string, password: string) => {
    setIsLoading(true)
    // Simulate API delay
    await new Promise(r => setTimeout(r, 800))

    const found = MOCK_USERS.find(u => u.email === email && u.password === password)
    if (!found) {
      setIsLoading(false)
      return { success: false, error: 'Invalid email or password' }
    }

    const { password: _pw, ...userData } = found
    setUser(userData)
    localStorage.setItem('dreammore-session', JSON.stringify({ user: userData }))
    setIsLoading(false)
    return { success: true }
  }, [])

  const loginWithOTP = useCallback(async (phone: string) => {
    setIsLoading(true)
    await new Promise(r => setTimeout(r, 800))

    const found = MOCK_USERS.find(u => u.phone === phone)
    if (!found) {
      setIsLoading(false)
      return { success: false, error: 'Phone number not registered' }
    }

    // In real app, this would send an SMS with OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString()
    sessionStorage.setItem(`otp-${phone}`, otp)
    sessionStorage.setItem(`otp-${phone}-expiry`, (Date.now() + 5 * 60 * 1000).toString())

    console.log(`OTP for ${phone}: ${otp}`)
    setIsLoading(false)
    return { success: true }
  }, [])

  const verifyOTP = useCallback(async (phone: string, otp: string) => {
    setIsLoading(true)
    await new Promise(r => setTimeout(r, 500))

    const storedOTP = sessionStorage.getItem(`otp-${phone}`)
    const expiry = sessionStorage.getItem(`otp-${phone}-expiry`)

    if (!storedOTP || !expiry) {
      setIsLoading(false)
      return { success: false, error: 'OTP expired or not found' }
    }

    if (Date.now() > parseInt(expiry)) {
      sessionStorage.removeItem(`otp-${phone}`)
      sessionStorage.removeItem(`otp-${phone}-expiry`)
      setIsLoading(false)
      return { success: false, error: 'OTP has expired' }
    }

    if (otp !== storedOTP) {
      setIsLoading(false)
      return { success: false, error: 'Invalid OTP' }
    }

    const found = MOCK_USERS.find(u => u.phone === phone)
    if (!found) {
      setIsLoading(false)
      return { success: false, error: 'User not found' }
    }

    const { password: _pw2, ...userData } = found
    setUser(userData)
    localStorage.setItem('dreammore-session', JSON.stringify({ user: userData }))
    sessionStorage.removeItem(`otp-${phone}`)
    sessionStorage.removeItem(`otp-${phone}-expiry`)
    setIsLoading(false)
    return { success: true }
  }, [])

  const register = useCallback(async (data: RegisterData) => {
    setIsLoading(true)
    await new Promise(r => setTimeout(r, 1000))

    if (!data.agreeToTerms) {
      setIsLoading(false)
      return { success: false, error: 'You must agree to the Terms of Service' }
    }

    if (MOCK_USERS.some(u => u.email === data.email)) {
      setIsLoading(false)
      return { success: false, error: 'Email already registered' }
    }

    if (MOCK_USERS.some(u => u.phone === data.phone)) {
      setIsLoading(false)
      return { success: false, error: 'Phone number already registered' }
    }

    const newUser: User & { password: string } = {
      id: String(MOCK_USERS.length + 1),
      name: data.name,
      email: data.email,
      phone: data.phone,
      role: data.role,
      isVerified: false,
      createdAt: new Date().toISOString(),
      password: data.password,
    }

    MOCK_USERS.push(newUser)

    const { password: _pw3, ...userData } = newUser
    setUser(userData)
    localStorage.setItem('dreammore-session', JSON.stringify({ user: userData }))
    setIsLoading(false)
    return { success: true }
  }, [])

  const logout = useCallback(() => {
    setUser(null)
    localStorage.removeItem('dreammore-session')
  }, [])

  const updateProfile = useCallback((data: Partial<User>) => {
    if (user) {
      const updated = { ...user, ...data }
      setUser(updated)
      localStorage.setItem('dreammore-session', JSON.stringify({ user: updated }))
    }
  }, [user])

  const requestPasswordReset = useCallback(async (email: string) => {
    await new Promise(r => setTimeout(r, 800))
    const found = MOCK_USERS.find(u => u.email === email)
    if (!found) {
      return { success: false, error: 'Email not found' }
    }
    // In real app, send reset email
    return { success: true }
  }, [])

  const resetPassword = useCallback(async (token: string, newPassword: string) => {
    await new Promise(r => setTimeout(r, 800))
    // In real app, validate token and update password
    console.log('Password reset with token:', token, 'new password length:', newPassword.length)
    return { success: true }
  }, [])

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        isAuthenticated: !!user,
        login,
        loginWithOTP,
        verifyOTP,
        register,
        logout,
        updateProfile,
        requestPasswordReset,
        resetPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth must be used within AuthProvider')
  return context
}
