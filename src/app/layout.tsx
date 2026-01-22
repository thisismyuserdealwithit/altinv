import type { Metadata } from 'next'
import './globals.css'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Alternative Allocation | Diversify Beyond Stocks and Bonds',
  description: 'Your guide to alternative investments. Rare metals, collectibles, Dubai real estate, fine art, litigation financing, and business acquisitions. Free research and expert guidance.',
  keywords: 'alternative investments, rare metals, collectibles investing, Dubai real estate, fine art investment, litigation financing, business acquisitions, portfolio diversification',
  openGraph: {
    title: 'Alternative Allocation | Diversify Beyond Stocks and Bonds',
    description: 'Your guide to alternative investments across six sectors.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Alternative Allocation',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alternative Allocation',
    description: 'Diversify beyond stocks and bonds with alternative investments.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#0A0A0A" />
      </head>
      <body className="bg-citadel-black text-citadel-cream antialiased">
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
