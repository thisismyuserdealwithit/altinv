import Link from 'next/link'
import { ArrowRight, Clock, BookOpen } from 'lucide-react'

const articles = [
  {
    title: 'Why Rare Metals Belong in Your Portfolio',
    category: 'Rare Metals',
    readTime: '12 min',
    href: '/research/strategic-metals-thesis',
  },
  {
    title: 'Dubai Real Estate: Tax Free Returns Explained',
    category: 'Real Estate',
    readTime: '10 min',
    href: '/research/dubai-real-estate',
  },
  {
    title: 'Fine Art Investing Through Fractional Ownership',
    category: 'Art',
    readTime: '8 min',
    href: '/research/fractional-art',
  },
  {
    title: 'Litigation Finance: Uncorrelated Returns',
    category: 'Litigation',
    readTime: '10 min',
    href: '/research/litigation-finance',
  },
]

export function ResearchSection() {
  return (
    <section className="section-padding bg-citadel-charcoal">
      <div className="container-custom">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="w-5 h-5 text-citadel-gold" />
              <span className="text-citadel-gold uppercase tracking-[0.2em] text-sm font-medium">
                Research
              </span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-citadel-cream">
              Latest Insights
            </h2>
          </div>
          <Link href="/research" className="btn-secondary group">
            View All Research
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {articles.map((article) => (
            <Link
              key={article.title}
              href={article.href}
              className="card group hover:border-citadel-gold/30 transition-all"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs px-2 py-0.5 bg-citadel-slate rounded text-citadel-cream/60">
                  {article.category}
                </span>
                <span className="flex items-center gap-1 text-xs text-citadel-cream/40">
                  <Clock className="w-3 h-3" />
                  {article.readTime}
                </span>
              </div>
              
              <h3 className="font-serif text-lg font-semibold text-citadel-cream group-hover:text-citadel-gold transition-colors">
                {article.title}
              </h3>
              
              <div className="flex items-center mt-4 text-sm text-citadel-gold">
                <span>Read More</span>
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
