import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Briefcase, Calendar, Clock, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Business Acquisition Checklist | Alternative Allocation',
  description: 'Complete due diligence checklist for acquiring a small business. Every item to review before signing the purchase agreement.',
}

export default function BusinessAcquisitionChecklistPage() {
  return (
    <div className="pt-20">
      {/* Breadcrumb */}
      <div className="bg-citadel-charcoal border-b border-citadel-border">
        <div className="container-custom py-4">
          <Link href="/research" className="inline-flex items-center gap-2 text-sm text-citadel-cream/60 hover:text-citadel-gold transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Research
          </Link>
        </div>
      </div>

      {/* Header */}
      <section className="section-padding gradient-hero border-b border-citadel-border">
        <div className="container-custom">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <Briefcase className="w-6 h-6 text-amber-400" />
              <span className="text-amber-400 text-sm uppercase tracking-[0.2em]">Research</span>
            </div>
            <h1 className="font-serif text-3xl md:text-4xl font-semibold text-citadel-cream mb-6">
              Business Acquisition Due Diligence Checklist
            </h1>
            <div className="flex items-center gap-6 text-sm text-citadel-cream/60">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                January 2026
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                8 min read
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-citadel-black">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            
            <p className="text-lg text-citadel-cream/80 leading-relaxed mb-12">
              Before signing a purchase agreement, thorough due diligence is essential. 
              This checklist covers every area you should investigate when acquiring 
              a small business.
            </p>

            {/* Financial Section */}
            <div className="mb-12">
              <h2 className="font-serif text-2xl font-semibold text-citadel-cream mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400 text-sm font-mono">1</span>
                Financial Documents
              </h2>
              <div className="space-y-3">
                {[
                  '3+ years of federal and state tax returns',
                  '3+ years of profit & loss statements',
                  '3+ years of balance sheets',
                  'YTD financials (within 60 days)',
                  'Accounts receivable aging report',
                  'Accounts payable aging report',
                  'Inventory valuation report',
                  'Fixed asset schedule with depreciation',
                  'Bank statements (12 months)',
                  'Credit card statements (12 months)',
                  'Debt schedule with terms and balances',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 p-3 bg-citadel-charcoal rounded-lg">
                    <CheckCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                    <span className="text-citadel-cream/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Operations Section */}
            <div className="mb-12">
              <h2 className="font-serif text-2xl font-semibold text-citadel-cream mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400 text-sm font-mono">2</span>
                Operations
              </h2>
              <div className="space-y-3">
                {[
                  'Employee roster with tenure, roles, and compensation',
                  'Organization chart',
                  'Employee contracts and non-competes',
                  'Vendor list with contract terms',
                  'Customer list (anonymized if needed pre-LOI)',
                  'Top 10 customers by revenue',
                  'Customer concentration analysis',
                  'Standard operating procedures (SOPs)',
                  'Equipment list with age and condition',
                  'Technology and software inventory',
                  'Key process workflows',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 p-3 bg-citadel-charcoal rounded-lg">
                    <CheckCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                    <span className="text-citadel-cream/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Legal Section */}
            <div className="mb-12">
              <h2 className="font-serif text-2xl font-semibold text-citadel-cream mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400 text-sm font-mono">3</span>
                Legal & Compliance
              </h2>
              <div className="space-y-3">
                {[
                  'Entity formation documents',
                  'Operating agreement or bylaws',
                  'Business licenses and permits',
                  'Insurance policies (GL, WC, E&O, etc.)',
                  'Pending or threatened litigation',
                  'Past litigation and settlements',
                  'Environmental compliance records',
                  'Intellectual property registrations',
                  'Franchise agreements (if applicable)',
                  'Non-disclosure agreements with employees',
                  'Material contracts and agreements',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 p-3 bg-citadel-charcoal rounded-lg">
                    <CheckCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                    <span className="text-citadel-cream/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Real Estate Section */}
            <div className="mb-12">
              <h2 className="font-serif text-2xl font-semibold text-citadel-cream mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400 text-sm font-mono">4</span>
                Real Estate & Facilities
              </h2>
              <div className="space-y-3">
                {[
                  'Lease agreement with terms and renewal options',
                  'Landlord contact information',
                  'Rent payment history',
                  'Property inspection report',
                  'Zoning verification',
                  'Environmental site assessment (if needed)',
                  'Utility costs (12 months)',
                  'Maintenance records',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 p-3 bg-citadel-charcoal rounded-lg">
                    <CheckCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                    <span className="text-citadel-cream/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Market Section */}
            <div className="mb-12">
              <h2 className="font-serif text-2xl font-semibold text-citadel-cream mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400 text-sm font-mono">5</span>
                Market & Competition
              </h2>
              <div className="space-y-3">
                {[
                  'Competitive landscape analysis',
                  'Market size and growth trends',
                  'Industry regulations and changes',
                  'Customer reviews and reputation',
                  'Marketing materials and brand assets',
                  'Website analytics (traffic, conversions)',
                  'Social media presence and engagement',
                  'Pricing strategy documentation',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 p-3 bg-citadel-charcoal rounded-lg">
                    <CheckCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                    <span className="text-citadel-cream/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-citadel-charcoal">
        <div className="container-custom text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-citadel-cream mb-4">
            Ready to Acquire a Business?
          </h2>
          <p className="text-citadel-cream/60 mb-8 max-w-2xl mx-auto">
            Talk to our team about finding and evaluating acquisition opportunities.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/acquisitions" className="btn-primary">
              Browse Opportunities
            </Link>
            <Link href="/call" className="btn-secondary">
              Talk to an Expert
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

