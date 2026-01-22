import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Globe, Landmark, Wallet, Shield, Plane, CreditCard, Bitcoin, FileCheck } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Global Liquidity | International Banking & Transfers | Alt-Wealth Citadel',
  description: 'Move money across borders efficiently. HSBC Expat banking, international wire transfers, multi-currency accounts, and residency planning for global citizens.',
  keywords: 'international money transfer, expat banking, HSBC expat, offshore accounts, golden visa, citizenship by investment, wise transfer, multi-currency',
}

const services = [
  {
    icon: Landmark,
    name: 'HSBC Expat Banking',
    tag: 'Our Service',
    description: 'Premier offshore banking for global citizens. USD, GBP, EUR accounts with preferential rates and dedicated relationship managers.',
    features: ['Multi-currency accounts', 'Preferential FX rates', 'Global ATM access', 'Dedicated RM'],
    cta: 'Apply Now',
    href: '/global/hsbc-expat',
    highlight: true,
  },
  {
    icon: Globe,
    name: 'International Transfers',
    tag: 'Our Service',
    description: 'Move large sums across borders with institutional-grade execution. Better rates than banks, full compliance, dedicated support.',
    features: ['$50K+ transfers', 'Same-day execution', 'Locked rates', '50+ currencies'],
    cta: 'Get Quote',
    href: '/global/transfers',
    highlight: true,
  },
  {
    icon: Wallet,
    name: 'Multi-Currency Wallets',
    tag: 'Partner',
    description: 'Hold and exchange 40+ currencies with real exchange rates. Perfect for smaller amounts and everyday international spending.',
    features: ['Real FX rates', 'Instant transfers', 'Physical cards', 'App-based'],
    cta: 'Compare Options',
    href: '/global/wallets',
    highlight: false,
  },
  {
    icon: Plane,
    name: 'Residency & Citizenship',
    tag: 'Partner',
    description: 'Golden visas, investor visas, and citizenship by investment. Portugal, Malta, Caribbean, and 15+ jurisdictions.',
    features: ['Visa-free travel', 'Tax optimization', 'Plan B passport', 'Family inclusion'],
    cta: 'Explore Programs',
    href: '/global/residency',
    highlight: false,
  },
]

const corridors = [
  { from: 'USD', to: 'GBP', rate: '0.7892', savings: '2.1%' },
  { from: 'USD', to: 'EUR', rate: '0.9234', savings: '1.8%' },
  { from: 'USD', to: 'CAD', rate: '1.3567', savings: '1.5%' },
  { from: 'GBP', to: 'EUR', rate: '1.1698', savings: '1.9%' },
  { from: 'USD', to: 'CHF', rate: '0.8845', savings: '2.3%' },
  { from: 'USD', to: 'AUD', rate: '1.5234', savings: '1.7%' },
]

export default function GlobalPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="section-padding gradient-hero">
        <div className="container-custom">
          <div className="max-w-3xl">
            <p className="text-blue-400 uppercase tracking-[0.2em] text-sm font-medium mb-4">
              Global Liquidity
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-citadel-cream mb-6 leading-tight">
              Move Money.<br />Cross Borders.<br />Stay Compliant.
            </h1>
            <p className="text-xl text-citadel-cream/60 leading-relaxed mb-8">
              Your wealth shouldn't be trapped in one jurisdiction. Whether you're 
              buying property abroad, paying international suppliers, or building 
              a global financial footprint—we make cross-border finance seamless.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="#services" className="btn-primary">
                Explore Services
              </Link>
              <Link href="/tools/transfer-calculator" className="btn-secondary">
                Calculate Transfer
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Live Rates Ticker */}
      <section className="py-6 bg-citadel-charcoal border-y border-citadel-border overflow-hidden">
        <div className="flex animate-scroll gap-12">
          {[...corridors, ...corridors].map((corridor, i) => (
            <div key={i} className="flex items-center gap-4 whitespace-nowrap">
              <span className="font-mono text-citadel-cream">{corridor.from}/{corridor.to}</span>
              <span className="font-mono text-lg text-citadel-gold">{corridor.rate}</span>
              <span className="text-xs text-green-400">Save {corridor.savings}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="section-padding bg-citadel-black">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-citadel-cream mb-4">
              Global Financial Services
            </h2>
            <p className="text-citadel-cream/60">
              From opening offshore accounts to moving seven figures across 
              borders—we've built the infrastructure for global wealth.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {services.map((service) => (
              <Link
                key={service.name}
                href={service.href}
                className={`card-elevated group ${service.highlight ? 'gold-glow' : ''}`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`p-3 rounded-xl ${service.highlight ? 'bg-citadel-gold/20' : 'bg-citadel-slate'}`}>
                      <service.icon className={`w-6 h-6 ${service.highlight ? 'text-citadel-gold' : 'text-citadel-cream/70'}`} />
                    </div>
                    <div>
                      <span className={`text-xs uppercase tracking-wide ${service.highlight ? 'text-citadel-gold' : 'text-citadel-cream/50'}`}>
                        {service.tag}
                      </span>
                      <h3 className="font-serif text-xl font-semibold text-citadel-cream group-hover:text-citadel-gold transition-colors">
                        {service.name}
                      </h3>
                    </div>
                  </div>
                </div>

                <p className="text-citadel-cream/60 mb-4">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {service.features.map((feature) => (
                    <span key={feature} className="px-2 py-1 text-xs bg-citadel-slate rounded text-citadel-cream/70">
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-citadel-border">
                  <span className="text-sm text-citadel-gold">{service.cta}</span>
                  <ArrowRight className="w-5 h-5 text-citadel-cream/30 group-hover:text-citadel-gold group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Transfer Calculator Preview */}
      <section className="section-padding bg-citadel-charcoal">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-citadel-cream mb-6">
                Save on Every Transfer
              </h2>
              <p className="text-citadel-cream/70 mb-6">
                Banks charge 3-5% hidden in their exchange rates. We charge a flat 
                0.5-1% with transparent mid-market rates. On a $100,000 transfer, 
                that's $2,000-4,000 back in your pocket.
              </p>
              
              <div className="space-y-4">
                {[
                  { label: 'Transparent pricing', desc: 'See exactly what you pay—no hidden fees' },
                  { label: 'Locked rates', desc: 'Lock your rate for 24-72 hours' },
                  { label: 'Compliance included', desc: 'Full KYC/AML, source of funds documentation' },
                  { label: 'Dedicated support', desc: 'Direct line to your transfer specialist' },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-citadel-gold/20 flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-citadel-gold" />
                    </div>
                    <div>
                      <div className="font-medium text-citadel-cream">{item.label}</div>
                      <div className="text-sm text-citadel-cream/60">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="card gold-glow">
              <h3 className="font-serif text-xl font-semibold text-citadel-cream mb-6">
                Quick Quote
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-citadel-cream/70 mb-2">You Send</label>
                  <div className="flex">
                    <input 
                      type="text" 
                      defaultValue="100,000"
                      className="flex-1 bg-citadel-slate border border-citadel-border rounded-l-lg px-4 py-3 text-citadel-cream font-mono focus:outline-none focus:border-citadel-gold"
                    />
                    <select className="bg-citadel-slate border border-l-0 border-citadel-border rounded-r-lg px-4 py-3 text-citadel-cream focus:outline-none">
                      <option>USD</option>
                      <option>GBP</option>
                      <option>EUR</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-citadel-cream/70 mb-2">Recipient Gets</label>
                  <div className="flex">
                    <input 
                      type="text" 
                      defaultValue="78,920"
                      className="flex-1 bg-citadel-slate border border-citadel-border rounded-l-lg px-4 py-3 text-citadel-cream font-mono focus:outline-none focus:border-citadel-gold"
                      readOnly
                    />
                    <select className="bg-citadel-slate border border-l-0 border-citadel-border rounded-r-lg px-4 py-3 text-citadel-cream focus:outline-none">
                      <option>GBP</option>
                      <option>EUR</option>
                      <option>CAD</option>
                    </select>
                  </div>
                </div>
                <div className="py-4 border-t border-citadel-border">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-citadel-cream/60">Exchange rate</span>
                    <span className="font-mono text-citadel-cream">1 USD = 0.7892 GBP</span>
                  </div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-citadel-cream/60">Our fee</span>
                    <span className="font-mono text-citadel-cream">$500 (0.5%)</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-citadel-cream/60">You save vs bank</span>
                    <span className="font-mono text-green-400">~$2,500</span>
                  </div>
                </div>
                <Link href="/global/transfers" className="btn-primary w-full text-center">
                  Get Exact Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Banking Section */}
      <section className="section-padding bg-citadel-black">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Landmark className="w-12 h-12 text-citadel-gold mx-auto mb-4" />
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-citadel-cream mb-4">
                HSBC Expat Banking
              </h2>
              <p className="text-citadel-cream/60">
                The gold standard in offshore banking. Available to residents of 
                100+ countries with £50,000+ in deposits or investments.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {[
                { title: 'Premier Account', desc: 'Full-service banking with dedicated RM', min: '£50,000' },
                { title: 'Advance Account', desc: 'Digital-first with competitive rates', min: '£25,000' },
                { title: 'Global Money', desc: 'Multi-currency account for active managers', min: '£10,000' },
              ].map((account) => (
                <div key={account.title} className="card">
                  <h3 className="font-serif text-lg font-semibold text-citadel-cream mb-2">{account.title}</h3>
                  <p className="text-sm text-citadel-cream/60 mb-4">{account.desc}</p>
                  <div className="text-xs text-citadel-cream/50">Minimum: {account.min}</div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link href="/global/hsbc-expat" className="btn-primary">
                Check Eligibility
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Residency Programs */}
      <section className="section-padding bg-citadel-charcoal">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-citadel-cream mb-4">
              Residency & Citizenship Programs
            </h2>
            <p className="text-citadel-cream/60">
              A second passport isn't paranoia—it's prudent planning. Access 
              investment migration programs across 20+ jurisdictions.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { country: '🇵🇹 Portugal', program: 'Golden Visa', investment: '€500K+', timeline: '12-18 mo' },
              { country: '🇲🇹 Malta', program: 'Citizenship', investment: '€750K+', timeline: '14-36 mo' },
              { country: '🇦🇪 UAE', program: 'Golden Visa', investment: '$545K+', timeline: '2-4 weeks' },
              { country: '🇰🇳 St Kitts', program: 'Citizenship', investment: '$250K+', timeline: '4-6 mo' },
            ].map((program) => (
              <div key={program.country} className="card group hover:border-citadel-gold/30 transition-colors">
                <div className="text-2xl mb-3">{program.country}</div>
                <h3 className="font-serif text-lg font-semibold text-citadel-cream">{program.program}</h3>
                <div className="text-sm text-citadel-cream/60 mt-2">From {program.investment}</div>
                <div className="text-xs text-citadel-cream/50 mt-1">{program.timeline}</div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/global/residency" className="btn-secondary">
              Compare All Programs
            </Link>
          </div>
        </div>
      </section>

      {/* Compliance Note */}
      <section className="section-padding bg-citadel-black">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <FileCheck className="w-12 h-12 text-citadel-gold mx-auto mb-4" />
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-citadel-cream mb-4">
              Compliant by Design
            </h2>
            <p className="text-citadel-cream/60 mb-6">
              All our services operate within full regulatory frameworks. We work 
              with licensed entities, maintain KYC/AML procedures, and provide 
              documentation for your tax filings. No grey areas. No surprises.
            </p>
            <Link href="/compliance" className="btn-secondary">
              View Our Compliance Standards
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

