import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, TrendingUp, Cpu, Globe, Shield, Zap, Download } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Germanium Investment Guide | Fiber Optics & Infrared Technology | Alt-Wealth Citadel',
  description: 'Complete guide to investing in germanium. Essential for fiber optics, night vision, and solar cells. Supply analysis, pricing, and how to invest.',
  keywords: 'germanium investment, germanium price, fiber optics metal, infrared optics, strategic metals, germanium supply chain',
}

const priceHistory = [
  { year: '2020', price: 1200 },
  { year: '2021', price: 1350 },
  { year: '2022', price: 1520 },
  { year: '2023', price: 1680 },
  { year: '2024', price: 1750 },
  { year: '2025', price: 1850 },
]

const applications = [
  { name: 'Fiber Optics', share: '35%', description: 'Optical fiber core material, signal amplification' },
  { name: 'Infrared Optics', share: '30%', description: 'Night vision, thermal imaging, military systems' },
  { name: 'Solar Cells', share: '15%', description: 'High-efficiency multi-junction photovoltaics' },
  { name: 'Electronics', share: '12%', description: 'Transistors, diodes, SiGe chips' },
  { name: 'Catalysts & Other', share: '8%', description: 'PET production, phosphors' },
]

const supplyChain = [
  { country: 'China', share: '60%', flag: '🇨🇳' },
  { country: 'Russia', share: '5%', flag: '🇷🇺' },
  { country: 'Belgium', share: '5%', flag: '🇧🇪' },
  { country: 'Canada', share: '4%', flag: '🇨🇦' },
  { country: 'Others', share: '26%', flag: '🌍' },
]

export default function GermaniumPage() {
  const maxPrice = Math.max(...priceHistory.map(p => p.price))
  
  return (
    <div className="pt-20">
      {/* Breadcrumb */}
      <div className="bg-citadel-charcoal border-b border-citadel-border">
        <div className="container-custom py-4">
          <Link href="/metals" className="inline-flex items-center gap-2 text-sm text-citadel-cream/60 hover:text-citadel-gold transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Strategic Metals
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="section-padding gradient-hero">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-3 mb-6">
                <span className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-citadel-charcoal font-mono text-3xl text-citadel-gold font-bold">
                  Ge
                </span>
                <div>
                  <div className="text-sm text-citadel-cream/60">Atomic Number 32</div>
                  <div className="text-xs text-citadel-cream/40">Melting Point: 938.25°C</div>
                </div>
              </div>
              
              <h1 className="font-serif text-4xl md:text-5xl font-semibold text-citadel-cream mb-6 leading-tight">
                Germanium
              </h1>
              <p className="text-xl text-citadel-cream/60 leading-relaxed mb-6">
                The fiber optics metal. Critical for internet infrastructure, military 
                night vision, and space-grade solar cells. Unlike most metals, germanium 
                has no primary mines—it's exclusively recovered as a byproduct of zinc 
                and coal processing.
              </p>
              
              <div className="flex items-center gap-6 mb-8">
                <div>
                  <div className="text-sm text-citadel-cream/60">Current Price</div>
                  <div className="font-mono text-3xl text-citadel-gold">$1,850/kg</div>
                </div>
                <div>
                  <div className="text-sm text-citadel-cream/60">YTD Change</div>
                  <div className="font-mono text-2xl text-green-400">+12.4%</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link href="/contact?metal=germanium" className="btn-primary">
                  Request Quote
                </Link>
                <Link href="#thesis" className="btn-secondary">
                  Investment Thesis
                </Link>
              </div>
            </div>

            {/* Price Chart */}
            <div className="card">
              <h3 className="font-serif text-lg font-semibold text-citadel-cream mb-4">
                Price History ($/kg)
              </h3>
              <div className="h-48 flex items-end gap-2">
                {priceHistory.map((point) => (
                  <div key={point.year} className="flex-1 flex flex-col items-center gap-2">
                    <div 
                      className="w-full bg-citadel-gold/80 rounded-t transition-all hover:bg-citadel-gold"
                      style={{ height: `${(point.price / maxPrice) * 100}%` }}
                    />
                    <span className="text-xs text-citadel-cream/50">{point.year}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-citadel-border text-center">
                <span className="text-sm text-citadel-cream/60">
                  5-Year Return: <span className="text-green-400 font-mono">+54.2%</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Thesis */}
      <section id="thesis" className="section-padding bg-citadel-charcoal">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-citadel-cream mb-8 text-center">
              The Germanium Investment Thesis
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="card">
                <Cpu className="w-8 h-8 text-citadel-gold mb-4" />
                <h3 className="font-serif text-xl font-semibold text-citadel-cream mb-3">
                  Infrastructure Backbone
                </h3>
                <ul className="space-y-2 text-citadel-cream/70 text-sm">
                  <li>• Global fiber optic network expansion (5G backhaul)</li>
                  <li>• Data center growth driving demand for optical components</li>
                  <li>• Undersea cable projects connecting continents</li>
                  <li>• Satellite communications using Ge solar cells</li>
                </ul>
              </div>

              <div className="card">
                <Shield className="w-8 h-8 text-amber-400 mb-4" />
                <h3 className="font-serif text-xl font-semibold text-citadel-cream mb-3">
                  Defense Critical
                </h3>
                <ul className="space-y-2 text-citadel-cream/70 text-sm">
                  <li>• Night vision and thermal imaging systems</li>
                  <li>• Missile guidance and targeting</li>
                  <li>• Classified defense applications</li>
                  <li>• US strategic stockpile material</li>
                </ul>
              </div>
            </div>

            <div className="card gold-glow">
              <div className="flex items-start gap-4">
                <Zap className="w-8 h-8 text-citadel-gold flex-shrink-0" />
                <div>
                  <h3 className="font-serif text-xl font-semibold text-citadel-cream mb-3">
                    The Byproduct Problem
                  </h3>
                  <p className="text-citadel-cream/70">
                    Germanium is never mined directly. It's recovered from zinc ore 
                    processing (about 3 grams per ton of ore) and coal ash. This means 
                    supply is fundamentally tied to zinc and coal production—not 
                    germanium demand. When germanium prices rise, you can't simply 
                    "mine more." Supply is inelastic by nature.
                  </p>
                  <p className="text-citadel-cream/70 mt-3">
                    This structural constraint, combined with growing demand from 
                    fiber optics and defense, creates a favorable long-term supply/demand 
                    imbalance for investors.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="section-padding bg-citadel-black">
        <div className="container-custom">
          <h2 className="font-serif text-3xl font-semibold text-citadel-cream mb-8 text-center">
            Applications
          </h2>

          <div className="max-w-3xl mx-auto">
            {applications.map((app) => (
              <div key={app.name} className="flex items-center gap-4 py-4 border-b border-citadel-border last:border-0">
                <div className="w-16 text-right">
                  <span className="font-mono text-2xl text-citadel-gold">{app.share}</span>
                </div>
                <div className="flex-1">
                  <div 
                    className="h-3 bg-citadel-gold/80 rounded-full"
                    style={{ width: app.share }}
                  />
                </div>
                <div className="w-56">
                  <div className="font-medium text-citadel-cream">{app.name}</div>
                  <div className="text-xs text-citadel-cream/50">{app.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supply Chain */}
      <section className="section-padding bg-citadel-charcoal">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Globe className="w-10 h-10 text-citadel-gold mb-4" />
              <h2 className="font-serif text-3xl font-semibold text-citadel-cream mb-6">
                Global Supply Chain
              </h2>
              <p className="text-citadel-cream/70 mb-6">
                China dominates germanium production, but unlike gallium, there's more 
                geographic diversification. Belgium's Umicore is a major recycler, and 
                Canada has emerging capacity.
              </p>
              <p className="text-citadel-cream/70 mb-6">
                However, China's July 2023 export controls on germanium (alongside 
                gallium) highlighted supply chain vulnerabilities. Prices spiked 
                immediately, and Western governments are now actively seeking to 
                build strategic stockpiles.
              </p>
              <div className="flex items-center gap-4 p-4 bg-citadel-slate rounded-xl">
                <TrendingUp className="w-8 h-8 text-citadel-gold" />
                <div>
                  <div className="text-sm text-citadel-cream/60">Global Demand Growth</div>
                  <div className="font-mono text-2xl text-citadel-gold">~4% CAGR</div>
                </div>
              </div>
            </div>

            <div className="card">
              <h3 className="font-serif text-lg font-semibold text-citadel-cream mb-4">
                Production by Country
              </h3>
              <div className="space-y-4">
                {supplyChain.map((country) => (
                  <div key={country.country}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-citadel-cream flex items-center gap-2">
                        <span>{country.flag}</span>
                        {country.country}
                      </span>
                      <span className="font-mono text-citadel-gold">{country.share}</span>
                    </div>
                    <div className="h-2 bg-citadel-slate rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-citadel-gold rounded-full"
                        style={{ width: country.share }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Buy */}
      <section className="section-padding bg-citadel-black">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl font-semibold text-citadel-cream mb-6">
              How to Invest in Germanium
            </h2>
            <p className="text-citadel-cream/60 mb-8">
              We source zone-refined germanium (99.999% purity) from established 
              refineries with full documentation. Available in ingots and custom forms.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="card text-center">
                <div className="font-mono text-3xl text-citadel-gold mb-2">$10,000</div>
                <div className="text-sm text-citadel-cream/60">Minimum Order</div>
              </div>
              <div className="card text-center">
                <div className="font-mono text-3xl text-citadel-gold mb-2">99.999%</div>
                <div className="text-sm text-citadel-cream/60">Purity Grade (5N)</div>
              </div>
              <div className="card text-center">
                <div className="font-mono text-3xl text-citadel-gold mb-2">Insured</div>
                <div className="text-sm text-citadel-cream/60">Vault Storage</div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact?metal=germanium" className="btn-primary">
                Request a Quote
              </Link>
              <Link href="/resources/germanium-guide" className="btn-secondary flex items-center gap-2">
                <Download className="w-4 h-4" />
                Download Guide
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Metals */}
      <section className="section-padding bg-citadel-charcoal">
        <div className="container-custom">
          <h2 className="font-serif text-2xl font-semibold text-citadel-cream mb-6">
            Related Strategic Metals
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { name: 'Gallium', symbol: 'Ga', price: '$285/kg', href: '/metals/gallium' },
              { name: 'Indium', symbol: 'In', price: '$240/kg', href: '/metals/indium' },
              { name: 'Rare Earths', symbol: 'REE', price: 'Varies', href: '/metals/rare-earths' },
            ].map((metal) => (
              <Link key={metal.symbol} href={metal.href} className="card group hover:border-citadel-gold/30 transition-colors">
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-lg bg-citadel-slate flex items-center justify-center font-mono text-citadel-gold">
                    {metal.symbol}
                  </span>
                  <div>
                    <div className="font-medium text-citadel-cream group-hover:text-citadel-gold transition-colors">
                      {metal.name}
                    </div>
                    <div className="text-sm text-citadel-cream/50">{metal.price}</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

