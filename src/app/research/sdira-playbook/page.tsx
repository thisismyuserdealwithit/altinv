import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Clock, Calendar, Check, X, ArrowRight, Calculator, Shield, Briefcase } from 'lucide-react'

export const metadata: Metadata = {
  title: 'The SDIRA Playbook | Tax-Free Alternatives Investing | Alt-Wealth Citadel',
  description: 'How sophisticated investors use Self-Directed IRAs to buy metals, real estate, and private deals inside a tax-sheltered wrapper. Complete guide with examples.',
  keywords: 'sdira playbook, self directed ira strategy, tax free investing, alternative investments ira, checkbook ira strategy',
}

export default function SDIRAPlaybookPage() {
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
              <span className="text-xs px-2 py-1 bg-amber-500/20 text-amber-400 rounded">
                Strategy Guide
              </span>
              <span className="text-xs px-2 py-1 bg-citadel-slate text-citadel-cream/60 rounded">
                Tax Planning
              </span>
            </div>
            
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-citadel-cream mb-6 leading-tight">
              The SDIRA Playbook: Tax-Free Alternatives Investing
            </h1>
            
            <p className="text-xl text-citadel-cream/60 leading-relaxed mb-8">
              How sophisticated investors use Self-Directed IRAs to buy metals, 
              real estate, and private deals inside a tax-sheltered wrapper.
            </p>

            <div className="flex items-center gap-6 text-sm text-citadel-cream/50">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                December 28, 2025
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                15 min read
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
                Most Americans don't realize their retirement accounts can hold more than 
                mutual funds. While Fidelity and Schwab limit you to stocks, bonds, and 
                their proprietary products, a Self-Directed IRA opens the door to 
                virtually any investment—including the alternatives that wealthy families 
                have used for generations.
              </p>

              <h2 className="font-serif text-2xl font-semibold text-citadel-cream mt-12 mb-4">
                The Basics: What is an SDIRA?
              </h2>
              <p className="text-citadel-cream/70 leading-relaxed">
                A Self-Directed IRA is simply an IRA with a custodian that allows 
                alternative investments. The same contribution limits, tax advantages, 
                and withdrawal rules apply—you just have more investment options.
              </p>
              <p className="text-citadel-cream/70 leading-relaxed">
                There are two main structures:
              </p>
              <ul className="space-y-2 text-citadel-cream/70">
                <li><strong className="text-citadel-cream">Custodian-Directed:</strong> The custodian holds assets and processes each transaction. More oversight, less flexibility.</li>
                <li><strong className="text-citadel-cream">Checkbook IRA:</strong> Your IRA owns an LLC. You manage the LLC with checkbook control. More flexibility, more responsibility.</li>
              </ul>

              <h2 className="font-serif text-2xl font-semibold text-citadel-cream mt-12 mb-4">
                The Tax Advantage
              </h2>
              <p className="text-citadel-cream/70 leading-relaxed">
                The math is compelling. Alternative investments often generate higher 
                returns than traditional assets—and those returns compound tax-free 
                in a Roth IRA.
              </p>
            </article>

            {/* Example Calculation */}
            <div className="my-8 p-6 bg-citadel-charcoal rounded-xl border border-citadel-border">
              <h4 className="font-serif text-lg font-semibold text-citadel-cream mb-4">
                Example: $50,000 Real Estate Syndication
              </h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="text-sm text-citadel-cream/50 uppercase mb-3">Taxable Account</h5>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-citadel-cream/70">Initial Investment</span>
                      <span className="font-mono text-citadel-cream">$50,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-citadel-cream/70">5-Year Return (15% IRR)</span>
                      <span className="font-mono text-citadel-cream">$50,567</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-citadel-cream/70">Capital Gains Tax (23.8%)</span>
                      <span className="font-mono text-red-400">-$12,035</span>
                    </div>
                    <div className="flex justify-between pt-2 border-t border-citadel-border">
                      <span className="text-citadel-cream">Net Proceeds</span>
                      <span className="font-mono text-citadel-cream">$88,532</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h5 className="text-sm text-citadel-gold uppercase mb-3">Roth SDIRA</h5>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-citadel-cream/70">Initial Investment</span>
                      <span className="font-mono text-citadel-cream">$50,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-citadel-cream/70">5-Year Return (15% IRR)</span>
                      <span className="font-mono text-citadel-cream">$50,567</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-citadel-cream/70">Tax on Withdrawal</span>
                      <span className="font-mono text-green-400">$0</span>
                    </div>
                    <div className="flex justify-between pt-2 border-t border-citadel-border">
                      <span className="text-citadel-cream">Net Proceeds</span>
                      <span className="font-mono text-green-400">$100,567</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-citadel-border text-center">
                <span className="text-citadel-cream/70">Tax Savings: </span>
                <span className="font-mono text-xl text-green-400">$12,035</span>
              </div>
            </div>

            <article className="prose prose-invert prose-citadel max-w-none">
              <h2 className="font-serif text-2xl font-semibold text-citadel-cream mt-12 mb-4">
                What You Can (and Can't) Invest In
              </h2>
              <p className="text-citadel-cream/70 leading-relaxed">
                The IRS defines what's prohibited—everything else is fair game.
              </p>
            </article>

            {/* Allowed vs Prohibited */}
            <div className="my-8 grid md:grid-cols-2 gap-6">
              <div className="card">
                <h4 className="flex items-center gap-2 font-serif text-lg font-semibold text-green-400 mb-4">
                  <Check className="w-5 h-5" /> Allowed
                </h4>
                <ul className="space-y-2 text-sm text-citadel-cream/70">
                  <li>• Real estate (rentals, syndications, land)</li>
                  <li>• Precious metals (IRS-approved gold, silver)</li>
                  <li>• Strategic metals (gallium, germanium)</li>
                  <li>• Private equity and venture capital</li>
                  <li>• Cryptocurrency</li>
                  <li>• Promissory notes and private lending</li>
                  <li>• Tax liens and deeds</li>
                  <li>• LLCs and private companies</li>
                </ul>
              </div>
              <div className="card">
                <h4 className="flex items-center gap-2 font-serif text-lg font-semibold text-red-400 mb-4">
                  <X className="w-5 h-5" /> Prohibited
                </h4>
                <ul className="space-y-2 text-sm text-citadel-cream/70">
                  <li>• Collectibles (art, wine, antiques)</li>
                  <li>• Life insurance</li>
                  <li>• S-corporation stock</li>
                  <li>• Any transaction with disqualified persons</li>
                  <li>• Personal use property</li>
                </ul>
                <p className="text-xs text-citadel-cream/50 mt-4">
                  Note: Strategic metals are allowed because they're industrial 
                  commodities, not collectibles.
                </p>
              </div>
            </div>

            <article className="prose prose-invert prose-citadel max-w-none">
              <h2 className="font-serif text-2xl font-semibold text-citadel-cream mt-12 mb-4">
                SDIRA Strategies by Asset Class
              </h2>

              <h3 className="font-serif text-xl font-semibold text-citadel-cream mt-8 mb-3">
                Real Estate
              </h3>
              <p className="text-citadel-cream/70 leading-relaxed">
                The most popular SDIRA investment. Your IRA can own rental properties 
                directly, invest in syndications, or participate in private REITs.
              </p>
              <p className="text-citadel-cream/70 leading-relaxed">
                <strong className="text-citadel-cream">Key consideration:</strong> All 
                expenses must come from the IRA, and all income must return to the IRA. 
                You can't use personal funds to pay for repairs or pocket the rent.
              </p>

              <h3 className="font-serif text-xl font-semibold text-citadel-cream mt-8 mb-3">
                Precious & Strategic Metals
              </h3>
              <p className="text-citadel-cream/70 leading-relaxed">
                Your IRA can hold physical gold, silver, platinum, and strategic metals 
                like gallium and germanium. The metal must be stored at an IRS-approved 
                depository—not your home.
              </p>
              <p className="text-citadel-cream/70 leading-relaxed">
                <strong className="text-citadel-cream">Key consideration:</strong> Only 
                certain purity levels qualify. American Eagle coins are allowed; rare 
                collectible coins are not.
              </p>

              <h3 className="font-serif text-xl font-semibold text-citadel-cream mt-8 mb-3">
                Private Equity & Startups
              </h3>
              <p className="text-citadel-cream/70 leading-relaxed">
                SDIRAs can invest in private companies, venture funds, and pre-IPO shares. 
                Platforms like EquityZen and AngelList support SDIRA investments.
              </p>
              <p className="text-citadel-cream/70 leading-relaxed">
                <strong className="text-citadel-cream">Key consideration:</strong> Ensure 
                the investment documents allow IRA ownership. Some funds exclude 
                retirement accounts.
              </p>

              <h2 className="font-serif text-2xl font-semibold text-citadel-cream mt-12 mb-4">
                The Prohibited Transaction Trap
              </h2>
              <p className="text-citadel-cream/70 leading-relaxed">
                The biggest risk with SDIRAs isn't market loss—it's making a prohibited 
                transaction that disqualifies your entire IRA. Common mistakes:
              </p>
              <ul className="space-y-2 text-citadel-cream/70">
                <li>• Buying property you or family members will use</li>
                <li>• Paying yourself for managing IRA assets</li>
                <li>• Lending IRA funds to yourself or family</li>
                <li>• Using personal funds for IRA property expenses</li>
                <li>• Commingling IRA and personal assets</li>
              </ul>
              <p className="text-citadel-cream/70 leading-relaxed mt-4">
                Violation can result in the entire IRA being distributed and taxed, 
                plus a 10% early withdrawal penalty if under 59½.
              </p>

              <div className="my-12 p-6 bg-citadel-charcoal rounded-xl border border-amber-500/30">
                <Shield className="w-8 h-8 text-amber-400 mb-4" />
                <h4 className="font-serif text-lg font-semibold text-citadel-cream mb-2">
                  Rule of Thumb
                </h4>
                <p className="text-citadel-cream/70">
                  If a transaction benefits you personally—beyond the growth of your 
                  IRA—it's probably prohibited. The IRA must be at arm's length from 
                  you and your family.
                </p>
              </div>

              <h2 className="font-serif text-2xl font-semibold text-citadel-cream mt-12 mb-4">
                Getting Started
              </h2>
              <p className="text-citadel-cream/70 leading-relaxed">
                Setting up an SDIRA takes 1-2 weeks:
              </p>
              <ol className="space-y-4 text-citadel-cream/70">
                <li>
                  <strong className="text-citadel-cream">1. Choose a custodian:</strong> Compare 
                  Rocket Dollar, Alto IRA, and Directed IRA based on your investment plans.
                </li>
                <li>
                  <strong className="text-citadel-cream">2. Open the account:</strong> Complete 
                  application and fund via rollover or contribution.
                </li>
                <li>
                  <strong className="text-citadel-cream">3. Set up checkbook control (optional):</strong> If 
                  using a Checkbook IRA, form the LLC that your IRA will own.
                </li>
                <li>
                  <strong className="text-citadel-cream">4. Start investing:</strong> Direct 
                  your custodian to make investments on behalf of your IRA.
                </li>
              </ol>

              <div className="my-12 p-6 bg-citadel-charcoal rounded-xl border border-citadel-gold/30">
                <h4 className="font-serif text-lg font-semibold text-citadel-cream mb-2">
                  Bottom Line
                </h4>
                <p className="text-citadel-cream/70">
                  SDIRAs are one of the most powerful tools for alternative investors. 
                  The ability to hold real estate, metals, and private deals in a 
                  tax-advantaged wrapper can add tens of thousands of dollars to your 
                  retirement. But the rules are strict—work with professionals and 
                  never cross the line into prohibited transactions.
                </p>
              </div>
            </article>

            {/* CTA */}
            <div className="mt-12 p-6 bg-citadel-charcoal rounded-xl">
              <h3 className="font-serif text-xl font-semibold text-citadel-cream mb-4">
                Ready to Open an SDIRA?
              </h3>
              <p className="text-citadel-cream/60 mb-6">
                Calculate your potential tax savings and compare provider options.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/tools/sdira-calculator" className="btn-primary">
                  <Calculator className="w-4 h-4 mr-2" />
                  SDIRA Calculator
                </Link>
                <Link href="/advisory/sdira" className="btn-secondary">
                  Compare Providers
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

