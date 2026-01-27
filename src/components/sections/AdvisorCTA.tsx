'use client'

import Link from 'next/link'
import { Phone, FileText, Mail } from 'lucide-react'
import { TalkToExpertButton } from '../TalkToExpertButton'

export function AdvisorCTA() {
  return (
    <section className="relative section-padding overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover scale-105"
      >
        <source src="/videos/expert.mp4" type="video/mp4" />
      </video>
      
      {/* Multi-layer Gold Overlay */}
      <div className="absolute inset-0 video-overlay-gold" />
      <div className="absolute inset-0 bg-citadel-black/70" />
      <div className="absolute inset-0 bg-gradient-to-t from-citadel-black via-citadel-black/50 to-transparent" />
      
      {/* Vignette */}
      <div className="absolute inset-0 video-vignette pointer-events-none" />
      
      <div className="container-custom relative z-10">
        <div className="card gold-glow max-w-4xl mx-auto bg-citadel-charcoal/95 backdrop-blur-md border-citadel-gold/20">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
            {/* Content */}
            <div>
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-citadel-gold" />
                <span className="text-citadel-gold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-xs sm:text-sm font-medium">
                  Free Consultation
                </span>
              </div>
              
              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-semibold text-citadel-cream mb-3 sm:mb-4">
                Talk to an Expert
              </h2>
              
              <p className="text-sm sm:text-base text-citadel-cream/60 mb-5 sm:mb-6">
                Not sure where to start? Book a complimentary call with one of our 
                alternative investment specialists. No sales pressure, just guidance 
                based on your situation.
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                <TalkToExpertButton variant="primary" />
                <Link href="/contact" className="btn-secondary">
                  Send a Message
                </Link>
              </div>
            </div>

            {/* Benefits */}
            <div className="space-y-3 sm:space-y-4 mt-4 md:mt-0">
              <div className="bg-citadel-slate/50 backdrop-blur-sm rounded-xl p-3 sm:p-4 flex items-start gap-3 sm:gap-4 border border-citadel-border/50">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-citadel-gold flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-medium text-citadel-cream text-sm sm:text-base mb-0.5 sm:mb-1">30 Minute Call</div>
                  <div className="text-xs sm:text-sm text-citadel-cream/50">Discuss your goals and get personalized recommendations</div>
                </div>
              </div>
              <div className="bg-citadel-slate/50 backdrop-blur-sm rounded-xl p-3 sm:p-4 flex items-start gap-3 sm:gap-4 border border-citadel-border/50">
                <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-citadel-gold flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-medium text-citadel-cream text-sm sm:text-base mb-0.5 sm:mb-1">Free Brochures</div>
                  <div className="text-xs sm:text-sm text-citadel-cream/50">Download detailed guides on each sector</div>
                </div>
              </div>
              <div className="bg-citadel-slate/50 backdrop-blur-sm rounded-xl p-3 sm:p-4 flex items-start gap-3 sm:gap-4 border border-citadel-border/50">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-citadel-gold flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-medium text-citadel-cream text-sm sm:text-base mb-0.5 sm:mb-1">Weekly Newsletter</div>
                  <div className="text-xs sm:text-sm text-citadel-cream/50">Market insights delivered to your inbox</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
