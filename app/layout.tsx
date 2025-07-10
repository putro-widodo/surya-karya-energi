import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Surya Karya Energi - Clean and Green Energy Solutions",
  description:
    "PT Surya Karya Energi menyediakan solusi energi berkelanjutan, dari sistem energi terbarukan hingga pembangkit listrik tradisional. Layanan lengkap EPC, O&M, dan rental genset.",
  keywords: "energi terbarukan, PLTS, genset, EPC, solar power, clean energy, Indonesia",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen bg-black text-white overflow-y-auto`}>
        {children}
      </body>
    </html>
  )
}
