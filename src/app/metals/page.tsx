import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Shield, TrendingUp, Lock, Truck } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Strategic Metals | Gallium, Germanium & Critical Materials | Alt-Wealth Citadel',
  description: 'Invest in strategic metals that power modern technology. Gallium for semiconductors, germanium for fiber optics, rare earths for EVs. Request a quote from our metals desk.',
  keywords: 'strategic metals investment, gallium investing, germanium price, rare earth metals, critical materials, precious metals alternative',
}

const metals = [
  {
    name: 'Gallium',
    symbol: 'Ga',
    price: '$285/kg',
    change: '+18.2% YTD',
    description: 'Essential for semiconductors, LEDs, and solar cells. China controls 80% of production. US import dependency: 100%.',
    applications: ['Semiconductors', 'LEDs', 'Solar Cells', '5G Technology'],
    href: '/metals/gallium',
  },
  {
    name: 'Germanium',
    symbol: 'Ge',
    price: '$1,850/kg',
    change: '+12.4% YTD',
    description: 'Critical for fiber optics, infrared optics, and electronics. Limited primary production—mostly recovered from zinc processing.',
    applications: ['Fiber Optics', 'Night Vision', 'Solar Cells', 'Catalysts'],
    href: '/metals/germanium',
  },
  {
    name: 'Indium',
    symbol: 'In',
    price: '$240/kg',
    change: '+8.7% YTD',
    description: 'Key component in touchscreens and LCD displays. No primary mines—entirely a byproduct of zinc and lead smelting.',
    applications: ['Touchscreens', 'LCDs', 'Semiconductors', 'Low-melt Alloys'],
    href: '/metals/indium',
  },
  {
    name: 'Rare Earths',
    symbol: 'REE',
    price: 'Varies',
    change: 'Mixed',
    description: '17 elements critical for EVs, wind turbines, and defense. China controls 70% of mining and 90% of processing.',
    applications: ['EV Motors', 'Wind Turbines', 'Defense Systems', 'Electronics'],
    href: '/metals/rare-earths',
  },
]

const benefits = [
  {
    icon: Shield,
    title: 'Inflation Hedge',
    description: 'Physical assets that maintain purchasing power when paper currencies erode.',
  },
  {
    icon: TrendingUp,
    title: 'Supply Constraints',
    description: 'Structural deficits as demand grows faster than mining can respond.',
  },
  {
    icon: Lock,
    title: 'Secure Custody',
    description: 'Insured vault storage in Delaware, Switzerland, or Singapore.',
  },
  {
    icon: Truck,
    title: 'Physical Delivery',
    description: 'Take possession anytime. Your metal, your control.',
  },
]

export default function MetalsPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="section-padding gradient-hero">
        <div className="container-custom">
          <div className="max-w-3xl">
            <p className="text-citadel-gold uppercase tracking-[0.2em] text-sm font-medium mb-4">
              Tangible Defense
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-citadel-cream mb-6 leading-tight">
              Strategic Metals
            </h1>
            <p className="text-xl text-citadel-cream/60 leading-relaxed mb-8">
              Beyond gold and silver. The critical materials that power semiconductors, 
              fiber optics, and electric vehicles—with supply chains concentrated in 
              geopolitically sensitive regions. Scarcity you can hold.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="#metals" className="btn-primary">
                Explore Metals
              </Link>
              <Link href="/contact" className="btn-secondary">
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Thesis Section */}
      <section className="section-padding bg-citadel-charcoal">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-citadel-cream mb-6">
                The Strategic Metals Thesis
              </h2>
              <div className="prose prose-invert prose-citadel">
                <p className="text-citadel-cream/70 leading-relaxed mb-4">
                  When most investors think "metals," they think gold. Gold is fine—but 
                  sophisticated investors are looking beyond precious metals to the 
                  critical materials that modern technology depends on.
                </p>
                <p className="text-citadel-cream/70 leading-relaxed mb-4">
                  Consider: every smartphone contains gallium. Every fiber optic cable 
                  uses germanium. Every electric vehicle needs rare earth magnets. Yet 
                  production is concentrated in a handful of countries—primarily China—creating 
                  supply chain vulnerabilities that Western governments are scrambling to address.
                </p>
                <p className="text-citadel-cream/70 leading-relaxed">
                  This isn't speculation about future technology. This is owning the 
                  materials that current technology already requires—materials with 
                  structural supply constraints and growing demand.
                </p>
              </div>
            </div>
            
            {/* Stats Card */}
            <div className="card gold-glow">
              <h3 className="font-serif text-xl font-semibold text-citadel-cream mb-6">
                By the Numbers
              </h3>
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-citadel-border">
                  <span className="text-citadel-cream/70">China's gallium production share</span>
                  <span className="font-mono text-2xl text-citadel-gold">80%</span>
                </div>
                <div className="flex items-center justify-between pb-4 border-b border-citadel-border">
                  <span className="text-citadel-cream/70">US gallium import dependency</span>
                  <span className="font-mono text-2xl text-citadel-gold">100%</span>
                </div>
                <div className="flex items-center justify-between pb-4 border-b border-citadel-border">
                  <span className="text-citadel-cream/70">Germanium 5-year price increase</span>
                  <span className="font-mono text-2xl text-citadel-gold">+47%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-citadel-cream/70">Rare earths in a Tesla Model 3</span>
                  <span className="font-mono text-2xl text-citadel-gold">~1kg</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metals Grid */}
      <section id="metals" className="section-padding bg-citadel-black">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-citadel-cream mb-4">
              Available Metals
            </h2>
            <p className="text-citadel-cream/60">
              We source directly from verified refineries with full chain-of-custody documentation. 
              Custom quotes for any quantity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {metals.map((metal) => (
              <Link
                key={metal.symbol}
                href={metal.href}
                className="card-elevated group pillar-border-defense"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-citadel-slate font-mono text-xl text-citadel-gold font-bold">
                      {metal.symbol}
                    </span>
                  </div>
                  <div className="text-right">
                    <div className="font-mono text-lg text-citadel-cream">{metal.price}</div>
                    <div className={`text-sm ${metal.change.includes('+') ? 'text-green-400' : 'text-citadel-cream/50'}`}>
                      {metal.change}
                    </div>
                  </div>
                </div>

                <h3 className="font-serif text-xl font-semibold text-citadel-cream group-hover:text-citadel-gold transition-colors mb-2">
                  {metal.name}
                </h3>
                
                <p className="text-sm text-citadel-cream/60 mb-4">
                  {metal.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {metal.applications.map((app) => (
                    <span key={app} className="px-2 py-1 text-xs bg-citadel-slate rounded text-citadel-cream/70">
                      {app}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-citadel-border">
                  <span className="text-sm text-citadel-gold">Learn more</span>
                  <ArrowRight className="w-4 h-4 text-citadel-cream/30 group-hover:text-citadel-gold group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-citadel-charcoal">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-citadel-cream mb-4">
              Why Physical Metals
            </h2>
            <p className="text-citadel-cream/60">
              Not ETFs. Not mining stocks. Actual metal you can hold, store, and sell.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="card text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-citadel-gold/10 mb-4">
                  <benefit.icon className="w-6 h-6 text-citadel-gold" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-citadel-cream mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-citadel-cream/60">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-citadel-black">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-citadel-cream mb-4">
              Ready to Explore?
            </h2>
            <p className="text-lg text-citadel-cream/60 mb-8">
              Our metals desk provides custom quotes for any strategic metal. 
              Tell us what you're looking for, and we'll respond within 24 hours 
              with pricing, storage options, and next steps.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-primary">
                Request a Quote
              </Link>
              <Link href="/tools/metals-tracker" className="btn-secondary">
                Track Prices
              </Link>
            </div>
            <p className="text-sm text-citadel-cream/40 mt-6">
              No minimum order. Most quotes start at $5,000+. Institutional pricing available.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

