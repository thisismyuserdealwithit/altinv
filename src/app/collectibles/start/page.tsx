'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Package, Check, Wine, Watch, Palette, Coins, ArrowRight } from 'lucide-react'

const categories = [
  { id: 'wine', label: 'Fine Wine', icon: Wine, color: 'text-red-400' },
  { id: 'watches', label: 'Luxury Watches', icon: Watch, color: 'text-citadel-gold' },
  { id: 'art', label: 'Fine Art', icon: Palette, color: 'text-pink-400' },
  { id: 'memorabilia', label: 'Sports Memorabilia', icon: Coins, color: 'text-blue-400' },
  { id: 'other', label: 'Other Collectibles', icon: Package, color: 'text-purple-400' },
]

const budgets = [
  { id: '5-25', label: '$5,000 to $25,000' },
  { id: '25-100', label: '$25,000 to $100,000' },
  { id: '100-500', label: '$100,000 to $500,000' },
  { id: '500+', label: '$500,000+' },
]

export default function CollectiblesStartPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    categories: [] as string[],
    budget: '',
    experience: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleCategoryToggle = (id: string) => {
    setFormData(prev => ({
      ...prev,
      categories: prev.categories.includes(id)
        ? prev.categories.filter(c => c !== id)
        : [...prev.categories, id]
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="pt-20">
      {/* Breadcrumb */}
      <div className="bg-citadel-charcoal border-b border-citadel-border">
        <div className="container-custom py-4">
          <Link href="/collectibles" className="inline-flex items-center gap-2 text-sm text-citadel-cream/60 hover:text-citadel-gold transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Collectibles
          </Link>
        </div>
      </div>

      {/* Form */}
      <section className="section-padding bg-citadel-black">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-500/10 mb-6">
                <Package className="w-8 h-8 text-purple-400" />
              </div>
              <h1 className="font-serif text-3xl md:text-4xl font-semibold text-citadel-cream mb-4">
                Start Collecting
              </h1>
              <p className="text-citadel-cream/60">
                Tell us what you are interested in and we will connect you with 
                the right partners and opportunities through Colleko.
              </p>
            </div>

            <div className="card gold-glow">
              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
                    <Check className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="font-serif text-2xl font-semibold text-citadel-cream mb-2">
                    Request Received!
                  </h3>
                  <p className="text-citadel-cream/60 mb-6">
                    Our collectibles team will reach out within 1 to 2 business days 
                    with personalized recommendations.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <Link href="/collectibles" className="btn-secondary">
                      Browse Categories
                    </Link>
                    <Link href="/call" className="btn-primary">
                      Book a Call Now
                    </Link>
                  </div>
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
                    <label className="block text-sm text-citadel-cream/70 mb-3">
                      Categories of Interest * (Select all that apply)
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                      {categories.map((cat) => {
                        const Icon = cat.icon
                        return (
                          <button
                            key={cat.id}
                            type="button"
                            onClick={() => handleCategoryToggle(cat.id)}
                            className={`flex items-center gap-2 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                              formData.categories.includes(cat.id)
                                ? 'bg-citadel-gold text-citadel-black'
                                : 'bg-citadel-slate text-citadel-cream/70 hover:bg-citadel-slate/80'
                            }`}
                          >
                            <Icon className={`w-4 h-4 ${formData.categories.includes(cat.id) ? '' : cat.color}`} />
                            {cat.label}
                          </button>
                        )
                      })}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-citadel-cream/70 mb-3">
                      Investment Budget *
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {budgets.map((budget) => (
                        <button
                          key={budget.id}
                          type="button"
                          onClick={() => setFormData({...formData, budget: budget.id})}
                          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                            formData.budget === budget.id
                              ? 'bg-citadel-gold text-citadel-black'
                              : 'bg-citadel-slate text-citadel-cream/70 hover:bg-citadel-slate/80'
                          }`}
                        >
                          {budget.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-citadel-cream/70 mb-2">
                      Collecting Experience
                    </label>
                    <select
                      value={formData.experience}
                      onChange={(e) => setFormData({...formData, experience: e.target.value})}
                      className="w-full px-4 py-3 bg-citadel-slate border border-citadel-border rounded-lg text-citadel-cream focus:outline-none focus:border-citadel-gold/50"
                    >
                      <option value="">Select your experience level</option>
                      <option value="new">New to collecting</option>
                      <option value="some">Some experience</option>
                      <option value="experienced">Experienced collector</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm text-citadel-cream/70 mb-2">
                      What are you looking for? (Optional)
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      rows={3}
                      placeholder="Tell us about your collecting goals..."
                      className="w-full px-4 py-3 bg-citadel-slate border border-citadel-border rounded-lg text-citadel-cream placeholder:text-citadel-cream/40 focus:outline-none focus:border-citadel-gold/50 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={formData.categories.length === 0 || !formData.budget}
                    className="w-full btn-primary justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>

                  <p className="text-xs text-citadel-cream/40 text-center">
                    Partner: colleko.com. We will connect you with the right opportunities.
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

