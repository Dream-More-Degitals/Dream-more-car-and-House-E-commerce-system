'use client'

import Link from 'next/link'

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <main className="flex-1 pt-16">{children}</main>

      <footer className="bg-gray-50 border-t border-gray-100">
        <div className="max-w-[1200px] mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-emerald-deep flex items-center justify-center">
                <span className="material-symbols-outlined text-white text-[18px]">apartment</span>
              </div>
              <span className="text-[15px] font-extrabold text-emerald-deep">Dream More</span>
            </div>
            <p className="text-[13px] text-gray-500 leading-relaxed">
              Ethiopia&apos;s premier marketplace for high-value properties and vehicles.
            </p>
          </div>
          <div>
            <h4 className="text-[11px] font-bold text-gray-900 uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="flex flex-col gap-2.5">
              <li><Link href="/search?type=vehicle" className="text-[13px] text-gray-500 hover:text-emerald-deep transition-colors">Vehicles</Link></li>
              <li><Link href="/search?type=property" className="text-[13px] text-gray-500 hover:text-emerald-deep transition-colors">Properties</Link></li>
              <li><Link href="/register" className="text-[13px] text-gray-500 hover:text-emerald-deep transition-colors">Sell with Us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[11px] font-bold text-gray-900 uppercase tracking-wider mb-4">Legal</h4>
            <ul className="flex flex-col gap-2.5">
              <li><span className="text-[13px] text-gray-500 hover:text-emerald-deep transition-colors cursor-pointer">Terms of Service</span></li>
              <li><span className="text-[13px] text-gray-500 hover:text-emerald-deep transition-colors cursor-pointer">Privacy Policy</span></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[11px] font-bold text-gray-900 uppercase tracking-wider mb-4">Connect</h4>
            <div className="flex gap-2.5">
              {['public', 'alternate_email', 'call'].map((icon) => (
                <button key={icon} className="w-9 h-9 rounded-xl border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-emerald-deep hover:text-white hover:border-emerald-deep transition-all">
                  <span className="material-symbols-outlined text-[18px]">{icon}</span>
                </button>
              ))}
            </div>
            <p className="text-[12px] text-gray-400 mt-4 leading-relaxed">
              Bole Sub-city, Woreda 03<br />Addis Ababa, Ethiopia
            </p>
          </div>
        </div>
        <div className="border-t border-gray-100 py-5 text-center">
          <p className="text-[12px] text-gray-400">&copy; 2026 Dream More. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
