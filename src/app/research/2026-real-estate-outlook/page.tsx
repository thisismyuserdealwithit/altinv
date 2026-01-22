import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Clock, Calendar, Share2, Bookmark, ArrowRight, TrendingUp, TrendingDown, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: '2026 Real Estate Outlook | Where to Find Yield | Alt-Wealth Citadel',
  description: 'Comprehensive analysis of real estate markets heading into 2026. Cap rate expansion, sector performance, and metro-by-metro investment opportunities.',
  keywords: '2026 real estate forecast, cap rates 2026, multifamily investing, industrial real estate, real estate market outlook',
}

const sectorOutlook = [
  { sector: 'Industrial', outlook: 'Strong', capRate: '5.8%', change: '+40 bps', notes: 'E-commerce tailwinds persist, but new supply arriving' },
  { sector: 'Multifamily', outlook: 'Moderate', capRate: '5.5%', change: '+60 bps', notes: 'Rent growth slowing, concessions returning in some markets' },
  { sector: 'Self-Storage', outlook: 'Strong', capRate: '6.2%', change: '+30 bps', notes: 'Resilient demand, limited new supply in most markets' },
  { sector: 'Retail', outlook: 'Selective', capRate: '6.8%', change: '+20 bps', notes: 'Grocery-anchored thriving, malls still challenged' },
  { sector: 'Office', outlook: 'Weak', capRate: '7.5%', change: '+150 bps', notes: 'Work-from-home structural shift, distress opportunities emerging' },
]

const topMarkets = [
  { name: 'Dallas-Fort Worth', state: 'TX', thesis: 'Corporate relocations, population growth, diversified economy', rating: 'Strong Buy' },
  { name: 'Nashville', state: 'TN', thesis: 'Healthcare hub, migration magnet, limited supply pipeline', rating: 'Strong Buy' },
  { name: 'Tampa', state: 'FL', thesis: 'Florida migration, insurance-adjusted pricing creates entry points', rating: 'Buy' },
  { name: 'Phoenix', state: 'AZ', thesis: 'Semiconductor reshoring, data center demand, population growth', rating: 'Buy' },
  { name: 'Charlotte', state: 'NC', thesis: 'Financial services growth, affordable relative to peers', rating: 'Buy' },
]

const avoidMarkets = [
  { name: 'San Francisco', state: 'CA', thesis: 'Office vacancy crisis, policy uncertainty, population outflow' },
  { name: 'Austin', state: 'TX', thesis: 'Overbuilt multifamily, rent declines, needs time to absorb supply' },
  { name: 'Seattle', state: 'WA', thesis: 'Tech layoffs impact, tax policy concerns, elevated supply' },
]

export default function RealEstateOutlookPage() {
  return (
    <div className="pt-20">
      {/* Breadcrumb */}
      <div className="bg-citadel-charcoal border-b border-citadel-border">
        <div className="container-custom py-4">
          <Link href="/research" className="inline-flex items-center gap-2 text-sm text-citadel-cream/60 hover:text-citadel-gold transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Research
          </Link>
        </div>
      </div>

      {/* Article Header */}
      <section className="section-padding gradient-hero">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs px-2 py-1 bg-green-500/20 text-green-400 rounded">
                Annual Report
              </span>
              <span className="text-xs px-2 py-1 bg-citadel-slate text-citadel-cream/60 rounded">
                Real Estate
              </span>
            </div>
            
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-citadel-cream mb-6 leading-tight">
              2026 Real Estate Outlook: Where to Find Yield in a Higher-Rate World
            </h1>
            
            <p className="text-xl text-citadel-cream/60 leading-relaxed mb-8">
              Cap rates have expanded, but not uniformly. Our metro-by-metro analysis 
              reveals pockets of value in industrial, multifamily, and self-storage—
              and sectors to avoid.
            </p>

            <div className="flex items-center gap-6 text-sm text-citadel-cream/50">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                January 3, 2026
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                18 min read
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="py-8 bg-citadel-charcoal border-y border-citadel-border">
        <div className="container-custom">
          <h3 className="font-medium text-citadel-cream mb-4">Key Takeaways</h3>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { label: 'Cap Rate Expansion', value: '+50-150 bps', note: 'Across sectors since 2022' },
              { label: 'Top Sector', value: 'Industrial', note: 'Best risk-adjusted returns' },
              { label: 'Opportunity', value: 'Sunbelt', note: 'Migration-driven markets' },
              { label: 'Avoid', value: 'Coastal Office', note: 'Structural headwinds' },
            ].map((item) => (
              <div key={item.label} className="bg-citadel-slate/50 rounded-lg p-4">
                <div className="text-xs text-citadel-cream/50">{item.label}</div>
                <div className="font-mono text-xl text-citadel-gold">{item.value}</div>
                <div className="text-xs text-citadel-cream/60">{item.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="section-padding bg-citadel-black">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <article className="prose prose-invert prose-citadel max-w-none">
              <h2 className="font-serif text-2xl font-semibold text-citadel-cream mt-8 mb-4">
                The New Reality: Higher for Longer
              </h2>
              <p className="text-citadel-cream/70 leading-relaxed">
                The era of 3% cap rates is over. After a decade of cap rate compression 
                fueled by falling interest rates, the market has reset. Buyers now demand 
                risk premiums that reflect a normalized rate environment.
              </p>
              <p className="text-citadel-cream/70 leading-relaxed">
                This isn't all bad news for investors. Higher cap rates mean better going-in 
                yields and more margin of safety. The key is knowing where value has 
                emerged—and where prices haven't adjusted enough.
              </p>

              <h2 className="font-serif text-2xl font-semibold text-citadel-cream mt-12 mb-4">
                Sector-by-Sector Analysis
              </h2>
              <p className="text-citadel-cream/70 leading-relaxed mb-6">
                Not all real estate is equal. The post-pandemic economy has created clear 
                winners and losers.
              </p>
            </article>

            {/* Sector Table */}
            <div className="my-8 overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left text-sm text-citadel-cream/50 border-b border-citadel-border">
                    <th className="pb-3 pr-4">Sector</th>
                    <th className="pb-3 pr-4">Outlook</th>
                    <th className="pb-3 pr-4">Cap Rate</th>
                    <th className="pb-3 pr-4">YoY Change</th>
                    <th className="pb-3">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {sectorOutlook.map((sector) => (
                    <tr key={sector.sector} className="border-b border-citadel-border">
                      <td className="py-3 pr-4 font-medium text-citadel-cream">{sector.sector}</td>
                      <td className="py-3 pr-4">
                        <span className={`text-xs px-2 py-0.5 rounded ${
                          sector.outlook === 'Strong' ? 'bg-green-500/20 text-green-400' :
                          sector.outlook === 'Moderate' ? 'bg-amber-500/20 text-amber-400' :
                          sector.outlook === 'Selective' ? 'bg-blue-500/20 text-blue-400' :
                          'bg-red-500/20 text-red-400'
                        }`}>
                          {sector.outlook}
                        </span>
                      </td>
                      <td className="py-3 pr-4 font-mono text-citadel-gold">{sector.capRate}</td>
                      <td className="py-3 pr-4 text-citadel-cream/70">{sector.change}</td>
                      <td className="py-3 text-sm text-citadel-cream/60">{sector.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <article className="prose prose-invert prose-citadel max-w-none">
              <h2 className="font-serif text-2xl font-semibold text-citadel-cream mt-12 mb-4">
                Top Markets for 2026
              </h2>
              <p className="text-citadel-cream/70 leading-relaxed mb-6">
                Population growth, job creation, and limited supply define our top picks. 
                These markets offer the best combination of yield and growth potential.
              </p>
            </article>

            {/* Top Markets */}
            <div className="space-y-4 my-8">
              {topMarkets.map((market) => (
                <div key={market.name} className="card flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-serif text-lg font-semibold text-citadel-cream">
                        {market.name}, {market.state}
                      </h4>
                      <span className="text-xs px-2 py-0.5 bg-green-500/20 text-green-400 rounded">
                        {market.rating}
                      </span>
                    </div>
                    <p className="text-sm text-citadel-cream/60 mt-1">{market.thesis}</p>
                  </div>
                </div>
              ))}
            </div>

            <article className="prose prose-invert prose-citadel max-w-none">
              <h2 className="font-serif text-2xl font-semibold text-citadel-cream mt-12 mb-4">
                Markets to Avoid (or Wait)
              </h2>
              <p className="text-citadel-cream/70 leading-relaxed mb-6">
                Some markets look cheap for a reason. Structural issues or oversupply 
                mean pain may continue before opportunity emerges.
              </p>
            </article>

            {/* Avoid Markets */}
            <div className="space-y-4 my-8">
              {avoidMarkets.map((market) => (
                <div key={market.name} className="card border-red-500/20 flex items-start gap-4">
                  <TrendingDown className="w-5 h-5 text-red-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-serif text-lg font-semibold text-citadel-cream">
                      {market.name}, {market.state}
                    </h4>
                    <p className="text-sm text-citadel-cream/60 mt-1">{market.thesis}</p>
                  </div>
                </div>
              ))}
            </div>

            <article className="prose prose-invert prose-citadel max-w-none">
              <h2 className="font-serif text-2xl font-semibold text-citadel-cream mt-12 mb-4">
                Investment Strategy
              </h2>
              <p className="text-citadel-cream/70 leading-relaxed">
                Our recommended approach for 2026:
              </p>
              <ul className="space-y-2 text-citadel-cream/70">
                <li><strong className="text-citadel-cream">Focus on cash flow:</strong> In a higher-rate environment, speculative appreciation plays are riskier. Prioritize deals that cash flow from day one.</li>
                <li><strong className="text-citadel-cream">Sector selection matters:</strong> Industrial and self-storage offer the best risk-adjusted returns. Avoid office unless buying at deep discounts.</li>
                <li><strong className="text-citadel-cream">Migration markets:</strong> Follow the people. Sunbelt metros with population growth will outperform.</li>
                <li><strong className="text-citadel-cream">Watch debt markets:</strong> Refinancing risk is real. Scrutinize loan terms and maturities on any acquisition.</li>
              </ul>

              <div className="my-12 p-6 bg-citadel-charcoal rounded-xl border border-citadel-gold/30">
                <h4 className="font-serif text-lg font-semibold text-citadel-cream mb-2">
                  Bottom Line
                </h4>
                <p className="text-citadel-cream/70">
                  2026 offers attractive entry points for patient capital. Cap rates have 
                  expanded to levels not seen since 2015. Focus on quality assets in growing 
                  markets, prioritize cash flow, and be selective on sector. The distress 
                  wave in office may create opportunistic plays later in the year.
                </p>
              </div>
            </article>

            {/* CTA */}
            <div className="mt-12 p-6 bg-citadel-charcoal rounded-xl">
              <h3 className="font-serif text-xl font-semibold text-citadel-cream mb-4">
                Access Full Market Data
              </h3>
              <p className="text-citadel-cream/60 mb-6">
                Members get access to our Cap Rate Explorer with 100+ metros, 
                submarket data, and downloadable reports.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/tools/cap-rate-explorer" className="btn-primary">
                  Open Cap Rate Explorer
                </Link>
                <Link href="/membership" className="btn-secondary">
                  Upgrade for Full Access
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

