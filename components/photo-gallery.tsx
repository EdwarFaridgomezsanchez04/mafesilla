"use client"

import Image from "next/image"
import { useState } from "react"

const photos = [
  { src: "/images/couple-1.jpg", alt: "Nuestra primera aventura juntos" },
  { src: "/images/couple-2.jpg", alt: "Un momento especial bajo las flores" },
  { src: "/images/couple-3.jpg", alt: "Bailando bajo las linternas" },
  { src: "/images/couple-4.jpg", alt: "Juntos para siempre" },
]

export function PhotoGallery() {
  return (
    <div className="grid grid-cols-2 gap-4 w-full max-w-lg mx-auto">
      {photos.map((photo, i) => (
        <div
          key={i}
          className="relative overflow-hidden rounded-2xl border-2 border-accent/40 shadow-lg aspect-square group"
          style={{
            animation: `fade-in-up 0.6s ease-out ${0.2 + i * 0.15}s both`,
          }}
        >
          {/* reemplazo del <Image> directo por un pequeño wrapper con fallback */}
          <GalleryImage src={photo.src} alt={photo.alt} priority={i < 2} />
        </div>
      ))}
    </div>
  )
}

function GalleryImage({
  src,
  alt,
  priority,
}: {
  src: string
  alt: string
  priority?: boolean
}) {
  const [imgSrc, setImgSrc] = useState(src.startsWith("/") ? src : `/${src}`)
  return (
    <Image
      src={imgSrc}
      alt={alt}
      fill
      unoptimized
      priority={priority}
      onError={() => setImgSrc("/placeholder.jpg")}
      className="object-cover transition-transform duration-500 group-hover:scale-110"
      sizes="(max-width: 640px) 45vw, 220px"
    />
  )
}
