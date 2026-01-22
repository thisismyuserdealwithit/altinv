import type { Metadata } from 'next'
import Link from 'next/link'
import { PieChart, Globe, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Investment Tools | Alternative Allocation',
  description: 'Free tools for alternative investors. Portfolio allocation calculator and international transfer cost comparison.',
  keywords: 'investment calculator, portfolio allocation tool, international transfer calculator, alternative investment tools',
}

const tools = [
  {
    icon: PieChart,
    name: 'Allocation Calculator',
    description: 'Find out how much to allocate to alternatives based on your portfolio size. We recommend 1.5% at $100K scaling up to 5% at $50M.',
    category: 'Portfolio',
    access: 'Free',
    featured: true,
    href: '/tools/allocation-calculator',
  },
  {
    icon: Globe,
    name: 'Transfer Calculator',
    description: 'Compare international transfer costs across banks and services. See exactly how much you save when moving money for Dubai property or international investments.',
    category: 'Transfers',
    access: 'Free',
    featured: true,
    href: '/tools/transfer-calculator',
  },
]

export default function ToolsPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="section-padding gradient-hero">
        <div className="container-custom">
          <div className="max-w-3xl">
            <p className="text-citadel-gold uppercase tracking-[0.2em] text-sm font-medium mb-4">
              Free Tools
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-citadel-cream mb-6 leading-tight">
              Calculate Your<br />Alternative Allocation
            </h1>
            <p className="text-xl text-citadel-cream/60 leading-relaxed mb-8">
              Simple tools to help you understand how much to allocate to alternatives 
              and how to move money internationally at the best rates.
            </p>
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="section-padding bg-citadel-black">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8">
            {tools.map((tool) => (
              <Link
                key={tool.name}
                href={tool.href}
                className="card-elevated gold-glow group"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-4 rounded-xl bg-citadel-gold/10">
                    <tool.icon className="w-8 h-8 text-citadel-gold" />
                  </div>
                  <div>
                    <span className="text-xs text-green-400 uppercase tracking-wide">{tool.access}</span>
                    <h3 className="font-serif text-2xl font-semibold text-citadel-cream group-hover:text-citadel-gold transition-colors">
                      {tool.name}
                    </h3>
                  </div>
                </div>
                <p className="text-citadel-cream/60 mb-6">
                  {tool.description}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-citadel-border">
                  <span className="text-xs px-2 py-1 bg-citadel-slate rounded text-citadel-cream/60">
                    {tool.category}
                  </span>
                  <span className="text-citadel-gold group-hover:underline inline-flex items-center gap-1">
                    Open Tool
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-citadel-charcoal">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-citadel-cream mb-4">
              Need More Guidance?
            </h2>
            <p className="text-citadel-cream/60 mb-8">
              Our tools give you a starting point. For personalized advice, 
              book a free call with one of our alternative investment specialists.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/call" className="btn-primary">
                Book a Free Call
              </Link>
              <Link href="/newsletter" className="btn-secondary">
                Join the Newsletter
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
