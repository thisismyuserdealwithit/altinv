'use client'

import Link from 'next/link'
import { ArrowRight, Briefcase, TrendingUp, DollarSign, Users, Building, Wrench } from 'lucide-react'
import { TalkToExpertButton } from '@/components/TalkToExpertButton'

const businessTypes = [
  {
    icon: Wrench,
    type: 'Home Services',
    examples: 'HVAC, Plumbing, Electrical, Roofing',
    avgRevenue: '$1M to $5M',
    avgMultiple: '2.5x to 4x SDE',
  },
  {
    icon: Building,
    type: 'B2B Services',
    examples: 'IT Services, Marketing Agencies, Staffing',
    avgRevenue: '$2M to $10M',
    avgMultiple: '3x to 5x SDE',
  },
  {
    icon: Users,
    type: 'Healthcare Services',
    examples: 'Dental Practices, Med Spas, PT Clinics',
    avgRevenue: '$1M to $8M',
    avgMultiple: '4x to 7x SDE',
  },
]

const benefits = [
  {
    icon: DollarSign,
    title: 'Proven Cash Flow',
    description: 'Acquire businesses with years of operating history and predictable revenue streams.',
  },
  {
    icon: TrendingUp,
    title: '20 to 40% Cash on Cash',
    description: 'Owner operated businesses can generate substantial returns on invested equity.',
  },
  {
    icon: Users,
    title: 'Seller Financing',
    description: 'Many sellers finance 20 to 30% of the purchase price, reducing upfront capital needs.',
  },
  {
    icon: Briefcase,
    title: 'SBA Loans Available',
    description: 'Government backed loans cover up to 90% of acquisition cost with favorable terms.',
  },
]

export default function AcquisitionsPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="section-padding gradient-hero">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 mb-4 sm:mb-6">
                <Briefcase className="w-3 h-3 sm:w-4 sm:h-4 text-amber-400" />
                <span className="text-xs sm:text-sm text-amber-400">Main Street M&A</span>
              </div>
              
              <h1 className="font-serif text-section-title sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-citadel-cream mb-4 sm:mb-6 leading-tight">
                Acquire a<br />
                <span className="text-amber-400">Profitable Business</span>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl text-citadel-cream/70 leading-relaxed mb-6 sm:mb-8">
                Buy an existing business with proven cash flow. Plumbing companies, 
                HVAC firms, professional services. Entrepreneurship without starting from zero.
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                <TalkToExpertButton variant="primary" />
                <Link href="/acquisitions/guide" className="btn-secondary group">
                  Acquisition Guide
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="relative order-1 lg:order-2">
              <div className="aspect-video sm:aspect-square rounded-2xl overflow-hidden border border-amber-500/30 shadow-2xl shadow-amber-500/10">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover scale-105"
                >
                  <source src="/videos/acquisitions.mp4" type="video/mp4" />
                </video>
                {/* Gold/Amber shimmer overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-citadel-gold/15 via-transparent to-amber-500/10 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-t from-citadel-black/30 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-8 bg-citadel-charcoal border-y border-citadel-border">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '20-40%', label: 'Target Cash on Cash' },
              { value: '10-20%', label: 'Down Payment' },
              { value: '$500K-5M', label: 'Typical Deal Size' },
              { value: '10,000+', label: 'Businesses for Sale' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-mono text-2xl md:text-3xl text-amber-400 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-citadel-cream/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Buy a Business */}
      <section className="section-padding bg-citadel-black">
        <div className="container-custom">
          <div className="max-w-3xl mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-citadel-cream mb-4">
              Why Buy Instead of Build?
            </h2>
            <p className="text-citadel-cream/60">
              Acquiring an existing business eliminates startup risk. You get customers, 
              revenue, employees, and systems from day one.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="card">
                <benefit.icon className="w-8 h-8 text-amber-400 mb-4" />
                <h3 className="font-serif text-xl font-semibold text-citadel-cream mb-2">
                  {benefit.title}
                </h3>
                <p className="text-citadel-cream/60">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Types */}
      <section className="section-padding bg-citadel-charcoal">
        <div className="container-custom">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-citadel-cream mb-12">
            Popular Business Types
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {businessTypes.map((biz) => (
              <div key={biz.type} className="card">
                <biz.icon className="w-8 h-8 text-amber-400 mb-4" />
                <h3 className="font-serif text-xl font-semibold text-citadel-cream mb-2">
                  {biz.type}
                </h3>
                <p className="text-citadel-cream/60 text-sm mb-4">{biz.examples}</p>
                <div className="space-y-2 pt-4 border-t border-citadel-border text-sm">
                  <div className="flex justify-between">
                    <span className="text-citadel-cream/50">Typical Revenue</span>
                    <span className="font-mono text-citadel-cream">{biz.avgRevenue}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-citadel-cream/50">Valuation</span>
                    <span className="font-mono text-amber-400">{biz.avgMultiple}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Process */}
      <section className="section-padding bg-citadel-black">
        <div className="container-custom">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-citadel-cream mb-12">
            The Acquisition Process
          </h2>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              { step: '01', title: 'Search', desc: 'Identify businesses matching your criteria and budget' },
              { step: '02', title: 'Analysis', desc: 'Review financials, operations, and growth potential' },
              { step: '03', title: 'LOI', desc: 'Submit Letter of Intent and negotiate key terms' },
              { step: '04', title: 'Due Diligence', desc: 'Deep dive on legal, financial, and operational details' },
              { step: '05', title: 'Close', desc: 'Finalize financing, sign docs, take ownership' },
            ].map((item) => (
              <div key={item.step} className="card text-center">
                <div className="font-mono text-2xl text-amber-400 mb-3">{item.step}</div>
                <h3 className="font-serif text-lg font-semibold text-citadel-cream mb-2">{item.title}</h3>
                <p className="text-xs text-citadel-cream/60">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-citadel-charcoal">
        <div className="container-custom">
          <div className="card gold-glow max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-citadel-cream mb-4">
              Ready to Acquire a Business?
            </h2>
            <p className="text-citadel-cream/60 mb-8">
              Talk to our team about finding and financing your first acquisition. 
              We connect you with brokers, lenders, and advisors.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <TalkToExpertButton variant="primary" />
              <Link href="/acquisitions/guide" className="btn-secondary">
                Read the Guide
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

