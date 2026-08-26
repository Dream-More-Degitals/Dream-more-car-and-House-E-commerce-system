'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { formatRelativeTime, getInitials } from '@/lib/utils'

interface Message {
  id: string
  senderId: string
  senderName: string
  senderAvatar?: string
  content: string
  timestamp: string
  isRead: boolean
}

interface Conversation {
  id: string
  participantName: string
  participantAvatar?: string
  lastMessage: string
  lastMessageTime: string
  unreadCount: number
  listingTitle?: string
  messages: Message[]
}

const MOCK_CONVERSATIONS: Conversation[] = [
  {
    id: '1',
    participantName: 'Abebe Kebede',
    lastMessage: 'Is the car still available? I can come see it tomorrow.',
    lastMessageTime: new Date(Date.now() - 30 * 60 * 1000).toISOString(),
    unreadCount: 2,
    listingTitle: 'Toyota Camry 2021',
    messages: [
      { id: 'm1', senderId: '1', senderName: 'Abebe Kebede', content: 'Hello! Is this still available?', timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(), isRead: true },
      { id: 'm2', senderId: 'me', senderName: 'Me', content: 'Yes, it is! Would you like to schedule a viewing?', timestamp: new Date(Date.now() - 1.5 * 60 * 60 * 1000).toISOString(), isRead: true },
      { id: 'm3', senderId: '1', senderName: 'Abebe Kebede', content: 'Is the car still available? I can come see it tomorrow.', timestamp: new Date(Date.now() - 30 * 60 * 1000).toISOString(), isRead: false },
    ],
  },
  {
    id: '2',
    participantName: 'Hanna Tesfaye',
    lastMessage: 'Thank you for the information!',
    lastMessageTime: new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString(),
    unreadCount: 0,
    listingTitle: 'Modern 3BR Apartment',
    messages: [
      { id: 'm4', senderId: 'me', senderName: 'Me', content: 'Hi! I saw your apartment listing. Is it still available?', timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(), isRead: true },
      { id: 'm5', senderId: '2', senderName: 'Hanna Tesfaye', content: 'Yes! It is available. Would you like to schedule a visit?', timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString(), isRead: true },
      { id: 'm6', senderId: 'me', senderName: 'Me', content: 'Yes, this weekend would work for me.', timestamp: new Date(Date.now() - 3.5 * 60 * 60 * 1000).toISOString(), isRead: true },
      { id: 'm7', senderId: '2', senderName: 'Hanna Tesfaye', content: 'Thank you for the information!', timestamp: new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString(), isRead: true },
    ],
  },
  {
    id: '3',
    participantName: 'Dawit Alemayehu',
    lastMessage: 'Can you do a better price? I can pay cash.',
    lastMessageTime: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
    unreadCount: 1,
    listingTitle: 'Hyundai Tucson 2022',
    messages: [
      { id: 'm8', senderId: '3', senderName: 'Dawit Alemayehu', content: 'Can you do a better price? I can pay cash.', timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(), isRead: false },
    ],
  },
]

export default function InboxPage() {
  const [conversations, setConversations] = useState<Conversation[]>(MOCK_CONVERSATIONS)
  const [selectedConversation, setSelectedConversation] = useState<Conversation | null>(null)
  const [messageInput, setMessageInput] = useState('')
  const [showQuickReplies, setShowQuickReplies] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const quickReplies = [
    'Is this still available?',
    'What is the best price?',
    'Can I schedule a viewing?',
    'What is the condition?',
    'Is the price negotiable?',
    'Thank you!',
  ]

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    if (selectedConversation) {
      scrollToBottom()
    }
  }, [selectedConversation])

  const selectConversation = (conv: Conversation) => {
    setSelectedConversation(conv)
    // Mark messages as read
    setConversations(prev =>
      prev.map(c =>
        c.id === conv.id
          ? { ...c, unreadCount: 0, messages: c.messages.map(m => ({ ...m, isRead: true })) }
          : c
      )
    )
  }

  const sendMessage = () => {
    if (!messageInput.trim() || !selectedConversation) return

    const newMessage: Message = {
      id: `m${Date.now()}`,
      senderId: 'me',
      senderName: 'Me',
      content: messageInput,
      timestamp: new Date().toISOString(),
      isRead: false,
    }

    setConversations(prev =>
      prev.map(c =>
        c.id === selectedConversation.id
          ? {
              ...c,
              messages: [...c.messages, newMessage],
              lastMessage: messageInput,
              lastMessageTime: new Date().toISOString(),
            }
          : c
      )
    )

    setSelectedConversation(prev =>
      prev
        ? {
            ...prev,
            messages: [...prev.messages, newMessage],
            lastMessage: messageInput,
            lastMessageTime: new Date().toISOString(),
          }
        : null
    )

    setMessageInput('')
    setShowQuickReplies(false)
  }

  const handleQuickReply = (reply: string) => {
    setMessageInput(reply)
    setShowQuickReplies(false)
  }

  return (
    <div className="min-h-screen bg-surface">
      <div className="max-w-6xl mx-auto h-screen flex">
        {/* Conversations List */}
        <div className={`w-full md:w-80 border-r border-outline-variant flex flex-col ${selectedConversation ? 'hidden md:flex' : 'flex'}`}>
          <div className="sticky top-0 bg-surface/80 backdrop-blur-xl border-b border-outline-variant p-4">
            <div className="flex items-center justify-between mb-3">
              <h1 className="text-base font-semibold text-on-surface">Messages</h1>
              <Link href="/" className="text-on-surface-variant hover:text-on-surface">
                <span className="material-symbols-outlined">close</span>
              </Link>
            </div>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm">search</span>
              <input
                type="text"
                placeholder="Search conversations..."
                className="w-full pl-9 pr-3 py-2 rounded-xl bg-surface-container-low text-xs text-on-surface placeholder:text-on-surface-variant border border-outline-variant focus:border-primary focus:outline-none"
              />
            </div>
          </div>

          <div className="flex-1 overflow-y-auto">
            {conversations.length === 0 ? (
              <div className="text-center py-12">
                <span className="material-symbols-outlined text-on-surface-variant text-3xl">chat</span>
                <p className="text-xs text-on-surface-variant mt-2">No messages yet</p>
              </div>
            ) : (
              conversations.map((conv) => (
                <button
                  key={conv.id}
                  onClick={() => selectConversation(conv)}
                  className={`w-full p-3 flex items-start gap-3 hover:bg-surface-container-low transition-colors text-left ${
                    selectedConversation?.id === conv.id ? 'bg-primary/5 border-l-2 border-primary' : ''
                  }`}
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-semibold text-primary">{getInitials(conv.participantName)}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-on-surface truncate">{conv.participantName}</span>
                      <span className="text-[9px] text-on-surface-variant flex-shrink-0">
                        {formatRelativeTime(conv.lastMessageTime)}
                      </span>
                    </div>
                    {conv.listingTitle && (
                      <p className="text-[9px] text-primary truncate">{conv.listingTitle}</p>
                    )}
                    <div className="flex items-center justify-between">
                      <p className="text-[10px] text-on-surface-variant truncate">{conv.lastMessage}</p>
                      {conv.unreadCount > 0 && (
                        <span className="w-4 h-4 rounded-full bg-primary text-white text-[8px] flex items-center justify-center flex-shrink-0 ml-1">
                          {conv.unreadCount}
                        </span>
                      )}
                    </div>
                  </div>
                </button>
              ))
            )}
          </div>
        </div>

        {/* Chat Area */}
        <div className={`flex-1 flex flex-col ${selectedConversation ? 'flex' : 'hidden md:flex'}`}>
          {selectedConversation ? (
            <>
              {/* Chat Header */}
              <div className="sticky top-0 bg-surface/80 backdrop-blur-xl border-b border-outline-variant p-3 flex items-center gap-3">
                <button
                  onClick={() => setSelectedConversation(null)}
                  className="md:hidden text-on-surface-variant hover:text-on-surface"
                >
                  <span className="material-symbols-outlined">arrow_back</span>
                </button>
                <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-[10px] font-semibold text-primary">{getInitials(selectedConversation.participantName)}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xs font-semibold text-on-surface truncate">{selectedConversation.participantName}</h3>
                  {selectedConversation.listingTitle && (
                    <p className="text-[9px] text-primary truncate">{selectedConversation.listingTitle}</p>
                  )}
                </div>
                <div className="flex items-center gap-1">
                  <button className="w-8 h-8 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container-low">
                    <span className="material-symbols-outlined text-lg">more_vert</span>
                  </button>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-3">
                {selectedConversation.messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.senderId === 'me' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[75%] px-3 py-2 rounded-2xl ${
                        msg.senderId === 'me'
                          ? 'bg-primary text-on-primary rounded-br-md'
                          : 'bg-surface-container-low text-on-surface rounded-bl-md'
                      }`}
                    >
                      <p className="text-xs leading-relaxed">{msg.content}</p>
                      <div className={`flex items-center gap-1 mt-1 ${msg.senderId === 'me' ? 'justify-end' : ''}`}>
                        <span className={`text-[8px] ${msg.senderId === 'me' ? 'text-on-primary/70' : 'text-on-surface-variant'}`}>
                          {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </span>
                        {msg.senderId === 'me' && (
                          <span className="material-symbols-outlined text-[10px] text-on-primary/70">
                            {msg.isRead ? 'done_all' : 'done'}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              {/* Quick Replies */}
              {showQuickReplies && (
                <div className="px-4 pb-2 flex flex-wrap gap-1.5">
                  {quickReplies.map((reply) => (
                    <button
                      key={reply}
                      onClick={() => handleQuickReply(reply)}
                      className="px-3 py-1.5 rounded-full bg-surface-container-low text-[10px] text-on-surface-variant hover:bg-primary/10 hover:text-primary transition-colors border border-outline-variant"
                    >
                      {reply}
                    </button>
                  ))}
                </div>
              )}

              {/* Message Input */}
              <div className="border-t border-outline-variant p-3">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setShowQuickReplies(!showQuickReplies)}
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                      showQuickReplies ? 'bg-primary/10 text-primary' : 'text-on-surface-variant hover:bg-surface-container-low'
                    }`}
                  >
                    <span className="material-symbols-outlined text-lg">quickreply</span>
                  </button>
                  <input
                    type="text"
                    value={messageInput}
                    onChange={(e) => setMessageInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                    placeholder="Type a message..."
                    className="flex-1 px-3 py-2 rounded-xl bg-surface-container-low text-xs text-on-surface placeholder:text-on-surface-variant border border-outline-variant focus:border-primary focus:outline-none"
                  />
                  <Button
                    variant="primary"
                    onClick={sendMessage}
                    disabled={!messageInput.trim()}
                    className="!px-3 !py-2 !rounded-xl"
                    icon="send"
                  />
                </div>
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <span className="material-symbols-outlined text-on-surface-variant text-4xl">forum</span>
                <h3 className="text-sm font-medium text-on-surface mt-3">Select a conversation</h3>
                <p className="text-xs text-on-surface-variant mt-1">
                  Choose a conversation from the left to start messaging
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
