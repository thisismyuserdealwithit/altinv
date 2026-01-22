import type { Metadata } from 'next'
import Link from 'next/link'
import { Check, X, ArrowRight, Shield, Users, Zap, Building } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Membership | Join the Alt-Wealth Citadel',
  description: 'Unlock premium tools, research, and exclusive opportunities. From free access to institutional partnerships, find the membership tier that fits your investing goals.',
  keywords: 'alternative investment membership, premium investment tools, investment research subscription, wealth management platform',
}

const tiers = [
  {
    name: 'Explorer',
    price: 'Free',
    period: '',
    description: 'Start your alternative investment journey with foundational tools and research.',
    features: [
      { text: 'Basic allocation calculator', included: true },
      { text: 'Transfer cost comparison', included: true },
      { text: 'Weekly newsletter', included: true },
      { text: 'Public research articles', included: true },
      { text: 'Community forum access', included: true },
      { text: 'Due diligence templates', included: true },
      { text: 'Advanced tools', included: false },
      { text: 'Investment memos', included: false },
      { text: 'Deal flow access', included: false },
      { text: 'Advisor introductions', included: false },
    ],
    cta: 'Sign Up Free',
    href: '/signup',
    popular: false,
  },
  {
    name: 'Investor',
    price: '$99',
    period: '/month',
    description: 'Full access to our platform for serious alternative investors.',
    features: [
      { text: 'All Explorer features', included: true },
      { text: 'Advanced calculators & tools', included: true },
      { text: 'Cap rate explorer (full)', included: true },
      { text: 'Deal analyzer', included: true },
      { text: 'Market intelligence dashboard', included: true },
      { text: 'Investment memos (12/year)', included: true },
      { text: 'Premium research library', included: true },
      { text: 'Curated deal flow alerts', included: true },
      { text: 'Priority advisor matching', included: true },
      { text: 'Monthly live Q&A', included: true },
    ],
    cta: 'Start 14-Day Trial',
    href: '/signup?plan=investor',
    popular: true,
  },
  {
    name: 'Institutional',
    price: 'Custom',
    period: '',
    description: 'Enterprise solutions for RIAs, family offices, and wealth managers.',
    features: [
      { text: 'All Investor features', included: true },
      { text: 'White-label tools', included: true },
      { text: 'API access', included: true },
      { text: 'Custom research requests', included: true },
      { text: 'Dedicated account manager', included: true },
      { text: 'Co-investment opportunities', included: true },
      { text: 'Team seats (unlimited)', included: true },
      { text: 'Custom integrations', included: true },
      { text: 'SLA guarantees', included: true },
      { text: 'Quarterly strategy calls', included: true },
    ],
    cta: 'Contact Sales',
    href: '/contact?type=institutional',
    popular: false,
  },
]

const testimonials = [
  {
    quote: "The deal analyzer alone saves me 10 hours a week. I've evaluated 3x more syndications since joining.",
    author: "Michael R.",
    role: "Real Estate Investor",
    location: "Austin, TX",
  },
  {
    quote: "Finally, a platform that understands alternative assets. The metals research is institutional quality.",
    author: "Sarah K.",
    role: "Family Office Principal",
    location: "Greenwich, CT",
  },
  {
    quote: "The SDIRA calculator showed me I was leaving $15K in tax savings on the table. Paid for itself day one.",
    author: "David L.",
    role: "Tech Executive",
    location: "San Francisco, CA",
  },
]

const faqs = [
  {
    question: "Can I cancel anytime?",
    answer: "Yes. No contracts, no commitments. Cancel with one click from your account settings. You'll retain access through the end of your billing period.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "All major credit cards, ACH bank transfer for annual plans, and wire transfer for institutional accounts.",
  },
  {
    question: "Is there a discount for annual billing?",
    answer: "Yes. Annual Investor memberships are $990/year (2 months free). Enterprise pricing is customized based on needs.",
  },
  {
    question: "Do you offer refunds?",
    answer: "We offer a 14-day money-back guarantee. If you're not satisfied, email support for a full refund.",
  },
  {
    question: "Can I upgrade or downgrade?",
    answer: "Absolutely. Upgrade anytime and we'll prorate the difference. Downgrade at your next billing cycle.",
  },
  {
    question: "What's included in the trial?",
    answer: "Full access to all Investor features for 14 days. No credit card required to start.",
  },
]

export default function MembershipPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="section-padding gradient-hero">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-citadel-gold uppercase tracking-[0.2em] text-sm font-medium mb-4">
              Membership
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-citadel-cream mb-6 leading-tight">
              Invest Smarter.<br />Know More.
            </h1>
            <p className="text-xl text-citadel-cream/60 leading-relaxed">
              Join thousands of sophisticated investors who use our platform 
              to discover, analyze, and execute alternative investment strategies.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="section-padding bg-citadel-black">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`card relative ${tier.popular ? 'gold-glow border-citadel-gold/50' : ''}`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-citadel-gold text-citadel-black text-xs font-bold rounded-full">
                    MOST POPULAR
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="font-serif text-2xl font-semibold text-citadel-cream mb-2">
                    {tier.name}
                  </h3>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="font-mono text-4xl text-citadel-gold">{tier.price}</span>
                    {tier.period && <span className="text-citadel-cream/50">{tier.period}</span>}
                  </div>
                  <p className="text-sm text-citadel-cream/60 mt-3">
                    {tier.description}
                  </p>
                </div>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature) => (
                    <li key={feature.text} className="flex items-center gap-3">
                      {feature.included ? (
                        <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                      ) : (
                        <X className="w-5 h-5 text-citadel-cream/20 flex-shrink-0" />
                      )}
                      <span className={feature.included ? 'text-citadel-cream/80' : 'text-citadel-cream/40'}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={tier.href}
                  className={`block text-center py-3 rounded-lg font-medium transition-colors ${
                    tier.popular
                      ? 'bg-citadel-gold text-citadel-black hover:bg-citadel-gold/90'
                      : 'bg-citadel-slate text-citadel-cream hover:bg-citadel-slate/80'
                  }`}
                >
                  {tier.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="section-padding bg-citadel-charcoal">
        <div className="container-custom">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Zap, title: '25+ Tools', desc: 'Calculators, analyzers, and trackers' },
              { icon: Shield, title: 'Expert Research', desc: 'Institutional-quality analysis' },
              { icon: Users, title: 'Advisor Network', desc: 'Vetted professional connections' },
              { icon: Building, title: 'Deal Access', desc: 'Curated opportunities' },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-citadel-gold/10 mb-4">
                  <item.icon className="w-6 h-6 text-citadel-gold" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-citadel-cream mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-citadel-cream/60">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-citadel-black">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-citadel-cream mb-4">
              What Members Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <div key={testimonial.author} className="card">
                <p className="text-citadel-cream/80 italic mb-6">
                  "{testimonial.quote}"
                </p>
                <div>
                  <div className="font-medium text-citadel-cream">{testimonial.author}</div>
                  <div className="text-sm text-citadel-cream/60">{testimonial.role}</div>
                  <div className="text-xs text-citadel-cream/40">{testimonial.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding bg-citadel-charcoal">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl font-semibold text-citadel-cream mb-8 text-center">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.question} className="card">
                  <h3 className="font-serif text-lg font-semibold text-citadel-cream mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-citadel-cream/60 text-sm">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-citadel-black">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-citadel-cream mb-4">
              Ready to Start?
            </h2>
            <p className="text-citadel-cream/60 mb-8">
              Join for free and upgrade when you're ready. No credit card required.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/signup" className="btn-primary">
                Create Free Account
              </Link>
              <Link href="/contact" className="btn-secondary">
                Talk to Sales
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

