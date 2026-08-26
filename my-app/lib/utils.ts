export function cn(...inputs: (string | undefined | null | false)[]) {
  return inputs.filter(Boolean).join(' ')
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-ET', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price) + ' Br'
}

export function formatPriceWithCurrency(price: number, currency: string = 'ETB'): string {
  if (currency === 'ETB') return formatPrice(price)
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(price)
}

export function formatDate(date: string | Date): string {
  return new Date(date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}

export function formatDateAmharic(date: string | Date): string {
  return new Date(date).toLocaleDateString('am-ET', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}

export function formatRelativeTime(date: string | Date): string {
  const now = new Date()
  const past = new Date(date)
  const diffMs = now.getTime() - past.getTime()
  const diffSeconds = Math.floor(diffMs / 1000)
  const diffMinutes = Math.floor(diffSeconds / 60)
  const diffHours = Math.floor(diffMinutes / 60)
  const diffDays = Math.floor(diffHours / 24)

  if (diffMinutes < 1) return 'Just now'
  if (diffMinutes < 60) return `${diffMinutes}m ago`
  if (diffHours < 24) return `${diffHours}h ago`
  if (diffDays < 7) return `${diffDays}d ago`
  return formatDate(date)
}

export function getInitials(name: string): string {
  return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)
}

export function truncate(str: string, length: number): string {
  return str.length > length ? str.slice(0, length) + '...' : str
}

export function generateOTP(): string {
  return Math.floor(100000 + Math.random() * 900000).toString()
}

export function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export function validatePhone(phone: string): boolean {
  return /^\+?251[0-9]{9}$/.test(phone.replace(/\s/g, ''))
}

export function validatePassword(password: string): { valid: boolean; errors: string[] } {
  const errors: string[] = []
  if (password.length < 8) errors.push('At least 8 characters')
  if (!/[A-Z]/.test(password)) errors.push('One uppercase letter')
  if (!/[a-z]/.test(password)) errors.push('One lowercase letter')
  if (!/[0-9]/.test(password)) errors.push('One number')
  return { valid: errors.length === 0, errors }
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-')
}

export function generateId(): string {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

export function getStatusColor(status: string): string {
  const colors: Record<string, string> = {
    approved: 'bg-emerald-100 text-emerald-700',
    pending: 'bg-amber-100 text-amber-700',
    rejected: 'bg-red-100 text-red-700',
    expired: 'bg-gray-100 text-gray-700',
    active: 'bg-emerald-100 text-emerald-700',
    inactive: 'bg-gray-100 text-gray-700',
    featured: 'bg-purple-100 text-purple-700',
    premium: 'bg-amber-100 text-amber-700',
    verified: 'bg-emerald-100 text-emerald-700',
    unverified: 'bg-gray-100 text-gray-700',
    suspended: 'bg-red-100 text-red-700',
  }
  return colors[status] || 'bg-gray-100 text-gray-700'
}

export function getListingTypeLabel(type: string): string {
  const labels: Record<string, string> = {
    car: 'Vehicle',
    house: 'Property',
    vehicle: 'Vehicle',
    property: 'Property',
    sale: 'For Sale',
    rent: 'For Rent',
  }
  return labels[type] || type
}

export function getDaysRemaining(expiryDate: string): number {
  const now = new Date()
  const expiry = new Date(expiryDate)
  const diffMs = expiry.getTime() - now.getTime()
  return Math.max(0, Math.ceil(diffMs / (1000 * 60 * 60 * 24)))
}

export function debounce<T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout
  return (...args: Parameters<T>) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}

export const VEHICLE_MAKES = [
  'Toyota', 'Honda', 'Hyundai', 'Nissan', 'Mazda', 'Kia', 'Suzuki',
  'Mercedes-Benz', 'BMW', 'Audi', 'Volkswagen', 'Ford', 'Chevrolet',
  'Mitsubishi', 'Subaru', 'Lexus', 'Infiniti', 'Acura',
] as const

export const FUEL_TYPES = ['Petrol', 'Diesel', 'Electric', 'Hybrid'] as const
export const TRANSMISSIONS = ['Automatic', 'Manual'] as const
export const BODY_TYPES = ['Sedan', 'SUV', 'Truck', 'Hatchback', 'Coupe', 'Van', 'Motorcycle'] as const
export const CONDITION_TYPES = ['New', 'Used', 'Certified Pre-Owned'] as const

export const PROPERTY_TYPES = ['Apartment', 'House', 'Villa', 'Commercial', 'Land', 'Condo'] as const
export const FURNISHING_STATUS = ['Furnished', 'Semi-Furnished', 'Unfurnished'] as const
export const PARKING_OPTIONS = ['None', '1 Car', '2 Car', '3+ Car'] as const
export const PROPERTY_CONDITIONS = ['New', 'Renovated', 'Standard', 'Under Construction'] as const
