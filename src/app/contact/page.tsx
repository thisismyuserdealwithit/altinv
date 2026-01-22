import type { Metadata } from 'next'
import Link from 'next/link'
import { Mail, Phone, MapPin, Clock, MessageSquare } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Us | Alt-Wealth Citadel',
  description: 'Get in touch with our team for questions about alternative investments, partnerships, or membership inquiries.',
}

export default function ContactPage() {
  return (
    <div className="pt-20 min-h-screen bg-citadel-black">
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="font-serif text-4xl md:text-5xl font-semibold text-citadel-cream mb-4">
                Get in Touch
              </h1>
              <p className="text-xl text-citadel-cream/60">
                Have questions about alternative investments? We're here to help.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="card">
                <h2 className="font-serif text-xl font-semibold text-citadel-cream mb-6">
                  Send us a Message
                </h2>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-citadel-cream/70 mb-2">First Name</label>
                      <input
                        type="text"
                        className="w-full bg-citadel-slate border border-citadel-border rounded-lg px-4 py-3 text-citadel-cream focus:border-citadel-gold focus:outline-none"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-citadel-cream/70 mb-2">Last Name</label>
                      <input
                        type="text"
                        className="w-full bg-citadel-slate border border-citadel-border rounded-lg px-4 py-3 text-citadel-cream focus:border-citadel-gold focus:outline-none"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm text-citadel-cream/70 mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full bg-citadel-slate border border-citadel-border rounded-lg px-4 py-3 text-citadel-cream focus:border-citadel-gold focus:outline-none"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-citadel-cream/70 mb-2">Subject</label>
                    <select className="w-full bg-citadel-slate border border-citadel-border rounded-lg px-4 py-3 text-citadel-cream focus:border-citadel-gold focus:outline-none">
                      <option>General Inquiry</option>
                      <option>Membership Questions</option>
                      <option>Strategic Metals</option>
                      <option>Real Estate Opportunities</option>
                      <option>Advisory Services</option>
                      <option>Partnership Opportunities</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm text-citadel-cream/70 mb-2">Message</label>
                    <textarea
                      rows={5}
                      className="w-full bg-citadel-slate border border-citadel-border rounded-lg px-4 py-3 text-citadel-cream focus:border-citadel-gold focus:outline-none resize-none"
                      placeholder="How can we help you?"
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full">
                    Send Message
                  </button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
                <div className="card">
                  <h2 className="font-serif text-xl font-semibold text-citadel-cream mb-6">
                    Contact Information
                  </h2>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-citadel-gold/10 flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5 text-citadel-gold" />
                      </div>
                      <div>
                        <div className="text-citadel-cream font-medium">Email</div>
                        <a href="mailto:hello@altwealthcitadel.com" className="text-citadel-cream/60 hover:text-citadel-gold transition-colors">
                          hello@altwealthcitadel.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-citadel-gold/10 flex items-center justify-center flex-shrink-0">
                        <Clock className="w-5 h-5 text-citadel-gold" />
                      </div>
                      <div>
                        <div className="text-citadel-cream font-medium">Response Time</div>
                        <div className="text-citadel-cream/60">Within 1-2 business days</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <h3 className="font-serif text-lg font-semibold text-citadel-cream mb-4">
                    For Specific Inquiries
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-citadel-cream/60">Strategic Metals</span>
                      <a href="mailto:metals@altwealthcitadel.com" className="text-citadel-gold hover:underline">
                        metals@altwealthcitadel.com
                      </a>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-citadel-cream/60">Real Estate</span>
                      <a href="mailto:realestate@altwealthcitadel.com" className="text-citadel-gold hover:underline">
                        realestate@altwealthcitadel.com
                      </a>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-citadel-cream/60">Partnerships</span>
                      <a href="mailto:partners@altwealthcitadel.com" className="text-citadel-gold hover:underline">
                        partners@altwealthcitadel.com
                      </a>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-citadel-cream/60">Press Inquiries</span>
                      <a href="mailto:press@altwealthcitadel.com" className="text-citadel-gold hover:underline">
                        press@altwealthcitadel.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="card bg-citadel-gold/10 border-citadel-gold/30">
                  <div className="flex items-start gap-4">
                    <MessageSquare className="w-8 h-8 text-citadel-gold flex-shrink-0" />
                    <div>
                      <h3 className="font-serif text-lg font-semibold text-citadel-cream mb-2">
                        Schedule a Consultation
                      </h3>
                      <p className="text-sm text-citadel-cream/60 mb-4">
                        Want to discuss your alternative investment strategy? Book a 
                        complimentary 30-minute consultation with our team.
                      </p>
                      <Link href="/membership" className="btn-primary inline-block">
                        Book a Call
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
