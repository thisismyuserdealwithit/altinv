'use client'

import Link from 'next/link'
import { Phone, FileText, Mail } from 'lucide-react'
import { TalkToExpertButton } from '../TalkToExpertButton'

export function AdvisorCTA() {
  return (
    <section className="section-padding bg-citadel-charcoal">
      <div className="container-custom">
        <div className="card gold-glow max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Content */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Phone className="w-5 h-5 text-citadel-gold" />
                <span className="text-citadel-gold uppercase tracking-[0.2em] text-sm font-medium">
                  Free Consultation
                </span>
              </div>
              
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-citadel-cream mb-4">
                Talk to an Expert
              </h2>
              
              <p className="text-citadel-cream/60 mb-6">
                Not sure where to start? Book a complimentary call with one of our 
                alternative investment specialists. No sales pressure, just guidance 
                based on your situation.
              </p>

              <div className="flex flex-wrap gap-4">
                <TalkToExpertButton variant="primary" />
                <Link href="/contact" className="btn-secondary">
                  Send a Message
                </Link>
              </div>
            </div>

            {/* Benefits */}
            <div className="space-y-4">
              <div className="bg-citadel-slate/50 rounded-xl p-4 flex items-start gap-4">
                <Phone className="w-5 h-5 text-citadel-gold flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-medium text-citadel-cream mb-1">30 Minute Call</div>
                  <div className="text-sm text-citadel-cream/50">Discuss your goals and get personalized recommendations</div>
                </div>
              </div>
              <div className="bg-citadel-slate/50 rounded-xl p-4 flex items-start gap-4">
                <FileText className="w-5 h-5 text-citadel-gold flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-medium text-citadel-cream mb-1">Free Brochures</div>
                  <div className="text-sm text-citadel-cream/50">Download detailed guides on each sector</div>
                </div>
              </div>
              <div className="bg-citadel-slate/50 rounded-xl p-4 flex items-start gap-4">
                <Mail className="w-5 h-5 text-citadel-gold flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-medium text-citadel-cream mb-1">Weekly Newsletter</div>
                  <div className="text-sm text-citadel-cream/50">Market insights delivered to your inbox</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
