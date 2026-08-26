'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { adminNavigation, adminConfigLinks, sellerNavigation } from '@/lib/constants'
import { useNotifications } from '@/context/notification-context'
import { useAuth } from '@/context/auth-context'
import { getInitials } from '@/lib/utils'

const allNavigation = [...adminNavigation, ...adminConfigLinks, ...sellerNavigation]

interface TopbarProps {
  title?: string
  subtitle?: string
}

export default function Topbar({ title, subtitle }: TopbarProps) {
  const pathname = usePathname()
  const { unreadCount } = useNotifications()
  const { user } = useAuth()

  const currentPage = allNavigation.find((item) => pathname === item.href)
  const pageTitle = title || currentPage?.label || 'Dashboard'

  return (
    <header className="sticky top-0 h-16 z-40 bg-white/80 backdrop-blur-md border-b border-outline-variant/40">
      <div className="flex items-center justify-between h-full px-6">
        <div className="flex items-center gap-3">
          <h2 className="text-[16px] font-bold text-on-surface">{pageTitle}</h2>
          {subtitle && <p className="text-[11px] text-on-surface-variant">{subtitle}</p>}
        </div>

        <div className="hidden md:flex flex-1 max-w-md mx-8">
          <div className="relative w-full">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[18px] text-outline">
              search
            </span>
            <input
              type="text"
              placeholder="Search listings, users..."
              className="w-full h-10 pl-10 pr-4 rounded-xl bg-surface-container-low text-[13px] text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-primary-container/30 transition-all"
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/notifications"
            className="relative w-10 h-10 flex items-center justify-center rounded-xl hover:bg-surface-container-low transition-colors"
          >
            <span className="material-symbols-outlined text-[20px] text-on-surface-variant">notifications</span>
            {unreadCount > 0 && (
              <span className="absolute top-2 right-2 w-4 h-4 rounded-full bg-error text-white text-[8px] flex items-center justify-center">
                {unreadCount}
              </span>
            )}
          </Link>

          <Link
            href="/admin/configuration"
            className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-surface-container-low transition-colors"
          >
            <span className="material-symbols-outlined text-[20px] text-on-surface-variant">settings</span>
          </Link>

          <div className="hidden lg:block w-px h-8 bg-outline-variant/40 mx-1" />

          <div className="hidden lg:flex items-center gap-3 pl-2">
            <div className="w-8 h-8 rounded-full bg-tertiary-container flex items-center justify-center text-on-tertiary-container text-[11px] font-bold">
              {user ? getInitials(user.name) : 'DM'}
            </div>
            <span className="text-[13px] font-medium text-on-surface">{user?.name || 'Admin'}</span>
          </div>
        </div>
      </div>
    </header>
  )
}
