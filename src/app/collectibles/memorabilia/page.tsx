'use client'

import Link from 'next/link'
import { ArrowRight, Trophy, TrendingUp, Shield, Clock, Star, Users } from 'lucide-react'
import { TalkToExpertButton } from '@/components/TalkToExpertButton'

const categories = [
  {
    name: 'Trading Cards',
    examples: 'Baseball, Basketball, Football, Pokemon',
    growth: '+18% annually',
    minEntry: '$5,000',
  },
  {
    name: 'Game Used Items',
    examples: 'Jerseys, Equipment, Championship Gear',
    growth: '+12% annually',
    minEntry: '$10,000',
  },
  {
    name: 'Autographs',
    examples: 'Authenticated Signatures, Photos',
    growth: '+8% annually',
    minEntry: '$2,500',
  },
  {
    name: 'Championship Items',
    examples: 'Rings, Trophies, Championship Balls',
    growth: '+15% annually',
    minEntry: '$50,000',
  },
]

const benefits = [
  {
    icon: TrendingUp,
    title: 'Strong Historical Returns',
    description: 'Sports cards and memorabilia have outperformed traditional assets over the past decade.',
  },
  {
    icon: Shield,
    title: 'Authentication Standards',
    description: 'PSA, BGS, and JSA provide reliable authentication and grading services.',
  },
  {
    icon: Star,
    title: 'Emotional Value',
    description: 'Unlike stocks, you can display and enjoy your investments.',
  },
  {
    icon: Users,
    title: 'Growing Collector Base',
    description: 'Millennials and Gen Z driving new demand for sports memorabilia.',
  },
]

export default function MemorabiliaPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="section-padding gradient-hero">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 mb-6">
                <Trophy className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-blue-400">Partner: Colleko</span>
              </div>
              
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-citadel-cream mb-6 leading-tight">
                Sports<br />
                <span className="text-blue-400">Memorabilia</span>
              </h1>
              
              <p className="text-xl text-citadel-cream/60 leading-relaxed mb-8">
                Trading cards, game used items, and championship memorabilia. 
                A growing asset class with strong collector demand and 
                impressive historical returns.
              </p>

              <div className="flex flex-wrap gap-4">
                <TalkToExpertButton variant="primary" />
                <Link href="/collectibles/start" className="btn-secondary group">
                  Start Collecting
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-2xl border border-blue-500/30 flex items-center justify-center">
                <div className="text-center p-8">
                  <Trophy className="w-24 h-24 text-blue-400 mx-auto mb-4" />
                  <p className="text-citadel-cream/60">Sports Memorabilia</p>
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
            {[
              { value: '$26B', label: 'Market Size' },
              { value: '+18%', label: 'Cards Growth' },
              { value: 'PSA/BGS', label: 'Authentication' },
              { value: '$2.5K', label: 'Min Entry' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-mono text-2xl md:text-3xl text-blue-400 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-citadel-cream/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-citadel-black">
        <div className="container-custom">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-citadel-cream mb-12">
            Why Sports Memorabilia?
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="card">
                <benefit.icon className="w-8 h-8 text-blue-400 mb-4" />
                <h3 className="font-serif text-xl font-semibold text-citadel-cream mb-2">
                  {benefit.title}
                </h3>
                <p className="text-citadel-cream/60">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="section-padding bg-citadel-charcoal">
        <div className="container-custom">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-citadel-cream mb-12">
            Investment Categories
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat) => (
              <div key={cat.name} className="card">
                <h3 className="font-serif text-xl font-semibold text-citadel-cream mb-2">
                  {cat.name}
                </h3>
                <p className="text-sm text-citadel-cream/60 mb-4">{cat.examples}</p>
                <div className="space-y-2 pt-4 border-t border-citadel-border text-sm">
                  <div className="flex justify-between">
                    <span className="text-citadel-cream/50">Growth</span>
                    <span className="font-mono text-blue-400">{cat.growth}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-citadel-cream/50">Min Entry</span>
                    <span className="font-mono text-citadel-cream">{cat.minEntry}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Tips */}
      <section className="section-padding bg-citadel-black">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-citadel-cream mb-8">
              Investment Considerations
            </h2>

            <div className="space-y-6 text-citadel-cream/70">
              <div>
                <h3 className="font-serif text-xl font-semibold text-citadel-cream mb-2">
                  Focus on Icons
                </h3>
                <p>
                  The greatest appreciation comes from items associated with all time 
                  greats: Jordan, Ruth, Brady, Gretzky. Lesser known players rarely 
                  see similar returns.
                </p>
              </div>
              
              <div>
                <h3 className="font-serif text-xl font-semibold text-citadel-cream mb-2">
                  Condition is Everything
                </h3>
                <p>
                  A PSA 10 (gem mint) card can be worth 10x or more than the same 
                  card in PSA 8 condition. Always prioritize condition.
                </p>
              </div>
              
              <div>
                <h3 className="font-serif text-xl font-semibold text-citadel-cream mb-2">
                  Authentication Required
                </h3>
                <p>
                  Only buy authenticated items from PSA, BGS (cards) or JSA, PSA/DNA 
                  (autographs). The market is full of fakes and reproductions.
                </p>
              </div>
              
              <div>
                <h3 className="font-serif text-xl font-semibold text-citadel-cream mb-2">
                  Liquidity Varies
                </h3>
                <p>
                  High end items may take months to sell at fair value. Factor in 
                  auction fees (15 to 20%) when calculating returns.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-citadel-charcoal">
        <div className="container-custom">
          <div className="card gold-glow max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-citadel-cream mb-4">
              Start Your Collection
            </h2>
            <p className="text-citadel-cream/60 mb-8">
              Talk to our team about sports memorabilia opportunities and get 
              connected with Colleko's marketplace.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <TalkToExpertButton variant="primary" />
              <Link href="/collectibles/start" className="btn-secondary">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

