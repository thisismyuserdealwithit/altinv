import Link from 'next/link'
import { ArrowRight, PieChart, Globe } from 'lucide-react'

const tools = [
  {
    icon: PieChart,
    name: 'Allocation Calculator',
    description: 'Find out how much to allocate to alternatives based on your portfolio size',
    href: '/tools/allocation-calculator',
    featured: true,
  },
  {
    icon: Globe,
    name: 'Transfer Calculator',
    description: 'Compare international transfer costs and find the best rates',
    href: '/tools/transfer-calculator',
    featured: true,
  },
]

export function ToolsSection() {
  return (
    <section className="section-padding bg-citadel-black">
      <div className="container-custom">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-citadel-gold uppercase tracking-[0.2em] text-sm font-medium mb-4">
              Free Tools
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-citadel-cream">
              Calculate Your Options
            </h2>
          </div>
          <Link href="/tools" className="btn-secondary group">
            View All Tools
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Tools Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {tools.map((tool) => (
            <Link
              key={tool.name}
              href={tool.href}
              className={`card group hover:border-citadel-gold/30 transition-all ${
                tool.featured ? 'gold-glow' : ''
              }`}
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-lg ${tool.featured ? 'bg-citadel-gold/10' : 'bg-citadel-slate'}`}>
                  <tool.icon className={`w-6 h-6 ${tool.featured ? 'text-citadel-gold' : 'text-citadel-cream/50'}`} />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-xl font-semibold text-citadel-cream group-hover:text-citadel-gold transition-colors mb-2">
                    {tool.name}
                  </h3>
                  <p className="text-citadel-cream/60">
                    {tool.description}
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 text-citadel-cream/20 group-hover:text-citadel-gold group-hover:translate-x-1 transition-all" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
