'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'
import { useState } from 'react'

const properties: Record<string, {
  title: string; price: string; location: string; type: string;
  beds: number; baths: number; sqft: number; description: string;
  seller: string; sellerPhone: string; images: string[];
}> = {
  '1': {
    title: 'Luxury Villa in Bole', price: '15,500,000 ETB', location: 'Bole, Addis Ababa', type: 'Villa',
    beds: 4, baths: 3, sqft: 350,
    description: 'Exquisite luxury villa in the heart of Bole featuring modern architecture, premium finishes, and a private garden. This stunning property offers spacious living areas, a gourmet kitchen, and breathtaking city views. Perfect for families seeking elegance and comfort.',
    seller: 'Abel Mekonnen', sellerPhone: '+251 91 234 5678',
    images: ['https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800', 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800', 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800'],
  },
  '2': {
    title: 'Modern Penthouse', price: '8,200,000 ETB', location: 'Kazanchis, Addis Ababa', type: 'Penthouse',
    beds: 2, baths: 2, sqft: 180,
    description: 'Stunning modern penthouse with panoramic city views. Features an open floor plan, floor-to-ceiling windows, and a private rooftop terrace. Located in the vibrant Kazanchis district.',
    seller: 'Sara Tesfaye', sellerPhone: '+251 92 345 6789',
    images: ['https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800', 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800'],
  },
}

const defaultProperty = {
  title: 'Entoto Heights Estate', price: '22,000,000 ETB', location: 'Entoto, Addis Ababa', type: 'Estate',
  beds: 5, baths: 5, sqft: 1200,
  description: 'Magnificent estate property nestled in the scenic Entoto hills. This exceptional property features expansive grounds, a infinity pool, guest house, and unparalleled mountain views.',
  seller: 'Hana Gutama', sellerPhone: '+251 93 456 7890',
  images: ['https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800', 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=800'],
}

export default function PropertyDetailPage() {
  const params = useParams()
  const id = params.id as string
  const property = properties[id] || { ...defaultProperty, title: `Property #${id}` }
  const [activeImage, setActiveImage] = useState(0)

  return (
    <div className="max-w-[1200px] mx-auto px-6 py-8">
      {/* Breadcrumb */}
      <Link
        href="/search"
        className="inline-flex items-center gap-1.5 text-[13px] text-gray-400 hover:text-emerald-deep mb-6 transition-colors group"
      >
        <span className="material-symbols-outlined text-[16px] group-hover:-translate-x-0.5 transition-transform">arrow_back</span>
        Back to listings
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          {/* Main Image */}
          <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-gray-100 group">
            <img
              src={property.images[activeImage]}
              alt={property.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            />
            {/* Badges */}
            <div className="absolute top-4 left-4 flex gap-2">
              <span className="badge-verified px-3 py-1.5 rounded-xl text-[11px] font-bold flex items-center gap-1.5 shadow-lg">
                <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                Verified
              </span>
              <span className="px-3 py-1.5 rounded-xl bg-white/90 backdrop-blur-sm text-gray-700 text-[11px] font-bold shadow-lg">
                {property.type}
              </span>
            </div>
            {/* Favorite */}
            <button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-gray-500 hover:text-red-500 hover:bg-white transition-all shadow-lg">
              <span className="material-symbols-outlined text-[22px]">favorite</span>
            </button>
            {/* Image counter */}
            <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-lg bg-black/50 backdrop-blur-sm text-white text-[11px] font-semibold">
              {activeImage + 1} / {property.images.length}
            </div>
          </div>

          {/* Thumbnails */}
          {property.images.length > 1 && (
            <div className="flex gap-3">
              {property.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`w-24 h-18 rounded-xl overflow-hidden border-2 transition-all duration-200 ${
                    i === activeImage
                      ? 'border-emerald-deep shadow-md shadow-emerald-deep/20'
                      : 'border-gray-100 hover:border-gray-300 opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}

          {/* Details Card */}
          <div className="bento-card p-6">
            <h1 className="text-[22px] font-extrabold text-gray-900">{property.title}</h1>
            <div className="flex items-center gap-1.5 mt-2 text-gray-500">
              <span className="material-symbols-outlined text-[16px]">location_on</span>
              <span className="text-[13px]">{property.location}</span>
            </div>
            <p className="text-[24px] font-extrabold text-emerald-deep mt-4">{property.price}</p>

            <div className="divider-glow my-5" />

            <div className="flex gap-8">
              {[
                { icon: 'bed', label: `${property.beds} Beds` },
                { icon: 'bathtub', label: `${property.baths} Baths` },
                { icon: 'square_foot', label: `${property.sqft} m²` },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center">
                    <span className="material-symbols-outlined text-[20px] text-emerald-deep">{item.icon}</span>
                  </div>
                  <span className="text-[14px] font-semibold text-gray-700">{item.label}</span>
                </div>
              ))}
            </div>

            <div className="divider-glow my-5" />

            <h2 className="text-[15px] font-bold text-gray-900 mb-3">Description</h2>
            <p className="text-[13px] text-gray-500 leading-relaxed">{property.description}</p>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-5">
          <div className="bento-card p-5 sticky top-24">
            {/* Seller Info */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-full bg-emerald-deep flex items-center justify-center text-white font-bold text-[14px] shadow-lg shadow-emerald-deep/20">
                {property.seller.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <p className="text-[14px] font-bold text-gray-900">{property.seller}</p>
                <p className="text-[11px] text-emerald-deep font-semibold flex items-center gap-1">
                  <span className="material-symbols-outlined text-[12px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                  Verified Seller
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <button className="w-full py-3 bg-emerald-deep text-white rounded-xl text-[13px] font-bold hover:bg-emerald-deep/90 active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-emerald-deep/20 mb-2.5">
              <span className="material-symbols-outlined text-[18px]">chat</span>
              Contact Seller
            </button>
            <button className="w-full py-3 border border-gray-200 text-gray-600 rounded-xl text-[13px] font-semibold hover:bg-gray-50 active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2">
              <span className="material-symbols-outlined text-[18px]">calendar_month</span>
              Schedule Viewing
            </button>

            <div className="divider-glow my-4" />

            {/* Phone */}
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
              <span className="material-symbols-outlined text-[18px] text-gray-400">call</span>
              <span className="text-[13px] font-semibold text-gray-700">{property.sellerPhone}</span>
            </div>

            {/* Trust Badges */}
            <div className="mt-4 grid grid-cols-2 gap-2">
              {[
                { icon: 'verified_user', label: 'Verified' },
                { icon: 'shield', label: 'Secure' },
                { icon: 'support_agent', label: '24/7 Support' },
                { icon: 'payments', label: 'Safe Pay' },
              ].map((badge) => (
                <div key={badge.label} className="flex items-center gap-1.5 p-2 bg-gray-50 rounded-lg">
                  <span className="material-symbols-outlined text-[14px] text-emerald-deep">{badge.icon}</span>
                  <span className="text-[10px] font-semibold text-gray-600">{badge.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
