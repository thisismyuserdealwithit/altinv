'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { ArrowRight, PieChart } from 'lucide-react'
import { TalkToExpertButton } from '../TalkToExpertButton'

export function CalculatorSection() {
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

  // Distribute alternative allocation across 6 sectors
  const sectors = [
    { name: 'Rare Metals', pct: 20, color: '#C9A227' },
    { name: 'Collectibles', pct: 15, color: '#A855F7' },
    { name: 'Dubai Real Estate', pct: 25, color: '#10B981' },
    { name: 'Fine Art', pct: 15, color: '#EC4899' },
    { name: 'Litigation Finance', pct: 15, color: '#3B82F6' },
    { name: 'Business Acquisitions', pct: 10, color: '#F59E0B' },
  ]

  return (
    <section className="section-padding bg-citadel-charcoal">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <PieChart className="w-5 h-5 text-citadel-gold" />
              <span className="text-citadel-gold uppercase tracking-[0.2em] text-sm font-medium">
                Interactive Tool
              </span>
            </div>
            
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-citadel-cream mb-4">
              Alternative Allocation Calculator
            </h2>
            
            <p className="text-citadel-cream/60 mb-8">
              How much should you allocate to alternatives? Based on your portfolio 
              size, we recommend between 1.5% and 5%. Larger portfolios can handle 
              more illiquidity and benefit more from diversification.
            </p>

            {/* Portfolio Size Slider */}
            <div className="mb-8">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-citadel-cream/70">Total Portfolio Size</span>
                <span className="font-mono text-citadel-gold">{formatCurrency(portfolio)}</span>
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
            <div className="p-6 bg-citadel-slate/50 rounded-xl border border-citadel-gold/20 mb-8">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-citadel-cream/70">Recommended Allocation:</span>
                <span className="font-mono text-3xl text-citadel-gold">{recommendedPct.toFixed(1)}%</span>
              </div>
              <div className="text-citadel-cream/60">
                {formatCurrency(altAllocation)} across alternative investments
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link href="/tools/allocation-calculator" className="btn-secondary group">
                Open Full Calculator
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <TalkToExpertButton variant="primary" />
            </div>
          </div>

          {/* Right: Visualization */}
          <div className="card gold-glow">
            <h4 className="font-serif text-lg font-semibold text-citadel-cream mb-6">
              Sample Distribution Across Sectors
            </h4>
            
            {/* Sectors */}
            <div className="space-y-4">
              {sectors.map((sector) => {
                const sectorAmount = altAllocation * (sector.pct / 100)
                return (
                  <div key={sector.name} className="flex items-center gap-4">
                    <div 
                      className="w-3 h-3 rounded-sm flex-shrink-0"
                      style={{ backgroundColor: sector.color }}
                    />
                    <div className="flex-1">
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
                    <div className="flex items-center gap-3 min-w-[160px]">
                      <span className="text-sm text-citadel-cream">
                        {sector.name}
                      </span>
                    </div>
                    <span className="font-mono text-sm text-citadel-cream/70 min-w-[80px] text-right">
                      {formatCurrency(sectorAmount)}
                    </span>
                  </div>
                )
              })}
            </div>

            {/* Summary */}
            <div className="mt-8 pt-6 border-t border-citadel-border">
              <div className="flex justify-between items-center">
                <span className="text-citadel-cream/70">Total Alternative Allocation</span>
                <span className="font-mono text-2xl text-citadel-gold">
                  {formatCurrency(altAllocation)}
                </span>
              </div>
              <p className="text-xs text-citadel-cream/50 mt-2">
                {recommendedPct.toFixed(1)}% of your {formatCurrency(portfolio)} portfolio
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
