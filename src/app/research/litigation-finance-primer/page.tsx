import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Scale, Calendar, Clock, AlertTriangle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Litigation Finance Primer | Alternative Allocation',
  description: 'Complete introduction to litigation finance as an alternative asset class. Understand how legal funding works and why returns are uncorrelated to markets.',
}

export default function LitigationFinancePrimerPage() {
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
              <Scale className="w-6 h-6 text-blue-400" />
              <span className="text-blue-400 text-sm uppercase tracking-[0.2em]">Research</span>
            </div>
            <h1 className="font-serif text-3xl md:text-4xl font-semibold text-citadel-cream mb-6">
              Litigation Finance: A Primer for Alternative Investors
            </h1>
            <div className="flex items-center gap-6 text-sm text-citadel-cream/60">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                January 2026
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                12 min read
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-citadel-black">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto prose prose-invert prose-citadel">
            
            <h2 className="font-serif text-2xl font-semibold text-citadel-cream">
              What is Litigation Finance?
            </h2>
            <p className="text-citadel-cream/70 leading-relaxed">
              Litigation finance is the practice of providing capital to plaintiffs or 
              law firms to pursue legal claims in exchange for a share of any settlement 
              or judgment. The funder takes on the risk of loss in exchange for 
              potentially outsized returns.
            </p>
            <p className="text-citadel-cream/70 leading-relaxed">
              The asset class has grown from nearly nothing in 2000 to over $15 billion 
              in capital deployed globally today. Major players include Burford Capital, 
              Bentham IMF, and platforms like Yieldstreet that offer access to retail investors.
            </p>

            <h2 className="font-serif text-2xl font-semibold text-citadel-cream mt-12">
              Why Zero Market Correlation?
            </h2>
            <p className="text-citadel-cream/70 leading-relaxed">
              The defining characteristic of litigation finance is its independence from 
              financial markets. The outcome of a patent infringement case or commercial 
              dispute depends entirely on legal merit, evidence, and judicial decisions, 
              not whether the economy is booming or in recession.
            </p>
            <p className="text-citadel-cream/70 leading-relaxed">
              This makes litigation finance particularly valuable during market downturns. 
              While stocks, bonds, and real estate may fall together, litigation portfolios 
              continue generating returns based on case outcomes.
            </p>

            <h2 className="font-serif text-2xl font-semibold text-citadel-cream mt-12">
              Types of Litigation Finance
            </h2>
            <ul className="space-y-3 text-citadel-cream/70">
              <li><strong className="text-citadel-cream">Commercial Litigation:</strong> Business disputes, contract breaches, and corporate claims</li>
              <li><strong className="text-citadel-cream">Patent Litigation:</strong> Intellectual property infringement cases</li>
              <li><strong className="text-citadel-cream">Arbitration:</strong> International and domestic arbitration proceedings</li>
              <li><strong className="text-citadel-cream">Class Actions:</strong> Large scale consumer or securities lawsuits</li>
              <li><strong className="text-citadel-cream">Portfolio Financing:</strong> Funding a law firm's entire case portfolio</li>
            </ul>

            <h2 className="font-serif text-2xl font-semibold text-citadel-cream mt-12">
              How Cases Are Selected
            </h2>
            <p className="text-citadel-cream/70 leading-relaxed">
              Professional litigation funders employ teams of lawyers and analysts to 
              evaluate cases before committing capital. Key criteria include:
            </p>
            <ul className="space-y-2 text-citadel-cream/70">
              <li>Legal merit and strength of the claim</li>
              <li>Potential damages if successful</li>
              <li>Defendant's ability to pay a judgment</li>
              <li>Quality and experience of plaintiff counsel</li>
              <li>Expected duration and cost to litigate</li>
              <li>Risk of appeal even if successful</li>
            </ul>
            <p className="text-citadel-cream/70 leading-relaxed">
              Most funders report investing in only 3 to 5% of cases they review, 
              indicating rigorous selection processes.
            </p>

            <h2 className="font-serif text-2xl font-semibold text-citadel-cream mt-12">
              Return Profile
            </h2>
            <p className="text-citadel-cream/70 leading-relaxed">
              Litigation finance typically targets returns of 15 to 25% IRR, with 
              significant variation by case type and risk level. Returns are 
              generated when cases resolve favorably through settlement or judgment.
            </p>
            <p className="text-citadel-cream/70 leading-relaxed">
              The binary nature of outcomes creates a barbell distribution: most 
              cases either return capital plus profit, or result in partial or 
              total loss. Diversification across many cases is essential.
            </p>

            <div className="my-8 p-6 bg-amber-500/10 rounded-xl border border-amber-500/20">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 text-amber-400 flex-shrink-0" />
                <div>
                  <h4 className="font-serif text-lg font-semibold text-citadel-cream mb-2">
                    Key Risks
                  </h4>
                  <ul className="space-y-2 text-sm text-citadel-cream/70">
                    <li>Binary outcomes: cases either win or lose</li>
                    <li>Illiquidity: cannot exit until cases resolve (often 2 to 5 years)</li>
                    <li>Collection risk: even winning cases may face collection issues</li>
                    <li>Regulatory uncertainty: funding rules vary by jurisdiction</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="font-serif text-2xl font-semibold text-citadel-cream mt-12">
              How to Invest
            </h2>
            <p className="text-citadel-cream/70 leading-relaxed">
              Individual investors can access litigation finance through:
            </p>
            <ul className="space-y-2 text-citadel-cream/70">
              <li><strong className="text-citadel-cream">Yieldstreet:</strong> Platform offering litigation finance funds with minimums around $10,000</li>
              <li><strong className="text-citadel-cream">Public Stocks:</strong> Burford Capital (NYSE: BUR) and similar funders</li>
              <li><strong className="text-citadel-cream">Private Funds:</strong> Institutional funds typically require $250K+ minimums</li>
            </ul>

            <h2 className="font-serif text-2xl font-semibold text-citadel-cream mt-12">
              Portfolio Allocation
            </h2>
            <p className="text-citadel-cream/70 leading-relaxed">
              Given the illiquidity and binary risk, most advisors suggest limiting 
              litigation finance to 1 to 5% of an overall portfolio. The allocation 
              should be diversified across multiple cases or funds rather than 
              concentrated in single matters.
            </p>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-citadel-charcoal">
        <div className="container-custom text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-citadel-cream mb-4">
            Explore Litigation Finance
          </h2>
          <p className="text-citadel-cream/60 mb-8 max-w-2xl mx-auto">
            Ready to add uncorrelated returns to your portfolio? Learn more about 
            current litigation finance opportunities.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/litigation" className="btn-primary">
              View Opportunities
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

