'use client'

import { useState } from 'react'
import AdminSidebar from '@/components/layout/AdminSidebar'
import Topbar from '@/components/layout/Topbar'
import { Button } from '@/components/ui/Button'
import { StatusBadge } from '@/components/ui/StatusBadge'
import { formatDate, getInitials } from '@/lib/utils'

type ReportStatus = 'pending' | 'reviewed' | 'resolved' | 'dismissed'

interface ReportedMessage {
  id: string
  reporterId: string
  reporterName: string
  reportedUserId: string
  reportedUserName: string
  messageContent: string
  reason: string
  category: 'spam' | 'harassment' | 'scam' | 'inappropriate' | 'other'
  reportedAt: string
  status: ReportStatus
  adminNotes?: string
}

const MOCK_REPORTS: ReportedMessage[] = [
  {
    id: 'r1',
    reporterId: 'u1',
    reporterName: 'Hanna Tesfaye',
    reportedUserId: 'u2',
    reportedUserName: 'Unknown User',
    messageContent: 'Send me your phone number and address for quick deal.',
    reason: 'This looks like a scam to get personal information',
    category: 'scam',
    reportedAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
    status: 'pending',
  },
  {
    id: 'r2',
    reporterId: 'u3',
    reporterName: 'Dawit Alemayehu',
    reportedUserId: 'u4',
    reportedUserName: 'Spam Seller',
    messageContent: 'Buy now! 50% discount! Limited time offer! Click here!!!',
    reason: 'Spam messages about fake discounts',
    category: 'spam',
    reportedAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
    status: 'pending',
  },
  {
    id: 'r3',
    reporterId: 'u5',
    reporterName: 'Sara Mohammed',
    reportedUserId: 'u6',
    reportedUserName: 'Rude Buyer',
    messageContent: 'You are lying about the car condition! This is fraud!',
    reason: 'Harassment and aggressive language',
    category: 'harassment',
    reportedAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    status: 'reviewed',
    adminNotes: 'Warned the user about aggressive language.',
  },
]

export default function AdminMessagesPage() {
  const [reports, setReports] = useState<ReportedMessage[]>(MOCK_REPORTS)
  const [filter, setFilter] = useState<'all' | ReportStatus>('all')
  const [selectedReport, setSelectedReport] = useState<ReportedMessage | null>(null)
  const [adminNotes, setAdminNotes] = useState('')

  const filtered = filter === 'all' ? reports : reports.filter(r => r.status === filter)
  const pendingCount = reports.filter(r => r.status === 'pending').length

  const handleAction = (id: string, action: 'resolve' | 'dismiss' | 'warn') => {
    setReports(prev =>
      prev.map(r =>
        r.id === id
          ? {
              ...r,
              status: action === 'dismiss' ? 'dismissed' : 'resolved',
              adminNotes: adminNotes || (action === 'warn' ? 'User warned about policy violation' : undefined),
            }
          : r
      )
    )
    setSelectedReport(null)
    setAdminNotes('')
  }

  const getCategoryIcon = (category: string) => {
    const icons: Record<string, string> = {
      spam: 'mail',
      harassment: 'report',
      scam: 'warning',
      inappropriate: 'block',
      other: 'help',
    }
    return icons[category] || 'help'
  }

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      spam: 'text-amber-600 bg-amber-50',
      harassment: 'text-red-600 bg-red-50',
      scam: 'text-orange-600 bg-orange-50',
      inappropriate: 'text-purple-600 bg-purple-50',
      other: 'text-gray-600 bg-gray-50',
    }
    return colors[category] || 'text-gray-600 bg-gray-50'
  }

  return (
    <div className="flex min-h-screen bg-surface">
      <AdminSidebar />
      <div className="flex-1 ml-64">
        <Topbar title="Message Moderation" subtitle="Review reported messages and take action" />
        <main className="p-6">
          {/* Stats */}
          <div className="grid grid-cols-4 gap-4 mb-6">
            {[
              { label: 'Total Reports', value: reports.length, icon: 'flag', color: 'text-blue-600' },
              { label: 'Pending Review', value: pendingCount, icon: 'pending', color: 'text-amber-600' },
              { label: 'Resolved', value: reports.filter(r => r.status === 'resolved').length, icon: 'check_circle', color: 'text-emerald-600' },
              { label: 'Dismissed', value: reports.filter(r => r.status === 'dismissed').length, icon: 'cancel', color: 'text-gray-600' },
            ].map((stat) => (
              <div key={stat.label} className="bento-card">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-surface-container-low flex items-center justify-center">
                    <span className={`material-symbols-outlined text-xl ${stat.color}`}>{stat.icon}</span>
                  </div>
                  <div>
                    <p className="text-lg font-bold text-on-surface">{stat.value}</p>
                    <p className="text-[10px] text-on-surface-variant">{stat.label}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Filter Tabs */}
          <div className="flex gap-2 mb-4">
            {(['all', 'pending', 'reviewed', 'resolved', 'dismissed'] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-3 py-1.5 rounded-full text-[10px] font-medium transition-colors ${
                  filter === f
                    ? 'bg-primary text-on-primary'
                    : 'bg-surface-container-low text-on-surface-variant hover:bg-surface-container'
                }`}
              >
                {f.charAt(0).toUpperCase() + f.slice(1)}
              </button>
            ))}
          </div>

          {/* Reports List */}
          <div className="space-y-3">
            {filtered.map((report) => (
              <div
                key={report.id}
                className="bento-card hover:border-primary/30 transition-colors cursor-pointer"
                onClick={() => setSelectedReport(report)}
              >
                <div className="flex items-start gap-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${getCategoryColor(report.category)}`}>
                    <span className="material-symbols-outlined text-lg">{getCategoryIcon(report.category)}</span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <StatusBadge status={report.status.charAt(0).toUpperCase() + report.status.slice(1)} />
                      <span className={`px-2 py-0.5 rounded-full text-[9px] font-medium ${getCategoryColor(report.category)}`}>
                        {report.category}
                      </span>
                    </div>

                    <p className="text-xs text-on-surface font-medium mb-1">
                      Reported by {report.reporterName} against {report.reportedUserName}
                    </p>

                    <div className="p-2 rounded-lg bg-surface-container-low mb-2">
                      <p className="text-[10px] text-on-surface-variant italic">&quot;{report.messageContent}&quot;</p>
                    </div>

                    <p className="text-[10px] text-on-surface-variant">{report.reason}</p>

                    <p className="text-[9px] text-on-surface-variant mt-1">{formatDate(report.reportedAt)}</p>

                    {report.adminNotes && (
                      <div className="mt-2 p-2 rounded-lg bg-primary/5 border border-primary/20">
                        <p className="text-[9px] text-primary font-medium">Admin Note:</p>
                        <p className="text-[10px] text-on-surface">{report.adminNotes}</p>
                      </div>
                    )}
                  </div>

                  {report.status === 'pending' && (
                    <div className="flex flex-col gap-1 flex-shrink-0">
                      <button
                        onClick={(e) => { e.stopPropagation(); handleAction(report.id, 'resolve'); }}
                        className="w-7 h-7 rounded-lg flex items-center justify-center text-emerald-600 hover:bg-emerald-50"
                        title="Resolve"
                      >
                        <span className="material-symbols-outlined text-sm">check_circle</span>
                      </button>
                      <button
                        onClick={(e) => { e.stopPropagation(); handleAction(report.id, 'warn'); }}
                        className="w-7 h-7 rounded-lg flex items-center justify-center text-amber-600 hover:bg-amber-50"
                        title="Warn User"
                      >
                        <span className="material-symbols-outlined text-sm">warning</span>
                      </button>
                      <button
                        onClick={(e) => { e.stopPropagation(); handleAction(report.id, 'dismiss'); }}
                        className="w-7 h-7 rounded-lg flex items-center justify-center text-gray-600 hover:bg-gray-50"
                        title="Dismiss"
                      >
                        <span className="material-symbols-outlined text-sm">cancel</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Detail Modal */}
          {selectedReport && (
            <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4" onClick={() => setSelectedReport(null)}>
              <div className="bg-surface rounded-2xl w-full max-w-lg p-6 space-y-4 max-h-[80vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-semibold text-on-surface">Report Details</h3>
                  <button onClick={() => setSelectedReport(null)} className="text-on-surface-variant">
                    <span className="material-symbols-outlined">close</span>
                  </button>
                </div>

                <div className="space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 rounded-xl bg-surface-container-low">
                      <p className="text-[9px] text-on-surface-variant mb-1">Reporter</p>
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="text-[8px] font-semibold text-primary">{getInitials(selectedReport.reporterName)}</span>
                        </div>
                        <span className="text-[10px] font-medium text-on-surface">{selectedReport.reporterName}</span>
                      </div>
                    </div>
                    <div className="p-3 rounded-xl bg-surface-container-low">
                      <p className="text-[9px] text-on-surface-variant mb-1">Reported User</p>
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center">
                          <span className="text-[8px] font-semibold text-red-600">{getInitials(selectedReport.reportedUserName)}</span>
                        </div>
                        <span className="text-[10px] font-medium text-on-surface">{selectedReport.reportedUserName}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-surface-container-low">
                    <p className="text-[9px] text-on-surface-variant mb-1">Reported Message</p>
                    <p className="text-xs text-on-surface italic">&quot;{selectedReport.messageContent}&quot;</p>
                  </div>

                  <div className="p-3 rounded-xl bg-surface-container-low">
                    <p className="text-[9px] text-on-surface-variant mb-1">Reason for Report</p>
                    <p className="text-xs text-on-surface">{selectedReport.reason}</p>
                  </div>

                  <div>
                    <label className="text-[10px] font-medium text-on-surface-variant mb-1 block">Admin Notes</label>
                    <textarea
                      value={adminNotes}
                      onChange={(e) => setAdminNotes(e.target.value)}
                      placeholder="Add notes about this report..."
                      rows={2}
                      className="w-full px-3 py-2 rounded-xl bg-surface-container-low text-xs text-on-surface placeholder:text-on-surface-variant border border-outline-variant focus:border-primary focus:outline-none resize-none"
                    />
                  </div>
                </div>

                {selectedReport.status === 'pending' && (
                  <div className="flex gap-2">
                    <Button
                      variant="primary"
                      icon="check_circle"
                      className="flex-1 bg-emerald-600 hover:bg-emerald-700"
                      onClick={() => handleAction(selectedReport.id, 'resolve')}
                    >
                      Resolve
                    </Button>
                    <Button
                      variant="outline"
                      icon="warning"
                      className="flex-1 border-amber-500 text-amber-600"
                      onClick={() => handleAction(selectedReport.id, 'warn')}
                    >
                      Warn User
                    </Button>
                    <Button
                      variant="outline"
                      icon="cancel"
                      className="flex-1"
                      onClick={() => handleAction(selectedReport.id, 'dismiss')}
                    >
                      Dismiss
                    </Button>
                  </div>
                )}
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}
