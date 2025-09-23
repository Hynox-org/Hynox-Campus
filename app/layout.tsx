import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Instrument_Sans } from "next/font/google"

const instrument_sans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
})

import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: "HYNOX Campus - All-in-One ERP for Schools & Colleges",
  description: "Streamline your institution's management with HYNOX Campus, the all-in-one ERP solution for schools and colleges. Simplify administration, enhance communication, and improve efficiency with our user-friendly platform.",
  icons: {
    icon: "/hynox_logo.jpg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${instrument_sans.variable} antialiased dark`}>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
