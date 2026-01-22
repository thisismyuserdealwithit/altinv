import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Clock, Calendar, Share2, Bookmark, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'The Strategic Metals Thesis | Why Gallium Matters More Than Gold | Alt-Wealth Citadel',
  description: 'Deep analysis of strategic metals as an investment. Gallium, germanium, and rare earths in the context of semiconductor supply chains and geopolitical risk.',
  keywords: 'strategic metals investment thesis, gallium analysis, germanium investing, critical minerals, semiconductor metals',
}

export default function StrategicMetalsThesisPage() {
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
              <span className="text-xs px-2 py-1 bg-citadel-gold/20 text-citadel-gold rounded">
                Deep Dive
              </span>
              <span className="text-xs px-2 py-1 bg-citadel-slate text-citadel-cream/60 rounded">
                Metals
              </span>
            </div>
            
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-citadel-cream mb-6 leading-tight">
              The Strategic Metals Thesis: Why Gallium Matters More Than Gold
            </h1>
            
            <p className="text-xl text-citadel-cream/60 leading-relaxed mb-8">
              Semiconductor supply chains depend on materials most investors have never 
              heard of. Here's why critical minerals are the new precious metals.
            </p>

            <div className="flex items-center gap-6 text-sm text-citadel-cream/50">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                January 6, 2026
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                12 min read
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="section-padding bg-citadel-black">
        <div className="container-custom">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Sidebar */}
            <div className="lg:col-span-1 order-2 lg:order-1">
              <div className="sticky top-24 space-y-6">
                <div className="card">
                  <h4 className="font-medium text-citadel-cream mb-3">Table of Contents</h4>
                  <ul className="space-y-2 text-sm">
                    {[
                      'The Problem with Precious Metals',
                      'Enter Strategic Metals',
                      'Supply Chain Vulnerabilities',
                      'The Investment Case',
                      'How to Invest',
                      'Risks to Consider',
                    ].map((item, i) => (
                      <li key={i}>
                        <a href={`#section-${i}`} className="text-citadel-cream/60 hover:text-citadel-gold transition-colors">
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-2">
                  <button className="flex-1 btn-secondary text-sm py-2 flex items-center justify-center gap-2">
                    <Share2 className="w-4 h-4" /> Share
                  </button>
                  <button className="flex-1 btn-secondary text-sm py-2 flex items-center justify-center gap-2">
                    <Bookmark className="w-4 h-4" /> Save
                  </button>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3 order-1 lg:order-2">
              <article className="prose prose-invert prose-citadel max-w-none">
                <p className="text-lg text-citadel-cream/80 leading-relaxed">
                  When investors think about defensive assets, gold immediately comes to mind. 
                  For centuries, gold has served as the ultimate store of value—portable, 
                  divisible, and universally recognized. But in the 21st century, a new 
                  category of metals has emerged that may offer even more compelling 
                  investment characteristics: strategic metals.
                </p>

                <h2 id="section-0" className="font-serif text-2xl font-semibold text-citadel-cream mt-12 mb-4">
                  The Problem with Precious Metals
                </h2>
                <p className="text-citadel-cream/70 leading-relaxed">
                  Gold is a mature market. Central banks hold massive reserves. ETFs 
                  provide easy exposure. Futures markets allow leverage. The asset 
                  class is well-understood and efficiently priced.
                </p>
                <p className="text-citadel-cream/70 leading-relaxed">
                  This efficiency is a double-edged sword. While gold remains a solid 
                  store of value, the opportunity for outsized returns has diminished. 
                  Gold moved roughly sideways from 2011 to 2019. Even its pandemic-era 
                  surge was modest compared to risk assets.
                </p>
                <p className="text-citadel-cream/70 leading-relaxed">
                  More importantly, gold's industrial applications are limited. About 
                  50% of gold demand comes from jewelry, 25% from investment, and only 
                  10% from technology and industry. Gold is valuable because we collectively 
                  agree it's valuable—not because the modern economy depends on it.
                </p>

                <h2 id="section-1" className="font-serif text-2xl font-semibold text-citadel-cream mt-12 mb-4">
                  Enter Strategic Metals
                </h2>
                <p className="text-citadel-cream/70 leading-relaxed">
                  Strategic metals—gallium, germanium, indium, rare earths—share none of 
                  gold's limitations. Every smartphone contains gallium arsenide chips. 
                  Every fiber optic cable uses germanium. Every electric vehicle motor 
                  relies on rare earth magnets. These aren't speculative technologies; 
                  they're the backbone of the current global economy.
                </p>

                <div className="my-8 p-6 bg-citadel-charcoal rounded-xl border border-citadel-border">
                  <h4 className="font-serif text-lg font-semibold text-citadel-cream mb-4">
                    Key Statistics
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="block text-2xl font-mono text-citadel-gold">80%</span>
                      <span className="text-sm text-citadel-cream/60">China's share of gallium production</span>
                    </div>
                    <div>
                      <span className="block text-2xl font-mono text-citadel-gold">100%</span>
                      <span className="text-sm text-citadel-cream/60">US import dependency for gallium</span>
                    </div>
                    <div>
                      <span className="block text-2xl font-mono text-citadel-gold">~1kg</span>
                      <span className="text-sm text-citadel-cream/60">Rare earths in a Tesla motor</span>
                    </div>
                    <div>
                      <span className="block text-2xl font-mono text-citadel-gold">5-10 yrs</span>
                      <span className="text-sm text-citadel-cream/60">To build new supply capacity</span>
                    </div>
                  </div>
                </div>

                <h2 id="section-2" className="font-serif text-2xl font-semibold text-citadel-cream mt-12 mb-4">
                  Supply Chain Vulnerabilities
                </h2>
                <p className="text-citadel-cream/70 leading-relaxed">
                  The investment case for strategic metals rests on a simple observation: 
                  demand is growing, supply is constrained, and concentration creates 
                  geopolitical risk.
                </p>
                <p className="text-citadel-cream/70 leading-relaxed">
                  In July 2023, China announced export restrictions on gallium and 
                  germanium. Prices spiked immediately. This wasn't the first time—China 
                  restricted rare earth exports in 2010 during a diplomatic dispute with 
                  Japan, sending prices up 10x.
                </p>
                <p className="text-citadel-cream/70 leading-relaxed">
                  Western governments are scrambling to respond. The US CHIPS Act, EU 
                  Critical Raw Materials Act, and similar legislation aim to build 
                  alternative supply chains. But these efforts will take years to 
                  materialize. You can't build a rare earth processing facility overnight.
                </p>

                <h2 id="section-3" className="font-serif text-2xl font-semibold text-citadel-cream mt-12 mb-4">
                  The Investment Case
                </h2>
                <p className="text-citadel-cream/70 leading-relaxed">
                  Strategic metals offer several advantages over traditional precious metals:
                </p>
                <ul className="space-y-2 text-citadel-cream/70">
                  <li><strong className="text-citadel-cream">Industrial demand:</strong> Prices are driven by real consumption, not sentiment.</li>
                  <li><strong className="text-citadel-cream">Inelastic supply:</strong> Most strategic metals are byproducts—you can't simply "mine more."</li>
                  <li><strong className="text-citadel-cream">Geopolitical optionality:</strong> Supply concentration creates event-driven upside.</li>
                  <li><strong className="text-citadel-cream">Inefficient markets:</strong> No futures, limited ETFs, less institutional coverage.</li>
                </ul>

                <h2 id="section-4" className="font-serif text-2xl font-semibold text-citadel-cream mt-12 mb-4">
                  How to Invest
                </h2>
                <p className="text-citadel-cream/70 leading-relaxed">
                  Unlike gold, strategic metals lack developed financial markets. There 
                  are no gallium ETFs. No germanium futures. This creates barriers—but 
                  also opportunities for those willing to invest directly in physical metal.
                </p>
                <p className="text-citadel-cream/70 leading-relaxed">
                  Direct ownership of physical strategic metals offers:
                </p>
                <ul className="space-y-2 text-citadel-cream/70">
                  <li>Pure exposure to commodity prices</li>
                  <li>No counterparty risk</li>
                  <li>Tax advantages in some jurisdictions</li>
                  <li>SDIRA eligibility (strategic metals are not "collectibles")</li>
                </ul>

                <h2 id="section-5" className="font-serif text-2xl font-semibold text-citadel-cream mt-12 mb-4">
                  Risks to Consider
                </h2>
                <p className="text-citadel-cream/70 leading-relaxed">
                  Strategic metals are not risk-free investments:
                </p>
                <ul className="space-y-2 text-citadel-cream/70">
                  <li><strong className="text-citadel-cream">Illiquidity:</strong> No public market means selling takes effort.</li>
                  <li><strong className="text-citadel-cream">Storage costs:</strong> Physical metals require secure storage.</li>
                  <li><strong className="text-citadel-cream">Technology risk:</strong> Substitution could reduce demand.</li>
                  <li><strong className="text-citadel-cream">Supply response:</strong> Eventually, new capacity will come online.</li>
                </ul>

                <div className="my-12 p-6 bg-citadel-charcoal rounded-xl border border-citadel-gold/30">
                  <h4 className="font-serif text-lg font-semibold text-citadel-cream mb-2">
                    Conclusion
                  </h4>
                  <p className="text-citadel-cream/70">
                    Strategic metals represent a compelling addition to alternative asset 
                    portfolios. They offer industrial demand, structural supply constraints, 
                    and geopolitical optionality. While they require more effort to acquire 
                    and hold than gold ETFs, the potential returns—and the portfolio 
                    diversification benefits—make them worth serious consideration.
                  </p>
                </div>
              </article>

              {/* CTA */}
              <div className="mt-12 p-6 bg-citadel-charcoal rounded-xl">
                <h3 className="font-serif text-xl font-semibold text-citadel-cream mb-4">
                  Ready to Explore Strategic Metals?
                </h3>
                <p className="text-citadel-cream/60 mb-6">
                  Learn more about individual metals or request a quote from our metals desk.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/metals" className="btn-primary">
                    Explore Metals
                  </Link>
                  <Link href="/contact?type=metals" className="btn-secondary">
                    Request Quote
                  </Link>
                </div>
              </div>

              {/* Related Articles */}
              <div className="mt-12">
                <h3 className="font-serif text-xl font-semibold text-citadel-cream mb-6">
                  Related Research
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { title: 'Rare Earth Supply Chains: China\'s Chokehold', category: 'Metals', href: '/research/rare-earth-supply-chains' },
                    { title: 'The SDIRA Playbook: Tax-Free Alternatives', category: 'Strategy', href: '/research/sdira-playbook' },
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
        </div>
      </section>
    </div>
  )
}

