'use client'

import Link from 'next/link'
import { ArrowRight, Building2, TrendingUp, Shield, Globe, DollarSign, Plane } from 'lucide-react'
import { TalkToExpertButton } from '@/components/TalkToExpertButton'

const benefits = [
  {
    icon: DollarSign,
    title: 'Zero Income Tax',
    description: 'No tax on rental income or capital gains. Keep 100% of your investment returns.',
  },
  {
    icon: TrendingUp,
    title: '7 to 10% Rental Yields',
    description: 'Dubai offers some of the highest rental yields of any major global city.',
  },
  {
    icon: Shield,
    title: 'Freehold Ownership',
    description: 'Foreign investors can own property outright in designated freehold zones.',
  },
  {
    icon: Plane,
    title: 'Golden Visa Eligible',
    description: 'Properties over AED 2M qualify for 10 year residency visas for you and family.',
  },
]

const areas = [
  {
    name: 'Dubai Marina',
    type: 'Waterfront Living',
    avgPrice: '$400 to $600 per sqft',
    yield: '6.5 to 7.5%',
  },
  {
    name: 'Downtown Dubai',
    type: 'Burj Khalifa Area',
    avgPrice: '$500 to $800 per sqft',
    yield: '5.5 to 6.5%',
  },
  {
    name: 'JVC / JVT',
    type: 'Family Communities',
    avgPrice: '$200 to $350 per sqft',
    yield: '7.5 to 9%',
  },
  {
    name: 'Business Bay',
    type: 'Central Business',
    avgPrice: '$350 to $500 per sqft',
    yield: '6 to 7.5%',
  },
]

export default function DubaiRealEstatePage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="section-padding gradient-hero">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 mb-6">
                <Building2 className="w-4 h-4 text-green-400" />
                <span className="text-sm text-green-400">Tax Free Investment</span>
              </div>
              
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-citadel-cream mb-6 leading-tight">
                Invest in<br />
                <span className="text-green-400">Dubai Real Estate</span>
              </h1>
              
              <p className="text-xl text-citadel-cream/60 leading-relaxed mb-8">
                Zero income tax, high rental yields, and golden visa eligibility. 
                Dubai offers one of the most attractive property investment environments 
                in the world.
              </p>

              <div className="flex flex-wrap gap-4">
                <TalkToExpertButton variant="primary" />
                <Link href="/global/transfers" className="btn-secondary group">
                  Transfer Funds
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl border border-green-500/30 flex items-center justify-center">
                <div className="text-center p-8">
                  <Building2 className="w-24 h-24 text-green-400 mx-auto mb-4" />
                  <p className="text-citadel-cream/60">Dubai Property Portfolio</p>
                </div>
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
              { value: '0%', label: 'Income Tax' },
              { value: '7-10%', label: 'Rental Yields' },
              { value: '10yr', label: 'Golden Visa' },
              { value: '$250K+', label: 'Entry Point' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-mono text-2xl md:text-3xl text-green-400 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-citadel-cream/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-citadel-black">
        <div className="container-custom">
          <div className="max-w-3xl mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-citadel-cream mb-4">
              Why Dubai?
            </h2>
            <p className="text-citadel-cream/60">
              Dubai has become a global hub for investors seeking tax efficient 
              real estate with strong fundamentals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="card">
                <benefit.icon className="w-8 h-8 text-green-400 mb-4" />
                <h3 className="font-serif text-xl font-semibold text-citadel-cream mb-2">
                  {benefit.title}
                </h3>
                <p className="text-citadel-cream/60">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Areas */}
      <section className="section-padding bg-citadel-charcoal">
        <div className="container-custom">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-citadel-cream mb-12">
            Popular Investment Areas
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {areas.map((area) => (
              <div key={area.name} className="card">
                <h3 className="font-serif text-xl font-semibold text-citadel-cream mb-1">
                  {area.name}
                </h3>
                <p className="text-sm text-green-400 mb-4">{area.type}</p>
                <div className="space-y-2 pt-4 border-t border-citadel-border text-sm">
                  <div className="flex justify-between">
                    <span className="text-citadel-cream/50">Avg Price</span>
                    <span className="font-mono text-citadel-cream">{area.avgPrice}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-citadel-cream/50">Yield</span>
                    <span className="font-mono text-green-400">{area.yield}</span>
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
            How to Buy Property in Dubai
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Choose Property', desc: 'Select from off plan or ready properties in freehold zones' },
              { step: '02', title: 'Transfer Funds', desc: 'Move money to Dubai using our optimized transfer partners' },
              { step: '03', title: 'Sign & Pay', desc: 'Execute SPA, pay deposit, and complete registration' },
              { step: '04', title: 'Manage', desc: 'Rent out or hold. Property management available.' },
            ].map((item) => (
              <div key={item.step} className="card text-center">
                <div className="font-mono text-3xl text-green-400 mb-4">{item.step}</div>
                <h3 className="font-serif text-lg font-semibold text-citadel-cream mb-2">{item.title}</h3>
                <p className="text-sm text-citadel-cream/60">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Money Transfer CTA */}
      <section className="section-padding bg-citadel-charcoal">
        <div className="container-custom">
          <div className="card border-green-500/30 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <Globe className="w-8 h-8 text-green-400 mb-4" />
                <h3 className="font-serif text-2xl font-semibold text-citadel-cream mb-4">
                  Need to Transfer Funds?
                </h3>
                <p className="text-citadel-cream/60 mb-6">
                  Moving money internationally? Compare rates and save thousands 
                  on your Dubai property purchase through our transfer partners.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/global/transfers" className="btn-primary">
                    Compare Transfer Rates
                  </Link>
                  <Link href="/tools/transfer-calculator" className="btn-secondary">
                    Transfer Calculator
                  </Link>
                </div>
              </div>
              <div className="text-center">
                <div className="text-sm text-citadel-cream/50 mb-2">Partner Sites</div>
                <div className="space-y-2">
                  <div className="font-mono text-citadel-cream">moneytransfercomparison.com</div>
                  <div className="font-mono text-citadel-cream">topmoneycompare.co.uk</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-citadel-black">
        <div className="container-custom">
          <div className="card gold-glow max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-citadel-cream mb-4">
              Ready to Invest in Dubai?
            </h2>
            <p className="text-citadel-cream/60 mb-8">
              Talk to our team about property opportunities, financing options, 
              and the golden visa program.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <TalkToExpertButton variant="primary" />
              <Link href="/global/transfers" className="btn-secondary">
                Transfer Funds
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

