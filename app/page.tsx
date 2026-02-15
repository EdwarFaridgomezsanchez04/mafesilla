"use client"

import { useState } from "react"
import { FloralDecorations } from "@/components/floral-decorations"
import { PhotoGallery } from "@/components/photo-gallery"
import { ValentineButtons } from "@/components/valentine-buttons"
import { CelebrationScreen } from "@/components/celebration-screen"
import { Heart } from "lucide-react"

export default function ValentinePage() {
  const [accepted, setAccepted] = useState(false)

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Nota: Se quitó bg-background para no tapar las linternas */}
      <FloralDecorations />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center gap-8 px-4 py-12 max-w-2xl mx-auto w-full">
        {/* Hearts decoration */}
        <div
          className="flex items-center gap-3"
          style={{ animation: "fade-in-up 0.6s ease-out both" }}
        >
          <Heart className="w-5 h-5 text-secondary fill-secondary" />
          <Heart className="w-4 h-4 text-accent fill-accent" />
          <Heart className="w-6 h-6 text-primary fill-primary" />
          <Heart className="w-4 h-4 text-accent fill-accent" />
          <Heart className="w-5 h-5 text-secondary fill-secondary" />
        </div>

        {/* Title */}
        <h1
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-primary text-center text-balance leading-relaxed"
          style={{ animation: "fade-in-up 0.6s ease-out 0.1s both" }}
        >
          Quieres ser mi
          <br />
          <span
            className="text-accent inline-block"
            style={{ textShadow: "0 2px 10px rgba(200, 160, 60, 0.3)" }}
          >
            San Valentin?
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className="text-muted-foreground text-lg md:text-xl text-center max-w-md"
          style={{ animation: "fade-in-up 0.6s ease-out 0.3s both" }}
        >
          Cada momento contigo es un cuento de hadas hecho realidad
        </p>

        {/* Divider */}
        <div
          className="flex items-center gap-4 w-full max-w-xs"
          style={{ animation: "fade-in-up 0.6s ease-out 0.4s both" }}
        >
          <div className="flex-1 h-px bg-border" />
          <Heart className="w-4 h-4 text-secondary fill-secondary" />
          <div className="flex-1 h-px bg-border" />
        </div>

        <PhotoGallery />

        {/* Divider */}
        <div
          className="flex items-center gap-4 w-full max-w-xs"
          style={{ animation: "fade-in-up 0.6s ease-out 0.7s both" }}
        >
          <div className="flex-1 h-px bg-border" />
          <Heart className="w-4 h-4 text-accent fill-accent" />
          <div className="flex-1 h-px bg-border" />
        </div>

        <ValentineButtons onAccept={() => setAccepted(true)} />
      </div>

      {accepted && <CelebrationScreen />}
    </main>
  )
}
