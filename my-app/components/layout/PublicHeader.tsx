'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/search?type=vehicle', label: 'Vehicles', icon: 'directions_car' },
  { href: '/search?type=property', label: 'Properties', icon: 'apartment' },
]

export default function PublicHeader() {
  const pathname = usePathname()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-100/80">
      <div className="flex items-center justify-between h-16 px-6 max-w-[1200px] mx-auto">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-emerald-deep flex items-center justify-center shadow-lg shadow-emerald-deep/20 group-hover:shadow-emerald-deep/30 transition-shadow">
            <span className="material-symbols-outlined text-white text-[20px]">apartment</span>
          </div>
          <span className="text-[16px] font-extrabold text-emerald-deep tracking-tight hidden sm:block">
            Dream More
          </span>
        </Link>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || pathname.startsWith(link.href.split('?')[0])
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative flex items-center gap-2 px-4 py-2 rounded-xl text-[13px] font-semibold transition-all duration-200 ${
                  isActive
                    ? 'bg-emerald-deep/10 text-emerald-deep'
                    : 'text-gray-500 hover:bg-gray-50 hover:text-gray-800'
                }`}
              >
                <span className="material-symbols-outlined text-[18px]">{link.icon}</span>
                {link.label}
              </Link>
            )
          })}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-1.5">
          <Link
            href="/favorites"
            className="w-9 h-9 flex items-center justify-center rounded-xl text-gray-400 hover:bg-gray-50 hover:text-gray-600 transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">favorite</span>
          </Link>

          <Link
            href="/inbox"
            className="w-9 h-9 flex items-center justify-center rounded-xl text-gray-400 hover:bg-gray-50 hover:text-gray-600 transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">chat</span>
          </Link>

          <div className="hidden sm:block w-px h-6 bg-gray-100 mx-1" />

          <Link
            href="/login"
            className="hidden sm:inline-flex items-center px-4 py-2 rounded-xl text-[13px] font-semibold text-gray-600 hover:bg-gray-50 transition-colors"
          >
            Login
          </Link>

          <Link
            href="/register"
            className="hidden sm:inline-flex items-center px-5 py-2 rounded-xl bg-emerald-deep text-white text-[13px] font-bold hover:bg-emerald-deep/90 active:scale-[0.98] transition-all shadow-md shadow-emerald-deep/20"
          >
            Register
          </Link>

          <button className="md:hidden w-9 h-9 flex items-center justify-center rounded-xl text-gray-500 hover:bg-gray-50 transition-colors">
            <span className="material-symbols-outlined text-[22px]">menu</span>
          </button>
        </div>
      </div>
    </header>
  )
}
