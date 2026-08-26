export const adminNavigation = [
  { href: '/admin', label: 'Dashboard', icon: 'dashboard' },
  { href: '/admin/listings', label: 'Listings', icon: 'directions_car' },
  { href: '/admin/users', label: 'Users', icon: 'group' },
  { href: '/admin/verification', label: 'Verification', icon: 'verified_user' },
  { href: '/admin/messages', label: 'Messages', icon: 'mail' },
  { href: '/admin/analytics', label: 'Analytics', icon: 'analytics' },
  { href: '/admin/moderation', label: 'Moderation', icon: 'shield' },
]

export const adminConfigLinks = [
  { href: '/admin/configuration', label: 'System Configuration', icon: 'settings' },
  { href: '/admin/logs', label: 'Logs', icon: 'history' },
]

export const sellerNavigation = [
  { href: '/seller', label: 'Dashboard', icon: 'dashboard' },
  { href: '/seller/listings', label: 'My Listings', icon: 'directions_car' },
  { href: '/seller/verification', label: 'Verification', icon: 'verified' },
  { href: '/seller/inquiries', label: 'Inquiries', icon: 'chat' },
  { href: '/seller/performance', label: 'Performance', icon: 'analytics' },
]

export const propertyTypes = ['Apartment', 'Villa', 'Penthouse', 'Townhouse', 'Land', 'Commercial'] as const
export const vehicleTypes = ['Sedan', 'SUV', 'Truck', 'Van', 'Coupe', 'Convertible'] as const
export const listingStatuses = ['Draft', 'Pending', 'Active', 'Sold', 'Rejected'] as const
export const userStatuses = ['Active', 'Suspended', 'Pending', 'Inactive'] as const

export const ethiopianRegions = [
  'Addis Ababa',
  'Oromia',
  'Amhara',
  'Tigray',
  'SNNPR',
  'Somali',
  'Benishangul-Gumuz',
  'Gambela',
  'Harari',
  'Dire Dawa',
] as const

export const listingExpiryConfig = {
  vehicle: 60, // days
  property: 90, // days
}

export const premiumListingLimits = {
  maxPremiumPercentage: 20, // max % of premium in search results
  featuredRotationHours: 24,
}

export const businessRules = {
  maxActiveListingsPerSeller: 50,
  newAccountWaitingPeriodHours: 24,
  maxMessagesPerHour: 20,
  verificationValidityMonths: 12,
  sessionTimeoutMinutes: 45,
  maxLoginAttempts: 5,
  lockoutDurationMinutes: 15,
}
