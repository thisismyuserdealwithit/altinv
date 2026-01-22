import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Landmark, Globe, Shield, Check, CreditCard, Phone, FileText } from 'lucide-react'

export const metadata: Metadata = {
  title: 'HSBC Expat Banking | Offshore Accounts for Global Citizens | Alt-Wealth Citadel',
  description: 'Open an HSBC Expat account for multi-currency banking, preferential rates, and global access. Requirements, benefits, and application process explained.',
  keywords: 'hsbc expat, offshore banking, expat bank account, multi-currency account, international banking, hsbc premier',
}

const accountTypes = [
  {
    name: 'Premier',
    tagline: 'Full-service wealth management',
    minDeposit: '£50,000',
    features: [
      'Dedicated Relationship Manager',
      'Premier credit card with lounge access',
      'Global View and Global Transfer',
      'Preferential foreign exchange rates',
      'Access to investment products',
      'Priority customer service',
    ],
    best: 'High-net-worth individuals seeking full banking relationship',
  },
  {
    name: 'Advance',
    tagline: 'Digital-first international banking',
    minDeposit: '£25,000',
    features: [
      'Online and mobile banking',
      'Multi-currency account',
      'Competitive FX rates',
      'International debit card',
      'No monthly fees (with balance)',
      'Self-service support',
    ],
    best: 'Digital natives who prefer managing accounts independently',
  },
]

const currencies = ['USD', 'GBP', 'EUR', 'HKD', 'SGD', 'AUD', 'CAD', 'CHF', 'JPY', 'AED']

const eligibility = [
  'UK tax resident living overseas (expat)',
  'Non-UK resident seeking offshore GBP/USD/EUR accounts',
  'Minimum deposit of £25,000 (Advance) or £50,000 (Premier)',
  'Valid passport and proof of address',
  'Source of funds documentation for larger deposits',
  'Not a US person (FATCA restrictions apply)',
]

const process = [
  {
    step: '1',
    title: 'Check Eligibility',
    description: 'Confirm you meet residency and deposit requirements. US persons face additional restrictions.',
  },
  {
    step: '2',
    title: 'Gather Documents',
    description: 'Passport, proof of address, proof of income/wealth, and source of funds documentation.',
  },
  {
    step: '3',
    title: 'Submit Application',
    description: 'Apply online or through our referral link. We\'ll ensure your application is complete.',
  },
  {
    step: '4',
    title: 'Video Verification',
    description: 'Complete identity verification via video call with HSBC team.',
  },
  {
    step: '5',
    title: 'Account Activation',
    description: 'Receive account details and fund your account. Process typically takes 2-4 weeks.',
  },
]

export default function HSBCExpatPage() {
  return (
    <div className="pt-20">
      {/* Breadcrumb */}
      <div className="bg-citadel-charcoal border-b border-citadel-border">
        <div className="container-custom py-4">
          <Link href="/global" className="inline-flex items-center gap-2 text-sm text-citadel-cream/60 hover:text-citadel-gold transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Global Liquidity
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="section-padding gradient-hero">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-citadel-gold/10 border border-citadel-gold/20 mb-6">
                <span className="w-2 h-2 rounded-full bg-citadel-gold" />
                <span className="text-sm text-citadel-gold">Our Partner</span>
              </div>
              
              <h1 className="font-serif text-4xl md:text-5xl font-semibold text-citadel-cream mb-6 leading-tight">
                HSBC Expat Banking
              </h1>
              <p className="text-xl text-citadel-cream/60 leading-relaxed mb-8">
                The gold standard for offshore banking. Hold multiple currencies, 
                transfer globally, and access your wealth from anywhere—backed by 
                one of the world's largest banking institutions.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="#apply" className="btn-primary">
                  Check Eligibility
                </Link>
                <Link href="#accounts" className="btn-secondary">
                  Compare Accounts
                </Link>
              </div>
            </div>

            {/* Key Benefits */}
            <div className="card gold-glow">
              <Landmark className="w-10 h-10 text-citadel-gold mb-6" />
              <h3 className="font-serif text-xl font-semibold text-citadel-cream mb-6">
                Why HSBC Expat?
              </h3>
              <div className="space-y-4">
                {[
                  { icon: Globe, text: 'Hold 10+ currencies in one account' },
                  { icon: Shield, text: 'Jersey-regulated, not subject to UK banking issues' },
                  { icon: CreditCard, text: 'Global ATM access with preferential rates' },
                  { icon: Phone, text: 'Dedicated relationship manager (Premier)' },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3">
                    <item.icon className="w-5 h-5 text-citadel-gold" />
                    <span className="text-citadel-cream/80">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Account Types */}
      <section id="accounts" className="section-padding bg-citadel-black">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-citadel-cream mb-4">
              Account Options
            </h2>
            <p className="text-citadel-cream/60">
              Choose based on your banking needs and relationship preferences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {accountTypes.map((account) => (
              <div key={account.name} className="card-elevated">
                <div className="mb-6">
                  <h3 className="font-serif text-2xl font-semibold text-citadel-cream">
                    HSBC Expat {account.name}
                  </h3>
                  <p className="text-citadel-gold text-sm">{account.tagline}</p>
                </div>

                <div className="mb-6">
                  <span className="text-sm text-citadel-cream/50">Minimum Deposit</span>
                  <div className="font-mono text-2xl text-citadel-cream">{account.minDeposit}</div>
                </div>

                <ul className="space-y-3 mb-6">
                  {account.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-citadel-cream/80">
                      <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="p-3 bg-citadel-slate rounded-lg mb-6">
                  <span className="text-xs text-citadel-cream/50">Best For</span>
                  <p className="text-sm text-citadel-cream/80">{account.best}</p>
                </div>

                <Link href="#apply" className="btn-primary w-full text-center">
                  Apply for {account.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Currencies */}
      <section className="section-padding bg-citadel-charcoal">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-3xl font-semibold text-citadel-cream mb-4">
              Multi-Currency Accounts
            </h2>
            <p className="text-citadel-cream/60 mb-8">
              Hold, send, and receive in major world currencies without conversion.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {currencies.map((currency) => (
                <span 
                  key={currency}
                  className="px-4 py-2 bg-citadel-slate rounded-lg font-mono text-citadel-gold"
                >
                  {currency}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="section-padding bg-citadel-black">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl font-semibold text-citadel-cream mb-6">
                Am I Eligible?
              </h2>
              <p className="text-citadel-cream/60 mb-8">
                HSBC Expat serves international clients who need offshore banking. 
                Check if you qualify:
              </p>
              <ul className="space-y-4">
                {eligibility.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-citadel-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-citadel-gold" />
                    </div>
                    <span className="text-citadel-cream/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card">
              <FileText className="w-8 h-8 text-citadel-gold mb-4" />
              <h3 className="font-serif text-xl font-semibold text-citadel-cream mb-4">
                Documents Required
              </h3>
              <ul className="space-y-3 text-citadel-cream/70">
                <li>• Valid passport (certified copy)</li>
                <li>• Proof of address (utility bill, bank statement)</li>
                <li>• Proof of income or employment</li>
                <li>• Source of funds declaration (for deposits &gt;£50K)</li>
                <li>• Tax residency self-certification</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="apply" className="section-padding bg-citadel-charcoal">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-citadel-cream mb-4">
              Application Process
            </h2>
            <p className="text-citadel-cream/60">
              We'll guide you through each step to ensure a smooth application.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {process.map((step, index) => (
                <div key={step.step} className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-full bg-citadel-gold/20 flex items-center justify-center flex-shrink-0">
                    <span className="font-mono text-xl text-citadel-gold">{step.step}</span>
                  </div>
                  <div className="flex-1 pb-6 border-b border-citadel-border last:border-0">
                    <h3 className="font-serif text-lg font-semibold text-citadel-cream mb-1">
                      {step.title}
                    </h3>
                    <p className="text-citadel-cream/60">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/contact?type=hsbc-expat" className="btn-primary">
              Start Your Application
            </Link>
            <p className="text-sm text-citadel-cream/50 mt-4">
              Or call us to discuss your eligibility: +1 (888) 555-0123
            </p>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-6 bg-citadel-black border-t border-citadel-border">
        <div className="container-custom">
          <p className="text-xs text-citadel-cream/40 text-center max-w-3xl mx-auto">
            HSBC Expat is a trading name of HSBC Bank plc, Jersey Branch, regulated by 
            the Jersey Financial Services Commission. Alt-Wealth Citadel is an 
            independent referral partner. We may receive compensation for qualified 
            referrals. Banking products are subject to eligibility and approval.
          </p>
        </div>
      </section>
    </div>
  )
}

