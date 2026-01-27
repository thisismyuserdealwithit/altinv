'use client'

import Link from 'next/link'
import { ArrowRight, Gem, Package, Building2, Palette, Scale, Briefcase } from 'lucide-react'
import { TalkToExpertButton } from '../TalkToExpertButton'

const sectors = [
  { icon: Gem, label: 'Rare Metals', color: 'text-citadel-gold' },
  { icon: Package, label: 'Collectibles', color: 'text-purple-400' },
  { icon: Building2, label: 'Dubai Real Estate', color: 'text-green-400' },
  { icon: Palette, label: 'Fine Art', color: 'text-pink-400' },
  { icon: Scale, label: 'Litigation Finance', color: 'text-blue-400' },
  { icon: Briefcase, label: 'Business Acquisitions', color: 'text-amber-400' },
]

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover scale-105"
      >
        <source src="/videos/hero-gold.mp4" type="video/mp4" />
      </video>
      
      {/* Multi-layer Gold Overlay */}
      <div className="absolute inset-0 video-overlay-gold" />
      <div className="absolute inset-0 bg-gradient-to-b from-citadel-black/40 via-transparent to-citadel-black" />
      <div className="absolute inset-0 bg-gradient-to-r from-citadel-black/80 via-citadel-black/40 to-transparent" />
      
      {/* Subtle Gold Shimmer */}
      <div className="absolute inset-0 shimmer-gold opacity-30" />
      
      {/* Vignette */}
      <div className="absolute inset-0 video-vignette pointer-events-none" />

      <div className="container-custom relative z-10 pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-citadel-slate/60 backdrop-blur-sm border border-citadel-gold/20 mb-6 sm:mb-8">
            <span className="w-2 h-2 rounded-full bg-citadel-gold animate-pulse" />
            <span className="text-xs sm:text-sm text-citadel-cream/80">
              Your Guide to Alternative Investments
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-serif text-hero font-semibold text-citadel-cream mb-4 sm:mb-6 leading-[1.1]">
            Diversify Beyond<br />
            <span className="text-citadel-gold drop-shadow-[0_0_30px_rgba(201,162,39,0.3)]">Stocks and Bonds.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-citadel-cream/70 leading-relaxed mb-6 sm:mb-8 max-w-2xl">
            Rare metals, collectibles, Dubai real estate, fine art, litigation financing, 
            and business acquisitions. Six sectors. One platform. Free guidance.
          </p>

          {/* CTAs - Stack on mobile */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mb-8 sm:mb-12">
            <TalkToExpertButton variant="primary" />
            <Link href="/tools/allocation-calculator" className="btn-secondary group">
              Calculate Your Allocation
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/newsletter" className="btn-ghost">
              Join Free Newsletter
            </Link>
          </div>

          {/* Sectors - Grid on mobile */}
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-3 sm:gap-4 md:gap-6">
            {sectors.map((sector) => (
              <div key={sector.label} className="flex items-center gap-2 bg-citadel-black/30 backdrop-blur-sm rounded-lg px-3 py-2 sm:bg-transparent sm:p-0">
                <sector.icon className={`w-4 h-4 sm:w-5 sm:h-5 ${sector.color}`} />
                <span className="text-xs sm:text-sm text-citadel-cream/80">{sector.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator - Hidden on small mobile */}
        <div className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 animate-bounce">
          <span className="text-xs text-citadel-cream/40 uppercase tracking-widest">Explore</span>
          <div className="w-px h-8 bg-gradient-to-b from-citadel-gold/50 to-transparent" />
        </div>
      </div>
    </section>
  )
}
