import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, TrendingUp, Shield, Clock, DollarSign, Eye, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Fine Art Investment | Blue-Chip & Contemporary Art | Alt-Wealth Citadel',
  description: 'Invest in museum-quality fine art. Fractional shares in Basquiat, Banksy, Warhol, and emerging artists. Art investment guide, platforms, and due diligence.',
  keywords: 'art investing, fine art investment, masterworks, fractional art, contemporary art, blue chip art, art as investment',
}

const featuredWorks = [
  {
    artist: 'Jean-Michel Basquiat',
    title: 'Untitled (1982)',
    value: '$2.4M',
    appreciation: '+12.4% projected',
    shares: '18 remaining',
    image: '🎨',
  },
  {
    artist: 'Banksy',
    title: 'Girl With Balloon',
    value: '$1.8M',
    appreciation: '+9.8% projected',
    shares: '32 remaining',
    image: '🖼️',
  },
  {
    artist: 'KAWS',
    title: 'THE KAWS ALBUM',
    value: '$890K',
    appreciation: '+15.2% projected',
    shares: 'Fully subscribed',
    image: '🎭',
  },
]

const stats = [
  { value: '14.1%', label: 'Annualized Returns', sublabel: 'Contemporary Art Index 1995-2023' },
  { value: '0.12', label: 'S&P Correlation', sublabel: 'Near-zero correlation to stocks' },
  { value: '$67B', label: 'Market Size', sublabel: 'Annual global art sales' },
  { value: '3-7yr', label: 'Hold Period', sublabel: 'Typical investment horizon' },
]

const platforms = [
  {
    name: 'Masterworks',
    description: 'The leading fractional art platform. SEC-qualified offerings with secondary market liquidity.',
    minInvest: '$10,000',
    fees: '1.5% annual + 20% carry',
    artTypes: 'Blue-chip contemporary',
    pros: ['SEC-regulated', 'Secondary market', 'Research team'],
    cons: ['High minimums', 'Illiquid', 'Performance fee'],
  },
  {
    name: 'Yieldstreet Art',
    description: 'Art as part of a diversified alternatives platform. Lower minimums than pure-play art funds.',
    minInvest: '$2,500',
    fees: '0-2% management',
    artTypes: 'Mixed collectibles',
    pros: ['Lower minimum', 'Diversified', 'Platform variety'],
    cons: ['Less art focus', 'Newer track record'],
  },
  {
    name: 'Direct Purchase',
    description: 'Buy art outright through galleries, auctions, or private sales. Full ownership and control.',
    minInvest: '$25,000+',
    fees: 'Varies (10-25% buyer\'s premium)',
    artTypes: 'Any',
    pros: ['Full ownership', 'Control', 'No platform risk'],
    cons: ['High capital', 'Storage costs', 'Expert needed'],
  },
]

const dueDiligence = [
  'Verify authenticity with certificate from recognized authority',
  'Review provenance (ownership history) documentation',
  'Obtain condition report from independent conservator',
  'Research artist\'s auction history and price trajectory',
  'Understand storage, insurance, and maintenance costs',
  'Review platform\'s fee structure and exit mechanisms',
  'Consider tax implications (collectibles taxed at 28%)',
  'Assess liquidity—how and when can you exit?',
]

export default function ArtPage() {
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
          <div className="max-w-3xl">
            <p className="text-purple-400 uppercase tracking-[0.2em] text-sm font-medium mb-4">
              Collectibles / Fine Art
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-citadel-cream mb-6 leading-tight">
              Fine Art<br />Investment
            </h1>
            <p className="text-xl text-citadel-cream/60 leading-relaxed mb-8">
              Blue-chip art has outperformed the S&P 500 over the last three decades 
              with near-zero correlation. Once exclusive to billionaires, fractional 
              ownership has opened art investing to a new generation of collectors.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="#platforms" className="btn-primary">
                View Platforms
              </Link>
              <Link href="#due-diligence" className="btn-secondary">
                Due Diligence Guide
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-8 bg-citadel-charcoal border-y border-citadel-border">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-mono text-3xl text-citadel-gold mb-1">{stat.value}</div>
                <div className="text-sm text-citadel-cream">{stat.label}</div>
                <div className="text-xs text-citadel-cream/50">{stat.sublabel}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Thesis */}
      <section className="section-padding bg-citadel-black">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-citadel-cream mb-6">
                Why Art?
              </h2>
              <div className="space-y-4 text-citadel-cream/70">
                <p>
                  Art isn't just decorative—it's a proven store of value. While stocks 
                  crash and bonds yield nothing, museum-quality pieces by recognized 
                  artists continue to appreciate across market cycles.
                </p>
                <p>
                  The key insight: art prices are driven by wealth creation, not economic 
                  cycles. As global wealth grows, demand for trophy assets increases. 
                  And supply is fixed—Basquiat isn't making new paintings.
                </p>
                <p>
                  But not all art appreciates. Investment-grade art means: recognized 
                  artists, strong auction records, museum provenance, and works in 
                  "sweet spot" price ranges ($500K-$10M) with the most liquidity.
                </p>
              </div>
            </div>
            
            <div className="space-y-4">
              {[
                { icon: TrendingUp, title: 'Wealth-Linked Returns', desc: 'Art prices correlate with wealth creation, not GDP' },
                { icon: Shield, title: 'Inflation Hedge', desc: 'Tangible assets that preserve purchasing power' },
                { icon: Clock, title: 'Patience Rewarded', desc: 'Best returns come with 5-10 year hold periods' },
                { icon: DollarSign, title: 'Democratized Access', desc: 'Fractional shares from $1K make art accessible' },
              ].map((item) => (
                <div key={item.title} className="card flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-purple-500/10">
                    <item.icon className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-medium text-citadel-cream">{item.title}</h3>
                    <p className="text-sm text-citadel-cream/60">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Works */}
      <section className="section-padding bg-citadel-charcoal">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-serif text-2xl font-semibold text-citadel-cream">
              Featured Offerings
            </h2>
            <span className="text-sm text-citadel-cream/50">Via partner platforms</span>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {featuredWorks.map((work) => (
              <div key={work.title} className="card group hover:border-purple-500/30 transition-colors">
                <div className="text-6xl mb-4">{work.image}</div>
                <div className="text-sm text-citadel-cream/50 mb-1">{work.artist}</div>
                <h3 className="font-serif text-lg font-semibold text-citadel-cream mb-4">
                  {work.title}
                </h3>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <div className="text-xs text-citadel-cream/50">Offering Size</div>
                    <div className="font-mono text-citadel-gold">{work.value}</div>
                  </div>
                  <div>
                    <div className="text-xs text-citadel-cream/50">Projected Return</div>
                    <div className="font-mono text-green-400">{work.appreciation}</div>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-citadel-border">
                  <span className="text-xs text-citadel-cream/50">
                    <Eye className="w-3 h-3 inline mr-1" />
                    {work.shares}
                  </span>
                  <span className="text-sm text-purple-400">View Details →</span>
                </div>
              </div>
            ))}
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
              From fractional platforms to direct acquisitions, we've evaluated 
              every major option for art investing.
            </p>
          </div>

          <div className="space-y-6">
            {platforms.map((platform) => (
              <div key={platform.name} className="card-elevated">
                <div className="grid lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-2">
                    <h3 className="font-serif text-xl font-semibold text-citadel-cream mb-2">
                      {platform.name}
                    </h3>
                    <p className="text-citadel-cream/60 mb-4">{platform.description}</p>
                    
                    <div className="grid grid-cols-3 gap-4 mb-4">
                      <div>
                        <div className="text-xs text-citadel-cream/50">Minimum</div>
                        <div className="font-mono text-citadel-cream">{platform.minInvest}</div>
                      </div>
                      <div>
                        <div className="text-xs text-citadel-cream/50">Fees</div>
                        <div className="text-sm text-citadel-cream">{platform.fees}</div>
                      </div>
                      <div>
                        <div className="text-xs text-citadel-cream/50">Art Types</div>
                        <div className="text-sm text-citadel-cream">{platform.artTypes}</div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-xs text-green-400 uppercase tracking-wide mb-2">Pros</div>
                      <ul className="space-y-1">
                        {platform.pros.map((pro) => (
                          <li key={pro} className="text-xs text-citadel-cream/70 flex items-center gap-1">
                            <CheckCircle className="w-3 h-3 text-green-400" />
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <div className="text-xs text-amber-400 uppercase tracking-wide mb-2">Cons</div>
                      <ul className="space-y-1">
                        {platform.cons.map((con) => (
                          <li key={con} className="text-xs text-citadel-cream/70">
                            • {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Due Diligence */}
      <section id="due-diligence" className="section-padding bg-citadel-charcoal">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <Shield className="w-10 h-10 text-citadel-gold mx-auto mb-4" />
            <h2 className="font-serif text-3xl font-semibold text-citadel-cream mb-6 text-center">
              Art Due Diligence Checklist
            </h2>
            <p className="text-citadel-cream/60 text-center mb-8">
              Whether fractional or full ownership, verify these elements before investing.
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

            <div className="text-center mt-8">
              <Link href="/resources/art-due-diligence" className="btn-primary">
                Download Full Checklist (PDF)
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-citadel-black">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-citadel-cream mb-4">
              Ready to Start Collecting?
            </h2>
            <p className="text-citadel-cream/60 mb-8">
              Join our platform to get personalized recommendations, track offerings, 
              and access exclusive research on the art market.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/membership" className="btn-primary">
                Join Alt-Wealth Citadel
              </Link>
              <Link href="/contact" className="btn-secondary">
                Speak with an Advisor
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

