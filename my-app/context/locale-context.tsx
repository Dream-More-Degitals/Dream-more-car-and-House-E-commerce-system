'use client'

import { createContext, useContext, useState, useCallback, useMemo, type ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { t as translate, type TranslationKeys } from '@/lib/i18n'

interface LocaleContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: keyof TranslationKeys) => string
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined)

function getInitialLocale(): Locale {
  if (typeof window === 'undefined') return 'en'
  const saved = localStorage.getItem('dreammore-locale') as Locale | null
  if (saved && (saved === 'en' || saved === 'am')) return saved
  return 'en'
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(getInitialLocale)

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l)
    localStorage.setItem('dreammore-locale', l)
    document.documentElement.lang = l
  }, [])

  const t = useCallback((key: keyof TranslationKeys) => translate(key, locale), [locale])

  const value = useMemo(() => ({ locale, setLocale, t }), [locale, setLocale, t])

  return (
    <LocaleContext.Provider value={value}>
      {children}
    </LocaleContext.Provider>
  )
}

export function useLocale() {
  const context = useContext(LocaleContext)
  if (!context) throw new Error('useLocale must be used within LocaleProvider')
  return context
}
