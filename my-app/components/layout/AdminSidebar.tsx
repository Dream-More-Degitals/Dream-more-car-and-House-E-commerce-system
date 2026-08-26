'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { adminNavigation, adminConfigLinks } from '@/lib/constants'

export default function AdminSidebar() {
  const pathname = usePathname()

  return (
    <aside className="fixed left-0 top-0 bottom-0 w-64 bg-white border-r border-outline-variant/40 z-50 hidden md:flex flex-col">
      <div className="p-6 pb-4">
        <Link href="/admin" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary-container rounded-xl flex items-center justify-center">
            <span className="material-symbols-outlined text-on-primary-container text-xl">apartment</span>
          </div>
          <div>
            <h1 className="text-[15px] font-bold text-on-surface tracking-tight">Dream More</h1>
            <p className="text-[11px] text-outline font-medium">Car & House Admin</p>
          </div>
        </Link>
      </div>

      <nav className="flex-1 px-3 py-2 overflow-y-auto sidebar-scroll">
        <ul className="space-y-1">
          {adminNavigation.map((item) => {
            const isActive = pathname === item.href
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`relative flex items-center gap-3 px-3 py-2.5 rounded-xl text-[13px] font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-primary-container text-on-primary-container'
                      : 'text-on-surface-variant hover:bg-surface-container-low'
                  }`}
                >
                  {isActive && (
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-5 bg-on-primary-container rounded-r-full" />
                  )}
                  <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
                  <span className="flex-1">{item.label}</span>
                  {item.label === 'Messages' && (
                    <span className="flex items-center justify-center w-5 h-5 bg-error rounded-full text-[10px] font-bold text-on-error">
                      3
                    </span>
                  )}
                </Link>
              </li>
            )
          })}
        </ul>

        <div className="mt-6 mb-2 px-3">
          <div className="bento-section-label text-[10px]">Configuration</div>
        </div>
        <ul className="space-y-1">
          {adminConfigLinks.map((item) => {
            const isActive = pathname === item.href
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`relative flex items-center gap-3 px-3 py-2.5 rounded-xl text-[13px] font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-primary-container text-on-primary-container'
                      : 'text-on-surface-variant hover:bg-surface-container-low'
                  }`}
                >
                  {isActive && (
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-5 bg-on-primary-container rounded-r-full" />
                  )}
                  <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
                  <span>{item.label}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>

      <div className="p-3 border-t border-outline-variant/30">
        <button className="flex items-center gap-3 w-full px-3 py-2.5 rounded-xl hover:bg-surface-container-low transition-colors duration-200">
          <div className="w-9 h-9 rounded-full bg-tertiary-container flex items-center justify-center text-on-tertiary-container text-[12px] font-bold">
            DM
          </div>
          <div className="flex-1 text-left">
            <p className="text-[13px] font-semibold text-on-surface">Dawit Mulugeta</p>
            <p className="text-[11px] text-outline">Super Admin</p>
          </div>
          <span className="material-symbols-outlined text-[18px] text-outline">more_vert</span>
        </button>
      </div>
    </aside>
  )
}
