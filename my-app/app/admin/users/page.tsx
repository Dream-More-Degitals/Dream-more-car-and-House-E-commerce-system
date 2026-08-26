'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { StatusBadge } from '@/components/ui/StatusBadge'

const allUsers = [
  { id: 1, name: 'Abel Mekonnen', email: 'abel@example.com', role: 'Seller', status: 'Active', joined: 'Jan 15', listings: 12 },
  { id: 2, name: 'Sara Tesfaye', email: 'sara@example.com', role: 'Seller', status: 'Active', joined: 'Feb 3', listings: 8 },
  { id: 3, name: 'Dawit Alemayehu', email: 'dawit@example.com', role: 'Buyer', status: 'Active', joined: 'Mar 12', listings: 0 },
  { id: 4, name: 'Hana Gutama', email: 'hana@example.com', role: 'Buyer', status: 'Active', joined: 'Apr 8', listings: 0 },
  { id: 5, name: 'Yonas Bekele', email: 'yonas@example.com', role: 'Seller', status: 'Suspended', joined: 'May 20', listings: 5 },
  { id: 6, name: 'Frehiwot Nigussie', email: 'frehiwot@example.com', role: 'Buyer', status: 'Active', joined: 'Jun 1', listings: 0 },
  { id: 7, name: 'Mulugeta Demisse', email: 'mulugeta@example.com', role: 'Seller', status: 'Pending', joined: 'Aug 20', listings: 1 },
  { id: 8, name: 'Kidus Tilahun', email: 'kidus@example.com', role: 'Buyer', status: 'Active', joined: 'Jul 14', listings: 0 },
  { id: 9, name: 'Tigist Hailu', email: 'tigist@example.com', role: 'Seller', status: 'Active', joined: 'Mar 28', listings: 15 },
  { id: 10, name: 'Daniel Tesfaye', email: 'daniel@example.com', role: 'Buyer', status: 'Inactive', joined: 'Jan 5', listings: 0 },
]

export default function UsersPage() {
  const [statusFilter, setStatusFilter] = useState('All')
  const [roleFilter, setRoleFilter] = useState('All')
  const [search, setSearch] = useState('')

  const filtered = allUsers.filter((u) => {
    const matchStatus = statusFilter === 'All' || u.status === statusFilter
    const matchRole = roleFilter === 'All' || u.role === roleFilter
    const matchSearch = u.name.toLowerCase().includes(search.toLowerCase()) || u.email.toLowerCase().includes(search.toLowerCase())
    return matchStatus && matchRole && matchSearch
  })

  const sellers = allUsers.filter(u => u.role === 'Seller').length
  const buyers = allUsers.filter(u => u.role === 'Buyer').length

  return (
    <div className="space-y-5">
      {/* --- Header --- */}
      <div className="bento-card p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-xl font-bold text-on-surface">Manage Users</h1>
          <p className="text-[12px] text-on-surface-variant mt-0.5">{allUsers.length} registered users (buyers & sellers).</p>
        </div>
        <Button icon="person_add">Add User</Button>
      </div>

      {/* --- Summary Cards --- */}
      <div className="grid grid-cols-3 gap-3">
        <div className="bento-card p-4 text-center">
          <p className="text-2xl font-bold text-on-surface">{allUsers.length}</p>
          <p className="text-[10px] text-on-surface-variant font-semibold uppercase tracking-wider mt-0.5">Total Users</p>
        </div>
        <div className="bento-card p-4 text-center">
          <p className="text-2xl font-bold text-violet-600">{sellers}</p>
          <p className="text-[10px] text-on-surface-variant font-semibold uppercase tracking-wider mt-0.5">Sellers</p>
        </div>
        <div className="bento-card p-4 text-center">
          <p className="text-2xl font-bold text-blue-600">{buyers}</p>
          <p className="text-[10px] text-on-surface-variant font-semibold uppercase tracking-wider mt-0.5">Buyers</p>
        </div>
      </div>

      {/* --- Filters --- */}
      <div className="bento-card p-3 flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[16px]">search</span>
          <input
            className="w-full bg-surface-container-low border-none rounded-xl py-2 pl-9 pr-3 text-[13px] focus:outline-none focus:ring-2 focus:ring-primary/20 placeholder:text-outline-variant"
            placeholder="Search by name or email..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="flex gap-1.5 overflow-x-auto pb-0.5">
          {['All', 'Active', 'Suspended', 'Pending', 'Inactive'].map((s) => (
            <button
              key={s}
              onClick={() => setStatusFilter(s)}
              className={`px-3 py-1.5 rounded-lg text-[11px] font-semibold whitespace-nowrap transition-all ${
                statusFilter === s
                  ? 'bg-primary-container text-on-primary-container'
                  : 'bg-surface-container-low text-on-surface-variant hover:bg-surface-container'
              }`}
            >
              {s}
            </button>
          ))}
          <div className="w-px bg-outline-variant/40 mx-1" />
          {['All', 'Seller', 'Buyer'].map((r) => (
            <button
              key={r}
              onClick={() => setRoleFilter(r)}
              className={`px-3 py-1.5 rounded-lg text-[11px] font-semibold whitespace-nowrap transition-all ${
                roleFilter === r
                  ? 'bg-tertiary-container text-on-tertiary-container'
                  : 'bg-surface-container-low text-on-surface-variant hover:bg-surface-container'
              }`}
            >
              {r === 'All' ? 'All Roles' : r}
            </button>
          ))}
        </div>
      </div>

      {/* --- Users Table --- */}
      <div className="bento-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-[13px]">
            <thead>
              <tr className="border-b border-outline-variant/20">
                <th className="text-left px-5 py-3 font-semibold text-on-surface-variant text-[10px] uppercase tracking-wider">User</th>
                <th className="text-left px-5 py-3 font-semibold text-on-surface-variant text-[10px] uppercase tracking-wider">Role</th>
                <th className="text-left px-5 py-3 font-semibold text-on-surface-variant text-[10px] uppercase tracking-wider">Status</th>
                <th className="text-left px-5 py-3 font-semibold text-on-surface-variant text-[10px] uppercase tracking-wider">Listings</th>
                <th className="text-left px-5 py-3 font-semibold text-on-surface-variant text-[10px] uppercase tracking-wider">Joined</th>
                <th className="text-right px-5 py-3 font-semibold text-on-surface-variant text-[10px] uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/15">
              {filtered.map((user) => (
                <tr key={user.id} className="hover:bg-surface-container-low/40 transition-colors">
                  <td className="px-5 py-3.5">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container font-bold text-[11px] shrink-0">
                        {user.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div className="min-w-0">
                        <p className="font-semibold text-on-surface truncate">{user.name}</p>
                        <p className="text-[10px] text-outline truncate">{user.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-3.5">
                    <StatusBadge status={user.role} variant="type" />
                  </td>
                  <td className="px-5 py-3.5">
                    <StatusBadge status={user.status} />
                  </td>
                  <td className="px-5 py-3.5 font-semibold text-on-surface">{user.listings}</td>
                  <td className="px-5 py-3.5 text-on-surface-variant text-[11px]">{user.joined}</td>
                  <td className="px-5 py-3.5 text-right">
                    <div className="flex items-center justify-end gap-0.5">
                      <button className="w-7 h-7 rounded-lg flex items-center justify-center text-on-surface-variant hover:bg-surface-container-low hover:text-primary transition-colors">
                        <span className="material-symbols-outlined text-[15px]">visibility</span>
                      </button>
                      <button className="w-7 h-7 rounded-lg flex items-center justify-center text-on-surface-variant hover:bg-surface-container-low hover:text-primary transition-colors">
                        <span className="material-symbols-outlined text-[15px]">edit</span>
                      </button>
                      <button className="w-7 h-7 rounded-lg flex items-center justify-center text-on-surface-variant hover:bg-amber-50 hover:text-amber-600 transition-colors">
                        <span className="material-symbols-outlined text-[15px]">block</span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {filtered.length === 0 && (
          <div className="flex flex-col items-center justify-center py-16">
            <span className="material-symbols-outlined text-[40px] mb-2 text-outline">person_off</span>
            <p className="text-[13px] font-medium text-on-surface-variant">No users found</p>
          </div>
        )}
      </div>

      {/* --- Pagination --- */}
      <div className="flex items-center justify-between text-[12px] text-on-surface-variant">
        <p>Showing <span className="font-semibold text-on-surface">{filtered.length}</span> of {allUsers.length}</p>
        <div className="flex items-center gap-1.5">
          <button className="px-3 py-1.5 rounded-lg border border-outline-variant/50 hover:bg-surface-container-low transition-colors font-medium" disabled>Prev</button>
          <span className="px-3 py-1.5 bg-primary-container text-on-primary-container rounded-lg text-[11px] font-bold">1</span>
          <button className="px-3 py-1.5 rounded-lg border border-outline-variant/50 hover:bg-surface-container-low transition-colors font-medium" disabled>Next</button>
        </div>
      </div>
    </div>
  )
}
