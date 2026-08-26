'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/vehicles', label: 'Vehicles' },
  { href: '/properties', label: 'Properties' },
]

export default function PublicHeader() {
  const pathname = usePathname()

  return (
    <header className="fixed top-0 left-0 right-0 h-20 z-50 bg-white border-b border-outline-variant/40">
      <div className="flex items-center justify-between h-full px-6 max-w-7xl mx-auto">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="material-symbols-outlined text-emerald-deep text-[28px]">apartment</span>
          <span className="text-[18px] font-extrabold text-emerald-deep tracking-tight">Dream More</span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || pathname.startsWith(link.href + '/')
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 rounded-xl text-[14px] font-semibold transition-colors duration-200 ${
                  isActive
                    ? 'bg-emerald-deep/10 text-emerald-deep'
                    : 'text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-1.5">
          <button className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-surface-container-low transition-colors hidden sm:flex">
            <span className="material-symbols-outlined text-[20px] text-on-surface-variant">favorite</span>
          </button>

          <button className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-surface-container-low transition-colors hidden sm:flex">
            <span className="material-symbols-outlined text-[20px] text-on-surface-variant">language</span>
          </button>

          <button className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-surface-container-low transition-colors hidden sm:flex">
            <span className="material-symbols-outlined text-[20px] text-on-surface-variant">person</span>
          </button>

          <div className="hidden lg:block w-px h-8 bg-outline-variant/40 mx-1" />

          <Link
            href="/login"
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 rounded-xl border border-outline-variant/60 text-[13px] font-semibold text-on-surface-variant hover:bg-surface-container-low transition-colors"
          >
            Login
          </Link>

          <Link
            href="/register"
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 rounded-xl bg-emerald-deep text-white text-[13px] font-semibold hover:opacity-90 transition-opacity"
          >
            Register
          </Link>

          <button className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl hover:bg-surface-container-low transition-colors">
            <span className="material-symbols-outlined text-[22px] text-on-surface-variant">menu</span>
          </button>
        </div>
      </div>
    </header>
  )
}
