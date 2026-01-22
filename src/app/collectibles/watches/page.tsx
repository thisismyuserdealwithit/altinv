import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Watch, TrendingUp, Shield, Award, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Luxury Watch Investment | Rolex, Patek Philippe, AP | Alt-Wealth Citadel',
  description: 'Invest in investment-grade timepieces. Rolex, Patek Philippe, Audemars Piguet. Authentication, storage, and market analysis for serious collectors.',
  keywords: 'watch investment, rolex investment, patek philippe, luxury watches, watch collecting, audemars piguet, vintage rolex',
}

const brands = [
  {
    name: 'Patek Philippe',
    tier: 'Ultra-Luxury',
    appreciation: '+12.4% avg/year',
    topModels: ['Nautilus 5711', 'Aquanaut 5167', 'Perpetual Calendar'],
    entryPrice: '$50,000+',
    notes: 'Discontinued 5711 doubled in value. Waiting lists of 5-10 years for steel sports models.',
  },
  {
    name: 'Rolex',
    tier: 'Luxury',
    appreciation: '+8.2% avg/year',
    topModels: ['Daytona', 'Submariner', 'GMT-Master II'],
    entryPrice: '$15,000+',
    notes: 'Most liquid watch brand. Steel sports models trade above retail on secondary market.',
  },
  {
    name: 'Audemars Piguet',
    tier: 'Ultra-Luxury',
    appreciation: '+10.8% avg/year',
    topModels: ['Royal Oak 15202', 'Royal Oak Offshore', 'Code 11.59'],
    entryPrice: '$30,000+',
    notes: 'Royal Oak "Jumbo" is the crown jewel. Limited production supports prices.',
  },
  {
    name: 'Richard Mille',
    tier: 'Ultra-Luxury',
    appreciation: '+15.2% avg/year',
    topModels: ['RM 011', 'RM 035', 'RM 027'],
    entryPrice: '$150,000+',
    notes: 'Extreme scarcity and celebrity demand. Some models double on release day.',
  },
]

const recentSales = [
  { model: 'Patek Philippe Nautilus 5711/1A-010', price: '$145,000', change: '+180% vs retail' },
  { model: 'Rolex Daytona 116500LN (Panda)', price: '$38,500', change: '+165% vs retail' },
  { model: 'AP Royal Oak 15202ST (Jumbo)', price: '$95,000', change: '+220% vs retail' },
  { model: 'Rolex GMT-Master II 126710BLNR', price: '$22,000', change: '+115% vs retail' },
]

const buyingGuide = [
  {
    title: 'Authentication is Everything',
    description: 'Only buy from authorized dealers, established secondary dealers (Hodinkee, Chrono24 verified), or with authentication from a third party.',
  },
  {
    title: 'Box & Papers Matter',
    description: 'Complete sets (original box, papers, warranty card) command 10-30% premiums over watch-only sales.',
  },
  {
    title: 'Service History',
    description: 'Know when the watch was last serviced. Rolex service every 10 years, Patek every 3-5. Unserviced complications are red flags.',
  },
  {
    title: 'Condition Grading',
    description: 'Minor scratches are expected. But deep scratches, replaced parts, or polished cases significantly impact value.',
  },
  {
    title: 'Buy What You Love',
    description: 'Unlike stocks, watches should bring joy. If the market moves against you, at least you can wear your investment.',
  },
]

export default function WatchesPage() {
  return (
    <div className="pt-20">
      {/* Breadcrumb */}
      <div className="bg-citadel-charcoal border-b border-citadel-border">
        <div className="container-custom py-4">
          <Link href="/collectibles" className="inline-flex items-center gap-2 text-sm text-citadel-cream/60 hover:text-citadel-gold transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Collectibles
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="section-padding gradient-hero">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-citadel-gold uppercase tracking-[0.2em] text-sm font-medium mb-4">
                Collectibles / Timepieces
              </p>
              <h1 className="font-serif text-4xl md:text-5xl font-semibold text-citadel-cream mb-6 leading-tight">
                Luxury Watches
              </h1>
              <p className="text-xl text-citadel-cream/60 leading-relaxed mb-8">
                Mechanical watches from top Swiss houses have become alternative assets 
                in their own right. Limited production, massive demand, and waiting lists 
                measured in years have pushed secondary market prices to unprecedented 
                levels. Unlike art, you can wear your investment daily.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="#brands" className="btn-primary">
                  Explore Brands
                </Link>
                <Link href="#guide" className="btn-secondary">
                  Buying Guide
                </Link>
              </div>
            </div>

            {/* Market Stats */}
            <div className="card gold-glow">
              <Watch className="w-10 h-10 text-citadel-gold mb-6" />
              <h3 className="font-serif text-xl font-semibold text-citadel-cream mb-6">
                Watch Market Snapshot
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between pb-3 border-b border-citadel-border">
                  <span className="text-citadel-cream/70">WatchCharts Overall Index (5yr)</span>
                  <span className="font-mono text-green-400">+47%</span>
                </div>
                <div className="flex justify-between pb-3 border-b border-citadel-border">
                  <span className="text-citadel-cream/70">Patek Philippe Index (5yr)</span>
                  <span className="font-mono text-green-400">+82%</span>
                </div>
                <div className="flex justify-between pb-3 border-b border-citadel-border">
                  <span className="text-citadel-cream/70">Average Rolex Waitlist</span>
                  <span className="font-mono text-citadel-gold">2-5 years</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-citadel-cream/70">Global Luxury Watch Market</span>
                  <span className="font-mono text-citadel-cream">$52B</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Sales */}
      <section className="py-8 bg-citadel-charcoal border-y border-citadel-border">
        <div className="container-custom">
          <div className="flex items-center gap-4 mb-4">
            <TrendingUp className="w-5 h-5 text-citadel-gold" />
            <h3 className="font-medium text-citadel-cream">Recent Market Transactions</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {recentSales.map((sale) => (
              <div key={sale.model} className="bg-citadel-slate/50 rounded-lg p-4">
                <div className="text-sm text-citadel-cream mb-1 line-clamp-1">{sale.model}</div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-citadel-gold">{sale.price}</span>
                  <span className="text-xs text-green-400">{sale.change}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands */}
      <section id="brands" className="section-padding bg-citadel-black">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-citadel-cream mb-4">
              Investment-Grade Brands
            </h2>
            <p className="text-citadel-cream/60">
              Not every luxury watch appreciates. Focus on brands with proven secondary 
              market demand, limited production, and strong collector communities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {brands.map((brand) => (
              <div key={brand.name} className="card-elevated">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-serif text-2xl font-semibold text-citadel-cream">
                      {brand.name}
                    </h3>
                    <span className="text-xs text-citadel-gold">{brand.tier}</span>
                  </div>
                  <span className="font-mono text-green-400">{brand.appreciation}</span>
                </div>
                
                <p className="text-citadel-cream/60 text-sm mb-4">{brand.notes}</p>
                
                <div className="mb-4">
                  <span className="text-xs text-citadel-cream/50 uppercase">Top Models</span>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {brand.topModels.map((model) => (
                      <span key={model} className="text-xs px-2 py-1 bg-citadel-slate rounded text-citadel-cream/70">
                        {model}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-citadel-border flex justify-between items-center">
                  <span className="text-sm text-citadel-cream/50">
                    Entry: <span className="text-citadel-gold">{brand.entryPrice}</span>
                  </span>
                  <Link href={`/collectibles/watches/${brand.name.toLowerCase().replace(' ', '-')}`} className="text-sm text-citadel-gold">
                    View Models →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Watches */}
      <section className="section-padding bg-citadel-charcoal">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 grid grid-cols-2 gap-4">
              <div className="card text-center">
                <Award className="w-8 h-8 text-citadel-gold mx-auto mb-3" />
                <div className="font-mono text-2xl text-citadel-cream mb-1">6,000</div>
                <div className="text-xs text-citadel-cream/50">Rolex Daytonas made yearly</div>
              </div>
              <div className="card text-center">
                <Clock className="w-8 h-8 text-citadel-gold mx-auto mb-3" />
                <div className="font-mono text-2xl text-citadel-cream mb-1">5+ years</div>
                <div className="text-xs text-citadel-cream/50">Avg Nautilus waitlist</div>
              </div>
              <div className="card text-center">
                <TrendingUp className="w-8 h-8 text-citadel-gold mx-auto mb-3" />
                <div className="font-mono text-2xl text-citadel-cream mb-1">180%</div>
                <div className="text-xs text-citadel-cream/50">5711 premium over retail</div>
              </div>
              <div className="card text-center">
                <Shield className="w-8 h-8 text-citadel-gold mx-auto mb-3" />
                <div className="font-mono text-2xl text-citadel-cream mb-1">0.24</div>
                <div className="text-xs text-citadel-cream/50">S&P correlation</div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-citadel-cream mb-6">
                Why Watches Appreciate
              </h2>
              <div className="space-y-4 text-citadel-cream/70">
                <p>
                  <strong className="text-citadel-cream">Manufactured Scarcity:</strong> Rolex, 
                  Patek, and AP deliberately limit production despite overwhelming demand. 
                  This isn't incompetence—it's brand strategy that creates secondary market 
                  premiums.
                </p>
                <p>
                  <strong className="text-citadel-cream">Waiting Lists as Gatekeepers:</strong> You 
                  can't simply buy a steel Rolex Daytona at retail. Authorized dealers 
                  maintain years-long waitlists, prioritizing existing customers. This 
                  pushes buyers to the secondary market at premiums.
                </p>
                <p>
                  <strong className="text-citadel-cream">Wearable Status:</strong> Unlike art or 
                  wine, watches are portable displays of wealth. This creates demand 
                  beyond pure investment motives, supporting prices even in downturns.
                </p>
                <p>
                  <strong className="text-citadel-cream">Mechanical Appreciation:</strong> Serious 
                  collectors value the craftsmanship of hand-assembled mechanical movements. 
                  This cultural appreciation persists even as smartwatches dominate mass market.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Buying Guide */}
      <section id="guide" className="section-padding bg-citadel-black">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <Shield className="w-10 h-10 text-citadel-gold mx-auto mb-4" />
            <h2 className="font-serif text-3xl font-semibold text-citadel-cream mb-6 text-center">
              Watch Buying Guide
            </h2>
            <p className="text-citadel-cream/60 text-center mb-8">
              The secondary watch market is rife with fakes, frankenwatches (parts from 
              different references), and undisclosed damage. Protect yourself with these 
              guidelines.
            </p>

            <div className="space-y-6">
              {buyingGuide.map((item, index) => (
                <div key={item.title} className="card">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-citadel-gold/20 flex items-center justify-center flex-shrink-0">
                      <span className="font-mono text-citadel-gold">{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-semibold text-citadel-cream mb-1">
                        {item.title}
                      </h3>
                      <p className="text-citadel-cream/60 text-sm">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-citadel-charcoal">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-citadel-cream mb-4">
              Ready to Start Collecting?
            </h2>
            <p className="text-citadel-cream/60 mb-8">
              Whether you're seeking a specific reference or building a collection, 
              we can connect you with vetted dealers and authentication services.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact?type=watches" className="btn-primary">
                Request Sourcing
              </Link>
              <Link href="/research/watch-market-2026" className="btn-secondary">
                2026 Market Report
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

