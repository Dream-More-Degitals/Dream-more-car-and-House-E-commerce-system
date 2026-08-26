'use client'

import Link from 'next/link'
import { StatCard } from '@/components/ui/StatCard'

const stats = [
  { label: 'Total Users', value: '1,234', change: '+12%', up: true, icon: 'group', accentColor: 'bg-blue-500' },
  { label: 'Active Listings', value: '432', change: '+8%', up: true, icon: 'directions_car', accentColor: 'bg-emerald-500' },
  { label: 'Revenue', value: '2.4M ETB', change: '+18%', up: true, icon: 'payments', accentColor: 'bg-violet-500' },
  { label: 'Pending', value: '8', change: '-2', up: false, icon: 'pending_actions', accentColor: 'bg-amber-500' },
]

const recentActivity = [
  { user: 'Abel Mekonnen', action: 'created a listing', detail: '2023 Toyota Land Cruiser 300', time: '2m', icon: 'add_circle', accent: 'bg-emerald-50 text-emerald-600' },
  { user: 'Sara Tesfaye', action: 'submitted documents', detail: 'Business License', time: '15m', icon: 'upload_file', accent: 'bg-blue-50 text-blue-600' },
  { user: 'Dawit Alemayehu', action: 'purchased a property', detail: 'Luxury Villa in Bole', time: '1h', icon: 'shopping_cart', accent: 'bg-violet-50 text-violet-600' },
  { user: 'Hana Gutama', action: 'updated profile', detail: 'Phone & Address', time: '2h', icon: 'edit', accent: 'bg-amber-50 text-amber-600' },
  { user: 'Yonas Bekele', action: 'listed a vehicle', detail: 'Mercedes-Benz G63 AMG', time: '3h', icon: 'directions_car', accent: 'bg-blue-50 text-blue-600' },
]

const pendingApprovals = [
  { id: 1, type: 'Car' as const, title: '2024 BMW X7 xDrive40i', seller: 'Mulugeta D.', date: 'Aug 25' },
  { id: 2, type: 'House' as const, title: 'Modern Penthouse in Kazanchis', seller: 'Tigist H.', date: 'Aug 25' },
  { id: 3, type: 'Car' as const, title: '2023 Hyundai Tucson Hybrid', seller: 'Kidus T.', date: 'Aug 24' },
]

const quickActions = [
  { label: 'Add User', icon: 'person_add', href: '/admin/users', accent: 'bg-blue-50 text-blue-600' },
  { label: 'Add Listing', icon: 'add_home', href: '/admin/listings', accent: 'bg-emerald-50 text-emerald-600' },
  { label: 'Verifications', icon: 'verified_user', href: '/admin/verification', accent: 'bg-amber-50 text-amber-600', badge: '4' },
  { label: 'Analytics', icon: 'bar_chart', href: '/admin/analytics', accent: 'bg-violet-50 text-violet-600' },
]

const systemHealth = [
  { label: 'Server Uptime', value: 99.9, color: 'bg-emerald-500' },
  { label: 'Storage', value: 62, color: 'bg-blue-500' },
  { label: 'API Usage', value: 78, color: 'bg-amber-500' },
  { label: 'CDN Bandwidth', value: 45, color: 'bg-violet-500' },
]

export default function AdminDashboard() {
  return (
    <div className="space-y-5">
      {/* --- Greeting Banner --- */}
      <div className="bento-card p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-gradient-to-br from-primary-container to-emerald-deep">
        <div>
          <p className="text-on-primary-container/70 text-[10px] font-semibold uppercase tracking-wider mb-1">Dashboard Overview</p>
          <h1 className="text-xl sm:text-2xl font-bold text-on-primary-container">Welcome back, Admin</h1>
          <p className="text-on-primary-container/60 text-[13px] mt-1">Here&apos;s what&apos;s happening across Dream More today.</p>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-4 py-2 bg-white/15 backdrop-blur-sm border border-white/20 rounded-xl text-[13px] font-medium text-on-primary-container hover:bg-white/25 transition-colors">
            <span className="material-symbols-outlined text-[16px]">download</span>
            Export
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-white text-emerald-deep rounded-xl text-[13px] font-semibold hover:bg-white/90 transition-colors shadow-sm">
            <span className="material-symbols-outlined text-[16px]">add</span>
            New Listing
          </button>
        </div>
      </div>

      {/* --- Stats Row --- */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {stats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>

      {/* --- Main Content Grid --- */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
        {/* Activity Feed - spans 2 cols */}
        <div className="lg:col-span-2 bento-card flex flex-col">
          <div className="px-5 py-4 flex items-center justify-between border-b border-outline-variant/20">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px] text-on-surface-variant">schedule</span>
              <h2 className="text-[13px] font-bold text-on-surface">Recent Activity</h2>
            </div>
            <Link href="/admin/logs" className="text-[11px] font-semibold text-primary hover:underline">View All</Link>
          </div>
          <div className="flex-1 divide-y divide-outline-variant/15">
            {recentActivity.map((item, i) => (
              <div key={i} className="flex items-center gap-3 px-5 py-3 hover:bg-surface-container-low/40 transition-colors">
                <div className={`w-8 h-8 rounded-lg ${item.accent} flex items-center justify-center shrink-0`}>
                  <span className="material-symbols-outlined text-[15px]">{item.icon}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[13px] text-on-surface leading-snug">
                    <span className="font-semibold">{item.user}</span>{' '}
                    <span className="text-on-surface-variant">{item.action}</span>
                  </p>
                  <p className="text-[11px] text-outline truncate">{item.detail}</p>
                </div>
                <span className="text-[10px] text-outline font-medium shrink-0">{item.time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pending Approvals - 1 col */}
        <div className="bento-card flex flex-col">
          <div className="px-5 py-4 flex items-center justify-between border-b border-outline-variant/20">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px] text-amber-500">pending_actions</span>
              <h2 className="text-[13px] font-bold text-on-surface">Pending Approvals</h2>
            </div>
            <span className="bg-amber-50 text-amber-600 text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">{pendingApprovals.length}</span>
          </div>
          <div className="flex-1 divide-y divide-outline-variant/15">
            {pendingApprovals.map((item) => (
              <div key={item.id} className="px-5 py-3.5 hover:bg-surface-container-low/40 transition-colors">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className={`text-[9px] font-bold uppercase px-1.5 py-0.5 rounded ${item.type === 'Car' ? 'bg-blue-50 text-blue-600' : 'bg-emerald-50 text-emerald-600'}`}>
                    {item.type}
                  </span>
                  <span className="text-[10px] text-outline">{item.date}</span>
                </div>
                <p className="text-[13px] font-semibold text-on-surface truncate leading-snug">{item.title}</p>
                <p className="text-[11px] text-on-surface-variant mt-0.5">by {item.seller}</p>
                <div className="flex gap-1.5 mt-2.5">
                  <button className="flex-1 text-[11px] font-semibold py-1.5 rounded-lg bg-emerald-50 text-emerald-600 hover:bg-emerald-100 transition-colors">
                    Approve
                  </button>
                  <button className="flex-1 text-[11px] font-semibold py-1.5 rounded-lg border border-outline-variant/50 text-on-surface-variant hover:bg-surface-container-low transition-colors">
                    Review
                  </button>
                </div>
              </div>
            ))}
          </div>
          <Link href="/admin/verification" className="px-5 py-3 border-t border-outline-variant/20 text-center text-[11px] font-semibold text-primary hover:bg-surface-container-low/40 transition-colors rounded-b-[20px]">
            View All Pending
          </Link>
        </div>
      </div>

      {/* --- Bottom Grid --- */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
        {/* Revenue mini-chart - spans 2 cols */}
        <div className="lg:col-span-2 bento-card p-5">
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px] text-violet-500">trending_up</span>
              <h2 className="text-[13px] font-bold text-on-surface">Monthly Revenue</h2>
            </div>
            <span className="text-[11px] text-on-surface-variant font-medium">Last 8 months</span>
          </div>
          <div className="flex items-end gap-2 h-36">
            {[180, 245, 380, 520, 480, 670, 780, 920].map((val, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-1.5">
                <span className="text-[9px] text-outline font-medium">{(val / 1000).toFixed(1)}K</span>
                <div className="w-full rounded-lg bg-surface-container overflow-hidden" style={{ height: '100%' }}>
                  <div
                    className="w-full rounded-lg bg-gradient-to-t from-primary to-primary/70 transition-all"
                    style={{ height: `${(val / 920) * 100}%`, marginTop: 'auto' }}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-2 px-0.5">
            {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'].map((m) => (
              <span key={m} className="text-[9px] text-outline font-medium">{m}</span>
            ))}
          </div>
        </div>

        {/* System Health - 1 col */}
        <div className="bento-card p-5">
          <div className="flex items-center gap-2 mb-5">
            <span className="material-symbols-outlined text-[18px] text-blue-500">monitor_heart</span>
            <h2 className="text-[13px] font-bold text-on-surface">System Health</h2>
          </div>
          <div className="space-y-4">
            {systemHealth.map((item) => (
              <div key={item.label}>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[12px] text-on-surface-variant">{item.label}</span>
                  <span className="text-[12px] font-bold text-on-surface">{item.value}%</span>
                </div>
                <div className="w-full h-1.5 bg-surface-container rounded-full overflow-hidden">
                  <div className={`h-full ${item.color} rounded-full`} style={{ width: `${item.value}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- Quick Actions Row --- */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {quickActions.map((action) => (
          <Link
            key={action.label}
            href={action.href}
            className="bento-card p-4 flex flex-col items-center gap-2.5 text-center group relative"
          >
            <div className={`w-10 h-10 rounded-xl ${action.accent} flex items-center justify-center group-hover:scale-110 transition-transform`}>
              <span className="material-symbols-outlined text-[20px]">{action.icon}</span>
            </div>
            <span className="text-[12px] font-semibold text-on-surface-variant group-hover:text-on-surface transition-colors">{action.label}</span>
            {action.badge && (
              <span className="absolute -top-1 -right-1 bg-error text-on-error text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {action.badge}
              </span>
            )}
          </Link>
        ))}
      </div>
    </div>
  )
}
