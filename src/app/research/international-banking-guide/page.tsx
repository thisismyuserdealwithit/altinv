import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Clock, Calendar, ArrowRight, Landmark, Shield, FileText, AlertTriangle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'International Banking for US Investors | Compliance Guide | Alt-Wealth Citadel',
  description: 'FBAR, FATCA, and the legal ways to bank offshore. What US investors need to know before opening international accounts.',
  keywords: 'offshore banking, FBAR requirements, FATCA compliance, international bank account, expat banking, hsbc expat',
}

export default function InternationalBankingGuidePage() {
  return (
    <div className="pt-20">
      {/* Breadcrumb */}
      <div className="bg-citadel-charcoal border-b border-citadel-border">
        <div className="container-custom py-4">
          <Link href="/research" className="inline-flex items-center gap-2 text-sm text-citadel-cream/60 hover:text-citadel-gold transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Research
          </Link>
        </div>
      </div>

      {/* Article Header */}
      <section className="section-padding gradient-hero">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs px-2 py-1 bg-blue-500/20 text-blue-400 rounded">
                Guide
              </span>
              <span className="text-xs px-2 py-1 bg-citadel-slate text-citadel-cream/60 rounded">
                Global
              </span>
            </div>
            
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-citadel-cream mb-6 leading-tight">
              International Banking for US Investors: A Compliance-First Guide
            </h1>
            
            <p className="text-xl text-citadel-cream/60 leading-relaxed mb-8">
              FBAR, FATCA, and the legal ways to bank offshore. What you need 
              to know before opening that international account.
            </p>

            <div className="flex items-center gap-6 text-sm text-citadel-cream/50">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                December 15, 2025
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                8 min read
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Warning Banner */}
      <section className="py-6 bg-amber-500/10 border-y border-amber-500/20">
        <div className="container-custom">
          <div className="flex items-center gap-4">
            <AlertTriangle className="w-6 h-6 text-amber-400 flex-shrink-0" />
            <p className="text-sm text-citadel-cream/80">
              <strong className="text-amber-400">Important:</strong> This guide is 
              for educational purposes only. Consult with a qualified tax professional 
              before opening international accounts. Penalties for non-compliance 
              are severe.
            </p>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="section-padding bg-citadel-black">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <article className="prose prose-invert prose-citadel max-w-none">
              <p className="text-lg text-citadel-cream/80 leading-relaxed">
                Opening an international bank account is completely legal for US citizens. 
                But the reporting requirements are extensive, and the penalties for 
                non-compliance are draconian. Here's what you need to know.
              </p>

              <h2 className="font-serif text-2xl font-semibold text-citadel-cream mt-12 mb-4">
                Why Bank Internationally?
              </h2>
              <p className="text-citadel-cream/70 leading-relaxed">
                Legitimate reasons for international accounts include:
              </p>
              <ul className="space-y-2 text-citadel-cream/70">
                <li>Holding currency for overseas property purchases</li>
                <li>Receiving income from international clients or employers</li>
                <li>Managing investments in foreign markets</li>
                <li>Expat life—living abroad and needing local banking</li>
                <li>Currency diversification as a hedge</li>
              </ul>
              <p className="text-citadel-cream/70 leading-relaxed mt-4">
                What's NOT legitimate: hiding assets from the IRS, evading taxes, 
                or circumventing US sanctions. These are serious federal crimes.
              </p>

              <h2 className="font-serif text-2xl font-semibold text-citadel-cream mt-12 mb-4">
                FBAR: The $10,000 Threshold
              </h2>
              <p className="text-citadel-cream/70 leading-relaxed">
                If your foreign financial accounts exceed $10,000 in aggregate value 
                at any point during the year, you must file FinCEN Form 114 (FBAR) 
                by April 15 (with automatic extension to October 15).
              </p>
            </article>

            {/* FBAR Box */}
            <div className="my-8 p-6 bg-citadel-charcoal rounded-xl border border-citadel-border">
              <FileText className="w-8 h-8 text-blue-400 mb-4" />
              <h4 className="font-serif text-lg font-semibold text-citadel-cream mb-4">
                FBAR Requirements
              </h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="text-sm text-citadel-cream/50 uppercase mb-2">What's Reported</h5>
                  <ul className="space-y-1 text-sm text-citadel-cream/70">
                    <li>• Bank accounts</li>
                    <li>• Securities accounts</li>
                    <li>• Mutual funds</li>
                    <li>• Some insurance policies</li>
                    <li>• Accounts you have signature authority over</li>
                  </ul>
                </div>
                <div>
                  <h5 className="text-sm text-citadel-cream/50 uppercase mb-2">Penalties for Non-Filing</h5>
                  <ul className="space-y-1 text-sm text-citadel-cream/70">
                    <li>• Non-willful: up to $10,000 per violation</li>
                    <li>• Willful: greater of $100,000 or 50% of account balance</li>
                    <li>• Criminal penalties possible</li>
                  </ul>
                </div>
              </div>
            </div>

            <article className="prose prose-invert prose-citadel max-w-none">
              <h2 className="font-serif text-2xl font-semibold text-citadel-cream mt-12 mb-4">
                FATCA: Form 8938
              </h2>
              <p className="text-citadel-cream/70 leading-relaxed">
                In addition to FBAR, you may need to file Form 8938 (Statement of 
                Specified Foreign Financial Assets) with your tax return. The 
                thresholds are higher:
              </p>
              <ul className="space-y-2 text-citadel-cream/70">
                <li><strong className="text-citadel-cream">US residents:</strong> $50,000 on last day of year, or $75,000 at any point</li>
                <li><strong className="text-citadel-cream">US expats:</strong> $200,000 on last day of year, or $300,000 at any point</li>
              </ul>
              <p className="text-citadel-cream/70 leading-relaxed mt-4">
                Yes, this means you may file both FBAR and Form 8938 for the same accounts.
              </p>

              <h2 className="font-serif text-2xl font-semibold text-citadel-cream mt-12 mb-4">
                Where Can Americans Bank?
              </h2>
              <p className="text-citadel-cream/70 leading-relaxed">
                FATCA has made it harder for Americans to open foreign accounts. Many 
                banks refuse US clients due to compliance costs. Those that accept 
                Americans include:
              </p>
              <ul className="space-y-2 text-citadel-cream/70">
                <li><strong className="text-citadel-cream">HSBC Expat (Jersey):</strong> Specifically designed for international clients, FATCA-compliant</li>
                <li><strong className="text-citadel-cream">Interactive Brokers:</strong> Multi-currency brokerage accounts</li>
                <li><strong className="text-citadel-cream">Charles Schwab International:</strong> US-based but offers international features</li>
                <li><strong className="text-citadel-cream">Singapore banks:</strong> DBS, OCBC (with sufficient assets)</li>
              </ul>

              <h2 className="font-serif text-2xl font-semibold text-citadel-cream mt-12 mb-4">
                Tax Implications
              </h2>
              <p className="text-citadel-cream/70 leading-relaxed">
                Key tax considerations:
              </p>
              <ul className="space-y-2 text-citadel-cream/70">
                <li><strong className="text-citadel-cream">Interest income:</strong> Taxable as ordinary income, regardless of where earned</li>
                <li><strong className="text-citadel-cream">Foreign tax credit:</strong> Avoid double taxation with Form 1116</li>
                <li><strong className="text-citadel-cream">Currency gains:</strong> Selling foreign currency for more than you paid is taxable</li>
                <li><strong className="text-citadel-cream">PFIC rules:</strong> Foreign mutual funds have punitive tax treatment</li>
              </ul>

              <div className="my-12 p-6 bg-citadel-charcoal rounded-xl border border-amber-500/30">
                <Shield className="w-8 h-8 text-amber-400 mb-4" />
                <h4 className="font-serif text-lg font-semibold text-citadel-cream mb-2">
                  Compliance Checklist
                </h4>
                <ul className="space-y-2 text-citadel-cream/70">
                  <li>☐ Keep records of all foreign accounts</li>
                  <li>☐ Track maximum balance for each account annually</li>
                  <li>☐ File FBAR by deadline if threshold exceeded</li>
                  <li>☐ File Form 8938 with tax return if required</li>
                  <li>☐ Report all interest income on Schedule B</li>
                  <li>☐ Work with a CPA experienced in international taxation</li>
                </ul>
              </div>

              <h2 className="font-serif text-2xl font-semibold text-citadel-cream mt-12 mb-4">
                Getting Started
              </h2>
              <p className="text-citadel-cream/70 leading-relaxed">
                If you have legitimate needs for international banking:
              </p>
              <ol className="space-y-4 text-citadel-cream/70">
                <li><strong className="text-citadel-cream">1. Consult a tax professional</strong> before opening any account</li>
                <li><strong className="text-citadel-cream">2. Choose a FATCA-compliant institution</strong> that accepts Americans</li>
                <li><strong className="text-citadel-cream">3. Maintain impeccable records</strong> of all transactions</li>
                <li><strong className="text-citadel-cream">4. File all required forms</strong> on time, every year</li>
              </ol>

              <div className="my-12 p-6 bg-citadel-charcoal rounded-xl border border-citadel-gold/30">
                <h4 className="font-serif text-lg font-semibold text-citadel-cream mb-2">
                  Bottom Line
                </h4>
                <p className="text-citadel-cream/70">
                  International banking is legal, but compliance is non-negotiable. 
                  The reporting requirements are extensive, and the penalties for 
                  errors are severe. Work with professionals, keep meticulous records, 
                  and never attempt to hide accounts from the IRS.
                </p>
              </div>
            </article>

            {/* CTA */}
            <div className="mt-12 p-6 bg-citadel-charcoal rounded-xl">
              <h3 className="font-serif text-xl font-semibold text-citadel-cream mb-4">
                Ready to Explore International Banking?
              </h3>
              <p className="text-citadel-cream/60 mb-6">
                We partner with compliant institutions that accept US clients.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/global/hsbc-expat" className="btn-primary">
                  HSBC Expat Guide
                </Link>
                <Link href="/global" className="btn-secondary">
                  Global Liquidity Hub
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

