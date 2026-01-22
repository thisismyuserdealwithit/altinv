import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | Alt-Wealth Citadel',
  description: 'Terms of service and conditions for using Alt-Wealth Citadel website and services.',
}

export default function TermsPage() {
  return (
    <div className="pt-20 min-h-screen bg-citadel-black">
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-serif text-4xl font-semibold text-citadel-cream mb-8">
              Terms of Service
            </h1>
            <p className="text-citadel-cream/60 mb-8">
              Last updated: January 1, 2026
            </p>

            <div className="prose prose-invert prose-citadel max-w-none space-y-8">
              <section>
                <h2 className="font-serif text-2xl font-semibold text-citadel-cream mb-4">
                  Agreement to Terms
                </h2>
                <p className="text-citadel-cream/70 leading-relaxed">
                  By accessing or using Alt-Wealth Citadel, you agree to be bound by these Terms 
                  of Service. If you disagree with any part of these terms, you may not access 
                  our website or services.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-semibold text-citadel-cream mb-4">
                  Educational Purpose Only
                </h2>
                <p className="text-citadel-cream/70 leading-relaxed">
                  The content on this website is for educational and informational purposes only. 
                  Nothing on this site constitutes investment advice, financial advice, tax advice, 
                  or legal advice. Always consult with qualified professionals before making 
                  investment decisions.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-semibold text-citadel-cream mb-4">
                  Affiliate Relationships
                </h2>
                <p className="text-citadel-cream/70 leading-relaxed">
                  Some links on this site are affiliate links. We may receive compensation if you 
                  click through and take action. This does not affect our editorial independence 
                  or the price you pay. We only recommend products and services we believe provide 
                  value to our readers.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-semibold text-citadel-cream mb-4">
                  No Guarantees
                </h2>
                <p className="text-citadel-cream/70 leading-relaxed">
                  Past performance is not indicative of future results. All investments carry risk, 
                  including the potential loss of principal. We make no guarantees about the 
                  accuracy, completeness, or timeliness of information on this site.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-semibold text-citadel-cream mb-4">
                  Intellectual Property
                </h2>
                <p className="text-citadel-cream/70 leading-relaxed">
                  All content on this site, including text, graphics, logos, and software, is the 
                  property of Alt-Wealth Citadel and protected by copyright laws. You may not 
                  reproduce, distribute, or create derivative works without our express permission.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-semibold text-citadel-cream mb-4">
                  Limitation of Liability
                </h2>
                <p className="text-citadel-cream/70 leading-relaxed">
                  Alt-Wealth Citadel shall not be liable for any indirect, incidental, special, 
                  consequential, or punitive damages resulting from your use of or inability to 
                  use our services.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-semibold text-citadel-cream mb-4">
                  Changes to Terms
                </h2>
                <p className="text-citadel-cream/70 leading-relaxed">
                  We reserve the right to modify these terms at any time. Continued use of the 
                  site after changes constitutes acceptance of the new terms.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-semibold text-citadel-cream mb-4">
                  Contact
                </h2>
                <p className="text-citadel-cream/70 leading-relaxed">
                  Questions about these terms? Contact us at legal@altwealthcitadel.com.
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

