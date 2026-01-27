'use client'

import Link from 'next/link'
import { ArrowRight, TrendingUp, Eye, ShieldCheck, Palette, Wine, Watch, Gem } from 'lucide-react'
import { TalkToExpertButton } from '@/components/TalkToExpertButton'

const categories = [
  {
    icon: Palette,
    name: 'Fine Art',
    description: 'Blue-chip contemporary and modern masters. Banksy, Basquiat, Warhol, and emerging artists with institutional backing.',
    stats: { avgReturn: '14.1%', minInvest: '$10,000', holding: '3-7 years' },
    featured: 'Basquiat "Untitled" — $2.4M lot, 18 shares remaining',
    href: '/collectibles/art',
    color: 'border-purple-500/30',
  },
  {
    icon: Wine,
    name: 'Fine Wine & Spirits',
    description: 'Investment-grade Bordeaux, Burgundy, and rare whisky. Temperature-controlled bonded storage with provenance tracking.',
    stats: { avgReturn: '10.6%', minInvest: '$2,500', holding: '5-10 years' },
    featured: 'Macallan 25yr Cask Collection — $48K/cask, 3 available',
    href: '/collectibles/wine',
    color: 'border-red-800/30',
  },
  {
    icon: Watch,
    name: 'Luxury Watches',
    description: 'Patek Philippe, Rolex, Audemars Piguet. Authenticated, insured, and stored in Geneva vaults.',
    stats: { avgReturn: '8.2%', minInvest: '$25,000', holding: '2-5 years' },
    featured: 'Patek Nautilus 5711 — $145K, immediate delivery',
    href: '/collectibles/watches',
    color: 'border-citadel-gold/30',
  },
  {
    icon: Gem,
    name: 'Rare Coins & Numismatics',
    description: 'Museum-quality ancient and rare coins. NGC/PCGS certified with full provenance documentation.',
    stats: { avgReturn: '7.8%', minInvest: '$5,000', holding: '5-15 years' },
    featured: '1933 Double Eagle — Private sale inquiries',
    href: '/collectibles/coins',
    color: 'border-amber-600/30',
  },
]

const partners = [
  { name: 'Masterworks', type: 'Fine Art', commission: 'CPA', logo: '🎨' },
  { name: 'Vinovest', type: 'Wine', commission: 'CPA', logo: '🍷' },
  { name: 'Rally', type: 'Collectibles', commission: 'Rev Share', logo: '🏎️' },
  { name: 'Konvi', type: 'Luxury Goods', commission: 'CPA', logo: '⌚' },
]

export default function CollectiblesPage() {
  return (
    <div className="pt-20">
      {/* Hero with Video */}
      <section className="relative section-padding overflow-hidden min-h-[60vh] sm:min-h-[70vh] flex items-center">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover scale-105"
        >
          <source src="/videos/collectibles.mp4" type="video/mp4" />
        </video>
        
        {/* Multi-layer Gold Overlay */}
        <div className="absolute inset-0 video-overlay-gold" />
        <div className="absolute inset-0 bg-gradient-to-b from-citadel-black/50 via-transparent to-citadel-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-citadel-black/90 via-citadel-black/60 to-transparent" />
        
        {/* Subtle purple tint for collectibles */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-citadel-gold/5" />
        
        {/* Vignette */}
        <div className="absolute inset-0 video-vignette pointer-events-none" />
        
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <p className="text-purple-400 uppercase tracking-[0.15em] sm:tracking-[0.2em] text-xs sm:text-sm font-medium mb-3 sm:mb-4">
              Tangible Defense
            </p>
            <h1 className="font-serif text-section-title sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-citadel-cream mb-4 sm:mb-6 leading-tight">
              Collectibles &<br />Passion Assets
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-citadel-cream/70 leading-relaxed mb-6 sm:mb-8">
              Art that appreciates. Wine that matures. Watches that transcend time. 
              Transform passion into portfolio performance with curated collectibles 
              that have outperformed the S&P 500 over the last two decades.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <TalkToExpertButton variant="primary" />
              <Link href="#categories" className="btn-secondary">
                Explore Categories
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Thesis */}
      <section className="section-padding bg-citadel-charcoal">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-citadel-cream mb-6">
                Why Collectibles Belong in Your Portfolio
              </h2>
              <div className="space-y-4 text-citadel-cream/70">
                <p>
                  Collectibles aren't just pretty things. They're uncorrelated assets 
                  with documented appreciation histories. During the 2008 financial crisis, 
                  fine art declined just 4.5% while equities cratered 50%.
                </p>
                <p>
                  The ultra-wealthy have always known this. Family offices allocate 
                  5-15% to "passion assets"—not because they're emotional about art, 
                  but because the math works.
                </p>
                <p>
                  Until recently, this asset class was inaccessible to individual investors. 
                  You needed millions to buy a Basquiat. Now, through fractional ownership 
                  and curated marketplaces, you can build a museum-quality collection 
                  starting at $1,000.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="card text-center">
                <div className="font-mono text-3xl text-citadel-gold mb-2">14.1%</div>
                <div className="text-sm text-citadel-cream/60">Contemporary Art<br />Annual Returns (1995-2023)</div>
              </div>
              <div className="card text-center">
                <div className="font-mono text-3xl text-citadel-gold mb-2">0.12</div>
                <div className="text-sm text-citadel-cream/60">Correlation with<br />S&P 500</div>
              </div>
              <div className="card text-center">
                <div className="font-mono text-3xl text-citadel-gold mb-2">$67B</div>
                <div className="text-sm text-citadel-cream/60">Global Art Market<br />Annual Sales</div>
              </div>
              <div className="card text-center">
                <div className="font-mono text-3xl text-citadel-gold mb-2">22%</div>
                <div className="text-sm text-citadel-cream/60">UHNW Portfolio<br />Allocation</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section id="categories" className="section-padding bg-citadel-black">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-citadel-cream mb-4">
              Collectible Categories
            </h2>
            <p className="text-citadel-cream/60">
              Each category offers different return profiles, liquidity windows, and 
              entry points. Build a diversified collectibles portfolio or go deep 
              in your area of expertise.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={category.href}
                className={`card-elevated group border-l-4 ${category.color}`}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-citadel-slate">
                    <category.icon className="w-6 h-6 text-citadel-gold" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-xl font-semibold text-citadel-cream group-hover:text-citadel-gold transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-sm text-citadel-cream/60 mt-1">
                      {category.description}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-4 py-4 border-y border-citadel-border">
                  <div>
                    <div className="text-xs text-citadel-cream/50 uppercase tracking-wide">Avg Return</div>
                    <div className="font-mono text-lg text-green-400">{category.stats.avgReturn}</div>
                  </div>
                  <div>
                    <div className="text-xs text-citadel-cream/50 uppercase tracking-wide">Min Invest</div>
                    <div className="font-mono text-lg text-citadel-cream">{category.stats.minInvest}</div>
                  </div>
                  <div>
                    <div className="text-xs text-citadel-cream/50 uppercase tracking-wide">Holding</div>
                    <div className="font-mono text-lg text-citadel-cream">{category.stats.holding}</div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-sm text-citadel-gold/80">
                    <Eye className="w-4 h-4 inline mr-1" />
                    {category.featured}
                  </div>
                  <ArrowRight className="w-5 h-5 text-citadel-cream/30 group-hover:text-citadel-gold group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-citadel-charcoal">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-citadel-cream mb-4">
              How Collectibles Investing Works
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Browse & Research', desc: 'Explore curated offerings across art, wine, watches, and more. Each asset includes provenance, condition reports, and comparable sales.' },
              { step: '02', title: 'Invest', desc: 'Buy fractional shares starting at $1,000, or acquire full ownership for larger pieces. Funds held in escrow until closing.' },
              { step: '03', title: 'Hold & Monitor', desc: 'Track your collection\'s value with real-time market data. Receive quarterly appraisals and market intelligence.' },
              { step: '04', title: 'Exit', desc: 'Sell on secondary markets, wait for an acquisition offer, or take physical possession. You control the timeline.' },
            ].map((item) => (
              <div key={item.step} className="relative">
                <div className="font-mono text-5xl text-citadel-gold/20 mb-4">{item.step}</div>
                <h3 className="font-serif text-lg font-semibold text-citadel-cream mb-2">{item.title}</h3>
                <p className="text-sm text-citadel-cream/60">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="section-padding bg-citadel-black">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-citadel-cream mb-4">
              Our Platform Partners
            </h2>
            <p className="text-citadel-cream/60">
              We've vetted the leading collectibles platforms so you don't have to. 
              Each partner meets our standards for authenticity, custody, and transparency.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {partners.map((partner) => (
              <div key={partner.name} className="card text-center group hover:border-citadel-gold/30 transition-colors">
                <div className="text-4xl mb-3">{partner.logo}</div>
                <h3 className="font-serif text-lg font-semibold text-citadel-cream group-hover:text-citadel-gold transition-colors">
                  {partner.name}
                </h3>
                <div className="text-sm text-citadel-cream/60 mt-1">{partner.type}</div>
                <Link href={`/partners/${partner.name.toLowerCase()}`} className="inline-block mt-4 text-sm text-citadel-gold">
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Due Diligence CTA */}
      <section className="section-padding bg-citadel-charcoal">
        <div className="container-custom">
          <div className="card gold-glow max-w-4xl mx-auto text-center">
            <ShieldCheck className="w-12 h-12 text-citadel-gold mx-auto mb-4" />
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-citadel-cream mb-4">
              Free Due Diligence Report
            </h2>
            <p className="text-citadel-cream/60 mb-6 max-w-2xl mx-auto">
              Before you invest in any collectible, download our comprehensive 
              due diligence checklist. Covers authentication, provenance verification, 
              storage requirements, insurance, and exit strategies.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/resources/collectibles-due-diligence" className="btn-primary">
                Download Checklist
              </Link>
              <Link href="/contact" className="btn-secondary">
                Speak with an Expert
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

