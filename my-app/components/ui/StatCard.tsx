'use client'

interface StatCardProps {
  label: string
  value: string
  change?: string
  up?: boolean
  icon: string
  accentColor?: string
}

export function StatCard({ label, value, change, up = true, icon, accentColor = 'bg-blue-500' }: StatCardProps) {
  return (
    <div className="bento-card p-4 group cursor-default">
      <div className="flex items-center justify-between mb-3">
        <div className={`w-9 h-9 rounded-xl ${accentColor} bg-opacity-10 flex items-center justify-center`}>
          <span className={`material-symbols-outlined text-[18px] ${accentColor.replace('bg-', 'text-')}`}>{icon}</span>
        </div>
        {change && (
          <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-md ${up ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-500'}`}>
            {change}
          </span>
        )}
      </div>
      <p className="text-xl font-bold text-on-surface tracking-tight">{value}</p>
      <p className="text-[11px] text-on-surface-variant mt-0.5">{label}</p>
    </div>
  )
}
