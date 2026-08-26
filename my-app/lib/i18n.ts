export type Locale = 'en' | 'am'

export type TranslationKeys = {
  // Navigation
  nav_home: string
  nav_search: string
  nav_favorites: string
  nav_messages: string
  nav_my_listings: string
  nav_create_listing: string
  nav_profile: string
  nav_login: string
  nav_register: string
  nav_logout: string
  nav_admin: string
  nav_inbox: string
  nav_notifications: string

  // Common
  common_save: string
  common_cancel: string
  common_delete: string
  common_edit: string
  common_submit: string
  common_loading: string
  common_search: string
  common_filter: string
  common_sort: string
  common_price: string
  common_location: string
  common_description: string
  common_images: string
  common_status: string
  common_date: string
  common_actions: string
  common_back: string
  common_next: string
  common_previous: string
  common_confirm: string
  common_close: string
  common_yes: string
  common_no: string
  common_view_all: string
  common_no_results: string
  common_results: string
  common_showing: string
  common_of: string
  common_page: string
  common_per_page: string

  // Auth
  auth_login: string
  auth_register: string
  auth_email: string
  auth_password: string
  auth_confirm_password: string
  auth_phone: string
  auth_forgot_password: string
  auth_reset_password: string
  auth_remember_me: string
  auth_login_with_email: string
  auth_login_with_phone: string
  auth_otp_sent: string
  auth_enter_otp: string
  auth_verify: string
  auth_resend_otp: string
  auth_terms_agree: string
  auth_create_account: string
  auth_already_have_account: string
  auth_dont_have_account: string
  auth_select_role: string
  auth_role_buyer: string
  auth_role_seller: string
  auth_two_factor: string

  // Listings
  listing_create: string
  listing_edit: string
  listing_delete: string
  listing_title: string
  listing_category: string
  listing_type_sale: string
  listing_type_rent: string
  listing_vehicles: string
  listing_properties: string
  listing_featured: string
  listing_premium: string
  listing_pending: string
  listing_approved: string
  listing_rejected: string
  listing_expired: string
  listing_make: string
  listing_model: string
  listing_year: string
  listing_mileage: string
  listing_fuel_type: string
  listing_transmission: string
  listing_color: string
  listing_engine_size: string
  listing_body_type: string
  listing_bedrooms: string
  listing_bathrooms: string
  listing_sqft: string
  listing_property_type: string
  listing_furnished: string
  listing_year_built: string
  listing_parking: string
  listing_asking_price: string
  listing_negotiable: string
  listing_steps_basic: string
  listing_steps_details: string
  listing_steps_media: string
  listing_similar: string
  listing_views: string
  listing_inquiries: string
  listing_contact_seller: string
  listing_report: string
  listing_renew: string
  listing_deactivate: string
  listing_reactivate: string

  // Search
  search_placeholder: string
  search_advanced: string
  search_filters: string
  search_sort_by: string
  search_relevance: string
  search_price_low_high: string
  search_price_high_low: string
  search_newest: string
  search_oldest: string
  search_distance: string
  search_clear_all: string
  search_apply: string
  search_results_count: string
  search_no_listings: string
  search_location_placeholder: string
  search_radius: string

  // Favorites
  favorites_title: string
  favorites_empty: string
  favorites_add: string
  favorites_remove: string
  favorites_watchlist: string
  favorites_create_list: string
  favorites_list_name: string
  favorites_notes: string

  // Messages
  messages_title: string
  messages_inbox: string
  messages_sent: string
  messages_compose: string
  messages_to: string
  messages_from: string
  messages_subject: string
  messages_body: string
  messages_send: string
  messages_reply: string
  messages_read: string
  messages_unread: string
  messages_block: string
  messages_report: string
  messages_delete: string
  messages_quick_reply: string
  messages_start_conversation: string
  messages_empty: string

  // Seller
  seller_dashboard: string
  seller_listings: string
  seller_analytics: string
  seller_inquiries: string
  seller_performance: string
  seller_verification: string
  seller_verified: string
  seller_unverified: string
  seller_pending_verification: string
  seller_upload_documents: string

  // Admin
  admin_dashboard: string
  admin_listings: string
  admin_users: string
  admin_verification: string
  admin_messages: string
  admin_analytics: string
  admin_config: string
  admin_logs: string
  admin_approve: string
  admin_reject: string
  admin_suspend: string
  admin_delete_user: string
  admin_moderation: string
  admin_announcements: string
  admin_export: string

  // Payments
  payment_title: string
  payment_amount: string
  payment_method: string
  payment_chapa: string
  payment_telebirr: string
  payment_cbe: string
  payment_receipt: string
  payment_history: string
  payment_confirm: string
  payment_failed: string
  payment_success: string

  // Notifications
  notification_new_message: string
  notification_listing_approved: string
  notification_listing_rejected: string
  notification_watchlist_update: string
  notification_payment: string
  notification_verification: string
  notification_mark_read: string
  notification_clear_all: string

  // Reviews
  review_write: string
  review_rating: string
  review_title: string
  review_body: string
  review_submit: string
  review_seller_response: string
  review_no_reviews: string

  // Errors
  error_required: string
  error_email_invalid: string
  error_password_weak: string
  error_password_mismatch: string
  error_phone_invalid: string
  error_network: string
  error_server: string
  error_not_found: string
  error_unauthorized: string

  // Footer
  footer_about: string
  footer_contact: string
  footer_terms: string
  footer_privacy: string
  footer_copyright: string
  footer_help: string
  footer_faq: string
}

const en: TranslationKeys = {
  // Navigation
  nav_home: 'Home',
  nav_search: 'Search',
  nav_favorites: 'Favorites',
  nav_messages: 'Messages',
  nav_my_listings: 'My Listings',
  nav_create_listing: 'Create Listing',
  nav_profile: 'Profile',
  nav_login: 'Login',
  nav_register: 'Register',
  nav_logout: 'Logout',
  nav_admin: 'Admin Panel',
  nav_inbox: 'Inbox',
  nav_notifications: 'Notifications',

  // Common
  common_save: 'Save',
  common_cancel: 'Cancel',
  common_delete: 'Delete',
  common_edit: 'Edit',
  common_submit: 'Submit',
  common_loading: 'Loading...',
  common_search: 'Search',
  common_filter: 'Filter',
  common_sort: 'Sort',
  common_price: 'Price',
  common_location: 'Location',
  common_description: 'Description',
  common_images: 'Images',
  common_status: 'Status',
  common_date: 'Date',
  common_actions: 'Actions',
  common_back: 'Back',
  common_next: 'Next',
  common_previous: 'Previous',
  common_confirm: 'Confirm',
  common_close: 'Close',
  common_yes: 'Yes',
  common_no: 'No',
  common_view_all: 'View All',
  common_no_results: 'No results found',
  common_results: 'Results',
  common_showing: 'Showing',
  common_of: 'of',
  common_page: 'Page',
  common_per_page: 'per page',

  // Auth
  auth_login: 'Login',
  auth_register: 'Register',
  auth_email: 'Email Address',
  auth_password: 'Password',
  auth_confirm_password: 'Confirm Password',
  auth_phone: 'Phone Number',
  auth_forgot_password: 'Forgot Password?',
  auth_reset_password: 'Reset Password',
  auth_remember_me: 'Remember Me',
  auth_login_with_email: 'Login with Email',
  auth_login_with_phone: 'Login with Phone',
  auth_otp_sent: 'OTP has been sent to your phone',
  auth_enter_otp: 'Enter verification code',
  auth_verify: 'Verify',
  auth_resend_otp: 'Resend OTP',
  auth_terms_agree: 'I agree to the Terms of Service and Privacy Policy',
  auth_create_account: 'Create Account',
  auth_already_have_account: 'Already have an account?',
  auth_dont_have_account: "Don't have an account?",
  auth_select_role: 'Select your role',
  auth_role_buyer: 'Buyer',
  auth_role_seller: 'Seller',
  auth_two_factor: 'Two-Factor Authentication',

  // Listings
  listing_create: 'Create Listing',
  listing_edit: 'Edit Listing',
  listing_delete: 'Delete Listing',
  listing_title: 'Listing Title',
  listing_category: 'Category',
  listing_type_sale: 'For Sale',
  listing_type_rent: 'For Rent',
  listing_vehicles: 'Vehicles',
  listing_properties: 'Properties',
  listing_featured: 'Featured',
  listing_premium: 'Premium',
  listing_pending: 'Pending',
  listing_approved: 'Approved',
  listing_rejected: 'Rejected',
  listing_expired: 'Expired',
  listing_make: 'Make',
  listing_model: 'Model',
  listing_year: 'Year',
  listing_mileage: 'Mileage',
  listing_fuel_type: 'Fuel Type',
  listing_transmission: 'Transmission',
  listing_color: 'Color',
  listing_engine_size: 'Engine Size',
  listing_body_type: 'Body Type',
  listing_bedrooms: 'Bedrooms',
  listing_bathrooms: 'Bathrooms',
  listing_sqft: 'Square Footage',
  listing_property_type: 'Property Type',
  listing_furnished: 'Furnished',
  listing_year_built: 'Year Built',
  listing_parking: 'Parking',
  listing_asking_price: 'Asking Price',
  listing_negotiable: 'Negotiable',
  listing_steps_basic: 'Basic Info',
  listing_steps_details: 'Details',
  listing_steps_media: 'Media',
  listing_similar: 'Similar Listings',
  listing_views: 'Views',
  listing_inquiries: 'Inquiries',
  listing_contact_seller: 'Contact Seller',
  listing_report: 'Report',
  listing_renew: 'Renew',
  listing_deactivate: 'Deactivate',
  listing_reactivate: 'Reactivate',

  // Search
  search_placeholder: 'Search cars and properties...',
  search_advanced: 'Advanced Search',
  search_filters: 'Filters',
  search_sort_by: 'Sort By',
  search_relevance: 'Relevance',
  search_price_low_high: 'Price: Low to High',
  search_price_high_low: 'Price: High to Low',
  search_newest: 'Newest First',
  search_oldest: 'Oldest First',
  search_distance: 'Distance',
  search_clear_all: 'Clear All',
  search_apply: 'Apply',
  search_results_count: 'results found',
  search_no_listings: 'No listings found',
  search_location_placeholder: 'Enter location...',
  search_radius: 'Search Radius',

  // Favorites
  favorites_title: 'My Favorites',
  favorites_empty: 'No favorites yet',
  favorites_add: 'Add to Favorites',
  favorites_remove: 'Remove from Favorites',
  favorites_watchlist: 'Watchlist',
  favorites_create_list: 'Create New List',
  favorites_list_name: 'List Name',
  favorites_notes: 'Notes',

  // Messages
  messages_title: 'Messages',
  messages_inbox: 'Inbox',
  messages_sent: 'Sent',
  messages_compose: 'Compose',
  messages_to: 'To',
  messages_from: 'From',
  messages_subject: 'Subject',
  messages_body: 'Message',
  messages_send: 'Send',
  messages_reply: 'Reply',
  messages_read: 'Read',
  messages_unread: 'Unread',
  messages_block: 'Block User',
  messages_report: 'Report',
  messages_delete: 'Delete',
  messages_quick_reply: 'Quick Reply',
  messages_start_conversation: 'Start a conversation',
  messages_empty: 'No messages yet',

  // Seller
  seller_dashboard: 'Seller Dashboard',
  seller_listings: 'My Listings',
  seller_analytics: 'Analytics',
  seller_inquiries: 'Inquiries',
  seller_performance: 'Performance',
  seller_verification: 'Seller Verification',
  seller_verified: 'Verified',
  seller_unverified: 'Unverified',
  seller_pending_verification: 'Pending Verification',
  seller_upload_documents: 'Upload Documents',

  // Admin
  admin_dashboard: 'Admin Dashboard',
  admin_listings: 'Listings',
  admin_users: 'Users',
  admin_verification: 'Verification',
  admin_messages: 'Messages',
  admin_analytics: 'Analytics',
  admin_config: 'Configuration',
  admin_logs: 'System Logs',
  admin_approve: 'Approve',
  admin_reject: 'Reject',
  admin_suspend: 'Suspend',
  admin_delete_user: 'Delete User',
  admin_moderation: 'Moderation',
  admin_announcements: 'Announcements',
  admin_export: 'Export',

  // Payments
  payment_title: 'Payment',
  payment_amount: 'Amount',
  payment_method: 'Payment Method',
  payment_chapa: 'Chapa',
  payment_telebirr: 'Telebirr',
  payment_cbe: 'CBE',
  payment_receipt: 'Receipt',
  payment_history: 'Payment History',
  payment_confirm: 'Confirm Payment',
  payment_failed: 'Payment Failed',
  payment_success: 'Payment Successful',

  // Notifications
  notification_new_message: 'New message received',
  notification_listing_approved: 'Your listing has been approved',
  notification_listing_rejected: 'Your listing has been rejected',
  notification_watchlist_update: 'Watchlist item updated',
  notification_payment: 'Payment notification',
  notification_verification: 'Verification status updated',
  notification_mark_read: 'Mark as read',
  notification_clear_all: 'Clear all',

  // Reviews
  review_write: 'Write a Review',
  review_rating: 'Rating',
  review_title: 'Review Title',
  review_body: 'Review',
  review_submit: 'Submit Review',
  review_seller_response: 'Seller Response',
  review_no_reviews: 'No reviews yet',

  // Errors
  error_required: 'This field is required',
  error_email_invalid: 'Please enter a valid email address',
  error_password_weak: 'Password must be at least 8 characters',
  error_password_mismatch: 'Passwords do not match',
  error_phone_invalid: 'Please enter a valid phone number',
  error_network: 'Network error. Please try again.',
  error_server: 'Server error. Please try again later.',
  error_not_found: 'Page not found',
  error_unauthorized: 'You are not authorized to access this page',

  // Footer
  footer_about: 'About Us',
  footer_contact: 'Contact',
  footer_terms: 'Terms of Service',
  footer_privacy: 'Privacy Policy',
  footer_copyright: '© 2026 DreamMore. All rights reserved.',
  footer_help: 'Help Center',
  footer_faq: 'FAQ',
}

const am: TranslationKeys = {
  nav_home: 'መነሻ',
  nav_search: 'ፈልግ',
  nav_favorites: 'ተወዳጆች',
  nav_messages: 'መልዕክቶች',
  nav_my_listings: 'የእኔ ማሳየቶች',
  nav_create_listing: 'ማሳየት ይፍጠሩ',
  nav_profile: 'መገለጫ',
  nav_login: 'ግባ',
  nav_register: 'ተመዝገብ',
  nav_logout: 'ውጣ',
  nav_admin: 'የአስተዳዳሪ ፓነል',
  nav_inbox: 'የገቢ ሳንቲም',
  nav_notifications: 'ማሳውቂያዎች',

  common_save: 'አስቀምጥ',
  common_cancel: 'ሰርዝ',
  common_delete: 'ሰርዝ',
  common_edit: 'አስተካክል',
  common_submit: 'አስገባ',
  common_loading: 'በመጫን ላይ...',
  common_search: 'ፈልግ',
  common_filter: 'ማጣሪያ',
  common_sort: 'ደረጃ',
  common_price: 'ዋጋ',
  common_location: 'አድራሻ',
  common_description: 'መግለጫ',
  common_images: 'ምስሎች',
  common_status: 'ሁኔታ',
  common_date: 'ቀን',
  common_actions: 'ቅርጾች',
  common_back: 'ተመለስ',
  common_next: 'ቀጥል',
  common_previous: 'ቀዳሚ',
  common_confirm: 'አረጋግጥ',
  common_close: 'ዝጋ',
  common_yes: 'አዎ',
  common_no: 'አይደለም',
  common_view_all: 'ሁሉንም ይመልከቱ',
  common_no_results: 'ምርምር አልተገኘም',
  common_results: 'ምርምሮች',
  common_showing: 'ያሳያል',
  common_of: 'ከ',
  common_page: 'ገጽ',
  common_per_page: 'በገጽ',

  auth_login: 'ግባ',
  auth_register: 'ተመዝገብ',
  auth_email: 'ኢሜይል አድራሻ',
  auth_password: 'የይለፍ ቃል',
  auth_confirm_password: 'የይለፍ ቃል አረጋግጥ',
  auth_phone: 'ስልክ ቁጥር',
  auth_forgot_password: 'የይለፍ ቃል ረሳሽ?',
  auth_reset_password: 'የይለፍ ቃል አReset',
  auth_remember_me: 'አስታውሰኝ',
  auth_login_with_email: 'በኢሜይል ግባ',
  auth_login_with_phone: 'በስልክ ግባ',
  auth_otp_sent: 'OTP ቈጠሮ ቀርቧል',
  auth_enter_otp: 'የማረጋገጫ ቁጥር አስገባ',
  auth_verify: 'አረጋግጥ',
  auth_resend_otp: 'OTP አንዳንድ ወደ ላክ',
  auth_terms_agree: 'የአገልግሎት ውሎችንና የግላዊነት ፖሊሲን እስማማለሁ',
  auth_create_account: 'መለያ ይፍጠሩ',
  auth_already_have_account: 'መለያ አለዎ?',
  auth_dont_have_account: 'መለያ የለዎት?',
  auth_select_role: 'ሚናዎን ይምረጡ',
  auth_role_buyer: 'ገዢ',
  auth_role_seller: 'ሸጋጉ',
  auth_two_factor: 'ባለሁለት ደረጃ ህ討ነት',

  listing_create: 'ማሳየት ይፍጠሩ',
  listing_edit: 'ማሳየት አስተካክል',
  listing_delete: 'ማሳየት ሰርዝ',
  listing_title: 'የማሳየት ራስጌ',
  listing_category: 'ምድር',
  listing_type_sale: 'ለሽያጭ',
  listing_type_rent: 'ለ ጋ旅游度假村',
  listing_vehicles: 'የተORY assistantsTo avoid',
  listing_properties: 'ንብረቶች',
  listing_featured: 'ተወዳጅ',
  listing_premium: 'ፕሪሚየም',
  listing_pending: 'በመጠበቅ ላይ',
  listing_approved: 'ተፈቅዶ',
  listing_rejected: 'ተቋቋሞ',
  listing_expired: 'ጊዜው ያልበለጠ',
  listing_make: 'ስም',
  listing_model: 'ሞዴል',
  listing_year: 'ዓመት',
  listing_mileage: '讲 Mileage',
  listing_fuel_type: 'የነয়幕 ዓይነት',
  listing_transmission: '传输',
  listing_color: 'ቀለም',
  listing_engine_size: 'የሞተር መጠን',
  listing_body_type: 'የ车身 ዓይነት',
  listing_bedrooms: 'የመኝታ ክፍሎች',
  listing_bathrooms: 'የመታጠቢያ ክፍሎች',
  listing_sqft: 'ስኘር ፊት',
  listing_property_type: 'የንብረት ዓይነት',
  listing_furnished: 'ማቅolali',
  listing_year_built: 'የተሠራበት ዓመት',
  listing_parking: 'ፓርኪንግ',
  listing_asking_price: 'የሚፈልጉት ዋጋ',
  listing_negotiable: 'ይ_token协商',
  listing_steps_basic: '_basic መረጃ',
  listing_steps_details: 'ዝርዝሮች',
  listing_steps_media: 'ሚዲያ',
  listing_similar: 'ተመሳሳይ ማሳየቶች',
  listing_views: 'እይታ',
  listing_inquiries: 'ጥ觅',
  listing_contact_seller: 'ሸጋጉን ያግኙ',
  listing_report: 'Report',
  listing_renew: ' yak yet new ያድርጉ',
  listing_deactivate: 'ያጥፉ',
  listing_reactivate: 'ያስcratch',

  search_placeholder: '小型车 እና ንብረቶችን ፈልግ...',
  search_advanced: 'የተሻለ ምርምር',
  search_filters: 'ማጣሪያዎች',
  search_sort_by: 'ደረጃ በ',
  search_relevance: 'ተስBa ማስተካከያ',
  search_price_low_high: 'ዋጋ: ዝ 낮ה ወደ ከፍተኛ',
  search_price_high_low: 'ዋጋ: ከፍተኛ ወደ ዝ 낮ה',
  search_newest: 'አዲስ ቀዳሚ',
  search_oldest: 'አ oldest',
  search_distance: 'ไป距离',
  search_clear_all: 'ሁሉንም አጽዳ',
  search_apply: 'አተolina',
  search_results_count: 'ምርምሮች ተገኝተዋል',
  search_no_listings: 'ምንም ማሳየት አልተገኘም',
  search_location_placeholder: 'አድራሻ አስገባ...',
  search_radius: 'የምርምር ራዲየስ',

  favorites_title: 'የእኔ ተወዳጆች',
  favorites_empty: 'ተወዳጆች የለም',
  favorites_add: 'ተወዳጅ ያድርጉ',
  favorites_remove: 'ተወዳጅ ሰርዝ',
  favorites_watchlist: 'የተKept list',
  favorites_create_list: 'አዲስ ማ候选 list ይፍጠሩ',
  favorites_list_name: 'የማ候选 list ስም',
  favorites_notes: 'ማስታወሻዎች',

  messages_title: 'መልዕክቶች',
  messages_inbox: 'የገቢ ሳንቲም',
  messages_sent: 'የተላኩ',
  messages_compose: 'ያዐजር补贴',
  messages_to: 'ወደ',
  messages_from: 'ከ',
  messages_subject: 'ርዕስ',
  messages_body: 'መልዕክት',
  messages_send: 'ላክ',
  messages_reply: 'ተመለስ',
  messages_read: 'አንብር',
  messages_unread: 'ያልተነበበ',
  messages_block: 'ተጠቃሚ እ lock',
  messages_report: 'Report',
  messages_delete: 'ሰርዝ',
  messages_quick_reply: 'ፈጣን ተመለስ',
  messages_start_conversation: 'ውይይት ይጀምሩ',
  messages_empty: 'መልዕክቶች የለም',

  seller_dashboard: 'የሸጋጉ ዳሽቦርድ',
  seller_listings: 'የእኔ ማሳየቶች',
  seller_analytics: 'ትንታኔ',
  seller_inquiries: 'ጥ觅',
  seller_performance: 'አperformances',
  seller_verification: 'የሸጋጉ ማረጋገጫ',
  seller_verified: 'ተረጋግጧል',
  seller_unverified: 'ያልተረጋገጠ',
  seller_pending_verification: 'በማረጋገጫ ላይ',
  seller_upload_documents: 'ሰነዶች ጫን',

  admin_dashboard: 'የአስተዳዳሪ ዳሽቦርድ',
  admin_listings: 'ማሳየቶች',
  admin_users: 'ተጠቃሚዎች',
  admin_verification: 'ማረጋገጫ',
  admin_messages: 'መልዕክቶች',
  admin_analytics: 'ትንታኔ',
  admin_config: 'ማስተካከያ',
  admin_logs: 'የስርዓት ሎግ',
  admin_approve: 'ፍቀድ',
  admin_reject: 'አিን踰',
  admin_suspend: 'አ времен暂停',
  admin_delete_user: 'ተጠቃሚ ሰርዝ',
  admin_moderation: 'ማስተካከያ',
  admin_announcements: 'ማሳውቂያዎች',
  admin_export: 'ייצא',

  payment_title: 'ክፍያ',
  payment_amount: 'መጠን',
  payment_method: 'የክፍያ ዘዴ',
  payment_chapa: 'ቻፓ',
  payment_telebirr: 'ቴሌብር',
  payment_cbe: 'CBEE',
  payment_receipt: 'ደረሰኝ',
  payment_history: 'የክፍያ ታሪክ',
  payment_confirm: 'ክፍያ አረጋግጥ',
  payment_failed: 'ክፍያ አልተሳካም',
  payment_success: 'ክፍያ ተሳክቷል',

  notification_new_message: 'አዲስ መልዕክት ተገኝቷል',
  notification_listing_approved: 'ማሳየትዎ ተፈቅODO',
  notification_listing_rejected: 'ማሳየትዎ ተቋቋMO',
  notification_watchlist_update: 'የተKept list ተUpdate',
  notification_payment: 'የክፍያ ማሳውቂያ',
  notification_verification: 'የማረጋገጫ ሁኔታ ተUpdate',
  notification_mark_read: 'እንደተነበበ ምልክት',
  notification_clear_all: 'ሁሉንም አጽዳ',

  review_write: 'ግምገማ ይፃፉ',
  review_rating: 'ደረጃ',
  review_title: 'የግምገማ ራስጌ',
  review_body: 'ግምገማ',
  review_submit: 'ግምገማ አስገባ',
  review_seller_response: 'የሸጋጉ ምላሽ',
  review_no_reviews: 'ግምገማ የለም',

  error_required: 'ይህ ም_nd ያስፈልጋል',
  error_email_invalid: 'እባክዎ ትክክለኛ የኢሜይል አድራሻ ያስገቡ',
  error_password_weak: 'የይለፍ ቃል ቢያንስ 8 ቁርጭት መሆን አለበት',
  error_password_mismatch: 'የይለፍ ቃሎች አይስmaходятся',
  error_phone_invalid: 'እባክዎ ትክክለኛ የስልክ ቁጥር ያስገቡ',
  error_network: 'የአውታር ስህተት. እባክዎ እንደገና ይሞክሩ.',
  error_server: 'የአገልግሎት ስህተት. እባክዎ ቆይተህ ይሞክሩ.',
  error_not_found: 'ገጽ አልተገኘም',
  error_unauthorized: 'ይህንን ገጽ ለመድረስ ፈቃድ የለዎትም',

  footer_about: 'ስለ እኛ',
  footer_contact: 'ያግኙን',
  footer_terms: 'የአገልግሎት ውሎች',
  footer_privacy: 'የግላዊነት ፖሊሲ',
  footer_copyright: '© 2026 ዴREAMMore. ሁሉም መብቶች የተጠበቁ ናቸው.',
  footer_help: 'የእርዳታ ማዕከል',
  footer_faq: 'ተደጋጋሚ ጥያቄዎች',
}

export const translations: Record<Locale, TranslationKeys> = { en, am }

export function t(key: keyof TranslationKeys, locale: Locale = 'en'): string {
  return translations[locale][key] || translations.en[key] || key
}
