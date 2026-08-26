'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useNotifications, type Notification } from '@/context/notification-context'
import { formatRelativeTime } from '@/lib/utils'

export default function NotificationsPage() {
  const { notifications, markAsRead, markAllAsRead, clearAll, removeNotification } = useNotifications()
  const [filter, setFilter] = useState<'all' | 'unread'>('all')

  const filtered = filter === 'unread'
    ? notifications.filter(n => !n.isRead)
    : notifications

  const getNotificationIcon = (type: Notification['type']) => {
    const icons: Record<Notification['type'], string> = {
      message: 'chat',
      listing: 'directions_car',
      payment: 'payment',
      verification: 'verified',
      system: 'info',
    }
    return icons[type]
  }

  const getNotificationColor = (type: Notification['type']) => {
    const colors: Record<Notification['type'], string> = {
      message: 'text-blue-600 bg-blue-50',
      listing: 'text-emerald-600 bg-emerald-50',
      payment: 'text-amber-600 bg-amber-50',
      verification: 'text-purple-600 bg-purple-50',
      system: 'text-gray-600 bg-gray-50',
    }
    return colors[type]
  }

  return (
    <div className="min-h-screen bg-surface">
      <div className="max-w-2xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-lg font-semibold text-on-surface">Notifications</h1>
            <p className="text-xs text-on-surface-variant">
              {notifications.filter(n => !n.isRead).length} unread notifications
            </p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={markAllAsRead}
              className="px-3 py-1.5 rounded-full text-[10px] font-medium bg-surface-container-low text-on-surface-variant hover:bg-surface-container transition-colors"
            >
              Mark all read
            </button>
            <button
              onClick={clearAll}
              className="px-3 py-1.5 rounded-full text-[10px] font-medium bg-surface-container-low text-on-surface-variant hover:bg-surface-container transition-colors"
            >
              Clear all
            </button>
          </div>
        </div>

        {/* Filter */}
        <div className="flex gap-2 mb-4">
          {(['all', 'unread'] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-3 py-1.5 rounded-full text-[10px] font-medium transition-colors ${
                filter === f
                  ? 'bg-primary text-on-primary'
                  : 'bg-surface-container-low text-on-surface-variant'
              }`}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>

        {/* Notifications List */}
        {filtered.length === 0 ? (
          <div className="text-center py-16">
            <span className="material-symbols-outlined text-on-surface-variant text-3xl">notifications_none</span>
            <p className="text-sm text-on-surface-variant mt-2">No notifications</p>
          </div>
        ) : (
          <div className="space-y-2">
            {filtered.map((notification) => (
              <div
                key={notification.id}
                className={`bento-card transition-colors ${
                  !notification.isRead ? 'border-l-2 border-l-primary bg-primary/[0.02]' : ''
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${getNotificationColor(notification.type)}`}>
                    <span className="material-symbols-outlined text-lg">{getNotificationIcon(notification.type)}</span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className={`text-xs font-semibold ${!notification.isRead ? 'text-on-surface' : 'text-on-surface-variant'}`}>
                        {notification.title}
                      </h3>
                      <button
                        onClick={() => removeNotification(notification.id)}
                        className="text-on-surface-variant hover:text-error flex-shrink-0"
                      >
                        <span className="material-symbols-outlined text-sm">close</span>
                      </button>
                    </div>
                    <p className="text-[10px] text-on-surface-variant mt-0.5">{notification.body}</p>
                    <div className="flex items-center gap-2 mt-1.5">
                      <span className="text-[9px] text-on-surface-variant">{formatRelativeTime(notification.createdAt)}</span>
                      {!notification.isRead && (
                        <button
                          onClick={() => markAsRead(notification.id)}
                          className="text-[9px] text-primary hover:text-primary/80"
                        >
                          Mark as read
                        </button>
                      )}
                      {notification.link && (
                        <Link href={notification.link} className="text-[9px] text-primary hover:text-primary/80">
                          View
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
