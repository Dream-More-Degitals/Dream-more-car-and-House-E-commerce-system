const statusColors: Record<string, string> = {
  Active: 'bg-emerald-50 text-emerald-600',
  Pending: 'bg-amber-50 text-amber-600',
  Sold: 'bg-blue-50 text-blue-600',
  Rejected: 'bg-red-50 text-red-500',
  Suspended: 'bg-red-50 text-red-500',
  Inactive: 'bg-gray-100 text-gray-500',
  Draft: 'bg-gray-100 text-gray-500',
  Approved: 'bg-emerald-50 text-emerald-600',
}

const typeColors: Record<string, string> = {
  Car: 'bg-blue-50 text-blue-600',
  House: 'bg-emerald-50 text-emerald-600',
  Seller: 'bg-violet-50 text-violet-600',
  Buyer: 'bg-blue-50 text-blue-600',
}

interface StatusBadgeProps {
  status: string
  variant?: 'status' | 'type'
  size?: 'sm' | 'md'
}

export function StatusBadge({ status, variant = 'status', size = 'sm' }: StatusBadgeProps) {
  const colors = variant === 'type' ? typeColors : statusColors
  const sizeClasses = size === 'sm' ? 'text-[10px] px-2 py-0.5' : 'text-[11px] px-2.5 py-1'

  return (
    <span className={`font-bold rounded-full ${colors[status] || 'bg-gray-100 text-gray-500'} ${sizeClasses}`}>
      {status}
    </span>
  )
}
