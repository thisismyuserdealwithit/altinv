'use client'

import { useState } from 'react'
import { X, Phone, Send } from 'lucide-react'

interface ExpertModalProps {
  isOpen: boolean
  onClose: () => void
}

const communicationMethods = [
  { id: 'phone', label: 'Phone Call' },
  { id: 'email', label: 'Email' },
  { id: 'whatsapp', label: 'WhatsApp' },
  { id: 'telegram', label: 'Telegram' },
  { id: 'video', label: 'Video Call (Zoom)' },
]

const portfolioRanges = [
  { id: '100-250', label: '$100K to $250K' },
  { id: '250-500', label: '$250K to $500K' },
  { id: '500-1m', label: '$500K to $1M' },
  { id: '1m-5m', label: '$1M to $5M' },
  { id: '5m-10m', label: '$5M to $10M' },
  { id: '10m+', label: '$10M+' },
]

const interests = [
  { id: 'metals', label: 'Rare Metals' },
  { id: 'collectibles', label: 'Collectibles' },
  { id: 'dubai', label: 'Dubai Real Estate' },
  { id: 'art', label: 'Fine Art' },
  { id: 'litigation', label: 'Litigation Finance' },
  { id: 'acquisitions', label: 'Business Acquisitions' },
  { id: 'offshore', label: 'Offshore Banking / HSBC Expat' },
  { id: 'transfers', label: 'International Transfers' },
  { id: 'general', label: 'General Guidance' },
]

export function ExpertModal({ isOpen, onClose }: ExpertModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferredContact: '',
    portfolio: '',
    interests: [] as string[],
    location: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleInterestToggle = (id: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(id)
        ? prev.interests.filter(i => i !== id)
        : [...prev.interests, id]
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In production, this would send to your backend
    console.log('Form submitted:', formData)
    setSubmitted(true)
  }

  const handleClose = () => {
    setSubmitted(false)
    setFormData({
      name: '',
      email: '',
      phone: '',
      preferredContact: '',
      portfolio: '',
      interests: [],
      location: '',
      message: '',
    })
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={handleClose}
      />
      
      {/* Modal */}
      <div className="relative bg-citadel-charcoal border border-citadel-border rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-citadel-charcoal border-b border-citadel-border p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-citadel-gold/10">
              <Phone className="w-5 h-5 text-citadel-gold" />
            </div>
            <div>
              <h2 className="font-serif text-xl font-semibold text-citadel-cream">
                Talk to an Expert
              </h2>
              <p className="text-sm text-citadel-cream/60">Free consultation, no obligation</p>
            </div>
          </div>
          <button 
            onClick={handleClose}
            className="p-2 hover:bg-citadel-slate rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-citadel-cream/60" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
                <Send className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-citadel-cream mb-2">
                Thank You!
              </h3>
              <p className="text-citadel-cream/60 mb-6">
                One of our specialists will reach out within 24 hours via your preferred contact method.
              </p>
              <button onClick={handleClose} className="btn-primary">
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Contact Info */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-citadel-cream/70 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="John Smith"
                    className="w-full px-4 py-3 bg-citadel-slate border border-citadel-border rounded-lg text-citadel-cream placeholder:text-citadel-cream/40 focus:outline-none focus:border-citadel-gold/50"
                  />
                </div>
                <div>
                  <label className="block text-sm text-citadel-cream/70 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 bg-citadel-slate border border-citadel-border rounded-lg text-citadel-cream placeholder:text-citadel-cream/40 focus:outline-none focus:border-citadel-gold/50"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-citadel-cream/70 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    placeholder="+1 (555) 000-0000"
                    className="w-full px-4 py-3 bg-citadel-slate border border-citadel-border rounded-lg text-citadel-cream placeholder:text-citadel-cream/40 focus:outline-none focus:border-citadel-gold/50"
                  />
                </div>
                <div>
                  <label className="block text-sm text-citadel-cream/70 mb-2">
                    Where are you based? *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.location}
                    onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                    placeholder="City, Country"
                    className="w-full px-4 py-3 bg-citadel-slate border border-citadel-border rounded-lg text-citadel-cream placeholder:text-citadel-cream/40 focus:outline-none focus:border-citadel-gold/50"
                  />
                </div>
              </div>

              {/* Preferred Contact Method */}
              <div>
                <label className="block text-sm text-citadel-cream/70 mb-3">
                  Preferred Way to Communicate *
                </label>
                <div className="flex flex-wrap gap-2">
                  {communicationMethods.map((method) => (
                    <button
                      key={method.id}
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, preferredContact: method.id }))}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        formData.preferredContact === method.id
                          ? 'bg-citadel-gold text-citadel-black'
                          : 'bg-citadel-slate text-citadel-cream/70 hover:bg-citadel-slate/80'
                      }`}
                    >
                      {method.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Portfolio Size */}
              <div>
                <label className="block text-sm text-citadel-cream/70 mb-3">
                  Portfolio Size *
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {portfolioRanges.map((range) => (
                    <button
                      key={range.id}
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, portfolio: range.id }))}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        formData.portfolio === range.id
                          ? 'bg-citadel-gold text-citadel-black'
                          : 'bg-citadel-slate text-citadel-cream/70 hover:bg-citadel-slate/80'
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* What are you looking for */}
              <div>
                <label className="block text-sm text-citadel-cream/70 mb-3">
                  What are you interested in? (Select all that apply) *
                </label>
                <div className="flex flex-wrap gap-2">
                  {interests.map((interest) => (
                    <button
                      key={interest.id}
                      type="button"
                      onClick={() => handleInterestToggle(interest.id)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        formData.interests.includes(interest.id)
                          ? 'bg-citadel-gold text-citadel-black'
                          : 'bg-citadel-slate text-citadel-cream/70 hover:bg-citadel-slate/80'
                      }`}
                    >
                      {interest.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Additional Message */}
              <div>
                <label className="block text-sm text-citadel-cream/70 mb-2">
                  Anything else you would like us to know? (Optional)
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  rows={3}
                  placeholder="Tell us more about your goals..."
                  className="w-full px-4 py-3 bg-citadel-slate border border-citadel-border rounded-lg text-citadel-cream placeholder:text-citadel-cream/40 focus:outline-none focus:border-citadel-gold/50 resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={!formData.name || !formData.email || !formData.phone || !formData.preferredContact || !formData.portfolio || formData.interests.length === 0 || !formData.location}
                className="w-full btn-primary justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Phone className="w-4 h-4 mr-2" />
                Request a Call
              </button>

              <p className="text-xs text-citadel-cream/40 text-center">
                By submitting, you agree to our privacy policy. We will never share your information.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

