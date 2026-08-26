'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { adminNavigation } from '@/lib/constants'

export function MobileNav() {
  const pathname = usePathname()
  const items = adminNavigation.slice(0, 5)

  return (
    <nav className="md:hidden fixed bottom-0 left-0 w-full bg-surface-container-lowest border-t border-outline-variant flex justify-around items-center h-16 z-50 safe-area-pb">
      {items.map((item) => {
        const isActive = item.href === '/admin'
          ? pathname === '/admin'
          : pathname.startsWith(item.href)
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex flex-col items-center justify-center gap-0.5 py-1 px-2 rounded-lg transition-colors ${
              isActive ? 'text-primary' : 'text-on-surface-variant'
            }`}
          >
            <span className="material-symbols-outlined text-[22px]">{item.icon}</span>
            <span className="text-[10px] font-medium">{item.label}</span>
          </Link>
        )
      })}
    </nav>
  )
}
