'use client'

import { useState } from 'react'

interface ImageGalleryProps {
  images: string[]
  alt: string
}

export function ImageGallery({ images, alt }: ImageGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0)

  return (
    <div className="space-y-2">
      <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-surface-container">
        <img
          src={images[selectedIndex]}
          alt={alt}
          className="w-full h-full object-cover"
        />
        {images.length > 1 && (
          <>
            <button
              onClick={() => setSelectedIndex(i => i > 0 ? i - 1 : images.length - 1)}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors shadow-sm"
            >
              <span className="material-symbols-outlined text-[18px]">chevron_left</span>
            </button>
            <button
              onClick={() => setSelectedIndex(i => i < images.length - 1 ? i + 1 : 0)}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors shadow-sm"
            >
              <span className="material-symbols-outlined text-[18px]">chevron_right</span>
            </button>
          </>
        )}
        <div className="absolute bottom-3 right-3 bg-black/50 text-white text-[11px] font-medium px-2 py-1 rounded-lg">
          {selectedIndex + 1} / {images.length}
        </div>
      </div>
      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-1">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setSelectedIndex(i)}
              className={`w-16 h-16 rounded-xl overflow-hidden shrink-0 border-2 transition-all ${
                selectedIndex === i ? 'border-primary' : 'border-transparent opacity-60 hover:opacity-100'
              }`}
            >
              <img src={img} alt={`${alt} ${i + 1}`} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
