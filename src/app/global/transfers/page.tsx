import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Repeat, Globe, DollarSign, Clock, Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'International Money Transfers | Compare Rates & Fees | Alt-Wealth Citadel',
  description: 'Compare international money transfer providers. Find the best exchange rates and lowest fees for sending money abroad.',
  keywords: 'international money transfer, currency exchange, wire transfer, remittance, fx rates, wise, ofx',
}

const providers = [
  {
    name: 'Wise',
    description: 'Mid-market rates with transparent fees. Best for small to medium transfers.',
    features: ['No hidden fees', 'Mid-market rate', 'Multi-currency account', 'Fast transfers'],
    bestFor: 'Transfers under $100K',
  },
  {
    name: 'OFX',
    description: 'Competitive rates for larger transfers. Dedicated dealers for personalized service.',
    features: ['No transfer fees', 'Forward contracts', 'Dedicated dealer', 'Business accounts'],
    bestFor: 'Transfers over $10K',
  },
  {
    name: 'XE',
    description: 'Trusted name in currency with competitive rates and easy tracking.',
    features: ['Rate alerts', 'Mobile app', 'No transfer fees', 'Transparent pricing'],
    bestFor: 'Regular transfers',
  },
]

export default function TransfersPage() {
  return (
    <div className="pt-20 min-h-screen bg-citadel-black">
      <section className="section-padding gradient-hero">
        <div className="container-custom">
          <div className="max-w-3xl">
            <p className="text-citadel-gold uppercase tracking-[0.2em] text-sm font-medium mb-4">
              Global Liquidity
            </p>
            <h1 className="font-serif text-4xl md:text-5xl font-semibold text-citadel-cream mb-6 leading-tight">
              International Money Transfers
            </h1>
            <p className="text-xl text-citadel-cream/60 leading-relaxed mb-8">
              Move money across borders efficiently. Compare providers to find the best 
              rates and lowest fees for your international transfers.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/tools/transfer-calculator" className="btn-primary">
                Compare Rates Now
              </Link>
              <Link href="/contact" className="btn-secondary">
                Get Personal Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-citadel-charcoal">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl font-semibold text-citadel-cream mb-6">
                Why Transfer Costs Matter
              </h2>
              <p className="text-citadel-cream/70 leading-relaxed mb-4">
                Traditional bank wire transfers can cost 3-5% when you factor in fees 
                and unfavorable exchange rates. On a $100,000 transfer, that's $3,000-5,000 
                lost to the middleman.
              </p>
              <p className="text-citadel-cream/70 leading-relaxed mb-4">
                Modern transfer services offer rates much closer to the mid-market rate, 
                often saving you 80-90% compared to banks.
              </p>
              <p className="text-citadel-cream/70 leading-relaxed">
                Whether you're buying overseas property, paying international vendors, 
                or managing multi-currency investments, optimizing your transfer costs 
                can save thousands annually.
              </p>
            </div>
            <div className="card gold-glow">
              <h3 className="font-serif text-xl font-semibold text-citadel-cream mb-6">
                Typical Savings
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-4 border-b border-citadel-border">
                  <span className="text-citadel-cream/70">$10,000 transfer</span>
                  <span className="font-mono text-green-400">Save $200-400</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-citadel-border">
                  <span className="text-citadel-cream/70">$50,000 transfer</span>
                  <span className="font-mono text-green-400">Save $1,000-2,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-citadel-cream/70">$100,000 transfer</span>
                  <span className="font-mono text-green-400">Save $2,000-4,000</span>
                </div>
              </div>
              <p className="text-xs text-citadel-cream/50 mt-4">
                Compared to typical bank wire transfer rates
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-citadel-black">
        <div className="container-custom">
          <h2 className="font-serif text-3xl font-semibold text-citadel-cream text-center mb-12">
            Recommended Providers
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {providers.map(provider => (
              <div key={provider.name} className="card-elevated">
                <h3 className="font-serif text-xl font-semibold text-citadel-cream mb-2">
                  {provider.name}
                </h3>
                <p className="text-sm text-citadel-cream/60 mb-4">
                  {provider.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {provider.features.map(feature => (
                    <li key={feature} className="text-sm text-citadel-cream/70 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-citadel-gold"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="pt-4 border-t border-citadel-border">
                  <span className="text-xs text-citadel-gold">Best for: {provider.bestFor}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-citadel-charcoal">
        <div className="container-custom text-center max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl font-semibold text-citadel-cream mb-4">
            Compare Rates Instantly
          </h2>
          <p className="text-citadel-cream/60 mb-8">
            Use our transfer calculator to compare real-time rates across providers 
            and see exactly how much arrives at the destination.
          </p>
          <Link href="/tools/transfer-calculator" className="btn-primary">
            Open Transfer Calculator
          </Link>
        </div>
      </section>
    </div>
  )
}
