import type { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Users, Shield, TrendingUp, Check, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Canadian Financial Advisor Referrals | Alternative Investments | Alt-Wealth Citadel',
  description: 'Connect with vetted Canadian financial advisors specializing in alternative investments, tax optimization, and cross-border wealth management.',
  keywords: 'canadian financial advisor, wealth management canada, cross-border advisor, alternative investments canada',
}

const services = [
  {
    title: 'Alternative Investment Guidance',
    description: 'Advisors who understand real estate, private equity, and non-traditional assets.',
  },
  {
    title: 'Cross-Border Planning',
    description: 'Expertise in US-Canada tax treaties and multi-jurisdictional wealth management.',
  },
  {
    title: 'Tax-Efficient Structures',
    description: 'RRSP, TFSA optimization and corporate investment strategies.',
  },
  {
    title: 'Estate Planning',
    description: 'Generational wealth transfer and succession planning expertise.',
  },
]

export default function CanadianReferralPage() {
  return (
    <div className="pt-20 min-h-screen bg-citadel-black">
      <section className="section-padding gradient-hero">
        <div className="container-custom">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-5 h-5 text-citadel-gold" />
              <p className="text-citadel-gold uppercase tracking-[0.2em] text-sm font-medium">
                Canada
              </p>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-semibold text-citadel-cream mb-6 leading-tight">
              Canadian Financial Advisor Network
            </h1>
            <p className="text-xl text-citadel-cream/60 leading-relaxed mb-8">
              Connect with vetted Canadian advisors who specialize in alternative investments 
              and sophisticated wealth management strategies.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="#request" className="btn-primary">
                Request Referral
              </Link>
              <Link href="/advisory" className="btn-secondary">
                Other Advisory Services
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
                Why Use Our Network?
              </h2>
              <p className="text-citadel-cream/70 leading-relaxed mb-4">
                Not all advisors understand alternative investments. Our network consists 
                of carefully vetted professionals who have demonstrated expertise in 
                non-traditional asset classes and sophisticated wealth strategies.
              </p>
              <p className="text-citadel-cream/70 leading-relaxed mb-6">
                Whether you're looking to diversify into private markets, optimize your 
                tax situation, or plan for cross-border considerations, our partners 
                can help you navigate the complexities.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-citadel-cream/70">
                  <Check className="w-5 h-5 text-green-400" />
                  Vetted for alternative investment expertise
                </li>
                <li className="flex items-center gap-3 text-citadel-cream/70">
                  <Check className="w-5 h-5 text-green-400" />
                  Fee-only and fiduciary options available
                </li>
                <li className="flex items-center gap-3 text-citadel-cream/70">
                  <Check className="w-5 h-5 text-green-400" />
                  No obligation consultation
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {services.map(service => (
                <div key={service.title} className="card">
                  <h3 className="font-medium text-citadel-cream mb-2">{service.title}</h3>
                  <p className="text-sm text-citadel-cream/60">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="request" className="section-padding bg-citadel-black">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-serif text-3xl font-semibold text-citadel-cream text-center mb-8">
              Request a Referral
            </h2>
            <div className="card">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-citadel-cream/70 mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full bg-citadel-slate border border-citadel-border rounded-lg px-4 py-3 text-citadel-cream focus:border-citadel-gold focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-citadel-cream/70 mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full bg-citadel-slate border border-citadel-border rounded-lg px-4 py-3 text-citadel-cream focus:border-citadel-gold focus:outline-none"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-citadel-cream/70 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full bg-citadel-slate border border-citadel-border rounded-lg px-4 py-3 text-citadel-cream focus:border-citadel-gold focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm text-citadel-cream/70 mb-2">Province</label>
                  <select className="w-full bg-citadel-slate border border-citadel-border rounded-lg px-4 py-3 text-citadel-cream focus:border-citadel-gold focus:outline-none">
                    <option>Ontario</option>
                    <option>British Columbia</option>
                    <option>Alberta</option>
                    <option>Quebec</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-citadel-cream/70 mb-2">Investable Assets</label>
                  <select className="w-full bg-citadel-slate border border-citadel-border rounded-lg px-4 py-3 text-citadel-cream focus:border-citadel-gold focus:outline-none">
                    <option>$250K - $500K</option>
                    <option>$500K - $1M</option>
                    <option>$1M - $5M</option>
                    <option>$5M+</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-citadel-cream/70 mb-2">Primary Interest</label>
                  <select className="w-full bg-citadel-slate border border-citadel-border rounded-lg px-4 py-3 text-citadel-cream focus:border-citadel-gold focus:outline-none">
                    <option>Alternative Investments</option>
                    <option>Tax Optimization</option>
                    <option>Cross-Border Planning</option>
                    <option>Estate Planning</option>
                    <option>General Wealth Management</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-citadel-cream/70 mb-2">Additional Notes</label>
                  <textarea
                    rows={4}
                    className="w-full bg-citadel-slate border border-citadel-border rounded-lg px-4 py-3 text-citadel-cream focus:border-citadel-gold focus:outline-none resize-none"
                    placeholder="Tell us about your specific needs..."
                  />
                </div>
                <button type="submit" className="btn-primary w-full">
                  Submit Request
                </button>
                <p className="text-xs text-citadel-cream/50 text-center">
                  By submitting, you agree to be contacted by a member of our network. 
                  We may receive referral compensation.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
