"use client"

import { useState, useCallback } from "react"

interface ValentineButtonsProps {
  onAccept: () => void
}

export function ValentineButtons({ onAccept }: ValentineButtonsProps) {
  const [noCount, setNoCount] = useState(0)
  const [isHovering, setIsHovering] = useState(false)

  const messages = [
    "¿Por qué no?",
    "No seas mala",
    "Ándale, ¿sí?",
    "Piénsalo bien…",
    "Me vas a romper el corazón",
    "¿Estás segura?",
    "Una oportunidad",
    "Di que sí",
    "Por favor",
    "Te lo suplico",
  ]

  const yesScale = 1 + noCount * 0.2
  const noScale = Math.max(0.4, 1 - noCount * 0.1)
  const noText = messages[noCount % messages.length] // mensaje actual

  const handleNo = useCallback(() => {
    setNoCount((prev) => prev + 1)
  }, [])

  // Espaciado dinámico que aumenta con cada pregunta y con el crecimiento del botón “Sí”
  const spacerHeight = Math.max(0, (yesScale - 1) * 90 + noCount * 6)

  return (
    <div
      className="flex flex-col items-center justify-center gap-4 py-8"
      style={{ animation: "fade-in-up 0.6s ease-out 0.8s both" }}
    >
      {/* Mensaje dinámico arriba de ambos botones */}
      <div className="text-center text-accent font-medium min-h-6">
        {noCount > 0 ? noText : ""}
      </div>

      {/* Separador automático para todas las preguntas:
          crece con cada intento y con el tamaño del botón “Sí” */}
      {noCount > 0 ? (
        <div aria-hidden="true" className="w-full" style={{ height: `${spacerHeight}px` }} />
      ) : null}

      {/* Zona de botones */}
      <div className="flex flex-wrap items-center justify-center gap-6">
        <button
          onClick={onAccept}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          className="relative font-bold text-primary-foreground rounded-full shadow-lg transition-all duration-300 ease-out focus:outline-none focus:ring-4 focus:ring-accent/50"
          style={{
            transform: `scale(${yesScale})`,
            fontSize: `${Math.min(1 + noCount * 0.1, 2.2)}rem`,
            padding: `${0.75 + noCount * 0.1}rem ${2 + noCount * 0.3}rem`,
            background: isHovering
              ? `linear-gradient(135deg, hsl(280, 50%, 50%), hsl(340, 55%, 60%))`
              : `linear-gradient(135deg, hsl(280, 45%, 55%), hsl(340, 50%, 65%))`,
            boxShadow: isHovering
              ? `0 8px 32px rgba(180, 100, 200, 0.5), 0 0 20px rgba(255, 180, 200, 0.3)`
              : `0 4px 20px rgba(180, 100, 200, 0.3)`,
          }}
        >
          {"Si!"}
        </button>

        <button
          onClick={handleNo}
          aria-label="No"
          className="font-semibold rounded-full border-2 border-secondary text-secondary-foreground transition-all duration-300 ease-out hover:border-primary/40 focus:outline-none focus:ring-2 focus:ring-secondary/50"
          style={{
            transform: `scale(${noScale})`,
            fontSize: `${Math.max(0.6, 1 - noCount * 0.05)}rem`,
            padding: `${Math.max(0.3, 0.75 - noCount * 0.05)}rem ${Math.max(0.6, 2 - noCount * 0.15)}rem`,
            backgroundColor: `hsl(280, 15%, ${92 - noCount * 2}%)`,
            opacity: Math.max(0.5, 1 - noCount * 0.08),
          }}
        >
          {/* El botón ya no muestra "No" */}
          {"No"}
        </button>
      </div>
    </div>
  )
}
