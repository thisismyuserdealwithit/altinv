'use client'

import Link from 'next/link'
import { ArrowRight, Palette, TrendingUp, Shield, Clock, DollarSign, Users } from 'lucide-react'
import { TalkToExpertButton } from '@/components/TalkToExpertButton'

const featuredArt = [
  {
    artist: 'Jean-Michel Basquiat',
    title: 'Untitled (Skull)',
    year: '1982',
    minInvestment: '$1,000',
    targetReturn: '14.2%',
    status: 'Open',
  },
  {
    artist: 'Andy Warhol',
    title: 'Dollar Sign',
    year: '1981',
    minInvestment: '$500',
    targetReturn: '11.8%',
    status: 'Open',
  },
  {
    artist: 'Banksy',
    title: 'Girl with Balloon',
    year: '2006',
    minInvestment: '$1,000',
    targetReturn: '12.5%',
    status: 'Funding',
  },
]

const benefits = [
  {
    icon: TrendingUp,
    title: '14.1% Historical Returns',
    description: 'Contemporary art has outperformed the S&P 500 over the past 25 years with lower correlation to markets.',
  },
  {
    icon: Shield,
    title: 'Inflation Hedge',
    description: 'Physical assets like art tend to hold value during inflationary periods when paper assets struggle.',
  },
  {
    icon: DollarSign,
    title: 'Fractional Ownership',
    description: 'Own shares in museum quality works starting at $500. No need for millions in capital.',
  },
  {
    icon: Users,
    title: 'Professional Management',
    description: 'Expert curation, secure storage, insurance, and eventual sale handled by the platform.',
  },
]

export default function ArtPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="section-padding gradient-hero">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/30 mb-4 sm:mb-6">
                <Palette className="w-3 h-3 sm:w-4 sm:h-4 text-pink-400" />
                <span className="text-xs sm:text-sm text-pink-400">Partner: Yieldstreet</span>
              </div>
              
              <h1 className="font-serif text-section-title sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-citadel-cream mb-4 sm:mb-6 leading-tight">
                Invest in<br />
                <span className="text-pink-400">Blue Chip Art</span>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl text-citadel-cream/70 leading-relaxed mb-6 sm:mb-8">
                Own shares in masterworks by Basquiat, Warhol, Banksy, and more. 
                Fractional ownership makes museum quality art accessible to everyone.
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                <TalkToExpertButton variant="primary" />
                <Link href="/art/guide" className="btn-secondary group">
                  How It Works
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="relative order-1 lg:order-2">
              <div className="aspect-video sm:aspect-square rounded-2xl overflow-hidden border border-pink-500/30 shadow-2xl shadow-pink-500/10">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover scale-105"
                >
                  <source src="/videos/art.mp4" type="video/mp4" />
                </video>
                {/* Gold/Pink shimmer overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-citadel-gold/10 via-transparent to-pink-500/10 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-t from-citadel-black/30 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-8 bg-citadel-charcoal border-y border-citadel-border">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '14.1%', label: 'Avg Annual Return' },
              { value: '0.12', label: 'S&P Correlation' },
              { value: '$500', label: 'Minimum Investment' },
              { value: '5-10 yrs', label: 'Typical Hold Period' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-mono text-2xl md:text-3xl text-pink-400 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-citadel-cream/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-citadel-black">
        <div className="container-custom">
          <div className="max-w-3xl mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-citadel-cream mb-4">
              Why Invest in Art?
            </h2>
            <p className="text-citadel-cream/60">
              Art has been a store of value for centuries. Now fractional ownership 
              makes it accessible to individual investors.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="card">
                <benefit.icon className="w-8 h-8 text-pink-400 mb-4" />
                <h3 className="font-serif text-xl font-semibold text-citadel-cream mb-2">
                  {benefit.title}
                </h3>
                <p className="text-citadel-cream/60">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Offerings */}
      <section className="section-padding bg-citadel-charcoal">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-citadel-cream mb-4">
                Current Offerings
              </h2>
              <p className="text-citadel-cream/60">
                Available through our partner Yieldstreet. New offerings added regularly.
              </p>
            </div>
            <TalkToExpertButton variant="secondary" />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {featuredArt.map((art) => (
              <div key={art.title} className="card group hover:border-pink-500/30 transition-colors">
                <div className="aspect-video bg-gradient-to-br from-pink-500/10 to-purple-500/10 rounded-lg mb-4 flex items-center justify-center">
                  <Palette className="w-12 h-12 text-pink-400/50" />
                </div>
                
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-citadel-cream/50">{art.year}</span>
                  <span className={`text-xs px-2 py-0.5 rounded ${
                    art.status === 'Open' ? 'bg-green-500/20 text-green-400' : 'bg-amber-500/20 text-amber-400'
                  }`}>
                    {art.status}
                  </span>
                </div>
                
                <h3 className="font-serif text-lg font-semibold text-citadel-cream mb-1">
                  {art.title}
                </h3>
                <p className="text-sm text-citadel-cream/60 mb-4">{art.artist}</p>
                
                <div className="flex justify-between text-sm pt-4 border-t border-citadel-border">
                  <div>
                    <span className="text-citadel-cream/50">Min Investment</span>
                    <div className="font-mono text-citadel-cream">{art.minInvestment}</div>
                  </div>
                  <div className="text-right">
                    <span className="text-citadel-cream/50">Target Return</span>
                    <div className="font-mono text-pink-400">{art.targetReturn}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-citadel-black">
        <div className="container-custom">
          <div className="card gold-glow max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-citadel-cream mb-4">
              Ready to Start Investing in Art?
            </h2>
            <p className="text-citadel-cream/60 mb-8">
              Talk to our team to learn more about art as an investment and get 
              access to current offerings through Yieldstreet.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <TalkToExpertButton variant="primary" />
              <Link href="/art/guide" className="btn-secondary">
                Read the Guide
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

