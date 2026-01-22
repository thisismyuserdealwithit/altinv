import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Zap, Car, Wind, Cpu, Shield, Globe, AlertTriangle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Rare Earth Elements Investment Guide | EVs, Wind, Defense | Alt-Wealth Citadel',
  description: 'Complete guide to rare earth investing. 17 elements critical for EVs, wind turbines, and defense. China dominance, supply risks, and investment strategies.',
  keywords: 'rare earth investment, rare earth elements, neodymium, praseodymium, EV metals, wind turbine magnets, china rare earths',
}

const elements = [
  { symbol: 'Nd', name: 'Neodymium', use: 'Permanent magnets (EVs, wind)', price: '$160/kg', critical: true },
  { symbol: 'Pr', name: 'Praseodymium', use: 'Magnets, glass coloring', price: '$140/kg', critical: true },
  { symbol: 'Dy', name: 'Dysprosium', use: 'High-temp magnets', price: '$350/kg', critical: true },
  { symbol: 'Tb', name: 'Terbium', use: 'Magnets, phosphors', price: '$1,800/kg', critical: true },
  { symbol: 'La', name: 'Lanthanum', use: 'Batteries, catalysts', price: '$5/kg', critical: false },
  { symbol: 'Ce', name: 'Cerium', use: 'Glass polishing, catalysts', price: '$4/kg', critical: false },
]

const demandDrivers = [
  {
    icon: Car,
    title: 'Electric Vehicles',
    description: 'Each EV motor uses ~1-2kg of rare earth magnets. Global EV sales growing 25%+ annually.',
    growth: '+35% demand by 2030',
  },
  {
    icon: Wind,
    title: 'Wind Turbines',
    description: 'Direct-drive offshore turbines use 600kg+ of rare earths per MW of capacity.',
    growth: '+28% demand by 2030',
  },
  {
    icon: Cpu,
    title: 'Electronics',
    description: 'Smartphones, computers, and data centers rely on rare earth components.',
    growth: '+15% demand by 2030',
  },
  {
    icon: Shield,
    title: 'Defense',
    description: 'Guided missiles, jet engines, and advanced weapons systems.',
    growth: 'Strategic priority',
  },
]

export default function RareEarthsPage() {
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
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-citadel-charcoal font-mono text-2xl text-citadel-gold font-bold">
                REE
              </span>
              <div>
                <div className="text-sm text-citadel-cream/60">17 Elements</div>
                <div className="text-xs text-citadel-cream/40">Lanthanides + Scandium + Yttrium</div>
              </div>
            </div>
            
            <h1 className="font-serif text-4xl md:text-5xl font-semibold text-citadel-cream mb-6 leading-tight">
              Rare Earth Elements
            </h1>
            <p className="text-xl text-citadel-cream/60 leading-relaxed mb-8 max-w-3xl">
              Despite the name, rare earths aren't actually rare—they're just difficult 
              and environmentally challenging to process. China controls 70% of mining 
              and 90% of processing, creating the most concentrated supply chain of 
              any critical material. The green energy transition depends on these elements.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="#elements" className="btn-primary">
                Explore Elements
              </Link>
              <Link href="/contact?metal=rare-earths" className="btn-secondary">
                Investment Inquiry
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Warning Banner */}
      <section className="py-6 bg-amber-500/10 border-y border-amber-500/20">
        <div className="container-custom">
          <div className="flex items-center gap-4">
            <AlertTriangle className="w-6 h-6 text-amber-400 flex-shrink-0" />
            <p className="text-sm text-citadel-cream/80">
              <strong className="text-amber-400">Geopolitical Risk:</strong> China has 
              previously restricted rare earth exports during trade disputes. The US 
              and EU are actively investing in alternative supply chains, but progress 
              is slow. Current supply concentration represents both risk and opportunity.
            </p>
          </div>
        </div>
      </section>

      {/* Elements Table */}
      <section id="elements" className="section-padding bg-citadel-black">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-citadel-cream mb-4">
              Key Elements
            </h2>
            <p className="text-citadel-cream/60">
              Not all rare earths are created equal. The "magnet metals" (Nd, Pr, Dy, Tb) 
              command premium prices due to their critical role in permanent magnets.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {elements.map((element) => (
              <div 
                key={element.symbol}
                className={`card ${element.critical ? 'border-citadel-gold/30' : ''}`}
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="w-12 h-12 rounded-lg bg-citadel-slate flex items-center justify-center font-mono text-xl text-citadel-gold font-bold">
                    {element.symbol}
                  </span>
                  {element.critical && (
                    <span className="text-xs px-2 py-0.5 bg-citadel-gold/20 text-citadel-gold rounded">
                      Critical
                    </span>
                  )}
                </div>
                <h3 className="font-serif text-lg font-semibold text-citadel-cream">
                  {element.name}
                </h3>
                <p className="text-sm text-citadel-cream/60 mt-1">{element.use}</p>
                <div className="mt-3 pt-3 border-t border-citadel-border">
                  <span className="font-mono text-citadel-gold">{element.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demand Drivers */}
      <section className="section-padding bg-citadel-charcoal">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-citadel-cream mb-4">
              Demand Drivers
            </h2>
            <p className="text-citadel-cream/60">
              The energy transition is a rare earth story. EVs, wind, and grid storage 
              all require permanent magnets made from neodymium and praseodymium.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {demandDrivers.map((driver) => (
              <div key={driver.title} className="card-elevated">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-citadel-gold/10">
                    <driver.icon className="w-6 h-6 text-citadel-gold" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-citadel-cream mb-2">
                      {driver.title}
                    </h3>
                    <p className="text-citadel-cream/60 text-sm mb-3">
                      {driver.description}
                    </p>
                    <span className="text-sm text-green-400 font-mono">
                      {driver.growth}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supply Chain */}
      <section className="section-padding bg-citadel-black">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Globe className="w-10 h-10 text-citadel-gold mb-4" />
              <h2 className="font-serif text-3xl font-semibold text-citadel-cream mb-6">
                The China Chokehold
              </h2>
              <div className="space-y-4 text-citadel-cream/70">
                <p>
                  China's dominance in rare earths isn't accidental. Over decades, they've 
                  built integrated supply chains while Western competitors couldn't 
                  compete on cost or environmental regulations.
                </p>
                <p>
                  Today, even when rare earths are mined elsewhere (Australia, US), they 
                  often ship to China for processing. The US has exactly one operating 
                  rare earth mine (MP Materials in California) and zero magnet 
                  manufacturing capacity.
                </p>
                <p>
                  This is changing—slowly. The US, EU, and allies are investing billions 
                  in supply chain diversification. But building processing capacity takes 
                  5-10 years. In the meantime, China holds the cards.
                </p>
              </div>
            </div>

            <div className="card gold-glow">
              <h3 className="font-serif text-lg font-semibold text-citadel-cream mb-6">
                China's Market Share
              </h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-citadel-cream/70">Mining</span>
                    <span className="font-mono text-citadel-gold">70%</span>
                  </div>
                  <div className="h-3 bg-citadel-slate rounded-full overflow-hidden">
                    <div className="h-full bg-citadel-gold rounded-full" style={{ width: '70%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-citadel-cream/70">Processing</span>
                    <span className="font-mono text-citadel-gold">90%</span>
                  </div>
                  <div className="h-3 bg-citadel-slate rounded-full overflow-hidden">
                    <div className="h-full bg-citadel-gold rounded-full" style={{ width: '90%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-citadel-cream/70">Magnet Manufacturing</span>
                    <span className="font-mono text-citadel-gold">92%</span>
                  </div>
                  <div className="h-3 bg-citadel-slate rounded-full overflow-hidden">
                    <div className="h-full bg-citadel-gold rounded-full" style={{ width: '92%' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Options */}
      <section className="section-padding bg-citadel-charcoal">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-citadel-cream mb-4">
              How to Invest
            </h2>
            <p className="text-citadel-cream/60">
              Rare earth investing is complex due to the diversity of elements. 
              We offer multiple approaches depending on your goals.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="card">
              <h3 className="font-serif text-xl font-semibold text-citadel-cream mb-3">
                Physical Oxides
              </h3>
              <p className="text-sm text-citadel-cream/60 mb-4">
                Purchase separated rare earth oxides (NdPr, Dy, Tb) stored in 
                bonded warehouses. Direct exposure to commodity prices.
              </p>
              <div className="text-sm text-citadel-cream/50 mb-4">Min: $25,000</div>
              <Link href="/contact?metal=rare-earths" className="btn-secondary w-full text-center">
                Request Quote
              </Link>
            </div>

            <div className="card">
              <h3 className="font-serif text-xl font-semibold text-citadel-cream mb-3">
                REE ETFs
              </h3>
              <p className="text-sm text-citadel-cream/60 mb-4">
                Exchange-traded funds holding rare earth miners and processors. 
                Liquid, diversified, but with equity risk.
              </p>
              <div className="text-sm text-citadel-cream/50 mb-4">Min: Any amount</div>
              <Link href="/research/rare-earth-etfs" className="btn-secondary w-full text-center">
                Compare ETFs
              </Link>
            </div>

            <div className="card">
              <h3 className="font-serif text-xl font-semibold text-citadel-cream mb-3">
                Mining Equities
              </h3>
              <p className="text-sm text-citadel-cream/60 mb-4">
                Direct investment in rare earth producers and developers. 
                Higher risk/reward, requires company-level due diligence.
              </p>
              <div className="text-sm text-citadel-cream/50 mb-4">Varies</div>
              <Link href="/research/rare-earth-miners" className="btn-secondary w-full text-center">
                Research Report
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Metals */}
      <section className="section-padding bg-citadel-black">
        <div className="container-custom">
          <h2 className="font-serif text-2xl font-semibold text-citadel-cream mb-6">
            Related Strategic Metals
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { name: 'Gallium', symbol: 'Ga', price: '$285/kg', href: '/metals/gallium' },
              { name: 'Germanium', symbol: 'Ge', price: '$1,850/kg', href: '/metals/germanium' },
              { name: 'Indium', symbol: 'In', price: '$240/kg', href: '/metals/indium' },
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

