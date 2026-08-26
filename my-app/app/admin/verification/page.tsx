'use client'

import { useState } from 'react'
import AdminSidebar from '@/components/layout/AdminSidebar'
import Topbar from '@/components/layout/Topbar'
import { Button } from '@/components/ui/Button'
import { StatusBadge } from '@/components/ui/StatusBadge'
import { formatDate, getInitials } from '@/lib/utils'

type VerificationStatus = 'pending' | 'approved' | 'rejected'

interface VerificationRequest {
  id: string
  userId: string
  userName: string
  userEmail: string
  userPhone: string
  role: 'seller' | 'buyer'
  documentType: string
  documentNumber: string
  submittedAt: string
  status: VerificationStatus
  rejectionReason?: string
  reviewedAt?: string
  reviewedBy?: string
}

const MOCK_REQUESTS: VerificationRequest[] = [
  {
    id: 'v1',
    userId: 'u1',
    userName: 'Abebe Kebede',
    userEmail: 'abebe@example.com',
    userPhone: '+251911223344',
    role: 'seller',
    documentType: 'National ID',
    documentNumber: 'ETH-1234567890',
    submittedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    status: 'pending',
  },
  {
    id: 'v2',
    userId: 'u2',
    userName: 'Hanna Tesfaye',
    userEmail: 'hanna@example.com',
    userPhone: '+251922334455',
    role: 'seller',
    documentType: 'Business License',
    documentNumber: 'BL-2026-001',
    submittedAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
    status: 'pending',
  },
  {
    id: 'v3',
    userId: 'u3',
    userName: 'Dawit Alemayehu',
    userEmail: 'dawit@example.com',
    userPhone: '+251933445566',
    role: 'buyer',
    documentType: 'Passport',
    documentNumber: 'Passport-ET-9876',
    submittedAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    status: 'approved',
    reviewedAt: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString(),
    reviewedBy: 'Admin',
  },
  {
    id: 'v4',
    userId: 'u4',
    userName: 'Sara Mohammed',
    userEmail: 'sara@example.com',
    userPhone: '+251944556677',
    role: 'seller',
    documentType: 'National ID',
    documentNumber: 'ETH-0000000000',
    submittedAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
    status: 'rejected',
    rejectionReason: 'Document image is blurry and cannot be verified.',
    reviewedAt: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000).toISOString(),
    reviewedBy: 'Admin',
  },
]

export default function AdminVerificationPage() {
  const [requests, setRequests] = useState<VerificationRequest[]>(MOCK_REQUESTS)
  const [filter, setFilter] = useState<'all' | VerificationStatus>('all')
  const [selectedRequest, setSelectedRequest] = useState<VerificationRequest | null>(null)
  const [rejectReason, setRejectReason] = useState('')
  const [showRejectModal, setShowRejectModal] = useState(false)

  const filtered = filter === 'all' ? requests : requests.filter(r => r.status === filter)
  const pendingCount = requests.filter(r => r.status === 'pending').length

  const handleApprove = (id: string) => {
    setRequests(prev =>
      prev.map(r =>
        r.id === id
          ? { ...r, status: 'approved' as const, reviewedAt: new Date().toISOString(), reviewedBy: 'Admin' }
          : r
      )
    )
    setSelectedRequest(null)
  }

  const handleReject = (id: string) => {
    if (!rejectReason.trim()) return
    setRequests(prev =>
      prev.map(r =>
        r.id === id
          ? {
              ...r,
              status: 'rejected' as const,
              rejectionReason: rejectReason,
              reviewedAt: new Date().toISOString(),
              reviewedBy: 'Admin',
            }
          : r
      )
    )
    setRejectReason('')
    setShowRejectModal(false)
    setSelectedRequest(null)
  }

  return (
    <div className="flex min-h-screen bg-surface">
      <AdminSidebar />
      <div className="flex-1 ml-64">
        <Topbar title="Seller Verification" subtitle="Review and approve seller identity documents" />
        <main className="p-6">
          {/* Stats */}
          <div className="grid grid-cols-4 gap-4 mb-6">
            {[
              { label: 'Total Requests', value: requests.length, icon: 'badge', color: 'text-blue-600' },
              { label: 'Pending Review', value: pendingCount, icon: 'pending', color: 'text-amber-600' },
              { label: 'Approved', value: requests.filter(r => r.status === 'approved').length, icon: 'check_circle', color: 'text-emerald-600' },
              { label: 'Rejected', value: requests.filter(r => r.status === 'rejected').length, icon: 'cancel', color: 'text-red-600' },
            ].map((stat) => (
              <div key={stat.label} className="bento-card">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl bg-surface-container-low flex items-center justify-center`}>
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
            {(['all', 'pending', 'approved', 'rejected'] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-3 py-1.5 rounded-full text-[10px] font-medium transition-colors ${
                  filter === f
                    ? 'bg-primary text-on-primary'
                    : 'bg-surface-container-low text-on-surface-variant hover:bg-surface-container'
                }`}
              >
                {f === 'all' ? 'All' : f.charAt(0).toUpperCase() + f.slice(1)}
                {f === 'pending' && pendingCount > 0 && (
                  <span className="ml-1 w-4 h-4 rounded-full bg-amber-500 text-white text-[8px] inline-flex items-center justify-center">
                    {pendingCount}
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Table */}
          <div className="bento-card overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-outline-variant">
                  <th className="text-left py-3 px-4 text-[10px] font-semibold text-on-surface-variant">Seller</th>
                  <th className="text-left py-3 px-4 text-[10px] font-semibold text-on-surface-variant">Document</th>
                  <th className="text-left py-3 px-4 text-[10px] font-semibold text-on-surface-variant">Role</th>
                  <th className="text-left py-3 px-4 text-[10px] font-semibold text-on-surface-variant">Submitted</th>
                  <th className="text-left py-3 px-4 text-[10px] font-semibold text-on-surface-variant">Status</th>
                  <th className="text-right py-3 px-4 text-[10px] font-semibold text-on-surface-variant">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((req) => (
                  <tr key={req.id} className="border-b border-outline-variant/50 hover:bg-surface-container-low/50">
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="text-[10px] font-semibold text-primary">{getInitials(req.userName)}</span>
                        </div>
                        <div>
                          <p className="text-xs font-medium text-on-surface">{req.userName}</p>
                          <p className="text-[9px] text-on-surface-variant">{req.userEmail}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <p className="text-[10px] text-on-surface">{req.documentType}</p>
                      <p className="text-[9px] text-on-surface-variant">{req.documentNumber}</p>
                    </td>
                    <td className="py-3 px-4">
                      <StatusBadge status={req.role === 'seller' ? 'Seller' : 'Buyer'} />
                    </td>
                    <td className="py-3 px-4 text-[10px] text-on-surface-variant">{formatDate(req.submittedAt)}</td>
                    <td className="py-3 px-4">
                      <StatusBadge status={req.status.charAt(0).toUpperCase() + req.status.slice(1)} />
                    </td>
                    <td className="py-3 px-4 text-right">
                      <div className="flex items-center justify-end gap-1">
                        <button
                          onClick={() => setSelectedRequest(req)}
                          className="w-7 h-7 rounded-lg flex items-center justify-center text-on-surface-variant hover:bg-surface-container"
                        >
                          <span className="material-symbols-outlined text-sm">visibility</span>
                        </button>
                        {req.status === 'pending' && (
                          <>
                            <button
                              onClick={() => handleApprove(req.id)}
                              className="w-7 h-7 rounded-lg flex items-center justify-center text-emerald-600 hover:bg-emerald-50"
                            >
                              <span className="material-symbols-outlined text-sm">check_circle</span>
                            </button>
                            <button
                              onClick={() => { setSelectedRequest(req); setShowRejectModal(true); }}
                              className="w-7 h-7 rounded-lg flex items-center justify-center text-red-600 hover:bg-red-50"
                            >
                              <span className="material-symbols-outlined text-sm">cancel</span>
                            </button>
                          </>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Detail Modal */}
          {selectedRequest && !showRejectModal && (
            <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4" onClick={() => setSelectedRequest(null)}>
              <div className="bg-surface rounded-2xl w-full max-w-md p-6 space-y-4" onClick={(e) => e.stopPropagation()}>
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-semibold text-on-surface">Verification Details</h3>
                  <button onClick={() => setSelectedRequest(null)} className="text-on-surface-variant">
                    <span className="material-symbols-outlined">close</span>
                  </button>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-sm font-semibold text-primary">{getInitials(selectedRequest.userName)}</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-on-surface">{selectedRequest.userName}</p>
                      <p className="text-[10px] text-on-surface-variant">{selectedRequest.userEmail}</p>
                      <p className="text-[10px] text-on-surface-variant">{selectedRequest.userPhone}</p>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-surface-container-low space-y-2">
                    <div className="flex justify-between">
                      <span className="text-[10px] text-on-surface-variant">Document Type</span>
                      <span className="text-[10px] font-medium text-on-surface">{selectedRequest.documentType}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[10px] text-on-surface-variant">Document Number</span>
                      <span className="text-[10px] font-medium text-on-surface">{selectedRequest.documentNumber}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[10px] text-on-surface-variant">Submitted</span>
                      <span className="text-[10px] font-medium text-on-surface">{formatDate(selectedRequest.submittedAt)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[10px] text-on-surface-variant">Status</span>
                      <StatusBadge status={selectedRequest.status.charAt(0).toUpperCase() + selectedRequest.status.slice(1)} />
                    </div>
                  </div>

                  {/* Document Preview Placeholder */}
                  <div className="aspect-[16/9] rounded-xl bg-surface-container-high flex items-center justify-center">
                    <div className="text-center">
                      <span className="material-symbols-outlined text-on-surface-variant text-2xl">description</span>
                      <p className="text-[10px] text-on-surface-variant mt-1">Document Preview</p>
                    </div>
                  </div>

                  {selectedRequest.rejectionReason && (
                    <div className="p-3 rounded-xl bg-error/5 border border-error/20">
                      <p className="text-[10px] font-medium text-error mb-1">Rejection Reason</p>
                      <p className="text-[10px] text-on-surface">{selectedRequest.rejectionReason}</p>
                    </div>
                  )}
                </div>

                {selectedRequest.status === 'pending' && (
                  <div className="flex gap-2">
                    <Button
                      variant="primary"
                      icon="check_circle"
                      className="flex-1 bg-emerald-600 hover:bg-emerald-700"
                      onClick={() => handleApprove(selectedRequest.id)}
                    >
                      Approve
                    </Button>
                    <Button
                      variant="danger"
                      icon="cancel"
                      className="flex-1"
                      onClick={() => setShowRejectModal(true)}
                    >
                      Reject
                    </Button>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Reject Modal */}
          {showRejectModal && selectedRequest && (
            <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4" onClick={() => { setShowRejectModal(false); setRejectReason(''); }}>
              <div className="bg-surface rounded-2xl w-full max-w-md p-6 space-y-4" onClick={(e) => e.stopPropagation()}>
                <h3 className="text-sm font-semibold text-on-surface">Reject Verification</h3>
                <p className="text-xs text-on-surface-variant">
                  Please provide a reason for rejecting {selectedRequest.userName}&apos;s verification.
                </p>
                <textarea
                  value={rejectReason}
                  onChange={(e) => setRejectReason(e.target.value)}
                  placeholder="Enter rejection reason..."
                  rows={3}
                  className="w-full px-3 py-2 rounded-xl bg-surface-container-low text-xs text-on-surface placeholder:text-on-surface-variant border border-outline-variant focus:border-primary focus:outline-none resize-none"
                />
                <div className="flex gap-2">
                  <Button variant="outline" className="flex-1" onClick={() => { setShowRejectModal(false); setRejectReason(''); }}>
                    Cancel
                  </Button>
                  <Button
                    variant="danger"
                    icon="cancel"
                    className="flex-1"
                    onClick={() => handleReject(selectedRequest.id)}
                    disabled={!rejectReason.trim()}
                  >
                    Reject
                  </Button>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}
