import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Scale, AlertTriangle, Check } from 'lucide-react'

export const metadata: Metadata = {
  title: 'How Litigation Finance Works | Alternative Allocation',
  description: 'Complete guide to litigation finance investing. Understand case selection, risks, returns, and how to invest in legal claims.',
}

export default function LitigationGuidePage() {
  return (
    <div className="pt-20">
      {/* Breadcrumb */}
      <div className="bg-citadel-charcoal border-b border-citadel-border">
        <div className="container-custom py-4">
          <Link href="/litigation" className="inline-flex items-center gap-2 text-sm text-citadel-cream/60 hover:text-citadel-gold transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Litigation Finance
          </Link>
        </div>
      </div>

      {/* Content */}
      <section className="section-padding bg-citadel-black">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Scale className="w-8 h-8 text-blue-400" />
              <span className="text-blue-400 uppercase tracking-[0.2em] text-sm">Guide</span>
            </div>

            <h1 className="font-serif text-3xl md:text-4xl font-semibold text-citadel-cream mb-6">
              How Litigation Finance Works
            </h1>

            <div className="prose prose-invert prose-citadel max-w-none">
              <p className="text-lg text-citadel-cream/80 leading-relaxed mb-8">
                Litigation finance provides capital to plaintiffs and law firms to pursue 
                legal claims. In exchange, investors receive a share of any settlement 
                or judgment. The asset class offers attractive returns completely 
                uncorrelated to financial markets.
              </p>

              <h2 className="font-serif text-2xl font-semibold text-citadel-cream mt-12 mb-4">
                The Investment Structure
              </h2>
              <p className="text-citadel-cream/70">
                Platforms like Yieldstreet aggregate investor capital into funds that 
                finance multiple legal cases. This diversification reduces the binary 
                risk of any single case.
              </p>

              <h3 className="font-serif text-xl font-semibold text-citadel-cream mt-8 mb-4">
                Case Selection Criteria
              </h3>
              <p className="text-citadel-cream/70 mb-4">
                Professional litigation funders evaluate cases based on:
              </p>
              <ul className="space-y-2 text-citadel-cream/70">
                <li><strong className="text-citadel-cream">Legal Merit:</strong> Strength of the claim based on law and facts</li>
                <li><strong className="text-citadel-cream">Damages:</strong> Size of potential recovery if successful</li>
                <li><strong className="text-citadel-cream">Defendant Ability to Pay:</strong> Whether the defendant can satisfy a judgment</li>
                <li><strong className="text-citadel-cream">Duration:</strong> Expected time to resolution</li>
                <li><strong className="text-citadel-cream">Legal Team:</strong> Quality and experience of plaintiff attorneys</li>
              </ul>

              <h2 className="font-serif text-2xl font-semibold text-citadel-cream mt-12 mb-4">
                Return Mechanics
              </h2>
              <p className="text-citadel-cream/70">
                Returns are generated when cases resolve favorably:
              </p>
              <ul className="space-y-2 text-citadel-cream/70 mt-4">
                <li><strong className="text-citadel-cream">Settlement:</strong> Parties agree to a payment (most common outcome)</li>
                <li><strong className="text-citadel-cream">Judgment:</strong> Court awards damages after trial</li>
                <li><strong className="text-citadel-cream">Loss:</strong> If case loses, investors may lose some or all capital</li>
              </ul>

              <div className="my-8 p-6 bg-citadel-charcoal rounded-xl border border-citadel-border">
                <h4 className="font-serif text-lg font-semibold text-citadel-cream mb-4">
                  Sample Return Scenarios
                </h4>
                <div className="space-y-4 text-sm">
                  <div className="flex justify-between items-center pb-2 border-b border-citadel-border">
                    <span className="text-citadel-cream/70">Investment Amount</span>
                    <span className="font-mono text-citadel-cream">$25,000</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-citadel-border">
                    <span className="text-citadel-cream/70">Best Case (Large Settlement)</span>
                    <span className="font-mono text-green-400">$40,000 (60% return)</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-citadel-border">
                    <span className="text-citadel-cream/70">Base Case (Modest Settlement)</span>
                    <span className="font-mono text-blue-400">$32,500 (30% return)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-citadel-cream/70">Worst Case (Case Lost)</span>
                    <span className="font-mono text-red-400">$0 (100% loss)</span>
                  </div>
                </div>
              </div>

              <h2 className="font-serif text-2xl font-semibold text-citadel-cream mt-12 mb-4">
                Why Zero Correlation?
              </h2>
              <p className="text-citadel-cream/70">
                Case outcomes depend on legal merit, evidence, and court decisions, not 
                economic conditions. Whether the stock market rises or falls has no 
                bearing on whether a patent infringement claim succeeds.
              </p>

              <h2 className="font-serif text-2xl font-semibold text-citadel-cream mt-12 mb-4">
                Risks to Consider
              </h2>
            </div>

            <div className="my-8 p-6 bg-amber-500/10 rounded-xl border border-amber-500/20">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 text-amber-400 flex-shrink-0" />
                <div>
                  <h4 className="font-serif text-lg font-semibold text-citadel-cream mb-2">
                    Key Risks
                  </h4>
                  <ul className="space-y-2 text-sm text-citadel-cream/70">
                    <li>Binary Outcomes: Cases either win or lose, no middle ground</li>
                    <li>Illiquidity: Cannot exit until cases resolve (often 2 to 5 years)</li>
                    <li>Collection Risk: Even winning cases may face collection challenges</li>
                    <li>No Guarantee: Past case success does not predict future results</li>
                    <li>Regulatory: Litigation funding rules vary by jurisdiction</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="prose prose-invert prose-citadel max-w-none">
              <h2 className="font-serif text-2xl font-semibold text-citadel-cream mt-12 mb-4">
                Who Should Consider Litigation Finance?
              </h2>
              <p className="text-citadel-cream/70 mb-4">This asset class may suit investors who:</p>
              <ul className="space-y-2 text-citadel-cream/70">
                <li>Seek truly uncorrelated returns</li>
                <li>Can lock up capital for 2 to 5 years</li>
                <li>Understand binary risk and potential for total loss</li>
                <li>Want exposure beyond traditional asset classes</li>
                <li>Have a diversified portfolio and appropriate risk tolerance</li>
              </ul>

              <h2 className="font-serif text-2xl font-semibold text-citadel-cream mt-12 mb-4">
                Tax Considerations
              </h2>
              <p className="text-citadel-cream/70">
                Litigation finance returns are typically taxed as ordinary income or 
                capital gains depending on structure. Consult a tax professional for 
                guidance on your specific situation.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-12 p-6 bg-citadel-charcoal rounded-xl">
              <h3 className="font-serif text-xl font-semibold text-citadel-cream mb-4">
                Ready to Explore Litigation Finance?
              </h3>
              <p className="text-citadel-cream/60 mb-6">
                Talk to our team to learn about current opportunities and whether 
                litigation finance fits your portfolio.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/litigation" className="btn-primary">
                  View Opportunities
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

