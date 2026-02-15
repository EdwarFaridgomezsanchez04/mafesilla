"use client"

import { useEffect, useState } from "react"

interface Petal {
  id: number
  left: number
  size: number
  delay: number
  duration: number
  color: string
  rotation: number
}

const petalColors = [
  "hsl(340, 60%, 70%)",
  "hsl(340, 55%, 75%)",
  "hsl(340, 50%, 80%)",
  "hsl(0, 0%, 95%)",
  "hsl(0, 0%, 90%)",
  "hsl(280, 40%, 75%)",
  "hsl(280, 35%, 80%)",
  "hsl(43, 85%, 70%)",
]

export function PetalConfetti() {
  const [petals, setPetals] = useState<Petal[]>([])

  useEffect(() => {
    const items: Petal[] = Array.from({ length: 60 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: 8 + Math.random() * 16,
      delay: Math.random() * 3,
      duration: 3 + Math.random() * 4,
      color: petalColors[Math.floor(Math.random() * petalColors.length)],
      rotation: Math.random() * 360,
    }))
    setPetals(items)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden" aria-hidden="true">
      {petals.map((p) => (
        <div
          key={p.id}
          className="absolute -top-4"
          style={{
            left: `${p.left}%`,
            animation: `petal-fall ${p.duration}s linear ${p.delay}s forwards`,
          }}
        >
          <svg
            width={p.size}
            height={p.size * 1.2}
            viewBox="0 0 20 24"
            style={{ transform: `rotate(${p.rotation}deg)` }}
          >
            <ellipse cx="10" cy="12" rx="8" ry="11" fill={p.color} opacity="0.85" />
            <ellipse cx="10" cy="10" rx="5" ry="7" fill={p.color} opacity="0.4" />
          </svg>
        </div>
      ))}
    </div>
  )
}
