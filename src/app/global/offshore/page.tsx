'use client'

import Link from 'next/link'
import { ArrowRight, Globe, Shield, Building, Wallet, TrendingUp, Lock } from 'lucide-react'
import { TalkToExpertButton } from '@/components/TalkToExpertButton'

const reasons = [
  {
    icon: Shield,
    title: 'Diversification',
    description: 'Reduce exposure to any single currency, banking system, or political jurisdiction.',
  },
  {
    icon: Globe,
    title: 'Currency Hedging',
    description: 'Hold assets in multiple currencies to protect against USD depreciation.',
  },
  {
    icon: Lock,
    title: 'Asset Protection',
    description: 'Certain jurisdictions offer stronger creditor protection and privacy.',
  },
  {
    icon: TrendingUp,
    title: 'Investment Access',
    description: 'Access investment opportunities not available in your home country.',
  },
]

const options = [
  {
    name: 'HSBC Expat',
    location: 'Jersey, Channel Islands',
    minDeposit: '$50,000',
    currencies: 'USD, EUR, GBP, +15 more',
    features: ['Multi-currency accounts', 'Online banking', 'Debit card', 'FATCA compliant'],
  },
  {
    name: 'Singapore Banks',
    location: 'Singapore',
    minDeposit: '$200,000',
    currencies: 'USD, SGD, EUR, +10 more',
    features: ['Strong jurisdiction', 'Wealth management', 'Investment access', 'Privacy'],
  },
  {
    name: 'Interactive Brokers',
    location: 'Multi-jurisdiction',
    minDeposit: 'No minimum',
    currencies: '24 currencies',
    features: ['Brokerage + banking', 'Low FX fees', 'Global investing', 'US regulated'],
  },
]

export default function OffshorePage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="section-padding gradient-hero">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 mb-6">
                <Globe className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-blue-400">International Diversification</span>
              </div>
              
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-citadel-cream mb-6 leading-tight">
                Store Funds<br />
                <span className="text-blue-400">Abroad</span>
              </h1>
              
              <p className="text-xl text-citadel-cream/60 leading-relaxed mb-8">
                Diversify beyond your home country. Multi-currency accounts, 
                international banking, and global investment access through 
                compliant channels.
              </p>

              <div className="flex flex-wrap gap-4">
                <TalkToExpertButton variant="primary" />
                <Link href="/global/hsbc-expat" className="btn-secondary group">
                  HSBC Expat Guide
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl border border-blue-500/30 flex items-center justify-center">
                <div className="text-center p-8">
                  <Globe className="w-24 h-24 text-blue-400 mx-auto mb-4" />
                  <p className="text-citadel-cream/60">Global Banking Access</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Offshore */}
      <section className="section-padding bg-citadel-black">
        <div className="container-custom">
          <div className="max-w-3xl mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-citadel-cream mb-4">
              Why Hold Assets Internationally?
            </h2>
            <p className="text-citadel-cream/60">
              International banking is legal and can be a smart part of a diversified 
              wealth strategy. Here are the main reasons investors look abroad.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {reasons.map((reason) => (
              <div key={reason.title} className="card">
                <reason.icon className="w-8 h-8 text-blue-400 mb-4" />
                <h3 className="font-serif text-xl font-semibold text-citadel-cream mb-2">
                  {reason.title}
                </h3>
                <p className="text-citadel-cream/60">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Options */}
      <section className="section-padding bg-citadel-charcoal">
        <div className="container-custom">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-citadel-cream mb-12">
            Banking Options for US Investors
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {options.map((option) => (
              <div key={option.name} className="card">
                <h3 className="font-serif text-xl font-semibold text-citadel-cream mb-1">
                  {option.name}
                </h3>
                <p className="text-sm text-blue-400 mb-4">{option.location}</p>
                
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-citadel-cream/50">Minimum</span>
                    <span className="font-mono text-citadel-cream">{option.minDeposit}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-citadel-cream/50">Currencies</span>
                    <span className="text-citadel-cream">{option.currencies}</span>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-citadel-border">
                  <div className="text-xs text-citadel-cream/50 mb-2">Features</div>
                  <div className="flex flex-wrap gap-1">
                    {option.features.map((feature) => (
                      <span key={feature} className="text-xs px-2 py-0.5 bg-citadel-slate rounded text-citadel-cream/70">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Note */}
      <section className="section-padding bg-citadel-black">
        <div className="container-custom">
          <div className="card border-amber-500/30 max-w-3xl mx-auto">
            <div className="flex items-start gap-4">
              <Shield className="w-8 h-8 text-amber-400 flex-shrink-0" />
              <div>
                <h3 className="font-serif text-xl font-semibold text-citadel-cream mb-2">
                  Compliance is Mandatory
                </h3>
                <p className="text-citadel-cream/60 mb-4">
                  US citizens must report foreign accounts exceeding $10,000 via FBAR and 
                  may need to file Form 8938. All income is taxable regardless of where 
                  earned. We only recommend FATCA-compliant institutions.
                </p>
                <Link href="/research/international-banking-guide" className="text-amber-400 text-sm hover:underline">
                  Read our compliance guide →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-citadel-charcoal">
        <div className="container-custom">
          <div className="card gold-glow max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-citadel-cream mb-4">
              Ready to Diversify Internationally?
            </h2>
            <p className="text-citadel-cream/60 mb-8">
              Talk to our team about opening international accounts and structuring 
              your global wealth strategy compliantly.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <TalkToExpertButton variant="primary" />
              <Link href="/global/hsbc-expat" className="btn-secondary">
                HSBC Expat Details
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

