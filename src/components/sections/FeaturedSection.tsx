import Link from 'next/link'
import { ArrowRight, Flame } from 'lucide-react'

const featured = [
  {
    type: 'Rare Metals',
    title: 'Gallium: The Semiconductor Metal',
    description: 'China controls 80% of production. US dependency is 100%. Strategic investors are paying attention to this critical element.',
    tag: 'Deep Dive',
    href: '/metals/gallium',
    color: 'border-citadel-gold',
  },
  {
    type: 'Dubai Real Estate',
    title: 'Why Dubai? Tax Free Returns',
    description: 'Zero income tax, high rental yields, and golden visa eligibility. The case for Dubai property investment.',
    tag: 'Guide',
    href: '/real-estate/dubai',
    color: 'border-green-500',
  },
  {
    type: 'Fine Art',
    title: 'Blue Chip Art Explained',
    description: 'How fractional ownership lets you invest in Basquiat and Warhol without millions in capital.',
    tag: 'Partner: Yieldstreet',
    href: '/art',
    color: 'border-pink-500',
  },
]

export function FeaturedSection() {
  return (
    <section className="section-padding bg-citadel-charcoal">
      <div className="container-custom">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <Flame className="w-5 h-5 text-citadel-gold" />
          <h2 className="font-serif text-2xl font-semibold text-citadel-cream">
            Featured This Week
          </h2>
        </div>

        {/* Featured Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {featured.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className={`card-elevated border-t-4 ${item.color} group`}
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs text-citadel-cream/50 uppercase tracking-wide">
                  {item.type}
                </span>
                <span className="text-xs px-2 py-0.5 bg-citadel-gold/20 text-citadel-gold rounded">
                  {item.tag}
                </span>
              </div>
              
              <h3 className="font-serif text-xl font-semibold text-citadel-cream group-hover:text-citadel-gold transition-colors mb-2">
                {item.title}
              </h3>
              
              <p className="text-sm text-citadel-cream/60 mb-4">
                {item.description}
              </p>

              <div className="flex items-center text-sm text-citadel-gold">
                <span>Explore</span>
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
