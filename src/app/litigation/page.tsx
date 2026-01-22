'use client'

import Link from 'next/link'
import { ArrowRight, Scale, TrendingUp, Shield, Clock, DollarSign, BarChart } from 'lucide-react'
import { TalkToExpertButton } from '@/components/TalkToExpertButton'

const caseTypes = [
  {
    type: 'Commercial Litigation',
    description: 'Business disputes, contract breaches, and corporate claims',
    avgDuration: '2 to 4 years',
    targetReturn: '15 to 20%',
  },
  {
    type: 'Patent Litigation',
    description: 'Intellectual property infringement cases',
    avgDuration: '3 to 5 years',
    targetReturn: '18 to 25%',
  },
  {
    type: 'Arbitration',
    description: 'International and domestic arbitration proceedings',
    avgDuration: '1 to 3 years',
    targetReturn: '12 to 18%',
  },
]

const benefits = [
  {
    icon: TrendingUp,
    title: 'Uncorrelated Returns',
    description: 'Case outcomes are driven by legal merit, not market conditions. Zero correlation to stocks.',
  },
  {
    icon: Shield,
    title: 'Asset Backed',
    description: 'Investments are secured by legal claims with quantifiable value based on case merits.',
  },
  {
    icon: BarChart,
    title: 'Attractive Yields',
    description: 'Target returns of 15 to 25% annually, with diversification across multiple cases.',
  },
  {
    icon: Clock,
    title: 'Defined Timeline',
    description: 'Most cases resolve within 2 to 4 years, providing clearer exit visibility than other alternatives.',
  },
]

export default function LitigationPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="section-padding gradient-hero">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 mb-6">
                <Scale className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-blue-400">Partner: Yieldstreet</span>
              </div>
              
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-citadel-cream mb-6 leading-tight">
                Invest in<br />
                <span className="text-blue-400">Litigation Finance</span>
              </h1>
              
              <p className="text-xl text-citadel-cream/60 leading-relaxed mb-8">
                Fund commercial lawsuits and earn returns when cases settle or win. 
                A truly uncorrelated asset class backed by legal claims.
              </p>

              <div className="flex flex-wrap gap-4">
                <TalkToExpertButton variant="primary" />
                <Link href="/litigation/guide" className="btn-secondary group">
                  How It Works
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl border border-blue-500/30 flex items-center justify-center">
                <div className="text-center p-8">
                  <Scale className="w-24 h-24 text-blue-400 mx-auto mb-4" />
                  <p className="text-citadel-cream/60">Legal Claims Portfolio</p>
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
              { value: '15-25%', label: 'Target Returns' },
              { value: '0.0', label: 'Market Correlation' },
              { value: '$10K', label: 'Minimum Investment' },
              { value: '2-4 yrs', label: 'Avg Case Duration' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-mono text-2xl md:text-3xl text-blue-400 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-citadel-cream/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-citadel-black">
        <div className="container-custom">
          <div className="max-w-3xl mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-citadel-cream mb-4">
              How Litigation Finance Works
            </h2>
            <p className="text-citadel-cream/60">
              Companies or law firms with strong legal claims need capital to pursue 
              cases. Investors provide funding in exchange for a share of any settlement or judgment.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Case Selection', desc: 'Legal experts evaluate cases for merit, liability, and collectability.' },
              { step: '02', title: 'Funding', desc: 'Investors provide capital to cover legal costs and expenses.' },
              { step: '03', title: 'Litigation', desc: 'Case proceeds through legal system toward resolution.' },
              { step: '04', title: 'Distribution', desc: 'When case settles or wins, investors receive their share of proceeds.' },
            ].map((item) => (
              <div key={item.step} className="card text-center">
                <div className="font-mono text-3xl text-blue-400 mb-4">{item.step}</div>
                <h3 className="font-serif text-lg font-semibold text-citadel-cream mb-2">{item.title}</h3>
                <p className="text-sm text-citadel-cream/60">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-citadel-charcoal">
        <div className="container-custom">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-citadel-cream mb-12">
            Why Litigation Finance?
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="card">
                <benefit.icon className="w-8 h-8 text-blue-400 mb-4" />
                <h3 className="font-serif text-xl font-semibold text-citadel-cream mb-2">
                  {benefit.title}
                </h3>
                <p className="text-citadel-cream/60">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Types */}
      <section className="section-padding bg-citadel-black">
        <div className="container-custom">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-citadel-cream mb-12">
            Types of Cases
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {caseTypes.map((caseType) => (
              <div key={caseType.type} className="card">
                <h3 className="font-serif text-xl font-semibold text-citadel-cream mb-2">
                  {caseType.type}
                </h3>
                <p className="text-citadel-cream/60 text-sm mb-4">{caseType.description}</p>
                <div className="flex justify-between text-sm pt-4 border-t border-citadel-border">
                  <div>
                    <span className="text-citadel-cream/50">Duration</span>
                    <div className="font-mono text-citadel-cream">{caseType.avgDuration}</div>
                  </div>
                  <div className="text-right">
                    <span className="text-citadel-cream/50">Target Return</span>
                    <div className="font-mono text-blue-400">{caseType.targetReturn}</div>
                  </div>
                </div>
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
              Explore Litigation Finance
            </h2>
            <p className="text-citadel-cream/60 mb-8">
              Talk to our team to learn about current opportunities and whether 
              litigation finance fits your portfolio.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <TalkToExpertButton variant="primary" />
              <Link href="/litigation/guide" className="btn-secondary">
                Read the Guide
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

