'use client'

import { useState } from 'react'

const allLogs = [
  { id: 1, timestamp: 'Aug 25, 14:32', level: 'Info', message: 'User Abel Mekonnen registered a new account', user: 'System' },
  { id: 2, timestamp: 'Aug 25, 14:28', level: 'Warning', message: 'High API usage detected (78% of quota)', user: 'System' },
  { id: 3, timestamp: 'Aug 25, 14:15', level: 'Info', message: 'Listing "2024 BMW X7" submitted for review', user: 'Mulugeta D.' },
  { id: 4, timestamp: 'Aug 25, 13:55', level: 'Error', message: 'Payment gateway timeout - Stripe API unreachable', user: 'System' },
  { id: 5, timestamp: 'Aug 25, 13:40', level: 'Info', message: 'Verification approved for Abel Mekonnen', user: 'Admin' },
  { id: 6, timestamp: 'Aug 25, 13:22', level: 'Warning', message: 'Suspicious login attempt detected for user yonas@example.com', user: 'Security' },
  { id: 7, timestamp: 'Aug 25, 12:58', level: 'Info', message: 'Database backup completed successfully', user: 'System' },
  { id: 8, timestamp: 'Aug 25, 12:30', level: 'Error', message: 'Email service temporarily unavailable - retry queue active', user: 'System' },
  { id: 9, timestamp: 'Aug 25, 11:45', level: 'Info', message: 'Sara Tesfaye listed "Entoto Heights Estate" for 62M ETB', user: 'Sara T.' },
  { id: 10, timestamp: 'Aug 25, 11:10', level: 'Warning', message: 'Storage usage at 62% - consider cleanup', user: 'System' },
]

const levelStyles: Record<string, string> = {
  Info: 'bg-blue-50 text-blue-600',
  Warning: 'bg-amber-50 text-amber-600',
  Error: 'bg-red-50 text-red-500',
}

const levelIcons: Record<string, string> = {
  Info: 'info',
  Warning: 'warning',
  Error: 'error',
}

export default function LogsPage() {
  const [filter, setFilter] = useState('All')

  const filtered = allLogs.filter((l) => filter === 'All' || l.level === filter)

  return (
    <div className="space-y-5">
      {/* --- Header --- */}
      <div className="bento-card p-5">
        <h1 className="text-xl font-bold text-on-surface">System Logs</h1>
        <p className="text-[12px] text-on-surface-variant mt-0.5">Monitor system events, errors, and activities.</p>
      </div>

      {/* --- Filter Bar --- */}
      <div className="flex gap-1.5 bg-surface-container rounded-xl p-1 w-fit">
        {['All', 'Info', 'Warning', 'Error'].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-1.5 rounded-lg text-[11px] font-semibold transition-all ${
              filter === f ? 'bg-surface-container-lowest shadow-sm text-on-surface' : 'text-on-surface-variant hover:text-on-surface'
            }`}
          >
            {f}
            {f !== 'All' && (
              <span className="ml-1.5 text-[9px]">({allLogs.filter(l => l.level === f).length})</span>
            )}
          </button>
        ))}
      </div>

      {/* --- Log Entries --- */}
      <div className="bento-card divide-y divide-outline-variant/15">
        {filtered.map((log) => (
          <div key={log.id} className="flex items-start gap-3 px-5 py-3.5 hover:bg-surface-container-low/40 transition-colors">
            <span className={`material-symbols-outlined text-[16px] mt-0.5 shrink-0 ${levelIcons[log.level] === 'error' ? 'text-red-500' : levelIcons[log.level] === 'warning' ? 'text-amber-500' : 'text-blue-500'}`}>
              {levelIcons[log.level]}
            </span>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded ${levelStyles[log.level]}`}>
                  {log.level}
                </span>
                <span className="text-[10px] text-outline font-medium">{log.timestamp}</span>
              </div>
              <p className="text-[13px] text-on-surface mt-1 leading-snug">{log.message}</p>
              <p className="text-[10px] text-on-surface-variant mt-1">
                <span className="material-symbols-outlined text-[10px] align-middle mr-0.5">person</span>
                {log.user}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
