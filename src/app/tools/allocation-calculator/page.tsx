'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { ArrowLeft, PieChart, Info, ArrowRight, Gem, Package, Building2, Palette, Scale, Briefcase } from 'lucide-react'

const sectors = [
  { name: 'Rare Metals', icon: Gem, color: '#C9A227', pct: 20 },
  { name: 'Collectibles', icon: Package, color: '#A855F7', pct: 15 },
  { name: 'Dubai Real Estate', icon: Building2, color: '#10B981', pct: 25 },
  { name: 'Fine Art', icon: Palette, color: '#EC4899', pct: 15 },
  { name: 'Litigation Finance', icon: Scale, color: '#3B82F6', pct: 15 },
  { name: 'Business Acquisitions', icon: Briefcase, color: '#F59E0B', pct: 10 },
]

export default function AllocationCalculatorPage() {
  const [portfolio, setPortfolio] = useState(500000)

  // Calculate recommended alternative allocation: 1.5% at $100K, scaling to 5% at $50M
  const recommendedPct = useMemo(() => {
    const minPortfolio = 100000
    const maxPortfolio = 50000000
    const minPct = 1.5
    const maxPct = 5
    
    if (portfolio <= minPortfolio) return minPct
    if (portfolio >= maxPortfolio) return maxPct
    
    // Linear interpolation
    const ratio = (portfolio - minPortfolio) / (maxPortfolio - minPortfolio)
    return minPct + ratio * (maxPct - minPct)
  }, [portfolio])

  const altAllocation = portfolio * (recommendedPct / 100)
  
  const formatCurrency = (value: number) => {
    if (value >= 1000000) {
      return `$${(value / 1000000).toFixed(1)}M`
    }
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value)
  }

  const formatSlider = (value: number) => {
    if (value >= 1000000) {
      return `$${(value / 1000000).toFixed(1)}M`
    }
    return `$${(value / 1000).toFixed(0)}K`
  }

  return (
    <div className="pt-20 min-h-screen bg-citadel-black">
      {/* Header */}
      <div className="bg-citadel-charcoal border-b border-citadel-border">
        <div className="container-custom py-4">
          <Link href="/tools" className="inline-flex items-center gap-2 text-sm text-citadel-cream/60 hover:text-citadel-gold transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Tools
          </Link>
        </div>
      </div>

      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Title */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-citadel-gold/10 mb-6">
                <PieChart className="w-8 h-8 text-citadel-gold" />
              </div>
              <h1 className="font-serif text-3xl md:text-4xl font-semibold text-citadel-cream mb-4">
                Alternative Allocation Calculator
              </h1>
              <p className="text-citadel-cream/60 max-w-2xl mx-auto">
                How much should you allocate to alternatives? Based on your portfolio 
                size, we recommend between 1.5% and 5%. Larger portfolios benefit more 
                from diversification and can handle more illiquidity.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Input */}
              <div className="card">
                <h2 className="font-serif text-xl font-semibold text-citadel-cream mb-6">
                  Your Portfolio
                </h2>

                {/* Portfolio Size Slider */}
                <div className="mb-8">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-citadel-cream/70">Total Portfolio Size</span>
                    <span className="font-mono text-citadel-gold text-lg">{formatCurrency(portfolio)}</span>
                  </div>
                  <input
                    type="range"
                    min="100000"
                    max="50000000"
                    step="100000"
                    value={portfolio}
                    onChange={(e) => setPortfolio(Number(e.target.value))}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-citadel-cream/40 mt-1">
                    <span>$100K</span>
                    <span>$50M</span>
                  </div>
                </div>

                {/* Recommendation */}
                <div className="p-6 bg-citadel-gold/10 rounded-xl border border-citadel-gold/30">
                  <div className="text-sm text-citadel-cream/70 mb-2">Recommended Allocation to Alternatives</div>
                  <div className="flex items-baseline gap-2">
                    <span className="font-mono text-4xl text-citadel-gold">{recommendedPct.toFixed(1)}%</span>
                    <span className="text-citadel-cream/50">of portfolio</span>
                  </div>
                  <div className="mt-4 pt-4 border-t border-citadel-gold/20">
                    <div className="text-sm text-citadel-cream/70">That equals</div>
                    <div className="font-mono text-2xl text-citadel-cream">{formatCurrency(altAllocation)}</div>
                    <div className="text-xs text-citadel-cream/50 mt-1">across alternative investments</div>
                  </div>
                </div>

                {/* Why This Amount */}
                <div className="mt-6 p-4 bg-citadel-slate/50 rounded-lg">
                  <h3 className="text-sm font-medium text-citadel-cream mb-2">Why this allocation?</h3>
                  <p className="text-xs text-citadel-cream/60">
                    {portfolio < 250000 
                      ? "At this portfolio size, we recommend a conservative allocation to alternatives. Focus on building traditional investments first."
                      : portfolio < 1000000
                      ? "With a growing portfolio, you can start meaningfully diversifying into alternatives. Consider starting with one or two sectors."
                      : portfolio < 5000000
                      ? "Your portfolio size allows for meaningful diversification across multiple alternative sectors while maintaining liquidity."
                      : "At this level, you can build a comprehensive alternative portfolio across all six sectors with significant positions in each."
                    }
                  </p>
                </div>
              </div>

              {/* Output */}
              <div className="card gold-glow">
                <h2 className="font-serif text-xl font-semibold text-citadel-cream mb-6">
                  Sample Distribution by Sector
                </h2>

                {/* Sectors */}
                <div className="space-y-4">
                  {sectors.map((sector) => {
                    const sectorAmount = altAllocation * (sector.pct / 100)
                    const Icon = sector.icon
                    return (
                      <div key={sector.name} className="flex items-center gap-4">
                        <div 
                          className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: `${sector.color}20` }}
                        >
                          <Icon className="w-5 h-5" style={{ color: sector.color }} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-sm text-citadel-cream">{sector.name}</span>
                            <span className="font-mono text-sm text-citadel-cream/70">{formatCurrency(sectorAmount)}</span>
                          </div>
                          <div className="h-2 bg-citadel-slate rounded-full overflow-hidden">
                            <div 
                              className="h-full rounded-full transition-all duration-500"
                              style={{ 
                                width: `${sector.pct}%`,
                                backgroundColor: sector.color 
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>

                {/* Total */}
                <div className="mt-8 pt-6 border-t border-citadel-border">
                  <div className="flex justify-between items-center">
                    <span className="text-citadel-cream/70">Total Alternative Allocation</span>
                    <span className="font-mono text-2xl text-citadel-gold">{formatCurrency(altAllocation)}</span>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-6 space-y-3">
                  <Link href="/newsletter" className="btn-primary w-full text-center">
                    Get Personalized Guidance
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                  <Link href="/call" className="btn-secondary w-full text-center">
                    Book a Free Call
                  </Link>
                </div>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="mt-8 p-4 bg-citadel-charcoal rounded-lg border border-citadel-border">
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-citadel-cream/50 flex-shrink-0 mt-0.5" />
                <p className="text-xs text-citadel-cream/50">
                  This calculator provides educational guidance only and is not personalized investment advice. 
                  Actual allocations should be determined based on your complete financial picture, 
                  tax situation, risk tolerance, and goals. Consult qualified professionals before making investment decisions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
