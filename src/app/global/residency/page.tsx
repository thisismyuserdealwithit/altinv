import type { Metadata } from 'next'
import Link from 'next/link'
import { Globe, MapPin, Shield, Plane, Home, DollarSign } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Global Residency & Citizenship Programs | Golden Visa Guide | Alt-Wealth Citadel',
  description: 'Explore citizenship by investment and Golden Visa programs. Strategic residency planning for global mobility, tax optimization, and asset protection.',
  keywords: 'golden visa, citizenship by investment, second passport, residency by investment, portugal golden visa, malta citizenship',
}

const programs = [
  {
    country: 'Portugal',
    program: 'Golden Visa',
    investment: 'From €500K',
    timeline: '6-12 months',
    benefits: ['EU residency', 'Path to citizenship', 'Family included', 'Minimal stay requirement'],
    status: 'Real estate route closed, funds still available',
  },
  {
    country: 'Malta',
    program: 'Citizenship by Investment',
    investment: 'From €690K',
    timeline: '12-14 months',
    benefits: ['EU citizenship', 'Visa-free to 180+ countries', 'Family included', 'Tax-efficient'],
    status: 'Active',
  },
  {
    country: 'Caribbean',
    program: 'CBI Programs',
    investment: 'From $100K',
    timeline: '3-6 months',
    benefits: ['Fast processing', 'Visa-free travel', 'Tax advantages', 'No residency requirement'],
    status: 'Active (St Kitts, Dominica, Grenada)',
  },
  {
    country: 'UAE',
    program: 'Golden Visa',
    investment: 'From $545K',
    timeline: '2-3 months',
    benefits: ['10-year residency', 'No income tax', 'Business hub', 'Family included'],
    status: 'Active',
  },
]

export default function ResidencyPage() {
  return (
    <div className="pt-20 min-h-screen bg-citadel-black">
      <section className="section-padding gradient-hero">
        <div className="container-custom">
          <div className="max-w-3xl">
            <p className="text-citadel-gold uppercase tracking-[0.2em] text-sm font-medium mb-4">
              Global Mobility
            </p>
            <h1 className="font-serif text-4xl md:text-5xl font-semibold text-citadel-cream mb-6 leading-tight">
              Global Residency & Citizenship
            </h1>
            <p className="text-xl text-citadel-cream/60 leading-relaxed mb-8">
              Strategic second residency and citizenship for enhanced mobility, 
              tax optimization, and generational wealth protection.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">
                Schedule Consultation
              </Link>
              <Link href="/research/international-banking-guide" className="btn-secondary">
                Read Our Guide
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-citadel-charcoal">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="card">
              <Plane className="w-8 h-8 text-citadel-gold mb-4" />
              <h3 className="font-serif text-xl font-semibold text-citadel-cream mb-2">
                Global Mobility
              </h3>
              <p className="text-sm text-citadel-cream/60">
                Access visa-free travel to 150+ countries with the right passport.
              </p>
            </div>
            <div className="card">
              <Shield className="w-8 h-8 text-citadel-gold mb-4" />
              <h3 className="font-serif text-xl font-semibold text-citadel-cream mb-2">
                Asset Protection
              </h3>
              <p className="text-sm text-citadel-cream/60">
                Diversify jurisdictional risk and protect generational wealth.
              </p>
            </div>
            <div className="card">
              <DollarSign className="w-8 h-8 text-citadel-gold mb-4" />
              <h3 className="font-serif text-xl font-semibold text-citadel-cream mb-2">
                Tax Optimization
              </h3>
              <p className="text-sm text-citadel-cream/60">
                Legal tax planning through strategic residency structures.
              </p>
            </div>
          </div>

          <h2 className="font-serif text-3xl font-semibold text-citadel-cream text-center mb-12">
            Featured Programs
          </h2>

          <div className="space-y-6">
            {programs.map(program => (
              <div key={program.country} className="card-elevated">
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-citadel-gold/10 flex items-center justify-center">
                      <MapPin className="w-8 h-8 text-citadel-gold" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="font-serif text-xl font-semibold text-citadel-cream">
                        {program.country}
                      </h3>
                      <span className="text-sm text-citadel-gold">{program.program}</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {program.benefits.map(benefit => (
                        <span key={benefit} className="text-xs bg-citadel-slate px-2 py-1 rounded text-citadel-cream/70">
                          {benefit}
                        </span>
                      ))}
                    </div>
                    <p className="text-sm text-citadel-cream/50">{program.status}</p>
                  </div>
                  <div className="text-center md:text-right">
                    <div className="text-xs text-citadel-cream/50 uppercase">Investment</div>
                    <div className="font-mono text-lg text-citadel-gold">{program.investment}</div>
                    <div className="text-xs text-citadel-cream/50 mt-1">{program.timeline}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-citadel-black">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl font-semibold text-citadel-cream text-center mb-8">
              Important Considerations
            </h2>
            <div className="space-y-6 text-citadel-cream/70">
              <p>
                <strong className="text-citadel-cream">US Citizens:</strong> Unlike most nationalities, 
                US citizens are taxed on worldwide income regardless of residency. Second citizenship 
                provides mobility and asset protection benefits but does not reduce US tax obligations 
                unless you renounce citizenship.
              </p>
              <p>
                <strong className="text-citadel-cream">Due Diligence:</strong> All legitimate programs 
                require extensive due diligence including background checks, source of funds verification, 
                and sometimes interviews. Be wary of any program that promises fast-tracking without 
                proper vetting.
              </p>
              <p>
                <strong className="text-citadel-cream">Professional Guidance:</strong> Work with 
                qualified immigration attorneys and tax advisors. The intersection of immigration, 
                tax, and investment law is complex and jurisdiction-specific.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-citadel-charcoal">
        <div className="container-custom text-center max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl font-semibold text-citadel-cream mb-4">
            Explore Your Options
          </h2>
          <p className="text-citadel-cream/60 mb-8">
            Connect with our network of immigration specialists for a confidential 
            consultation on your global mobility strategy.
          </p>
          <Link href="/contact" className="btn-primary">
            Request Consultation
          </Link>
        </div>
      </section>
    </div>
  )
}
