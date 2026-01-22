import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Palette, Calendar, Clock, TrendingUp } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Art Market Outlook 2026 | Alternative Allocation',
  description: 'Analysis of the fine art market heading into 2026. Auction trends, top performing artists, and the rise of fractional ownership.',
}

export default function ArtMarketOutlookPage() {
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
              <Palette className="w-6 h-6 text-pink-400" />
              <span className="text-pink-400 text-sm uppercase tracking-[0.2em]">Research</span>
            </div>
            <h1 className="font-serif text-3xl md:text-4xl font-semibold text-citadel-cream mb-6">
              Art Market Outlook for 2026
            </h1>
            <div className="flex items-center gap-6 text-sm text-citadel-cream/60">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                January 2026
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                10 min read
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
              Market Overview
            </h2>
            <p className="text-citadel-cream/70 leading-relaxed">
              The global art market reached $65 billion in 2025, recovering from 
              post-pandemic volatility. High-net-worth collectors continue to view 
              blue chip art as a store of value, particularly during periods of 
              inflation and market uncertainty.
            </p>
            <p className="text-citadel-cream/70 leading-relaxed">
              Contemporary art remains the strongest segment, with post-war and 
              modern masters consistently outperforming the broader market. 
              Emerging artists present higher risk but also higher potential returns.
            </p>

            <div className="my-8 p-6 bg-citadel-charcoal rounded-xl border border-citadel-border">
              <h4 className="font-serif text-lg font-semibold text-citadel-cream mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-pink-400" />
                Top Performing Artists (5yr CAGR)
              </h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between pb-2 border-b border-citadel-border">
                  <span className="text-citadel-cream">Jean-Michel Basquiat</span>
                  <span className="font-mono text-pink-400">+17.9%</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-citadel-border">
                  <span className="text-citadel-cream">Banksy</span>
                  <span className="font-mono text-pink-400">+14.2%</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-citadel-border">
                  <span className="text-citadel-cream">Andy Warhol</span>
                  <span className="font-mono text-pink-400">+12.4%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-citadel-cream">Gerhard Richter</span>
                  <span className="font-mono text-pink-400">+10.8%</span>
                </div>
              </div>
            </div>

            <h2 className="font-serif text-2xl font-semibold text-citadel-cream mt-12">
              The Rise of Fractional Ownership
            </h2>
            <p className="text-citadel-cream/70 leading-relaxed">
              Fractional art platforms have democratized access to museum quality 
              works. Platforms like Yieldstreet and Masterworks allow investors 
              to purchase shares in individual paintings for as little as $500.
            </p>
            <p className="text-citadel-cream/70 leading-relaxed">
              This model has attracted over $1 billion in capital since 2020, 
              with typical holding periods of 5 to 10 years before works are 
              sold at auction.
            </p>

            <h2 className="font-serif text-2xl font-semibold text-citadel-cream mt-12">
              Key Trends for 2026
            </h2>
            <ul className="space-y-3 text-citadel-cream/70">
              <li><strong className="text-citadel-cream">Ultra-Contemporary Rising:</strong> Artists under 40 seeing strong collector interest</li>
              <li><strong className="text-citadel-cream">Asian Collectors:</strong> Growing presence at major auctions, particularly for Western contemporary</li>
              <li><strong className="text-citadel-cream">Digital Authentication:</strong> Blockchain provenance gaining traction with major houses</li>
              <li><strong className="text-citadel-cream">Sustainability Focus:</strong> Collectors increasingly valuing artist environmental practices</li>
            </ul>

            <h2 className="font-serif text-2xl font-semibold text-citadel-cream mt-12">
              Auction Market Dynamics
            </h2>
            <p className="text-citadel-cream/70 leading-relaxed">
              Christie's and Sotheby's continue to dominate the high end, with 
              Phillips growing share in contemporary. Online auctions now account 
              for 20% of sales, up from 5% pre-pandemic.
            </p>
            <p className="text-citadel-cream/70 leading-relaxed">
              The guarantee model remains prevalent, with auction houses pre-agreeing 
              minimum prices with third party guarantors. This reduces seller risk 
              but can distort price signals.
            </p>

            <h2 className="font-serif text-2xl font-semibold text-citadel-cream mt-12">
              Investment Considerations
            </h2>
            <p className="text-citadel-cream/70 leading-relaxed">
              Art should be viewed as a long term, illiquid allocation. Key 
              considerations include:
            </p>
            <ul className="space-y-2 text-citadel-cream/70">
              <li>Focus on blue chip artists with established auction records</li>
              <li>Diversify across artists, periods, and mediums</li>
              <li>Factor in storage, insurance, and transaction costs</li>
              <li>Understand the 28% collectibles tax rate on gains</li>
              <li>Be prepared for 5 to 10 year holding periods</li>
            </ul>

            <h2 className="font-serif text-2xl font-semibold text-citadel-cream mt-12">
              Outlook
            </h2>
            <p className="text-citadel-cream/70 leading-relaxed">
              We remain constructive on blue chip art as a portfolio diversifier. 
              The combination of limited supply (established artists cannot increase 
              output), growing collector base, and inflation hedging properties 
              supports continued appreciation.
            </p>
            <p className="text-citadel-cream/70 leading-relaxed">
              Fractional platforms have lowered barriers to entry, making 
              institutional quality art accessible to individual investors 
              for the first time.
            </p>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-citadel-charcoal">
        <div className="container-custom text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-citadel-cream mb-4">
            Explore Art Investments
          </h2>
          <p className="text-citadel-cream/60 mb-8 max-w-2xl mx-auto">
            Ready to add fine art to your portfolio? Learn more about 
            fractional ownership opportunities.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/art" className="btn-primary">
              View Current Offerings
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

