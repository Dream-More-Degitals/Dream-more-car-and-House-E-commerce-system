'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const HERO_IMAGE = 'https://lh3.googleusercontent.com/aida-public/AB6AXuB35W4Oqg13F09sTET4l3Caj9EH9TNk551QvtHxdY-TrSNtVEL-vpmacGe93A42uYzgguYUv5TmAHYff_XJKsuQKYV4BJv7VQLnMZ6T-8ikBkZL5f_VuFtLGPyND0DVrCqpX-AnE_iQ0ORGyYNEHu_vDq2ssRdBF8-wyCUg4SixOsRW_i0Tqw8eaI7lBIfBQ_XkRzTPGEP39D-Ehm6ldGT0tnrRTO00fwYtmBxBddIPI3GwCDDR_lHA'

const PROPERTIES = [
  {
    id: 'prop-1',
    title: 'Luxury Villa in Bole',
    location: 'Bole, Addis Ababa',
    price: '15,500,000',
    beds: 4,
    baths: 3,
    sqft: '350',
    featured: true,
    verified: true,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCd5_SxpSbw2w8rLXd0yAxVG2ZNLkd6RweTfVKe_tUW6vg0A0OBYWtKh0sXQE5wRfR12Hh6oH1c42MsTZC9vMfFW5kQVaxTBw2PF7A1X8Fl_ebfsmWje29_jVpbPeXpemqLKb1UDqJSFOZiENnJePCRt4Gv3SLVzQ7jK71AjahZxa7jpCUoaexRdmk_KC2WkCV7bPuvZaRfDUK2K96NCL_g4GNcW9PiXxXpd-JQR9i09w0HgHVS4HHx)',
  },
  {
    id: 'prop-2',
    title: 'Modern Penthouse',
    location: 'Kazanchis, Addis Ababa',
    price: '8,200,000',
    beds: 2,
    baths: 2,
    sqft: '180',
    featured: false,
    verified: false,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCcY8Ev8uoJDJqsSjKsvJze4FEDEvxJ3sP-R7c8JvGqH3PNcuyIe6qTwV2GzxnNZBRsXByw1MG2xO4RAr7dNdYWrl1_MvgjD60uDgvpyz8mybSzre2rTHxyXe3CyWnSjJOYcKN_NFttlthP2rMcEKZRER29gCGcFZz1nw65plGuKWrB76-6e5-Rbwt7ooBjwzaJb4OrEB6hdf09e_Wn8DRnwmwE-SCgVpPOe6NxUPKNoygnIHCN_NA6)',
  },
  {
    id: 'prop-3',
    title: 'Entoto Heights Estate',
    location: 'Entoto, Addis Ababa',
    price: '22,000,000',
    beds: 5,
    baths: 5,
    sqft: '1,200',
    featured: true,
    verified: true,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDHaeQYRgnfrjOK07qtTtX7uX3wFEUQIxAf1ZJiSPvgVrakl7JzKGAF1rsiakWPX1fysWm4sKfdV6nRqGPn0UzggJ6MOW5-LmWZRtK2NIX0I8w-HUAz2Srt3VuA-8Ej0RE_06HLC_lM5SdGkpX-fsM_7a1r9CuWAGNUs3NyttQ5cx7g_XoSHMnmyf-MUYLAwI4erGcjS-_C8Zo_o3IVrFgNbKuaH4xlOX9SKyxODRqpA_4xjhPkdMfX)',
  },
]

const VEHICLES = [
  {
    id: 'veh-1',
    title: 'Toyota Land Cruiser 300',
    year: 2023,
    km: '5,000',
    fuel: 'Diesel',
    price: '12.5M',
    isNew: true,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAA-B7fKGmtSCFRyp9PPW0gPySeJ4U9JLRugKMa6-f_LEBSgcWM7UWDpjQTnRCeUT6lIaQ0fSULq_V3JaObG_hKLeZ1Dq-Qt2schRNUtWYRGyIUP5pT7YTVBSaEeZXWi2zWvne1L-JMBe4iflWrl2bTaiJ3sAATBPOI_s_-G11JDsq8-iyPLxZlKVH4q6xXgvHFv1RTh7Ksk-aJs1MW3n1uTxvWdfzeDz7KIMkIpLFSzXf2EmPV0RSO)',
  },
  {
    id: 'veh-2',
    title: 'Mercedes-Benz G63 AMG',
    year: 2022,
    km: '12,000',
    fuel: 'Petrol',
    price: '18.2M',
    isNew: false,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAwBtg6S7VwLDjHtAnlFq1sh5tD7B4gLYisPMJj7V0bREb6pFZdwnYoyC7P5Stwh6wvwVVHZNh-5imT-Jpoxm77s5kgbo6f65Whu7ZNcAVPOBM31VdWoSI5_EHKIwvS9EA_gYl8E4GzcFqmA5ybXdHZ0H63Ox7cvGNq6j2heiF9JUdR4wCpbuUgd5xj12Y4eO7wxrFjoTk1eWX1TGw6JuP4W3q4z1Wtdjz_Xcg5M49RvPayYraw0AV7)',
  },
  {
    id: 'veh-3',
    title: 'Hyundai Tucson Hybrid',
    year: 2021,
    km: '25,000',
    fuel: 'Hybrid',
    price: '4.8M',
    isNew: false,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA0KyHLeTCCbxRa5RpZNLt8UDcubYED9EUacrJlUiyzlZtknoBfQpDvH2BrKZGXewnhtBsMPvUY5fXzb8zmyMd7mBjgREOgV51y_8wu7cxdRSgoislMIudt5oyQLbbNUBsTjIohRwBVdGu8UAct3Eu5EFbgluAcizmocUtlhvZD4sCThM9vNjpgwtx6Y9qaDhzMYTH2GfxnBsFTUTrSYIIKlL2gDLMUTG5c_-0VHvJuntFcnau52AIw)',
  },
  {
    id: 'veh-4',
    title: 'Range Rover Velar',
    year: 2020,
    km: '35,000',
    fuel: 'Petrol',
    price: '9.5M',
    isNew: false,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCDM1VKqpIZTBbC6oQtwU1uay3DXVXXDbNIvisvMv8DcQd3sgoXANuC9Pv_Xmwnh3KMV_sSy0x-UmMxGklSVIkEO-2Skj__J1zGRQ4QMShbrA99CSyQt0E-xKCAW5GHVOSpyca4stbiTdJivzqC4pKTK-AegbT0xjEhwhs6y7bzjrpDs5j7LbjWx4EF_Kqas1a910bL-Asd8LXOoEGr6Stmq12FXeN39h34TDu8iqksq_hjhfO9uhPb)',
  },
]

const CATEGORIES = [
  { icon: 'apartment', label: 'Apartments', color: 'emerald', href: '/search?type=apartment' },
  { icon: 'villa', label: 'Villas', color: 'blue', href: '/search?type=villa' },
  { icon: 'directions_car', label: 'SUVs', color: 'amber', href: '/search?type=suv' },
  { icon: 'local_shipping', label: 'Trucks', color: 'slate', href: '/search?type=truck' },
]

export default function PublicPage() {
  const [searchType, setSearchType] = useState<'property' | 'vehicle'>('property')
  const [searchQuery, setSearchQuery] = useState('')
  const router = useRouter()

  const handleSearch = () => {
    router.push(`/search?q=${encodeURIComponent(searchQuery)}&type=${searchType}`)
  }

  return (
    <>
      {/* ═══════════════════════════════════════════════════════
          HERO SECTION — bg-cover bg-center bg-no-repeat
          ═══════════════════════════════════════════════════════ */}
      <section className="hero-bg flex items-center justify-center" style={{ backgroundImage: `url('${HERO_IMAGE}')` }}>
        <div className="hero-content w-full max-w-[1200px] mx-auto px-6 py-20 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/15 text-white text-[11px] font-semibold tracking-wider uppercase mb-6 animate-fade-in-up">
            Ethiopia&apos;s Premier Marketplace
          </span>

          <h1 className="text-white mb-4 animate-fade-in-up animate-delay-100" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, lineHeight: 1.1 }}>
            Find Your Dream Space
          </h1>
          <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto animate-fade-in-up animate-delay-200">
            Premium properties &amp; vehicles across Bole, Hawassa, Adama, and beyond.
          </p>

          {/* ── Search Bar Pop ── */}
          <div className="search-bar-pop max-w-3xl mx-auto animate-fade-in-up animate-delay-300">
            <div className="flex flex-col md:flex-row items-stretch md:items-center gap-2 p-2">
              {/* Type Toggle */}
              <div className="flex bg-gray-100 rounded-xl p-1 shrink-0">
                <button
                  onClick={() => setSearchType('property')}
                  className={`flex-1 md:flex-none px-5 py-2.5 rounded-lg text-[13px] font-semibold transition-all duration-300 ${
                    searchType === 'property'
                      ? 'bg-emerald-deep text-white shadow-md shadow-emerald-deep/20'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <span className="material-symbols-outlined text-[18px] mr-1 align-middle">apartment</span>
                  Properties
                </button>
                <button
                  onClick={() => setSearchType('vehicle')}
                  className={`flex-1 md:flex-none px-5 py-2.5 rounded-lg text-[13px] font-semibold transition-all duration-300 ${
                    searchType === 'vehicle'
                      ? 'bg-emerald-deep text-white shadow-md shadow-emerald-deep/20'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <span className="material-symbols-outlined text-[18px] mr-1 align-middle">directions_car</span>
                  Vehicles
                </button>
              </div>

              {/* Search Input */}
              <div className="flex-1 flex items-center gap-2 bg-gray-50 rounded-xl px-4 py-2.5 border border-gray-100 focus-within:border-emerald-deep/30 focus-within:bg-white transition-all">
                <span className="material-symbols-outlined text-gray-400 text-[20px]">search</span>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                  placeholder={searchType === 'property' ? 'Location, neighborhood, or ZIP' : 'Make, model, or year'}
                  className="w-full bg-transparent text-[13px] text-gray-800 placeholder:text-gray-400 outline-none"
                />
              </div>

              {/* Search Button */}
              <button
                onClick={handleSearch}
                className="px-8 py-3 bg-emerald-deep text-white rounded-xl text-[13px] font-bold hover:bg-emerald-deep/90 active:scale-[0.98] transition-all duration-200 shadow-lg shadow-emerald-deep/25"
              >
                Search
              </button>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-8 animate-fade-in-up animate-delay-400">
            {[
              { icon: 'verified_user', text: '100% Verified Listings' },
              { icon: 'payments', text: 'Secure Payments' },
              { icon: 'support_agent', text: '24/7 Support' },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2 text-white/70 text-[12px]">
                <span className="material-symbols-outlined text-[16px]">{item.icon}</span>
                {item.text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          CATEGORIES — Standardized Icon Containers
          ═══════════════════════════════════════════════════════ */}
      <section className="py-14 max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 stagger-children">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.label}
              href={cat.href}
              className="group flex flex-col items-center gap-4 p-6 rounded-2xl border border-gray-100 bg-white hover:border-emerald-deep/20 hover:shadow-lg hover:shadow-emerald-deep/5 transition-all duration-300"
            >
              <div className={`category-icon category-icon-${cat.color}`}>
                <span className="material-symbols-outlined text-[26px]">{cat.icon}</span>
              </div>
              <span className="text-[13px] font-semibold text-gray-700 group-hover:text-emerald-deep transition-colors">
                {cat.label}
              </span>
            </Link>
          ))}
        </div>
      </section>

      <div className="divider-glow mx-6" />

      {/* ═══════════════════════════════════════════════════════
          FEATURED PROPERTIES — Premium Cards
          ═══════════════════════════════════════════════════════ */}
      <section className="py-16 max-w-[1200px] mx-auto px-6">
        <div className="flex justify-between items-end mb-10">
          <div>
            <span className="bento-section-label">Handpicked</span>
            <h2 className="text-[22px] font-bold text-gray-900">Featured Properties</h2>
            <p className="text-[13px] text-gray-500 mt-1">High-value real estate across Ethiopia.</p>
          </div>
          <Link href="/search?type=property" className="hidden sm:flex items-center gap-1 text-[13px] font-semibold text-emerald-deep hover:underline">
            View All <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 stagger-children">
          {PROPERTIES.map((prop) => (
            <Link key={prop.id} href={`/property/${prop.id}`} className="premium-card group">
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <div
                  className="card-image absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url('${prop.image}')` }}
                />
                {/* Badges */}
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  {prop.featured && (
                    <span className="badge-featured px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                      <span className="material-symbols-outlined text-[12px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      Featured
                    </span>
                  )}
                  {prop.verified && (
                    <span className="badge-verified px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                      <span className="material-symbols-outlined text-[12px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                      Verified
                    </span>
                  )}
                </div>
                {/* Favorite */}
                <button className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-gray-600 hover:text-red-500 hover:bg-white transition-all shadow-sm" onClick={(e) => e.preventDefault()}>
                  <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 0" }}>favorite</span>
                </button>
                {/* Price */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                  <span className="text-white text-[20px] font-extrabold">Br {prop.price}</span>
                  <span className="text-white/60 text-[12px] ml-1">/sale</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-[15px] font-bold text-gray-900 mb-1 group-hover:text-emerald-deep transition-colors">
                  {prop.title}
                </h3>
                <p className="text-[12px] text-gray-500 flex items-center gap-1 mb-4">
                  <span className="material-symbols-outlined text-[14px]">location_on</span>
                  {prop.location}
                </p>
                <div className="divider-glow mb-4" />
                <div className="flex items-center gap-4 text-gray-500 text-[12px]">
                  <span className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[15px]">bed</span>
                    {prop.beds} Beds
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[15px]">bathtub</span>
                    {prop.baths} Baths
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[15px]">square_foot</span>
                    {prop.sqft} m²
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Link href="/search?type=property" className="inline-flex items-center gap-1 text-[13px] font-semibold text-emerald-deep hover:underline">
            View All Properties <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </Link>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          PREMIUM VEHICLES — Premium Cards
          ═══════════════════════════════════════════════════════ */}
      <section className="py-16 bg-gray-50/80">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex justify-between items-end mb-10">
            <div>
              <span className="bento-section-label">Top Tier</span>
              <h2 className="text-[22px] font-bold text-gray-900">Premium Vehicles</h2>
              <p className="text-[13px] text-gray-500 mt-1">Automotive excellence for Ethiopian roads.</p>
            </div>
            <Link href="/search?type=vehicle" className="hidden sm:flex items-center gap-1 text-[13px] font-semibold text-emerald-deep hover:underline">
              View All <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 stagger-children">
            {VEHICLES.map((veh) => (
              <Link key={veh.id} href={`/property/${veh.id}`} className="premium-card group">
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <div
                    className="card-image absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url('${veh.image}')` }}
                  />
                  {veh.isNew && (
                    <span className="absolute top-3 left-3 badge-rent px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider">
                      New Arrival
                    </span>
                  )}
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                    <span className="text-white text-[18px] font-extrabold">Br {veh.price}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <h4 className="text-[14px] font-bold text-gray-900 mb-1 group-hover:text-emerald-deep transition-colors">
                    {veh.title}
                  </h4>
                  <p className="text-[12px] text-gray-500 flex items-center gap-2 mb-3">
                    <span>{veh.year}</span>
                    <span className="w-1 h-1 rounded-full bg-gray-300" />
                    <span>{veh.km} km</span>
                    <span className="w-1 h-1 rounded-full bg-gray-300" />
                    <span>{veh.fuel}</span>
                  </p>
                  <button
                    className="w-full py-2.5 border border-emerald-deep/20 text-emerald-deep rounded-xl text-[13px] font-semibold hover:bg-emerald-deep hover:text-white active:scale-[0.98] transition-all duration-200"
                    onClick={(e) => e.preventDefault()}
                  >
                    View Details
                  </button>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link href="/search?type=vehicle" className="inline-flex items-center gap-1 text-[13px] font-semibold text-emerald-deep hover:underline">
              View All Vehicles <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SELLER CTA
          ═══════════════════════════════════════════════════════ */}
      <section className="py-20 bg-emerald-deep relative overflow-hidden">
        {/* Decorative */}
        <div className="absolute inset-0 opacity-[0.04]">
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-white" />
        </div>
        <div className="absolute right-10 top-1/2 -translate-y-1/2 opacity-[0.06] hidden lg:block">
          <span className="material-symbols-outlined text-[280px] text-white">sell</span>
        </div>

        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="max-w-xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/15 text-white text-[11px] font-semibold tracking-wider uppercase mb-6">
              For Sellers
            </span>
            <h2 className="text-[32px] font-extrabold text-white mb-4 leading-tight">
              Ready to Sell Your Asset?
            </h2>
            <p className="text-[15px] text-emerald-primary-fixed/80 mb-10 leading-relaxed">
              Join Ethiopia&apos;s most trusted marketplace. List your property or vehicle today and reach thousands of verified buyers instantly.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/register"
                className="px-8 py-4 bg-white text-emerald-deep rounded-xl text-[14px] font-bold hover:bg-gray-50 active:scale-[0.98] transition-all duration-200 flex items-center gap-2 shadow-xl shadow-black/10"
              >
                <span className="material-symbols-outlined text-[20px]">add_circle</span>
                List Your Asset
              </Link>
              <Link
                href="/search"
                className="px-8 py-4 border-2 border-white/30 text-white rounded-xl text-[14px] font-bold hover:bg-white/10 active:scale-[0.98] transition-all duration-200"
              >
                How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
