'use client'

import Link from 'next/link'
import { Mail, FileText, Phone, Check } from 'lucide-react'
import { TalkToExpertButton } from '../TalkToExpertButton'

const benefits = [
  'Weekly newsletter with market insights',
  'Free sector research brochures',
  'Exclusive partner offers',
  'Complimentary consultation call',
  'No account or payment required',
]

export function MembershipSection() {
  return (
    <section className="section-padding bg-citadel-black">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div>
            <p className="text-citadel-gold uppercase tracking-[0.2em] text-sm font-medium mb-4">
              Join Free
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-citadel-cream mb-6">
              Get Started with<br />Alternative Allocation
            </h2>
            <p className="text-lg text-citadel-cream/60 mb-8">
              Everything you need to explore alternative investments. Free newsletter, 
              research brochures, and a complimentary call with an expert. No payment 
              required, no strings attached.
            </p>

            <ul className="space-y-3 mb-8">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3 text-citadel-cream/80">
                  <Check className="w-5 h-5 text-citadel-gold flex-shrink-0" />
                  {benefit}
                </li>
              ))}
            </ul>

            <TalkToExpertButton variant="primary" />
          </div>

          {/* Right: Form Card */}
          <div className="card gold-glow">
            <h3 className="font-serif text-xl font-semibold text-citadel-cream mb-6">
              Join the Newsletter
            </h3>

            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm text-citadel-cream/70 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="John Smith"
                  className="w-full px-4 py-3 bg-citadel-slate border border-citadel-border rounded-lg text-citadel-cream placeholder:text-citadel-cream/40 focus:outline-none focus:border-citadel-gold/50"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm text-citadel-cream/70 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 bg-citadel-slate border border-citadel-border rounded-lg text-citadel-cream placeholder:text-citadel-cream/40 focus:outline-none focus:border-citadel-gold/50"
                />
              </div>

              <div>
                <label htmlFor="portfolio" className="block text-sm text-citadel-cream/70 mb-2">
                  Portfolio Size (Optional)
                </label>
                <select
                  id="portfolio"
                  className="w-full px-4 py-3 bg-citadel-slate border border-citadel-border rounded-lg text-citadel-cream focus:outline-none focus:border-citadel-gold/50"
                >
                  <option value="">Select range</option>
                  <option value="100-500">$100K to $500K</option>
                  <option value="500-1m">$500K to $1M</option>
                  <option value="1m-5m">$1M to $5M</option>
                  <option value="5m-10m">$5M to $10M</option>
                  <option value="10m+">$10M+</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full btn-primary justify-center"
              >
                <Mail className="w-4 h-4 mr-2" />
                Subscribe Free
              </button>
            </form>

            <div className="mt-6 pt-6 border-t border-citadel-border">
              <div className="grid grid-cols-2 gap-4">
                <Link
                  href="/brochures"
                  className="flex items-center gap-2 p-3 bg-citadel-slate/50 rounded-lg text-sm text-citadel-cream/70 hover:text-citadel-gold transition-colors"
                >
                  <FileText className="w-4 h-4" />
                  Free Brochures
                </Link>
                <TalkToExpertButton 
                  variant="ghost" 
                  className="flex items-center gap-2 p-3 bg-citadel-slate/50 rounded-lg text-sm text-citadel-cream/70 hover:text-citadel-gold transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  Book a Call
                </TalkToExpertButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
