import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Building2, MapPin, TrendingUp, Calculator, Users, FileText, BarChart3, Home } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Real Estate Intelligence | Data, Tools & Syndications | Alt-Wealth Citadel',
  description: 'Institutional-grade real estate data and passive investment opportunities. Cap rate maps, market analytics, REIT comparisons, and curated syndication deals.',
  keywords: 'real estate investing, cap rate calculator, real estate syndication, passive real estate, fundrise, crowdstreet, realty mogul, commercial real estate data',
}

const tools = [
  {
    icon: MapPin,
    name: 'Cap Rate Explorer',
    description: 'Interactive maps showing cap rates by metro, submarket, and property type. Updated quarterly with institutional data.',
    access: 'Free Preview',
    href: '/tools/cap-rate-explorer',
  },
  {
    icon: Calculator,
    name: 'Deal Analyzer',
    description: 'Run full underwriting on any deal. Cash-on-cash, IRR, equity multiple, waterfall distributions—all calculated instantly.',
    access: 'Member Tool',
    href: '/tools/deal-analyzer',
  },
  {
    icon: BarChart3,
    name: 'Market Intelligence',
    description: 'Rental growth forecasts, absorption rates, and development pipeline by metro. The data institutions pay $50K/year for.',
    access: 'Premium',
    href: '/tools/market-intelligence',
  },
  {
    icon: FileText,
    name: 'Due Diligence Templates',
    description: 'Comprehensive checklists for multifamily, industrial, retail, and office acquisitions. Never miss a red flag.',
    access: 'Free Download',
    href: '/resources/real-estate-due-diligence',
  },
]

const investmentOptions = [
  {
    type: 'Syndications',
    description: 'Direct ownership in specific properties. Higher minimums, higher returns, longer hold periods.',
    minInvest: '$25,000+',
    targetReturn: '15-22% IRR',
    accredited: true,
    partners: ['CrowdStreet', 'EquityMultiple', 'RealtyMogul'],
  },
  {
    type: 'Private REITs',
    description: 'Diversified portfolios managed by professionals. Lower minimums, steady income, more liquidity.',
    minInvest: '$500+',
    targetReturn: '8-12% IRR',
    accredited: false,
    partners: ['Fundrise', 'Arrived', 'Streitwise'],
  },
  {
    type: 'Debt Investments',
    description: 'Earn fixed income by lending to developers. First-lien security, shorter durations, predictable returns.',
    minInvest: '$5,000+',
    targetReturn: '7-10% Yield',
    accredited: true,
    partners: ['Groundfloor', 'PeerStreet', 'Fund That Flip'],
  },
]

const markets = [
  { city: 'Dallas-Fort Worth', capRate: '5.8%', growth: '+4.2%', outlook: 'Strong' },
  { city: 'Phoenix', capRate: '5.5%', growth: '+3.8%', outlook: 'Strong' },
  { city: 'Nashville', capRate: '5.6%', growth: '+5.1%', outlook: 'Strong' },
  { city: 'Tampa', capRate: '5.9%', growth: '+4.5%', outlook: 'Moderate' },
  { city: 'Austin', capRate: '5.2%', growth: '+2.1%', outlook: 'Cooling' },
  { city: 'Charlotte', capRate: '5.7%', growth: '+3.9%', outlook: 'Strong' },
]

export default function RealEstatePage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="section-padding gradient-hero">
        <div className="container-custom">
          <div className="max-w-3xl">
            <p className="text-green-400 uppercase tracking-[0.2em] text-sm font-medium mb-4">
              Yield & Growth
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-citadel-cream mb-6 leading-tight">
              Real Estate<br />Intelligence
            </h1>
            <p className="text-xl text-citadel-cream/60 leading-relaxed mb-8">
              Institutional-grade data meets accessible investing. Whether you're 
              analyzing deals, tracking markets, or allocating to passive opportunities—
              we give you the tools and access that were once reserved for billion-dollar funds.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="#tools" className="btn-primary">
                Explore Tools
              </Link>
              <Link href="#invest" className="btn-secondary">
                Passive Opportunities
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Market Snapshot */}
      <section className="py-8 bg-citadel-charcoal border-y border-citadel-border">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-serif text-lg font-semibold text-citadel-cream">Market Snapshot</h3>
            <Link href="/tools/cap-rate-explorer" className="text-sm text-citadel-gold">
              Full Explorer →
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {markets.map((market) => (
              <div key={market.city} className="bg-citadel-slate/50 rounded-lg p-3">
                <div className="text-sm font-medium text-citadel-cream truncate">{market.city}</div>
                <div className="flex items-center gap-2 mt-1">
                  <span className="font-mono text-citadel-gold">{market.capRate}</span>
                  <span className={`text-xs ${market.growth.includes('+') ? 'text-green-400' : 'text-red-400'}`}>
                    {market.growth}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section id="tools" className="section-padding bg-citadel-black">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-citadel-cream mb-4">
              Professional-Grade Tools
            </h2>
            <p className="text-citadel-cream/60">
              The same analytics that power institutional decisions—now available 
              to individual investors. No spreadsheets required.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {tools.map((tool) => (
              <Link
                key={tool.name}
                href={tool.href}
                className="card-elevated group pillar-border-yield"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-green-500/10">
                    <tool.icon className="w-6 h-6 text-green-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-serif text-xl font-semibold text-citadel-cream group-hover:text-citadel-gold transition-colors">
                        {tool.name}
                      </h3>
                      <span className="text-xs px-2 py-1 bg-citadel-slate rounded text-citadel-cream/70">
                        {tool.access}
                      </span>
                    </div>
                    <p className="text-citadel-cream/60 text-sm">
                      {tool.description}
                    </p>
                    <div className="flex items-center gap-2 mt-4 text-sm text-citadel-gold">
                      <span>Open Tool</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Options */}
      <section id="invest" className="section-padding bg-citadel-charcoal">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-citadel-cream mb-4">
              Passive Real Estate Investing
            </h2>
            <p className="text-citadel-cream/60">
              Don't want to manage tenants? These platforms let you invest in 
              institutional-quality real estate without the operational headaches.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {investmentOptions.map((option) => (
              <div key={option.type} className="card-elevated">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-serif text-xl font-semibold text-citadel-cream">
                    {option.type}
                  </h3>
                  {option.accredited && (
                    <span className="text-xs px-2 py-1 bg-citadel-gold/20 text-citadel-gold rounded">
                      Accredited Only
                    </span>
                  )}
                </div>
                
                <p className="text-citadel-cream/60 text-sm mb-6">
                  {option.description}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6 py-4 border-y border-citadel-border">
                  <div>
                    <div className="text-xs text-citadel-cream/50 uppercase">Min Invest</div>
                    <div className="font-mono text-lg text-citadel-cream">{option.minInvest}</div>
                  </div>
                  <div>
                    <div className="text-xs text-citadel-cream/50 uppercase">Target Return</div>
                    <div className="font-mono text-lg text-green-400">{option.targetReturn}</div>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="text-xs text-citadel-cream/50 uppercase mb-2">Platforms</div>
                  <div className="flex flex-wrap gap-2">
                    {option.partners.map((partner) => (
                      <span key={partner} className="text-xs px-2 py-1 bg-citadel-slate rounded text-citadel-cream/70">
                        {partner}
                      </span>
                    ))}
                  </div>
                </div>

                <Link href={`/real-estate/${option.type.toLowerCase()}`} className="btn-secondary w-full text-center">
                  Compare Platforms
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Subscription */}
      <section className="section-padding bg-citadel-black">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-citadel-cream mb-6">
                Real Estate Data Subscription
              </h2>
              <p className="text-citadel-cream/70 mb-6">
                CoStar charges $20,000/year. We've aggregated public data, proprietary 
                research, and partner feeds into an accessible platform that gives you 
                80% of the insight at 5% of the cost.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  'Cap rates by metro, submarket, and property type',
                  'Rental growth forecasts (12-month and 5-year)',
                  'Supply pipeline and absorption rates',
                  'Transaction comps and pricing trends',
                  'Monthly market reports with actionable insights',
                ].map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-citadel-gold" />
                    <span className="text-citadel-cream/80">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-6">
                <div>
                  <div className="text-3xl font-mono text-citadel-gold">$99</div>
                  <div className="text-sm text-citadel-cream/60">/month</div>
                </div>
                <Link href="/membership" className="btn-primary">
                  Subscribe Now
                </Link>
              </div>
            </div>

            <div className="card">
              <h3 className="font-serif text-lg font-semibold text-citadel-cream mb-4">
                Sample: Multifamily Cap Rates
              </h3>
              <div className="space-y-3">
                {[
                  { label: 'Class A Urban Core', rate: '4.5%', trend: '↑' },
                  { label: 'Class A Suburban', rate: '5.0%', trend: '↑' },
                  { label: 'Class B Value-Add', rate: '5.8%', trend: '→' },
                  { label: 'Class C Workforce', rate: '6.5%', trend: '↓' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between py-2 border-b border-citadel-border last:border-0">
                    <span className="text-citadel-cream/70">{item.label}</span>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-citadel-cream">{item.rate}</span>
                      <span className="text-citadel-gold">{item.trend}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-citadel-border">
                <Link href="/tools/cap-rate-explorer" className="text-sm text-citadel-gold">
                  Preview Full Dataset →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SDIRA Integration */}
      <section className="section-padding bg-citadel-charcoal">
        <div className="container-custom">
          <div className="card gold-glow max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <Building2 className="w-10 h-10 text-citadel-gold mb-4" />
                <h2 className="font-serif text-2xl font-semibold text-citadel-cream mb-4">
                  Invest with Retirement Funds
                </h2>
                <p className="text-citadel-cream/60 mb-4">
                  Did you know you can invest in real estate syndications using your 
                  IRA or 401(k)? A Self-Directed IRA lets you diversify retirement 
                  savings into alternative assets—tax-advantaged.
                </p>
                <Link href="/advisory/sdira" className="btn-primary">
                  Learn About SDIRAs
                </Link>
              </div>
              <div className="bg-citadel-slate/50 rounded-xl p-6">
                <div className="text-sm text-citadel-cream/50 uppercase mb-2">Example Tax Savings</div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-citadel-cream/70">Investment</span>
                    <span className="font-mono text-citadel-cream">$50,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-citadel-cream/70">5-Year Return (15% IRR)</span>
                    <span className="font-mono text-citadel-cream">$50,567</span>
                  </div>
                  <div className="flex justify-between pt-3 border-t border-citadel-border">
                    <span className="text-citadel-cream/70">Tax saved (Roth IRA)</span>
                    <span className="font-mono text-green-400">$12,642</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

