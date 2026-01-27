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
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/hero-gold.mp4" type="video/mp4" />
      </video>
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-citadel-black/90 via-citadel-black/70 to-citadel-black/50" />
      
      {/* Gold Accent Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-citadel-black via-transparent to-transparent" />

      <div className="container-custom relative z-10 pt-32 pb-20">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-citadel-slate/50 border border-citadel-border mb-8">
            <span className="w-2 h-2 rounded-full bg-citadel-gold animate-pulse" />
            <span className="text-sm text-citadel-cream/80">
              Your Guide to Alternative Investments
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-semibold text-citadel-cream mb-6 leading-[1.1]">
            Diversify Beyond<br />
            <span className="text-citadel-gold">Stocks and Bonds.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-citadel-cream/60 leading-relaxed mb-8 max-w-2xl">
            Rare metals, collectibles, Dubai real estate, fine art, litigation financing, 
            and business acquisitions. Six sectors. One platform. Free guidance.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-12">
            <TalkToExpertButton variant="primary" />
            <Link href="/tools/allocation-calculator" className="btn-secondary group">
              Calculate Your Allocation
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/newsletter" className="btn-ghost">
              Join Free Newsletter
            </Link>
          </div>

          {/* Sectors */}
          <div className="flex flex-wrap gap-4 md:gap-6">
            {sectors.map((sector) => (
              <div key={sector.label} className="flex items-center gap-2">
                <sector.icon className={`w-5 h-5 ${sector.color}`} />
                <span className="text-sm text-citadel-cream/70">{sector.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs text-citadel-cream/40 uppercase tracking-widest">Explore</span>
          <div className="w-px h-8 bg-gradient-to-b from-citadel-gold/50 to-transparent" />
        </div>
      </div>
    </section>
  )
}
