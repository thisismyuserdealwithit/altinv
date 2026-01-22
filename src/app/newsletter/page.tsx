'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Mail, Check, ArrowRight, FileText, Phone, BookOpen } from 'lucide-react'

const benefits = [
  'Weekly market insights across all six sectors',
  'New investment opportunities as they launch',
  'Research reports and analysis',
  'Partner offers and exclusive deals',
  'No spam, unsubscribe anytime',
]

const pastTopics = [
  'Why rare earth prices are surging',
  'Dubai property market update Q4',
  'New litigation finance opportunities',
  'Art market trends for 2026',
  'Business acquisition deal flow',
]

export default function NewsletterPage() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="section-padding gradient-hero">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-citadel-gold/10 border border-citadel-gold/30 mb-6">
                <Mail className="w-4 h-4 text-citadel-gold" />
                <span className="text-sm text-citadel-gold">Free Weekly Newsletter</span>
              </div>
              
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-citadel-cream mb-6 leading-tight">
                Stay Informed on<br />
                <span className="text-citadel-gold">Alternative Investments</span>
              </h1>
              
              <p className="text-xl text-citadel-cream/60 leading-relaxed mb-8">
                Weekly insights on rare metals, collectibles, Dubai real estate, 
                fine art, litigation finance, and business acquisitions. 
                Free, no account required.
              </p>

              <ul className="space-y-3 mb-8">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3 text-citadel-cream/80">
                    <Check className="w-5 h-5 text-citadel-gold flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            {/* Form */}
            <div className="card gold-glow">
              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
                    <Check className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="font-serif text-2xl font-semibold text-citadel-cream mb-2">
                    You are Subscribed!
                  </h3>
                  <p className="text-citadel-cream/60 mb-6">
                    Check your inbox for a welcome email. Your first issue arrives this week.
                  </p>
                  <Link href="/" className="btn-secondary">
                    Back to Home
                  </Link>
                </div>
              ) : (
                <>
                  <h3 className="font-serif text-xl font-semibold text-citadel-cream mb-6">
                    Subscribe to the Newsletter
                  </h3>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm text-citadel-cream/70 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="John Smith"
                        className="w-full px-4 py-3 bg-citadel-slate border border-citadel-border rounded-lg text-citadel-cream placeholder:text-citadel-cream/40 focus:outline-none focus:border-citadel-gold/50"
                      />
                    </div>

                    <div>
                      <label className="block text-sm text-citadel-cream/70 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 bg-citadel-slate border border-citadel-border rounded-lg text-citadel-cream placeholder:text-citadel-cream/40 focus:outline-none focus:border-citadel-gold/50"
                      />
                    </div>

                    <button type="submit" className="w-full btn-primary justify-center">
                      <Mail className="w-4 h-4 mr-2" />
                      Subscribe Free
                    </button>
                  </form>

                  <p className="text-xs text-citadel-cream/40 text-center mt-4">
                    By subscribing, you agree to our privacy policy. Unsubscribe anytime.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Past Topics */}
      <section className="section-padding bg-citadel-charcoal">
        <div className="container-custom">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-citadel-cream mb-8">
            Recent Newsletter Topics
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {pastTopics.map((topic) => (
              <div key={topic} className="p-4 bg-citadel-slate/50 rounded-lg">
                <BookOpen className="w-5 h-5 text-citadel-gold mb-2" />
                <p className="text-citadel-cream">{topic}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Resources */}
      <section className="section-padding bg-citadel-black">
        <div className="container-custom">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-citadel-cream mb-8">
            Other Free Resources
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/brochures" className="card group hover:border-citadel-gold/30 transition-colors">
              <FileText className="w-8 h-8 text-citadel-gold mb-4" />
              <h3 className="font-serif text-xl font-semibold text-citadel-cream group-hover:text-citadel-gold transition-colors mb-2">
                Free Brochures
              </h3>
              <p className="text-citadel-cream/60 mb-4">
                Download detailed guides on each investment sector.
              </p>
              <span className="text-citadel-gold inline-flex items-center gap-1">
                Download Now <ArrowRight className="w-4 h-4" />
              </span>
            </Link>

            <Link href="/call" className="card group hover:border-citadel-gold/30 transition-colors">
              <Phone className="w-8 h-8 text-citadel-gold mb-4" />
              <h3 className="font-serif text-xl font-semibold text-citadel-cream group-hover:text-citadel-gold transition-colors mb-2">
                Book a Free Call
              </h3>
              <p className="text-citadel-cream/60 mb-4">
                30 minute consultation with an alternative investment specialist.
              </p>
              <span className="text-citadel-gold inline-flex items-center gap-1">
                Schedule Now <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

