import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import SearchModal from "@/components/SearchModal"
import { Providers } from "@/components/providers"
import { Suspense } from "react"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "AttarConnect - Premium Traditional Fragrances",
  description:
    "Connect with master artisans and discover authentic traditional fragrances, attars, and essential oils from across India.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        <Providers>
          <Suspense fallback={<div>Loading...</div>}>
            <div className="flex flex-col min-h-screen">
              <Navbar />
              <main className="flex-1">{children}</main>
              <Footer />
              <SearchModal />
            </div>
          </Suspense>
        </Providers>
      </body>
    </html>
  )
}
