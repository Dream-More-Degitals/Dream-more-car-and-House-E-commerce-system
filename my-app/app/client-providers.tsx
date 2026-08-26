'use client'

import { type ReactNode } from 'react'
import { LocaleProvider } from '@/context/locale-context'
import { AuthProvider } from '@/context/auth-context'
import { NotificationProvider } from '@/context/notification-context'

export default function ClientProviders({ children }: { children: ReactNode }) {
  return (
    <LocaleProvider>
      <AuthProvider>
        <NotificationProvider>
          {children}
        </NotificationProvider>
      </AuthProvider>
    </LocaleProvider>
  )
}
