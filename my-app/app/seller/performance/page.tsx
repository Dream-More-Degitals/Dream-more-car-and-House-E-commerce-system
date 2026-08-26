'use client'

import { StatCard } from '@/components/ui/StatCard'

import { StatusBadge } from '@/components/ui/StatusBadge'
import { useState } from 'react'

const stats = [
  { label: 'Total Views', value: '8,921', icon: 'visibility', change: '+12% vs last month', changeType: 'positive' },
  { label: 'Avg. Views/Day', value: '297', icon: 'trending_up', change: '+8% vs last month', changeType: 'positive' },
  { label: 'Conversion Rate', value: '3.2%', icon: 'conversion_path', change: '+0.4% vs last month', changeType: 'positive' },
  { label: 'Response Time', value: '1.5h', icon: 'schedule', change: '-30 min improvement', changeType: 'positive' },
]


const chartData = [
  210, 245, 280, 310, 280, 260, 300, 350, 380, 340,
  310, 280, 260, 290, 190, 220, 250, 280, 310, 350,
  420, 390, 350, 320, 310, 290, 310, 340, 360, 380,
]

const maxChart = Math.max(...chartData)

const topListings = [
  { rank: 1, title: '2021 Toyota Camry SE', type: 'car', views: 2340, inquiries: 8, conversion: '3.4%', status: 'active' },
  { rank: 2, title: '3BR Villa in Bole', type: 'house', views: 1890, inquiries: 5, conversion: '2.6%', status: 'active' },
  { rank: 3, title: '2022 Mercedes C200', type: 'car', views: 1560, inquiries: 3, conversion: '1.9%', status: 'active' },
  { rank: 4, title: 'Studio Apartment Kazanchis', type: 'house', views: 980, inquiries: 2, conversion: '2.0%', status: 'active' },
  { rank: 5, title: '2019 Honda CR-V', type: 'car', views: 670, inquiries: 1, conversion: '1.5%', status: 'pending' },
]

const locationBreakdown = [
  { location: 'Addis Ababa', percentage: 62, count: 5531 },
  { location: 'Dire Dawa', percentage: 12, percentageCount: 1071 },
  { location: 'Mekelle', percentage: 8, percentageCount: 714 },
  { location: 'Adama', percentage: 7, percentageCount: 624 },
  { location: 'Hawassa', percentage: 6, percentageCount: 535 },
  { location: 'Other', percentage: 5, percentageCount: 446 },
]

const tips = [
  { icon: 'photo_camera', title: 'Add more photos', description: 'Listings with 8+ photos get 3x more views. Add interior and exterior shots.' },
  { icon: 'edit_note', title: 'Improve descriptions', description: 'Detailed descriptions with keywords help buyers find your listings faster.' },
  { icon: 'timer', title: 'Respond faster', description: 'Reply within 1 hour to increase conversion by 40%. Set up notifications.' },
  { icon: 'price_check', title: 'Competitive pricing', description: 'Your Camry is priced 5% above market. Consider adjusting for faster sale.' },
]

export default function PerformancePage() {
  const [hoveredBar, setHoveredBar] = useState<number | null>(null)

  return (
    <div className="space-y-5">
      <h1 className="text-lg font-semibold text-on-surface">Performance</h1>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {stats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>

      <div className="bento-card">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-sm font-semibold text-on-surface">Views Over Time</h2>
          <span className="text-[10px] text-on-surface-variant">Last 30 days</span>
        </div>
        <div className="relative h-40 flex items-end gap-0.5">
          {chartData.map((val, idx) => (
            <div
              key={idx}
              className="flex-1 relative group cursor-pointer"
              onMouseEnter={() => setHoveredBar(idx)}
              onMouseLeave={() => setHoveredBar(null)}
            >
              <div
                className="rounded-t-sm transition-all"
                style={{
                  height: `${(val / maxChart) * 100}%`,
                  backgroundColor: hoveredBar === idx ? 'var(--color-primary)' : 'var(--color-primary-container)',
                }}
              />
              {hoveredBar === idx && (
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-on-surface text-surface-gray text-[9px] px-1.5 py-0.5 rounded whitespace-nowrap">
                  {val} views
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-2 text-[9px] text-on-surface-variant">
          <span>30 days ago</span>
          <span>Today</span>
        </div>
      </div>

      <div className="bento-card">
        <h2 className="text-sm font-semibold text-on-surface mb-4">Top Performing Listings</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-outline-variant">
                <th className="text-left text-[10px] font-medium text-on-surface-variant pb-2 pr-4">#</th>
                <th className="text-left text-[10px] font-medium text-on-surface-variant pb-2 pr-4">Listing</th>
                <th className="text-right text-[10px] font-medium text-on-surface-variant pb-2 pr-4">Views</th>
                <th className="text-right text-[10px] font-medium text-on-surface-variant pb-2 pr-4">Inquiries</th>
                <th className="text-right text-[10px] font-medium text-on-surface-variant pb-2 pr-4">Conv.</th>
                <th className="text-right text-[10px] font-medium text-on-surface-variant pb-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {topListings.map((listing) => (
                <tr key={listing.rank} className="border-b border-outline-variant/50">
                  <td className="py-2.5 pr-4 text-xs text-on-surface-variant">{listing.rank}</td>
                  <td className="py-2.5 pr-4">
                    <span className="text-xs text-on-surface font-medium">{listing.title}</span>
                    <span className="material-symbols-outlined text-xs text-on-surface-variant align-middle ml-1">
                      {listing.type === 'car' ? 'directions_car' : 'apartment'}
                    </span>
                  </td>
                  <td className="py-2.5 pr-4 text-right text-xs text-on-surface">{listing.views.toLocaleString()}</td>
                  <td className="py-2.5 pr-4 text-right text-xs text-on-surface">{listing.inquiries}</td>
                  <td className="py-2.5 pr-4 text-right text-xs text-emerald-deep font-medium">{listing.conversion}</td>
                  <td className="py-2.5 text-right">
                    <StatusBadge status={listing.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-3">
        <div className="bento-card">
          <h2 className="text-sm font-semibold text-on-surface mb-4">Audience Insights</h2>
          <p className="text-[10px] text-on-surface-variant mb-3">Top locations of your viewers</p>
          <div className="space-y-2.5">
            {locationBreakdown.map((loc) => (
              <div key={loc.location}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-on-surface">{loc.location}</span>
                  <span className="text-[10px] text-on-surface-variant">{loc.percentage}%</span>
                </div>
                <div className="h-1.5 bg-surface-container-low rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full transition-all"
                    style={{ width: `${loc.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bento-card">
          <h2 className="text-sm font-semibold text-on-surface mb-4">Improvement Tips</h2>
          <div className="space-y-3">
            {tips.map((tip) => (
              <div key={tip.title} className="flex items-start gap-3 p-2.5 rounded-xl bg-surface-container-low">
                <span className="material-symbols-outlined text-lg text-primary shrink-0">{tip.icon}</span>
                <div>
                  <p className="text-xs font-medium text-on-surface">{tip.title}</p>
                  <p className="text-[10px] text-on-surface-variant mt-0.5 leading-relaxed">{tip.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
