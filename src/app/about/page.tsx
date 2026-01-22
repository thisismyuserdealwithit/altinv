import type { Metadata } from 'next'
import Link from 'next/link'
import { Shield, Globe, Users, TrendingUp, Award, Building2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About | Alt-Wealth Citadel',
  description: 'We built the platform we wished existed. A comprehensive ecosystem for alternative investors who want to build wealth beyond the stock market.',
  keywords: 'about alt-wealth citadel, alternative investment platform, wealth building, investment education',
}

const values = [
  {
    icon: Shield,
    title: 'Independence First',
    description: 'We\'re not paid to recommend any specific investment. Our revenue comes from memberships and disclosed partnerships—not hidden commissions.',
  },
  {
    icon: Globe,
    title: 'Global Perspective',
    description: 'Wealth doesn\'t respect borders. We help investors think globally, with tools and research spanning metals, real estate, and opportunities worldwide.',
  },
  {
    icon: Users,
    title: 'Access for All',
    description: 'Alternative investments shouldn\'t require a $10M net worth. We\'re democratizing access to strategies that were once exclusive to family offices.',
  },
  {
    icon: TrendingUp,
    title: 'Education Over Hype',
    description: 'No get-rich-quick schemes. We provide the research, tools, and frameworks to make informed decisions—the rest is up to you.',
  },
]

const stats = [
  { value: '15,000+', label: 'Active Members' },
  { value: '$2.1B', label: 'Member Assets Tracked' },
  { value: '53', label: 'Vetted Partners' },
  { value: '25+', label: 'Investment Tools' },
]

const team = [
  {
    name: 'Leadership',
    description: 'Former family office principals, institutional investors, and fintech builders who saw a gap in the market.',
  },
  {
    name: 'Research',
    description: 'Analysts with backgrounds in commodity trading, real estate private equity, and alternative asset management.',
  },
  {
    name: 'Technology',
    description: 'Engineers from Bloomberg, Robinhood, and leading fintech platforms who believe in better tools.',
  },
  {
    name: 'Advisory',
    description: 'A network of CPAs, attorneys, and licensed advisors who specialize in alternative investments.',
  },
]

const timeline = [
  { year: '2021', event: 'Founded with a simple metals price tracker and blog' },
  { year: '2022', event: 'Launched real estate data tools and first 1,000 members' },
  { year: '2023', event: 'Expanded to collectibles, global banking, and advisory matching' },
  { year: '2024', event: 'Reached 10,000 members and $1B in tracked assets' },
  { year: '2025', event: 'Launched institutional tier and white-label solutions' },
  { year: '2026', event: 'Continuing to build the definitive alternative investing platform' },
]

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="section-padding gradient-hero">
        <div className="container-custom">
          <div className="max-w-3xl">
            <p className="text-citadel-gold uppercase tracking-[0.2em] text-sm font-medium mb-4">
              About Us
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-citadel-cream mb-6 leading-tight">
              Building Fortresses<br />of Wealth
            </h1>
            <p className="text-xl text-citadel-cream/60 leading-relaxed">
              We started Alt-Wealth Citadel because we couldn't find what we needed: 
              a single platform that treated alternative investments with the same 
              rigor and accessibility as stocks and bonds. So we built it.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding bg-citadel-black">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-citadel-cream mb-6">
                Our Mission
              </h2>
              <div className="space-y-4 text-citadel-cream/70">
                <p>
                  The wealthiest families in the world don't just own stocks. They own 
                  land, art, gold, businesses, and assets that most people don't even 
                  know exist. This isn't because alternatives are better—it's because 
                  diversification actually works.
                </p>
                <p>
                  But for too long, alternative investments were gatekept by high minimums, 
                  complex structures, and a lack of accessible information. You needed 
                  $5M to get a family office. You needed connections to access private deals.
                </p>
                <p>
                  We're changing that. Alt-Wealth Citadel is the digital family office 
                  for everyone who takes their wealth seriously—without the seven-figure 
                  minimum.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="card text-center">
                  <div className="font-mono text-3xl text-citadel-gold mb-2">{stat.value}</div>
                  <div className="text-sm text-citadel-cream/60">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-citadel-charcoal">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-citadel-cream mb-4">
              What We Believe
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value) => (
              <div key={value.title} className="card">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-citadel-gold/10">
                    <value.icon className="w-6 h-6 text-citadel-gold" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-citadel-cream mb-2">
                      {value.title}
                    </h3>
                    <p className="text-citadel-cream/60">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-citadel-black">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-citadel-cream mb-4">
              Our Team
            </h2>
            <p className="text-citadel-cream/60">
              We're a small but focused team of investors, builders, and educators 
              who believe in the mission.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((group) => (
              <div key={group.name} className="card text-center">
                <div className="w-16 h-16 rounded-full bg-citadel-slate mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-8 h-8 text-citadel-gold" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-citadel-cream mb-2">
                  {group.name}
                </h3>
                <p className="text-sm text-citadel-cream/60">
                  {group.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-citadel-charcoal">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl font-semibold text-citadel-cream mb-8 text-center">
              Our Journey
            </h2>

            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-px bg-citadel-border" />
              
              <div className="space-y-6">
                {timeline.map((item, index) => (
                  <div key={item.year} className="flex items-start gap-6 relative">
                    <div className="w-16 flex-shrink-0 font-mono text-citadel-gold text-right">
                      {item.year}
                    </div>
                    <div className="w-4 h-4 rounded-full bg-citadel-gold flex-shrink-0 mt-1 relative z-10" />
                    <div className="flex-1 pb-6">
                      <p className="text-citadel-cream/80">{item.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="section-padding bg-citadel-black">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Building2 className="w-10 h-10 text-citadel-gold mx-auto mb-4" />
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-citadel-cream mb-4">
              Our Partners
            </h2>
            <p className="text-citadel-cream/60">
              We've vetted 53 partners across metals, real estate, collectibles, 
              banking, and advisory services. Each meets our standards for 
              transparency, track record, and investor alignment.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {['Masterworks', 'Fundrise', 'Rocket Dollar', 'Vinovest', 'CrowdStreet', 'Alto IRA', 'EquityMultiple', 'Yieldstreet'].map((partner) => (
              <div 
                key={partner} 
                className="px-6 py-3 bg-citadel-slate rounded-lg text-citadel-cream/70"
              >
                {partner}
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/partners" className="text-citadel-gold hover:underline">
              View All 53 Partners →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-citadel-charcoal">
        <div className="container-custom">
          <div className="card gold-glow max-w-3xl mx-auto text-center">
            <Award className="w-10 h-10 text-citadel-gold mx-auto mb-4" />
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-citadel-cream mb-4">
              Join the Citadel
            </h2>
            <p className="text-citadel-cream/60 mb-6">
              Start with a free account. Explore our tools, read our research, 
              and see why thousands of investors trust us with their alternative 
              investment journey.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/signup" className="btn-primary">
                Create Free Account
              </Link>
              <Link href="/contact" className="btn-secondary">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

