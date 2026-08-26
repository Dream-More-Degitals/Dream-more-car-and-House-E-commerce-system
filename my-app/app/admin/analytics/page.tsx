'use client'

const monthlyData = [
  { month: 'Jan', users: 45, listings: 28, revenue: 180000 },
  { month: 'Feb', users: 62, listings: 35, revenue: 245000 },
  { month: 'Mar', users: 85, listings: 52, revenue: 380000 },
  { month: 'Apr', users: 110, listings: 68, revenue: 520000 },
  { month: 'May', users: 98, listings: 72, revenue: 480000 },
  { month: 'Jun', users: 135, listings: 89, revenue: 670000 },
  { month: 'Jul', users: 152, listings: 95, revenue: 780000 },
  { month: 'Aug', users: 178, listings: 112, revenue: 920000 },
]

const topListings = [
  { title: 'Luxury Villa in Bole', views: 2340, inquiries: 45, type: 'House' as const },
  { title: 'Toyota Land Cruiser 300', views: 1890, inquiries: 38, type: 'Car' as const },
  { title: 'Mercedes-Benz G63 AMG', views: 1654, inquiries: 31, type: 'Car' as const },
  { title: 'Entoto Heights Estate', views: 1432, inquiries: 28, type: 'House' as const },
  { title: 'Modern Penthouse in Kazanchis', views: 1210, inquiries: 22, type: 'House' as const },
]

const trafficSources = [
  { source: 'Direct Search', percentage: 38, color: 'bg-primary' },
  { source: 'Social Media', percentage: 28, color: 'bg-blue-500' },
  { source: 'Referrals', percentage: 18, color: 'bg-emerald-500' },
  { source: 'Email Campaigns', percentage: 10, color: 'bg-amber-500' },
  { source: 'Other', percentage: 6, color: 'bg-violet-500' },
]

const maxRevenue = Math.max(...monthlyData.map(d => d.revenue))
const maxUsers = Math.max(...monthlyData.map(d => d.users))

export default function AnalyticsPage() {
  return (
    <div className="space-y-5">
      {/* --- Header --- */}
      <div className="bento-card p-5">
        <h1 className="text-xl font-bold text-on-surface">Analytics</h1>
        <p className="text-[12px] text-on-surface-variant mt-0.5">Platform performance and growth metrics.</p>
      </div>

      {/* --- KPI Cards --- */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {[
          { label: 'Total Users', value: '1,234', change: '+12%', icon: 'group', accent: 'text-blue-600' },
          { label: 'Total Listings', value: '432', change: '+8%', icon: 'directions_car', accent: 'text-emerald-600' },
          { label: 'Revenue (Aug)', value: '920K ETB', change: '+18%', icon: 'payments', accent: 'text-violet-600' },
          { label: 'Conversion Rate', value: '4.2%', change: '+0.3%', icon: 'trending_up', accent: 'text-amber-600' },
        ].map((stat) => (
          <div key={stat.label} className="bento-card p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className={`material-symbols-outlined text-[18px] ${stat.accent}`}>{stat.icon}</span>
              <span className="text-[10px] text-on-surface-variant font-semibold uppercase tracking-wider">{stat.label}</span>
            </div>
            <p className="text-xl font-bold text-on-surface tracking-tight">{stat.value}</p>
            <div className="flex items-center gap-1 mt-1">
              <span className="material-symbols-outlined text-[12px] text-emerald-500">trending_up</span>
              <span className="text-[10px] text-emerald-600 font-semibold">{stat.change} vs last month</span>
            </div>
          </div>
        ))}
      </div>

      {/* --- Charts Row --- */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        {/* Revenue Bar Chart */}
        <div className="bento-card p-5">
          <div className="flex items-center gap-2 mb-5">
            <span className="material-symbols-outlined text-[18px] text-violet-500">bar_chart</span>
            <h2 className="text-[13px] font-bold text-on-surface">Revenue Trend</h2>
          </div>
          <div className="flex items-end gap-2 h-44">
            {monthlyData.map((d) => (
              <div key={d.month} className="flex-1 flex flex-col items-center gap-1.5">
                <span className="text-[9px] text-outline font-medium">{(d.revenue / 1000).toFixed(0)}K</span>
                <div className="w-full rounded-lg bg-surface-container overflow-hidden flex-1 flex items-end">
                  <div
                    className="w-full rounded-lg bg-gradient-to-t from-primary to-primary/70"
                    style={{ height: `${(d.revenue / maxRevenue) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-2">
            {monthlyData.map((d) => (
              <span key={d.month} className="text-[9px] text-outline font-medium flex-1 text-center">{d.month}</span>
            ))}
          </div>
        </div>

        {/* User Growth Line Chart */}
        <div className="bento-card p-5">
          <div className="flex items-center gap-2 mb-5">
            <span className="material-symbols-outlined text-[18px] text-blue-500">show_chart</span>
            <h2 className="text-[13px] font-bold text-on-surface">User Growth</h2>
          </div>
          <div className="relative h-44">
            <svg className="w-full h-full" viewBox="0 0 400 180" preserveAspectRatio="none">
              <defs>
                <linearGradient id="userGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="rgb(0,50,42)" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="rgb(0,50,42)" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d={`M 0 ${180 - (monthlyData[0].users / maxUsers) * 160} ${monthlyData.map((d, i) => `L ${(i / (monthlyData.length - 1)) * 400} ${180 - (d.users / maxUsers) * 160}`).join(' ')} L 400 180 L 0 180 Z`}
                fill="url(#userGrad)"
              />
              <polyline
                points={monthlyData.map((d, i) => `${(i / (monthlyData.length - 1)) * 400},${180 - (d.users / maxUsers) * 160}`).join(' ')}
                fill="none"
                stroke="rgb(0,50,42)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {monthlyData.map((d, i) => (
                <circle
                  key={i}
                  cx={(i / (monthlyData.length - 1)) * 400}
                  cy={180 - (d.users / maxUsers) * 160}
                  r="3.5"
                  fill="white"
                  stroke="rgb(0,50,42)"
                  strokeWidth="2"
                />
              ))}
            </svg>
            <div className="absolute bottom-0 left-0 right-0 flex justify-between">
              {monthlyData.map((d) => (
                <span key={d.month} className="text-[9px] text-outline font-medium">{d.month}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* --- Bottom Row --- */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        {/* Top Listings */}
        <div className="bento-card overflow-hidden">
          <div className="px-5 py-4 flex items-center gap-2 border-b border-outline-variant/20">
            <span className="material-symbols-outlined text-[18px] text-emerald-500">leaderboard</span>
            <h2 className="text-[13px] font-bold text-on-surface">Top Performing Listings</h2>
          </div>
          <div className="divide-y divide-outline-variant/15">
            {topListings.map((listing, i) => (
              <div key={i} className="flex items-center gap-3 px-5 py-3 hover:bg-surface-container-low/40 transition-colors">
                <span className="text-base font-bold text-outline w-5 text-center shrink-0">{i + 1}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-[13px] font-semibold text-on-surface truncate">{listing.title}</p>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded ${listing.type === 'Car' ? 'bg-blue-50 text-blue-600' : 'bg-emerald-50 text-emerald-600'}`}>{listing.type}</span>
                    <span className="text-[10px] text-outline">{listing.views.toLocaleString()} views</span>
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-[13px] font-bold text-on-surface">{listing.inquiries}</p>
                  <p className="text-[9px] text-outline">inquiries</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Traffic Sources + Donut Chart */}
        <div className="bento-card p-5">
          <div className="flex items-center gap-2 mb-5">
            <span className="material-symbols-outlined text-[18px] text-amber-500">analytics</span>
            <h2 className="text-[13px] font-bold text-on-surface">Traffic Sources</h2>
          </div>
          <div className="space-y-3">
            {trafficSources.map((item) => (
              <div key={item.source}>
                <div className="flex items-center justify-between text-[12px] mb-1">
                  <span className="text-on-surface-variant">{item.source}</span>
                  <span className="font-bold text-on-surface">{item.percentage}%</span>
                </div>
                <div className="w-full h-1.5 bg-surface-container rounded-full overflow-hidden">
                  <div className={`h-full ${item.color} rounded-full`} style={{ width: `${item.percentage}%` }} />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-5 border-t border-outline-variant/20">
            <h3 className="text-[12px] font-bold text-on-surface mb-3">Listings by Type</h3>
            <div className="flex items-center gap-6">
              <div className="relative w-20 h-20 shrink-0">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="38" fill="none" stroke="var(--color-primary)" strokeWidth="10" strokeDasharray="152 252" strokeDashoffset="0" strokeLinecap="round" />
                  <circle cx="50" cy="50" r="38" fill="none" stroke="var(--color-primary-container)" strokeWidth="10" strokeDasharray="100 252" strokeDashoffset="-152" strokeLinecap="round" />
                </svg>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                  <span className="text-[12px] text-on-surface-variant">Cars <span className="font-semibold text-on-surface">60%</span></span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-primary-container" />
                  <span className="text-[12px] text-on-surface-variant">Properties <span className="font-semibold text-on-surface">40%</span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
