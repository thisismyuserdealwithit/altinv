import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Palette, Check, AlertTriangle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'How Art Investing Works | Alternative Allocation',
  description: 'Complete guide to investing in fine art through fractional ownership. Understand the process, risks, and potential returns.',
}

export default function ArtGuidePage() {
  return (
    <div className="pt-20">
      {/* Breadcrumb */}
      <div className="bg-citadel-charcoal border-b border-citadel-border">
        <div className="container-custom py-4">
          <Link href="/art" className="inline-flex items-center gap-2 text-sm text-citadel-cream/60 hover:text-citadel-gold transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Art
          </Link>
        </div>
      </div>

      {/* Content */}
      <section className="section-padding bg-citadel-black">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Palette className="w-8 h-8 text-pink-400" />
              <span className="text-pink-400 uppercase tracking-[0.2em] text-sm">Guide</span>
            </div>

            <h1 className="font-serif text-3xl md:text-4xl font-semibold text-citadel-cream mb-6">
              How Art Investing Works
            </h1>

            <div className="prose prose-invert prose-citadel max-w-none">
              <p className="text-lg text-citadel-cream/80 leading-relaxed mb-8">
                Fine art has long been a cornerstone of wealthy family portfolios. 
                Through fractional ownership platforms, individual investors can now 
                access the same asset class with much smaller minimums.
              </p>

              <h2 className="font-serif text-2xl font-semibold text-citadel-cream mt-12 mb-4">
                The Fractional Model
              </h2>
              <p className="text-citadel-cream/70">
                A platform like Yieldstreet purchases a blue chip artwork, creates an 
                LLC to hold it, and sells shares to investors. You own a percentage 
                of the LLC, which owns the painting.
              </p>

              <h3 className="font-serif text-xl font-semibold text-citadel-cream mt-8 mb-4">
                The Process
              </h3>
              <ol className="space-y-4 text-citadel-cream/70">
                <li><strong className="text-citadel-cream">1. Acquisition:</strong> Platform experts identify and purchase a work with appreciation potential.</li>
                <li><strong className="text-citadel-cream">2. Securitization:</strong> The work is placed in an LLC and shares are offered to investors.</li>
                <li><strong className="text-citadel-cream">3. Holding Period:</strong> The artwork is stored, insured, and sometimes loaned to museums (3 to 10 years typical).</li>
                <li><strong className="text-citadel-cream">4. Exit:</strong> The platform sells the work at auction or privately. Proceeds distributed to shareholders.</li>
              </ol>

              <h2 className="font-serif text-2xl font-semibold text-citadel-cream mt-12 mb-4">
                What Makes a "Blue Chip" Artist?
              </h2>
              <ul className="space-y-2 text-citadel-cream/70">
                <li>Established auction track record with consistent sales</li>
                <li>Works held in major museum collections</li>
                <li>Significant art historical importance</li>
                <li>Limited supply (deceased or late career artists)</li>
                <li>Global collector demand</li>
              </ul>

              <div className="my-8 p-6 bg-citadel-charcoal rounded-xl border border-citadel-border">
                <h4 className="font-serif text-lg font-semibold text-citadel-cream mb-4">
                  Top Blue Chip Artists by Market Performance
                </h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-citadel-cream">Jean-Michel Basquiat</div>
                    <div className="text-pink-400 font-mono">+17.9% CAGR</div>
                  </div>
                  <div>
                    <div className="text-citadel-cream">Andy Warhol</div>
                    <div className="text-pink-400 font-mono">+12.4% CAGR</div>
                  </div>
                  <div>
                    <div className="text-citadel-cream">Gerhard Richter</div>
                    <div className="text-pink-400 font-mono">+10.8% CAGR</div>
                  </div>
                  <div>
                    <div className="text-citadel-cream">Banksy</div>
                    <div className="text-pink-400 font-mono">+14.2% CAGR</div>
                  </div>
                </div>
              </div>

              <h2 className="font-serif text-2xl font-semibold text-citadel-cream mt-12 mb-4">
                Costs and Fees
              </h2>
              <ul className="space-y-2 text-citadel-cream/70">
                <li><strong className="text-citadel-cream">Management Fee:</strong> Typically 1.5% annually</li>
                <li><strong className="text-citadel-cream">Carry:</strong> 20% of profits above a hurdle rate</li>
                <li><strong className="text-citadel-cream">Storage & Insurance:</strong> Included in management fee</li>
                <li><strong className="text-citadel-cream">Transaction Costs:</strong> Auction fees (if applicable) at exit</li>
              </ul>

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
                    <li>Illiquidity: You cannot sell shares until the artwork sells (3 to 10 years)</li>
                    <li>Market Risk: Art values can decline, especially during recessions</li>
                    <li>Concentration: Single artwork exposure in each investment</li>
                    <li>No Income: Art generates no cash flow during holding period</li>
                    <li>Survivorship Bias: Published returns often exclude underperforming works</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="prose prose-invert prose-citadel max-w-none">
              <h2 className="font-serif text-2xl font-semibold text-citadel-cream mt-12 mb-4">
                Tax Considerations
              </h2>
              <p className="text-citadel-cream/70">
                Art is classified as a "collectible" by the IRS. Long term capital gains 
                on collectibles are taxed at 28% (higher than the standard 20% rate). 
                Consult a tax professional for your specific situation.
              </p>

              <h2 className="font-serif text-2xl font-semibold text-citadel-cream mt-12 mb-4">
                Is Art Right for You?
              </h2>
              <p className="text-citadel-cream/70 mb-4">Art investing may be appropriate if you:</p>
              <ul className="space-y-2 text-citadel-cream/70">
                <li>Have a long time horizon (5+ years)</li>
                <li>Want portfolio diversification beyond stocks and bonds</li>
                <li>Can accept complete illiquidity</li>
                <li>Understand you may lose some or all of your investment</li>
              </ul>
            </div>

            {/* CTA */}
            <div className="mt-12 p-6 bg-citadel-charcoal rounded-xl">
              <h3 className="font-serif text-xl font-semibold text-citadel-cream mb-4">
                Ready to Explore Art Investments?
              </h3>
              <p className="text-citadel-cream/60 mb-6">
                Talk to our team to learn about current offerings and whether art 
                fits your portfolio.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/art" className="btn-primary">
                  View Current Offerings
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

