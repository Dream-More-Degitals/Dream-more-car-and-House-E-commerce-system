'use client'

import { createContext, useContext, useState, useCallback, type ReactNode } from 'react'

export interface Notification {
  id: string
  type: 'message' | 'listing' | 'payment' | 'verification' | 'system'
  title: string
  body: string
  isRead: boolean
  createdAt: string
  link?: string
}

interface NotificationContextType {
  notifications: Notification[]
  unreadCount: number
  addNotification: (n: Omit<Notification, 'id' | 'isRead' | 'createdAt'>) => void
  markAsRead: (id: string) => void
  markAllAsRead: () => void
  clearAll: () => void
  removeNotification: (id: string) => void
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined)

function getInitialNotifications(): Notification[] {
  return [
    {
      id: '1',
      type: 'listing',
      title: 'Listing Approved',
      body: 'Your Toyota Camry 2021 listing has been approved and is now live.',
      isRead: false,
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      link: '/seller/listings',
    },
    {
      id: '2',
      type: 'message',
      title: 'New Message',
      body: 'Abebe sent you a message about your Toyota Camry listing.',
      isRead: false,
      createdAt: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
      link: '/inbox',
    },
    {
      id: '3',
      type: 'verification',
      title: 'Verification Approved',
      body: 'Your seller verification has been approved. You now have a verified badge.',
      isRead: true,
      createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
    },
  ]
}

export function NotificationProvider({ children }: { children: ReactNode }) {
  const [notifications, setNotifications] = useState<Notification[]>(getInitialNotifications)

  const unreadCount = notifications.filter(n => !n.isRead).length

  const addNotification = useCallback((n: Omit<Notification, 'id' | 'isRead' | 'createdAt'>) => {
    const newNotification: Notification = {
      ...n,
      id: Math.random().toString(36).substring(2, 9),
      isRead: false,
      createdAt: new Date().toISOString(),
    }
    setNotifications(prev => [newNotification, ...prev])
  }, [])

  const markAsRead = useCallback((id: string) => {
    setNotifications(prev =>
      prev.map(n => (n.id === id ? { ...n, isRead: true } : n))
    )
  }, [])

  const markAllAsRead = useCallback(() => {
    setNotifications(prev => prev.map(n => ({ ...n, isRead: true })))
  }, [])

  const clearAll = useCallback(() => {
    setNotifications([])
  }, [])

  const removeNotification = useCallback((id: string) => {
    setNotifications(prev => prev.filter(n => n.id !== id))
  }, [])

  return (
    <NotificationContext.Provider
      value={{
        notifications,
        unreadCount,
        addNotification,
        markAsRead,
        markAllAsRead,
        clearAll,
        removeNotification,
      }}
    >
      {children}
    </NotificationContext.Provider>
  )
}

export function useNotifications() {
  const context = useContext(NotificationContext)
  if (!context) throw new Error('useNotifications must be used within NotificationProvider')
  return context
}
