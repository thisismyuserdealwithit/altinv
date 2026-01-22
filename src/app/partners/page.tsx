import type { Metadata } from 'next'
import Link from 'next/link'
import { Gem, Package, Building2, Palette, Scale, Briefcase, Globe, ArrowRight, Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Our Partners | Alternative Allocation',
  description: 'Meet the vetted partners powering Alternative Allocation across rare metals, collectibles, real estate, art, litigation finance, and more.',
}

const partners = [
  {
    name: 'Earth Rarest',
    sector: 'Rare Metals',
    icon: Gem,
    color: 'text-citadel-gold',
    url: 'earthrarest.com',
    description: 'Physical rare metal investment and secure storage. Gallium, germanium, indium, and rare earth elements.',
    link: '/metals',
  },
  {
    name: 'Colleko',
    sector: 'Collectibles',
    icon: Package,
    color: 'text-purple-400',
    url: 'colleko.com',
    description: 'Platform for investing in wine, watches, sports memorabilia, and other collectible assets.',
    link: '/collectibles',
  },
  {
    name: 'Yieldstreet',
    sector: 'Art & Litigation',
    icon: Palette,
    color: 'text-pink-400',
    url: 'yieldstreet.com',
    description: 'Alternative investment platform offering fractional art ownership and litigation finance.',
    link: '/art',
  },
  {
    name: 'Money Transfer Comparison',
    sector: 'International Transfers',
    icon: Globe,
    color: 'text-green-400',
    url: 'moneytransfercomparison.com',
    description: 'Compare rates for large international transfers. Optimized for property purchases and investments.',
    link: '/global/transfers',
  },
  {
    name: 'Top Money Compare',
    sector: 'UK Transfers',
    icon: Globe,
    color: 'text-blue-400',
    url: 'topmoneycompare.co.uk',
    description: 'UK focused money transfer comparison for international investors.',
    link: '/global/transfers',
  },
  {
    name: 'HSBC Expat',
    sector: 'Offshore Banking',
    icon: Building2,
    color: 'text-cyan-400',
    url: 'expat.hsbc.com',
    description: 'Multi-currency international banking for global investors. Jersey based.',
    link: '/global/hsbc-expat',
  },
]

export default function PartnersPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="section-padding gradient-hero">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-citadel-cream mb-6">
              Our Partners
            </h1>
            <p className="text-xl text-citadel-cream/60 leading-relaxed">
              We work with 22 vetted partners across six investment sectors. 
              Each partner is selected for track record, transparency, and 
              alignment with investor interests.
            </p>
          </div>
        </div>
      </section>

      {/* Partner Vetting */}
      <section className="py-8 bg-citadel-charcoal border-y border-citadel-border">
        <div className="container-custom">
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-citadel-gold" />
              <span className="text-citadel-cream/70">Background Verified</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-citadel-gold" />
              <span className="text-citadel-cream/70">Regulatory Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-citadel-gold" />
              <span className="text-citadel-cream/70">Track Record Reviewed</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-citadel-gold" />
              <span className="text-citadel-cream/70">Fee Transparency</span>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="section-padding bg-citadel-black">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partners.map((partner) => (
              <div key={partner.name} className="card group hover:border-citadel-gold/30 transition-colors">
                <div className="flex items-start justify-between mb-4">
                  <partner.icon className={`w-8 h-8 ${partner.color}`} />
                  <span className="text-xs text-citadel-cream/50 px-2 py-1 bg-citadel-slate rounded">
                    {partner.sector}
                  </span>
                </div>
                
                <h3 className="font-serif text-xl font-semibold text-citadel-cream mb-1 group-hover:text-citadel-gold transition-colors">
                  {partner.name}
                </h3>
                <p className="text-xs text-citadel-cream/50 font-mono mb-3">{partner.url}</p>
                <p className="text-sm text-citadel-cream/60 mb-4">{partner.description}</p>
                
                <Link href={partner.link} className="text-citadel-gold text-sm inline-flex items-center gap-1 hover:underline">
                  Learn More <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Become a Partner */}
      <section className="section-padding bg-citadel-charcoal">
        <div className="container-custom text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-citadel-cream mb-4">
            Become a Partner
          </h2>
          <p className="text-citadel-cream/60 mb-8 max-w-2xl mx-auto">
            Are you an alternative investment platform looking to reach qualified investors? 
            We are selectively adding partners who meet our vetting criteria.
          </p>
          <Link href="/contact" className="btn-primary">
            Apply to Partner
          </Link>
        </div>
      </section>
    </div>
  )
}

