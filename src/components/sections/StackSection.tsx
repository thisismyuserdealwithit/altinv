'use client'

import Link from 'next/link'
import { ArrowRight, Gem, Package, Building2, Palette, Scale, Briefcase } from 'lucide-react'
import { TalkToExpertButton } from '../TalkToExpertButton'

const sectors = [
  {
    icon: Gem,
    title: 'Rare Metals',
    subtitle: 'Technology Critical Elements',
    description: 'Gallium, germanium, indium, and rare earth elements. Industrial commodities essential for semiconductors, defense, and green energy. Physical ownership with secure storage.',
    links: [
      { label: 'Explore Metals', href: '/metals' },
      { label: 'Get a Quote', href: '/metals/quote' },
    ],
    target: 'earthrarest.com',
    color: 'text-citadel-gold',
    bgColor: 'bg-citadel-gold/10',
    borderColor: 'border-citadel-gold/30',
  },
  {
    icon: Package,
    title: 'Collectibles',
    subtitle: 'Tangible Assets That Appreciate',
    description: 'Wine, watches, memorabilia, and rare items. Passion assets with proven returns and low correlation to traditional markets. Authentication and storage included.',
    links: [
      { label: 'Browse Categories', href: '/collectibles' },
      { label: 'Start Collecting', href: '/collectibles/start' },
    ],
    target: 'colleko.com',
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500/30',
  },
  {
    icon: Building2,
    title: 'Dubai Real Estate',
    subtitle: 'Tax Free Property Investment',
    description: 'Freehold properties in the worlds fastest growing city. Zero income tax, high rental yields, and golden visa eligibility. International money transfers optimized.',
    links: [
      { label: 'View Properties', href: '/real-estate/dubai' },
      { label: 'Transfer Funds', href: '/global/transfers' },
    ],
    target: 'moneytransfercomparison.com',
    color: 'text-green-400',
    bgColor: 'bg-green-500/10',
    borderColor: 'border-green-500/30',
  },
  {
    icon: Palette,
    title: 'Fine Art',
    subtitle: 'Blue Chip Art Investments',
    description: 'Access museum quality artworks through fractional ownership. Basquiat, Warhol, Banksy. Professional curation and institutional grade due diligence.',
    links: [
      { label: 'Current Offerings', href: '/art' },
      { label: 'How It Works', href: '/art/guide' },
    ],
    target: 'yieldstreet.com',
    color: 'text-pink-400',
    bgColor: 'bg-pink-500/10',
    borderColor: 'border-pink-500/30',
  },
  {
    icon: Scale,
    title: 'Litigation Finance',
    subtitle: 'Legal Case Investments',
    description: 'Fund commercial litigation and earn returns when cases settle. Uncorrelated to markets, backed by legal claims. Diversified across multiple case types.',
    links: [
      { label: 'View Opportunities', href: '/litigation' },
      { label: 'Learn More', href: '/litigation/guide' },
    ],
    target: 'yieldstreet.com',
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/30',
  },
  {
    icon: Briefcase,
    title: 'Business Acquisitions',
    subtitle: 'Main Street M&A',
    description: 'Acquire profitable small businesses. Plumbing companies, HVAC, professional services. Proven cash flow, owner financing, and hands off management options.',
    links: [
      { label: 'Browse Businesses', href: '/acquisitions' },
      { label: 'Acquisition Guide', href: '/acquisitions/guide' },
    ],
    target: 'Partner Network',
    color: 'text-amber-400',
    bgColor: 'bg-amber-500/10',
    borderColor: 'border-amber-500/30',
  },
]

export function StackSection() {
  return (
    <section id="sectors" className="section-padding bg-citadel-black">
      <div className="container-custom">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-3xl">
            <p className="text-citadel-gold uppercase tracking-[0.2em] text-sm font-medium mb-4">
              Six Sectors
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-citadel-cream mb-6">
              Alternative Investments<br />Made Accessible
            </h2>
            <p className="text-lg text-citadel-cream/60">
              The wealthiest investors allocate beyond stocks and bonds. We provide 
              research, guidance, and vetted partners across six alternative asset 
              classes. Free to explore, no account required.
            </p>
          </div>
          <TalkToExpertButton variant="primary" />
        </div>

        {/* Sectors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectors.map((sector) => (
            <div
              key={sector.title}
              className={`card-elevated border-l-4 ${sector.borderColor} group`}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className={`p-3 rounded-xl ${sector.bgColor}`}>
                  <sector.icon className={`w-6 h-6 ${sector.color}`} />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold text-citadel-cream">
                    {sector.title}
                  </h3>
                  <p className={`text-sm ${sector.color}`}>{sector.subtitle}</p>
                </div>
              </div>

              <p className="text-citadel-cream/60 mb-4 text-sm">
                {sector.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {sector.links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="inline-flex items-center gap-1 px-3 py-1.5 text-sm bg-citadel-slate rounded-lg text-citadel-cream/70 hover:text-citadel-gold hover:bg-citadel-slate/80 transition-colors"
                  >
                    {link.label}
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                ))}
              </div>

              <div className="pt-4 border-t border-citadel-border">
                <span className="text-xs text-citadel-cream/40">Partner: {sector.target}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
