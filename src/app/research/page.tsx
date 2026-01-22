import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, BookOpen, FileText, TrendingUp, Video, Mic, Clock, Lock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Research & Insights | Alternative Investment Analysis | Alt-Wealth Citadel',
  description: 'In-depth research on alternative investments. Market analysis, investment theses, due diligence guides, and expert commentary on metals, real estate, and collectibles.',
  keywords: 'alternative investment research, market analysis, investment thesis, due diligence guide, metals research, real estate analysis',
}

const featuredArticles = [
  {
    title: 'The Strategic Metals Thesis: Why Gallium Matters More Than Gold',
    excerpt: 'Semiconductor supply chains depend on materials most investors have never heard of. Here\'s why critical minerals are the new precious metals.',
    category: 'Metals',
    readTime: '12 min',
    date: 'Jan 6, 2026',
    featured: true,
    href: '/research/strategic-metals-thesis',
  },
  {
    title: '2026 Real Estate Outlook: Where to Find Yield in a Higher-Rate World',
    excerpt: 'Cap rates have expanded, but not uniformly. Our metro-by-metro analysis reveals pockets of value in industrial, multifamily, and self-storage.',
    category: 'Real Estate',
    readTime: '18 min',
    date: 'Jan 3, 2026',
    featured: true,
    href: '/research/2026-real-estate-outlook',
  },
  {
    title: 'The SDIRA Playbook: Tax-Free Alternatives Investing',
    excerpt: 'How sophisticated investors use Self-Directed IRAs to buy metals, real estate, and private deals inside a tax-sheltered wrapper.',
    category: 'Strategy',
    readTime: '15 min',
    date: 'Dec 28, 2025',
    featured: true,
    href: '/research/sdira-playbook',
  },
]

const articles = [
  {
    title: 'Collectibles as an Asset Class: Beyond the Hype',
    excerpt: 'Historical returns, correlation data, and due diligence frameworks for art, wine, and watches.',
    category: 'Collectibles',
    readTime: '10 min',
    date: 'Dec 21, 2025',
    href: '/research/collectibles-asset-class',
  },
  {
    title: 'International Banking for US Investors: A Compliance-First Guide',
    excerpt: 'FBAR, FATCA, and the legal ways to bank offshore. What you need to know before opening that HSBC Expat account.',
    category: 'Global',
    readTime: '8 min',
    date: 'Dec 15, 2025',
    href: '/research/international-banking-guide',
  },
  {
    title: 'Real Estate Syndication Due Diligence: 47 Questions to Ask',
    excerpt: 'Before you wire $50K to a sponsor, here\'s the complete checklist we use to evaluate deals.',
    category: 'Real Estate',
    readTime: '14 min',
    date: 'Dec 10, 2025',
    href: '/research/syndication-due-diligence',
  },
  {
    title: 'Rare Earth Supply Chains: China\'s Chokehold',
    excerpt: 'Mapping the geopolitical risks in critical mineral supply chains—and how investors can profit from reshoring.',
    category: 'Metals',
    readTime: '11 min',
    date: 'Dec 5, 2025',
    href: '/research/rare-earth-supply-chains',
  },
  {
    title: 'The Case for Fine Wine: Bordeaux as a 30-Year Investment',
    excerpt: 'Château Lafite vs. the S&P 500. We ran the numbers on three decades of fine wine returns.',
    category: 'Collectibles',
    readTime: '9 min',
    date: 'Nov 28, 2025',
    href: '/research/fine-wine-investment',
  },
  {
    title: 'Entity Structuring for Alternative Investors',
    excerpt: 'LLC vs. Trust vs. Direct: How to hold different alternative assets for optimal tax and liability treatment.',
    category: 'Strategy',
    readTime: '13 min',
    date: 'Nov 20, 2025',
    href: '/research/entity-structuring',
  },
]

const categories = [
  { name: 'All', count: 24 },
  { name: 'Metals', count: 6 },
  { name: 'Real Estate', count: 8 },
  { name: 'Collectibles', count: 4 },
  { name: 'Global', count: 3 },
  { name: 'Strategy', count: 5 },
]

const resources = [
  {
    icon: FileText,
    title: 'Investment Memos',
    description: 'Detailed analysis on specific opportunities',
    access: 'Member',
    count: 12,
  },
  {
    icon: Video,
    title: 'Video Library',
    description: 'Expert interviews and market commentary',
    access: 'Free',
    count: 45,
  },
  {
    icon: Mic,
    title: 'Podcast Archive',
    description: 'The Alt-Wealth Hour weekly episodes',
    access: 'Free',
    count: 78,
  },
  {
    icon: BookOpen,
    title: 'Guides & Playbooks',
    description: 'Comprehensive how-to resources',
    access: 'Free',
    count: 15,
  },
]

export default function ResearchPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="section-padding gradient-hero">
        <div className="container-custom">
          <div className="max-w-3xl">
            <p className="text-citadel-gold uppercase tracking-[0.2em] text-sm font-medium mb-4">
              Research & Insights
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-citadel-cream mb-6 leading-tight">
              Intelligence for<br />Alternative Investors
            </h1>
            <p className="text-xl text-citadel-cream/60 leading-relaxed mb-8">
              Go beyond the headlines. Our research team delivers actionable 
              analysis on metals, real estate, collectibles, and wealth strategy—
              the kind of insight that was once reserved for family offices.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="#articles" className="btn-primary">
                Latest Research
              </Link>
              <Link href="/membership" className="btn-secondary">
                Unlock Full Access
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="section-padding bg-citadel-black">
        <div className="container-custom">
          <h2 className="font-serif text-2xl font-semibold text-citadel-cream mb-8">
            Featured Analysis
          </h2>

          <div className="grid lg:grid-cols-3 gap-6">
            {featuredArticles.map((article, index) => (
              <Link
                key={article.title}
                href={article.href}
                className={`card-elevated group ${index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''}`}
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs px-2 py-1 bg-citadel-gold/20 text-citadel-gold rounded">
                    {article.category}
                  </span>
                  <span className="text-xs text-citadel-cream/50">{article.date}</span>
                </div>
                
                <h3 className={`font-serif font-semibold text-citadel-cream group-hover:text-citadel-gold transition-colors mb-3 ${index === 0 ? 'text-2xl md:text-3xl' : 'text-xl'}`}>
                  {article.title}
                </h3>
                
                <p className={`text-citadel-cream/60 ${index === 0 ? 'text-base' : 'text-sm'}`}>
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-citadel-border">
                  <div className="flex items-center gap-2 text-xs text-citadel-cream/50">
                    <Clock className="w-3 h-3" />
                    {article.readTime} read
                  </div>
                  <span className="text-sm text-citadel-gold group-hover:underline">
                    Read More →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Articles List */}
      <section id="articles" className="section-padding bg-citadel-charcoal">
        <div className="container-custom">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <h3 className="font-serif text-lg font-semibold text-citadel-cream mb-4">
                  Categories
                </h3>
                <div className="space-y-2">
                  {categories.map((cat) => (
                    <button
                      key={cat.name}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors ${
                        cat.name === 'All'
                          ? 'bg-citadel-gold/10 text-citadel-gold'
                          : 'text-citadel-cream/70 hover:bg-citadel-slate'
                      }`}
                    >
                      <span>{cat.name}</span>
                      <span className="text-xs text-citadel-cream/50">{cat.count}</span>
                    </button>
                  ))}
                </div>

                <div className="mt-8 p-4 bg-citadel-slate rounded-xl">
                  <h4 className="font-medium text-citadel-cream mb-2">Newsletter</h4>
                  <p className="text-xs text-citadel-cream/60 mb-3">
                    Weekly insights delivered to your inbox.
                  </p>
                  <input
                    type="email"
                    placeholder="you@email.com"
                    className="w-full bg-citadel-charcoal border border-citadel-border rounded-lg px-3 py-2 text-sm text-citadel-cream mb-2 focus:outline-none focus:border-citadel-gold"
                  />
                  <button className="btn-primary w-full text-sm py-2">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>

            {/* Articles Grid */}
            <div className="lg:col-span-3">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-serif text-2xl font-semibold text-citadel-cream">
                  All Research
                </h2>
                <select className="bg-citadel-slate border border-citadel-border rounded-lg px-3 py-2 text-sm text-citadel-cream focus:outline-none">
                  <option>Most Recent</option>
                  <option>Most Popular</option>
                  <option>Oldest First</option>
                </select>
              </div>

              <div className="space-y-6">
                {articles.map((article) => (
                  <Link
                    key={article.title}
                    href={article.href}
                    className="block card group hover:border-citadel-gold/30 transition-colors"
                  >
                    <div className="flex flex-col md:flex-row md:items-start gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xs px-2 py-0.5 bg-citadel-slate rounded text-citadel-cream/70">
                            {article.category}
                          </span>
                          <span className="text-xs text-citadel-cream/50">{article.date}</span>
                        </div>
                        <h3 className="font-serif text-lg font-semibold text-citadel-cream group-hover:text-citadel-gold transition-colors mb-2">
                          {article.title}
                        </h3>
                        <p className="text-sm text-citadel-cream/60">
                          {article.excerpt}
                        </p>
                      </div>
                      <div className="flex items-center gap-4 md:flex-col md:items-end">
                        <div className="flex items-center gap-1 text-xs text-citadel-cream/50">
                          <Clock className="w-3 h-3" />
                          {article.readTime}
                        </div>
                        <ArrowRight className="w-5 h-5 text-citadel-cream/30 group-hover:text-citadel-gold transition-colors" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="mt-8 text-center">
                <button className="btn-secondary">
                  Load More Articles
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resource Types */}
      <section className="section-padding bg-citadel-black">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-citadel-cream mb-4">
              More Ways to Learn
            </h2>
            <p className="text-citadel-cream/60">
              Beyond articles, we offer video content, podcasts, and downloadable 
              resources to help you make smarter investment decisions.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource) => (
              <div key={resource.title} className="card group hover:border-citadel-gold/30 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-citadel-slate">
                    <resource.icon className="w-5 h-5 text-citadel-gold" />
                  </div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-serif text-lg font-semibold text-citadel-cream">
                      {resource.title}
                    </h3>
                    {resource.access === 'Member' && (
                      <Lock className="w-3 h-3 text-citadel-gold" />
                    )}
                  </div>
                </div>
                <p className="text-sm text-citadel-cream/60 mb-3">
                  {resource.description}
                </p>
                <div className="text-xs text-citadel-cream/50">
                  {resource.count} available
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-citadel-charcoal">
        <div className="container-custom">
          <div className="card gold-glow max-w-3xl mx-auto text-center">
            <TrendingUp className="w-10 h-10 text-citadel-gold mx-auto mb-4" />
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-citadel-cream mb-4">
              Get Premium Research
            </h2>
            <p className="text-citadel-cream/60 mb-6">
              Members get access to investment memos, deal analysis, and 
              exclusive market intelligence. Join the investors who know more.
            </p>
            <Link href="/membership" className="btn-primary">
              View Membership Options
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

