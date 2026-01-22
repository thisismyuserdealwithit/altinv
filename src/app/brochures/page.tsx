'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FileText, Download, Gem, Package, Building2, Palette, Scale, Briefcase, Check, Mail } from 'lucide-react'

const brochures = [
  {
    icon: Gem,
    title: 'Rare Metals Investment Guide',
    description: 'Everything you need to know about gallium, germanium, and rare earth investing.',
    pages: '24 pages',
    color: 'text-citadel-gold',
  },
  {
    icon: Package,
    title: 'Collectibles Market Report',
    description: 'Wine, watches, and memorabilia market analysis and investment strategies.',
    pages: '18 pages',
    color: 'text-purple-400',
  },
  {
    icon: Building2,
    title: 'Dubai Real Estate Guide',
    description: 'Complete guide to buying property in Dubai including visa programs.',
    pages: '32 pages',
    color: 'text-green-400',
  },
  {
    icon: Palette,
    title: 'Fine Art Investing 101',
    description: 'How fractional art ownership works and what to look for.',
    pages: '16 pages',
    color: 'text-pink-400',
  },
  {
    icon: Scale,
    title: 'Litigation Finance Explained',
    description: 'Understanding legal funding as an asset class.',
    pages: '14 pages',
    color: 'text-blue-400',
  },
  {
    icon: Briefcase,
    title: 'Business Acquisition Playbook',
    description: 'Step by step guide to buying your first small business.',
    pages: '28 pages',
    color: 'text-amber-400',
  },
]

export default function BrochuresPage() {
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
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-citadel-gold/10 border border-citadel-gold/30 mb-6">
              <FileText className="w-4 h-4 text-citadel-gold" />
              <span className="text-sm text-citadel-gold">Free Downloads</span>
            </div>
            
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-citadel-cream mb-6 leading-tight">
              Free Investment<br />
              <span className="text-citadel-gold">Brochures</span>
            </h1>
            
            <p className="text-xl text-citadel-cream/60 leading-relaxed">
              Download detailed guides on each alternative investment sector. 
              No account needed, just enter your email to receive the download links.
            </p>
          </div>
        </div>
      </section>

      {/* Brochures Grid */}
      <section className="section-padding bg-citadel-black">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Brochure List */}
            <div className="lg:col-span-2">
              <h2 className="font-serif text-2xl font-semibold text-citadel-cream mb-6">
                Available Guides
              </h2>
              
              <div className="grid md:grid-cols-2 gap-4">
                {brochures.map((brochure) => (
                  <div key={brochure.title} className="card">
                    <brochure.icon className={`w-8 h-8 ${brochure.color} mb-4`} />
                    <h3 className="font-serif text-lg font-semibold text-citadel-cream mb-2">
                      {brochure.title}
                    </h3>
                    <p className="text-sm text-citadel-cream/60 mb-3">
                      {brochure.description}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-citadel-cream/40">
                      <FileText className="w-3 h-3" />
                      PDF, {brochure.pages}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Download Form */}
            <div>
              <div className="card gold-glow sticky top-24">
                {submitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
                      <Check className="w-8 h-8 text-green-400" />
                    </div>
                    <h3 className="font-serif text-xl font-semibold text-citadel-cream mb-2">
                      Check Your Email!
                    </h3>
                    <p className="text-citadel-cream/60 text-sm">
                      Download links for all 6 brochures have been sent to your inbox.
                    </p>
                  </div>
                ) : (
                  <>
                    <h3 className="font-serif text-xl font-semibold text-citadel-cream mb-2">
                      Get All 6 Guides
                    </h3>
                    <p className="text-sm text-citadel-cream/60 mb-6">
                      Enter your email and we will send you download links for all brochures.
                    </p>

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
                        <Download className="w-4 h-4 mr-2" />
                        Send Download Links
                      </button>
                    </form>

                    <p className="text-xs text-citadel-cream/40 text-center mt-4">
                      We will also add you to our newsletter. Unsubscribe anytime.
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Resources */}
      <section className="section-padding bg-citadel-charcoal">
        <div className="container-custom text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-citadel-cream mb-4">
            Want More Personalized Guidance?
          </h2>
          <p className="text-citadel-cream/60 mb-8 max-w-2xl mx-auto">
            These brochures provide a great overview. For advice tailored to your 
            specific situation, book a free call with our team.
          </p>
          <Link href="/call" className="btn-primary">
            Book a Free Call
          </Link>
        </div>
      </section>
    </div>
  )
}

