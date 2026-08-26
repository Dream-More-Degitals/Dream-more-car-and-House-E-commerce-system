'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/', label: 'Vehicles' },
  { href: '/', label: 'Properties' },
]

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <div className="min-h-screen flex flex-col">
      <header className="fixed top-0 w-full z-50 bg-white border-b border-outline-variant h-20">
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          <div className="flex items-center gap-10">
            <Link href="/" className="text-xl font-bold text-emerald-deep">Dream More</Link>
            <nav className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`text-sm font-medium transition-colors ${
                    pathname === link.href ? 'text-emerald-deep border-b-2 border-emerald-deep pb-1' : 'text-on-surface-variant hover:text-emerald-deep'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-4 text-on-surface-variant">
              <button className="material-symbols-outlined hover:text-emerald-deep transition-colors">favorite</button>
              <Link href="/admin" className="material-symbols-outlined hover:text-emerald-deep transition-colors">admin_panel_settings</Link>
              <Link href="/seller" className="material-symbols-outlined hover:text-emerald-deep transition-colors">storefront</Link>
            </div>
            <div className="flex items-center gap-2">
              <Link href="/login" className="px-5 py-2 text-sm border border-emerald-deep text-emerald-deep rounded-lg hover:bg-surface-container-low transition-all">Login</Link>
              <Link href="/register" className="px-5 py-2 text-sm bg-emerald-deep text-white rounded-lg hover:opacity-90 transition-all">Register</Link>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 mt-20">{children}</main>

      <footer className="bg-surface-gray border-t border-outline-variant">
        <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <span className="text-lg font-bold text-emerald-deep">Dream More</span>
            <p className="text-sm text-on-surface-variant mt-3">Ethiopia&apos;s premier marketplace for high-value properties and vehicles.</p>
          </div>
          <div>
            <h4 className="text-xs font-bold text-primary uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="flex flex-col gap-2">
              <li><Link href="/" className="text-sm text-on-surface-variant hover:text-gold-accent transition-colors">Vehicles</Link></li>
              <li><Link href="/" className="text-sm text-on-surface-variant hover:text-gold-accent transition-colors">Properties</Link></li>
              <li><Link href="/seller" className="text-sm text-on-surface-variant hover:text-gold-accent transition-colors">Sell with Us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold text-primary uppercase tracking-wider mb-4">Legal</h4>
            <ul className="flex flex-col gap-2">
              <li><span className="text-sm text-on-surface-variant hover:text-gold-accent transition-colors cursor-pointer">Terms of Service</span></li>
              <li><span className="text-sm text-on-surface-variant hover:text-gold-accent transition-colors cursor-pointer">Privacy Policy</span></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold text-primary uppercase tracking-wider mb-4">Connect</h4>
            <div className="flex gap-3">
              <button className="w-9 h-9 rounded-full border border-outline-variant flex items-center justify-center hover:bg-emerald-deep hover:text-white transition-all">
                <span className="material-symbols-outlined text-sm">public</span>
              </button>
              <button className="w-9 h-9 rounded-full border border-outline-variant flex items-center justify-center hover:bg-emerald-deep hover:text-white transition-all">
                <span className="material-symbols-outlined text-sm">alternate_email</span>
              </button>
              <button className="w-9 h-9 rounded-full border border-outline-variant flex items-center justify-center hover:bg-emerald-deep hover:text-white transition-all">
                <span className="material-symbols-outlined text-sm">call</span>
              </button>
            </div>
            <p className="text-sm text-on-surface-variant mt-4">Bole Sub-city, Woreda 03<br />Addis Ababa, Ethiopia</p>
          </div>
        </div>
        <div className="border-t border-outline-variant/30 py-5 text-center">
          <p className="text-xs text-on-surface-variant">&copy; 2026 Dream More. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
