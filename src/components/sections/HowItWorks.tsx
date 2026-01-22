'use client'

import Link from 'next/link'
import { Search, Calculator, Briefcase, TrendingUp } from 'lucide-react'
import { TalkToExpertButton } from '../TalkToExpertButton'

const steps = [
  {
    icon: Search,
    number: '01',
    title: 'Explore',
    description: 'Browse our six alternative investment sectors. Read free research on rare metals, collectibles, Dubai real estate, art, litigation, and acquisitions.',
  },
  {
    icon: Calculator,
    number: '02',
    title: 'Calculate',
    description: 'Use our free tools to find your ideal allocation and compare international transfer costs for moving funds.',
  },
  {
    icon: Briefcase,
    number: '03',
    title: 'Connect',
    description: 'Book a free call with our specialists. Get personalized guidance and introductions to our vetted partners.',
  },
  {
    icon: TrendingUp,
    number: '04',
    title: 'Invest',
    description: 'Execute through our partner network. Access rare metals, collectibles, Dubai property, art, and more.',
  },
]

export function HowItWorks() {
  return (
    <section className="section-padding bg-citadel-black">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-citadel-gold uppercase tracking-[0.2em] text-sm font-medium mb-4">
            Your Journey
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-citadel-cream mb-4">
            How It Works
          </h2>
          <p className="text-citadel-cream/60">
            From exploring alternatives to building your portfolio in four simple steps.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-1/2 w-full h-px bg-gradient-to-r from-citadel-gold/50 to-transparent" />
              )}
              
              <div className="relative z-10 text-center">
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-citadel-charcoal border border-citadel-border mb-6">
                  <div className="relative">
                    <step.icon className="w-8 h-8 text-citadel-gold" />
                    <span className="absolute -top-2 -right-4 font-mono text-xs text-citadel-cream/30">
                      {step.number}
                    </span>
                  </div>
                </div>
                
                <h3 className="font-serif text-xl font-semibold text-citadel-cream mb-2">
                  {step.title}
                </h3>
                
                <p className="text-sm text-citadel-cream/60">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <TalkToExpertButton variant="primary" />
        </div>
      </div>
    </section>
  )
}
