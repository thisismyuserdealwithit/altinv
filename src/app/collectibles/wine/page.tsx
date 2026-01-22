import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Wine, TrendingUp, Thermometer, Shield, Calendar, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Fine Wine Investment | Bordeaux, Burgundy & Whisky | Alt-Wealth Citadel',
  description: 'Invest in investment-grade wine and rare whisky. Bordeaux, Burgundy, Champagne, and single malt Scotch. Storage, platforms, and due diligence guide.',
  keywords: 'wine investment, fine wine investing, bordeaux investment, burgundy wine, whisky investment, vinovest, cult wines',
}

const regions = [
  {
    name: 'Bordeaux',
    description: 'The benchmark for investment wine. First Growths and classified estates with centuries of track record.',
    examples: ['Château Lafite Rothschild', 'Château Margaux', 'Château Latour'],
    returns: '10.2% annualized',
    minInvest: '$5,000',
  },
  {
    name: 'Burgundy',
    description: 'Scarce, terroir-driven wines. DRC and top Cru producers command astronomical prices.',
    examples: ['Domaine de la Romanée-Conti', 'Domaine Leroy', 'Henri Jayer'],
    returns: '14.8% annualized',
    minInvest: '$10,000',
  },
  {
    name: 'Champagne',
    description: 'Prestige cuvées from top houses. Longer aging potential than many realize.',
    examples: ['Dom Pérignon', 'Krug', 'Salon'],
    returns: '8.4% annualized',
    minInvest: '$3,000',
  },
  {
    name: 'Rare Whisky',
    description: 'Single malt Scotch and Japanese whisky. Exploding collectible market.',
    examples: ['Macallan 25+', 'Yamazaki 18+', 'Port Ellen'],
    returns: '12.1% annualized',
    minInvest: '$2,500',
  },
]

const platforms = [
  {
    name: 'Vinovest',
    type: 'Managed Portfolio',
    minInvest: '$1,000',
    fees: '2.85% annual',
    storage: 'Included',
    description: 'AI-driven wine portfolio management. Hands-off approach with professional sourcing and storage.',
  },
  {
    name: 'Cult Wines',
    type: 'Advisory',
    minInvest: '$10,000',
    fees: 'Varies',
    storage: 'Bonded warehouses',
    description: 'White-glove service for serious collectors. Custom portfolios and exit strategies.',
  },
  {
    name: 'Liv-ex',
    type: 'Exchange',
    minInvest: '$5,000',
    fees: 'Trading fees',
    storage: 'Partner network',
    description: 'The stock exchange for wine. Trade directly with other collectors and merchants.',
  },
]

const dueDiligence = [
  'Verify provenance—chain of custody from release to present',
  'Confirm professional storage history (temperature-controlled)',
  'Check bottle condition and fill level',
  'Authenticate via label, cork, and capsule inspection',
  'Verify market pricing via Liv-ex or Wine-Searcher',
  'Understand storage and insurance costs going forward',
  'Consider currency exposure for non-domestic wines',
  'Review platform exit mechanisms and liquidity',
]

export default function WinePage() {
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
              <p className="text-red-400 uppercase tracking-[0.2em] text-sm font-medium mb-4">
                Collectibles / Fine Wine
              </p>
              <h1 className="font-serif text-4xl md:text-5xl font-semibold text-citadel-cream mb-6 leading-tight">
                Fine Wine &<br />Rare Spirits
              </h1>
              <p className="text-xl text-citadel-cream/60 leading-relaxed mb-8">
                Wine has outperformed gold over the last 15 years. The best vintages 
                from top producers appreciate as they age, with returns uncorrelated 
                to traditional markets. And unlike most investments, you can drink 
                the downside.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="#regions" className="btn-primary">
                  Explore Regions
                </Link>
                <Link href="#platforms" className="btn-secondary">
                  Compare Platforms
                </Link>
              </div>
            </div>

            {/* Stats Card */}
            <div className="card gold-glow">
              <Wine className="w-10 h-10 text-red-400 mb-6" />
              <h3 className="font-serif text-xl font-semibold text-citadel-cream mb-6">
                Wine Market Overview
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between pb-3 border-b border-citadel-border">
                  <span className="text-citadel-cream/70">Liv-ex Fine Wine 1000 (10yr)</span>
                  <span className="font-mono text-green-400">+88%</span>
                </div>
                <div className="flex justify-between pb-3 border-b border-citadel-border">
                  <span className="text-citadel-cream/70">Burgundy Index (10yr)</span>
                  <span className="font-mono text-green-400">+178%</span>
                </div>
                <div className="flex justify-between pb-3 border-b border-citadel-border">
                  <span className="text-citadel-cream/70">S&P 500 Correlation</span>
                  <span className="font-mono text-citadel-gold">0.19</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-citadel-cream/70">Global Fine Wine Market</span>
                  <span className="font-mono text-citadel-cream">$5.8B</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regions */}
      <section id="regions" className="section-padding bg-citadel-black">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-citadel-cream mb-4">
              Investment Regions
            </h2>
            <p className="text-citadel-cream/60">
              Not all wine is investment-grade. Focus on established regions with 
              proven track records, transparent pricing, and liquid secondary markets.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {regions.map((region) => (
              <div key={region.name} className="card-elevated border-l-4 border-l-red-800/50">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-serif text-2xl font-semibold text-citadel-cream">
                    {region.name}
                  </h3>
                  <span className="font-mono text-green-400">{region.returns}</span>
                </div>
                
                <p className="text-citadel-cream/60 mb-4">{region.description}</p>
                
                <div className="mb-4">
                  <span className="text-xs text-citadel-cream/50 uppercase">Top Producers</span>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {region.examples.map((example) => (
                      <span key={example} className="text-xs px-2 py-1 bg-citadel-slate rounded text-citadel-cream/70">
                        {example}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-citadel-border">
                  <span className="text-sm text-citadel-cream/50">
                    Min Investment: <span className="text-citadel-gold">{region.minInvest}</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Wine */}
      <section className="section-padding bg-citadel-charcoal">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-citadel-cream mb-6">
                Why Wine Works as an Investment
              </h2>
              <div className="space-y-6">
                {[
                  {
                    icon: TrendingUp,
                    title: 'Consumption Drives Scarcity',
                    description: 'Unlike gold, wine gets consumed. Each bottle drunk reduces supply, supporting prices of remaining inventory.',
                  },
                  {
                    icon: Thermometer,
                    title: 'Quality Improves with Age',
                    description: 'Top wines develop complexity over decades. A 2010 Bordeaux may peak in 2040, appreciating the entire time.',
                  },
                  {
                    icon: MapPin,
                    title: 'Terroir is Irreplaceable',
                    description: 'You can\'t replicate DRC in Napa. Geographic scarcity provides moats that persist across generations.',
                  },
                  {
                    icon: Calendar,
                    title: 'Vintage Variation',
                    description: 'Great vintages (2005, 2009, 2010, 2016) command premiums. Active markets reward expertise.',
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-red-500/10">
                      <item.icon className="w-5 h-5 text-red-400" />
                    </div>
                    <div>
                      <h3 className="font-medium text-citadel-cream mb-1">{item.title}</h3>
                      <p className="text-sm text-citadel-cream/60">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="card">
              <h3 className="font-serif text-lg font-semibold text-citadel-cream mb-4">
                Featured: 2016 Bordeaux
              </h3>
              <p className="text-citadel-cream/60 text-sm mb-6">
                The 2016 vintage is considered one of the finest in Bordeaux history. 
                Still young, these wines have significant appreciation potential 
                over the next 20+ years.
              </p>
              <div className="space-y-3 mb-6">
                {[
                  { wine: 'Lafite 2016', price: '$650/bottle', change: '+28% since release' },
                  { wine: 'Margaux 2016', price: '$580/bottle', change: '+32% since release' },
                  { wine: 'Latour 2016', price: '$720/bottle', change: '+24% since release' },
                ].map((wine) => (
                  <div key={wine.wine} className="flex justify-between items-center py-2 border-b border-citadel-border last:border-0">
                    <div>
                      <span className="text-citadel-cream">{wine.wine}</span>
                      <span className="text-xs text-citadel-cream/50 ml-2">{wine.price}</span>
                    </div>
                    <span className="text-sm text-green-400">{wine.change}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact?type=wine" className="btn-primary w-full text-center">
                Request Allocation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section id="platforms" className="section-padding bg-citadel-black">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-citadel-cream mb-4">
              How to Invest
            </h2>
            <p className="text-citadel-cream/60">
              From managed portfolios to direct ownership, choose the approach 
              that matches your expertise and involvement level.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {platforms.map((platform) => (
              <div key={platform.name} className="card-elevated">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-serif text-xl font-semibold text-citadel-cream">
                    {platform.name}
                  </h3>
                  <span className="text-xs px-2 py-0.5 bg-citadel-slate rounded text-citadel-cream/60">
                    {platform.type}
                  </span>
                </div>
                
                <p className="text-citadel-cream/60 text-sm mb-6">{platform.description}</p>
                
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-citadel-cream/50">Minimum</span>
                    <span className="text-citadel-cream">{platform.minInvest}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-citadel-cream/50">Fees</span>
                    <span className="text-citadel-cream">{platform.fees}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-citadel-cream/50">Storage</span>
                    <span className="text-citadel-cream">{platform.storage}</span>
                  </div>
                </div>

                <Link 
                  href={`/partners/${platform.name.toLowerCase().replace(' ', '-')}`}
                  className="btn-secondary w-full text-center"
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Due Diligence */}
      <section className="section-padding bg-citadel-charcoal">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <Shield className="w-10 h-10 text-citadel-gold mx-auto mb-4" />
            <h2 className="font-serif text-3xl font-semibold text-citadel-cream mb-6 text-center">
              Wine Due Diligence
            </h2>
            <p className="text-citadel-cream/60 text-center mb-8">
              Counterfeit wine is a real problem at the top end. Follow this 
              checklist before any significant purchase.
            </p>

            <div className="card">
              <div className="space-y-4">
                {dueDiligence.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 pb-4 border-b border-citadel-border last:border-0 last:pb-0">
                    <div className="w-6 h-6 rounded-full bg-citadel-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs text-citadel-gold font-mono">{index + 1}</span>
                    </div>
                    <span className="text-citadel-cream/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

