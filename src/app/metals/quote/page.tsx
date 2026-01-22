'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Gem, Check, Mail } from 'lucide-react'

const metals = [
  { id: 'gallium', name: 'Gallium', unit: 'per kg' },
  { id: 'germanium', name: 'Germanium', unit: 'per kg' },
  { id: 'indium', name: 'Indium', unit: 'per kg' },
  { id: 'rare-earths', name: 'Rare Earth Package', unit: 'custom' },
  { id: 'other', name: 'Other / Custom', unit: 'varies' },
]

const quantities = [
  { id: 'small', label: 'Small (1 to 5 kg)', value: '1-5kg' },
  { id: 'medium', label: 'Medium (5 to 25 kg)', value: '5-25kg' },
  { id: 'large', label: 'Large (25 to 100 kg)', value: '25-100kg' },
  { id: 'bulk', label: 'Bulk (100+ kg)', value: '100kg+' },
]

export default function MetalsQuotePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    metal: '',
    quantity: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

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

      {/* Form */}
      <section className="section-padding bg-citadel-black">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-citadel-gold/10 mb-6">
                <Gem className="w-8 h-8 text-citadel-gold" />
              </div>
              <h1 className="font-serif text-3xl md:text-4xl font-semibold text-citadel-cream mb-4">
                Request a Quote
              </h1>
              <p className="text-citadel-cream/60">
                Get pricing for physical rare metals through our partner Earth Rarest. 
                Includes secure storage and insurance.
              </p>
            </div>

            <div className="card gold-glow">
              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
                    <Check className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="font-serif text-2xl font-semibold text-citadel-cream mb-2">
                    Quote Request Received!
                  </h3>
                  <p className="text-citadel-cream/60 mb-6">
                    Our team will prepare a custom quote and contact you within 
                    1 to 2 business days.
                  </p>
                  <Link href="/metals" className="btn-secondary">
                    Back to Metals
                  </Link>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-citadel-cream/70 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="John Smith"
                        className="w-full px-4 py-3 bg-citadel-slate border border-citadel-border rounded-lg text-citadel-cream placeholder:text-citadel-cream/40 focus:outline-none focus:border-citadel-gold/50"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-citadel-cream/70 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 bg-citadel-slate border border-citadel-border rounded-lg text-citadel-cream placeholder:text-citadel-cream/40 focus:outline-none focus:border-citadel-gold/50"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-citadel-cream/70 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-4 py-3 bg-citadel-slate border border-citadel-border rounded-lg text-citadel-cream placeholder:text-citadel-cream/40 focus:outline-none focus:border-citadel-gold/50"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-citadel-cream/70 mb-2">
                        Company (Optional)
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({...formData, company: e.target.value})}
                        placeholder="Your Company"
                        className="w-full px-4 py-3 bg-citadel-slate border border-citadel-border rounded-lg text-citadel-cream placeholder:text-citadel-cream/40 focus:outline-none focus:border-citadel-gold/50"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-citadel-cream/70 mb-2">
                      Metal Type *
                    </label>
                    <select
                      required
                      value={formData.metal}
                      onChange={(e) => setFormData({...formData, metal: e.target.value})}
                      className="w-full px-4 py-3 bg-citadel-slate border border-citadel-border rounded-lg text-citadel-cream focus:outline-none focus:border-citadel-gold/50"
                    >
                      <option value="">Select a metal</option>
                      {metals.map((metal) => (
                        <option key={metal.id} value={metal.id}>
                          {metal.name} ({metal.unit})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm text-citadel-cream/70 mb-2">
                      Quantity *
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                      {quantities.map((qty) => (
                        <button
                          key={qty.id}
                          type="button"
                          onClick={() => setFormData({...formData, quantity: qty.id})}
                          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                            formData.quantity === qty.id
                              ? 'bg-citadel-gold text-citadel-black'
                              : 'bg-citadel-slate text-citadel-cream/70 hover:bg-citadel-slate/80'
                          }`}
                        >
                          {qty.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-citadel-cream/70 mb-2">
                      Additional Details (Optional)
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      rows={3}
                      placeholder="Any specific requirements or questions..."
                      className="w-full px-4 py-3 bg-citadel-slate border border-citadel-border rounded-lg text-citadel-cream placeholder:text-citadel-cream/40 focus:outline-none focus:border-citadel-gold/50 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={!formData.metal || !formData.quantity}
                    className="w-full btn-primary justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Request Quote
                  </button>

                  <p className="text-xs text-citadel-cream/40 text-center">
                    Partner: earthrarest.com. Quotes typically delivered within 1 to 2 business days.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

