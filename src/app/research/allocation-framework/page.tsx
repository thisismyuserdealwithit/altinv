import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Clock, Calendar, PieChart, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'The Alt-Allocation Framework | Portfolio Construction Guide | Alt-Wealth Citadel',
  description: 'Our framework for integrating alternative investments into a traditional portfolio. Risk profiles, allocation targets, and implementation strategies.',
  keywords: 'alternative investment allocation, portfolio construction, asset allocation framework, alternatives portfolio',
}

export default function AllocationFrameworkPage() {
  return (
    <div className="pt-20">
      <div className="bg-citadel-charcoal border-b border-citadel-border">
        <div className="container-custom py-4">
          <Link href="/research" className="inline-flex items-center gap-2 text-sm text-citadel-cream/60 hover:text-citadel-gold transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Research
          </Link>
        </div>
      </div>

      <section className="section-padding gradient-hero">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs px-2 py-1 bg-citadel-gold/20 text-citadel-gold rounded">
                Framework
              </span>
              <span className="text-xs px-2 py-1 bg-citadel-slate text-citadel-cream/60 rounded">
                Strategy
              </span>
            </div>
            
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-citadel-cream mb-6 leading-tight">
              The Alt-Allocation Framework
            </h1>
            
            <p className="text-xl text-citadel-cream/60 leading-relaxed mb-8">
              A systematic approach to integrating alternative investments into 
              your overall portfolio based on risk tolerance, time horizon, and 
              liquidity needs.
            </p>

            <div className="flex items-center gap-6 text-sm text-citadel-cream/50">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                November 15, 2025
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                12 min read
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-citadel-black">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <article className="prose prose-invert prose-citadel max-w-none">
              <p className="text-lg text-citadel-cream/80 leading-relaxed">
                How much should you allocate to alternatives? The answer depends on 
                your unique situation, but this framework provides a starting point 
                based on how institutional investors and family offices approach the 
                question.
              </p>

              <h2 className="font-serif text-2xl font-semibold text-citadel-cream mt-12 mb-4">
                The Sovereign Stack Model
              </h2>
              <p className="text-citadel-cream/70 leading-relaxed">
                Our framework organizes alternatives into four pillars, each serving 
                a distinct purpose in your portfolio:
              </p>
              <ul className="space-y-4 text-citadel-cream/70">
                <li>
                  <strong className="text-citadel-gold">Tangible Defense:</strong> Precious metals, 
                  strategic metals, and collectibles that hedge against inflation and systemic risk.
                </li>
                <li>
                  <strong className="text-blue-400">Global Liquidity:</strong> International banking, 
                  currency diversification, and geographic optionality.
                </li>
                <li>
                  <strong className="text-green-400">Yield & Growth:</strong> Real estate, private credit, 
                  and income-generating alternatives that enhance returns.
                </li>
                <li>
                  <strong className="text-red-400">Structure & Strategy:</strong> Tax-advantaged accounts, 
                  entity structures, and professional advisory that maximize after-tax returns.
                </li>
              </ul>

              <h2 className="font-serif text-2xl font-semibold text-citadel-cream mt-12 mb-4">
                Allocation by Risk Profile
              </h2>
              <p className="text-citadel-cream/70 leading-relaxed">
                Total alternative allocation ranges from 20-50% depending on risk tolerance:
              </p>
            </article>

            {/* Allocation Table */}
            <div className="my-8 overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left text-sm text-citadel-cream/50 border-b border-citadel-border">
                    <th className="pb-3 pr-4">Category</th>
                    <th className="pb-3 pr-4 text-center">Conservative</th>
                    <th className="pb-3 pr-4 text-center">Moderate</th>
                    <th className="pb-3 text-center">Aggressive</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-citadel-border">
                    <td className="py-3 pr-4 text-citadel-gold">Tangible Defense</td>
                    <td className="py-3 pr-4 text-center font-mono text-citadel-cream">15%</td>
                    <td className="py-3 pr-4 text-center font-mono text-citadel-cream">12%</td>
                    <td className="py-3 text-center font-mono text-citadel-cream">10%</td>
                  </tr>
                  <tr className="border-b border-citadel-border">
                    <td className="py-3 pr-4 text-blue-400">Global Liquidity</td>
                    <td className="py-3 pr-4 text-center font-mono text-citadel-cream">10%</td>
                    <td className="py-3 pr-4 text-center font-mono text-citadel-cream">8%</td>
                    <td className="py-3 text-center font-mono text-citadel-cream">5%</td>
                  </tr>
                  <tr className="border-b border-citadel-border">
                    <td className="py-3 pr-4 text-green-400">Yield & Growth</td>
                    <td className="py-3 pr-4 text-center font-mono text-citadel-cream">10%</td>
                    <td className="py-3 pr-4 text-center font-mono text-citadel-cream">18%</td>
                    <td className="py-3 text-center font-mono text-citadel-cream">25%</td>
                  </tr>
                  <tr className="border-b border-citadel-border">
                    <td className="py-3 pr-4 text-red-400">Structure & Strategy</td>
                    <td className="py-3 pr-4 text-center font-mono text-citadel-cream">5%</td>
                    <td className="py-3 pr-4 text-center font-mono text-citadel-cream">7%</td>
                    <td className="py-3 text-center font-mono text-citadel-cream">10%</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium text-citadel-cream">Total Alternatives</td>
                    <td className="py-3 pr-4 text-center font-mono text-citadel-gold">40%</td>
                    <td className="py-3 pr-4 text-center font-mono text-citadel-gold">45%</td>
                    <td className="py-3 text-center font-mono text-citadel-gold">50%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <article className="prose prose-invert prose-citadel max-w-none">
              <h2 className="font-serif text-2xl font-semibold text-citadel-cream mt-12 mb-4">
                Implementation Principles
              </h2>
              <ol className="space-y-4 text-citadel-cream/70">
                <li>
                  <strong className="text-citadel-cream">Start with Structure:</strong> Before 
                  investing in specific assets, ensure you have the right account structure 
                  (SDIRA, taxable, etc.) to maximize after-tax returns.
                </li>
                <li>
                  <strong className="text-citadel-cream">Layer In Gradually:</strong> Don't move 
                  40% of your portfolio into alternatives overnight. Build positions over 
                  12-24 months to average in and maintain liquidity.
                </li>
                <li>
                  <strong className="text-citadel-cream">Maintain a Liquidity Buffer:</strong> Keep 
                  at least 20-30% in liquid assets. Many alternatives have 5-7 year lockups.
                </li>
                <li>
                  <strong className="text-citadel-cream">Diversify Within Categories:</strong> Don't 
                  put all your "Yield & Growth" allocation into a single syndication. 
                  Spread across multiple deals and managers.
                </li>
                <li>
                  <strong className="text-citadel-cream">Rebalance Annually:</strong> Review your 
                  allocation yearly and rebalance if any category drifts more than 5% 
                  from target.
                </li>
              </ol>

              <div className="my-12 p-6 bg-citadel-charcoal rounded-xl border border-citadel-gold/30">
                <h4 className="font-serif text-lg font-semibold text-citadel-cream mb-2">
                  Key Takeaway
                </h4>
                <p className="text-citadel-cream/70">
                  Alternatives aren't a replacement for a traditional portfolio—they're 
                  an enhancement. The goal is to improve risk-adjusted returns and 
                  reduce correlation, not to chase the highest possible returns.
                </p>
              </div>
            </article>

            {/* CTA */}
            <div className="mt-12 p-6 bg-citadel-charcoal rounded-xl">
              <h3 className="font-serif text-xl font-semibold text-citadel-cream mb-4">
                Get Your Personalized Allocation
              </h3>
              <p className="text-citadel-cream/60 mb-6">
                Use our interactive calculator to see recommendations based on your 
                specific risk profile and goals.
              </p>
              <Link href="/tools/allocation-calculator" className="btn-primary">
                <PieChart className="w-4 h-4 mr-2" />
                Open Allocation Calculator
              </Link>
            </div>

            {/* Related */}
            <div className="mt-12">
              <h3 className="font-serif text-xl font-semibold text-citadel-cream mb-6">
                Related Research
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <Link href="/research/sdira-playbook" className="card group hover:border-citadel-gold/30 transition-colors">
                  <span className="text-xs text-citadel-gold">Strategy</span>
                  <h4 className="font-serif text-lg font-semibold text-citadel-cream group-hover:text-citadel-gold transition-colors mt-1">
                    The SDIRA Playbook
                  </h4>
                  <span className="text-sm text-citadel-gold mt-2 inline-flex items-center gap-1">
                    Read More <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
                <Link href="/research/collectibles-asset-class" className="card group hover:border-citadel-gold/30 transition-colors">
                  <span className="text-xs text-citadel-gold">Analysis</span>
                  <h4 className="font-serif text-lg font-semibold text-citadel-cream group-hover:text-citadel-gold transition-colors mt-1">
                    Collectibles as an Asset Class
                  </h4>
                  <span className="text-sm text-citadel-gold mt-2 inline-flex items-center gap-1">
                    Read More <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

