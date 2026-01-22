import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Briefcase, AlertTriangle, Check } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Business Acquisition Guide | Alternative Allocation',
  description: 'Complete guide to acquiring a small business. Learn about deal sourcing, financing, due diligence, and closing your first acquisition.',
}

export default function AcquisitionsGuidePage() {
  return (
    <div className="pt-20">
      {/* Breadcrumb */}
      <div className="bg-citadel-charcoal border-b border-citadel-border">
        <div className="container-custom py-4">
          <Link href="/acquisitions" className="inline-flex items-center gap-2 text-sm text-citadel-cream/60 hover:text-citadel-gold transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Acquisitions
          </Link>
        </div>
      </div>

      {/* Content */}
      <section className="section-padding bg-citadel-black">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Briefcase className="w-8 h-8 text-amber-400" />
              <span className="text-amber-400 uppercase tracking-[0.2em] text-sm">Guide</span>
            </div>

            <h1 className="font-serif text-3xl md:text-4xl font-semibold text-citadel-cream mb-6">
              How to Acquire a Small Business
            </h1>

            <div className="prose prose-invert prose-citadel max-w-none">
              <p className="text-lg text-citadel-cream/80 leading-relaxed mb-8">
                Buying an established business lets you skip the startup phase and 
                acquire customers, revenue, and cash flow from day one. This guide 
                covers the key steps from search to close.
              </p>

              <h2 className="font-serif text-2xl font-semibold text-citadel-cream mt-12 mb-4">
                Step 1: Define Your Criteria
              </h2>
              <p className="text-citadel-cream/70 mb-4">Before searching, clarify what you want:</p>
              <ul className="space-y-2 text-citadel-cream/70">
                <li><strong className="text-citadel-cream">Industry:</strong> What sectors interest you or match your experience?</li>
                <li><strong className="text-citadel-cream">Size:</strong> Revenue range, employee count, deal size</li>
                <li><strong className="text-citadel-cream">Location:</strong> Local, regional, or remote operation</li>
                <li><strong className="text-citadel-cream">Role:</strong> Hands on operator or passive investor with management</li>
                <li><strong className="text-citadel-cream">Budget:</strong> How much equity can you invest?</li>
              </ul>

              <h2 className="font-serif text-2xl font-semibold text-citadel-cream mt-12 mb-4">
                Step 2: Finding Deals
              </h2>
              <p className="text-citadel-cream/70 mb-4">Deal sources include:</p>
              <ul className="space-y-2 text-citadel-cream/70">
                <li><strong className="text-citadel-cream">Business Brokers:</strong> Professionals who list and sell businesses</li>
                <li><strong className="text-citadel-cream">Online Marketplaces:</strong> BizBuySell, BizQuest, Flippa</li>
                <li><strong className="text-citadel-cream">Direct Outreach:</strong> Contact owners of businesses you admire</li>
                <li><strong className="text-citadel-cream">Industry Contacts:</strong> Accountants, lawyers, and bankers know sellers</li>
              </ul>

              <h2 className="font-serif text-2xl font-semibold text-citadel-cream mt-12 mb-4">
                Step 3: Valuation Basics
              </h2>
              <p className="text-citadel-cream/70">
                Small businesses are typically valued as a multiple of Seller's Discretionary 
                Earnings (SDE), which is net profit plus owner compensation and benefits.
              </p>

              <div className="my-8 p-6 bg-citadel-charcoal rounded-xl border border-citadel-border">
                <h4 className="font-serif text-lg font-semibold text-citadel-cream mb-4">
                  Typical Valuation Multiples
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between pb-2 border-b border-citadel-border">
                    <span className="text-citadel-cream">Home Services (HVAC, Plumbing)</span>
                    <span className="font-mono text-amber-400">2.5x to 4x SDE</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-citadel-border">
                    <span className="text-citadel-cream">Professional Services</span>
                    <span className="font-mono text-amber-400">2x to 4x SDE</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-citadel-border">
                    <span className="text-citadel-cream">Manufacturing</span>
                    <span className="font-mono text-amber-400">3x to 5x SDE</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-citadel-cream">Healthcare (Dental, Med Spa)</span>
                    <span className="font-mono text-amber-400">4x to 7x SDE</span>
                  </div>
                </div>
              </div>

              <h2 className="font-serif text-2xl font-semibold text-citadel-cream mt-12 mb-4">
                Step 4: Financing the Deal
              </h2>
              <p className="text-citadel-cream/70 mb-4">Most acquisitions use a combination of:</p>
              <ul className="space-y-2 text-citadel-cream/70">
                <li><strong className="text-citadel-cream">SBA 7(a) Loan:</strong> Up to 90% LTV, 10 year terms, government guaranteed</li>
                <li><strong className="text-citadel-cream">Seller Financing:</strong> Seller carries 10 to 30% as a note</li>
                <li><strong className="text-citadel-cream">Buyer Equity:</strong> Your cash investment, typically 10 to 20%</li>
              </ul>

              <h2 className="font-serif text-2xl font-semibold text-citadel-cream mt-12 mb-4">
                Step 5: Due Diligence
              </h2>
              <p className="text-citadel-cream/70 mb-4">Before closing, verify everything:</p>
              <ul className="space-y-2 text-citadel-cream/70">
                <li>3+ years of tax returns and financial statements</li>
                <li>Customer concentration and retention rates</li>
                <li>Employee agreements and key person risk</li>
                <li>Legal issues, liens, and pending litigation</li>
                <li>Lease terms and facility condition</li>
                <li>Equipment age and replacement needs</li>
              </ul>
            </div>

            <div className="my-8 p-6 bg-amber-500/10 rounded-xl border border-amber-500/20">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 text-amber-400 flex-shrink-0" />
                <div>
                  <h4 className="font-serif text-lg font-semibold text-citadel-cream mb-2">
                    Red Flags to Watch For
                  </h4>
                  <ul className="space-y-2 text-sm text-citadel-cream/70">
                    <li>Declining revenue trends over 2+ years</li>
                    <li>Heavy customer concentration (one client over 30% of revenue)</li>
                    <li>Seller unwilling to provide seller financing</li>
                    <li>Key employees planning to leave</li>
                    <li>Significant deferred maintenance or CapEx needs</li>
                    <li>Industry facing structural headwinds</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="prose prose-invert prose-citadel max-w-none">
              <h2 className="font-serif text-2xl font-semibold text-citadel-cream mt-12 mb-4">
                After the Acquisition
              </h2>
              <p className="text-citadel-cream/70 mb-4">
                The first 90 days are critical. Focus on:
              </p>
              <ul className="space-y-2 text-citadel-cream/70">
                <li>Building relationships with key employees and customers</li>
                <li>Understanding operations before making changes</li>
                <li>Establishing financial reporting and controls</li>
                <li>Planning for seller transition period</li>
              </ul>
            </div>

            {/* CTA */}
            <div className="mt-12 p-6 bg-citadel-charcoal rounded-xl">
              <h3 className="font-serif text-xl font-semibold text-citadel-cream mb-4">
                Ready to Start Your Search?
              </h3>
              <p className="text-citadel-cream/60 mb-6">
                Talk to our team about acquisition opportunities. We can connect you 
                with brokers, SBA lenders, and acquisition advisors.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/acquisitions" className="btn-primary">
                  Browse Opportunities
                </Link>
                <Link href="/call" className="btn-secondary">
                  Book a Call
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

