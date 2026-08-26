'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'

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

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <Link href="/" className="inline-flex items-center gap-1 text-sm text-on-surface-variant hover:text-primary mb-6 transition-colors">
        <span className="material-symbols-outlined text-[16px]">arrow_back</span>
        Back to listings
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {/* Image Gallery */}
          <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-surface-container">
            <img src={property.images[0]} alt={property.title} className="w-full h-full object-cover" />
            <div className="absolute top-4 left-4 flex gap-2">
              <span className="bg-verified-green text-white text-[10px] font-bold px-2.5 py-1 rounded-lg flex items-center gap-1">
                <span className="material-symbols-outlined text-[12px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                Verified
              </span>
              <span className="bg-white/90 backdrop-blur-sm text-on-surface text-[10px] font-bold px-2.5 py-1 rounded-lg">{property.type}</span>
            </div>
            <button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors">
              <span className="material-symbols-outlined text-[20px] text-on-surface-variant">favorite</span>
            </button>
          </div>

          {/* Thumbnail strip */}
          {property.images.length > 1 && (
            <div className="flex gap-2">
              {property.images.map((img, i) => (
                <div key={i} className="w-20 h-16 rounded-xl overflow-hidden border-2 border-primary/30">
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          )}

          {/* Details */}
          <div className="bento-card p-6">
            <h1 className="text-2xl font-bold text-on-surface">{property.title}</h1>
            <div className="flex items-center gap-2 mt-2">
              <span className="material-symbols-outlined text-[16px] text-on-surface-variant">location_on</span>
              <span className="text-sm text-on-surface-variant">{property.location}</span>
            </div>
            <p className="text-2xl font-bold text-primary mt-4">{property.price}</p>

            <div className="flex gap-6 mt-6 py-4 border-y border-outline-variant/30">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] text-on-surface-variant">bed</span>
                <span className="text-sm font-medium">{property.beds} Beds</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] text-on-surface-variant">bathtub</span>
                <span className="text-sm font-medium">{property.baths} Baths</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] text-on-surface-variant">square_foot</span>
                <span className="text-sm font-medium">{property.sqft} m²</span>
              </div>
            </div>

            <h2 className="text-base font-bold text-on-surface mt-6 mb-3">Description</h2>
            <p className="text-sm text-on-surface-variant leading-relaxed">{property.description}</p>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-4">
          <div className="bento-card p-5 sticky top-24">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container font-bold text-sm">
                {property.seller.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <p className="text-sm font-semibold text-on-surface">{property.seller}</p>
                <p className="text-[11px] text-on-surface-variant">Verified Seller</p>
              </div>
            </div>
            <button className="w-full py-2.5 bg-primary-container text-on-primary-container rounded-xl text-sm font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2 mb-2">
              <span className="material-symbols-outlined text-[16px]">chat</span>
              Contact Seller
            </button>
            <button className="w-full py-2.5 border border-outline-variant/50 text-on-surface-variant rounded-xl text-sm font-medium hover:bg-surface-container-low transition-colors flex items-center justify-center gap-2">
              <span className="material-symbols-outlined text-[16px]">calendar_month</span>
              Schedule Viewing
            </button>
            <div className="mt-4 pt-4 border-t border-outline-variant/30">
              <div className="flex items-center gap-2 text-sm text-on-surface-variant">
                <span className="material-symbols-outlined text-[16px]">call</span>
                {property.sellerPhone}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
