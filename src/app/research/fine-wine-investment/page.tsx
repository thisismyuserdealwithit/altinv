import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Clock, Calendar, Wine, TrendingUp, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Fine Wine Investment | 30-Year Analysis | Alt-Wealth Citadel',
  description: 'Comprehensive analysis of fine wine as an investment over 30 years. Returns, volatility, storage, and how to invest in wine.',
  keywords: 'fine wine investment, wine returns, liv-ex index, bordeaux investment, wine as asset class',
}

export default function FineWineInvestmentPage() {
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
              <span className="text-xs px-2 py-1 bg-red-500/20 text-red-400 rounded">
                Deep Dive
              </span>
              <span className="text-xs px-2 py-1 bg-citadel-slate text-citadel-cream/60 rounded">
                Collectibles
              </span>
            </div>
            
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-citadel-cream mb-6 leading-tight">
              Fine Wine Investment: A 30-Year Analysis
            </h1>
            
            <p className="text-xl text-citadel-cream/60 leading-relaxed mb-8">
              How has wine performed as an asset class? We analyze three decades of 
              data to understand returns, risks, and the best ways to invest.
            </p>

            <div className="flex items-center gap-6 text-sm text-citadel-cream/50">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                November 8, 2025
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                9 min read
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
                Fine wine has delivered compelling returns over the past three decades, 
                with lower volatility than many financial assets. But is it right for 
                your portfolio?
              </p>

              <h2 className="font-serif text-2xl font-semibold text-citadel-cream mt-12 mb-4">
                The Numbers: 30 Years of Wine Returns
              </h2>
              <p className="text-citadel-cream/70 leading-relaxed">
                The Liv-ex Fine Wine 1000, the broadest measure of the fine wine market, 
                has delivered annualized returns of approximately 8-10% over the past 
                20 years. Specific vintages and regions have done even better.
              </p>
            </article>

            {/* Performance Data */}
            <div className="my-8 card">
              <h4 className="font-medium text-citadel-cream mb-4">Historical Performance</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-citadel-border">
                  <span className="text-citadel-cream/70">Liv-ex 1000 (20-year)</span>
                  <span className="font-mono text-green-400">+9.2% annualized</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-citadel-border">
                  <span className="text-citadel-cream/70">Bordeaux First Growths</span>
                  <span className="font-mono text-green-400">+10.5% annualized</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-citadel-border">
                  <span className="text-citadel-cream/70">Burgundy DRC</span>
                  <span className="font-mono text-green-400">+14.2% annualized</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-citadel-cream/70">Correlation to S&P 500</span>
                  <span className="font-mono text-citadel-gold">0.19</span>
                </div>
              </div>
            </div>

            <article className="prose prose-invert prose-citadel max-w-none">
              <h2 className="font-serif text-2xl font-semibold text-citadel-cream mt-12 mb-4">
                Why Wine Works as an Investment
              </h2>
              <ul className="space-y-3 text-citadel-cream/70">
                <li><strong className="text-citadel-cream">Diminishing supply:</strong> Every bottle consumed reduces available supply, supporting prices.</li>
                <li><strong className="text-citadel-cream">Improving quality:</strong> Many wines improve with proper aging, increasing value over time.</li>
                <li><strong className="text-citadel-cream">Global demand:</strong> Growing wealth in Asia has expanded the buyer base significantly.</li>
                <li><strong className="text-citadel-cream">Limited production:</strong> Top estates produce fixed quantities regardless of demand.</li>
              </ul>

              <h2 className="font-serif text-2xl font-semibold text-citadel-cream mt-12 mb-4">
                The Costs to Consider
              </h2>
              <p className="text-citadel-cream/70 leading-relaxed">
                Wine isn't a cost-free investment:
              </p>
              <ul className="space-y-2 text-citadel-cream/70">
                <li><strong className="text-citadel-cream">Storage:</strong> Professional bonded storage runs $15-25 per case annually.</li>
                <li><strong className="text-citadel-cream">Insurance:</strong> Typically 0.5-1% of value per year.</li>
                <li><strong className="text-citadel-cream">Transaction costs:</strong> Auction houses charge 10-25% buyer's premium.</li>
                <li><strong className="text-citadel-cream">Authentication:</strong> Provenance documentation is essential for high-value bottles.</li>
              </ul>

              <h2 className="font-serif text-2xl font-semibold text-citadel-cream mt-12 mb-4">
                How to Invest in Wine
              </h2>
              <p className="text-citadel-cream/70 leading-relaxed mb-4">
                There are several approaches depending on your capital and expertise:
              </p>
              <ul className="space-y-3 text-citadel-cream/70">
                <li><strong className="text-citadel-cream">Direct purchase:</strong> Buy and store physical bottles. Requires expertise and minimum ~$25K for meaningful diversification.</li>
                <li><strong className="text-citadel-cream">Wine funds:</strong> Managed portfolios of wine, typically requiring $100K+ minimum.</li>
                <li><strong className="text-citadel-cream">Platforms like Vinovest:</strong> Lower minimums ($1K+), professional management, and storage included.</li>
              </ul>

              <div className="my-12 p-6 bg-citadel-charcoal rounded-xl border border-citadel-gold/30">
                <h4 className="font-serif text-lg font-semibold text-citadel-cream mb-2">
                  Our Recommendation
                </h4>
                <p className="text-citadel-cream/70">
                  For most investors, platforms like Vinovest offer the best combination 
                  of accessibility, diversification, and professional management. Direct 
                  buying is best reserved for those with genuine expertise and passion 
                  for wine.
                </p>
              </div>
            </article>

            {/* CTA */}
            <div className="mt-12 p-6 bg-citadel-charcoal rounded-xl">
              <h3 className="font-serif text-xl font-semibold text-citadel-cream mb-4">
                Explore Wine Investing
              </h3>
              <p className="text-citadel-cream/60 mb-6">
                Learn more about adding fine wine to your alternative portfolio.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/collectibles/wine" className="btn-primary">
                  <Wine className="w-4 h-4 mr-2" />
                  Wine Investment Guide
                </Link>
                <Link href="/tools/allocation-calculator" className="btn-secondary">
                  Portfolio Calculator
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

