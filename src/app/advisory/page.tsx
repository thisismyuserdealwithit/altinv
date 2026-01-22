import type { Metadata } from 'next'
import Link from 'next/link'
import { Layers, Shield, Calculator, Users, Building, Globe, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Advisory & Structure | Tax Planning & Wealth Strategy | Alt-Wealth Citadel',
  description: 'Expert advisory services for alternative investors. SDIRA setup, tax optimization, estate planning, and professional network access.',
  keywords: 'wealth advisory, alternative investment advisor, sdira setup, tax optimization, estate planning, financial planning',
}

const services = [
  {
    icon: Shield,
    title: 'SDIRA Setup & Strategy',
    description: 'Self-Directed IRA custodian comparison and setup guidance for tax-advantaged alternative investing.',
    href: '/advisory/sdira',
    cta: 'Compare Providers',
  },
  {
    icon: Calculator,
    title: 'Tax Optimization',
    description: 'Strategic tax planning for alternative investments including depreciation, 1031 exchanges, and more.',
    href: '/tools/sdira-calculator',
    cta: 'Calculate Savings',
  },
  {
    icon: Users,
    title: 'Canadian Advisor Network',
    description: 'Connect with vetted Canadian financial advisors specializing in alternative investments.',
    href: '/advisory/canadian-referral',
    cta: 'Request Referral',
  },
  {
    icon: Building,
    title: 'Entity Structuring',
    description: 'LLC, LP, and holding company strategies for asset protection and tax efficiency.',
    href: '/contact',
    cta: 'Learn More',
  },
  {
    icon: Globe,
    title: 'Cross-Border Planning',
    description: 'US-Canada and international wealth management for expats and global citizens.',
    href: '/global',
    cta: 'Explore Options',
  },
]

export default function AdvisoryPage() {
  return (
    <div className="pt-20 min-h-screen bg-citadel-black">
      <section className="section-padding gradient-hero">
        <div className="container-custom">
          <div className="max-w-3xl">
            <p className="text-citadel-gold uppercase tracking-[0.2em] text-sm font-medium mb-4">
              Structure & Strategy
            </p>
            <h1 className="font-serif text-4xl md:text-5xl font-semibold text-citadel-cream mb-6 leading-tight">
              Advisory & Structure
            </h1>
            <p className="text-xl text-citadel-cream/60 leading-relaxed mb-8">
              The right structure can be worth millions in tax savings and asset protection. 
              Access expert guidance and professional networks to optimize your alternative 
              investment strategy.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/tools/sdira-calculator" className="btn-primary">
                Calculate Tax Savings
              </Link>
              <Link href="/contact" className="btn-secondary">
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-citadel-charcoal">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-serif text-3xl font-semibold text-citadel-cream mb-4">
              Our Advisory Services
            </h2>
            <p className="text-citadel-cream/60">
              From SDIRA setup to complex entity structuring, we provide resources 
              and connections to help you build the optimal foundation for your 
              alternative investment portfolio.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(service => (
              <Link
                key={service.title}
                href={service.href}
                className="card-elevated group pillar-border-strategy"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-citadel-slate mb-4">
                  <service.icon className="w-6 h-6 text-red-400" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-citadel-cream group-hover:text-citadel-gold transition-colors mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-citadel-cream/60 mb-4">
                  {service.description}
                </p>
                <span className="text-sm text-citadel-gold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  {service.cta} <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-citadel-black">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl font-semibold text-citadel-cream mb-6">
                Why Structure Matters
              </h2>
              <p className="text-citadel-cream/70 leading-relaxed mb-4">
                The difference between a well-structured and poorly-structured alternative 
                investment portfolio can be millions of dollars over a lifetime. The right 
                approach considers:
              </p>
              <ul className="space-y-3 text-citadel-cream/70">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-citadel-gold mt-2"></div>
                  <span>Tax efficiency through proper account selection and entity structure</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-citadel-gold mt-2"></div>
                  <span>Asset protection via appropriate legal entities</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-citadel-gold mt-2"></div>
                  <span>Estate planning to ensure smooth generational transfer</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-citadel-gold mt-2"></div>
                  <span>Compliance with complex regulations across jurisdictions</span>
                </li>
              </ul>
            </div>
            <div className="card gold-glow">
              <h3 className="font-serif text-xl font-semibold text-citadel-cream mb-6">
                Example: SDIRA Tax Savings
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-4 border-b border-citadel-border">
                  <span className="text-citadel-cream/70">$50K investment @ 15% IRR</span>
                  <span className="text-citadel-cream">10 years</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-citadel-border">
                  <span className="text-citadel-cream/70">Taxable account (after tax)</span>
                  <span className="font-mono text-citadel-cream">$88,532</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-citadel-border">
                  <span className="text-citadel-cream/70">Roth SDIRA (tax-free)</span>
                  <span className="font-mono text-green-400">$202,278</span>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-citadel-cream font-medium">Tax Savings</span>
                  <span className="font-mono text-xl text-green-400">+$113,746</span>
                </div>
              </div>
              <Link href="/tools/sdira-calculator" className="btn-primary w-full mt-6 text-center">
                Calculate Your Savings
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-citadel-charcoal">
        <div className="container-custom text-center max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl font-semibold text-citadel-cream mb-4">
            Need Personalized Guidance?
          </h2>
          <p className="text-citadel-cream/60 mb-8">
            Our network of tax professionals, attorneys, and financial advisors 
            can help you build the optimal structure for your situation.
          </p>
          <Link href="/contact" className="btn-primary">
            Request Consultation
          </Link>
        </div>
      </section>
    </div>
  )
}
