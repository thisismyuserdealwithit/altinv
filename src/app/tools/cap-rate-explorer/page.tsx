'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, MapPin, TrendingUp, TrendingDown, Filter, Info, Lock } from 'lucide-react'

interface MarketData {
  city: string
  state: string
  multifamily: { capRate: number; change: number }
  industrial: { capRate: number; change: number }
  retail: { capRate: number; change: number }
  office: { capRate: number; change: number }
  population: string
  jobGrowth: number
  rentGrowth: number
}

const marketData: MarketData[] = [
  {
    city: 'Dallas',
    state: 'TX',
    multifamily: { capRate: 5.2, change: 0.4 },
    industrial: { capRate: 5.5, change: 0.3 },
    retail: { capRate: 6.8, change: 0.2 },
    office: { capRate: 7.8, change: 1.2 },
    population: '7.6M',
    jobGrowth: 3.2,
    rentGrowth: 2.1,
  },
  {
    city: 'Phoenix',
    state: 'AZ',
    multifamily: { capRate: 5.0, change: 0.5 },
    industrial: { capRate: 5.3, change: 0.3 },
    retail: { capRate: 6.5, change: 0.3 },
    office: { capRate: 7.5, change: 1.0 },
    population: '5.0M',
    jobGrowth: 2.8,
    rentGrowth: 1.8,
  },
  {
    city: 'Nashville',
    state: 'TN',
    multifamily: { capRate: 5.3, change: 0.6 },
    industrial: { capRate: 5.6, change: 0.4 },
    retail: { capRate: 6.4, change: 0.2 },
    office: { capRate: 7.2, change: 0.8 },
    population: '2.0M',
    jobGrowth: 3.5,
    rentGrowth: 2.5,
  },
  {
    city: 'Tampa',
    state: 'FL',
    multifamily: { capRate: 5.1, change: 0.5 },
    industrial: { capRate: 5.4, change: 0.3 },
    retail: { capRate: 6.6, change: 0.3 },
    office: { capRate: 7.4, change: 0.9 },
    population: '3.2M',
    jobGrowth: 2.6,
    rentGrowth: 2.0,
  },
  {
    city: 'Charlotte',
    state: 'NC',
    multifamily: { capRate: 5.4, change: 0.5 },
    industrial: { capRate: 5.7, change: 0.4 },
    retail: { capRate: 6.5, change: 0.2 },
    office: { capRate: 7.3, change: 0.8 },
    population: '2.7M',
    jobGrowth: 3.0,
    rentGrowth: 2.2,
  },
  {
    city: 'Austin',
    state: 'TX',
    multifamily: { capRate: 5.5, change: 0.8 },
    industrial: { capRate: 5.4, change: 0.4 },
    retail: { capRate: 6.3, change: 0.3 },
    office: { capRate: 7.6, change: 1.1 },
    population: '2.4M',
    jobGrowth: 2.2,
    rentGrowth: -0.5,
  },
  {
    city: 'Denver',
    state: 'CO',
    multifamily: { capRate: 5.3, change: 0.6 },
    industrial: { capRate: 5.8, change: 0.5 },
    retail: { capRate: 6.7, change: 0.3 },
    office: { capRate: 7.9, change: 1.3 },
    population: '2.9M',
    jobGrowth: 1.8,
    rentGrowth: 0.8,
  },
  {
    city: 'Atlanta',
    state: 'GA',
    multifamily: { capRate: 5.4, change: 0.5 },
    industrial: { capRate: 5.5, change: 0.4 },
    retail: { capRate: 6.6, change: 0.2 },
    office: { capRate: 7.5, change: 1.0 },
    population: '6.2M',
    jobGrowth: 2.4,
    rentGrowth: 1.5,
  },
]

const propertyTypes = ['multifamily', 'industrial', 'retail', 'office'] as const
type PropertyType = typeof propertyTypes[number]

export default function CapRateExplorerPage() {
  const [selectedType, setSelectedType] = useState<PropertyType>('multifamily')
  const [sortBy, setSortBy] = useState<'capRate' | 'change' | 'jobGrowth'>('capRate')
  const [sortDir, setSortDir] = useState<'asc' | 'desc'>('desc')

  const sortedData = [...marketData].sort((a, b) => {
    let aVal: number, bVal: number
    if (sortBy === 'capRate') {
      aVal = a[selectedType].capRate
      bVal = b[selectedType].capRate
    } else if (sortBy === 'change') {
      aVal = a[selectedType].change
      bVal = b[selectedType].change
    } else {
      aVal = a.jobGrowth
      bVal = b.jobGrowth
    }
    return sortDir === 'asc' ? aVal - bVal : bVal - aVal
  })

  const toggleSort = (field: typeof sortBy) => {
    if (sortBy === field) {
      setSortDir(sortDir === 'asc' ? 'desc' : 'asc')
    } else {
      setSortBy(field)
      setSortDir('desc')
    }
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
          <div className="max-w-6xl mx-auto">
            {/* Title */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/10 mb-6">
                <MapPin className="w-8 h-8 text-green-400" />
              </div>
              <h1 className="font-serif text-3xl md:text-4xl font-semibold text-citadel-cream mb-4">
                Cap Rate Explorer
              </h1>
              <p className="text-citadel-cream/60 max-w-2xl mx-auto">
                Compare cap rates across major US metros by property type. 
                Track year-over-year changes and market fundamentals.
              </p>
            </div>

            {/* Property Type Selector */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {propertyTypes.map(type => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedType === type
                      ? 'bg-citadel-gold text-citadel-black'
                      : 'bg-citadel-slate text-citadel-cream hover:bg-citadel-slate/80'
                  }`}
                >
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </button>
              ))}
            </div>

            {/* Data Table */}
            <div className="card overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left text-sm text-citadel-cream/50 border-b border-citadel-border">
                    <th className="pb-3 pr-4">Market</th>
                    <th 
                      className="pb-3 pr-4 cursor-pointer hover:text-citadel-gold"
                      onClick={() => toggleSort('capRate')}
                    >
                      Cap Rate {sortBy === 'capRate' && (sortDir === 'desc' ? '↓' : '↑')}
                    </th>
                    <th 
                      className="pb-3 pr-4 cursor-pointer hover:text-citadel-gold"
                      onClick={() => toggleSort('change')}
                    >
                      YoY Change {sortBy === 'change' && (sortDir === 'desc' ? '↓' : '↑')}
                    </th>
                    <th className="pb-3 pr-4">Population</th>
                    <th 
                      className="pb-3 pr-4 cursor-pointer hover:text-citadel-gold"
                      onClick={() => toggleSort('jobGrowth')}
                    >
                      Job Growth {sortBy === 'jobGrowth' && (sortDir === 'desc' ? '↓' : '↑')}
                    </th>
                    <th className="pb-3">Rent Growth</th>
                  </tr>
                </thead>
                <tbody>
                  {sortedData.map((market) => (
                    <tr key={market.city} className="border-b border-citadel-border hover:bg-citadel-slate/30">
                      <td className="py-4 pr-4">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-citadel-gold" />
                          <span className="font-medium text-citadel-cream">{market.city}</span>
                          <span className="text-citadel-cream/50">{market.state}</span>
                        </div>
                      </td>
                      <td className="py-4 pr-4">
                        <span className="font-mono text-lg text-citadel-gold">
                          {market[selectedType].capRate.toFixed(1)}%
                        </span>
                      </td>
                      <td className="py-4 pr-4">
                        <div className={`flex items-center gap-1 ${market[selectedType].change > 0 ? 'text-green-400' : 'text-red-400'}`}>
                          {market[selectedType].change > 0 ? (
                            <TrendingUp className="w-4 h-4" />
                          ) : (
                            <TrendingDown className="w-4 h-4" />
                          )}
                          <span className="font-mono">
                            {market[selectedType].change > 0 ? '+' : ''}{market[selectedType].change.toFixed(1)} bps
                          </span>
                        </div>
                      </td>
                      <td className="py-4 pr-4 text-citadel-cream/70">
                        {market.population}
                      </td>
                      <td className="py-4 pr-4">
                        <span className={`font-mono ${market.jobGrowth > 2 ? 'text-green-400' : market.jobGrowth > 0 ? 'text-amber-400' : 'text-red-400'}`}>
                          {market.jobGrowth > 0 ? '+' : ''}{market.jobGrowth.toFixed(1)}%
                        </span>
                      </td>
                      <td className="py-4">
                        <span className={`font-mono ${market.rentGrowth > 1 ? 'text-green-400' : market.rentGrowth > 0 ? 'text-amber-400' : 'text-red-400'}`}>
                          {market.rentGrowth > 0 ? '+' : ''}{market.rentGrowth.toFixed(1)}%
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Legend */}
            <div className="mt-6 flex flex-wrap gap-6 text-sm text-citadel-cream/50">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded bg-green-400"></div>
                <span>Strong (2%+ growth)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded bg-amber-400"></div>
                <span>Moderate (0-2% growth)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded bg-red-400"></div>
                <span>Weak (negative growth)</span>
              </div>
            </div>

            {/* Premium CTA */}
            <div className="mt-12 card bg-citadel-charcoal border-citadel-gold/20">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="flex-shrink-0">
                  <Lock className="w-12 h-12 text-citadel-gold" />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="font-serif text-xl font-semibold text-citadel-cream mb-2">
                    Unlock Full Market Data
                  </h3>
                  <p className="text-citadel-cream/60">
                    Members get access to 100+ metros, submarket data, historical trends, 
                    and downloadable reports.
                  </p>
                </div>
                <Link href="/membership" className="btn-primary whitespace-nowrap">
                  Upgrade to Pro
                </Link>
              </div>
            </div>

            {/* Related Research */}
            <div className="mt-12">
              <h3 className="font-serif text-xl font-semibold text-citadel-cream mb-6">
                Related Research
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <Link href="/research/2026-real-estate-outlook" className="card group hover:border-citadel-gold/30 transition-colors">
                  <span className="text-xs text-citadel-gold">Annual Report</span>
                  <h4 className="font-serif text-lg font-semibold text-citadel-cream group-hover:text-citadel-gold transition-colors mt-1">
                    2026 Real Estate Outlook
                  </h4>
                  <p className="text-sm text-citadel-cream/60 mt-2">
                    Cap rate expansion, sector performance, and metro-by-metro investment opportunities.
                  </p>
                </Link>
                <Link href="/research/syndication-due-diligence" className="card group hover:border-citadel-gold/30 transition-colors">
                  <span className="text-xs text-citadel-gold">Checklist</span>
                  <h4 className="font-serif text-lg font-semibold text-citadel-cream group-hover:text-citadel-gold transition-colors mt-1">
                    Syndication Due Diligence
                  </h4>
                  <p className="text-sm text-citadel-cream/60 mt-2">
                    47 questions to ask before investing in any real estate syndication.
                  </p>
                </Link>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="mt-8 p-4 bg-citadel-charcoal rounded-lg border border-citadel-border">
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-citadel-cream/50 flex-shrink-0 mt-0.5" />
                <p className="text-xs text-citadel-cream/50">
                  Cap rates shown are metro-level averages based on recent transaction data. 
                  Individual property cap rates vary significantly based on location, quality, 
                  and other factors. Data is for informational purposes only.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
