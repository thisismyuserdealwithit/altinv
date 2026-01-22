'use client'

import Link from 'next/link'
import { ArrowLeft, Gem, TrendingUp, Factory, Monitor, Smartphone } from 'lucide-react'
import { TalkToExpertButton } from '@/components/TalkToExpertButton'

const stats = [
  { label: 'Annual Production', value: '900 tonnes' },
  { label: 'Primary Use', value: 'ITO (90%)' },
  { label: 'Price Range', value: '$200-400/kg' },
  { label: 'Top Producer', value: 'China (60%)' },
]

const applications = [
  {
    icon: Monitor,
    name: 'LCD/OLED Displays',
    description: 'Indium tin oxide (ITO) is essential for touchscreens and flat panel displays.',
  },
  {
    icon: Smartphone,
    name: 'Touchscreens',
    description: 'Every smartphone, tablet, and touch device uses ITO coatings.',
  },
  {
    icon: Factory,
    name: 'Solar Panels',
    description: 'CIGS thin film solar cells use indium for high efficiency.',
  },
]

export default function IndiumPage() {
  return (
    <div className="pt-20">
      {/* Breadcrumb */}
      <div className="bg-citadel-charcoal border-b border-citadel-border">
        <div className="container-custom py-4">
          <Link href="/metals" className="inline-flex items-center gap-2 text-sm text-citadel-cream/60 hover:text-citadel-gold transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Rare Metals
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="section-padding gradient-hero">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-citadel-gold/10 border border-citadel-gold/30 mb-6">
                <Gem className="w-4 h-4 text-citadel-gold" />
                <span className="text-sm text-citadel-gold">Critical Technology Metal</span>
              </div>
              
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-citadel-cream mb-6 leading-tight">
                Indium<br />
                <span className="text-citadel-gold">The Display Metal</span>
              </h1>
              
              <p className="text-xl text-citadel-cream/60 leading-relaxed mb-8">
                Found in every touchscreen and flat panel display on Earth. 
                Indium tin oxide (ITO) is irreplaceable for transparent conductive 
                coatings in our digital world.
              </p>

              <div className="flex flex-wrap gap-4">
                <TalkToExpertButton variant="primary" />
                <Link href="/metals/quote" className="btn-secondary">
                  Get a Quote
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-citadel-gold/20 to-amber-500/20 rounded-2xl border border-citadel-gold/30 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="font-mono text-6xl text-citadel-gold mb-2">In</div>
                  <div className="text-citadel-cream/60">Indium • 49</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-8 bg-citadel-charcoal border-y border-citadel-border">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-mono text-2xl md:text-3xl text-citadel-gold mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-citadel-cream/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="section-padding bg-citadel-black">
        <div className="container-custom">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-citadel-cream mb-12">
            Critical Applications
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {applications.map((app) => (
              <div key={app.name} className="card">
                <app.icon className="w-8 h-8 text-citadel-gold mb-4" />
                <h3 className="font-serif text-xl font-semibold text-citadel-cream mb-2">
                  {app.name}
                </h3>
                <p className="text-citadel-cream/60">{app.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Thesis */}
      <section className="section-padding bg-citadel-charcoal">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-citadel-cream mb-8">
              Investment Thesis
            </h2>

            <div className="prose prose-invert max-w-none space-y-4">
              <p className="text-citadel-cream/70">
                Indium is a byproduct of zinc mining, meaning supply cannot easily 
                scale with demand. As the world adds billions more displays, 
                touchscreens, and solar panels, indium demand continues to grow.
              </p>

              <h3 className="font-serif text-xl font-semibold text-citadel-cream mt-8 mb-4">
                Supply Constraints
              </h3>
              <ul className="space-y-2 text-citadel-cream/70">
                <li>No primary indium mines exist, only byproduct production</li>
                <li>China controls 60% of global supply</li>
                <li>Recycling provides only 30% of supply</li>
                <li>Cannot easily substitute ITO in display applications</li>
              </ul>

              <h3 className="font-serif text-xl font-semibold text-citadel-cream mt-8 mb-4">
                Demand Drivers
              </h3>
              <ul className="space-y-2 text-citadel-cream/70">
                <li>Global display market growing 6% annually</li>
                <li>EV dashboards use multiple large displays</li>
                <li>Solar capacity additions accelerating</li>
                <li>Smart home devices proliferating</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-citadel-black">
        <div className="container-custom">
          <div className="card gold-glow max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-citadel-cream mb-4">
              Add Indium to Your Portfolio
            </h2>
            <p className="text-citadel-cream/60 mb-8">
              Request a quote for physical indium through our partner Earth Rarest. 
              Includes secure storage and insurance.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/metals/quote" className="btn-primary">
                Request Quote
              </Link>
              <TalkToExpertButton variant="secondary" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

