"use client"

import { PetalConfetti } from "./petal-confetti"
import { Heart } from "lucide-react"

export function CelebrationScreen() {
  return (
    <div className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-background/95 backdrop-blur-sm">
      <PetalConfetti />

      <div
        className="relative z-50 flex flex-col items-center gap-8 px-6 text-center"
        style={{ animation: "fade-in-up 1s ease-out both" }}
      >
        {/* Hearts */}
        <div className="flex items-center gap-2">
          <Heart className="w-8 h-8 text-secondary fill-secondary animate-heartbeat" />
          <Heart
            className="w-12 h-12 text-primary fill-primary animate-heartbeat"
            style={{ animationDelay: "0.2s" }}
          />
          <Heart
            className="w-8 h-8 text-secondary fill-secondary animate-heartbeat"
            style={{ animationDelay: "0.4s" }}
          />
        </div>

        {/* Title */}
        <h2 className="font-serif text-4xl md:text-6xl text-primary text-balance leading-relaxed">
          Sabía que ibas a decir que sí!
        </h2>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-foreground/80 font-medium">
          Te adoro demasiado
        </p>

        {/* Final video */}
        <div
          className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-accent shadow-xl mt-4"
          style={{
            animation:
              "fade-in-up 1s ease-out 0.5s both, pulse-glow 2s ease-in-out 1.5s infinite",
          }}
        >
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/images/final-special.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  )
}
