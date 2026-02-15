import type { Metadata } from "next"
import { Great_Vibes, Quicksand } from "next/font/google"

import { FloatingLanterns } from "@/components/floating-lanterns"
import { BackgroundMusic } from "@/components/background-music"
import "./globals.css"

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-serif",
})

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "San Valentin",
  description: "Una pregunta muy especial para ti",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body
        className={`${quicksand.variable} ${greatVibes.variable} font-sans antialiased relative`}
      >
        {/* Background animated lanterns */}
        <FloatingLanterns />

        {children}

        <BackgroundMusic />
      </body>
    </html>
  )
}
