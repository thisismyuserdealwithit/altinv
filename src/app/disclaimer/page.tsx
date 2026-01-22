import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Disclaimer | Alt-Wealth Citadel',
  description: 'Important disclaimers regarding investment information and advice on Alt-Wealth Citadel.',
}

export default function DisclaimerPage() {
  return (
    <div className="pt-20 min-h-screen bg-citadel-black">
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-serif text-4xl font-semibold text-citadel-cream mb-8">
              Disclaimer
            </h1>

            <div className="prose prose-invert prose-citadel max-w-none space-y-8">
              <div className="p-6 bg-amber-500/10 rounded-xl border border-amber-500/20">
                <p className="text-citadel-cream font-medium mb-0">
                  The information provided on Alt-Wealth Citadel is for educational and 
                  informational purposes only and should not be construed as investment advice.
                </p>
              </div>

              <section>
                <h2 className="font-serif text-2xl font-semibold text-citadel-cream mb-4">
                  Not Investment Advice
                </h2>
                <p className="text-citadel-cream/70 leading-relaxed">
                  Nothing on this website constitutes investment advice, financial advice, 
                  trading advice, or any other type of advice. You should not treat any of 
                  the website's content as such. Alt-Wealth Citadel does not recommend that 
                  any investment, security, or asset be bought, sold, or held by you.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-semibold text-citadel-cream mb-4">
                  Investment Risks
                </h2>
                <p className="text-citadel-cream/70 leading-relaxed">
                  All investments involve risk. The past performance of any investment is not 
                  a reliable indicator of future results. Investment values may fluctuate, and 
                  you may lose some or all of your invested capital. Alternative investments, 
                  in particular, can be illiquid, complex, and involve substantial risk.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-semibold text-citadel-cream mb-4">
                  Do Your Own Research
                </h2>
                <p className="text-citadel-cream/70 leading-relaxed">
                  Any investment decision should be made only after conducting thorough due 
                  diligence and consulting with qualified professionals including financial 
                  advisors, tax advisors, and legal counsel as appropriate for your specific 
                  situation.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-semibold text-citadel-cream mb-4">
                  Affiliate Disclosure
                </h2>
                <p className="text-citadel-cream/70 leading-relaxed">
                  Alt-Wealth Citadel participates in affiliate marketing programs. Some links 
                  on this site are affiliate links, and we may earn a commission if you click 
                  through and complete a transaction. This does not affect the price you pay 
                  or our editorial objectivity. We only recommend products and services we 
                  believe provide genuine value.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-semibold text-citadel-cream mb-4">
                  No Guarantees
                </h2>
                <p className="text-citadel-cream/70 leading-relaxed">
                  We make no representations or warranties of any kind, express or implied, 
                  about the completeness, accuracy, reliability, suitability, or availability 
                  of the information, products, services, or related graphics contained on 
                  the website.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-semibold text-citadel-cream mb-4">
                  Third-Party Content
                </h2>
                <p className="text-citadel-cream/70 leading-relaxed">
                  This website may contain links to third-party websites or content. We do 
                  not endorse or assume any responsibility for the content, privacy policies, 
                  or practices of any third-party sites.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-semibold text-citadel-cream mb-4">
                  Accredited Investor Requirements
                </h2>
                <p className="text-citadel-cream/70 leading-relaxed">
                  Many alternative investments discussed on this site are only available to 
                  accredited investors as defined by SEC regulations. You are responsible for 
                  determining your eligibility to participate in any investment opportunity.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-semibold text-citadel-cream mb-4">
                  Contact
                </h2>
                <p className="text-citadel-cream/70 leading-relaxed">
                  If you have questions about this disclaimer, contact us at 
                  legal@altwealthcitadel.com.
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

