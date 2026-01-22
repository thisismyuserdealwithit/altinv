import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Clock, Calendar, ArrowRight, Shield, CheckCircle, AlertTriangle, Building } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Real Estate Syndication Due Diligence | 47 Questions | Alt-Wealth Citadel',
  description: 'Complete due diligence checklist for real estate syndications. 47 questions to ask before wiring $50K to any sponsor.',
  keywords: 'real estate syndication due diligence, syndication checklist, sponsor vetting, private placement due diligence',
}

const sponsorQuestions = [
  'How many deals has the sponsor completed?',
  'What is their track record on realized returns vs. projections?',
  'Have they ever had a deal go bad? What happened?',
  'How much of their own capital is in this deal?',
  'What is the management team\'s experience with this property type?',
  'Can you speak with investors from previous deals?',
  'What is their preferred equity structure (waterfall)?',
  'How do they handle capital calls if the deal underperforms?',
]

const dealQuestions = [
  'What is the business plan (value-add, core-plus, development)?',
  'What are the projected returns (IRR, cash-on-cash, equity multiple)?',
  'What assumptions drive these projections?',
  'What is the target hold period?',
  'What are the exit options if the market turns?',
  'What contingencies exist for cost overruns?',
  'Is there a preferred return? What percentage?',
  'What is the split after preferred return is paid?',
]

const propertyQuestions = [
  'What is the property condition? Any deferred maintenance?',
  'Has there been a third-party inspection?',
  'What is the current occupancy? Historical occupancy?',
  'What are the comparable rents in the submarket?',
  'What new supply is coming to the market?',
  'What are the property taxes and how might they change?',
  'Are there any environmental concerns?',
  'What is the insurance situation and cost?',
]

const structureQuestions = [
  'What entity type holds the property (LLC, LP)?',
  'What are the fees (acquisition, asset management, disposition)?',
  'How are fees earned—upfront or over time?',
  'What voting rights do LPs have?',
  'Can the sponsor make capital calls without LP approval?',
  'What are the reporting requirements (quarterly? audited?)?',
  'Is there a subscription agreement? Have you reviewed with an attorney?',
  'What are the tax implications (K-1 timing, UBIT if using IRA)?',
]

export default function SyndicationDueDiligencePage() {
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

      {/* Article Header */}
      <section className="section-padding gradient-hero">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs px-2 py-1 bg-green-500/20 text-green-400 rounded">
                Checklist
              </span>
              <span className="text-xs px-2 py-1 bg-citadel-slate text-citadel-cream/60 rounded">
                Real Estate
              </span>
            </div>
            
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-citadel-cream mb-6 leading-tight">
              Real Estate Syndication Due Diligence: 47 Questions to Ask
            </h1>
            
            <p className="text-xl text-citadel-cream/60 leading-relaxed mb-8">
              Before you wire $50K to a sponsor, here's the complete checklist we 
              use to evaluate deals.
            </p>

            <div className="flex items-center gap-6 text-sm text-citadel-cream/50">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                December 10, 2025
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                14 min read
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="section-padding bg-citadel-black">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <article className="prose prose-invert prose-citadel max-w-none">
              <p className="text-lg text-citadel-cream/80 leading-relaxed">
                Real estate syndications offer access to institutional-quality deals 
                with professional management. But they're also illiquid, complex, 
                and entirely dependent on sponsor execution. Thorough due diligence 
                isn't optional—it's essential.
              </p>

              <div className="my-8 p-6 bg-amber-500/10 rounded-xl border border-amber-500/20">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="w-6 h-6 text-amber-400 flex-shrink-0" />
                  <div>
                    <h4 className="font-serif text-lg font-semibold text-citadel-cream mb-2">
                      Before You Start
                    </h4>
                    <p className="text-citadel-cream/70 text-sm">
                      Most syndications are private placements under Reg D. They're 
                      only available to accredited investors, and there's no secondary 
                      market. Once you invest, you're locked in for 3-7 years. 
                      Never invest money you can't afford to lose entirely.
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="font-serif text-2xl font-semibold text-citadel-cream mt-12 mb-4">
                Part 1: The Sponsor
              </h2>
              <p className="text-citadel-cream/70 leading-relaxed">
                The sponsor (general partner) is the most important factor. A great 
                sponsor can salvage a mediocre deal; a bad sponsor can ruin a great one.
              </p>
            </article>

            {/* Sponsor Questions */}
            <div className="my-6 card">
              <h4 className="font-medium text-citadel-cream mb-4 flex items-center gap-2">
                <Building className="w-5 h-5 text-citadel-gold" />
                Sponsor Questions
              </h4>
              <div className="space-y-3">
                {sponsorQuestions.map((q, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded bg-citadel-slate flex items-center justify-center text-xs text-citadel-gold flex-shrink-0">
                      {i + 1}
                    </span>
                    <span className="text-citadel-cream/70 text-sm">{q}</span>
                  </div>
                ))}
              </div>
            </div>

            <article className="prose prose-invert prose-citadel max-w-none">
              <h2 className="font-serif text-2xl font-semibold text-citadel-cream mt-12 mb-4">
                Part 2: The Deal Structure
              </h2>
              <p className="text-citadel-cream/70 leading-relaxed">
                Understand exactly what you're buying, what returns are projected, 
                and what assumptions drive those projections.
              </p>
            </article>

            {/* Deal Questions */}
            <div className="my-6 card">
              <h4 className="font-medium text-citadel-cream mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5 text-citadel-gold" />
                Deal Questions
              </h4>
              <div className="space-y-3">
                {dealQuestions.map((q, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded bg-citadel-slate flex items-center justify-center text-xs text-citadel-gold flex-shrink-0">
                      {i + 9}
                    </span>
                    <span className="text-citadel-cream/70 text-sm">{q}</span>
                  </div>
                ))}
              </div>
            </div>

            <article className="prose prose-invert prose-citadel max-w-none">
              <h2 className="font-serif text-2xl font-semibold text-citadel-cream mt-12 mb-4">
                Part 3: The Property
              </h2>
              <p className="text-citadel-cream/70 leading-relaxed">
                Understand the physical asset, the market, and the specific risks.
              </p>
            </article>

            {/* Property Questions */}
            <div className="my-6 card">
              <h4 className="font-medium text-citadel-cream mb-4 flex items-center gap-2">
                <Building className="w-5 h-5 text-green-400" />
                Property Questions
              </h4>
              <div className="space-y-3">
                {propertyQuestions.map((q, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded bg-citadel-slate flex items-center justify-center text-xs text-citadel-gold flex-shrink-0">
                      {i + 17}
                    </span>
                    <span className="text-citadel-cream/70 text-sm">{q}</span>
                  </div>
                ))}
              </div>
            </div>

            <article className="prose prose-invert prose-citadel max-w-none">
              <h2 className="font-serif text-2xl font-semibold text-citadel-cream mt-12 mb-4">
                Part 4: Legal & Tax Structure
              </h2>
              <p className="text-citadel-cream/70 leading-relaxed">
                Have an attorney review the PPM and operating agreement before 
                you commit capital.
              </p>
            </article>

            {/* Structure Questions */}
            <div className="my-6 card">
              <h4 className="font-medium text-citadel-cream mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5 text-amber-400" />
                Structure Questions
              </h4>
              <div className="space-y-3">
                {structureQuestions.map((q, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded bg-citadel-slate flex items-center justify-center text-xs text-citadel-gold flex-shrink-0">
                      {i + 25}
                    </span>
                    <span className="text-citadel-cream/70 text-sm">{q}</span>
                  </div>
                ))}
              </div>
            </div>

            <article className="prose prose-invert prose-citadel max-w-none">
              <h2 className="font-serif text-2xl font-semibold text-citadel-cream mt-12 mb-4">
                Red Flags to Watch For
              </h2>
              <ul className="space-y-2 text-citadel-cream/70">
                <li><strong className="text-red-400">Unrealistic projections:</strong> 25%+ IRR on core multifamily? Be skeptical.</li>
                <li><strong className="text-red-400">No skin in the game:</strong> Sponsors should invest meaningful capital.</li>
                <li><strong className="text-red-400">High upfront fees:</strong> 3%+ acquisition fees are a yellow flag.</li>
                <li><strong className="text-red-400">Pressure tactics:</strong> "This deal is closing in 48 hours" = walk away.</li>
                <li><strong className="text-red-400">No investor references:</strong> Quality sponsors have happy past investors.</li>
                <li><strong className="text-red-400">Opaque reporting:</strong> Quarterly updates should be detailed and honest.</li>
              </ul>

              <div className="my-12 p-6 bg-citadel-charcoal rounded-xl border border-citadel-gold/30">
                <h4 className="font-serif text-lg font-semibold text-citadel-cream mb-2">
                  Bottom Line
                </h4>
                <p className="text-citadel-cream/70">
                  Syndications can be excellent investments—but only with proper 
                  due diligence. The best sponsors welcome scrutiny. If a sponsor 
                  can't or won't answer these questions, move on. There are plenty 
                  of quality operators who will.
                </p>
              </div>
            </article>

            {/* CTA */}
            <div className="mt-12 p-6 bg-citadel-charcoal rounded-xl">
              <h3 className="font-serif text-xl font-semibold text-citadel-cream mb-4">
                Download the Complete Checklist
              </h3>
              <p className="text-citadel-cream/60 mb-6">
                Get a printable PDF version with space for notes on each question.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/resources/syndication-checklist" className="btn-primary">
                  Download PDF
                </Link>
                <Link href="/real-estate" className="btn-secondary">
                  Explore Syndications
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

