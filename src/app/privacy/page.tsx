import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Alt-Wealth Citadel',
  description: 'Privacy policy for Alt-Wealth Citadel - how we collect, use, and protect your personal information.',
}

export default function PrivacyPage() {
  return (
    <div className="pt-20 min-h-screen bg-citadel-black">
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-serif text-4xl font-semibold text-citadel-cream mb-8">
              Privacy Policy
            </h1>
            <p className="text-citadel-cream/60 mb-8">
              Last updated: January 1, 2026
            </p>

            <div className="prose prose-invert prose-citadel max-w-none space-y-8">
              <section>
                <h2 className="font-serif text-2xl font-semibold text-citadel-cream mb-4">
                  Introduction
                </h2>
                <p className="text-citadel-cream/70 leading-relaxed">
                  Alt-Wealth Citadel ("we," "our," or "us") respects your privacy and is committed 
                  to protecting your personal information. This Privacy Policy explains how we collect, 
                  use, disclose, and safeguard your information when you visit our website.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-semibold text-citadel-cream mb-4">
                  Information We Collect
                </h2>
                <p className="text-citadel-cream/70 leading-relaxed mb-4">
                  We may collect information about you in various ways:
                </p>
                <ul className="list-disc list-inside space-y-2 text-citadel-cream/70">
                  <li>Personal data you provide when signing up for our newsletter or services</li>
                  <li>Usage data automatically collected when you visit our site</li>
                  <li>Information from cookies and similar tracking technologies</li>
                  <li>Information you provide when contacting us</li>
                </ul>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-semibold text-citadel-cream mb-4">
                  How We Use Your Information
                </h2>
                <p className="text-citadel-cream/70 leading-relaxed mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-citadel-cream/70">
                  <li>Provide, operate, and maintain our website and services</li>
                  <li>Send you newsletters, marketing communications, and updates</li>
                  <li>Respond to your comments, questions, and requests</li>
                  <li>Analyze usage patterns to improve our services</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-semibold text-citadel-cream mb-4">
                  Disclosure of Your Information
                </h2>
                <p className="text-citadel-cream/70 leading-relaxed">
                  We may share your information with third parties only in the ways described in 
                  this policy, including with service providers, affiliate partners (with your 
                  consent), and as required by law.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-semibold text-citadel-cream mb-4">
                  Your Rights
                </h2>
                <p className="text-citadel-cream/70 leading-relaxed">
                  Depending on your location, you may have certain rights regarding your personal 
                  information, including the right to access, correct, delete, or port your data. 
                  Contact us to exercise these rights.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-semibold text-citadel-cream mb-4">
                  Contact Us
                </h2>
                <p className="text-citadel-cream/70 leading-relaxed">
                  If you have questions about this Privacy Policy, please contact us at 
                  privacy@altwealthcitadel.com.
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

