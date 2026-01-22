import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Clock, Calendar, ArrowRight, TrendingUp, Palette, Wine, Watch, Gem } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Collectibles as an Asset Class | Beyond the Hype | Alt-Wealth Citadel',
  description: 'Data-driven analysis of collectibles investing. Historical returns, correlation data, and due diligence frameworks for art, wine, watches, and more.',
  keywords: 'collectibles investing, art returns, wine investment data, luxury watch market, passion assets, alternative investments',
}

const assetReturns = [
  { asset: 'Contemporary Art', return: '14.1%', period: '1995-2023', correlation: 0.12, volatility: '18%' },
  { asset: 'Fine Wine (Liv-ex 100)', return: '10.2%', period: '2004-2023', correlation: 0.19, volatility: '12%' },
  { asset: 'Rare Watches', return: '8.4%', period: '2010-2023', correlation: 0.24, volatility: '15%' },
  { asset: 'Classic Cars', return: '9.8%', period: '2005-2023', correlation: 0.21, volatility: '22%' },
  { asset: 'S&P 500', return: '10.5%', period: '1995-2023', correlation: 1.0, volatility: '16%' },
]

export default function CollectiblesAssetClassPage() {
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
              <span className="text-xs px-2 py-1 bg-purple-500/20 text-purple-400 rounded">
                Analysis
              </span>
              <span className="text-xs px-2 py-1 bg-citadel-slate text-citadel-cream/60 rounded">
                Collectibles
              </span>
            </div>
            
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-citadel-cream mb-6 leading-tight">
              Collectibles as an Asset Class: Beyond the Hype
            </h1>
            
            <p className="text-xl text-citadel-cream/60 leading-relaxed mb-8">
              Historical returns, correlation data, and due diligence frameworks 
              for art, wine, watches, and cars. What the data actually says.
            </p>

            <div className="flex items-center gap-6 text-sm text-citadel-cream/50">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                December 21, 2025
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                10 min read
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
                "Invest in what you love" makes for great marketing. But do collectibles 
                actually work as investments? We analyzed decades of data to separate 
                the hype from the reality.
              </p>

              <h2 className="font-serif text-2xl font-semibold text-citadel-cream mt-12 mb-4">
                The Data: How Collectibles Actually Perform
              </h2>
              <p className="text-citadel-cream/70 leading-relaxed mb-6">
                Let's start with the numbers. Here's how major collectible categories 
                compare to traditional equities:
              </p>
            </article>

            {/* Returns Table */}
            <div className="my-8 overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left text-sm text-citadel-cream/50 border-b border-citadel-border">
                    <th className="pb-3 pr-4">Asset Class</th>
                    <th className="pb-3 pr-4">Annualized Return</th>
                    <th className="pb-3 pr-4">Period</th>
                    <th className="pb-3 pr-4">S&P Correlation</th>
                    <th className="pb-3">Volatility</th>
                  </tr>
                </thead>
                <tbody>
                  {assetReturns.map((asset) => (
                    <tr key={asset.asset} className="border-b border-citadel-border">
                      <td className="py-3 pr-4 font-medium text-citadel-cream">{asset.asset}</td>
                      <td className="py-3 pr-4 font-mono text-green-400">{asset.return}</td>
                      <td className="py-3 pr-4 text-citadel-cream/60">{asset.period}</td>
                      <td className="py-3 pr-4 font-mono text-citadel-gold">{asset.correlation.toFixed(2)}</td>
                      <td className="py-3 text-citadel-cream/60">{asset.volatility}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <article className="prose prose-invert prose-citadel max-w-none">
              <p className="text-citadel-cream/70 leading-relaxed">
                The headline: top-tier collectibles have delivered equity-like returns 
                with lower correlation. Contemporary art leads with 14.1% annualized 
                returns and just 0.12 correlation to the S&P 500. Fine wine offers 
                lower volatility (12%) than any category including stocks.
              </p>

              <h2 className="font-serif text-2xl font-semibold text-citadel-cream mt-12 mb-4">
                The Survivorship Problem
              </h2>
              <p className="text-citadel-cream/70 leading-relaxed">
                These numbers come with a major caveat: survivorship bias. Indices 
                like the Mei Moses Art Index track only works that resell at auction—
                the successes. They exclude the artists who fell out of favor and 
                the works that never resold.
              </p>
              <p className="text-citadel-cream/70 leading-relaxed">
                Studies suggest the median artwork returns significantly less than 
                headline indices. One analysis found that while top-decile art 
                returned 20%+, bottom-decile works lost 3% annually.
              </p>

              <div className="my-8 p-6 bg-citadel-charcoal rounded-xl border border-citadel-border">
                <h4 className="font-serif text-lg font-semibold text-citadel-cream mb-2">
                  Key Insight
                </h4>
                <p className="text-citadel-cream/70">
                  Collectibles returns are highly skewed. A small number of "lottery 
                  ticket" works drive index returns. Most individual pieces 
                  underperform. This means expertise—or access to expert 
                  curation—is crucial.
                </p>
              </div>

              <h2 className="font-serif text-2xl font-semibold text-citadel-cream mt-12 mb-4">
                Category-by-Category Breakdown
              </h2>
            </article>

            {/* Category Cards */}
            <div className="my-8 grid md:grid-cols-2 gap-6">
              <div className="card">
                <Palette className="w-8 h-8 text-purple-400 mb-4" />
                <h3 className="font-serif text-xl font-semibold text-citadel-cream mb-2">Fine Art</h3>
                <p className="text-sm text-citadel-cream/60 mb-4">
                  Highest returns but also highest dispersion. Blue-chip artists 
                  (Basquiat, Warhol, Richter) outperform. Emerging artists are 
                  high-risk bets.
                </p>
                <div className="flex gap-4 text-xs text-citadel-cream/50">
                  <span>Min: $10K+</span>
                  <span>Hold: 5-10 yrs</span>
                </div>
              </div>

              <div className="card">
                <Wine className="w-8 h-8 text-red-400 mb-4" />
                <h3 className="font-serif text-xl font-semibold text-citadel-cream mb-2">Fine Wine</h3>
                <p className="text-sm text-citadel-cream/60 mb-4">
                  Most liquid collectible market. Bordeaux and Burgundy dominate. 
                  Transparent pricing via Liv-ex. Lower volatility profile.
                </p>
                <div className="flex gap-4 text-xs text-citadel-cream/50">
                  <span>Min: $2.5K</span>
                  <span>Hold: 5-15 yrs</span>
                </div>
              </div>

              <div className="card">
                <Watch className="w-8 h-8 text-citadel-gold mb-4" />
                <h3 className="font-serif text-xl font-semibold text-citadel-cream mb-2">Watches</h3>
                <p className="text-sm text-citadel-cream/60 mb-4">
                  Concentrated in three brands: Rolex, Patek, AP. Steel sports 
                  models command premiums. Wearable while holding.
                </p>
                <div className="flex gap-4 text-xs text-citadel-cream/50">
                  <span>Min: $15K+</span>
                  <span>Hold: 2-5 yrs</span>
                </div>
              </div>

              <div className="card">
                <Gem className="w-8 h-8 text-blue-400 mb-4" />
                <h3 className="font-serif text-xl font-semibold text-citadel-cream mb-2">Classic Cars</h3>
                <p className="text-sm text-citadel-cream/60 mb-4">
                  High storage and maintenance costs. Ferrari and Porsche lead. 
                  Requires expertise and access. Illiquid.
                </p>
                <div className="flex gap-4 text-xs text-citadel-cream/50">
                  <span>Min: $100K+</span>
                  <span>Hold: 5-10 yrs</span>
                </div>
              </div>
            </div>

            <article className="prose prose-invert prose-citadel max-w-none">
              <h2 className="font-serif text-2xl font-semibold text-citadel-cream mt-12 mb-4">
                The Role of Fractional Platforms
              </h2>
              <p className="text-citadel-cream/70 leading-relaxed">
                Platforms like Masterworks, Rally, and Vinovest have democratized 
                collectibles access. You can now buy shares in a Basquiat for $1,000 
                instead of needing $2 million.
              </p>
              <p className="text-citadel-cream/70 leading-relaxed">
                The tradeoffs: platform fees (typically 1-2% annual + 20% carry), 
                limited control, and illiquidity until the platform sells. But for 
                most investors, fractional ownership is the only practical way to 
                access institutional-quality collectibles.
              </p>

              <h2 className="font-serif text-2xl font-semibold text-citadel-cream mt-12 mb-4">
                Portfolio Allocation Recommendations
              </h2>
              <p className="text-citadel-cream/70 leading-relaxed">
                Family offices typically allocate 5-15% to "passion assets." For 
                individual investors, we suggest:
              </p>
              <ul className="space-y-2 text-citadel-cream/70">
                <li><strong className="text-citadel-cream">Conservative:</strong> 3-5% allocation, diversified across 2+ categories</li>
                <li><strong className="text-citadel-cream">Moderate:</strong> 5-10% allocation, with expertise in at least one category</li>
                <li><strong className="text-citadel-cream">Aggressive:</strong> Up to 15%, only with deep category knowledge</li>
              </ul>

              <div className="my-12 p-6 bg-citadel-charcoal rounded-xl border border-citadel-gold/30">
                <h4 className="font-serif text-lg font-semibold text-citadel-cream mb-2">
                  Bottom Line
                </h4>
                <p className="text-citadel-cream/70">
                  Collectibles can enhance portfolio returns and reduce correlation—but 
                  only with careful selection. Focus on categories with transparent 
                  pricing (wine, watches), stick to blue-chip assets within each 
                  category, and consider fractional platforms to achieve 
                  diversification. The average piece underperforms; the goal is 
                  avoiding average pieces.
                </p>
              </div>
            </article>

            {/* CTA */}
            <div className="mt-12 p-6 bg-citadel-charcoal rounded-xl">
              <h3 className="font-serif text-xl font-semibold text-citadel-cream mb-4">
                Explore Collectibles
              </h3>
              <p className="text-citadel-cream/60 mb-6">
                Ready to add collectibles to your portfolio? Explore our category 
                guides and platform comparisons.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/collectibles" className="btn-primary">
                  Browse Categories
                </Link>
                <Link href="/tools/allocation-calculator" className="btn-secondary">
                  Portfolio Calculator
                </Link>
              </div>
            </div>

            {/* Related */}
            <div className="mt-12">
              <h3 className="font-serif text-xl font-semibold text-citadel-cream mb-6">
                Related Research
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { title: 'Fine Wine Investment: A 30-Year Analysis', category: 'Collectibles', href: '/research/fine-wine-investment' },
                  { title: 'The Alt-Allocation Framework', category: 'Strategy', href: '/research/allocation-framework' },
                ].map((article) => (
                  <Link key={article.title} href={article.href} className="card group hover:border-citadel-gold/30 transition-colors">
                    <span className="text-xs text-citadel-gold">{article.category}</span>
                    <h4 className="font-serif text-lg font-semibold text-citadel-cream group-hover:text-citadel-gold transition-colors mt-1">
                      {article.title}
                    </h4>
                    <span className="text-sm text-citadel-gold mt-2 inline-flex items-center gap-1">
                      Read More <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

