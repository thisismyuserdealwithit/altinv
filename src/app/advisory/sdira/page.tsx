import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Shield, Check, DollarSign, Building } from 'lucide-react'

export const metadata: Metadata = {
  title: 'SDIRA Providers Comparison | Self-Directed IRA Custodians | Alt-Wealth Citadel',
  description: 'Compare the best Self-Directed IRA custodians for alternative investments. Fees, features, and reviews of top SDIRA providers.',
  keywords: 'sdira custodians, self directed ira providers, rocket dollar, alto ira, directed ira, checkbook ira',
}

const providers = [
  {
    name: 'Rocket Dollar',
    type: 'Checkbook IRA',
    setupFee: '$360',
    annualFee: '$180/year',
    features: ['Checkbook control', 'LLC included', 'Fast setup', 'All alternative assets'],
    bestFor: 'Active investors who want full control',
    rating: 4.8,
  },
  {
    name: 'Alto IRA',
    type: 'Custodian-Directed',
    setupFee: '$0',
    annualFee: '$0 (transaction fees apply)',
    features: ['No account fees', 'Platform integrations', 'Crypto-friendly', 'Easy interface'],
    bestFor: 'Investors using partner platforms',
    rating: 4.6,
  },
  {
    name: 'Directed IRA',
    type: 'Both options',
    setupFee: '$50-275',
    annualFee: '$295-395/year',
    features: ['Both IRA types', 'Real estate specialty', 'Checkbook option', 'Good support'],
    bestFor: 'Real estate investors',
    rating: 4.5,
  },
  {
    name: 'Equity Trust',
    type: 'Custodian-Directed',
    setupFee: '$50',
    annualFee: 'Asset-based ($225-2,250)',
    features: ['Industry veteran', 'Full service', 'All asset types', 'Educational resources'],
    bestFor: 'Investors wanting full service',
    rating: 4.3,
  },
]

export default function SDIRAProvidersPage() {
  return (
    <div className="pt-20 min-h-screen bg-citadel-black">
      <section className="section-padding gradient-hero">
        <div className="container-custom">
          <div className="max-w-3xl">
            <p className="text-citadel-gold uppercase tracking-[0.2em] text-sm font-medium mb-4">
              Structure & Strategy
            </p>
            <h1 className="font-serif text-4xl md:text-5xl font-semibold text-citadel-cream mb-6 leading-tight">
              SDIRA Provider Comparison
            </h1>
            <p className="text-xl text-citadel-cream/60 leading-relaxed mb-8">
              Choose the right Self-Directed IRA custodian for your alternative investment 
              strategy. Compare fees, features, and find the best fit.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/tools/sdira-calculator" className="btn-primary">
                Calculate Tax Savings
              </Link>
              <Link href="/research/sdira-playbook" className="btn-secondary">
                Read SDIRA Playbook
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-citadel-charcoal">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <div className="card">
              <Shield className="w-8 h-8 text-citadel-gold mb-4" />
              <h3 className="font-serif text-xl font-semibold text-citadel-cream mb-2">
                Checkbook IRA
              </h3>
              <p className="text-sm text-citadel-cream/60 mb-4">
                Your IRA owns an LLC, giving you checkbook control to make investments 
                without custodian approval for each transaction.
              </p>
              <ul className="space-y-2 text-sm text-citadel-cream/70">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-400" /> Faster transactions
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-400" /> More privacy
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-400" /> Lower per-transaction costs
                </li>
              </ul>
            </div>
            <div className="card">
              <Building className="w-8 h-8 text-citadel-blue mb-4" />
              <h3 className="font-serif text-xl font-semibold text-citadel-cream mb-2">
                Custodian-Directed
              </h3>
              <p className="text-sm text-citadel-cream/60 mb-4">
                The custodian holds assets and processes transactions. More oversight 
                and hand-holding, but less complexity to manage.
              </p>
              <ul className="space-y-2 text-sm text-citadel-cream/70">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-400" /> Less setup complexity
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-400" /> Built-in compliance checks
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-400" /> Platform integrations
                </li>
              </ul>
            </div>
          </div>

          <h2 className="font-serif text-3xl font-semibold text-citadel-cream text-center mb-8">
            Provider Comparison
          </h2>

          <div className="space-y-6">
            {providers.map(provider => (
              <div key={provider.name} className="card-elevated">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-serif text-xl font-semibold text-citadel-cream">
                        {provider.name}
                      </h3>
                      <span className="text-xs bg-citadel-slate px-2 py-1 rounded text-citadel-cream/70">
                        {provider.type}
                      </span>
                    </div>
                    <p className="text-sm text-citadel-cream/60 mb-4">
                      Best for: {provider.bestFor}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {provider.features.map(feature => (
                        <span key={feature} className="text-xs text-citadel-cream/70 flex items-center gap-1">
                          <Check className="w-3 h-3 text-green-400" />
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-xs text-citadel-cream/50 uppercase">Setup</div>
                      <div className="font-mono text-citadel-cream">{provider.setupFee}</div>
                    </div>
                    <div>
                      <div className="text-xs text-citadel-cream/50 uppercase">Annual</div>
                      <div className="font-mono text-citadel-cream">{provider.annualFee}</div>
                    </div>
                    <div>
                      <div className="text-xs text-citadel-cream/50 uppercase">Rating</div>
                      <div className="font-mono text-citadel-gold">{provider.rating}/5</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-citadel-black">
        <div className="container-custom text-center max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl font-semibold text-citadel-cream mb-4">
            Calculate Your Tax Savings
          </h2>
          <p className="text-citadel-cream/60 mb-8">
            See how much you could save by holding alternative investments in a 
            tax-advantaged SDIRA structure.
          </p>
          <Link href="/tools/sdira-calculator" className="btn-primary">
            Open SDIRA Calculator
          </Link>
        </div>
      </section>
    </div>
  )
}
