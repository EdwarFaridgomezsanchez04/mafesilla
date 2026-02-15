"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Sun } from "lucide-react"

interface LanternProps {
  id: number
  x: number
  xDrift: number
  duration: number
  delay: number
  scale: number
}

function Lantern({ x, xDrift, duration, delay, scale }: LanternProps) {
  return (
    <motion.div
      initial={{
        y: "110vh",
        opacity: 0,
        x: 0,
        scale,
      }}
      animate={{
        y: "-20vh",
        opacity: [0, 1, 1, 0],
        x: [0, `${xDrift}vw`],
      }}
      transition={{
        duration,
        delay,
        ease: "linear",
        repeat: Infinity,
      }}
      style={{
        position: "absolute",
        left: `${x}vw`,
        filter: "drop-shadow(0 0 15px rgba(255, 180, 50, 0.8))",
      }}
      className="flex flex-col items-center pointer-events-none"
    >
      {/* Cuerpo de la linterna (estilo del snippet) */}
      <div className="relative w-12 h-16 bg-orange-200 rounded-sm flex items-center justify-center overflow-hidden border border-orange-300 shadow-inner">
        <Sun
          size={24}
          color="#d97706"
          fill="#d97706"
          strokeWidth={1}
          className="opacity-80"
        />
        <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-orange-500/40 to-transparent" />
      </div>

      {/* Halo de luz */}
      <div className="absolute -inset-4 bg-orange-400/20 blur-2xl rounded-full -z-10" />
    </motion.div>
  )
}

export function FloatingLanterns() {
  const [lanterns, setLanterns] = useState<LanternProps[]>([])

  useEffect(() => {
    const count = 36
    const newLanterns = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100, // toda la pantalla
      xDrift: (Math.random() - 0.5) * 8, // izquierda / derecha
      duration: 16 + Math.random() * 20,
      delay: Math.random() * 10,
      scale: 0.7 + Math.random() * 0.6, // profundidad
    }))
    setLanterns(newLanterns)
  }, [])

  return (
    <div
      className="pointer-events-none fixed inset-0 overflow-hidden z-0"
      aria-hidden="true"
    >
      {lanterns.map((lantern) => (
        <Lantern key={lantern.id} {...lantern} />
      ))}

      {/* Partículas tipo estrellas / polvo */}
      <div className="absolute inset-0 bg-[radial-gradient(white_1px,transparent_1px)] [background-size:50px_50px] opacity-10" />
    </div>
  )
}