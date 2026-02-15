"use client"

import { useEffect, useRef, useState } from "react"
import { Volume2, VolumeX } from "lucide-react"

const AUDIO_SRC =
  "/audio/" + encodeURI("Chayanne, Danna Paola - Veo en ti la luz (De EnredadosVideo Oficial).mp3")

export function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [isMuted, setIsMuted] = useState(false) // activo desde el inicio

  useEffect(() => {
    const a = audioRef.current
    if (!a) return
    a.muted = false
    a.volume = 0.9
    // Intento inicial de reproducción (puede ser bloqueado por políticas del navegador)
    a.play().catch(() => {
      // Si el navegador bloquea autoplay con sonido, reintentamos en la primera interacción
      const resume = () => {
        a.play().catch(() => {})
        document.removeEventListener("pointerdown", resume)
        document.removeEventListener("keydown", resume)
      }
      document.addEventListener("pointerdown", resume, { once: true })
      document.addEventListener("keydown", resume, { once: true })
    })
  }, [])

  useEffect(() => {
    const a = audioRef.current
    if (!a) return
    a.muted = isMuted
    if (!isMuted && a.paused) {
      a.play().catch(() => {})
    }
  }, [isMuted])

  const toggleMute = () => {
    setIsMuted((prev) => !prev)
  }

  return (
    <>
      <audio
        ref={audioRef}
        src={AUDIO_SRC}
        className="hidden"
        loop
        autoPlay
        preload="auto"
      />
      <button
        onClick={toggleMute}
        className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border-2 border-accent/60 bg-background/90 shadow-lg backdrop-blur-sm transition-all hover:scale-110 hover:border-accent hover:bg-primary/20 focus:outline-none focus:ring-2 focus:ring-accent"
        aria-label={isMuted ? "Activar volumen" : "Silenciar"}
        title={isMuted ? "Activar volumen" : "Silenciar"}
      >
        {isMuted ? (
          <VolumeX className="h-6 w-6 text-muted-foreground" />
        ) : (
          <Volume2 className="h-6 w-6 text-primary" />
        )}
      </button>
    </>
  )
}
