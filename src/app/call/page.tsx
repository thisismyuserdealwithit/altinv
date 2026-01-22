'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Phone, Check, Calendar, Clock, Video, Mail } from 'lucide-react'

const callTypes = [
  { id: 'intro', label: 'General Introduction', duration: '30 min' },
  { id: 'metals', label: 'Rare Metals Focus', duration: '30 min' },
  { id: 'dubai', label: 'Dubai Real Estate', duration: '30 min' },
  { id: 'art', label: 'Art & Collectibles', duration: '30 min' },
  { id: 'portfolio', label: 'Portfolio Review', duration: '45 min' },
]

const benefits = [
  'No sales pressure, just guidance',
  'Discuss your specific situation',
  'Get personalized recommendations',
  'Learn about our partner network',
  'Completely free, no obligation',
]

export default function CallPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    callType: '',
    preferredTime: '',
    message: '',
  })
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
                <Phone className="w-4 h-4 text-citadel-gold" />
                <span className="text-sm text-citadel-gold">Free Consultation</span>
              </div>
              
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-citadel-cream mb-6 leading-tight">
                Book a Free<br />
                <span className="text-citadel-gold">Expert Call</span>
              </h1>
              
              <p className="text-xl text-citadel-cream/60 leading-relaxed mb-8">
                Speak with one of our alternative investment specialists. 
                Get personalized guidance based on your goals, timeline, and budget. 
                No sales pressure.
              </p>

              <ul className="space-y-3">
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
                    <Calendar className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="font-serif text-2xl font-semibold text-citadel-cream mb-2">
                    Call Requested!
                  </h3>
                  <p className="text-citadel-cream/60 mb-6">
                    We will reach out within 24 hours to confirm your call time. 
                    Check your email for next steps.
                  </p>
                  <Link href="/" className="btn-secondary">
                    Back to Home
                  </Link>
                </div>
              ) : (
                <>
                  <h3 className="font-serif text-xl font-semibold text-citadel-cream mb-6">
                    Schedule Your Call
                  </h3>

                  <form onSubmit={handleSubmit} className="space-y-4">
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
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-4 py-3 bg-citadel-slate border border-citadel-border rounded-lg text-citadel-cream placeholder:text-citadel-cream/40 focus:outline-none focus:border-citadel-gold/50"
                      />
                    </div>

                    <div>
                      <label className="block text-sm text-citadel-cream/70 mb-2">
                        Call Topic *
                      </label>
                      <select
                        required
                        value={formData.callType}
                        onChange={(e) => setFormData({...formData, callType: e.target.value})}
                        className="w-full px-4 py-3 bg-citadel-slate border border-citadel-border rounded-lg text-citadel-cream focus:outline-none focus:border-citadel-gold/50"
                      >
                        <option value="">Select a topic</option>
                        {callTypes.map((type) => (
                          <option key={type.id} value={type.id}>
                            {type.label} ({type.duration})
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm text-citadel-cream/70 mb-2">
                        Preferred Time
                      </label>
                      <select
                        value={formData.preferredTime}
                        onChange={(e) => setFormData({...formData, preferredTime: e.target.value})}
                        className="w-full px-4 py-3 bg-citadel-slate border border-citadel-border rounded-lg text-citadel-cream focus:outline-none focus:border-citadel-gold/50"
                      >
                        <option value="">Any time works</option>
                        <option value="morning">Morning (9am to 12pm)</option>
                        <option value="afternoon">Afternoon (12pm to 5pm)</option>
                        <option value="evening">Evening (5pm to 8pm)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm text-citadel-cream/70 mb-2">
                        Anything specific to discuss? (Optional)
                      </label>
                      <textarea
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        rows={3}
                        placeholder="Tell us about your goals..."
                        className="w-full px-4 py-3 bg-citadel-slate border border-citadel-border rounded-lg text-citadel-cream placeholder:text-citadel-cream/40 focus:outline-none focus:border-citadel-gold/50 resize-none"
                      />
                    </div>

                    <button type="submit" className="w-full btn-primary justify-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      Request Call
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="section-padding bg-citadel-charcoal">
        <div className="container-custom">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-citadel-cream mb-8">
            What to Expect
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="card">
              <Clock className="w-8 h-8 text-citadel-gold mb-4" />
              <h3 className="font-serif text-lg font-semibold text-citadel-cream mb-2">
                30 Minute Call
              </h3>
              <p className="text-sm text-citadel-cream/60">
                Enough time to cover your questions without wasting your day.
              </p>
            </div>

            <div className="card">
              <Video className="w-8 h-8 text-citadel-gold mb-4" />
              <h3 className="font-serif text-lg font-semibold text-citadel-cream mb-2">
                Phone or Video
              </h3>
              <p className="text-sm text-citadel-cream/60">
                Your choice. We can do a simple phone call or Zoom meeting.
              </p>
            </div>

            <div className="card">
              <Mail className="w-8 h-8 text-citadel-gold mb-4" />
              <h3 className="font-serif text-lg font-semibold text-citadel-cream mb-2">
                Follow Up Summary
              </h3>
              <p className="text-sm text-citadel-cream/60">
                We will email you a summary of recommendations after the call.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

