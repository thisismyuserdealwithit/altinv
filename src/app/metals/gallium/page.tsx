import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, TrendingUp, Factory, Globe, Shield, AlertTriangle, Download } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Gallium Investment Guide | Strategic Metal for Semiconductors | Alt-Wealth Citadel',
  description: 'Complete guide to investing in gallium. Supply chain analysis, price trends, storage options, and how to buy physical gallium for your portfolio.',
  keywords: 'gallium investment, gallium price, semiconductor metals, strategic metals, china gallium, gallium supply chain',
}

const priceHistory = [
  { year: '2020', price: 180 },
  { year: '2021', price: 220 },
  { year: '2022', price: 245 },
  { year: '2023', price: 310 },
  { year: '2024', price: 265 },
  { year: '2025', price: 285 },
]

const applications = [
  { name: 'Semiconductors (GaAs)', share: '68%', description: 'High-speed circuits, LEDs, solar cells' },
  { name: 'Integrated Circuits', share: '18%', description: 'Smartphones, wireless infrastructure' },
  { name: 'Alloys & Other', share: '14%', description: 'Medical devices, specialty alloys' },
]

const supplyChain = [
  { country: 'China', share: '80%', flag: '🇨🇳' },
  { country: 'Japan', share: '6%', flag: '🇯🇵' },
  { country: 'South Korea', share: '5%', flag: '🇰🇷' },
  { country: 'Russia', share: '4%', flag: '🇷🇺' },
  { country: 'Others', share: '5%', flag: '🌍' },
]

export default function GalliumPage() {
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
                  Ga
                </span>
                <div>
                  <div className="text-sm text-citadel-cream/60">Atomic Number 31</div>
                  <div className="text-xs text-citadel-cream/40">Melting Point: 29.76°C</div>
                </div>
              </div>
              
              <h1 className="font-serif text-4xl md:text-5xl font-semibold text-citadel-cream mb-6 leading-tight">
                Gallium
              </h1>
              <p className="text-xl text-citadel-cream/60 leading-relaxed mb-6">
                The semiconductor metal. Essential for 5G infrastructure, LEDs, and 
                solar cells. With 80% of production controlled by China and 100% 
                US import dependency, gallium represents a critical supply chain vulnerability—
                and an investment opportunity.
              </p>
              
              <div className="flex items-center gap-6 mb-8">
                <div>
                  <div className="text-sm text-citadel-cream/60">Current Price</div>
                  <div className="font-mono text-3xl text-citadel-gold">$285/kg</div>
                </div>
                <div>
                  <div className="text-sm text-citadel-cream/60">YTD Change</div>
                  <div className="font-mono text-2xl text-green-400">+18.2%</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link href="/contact?metal=gallium" className="btn-primary">
                  Request Quote
                </Link>
                <Link href="#thesis" className="btn-secondary">
                  Read Investment Thesis
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
                  5-Year Return: <span className="text-green-400 font-mono">+58.3%</span>
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
              The Gallium Investment Thesis
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="card">
                <TrendingUp className="w-8 h-8 text-citadel-gold mb-4" />
                <h3 className="font-serif text-xl font-semibold text-citadel-cream mb-3">
                  Demand Drivers
                </h3>
                <ul className="space-y-2 text-citadel-cream/70 text-sm">
                  <li>• 5G infrastructure rollout requiring GaAs chips</li>
                  <li>• Electric vehicle adoption (power electronics)</li>
                  <li>• LED lighting transition continues globally</li>
                  <li>• Defense applications (radar, satellites)</li>
                  <li>• Photovoltaic solar cell efficiency improvements</li>
                </ul>
              </div>

              <div className="card">
                <AlertTriangle className="w-8 h-8 text-amber-400 mb-4" />
                <h3 className="font-serif text-xl font-semibold text-citadel-cream mb-3">
                  Supply Constraints
                </h3>
                <ul className="space-y-2 text-citadel-cream/70 text-sm">
                  <li>• No primary gallium mines (byproduct only)</li>
                  <li>• 80% of production from single country</li>
                  <li>• China export restrictions (July 2023)</li>
                  <li>• Limited recycling infrastructure</li>
                  <li>• 3-5 year lag to develop new capacity</li>
                </ul>
              </div>
            </div>

            <div className="card gold-glow">
              <div className="flex items-start gap-4">
                <Shield className="w-8 h-8 text-citadel-gold flex-shrink-0" />
                <div>
                  <h3 className="font-serif text-xl font-semibold text-citadel-cream mb-3">
                    Why Physical Gallium?
                  </h3>
                  <p className="text-citadel-cream/70">
                    Unlike gold, there's no liquid futures market for gallium. The only way 
                    to get direct exposure is to own the physical metal. This creates both 
                    challenges (storage, liquidity) and opportunities (less speculative 
                    trading, closer connection to industrial fundamentals).
                  </p>
                  <p className="text-citadel-cream/70 mt-3">
                    When China announced export restrictions in July 2023, gallium prices 
                    spiked 27% in two weeks. Holders of physical metal were positioned. 
                    There was no ETF to buy, no futures to trade.
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

          <div className="max-w-2xl mx-auto">
            {applications.map((app, index) => (
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
                <div className="w-48">
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
                Gallium is never mined directly. It's recovered as a byproduct of 
                aluminum refining (bauxite processing) and zinc smelting. This means 
                supply is inelastic—you can't just "open a gallium mine" when prices rise.
              </p>
              <p className="text-citadel-cream/70 mb-6">
                China's dominance isn't just about processing—it's about their control 
                of the entire aluminum supply chain. Western reshoring efforts are 
                underway, but building new capacity takes years.
              </p>
              <div className="flex items-center gap-4 p-4 bg-citadel-slate rounded-xl">
                <Factory className="w-8 h-8 text-citadel-gold" />
                <div>
                  <div className="text-sm text-citadel-cream/60">US Import Dependency</div>
                  <div className="font-mono text-2xl text-citadel-gold">100%</div>
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
              How to Invest in Gallium
            </h2>
            <p className="text-citadel-cream/60 mb-8">
              We source 99.99% pure gallium from verified refineries with full 
              chain-of-custody documentation. Available in 1kg, 5kg, and 25kg+ lots.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="card text-center">
                <div className="font-mono text-3xl text-citadel-gold mb-2">$5,000</div>
                <div className="text-sm text-citadel-cream/60">Minimum Order</div>
              </div>
              <div className="card text-center">
                <div className="font-mono text-3xl text-citadel-gold mb-2">99.99%</div>
                <div className="text-sm text-citadel-cream/60">Purity Grade</div>
              </div>
              <div className="card text-center">
                <div className="font-mono text-3xl text-citadel-gold mb-2">$0</div>
                <div className="text-sm text-citadel-cream/60">Storage (Year 1)</div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact?metal=gallium" className="btn-primary">
                Request a Quote
              </Link>
              <Link href="/resources/gallium-guide" className="btn-secondary flex items-center gap-2">
                <Download className="w-4 h-4" />
                Download Full Guide
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
              { name: 'Germanium', symbol: 'Ge', price: '$1,850/kg', href: '/metals/germanium' },
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

