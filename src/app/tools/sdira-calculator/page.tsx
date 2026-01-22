'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Calculator, Info, TrendingUp } from 'lucide-react'

export default function SDIRACalculatorPage() {
  const [investmentAmount, setInvestmentAmount] = useState(50000)
  const [annualReturn, setAnnualReturn] = useState(12)
  const [holdingPeriod, setHoldingPeriod] = useState(10)
  const [taxBracket, setTaxBracket] = useState(32)
  const [showResults, setShowResults] = useState(false)

  const calculate = () => {
    setShowResults(true)
  }

  // Calculate results
  const futureValueTaxable = investmentAmount * Math.pow(1 + (annualReturn * (1 - taxBracket/100)) / 100, holdingPeriod)
  const futureValueTraditional = investmentAmount * Math.pow(1 + annualReturn / 100, holdingPeriod)
  const futureValueRoth = investmentAmount * Math.pow(1 + annualReturn / 100, holdingPeriod)
  
  // After-tax values
  const taxableAfterTax = investmentAmount + (futureValueTaxable - investmentAmount) * (1 - 0.238) // 23.8% LTCG
  const traditionalAfterTax = futureValueTraditional * (1 - taxBracket / 100)
  const rothAfterTax = futureValueRoth // No tax on qualified withdrawal

  const rothAdvantage = rothAfterTax - taxableAfterTax
  const traditionalAdvantage = traditionalAfterTax - taxableAfterTax

  return (
    <div className="pt-20 min-h-screen bg-citadel-black">
      <div className="bg-citadel-charcoal border-b border-citadel-border">
        <div className="container-custom py-4">
          <Link href="/tools" className="inline-flex items-center gap-2 text-sm text-citadel-cream/60 hover:text-citadel-gold transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Tools
          </Link>
        </div>
      </div>

      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-500/10 mb-6">
                <Calculator className="w-8 h-8 text-amber-400" />
              </div>
              <h1 className="font-serif text-3xl md:text-4xl font-semibold text-citadel-cream mb-4">
                SDIRA Tax Savings Calculator
              </h1>
              <p className="text-citadel-cream/60 max-w-2xl mx-auto">
                Compare the tax benefits of investing alternatives through a Self-Directed IRA 
                vs. a regular taxable account.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="card">
                <h3 className="font-serif text-lg font-semibold text-citadel-cream mb-6">
                  Investment Details
                </h3>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm text-citadel-cream/70 mb-2">
                      Investment Amount
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-citadel-cream/50">$</span>
                      <input
                        type="number"
                        value={investmentAmount}
                        onChange={(e) => setInvestmentAmount(Number(e.target.value))}
                        className="w-full bg-citadel-slate border border-citadel-border rounded-lg px-8 py-3 text-citadel-cream focus:border-citadel-gold focus:outline-none"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm text-citadel-cream/70 mb-2">
                      Expected Annual Return: {annualReturn}%
                    </label>
                    <input
                      type="range"
                      min="5"
                      max="25"
                      value={annualReturn}
                      onChange={(e) => setAnnualReturn(Number(e.target.value))}
                      className="w-full accent-citadel-gold"
                    />
                    <div className="flex justify-between text-xs text-citadel-cream/50">
                      <span>5%</span>
                      <span>25%</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-citadel-cream/70 mb-2">
                      Holding Period: {holdingPeriod} years
                    </label>
                    <input
                      type="range"
                      min="5"
                      max="30"
                      value={holdingPeriod}
                      onChange={(e) => setHoldingPeriod(Number(e.target.value))}
                      className="w-full accent-citadel-gold"
                    />
                    <div className="flex justify-between text-xs text-citadel-cream/50">
                      <span>5 years</span>
                      <span>30 years</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-citadel-cream/70 mb-2">
                      Tax Bracket: {taxBracket}%
                    </label>
                    <select
                      value={taxBracket}
                      onChange={(e) => setTaxBracket(Number(e.target.value))}
                      className="w-full bg-citadel-slate border border-citadel-border rounded-lg px-4 py-3 text-citadel-cream focus:border-citadel-gold focus:outline-none"
                    >
                      <option value={12}>12% (Low)</option>
                      <option value={22}>22% (Moderate)</option>
                      <option value={24}>24% (Moderate-High)</option>
                      <option value={32}>32% (High)</option>
                      <option value={35}>35% (Very High)</option>
                      <option value={37}>37% (Maximum)</option>
                    </select>
                  </div>

                  <button onClick={calculate} className="btn-primary w-full">
                    Calculate Savings
                  </button>
                </div>
              </div>

              <div className="space-y-6">
                {showResults ? (
                  <>
                    <div className="card gold-glow">
                      <h3 className="font-serif text-lg font-semibold text-citadel-cream mb-4">
                        After-Tax Value Comparison
                      </h3>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center pb-3 border-b border-citadel-border">
                          <div>
                            <div className="text-citadel-cream">Roth SDIRA</div>
                            <div className="text-xs text-citadel-cream/50">Tax-free withdrawals</div>
                          </div>
                          <div className="text-right">
                            <div className="font-mono text-xl text-green-400">
                              ${rothAfterTax.toLocaleString(undefined, {maximumFractionDigits: 0})}
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-between items-center pb-3 border-b border-citadel-border">
                          <div>
                            <div className="text-citadel-cream">Traditional SDIRA</div>
                            <div className="text-xs text-citadel-cream/50">Taxed at withdrawal</div>
                          </div>
                          <div className="text-right">
                            <div className="font-mono text-xl text-citadel-gold">
                              ${traditionalAfterTax.toLocaleString(undefined, {maximumFractionDigits: 0})}
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <div>
                            <div className="text-citadel-cream">Taxable Account</div>
                            <div className="text-xs text-citadel-cream/50">Annual tax drag + LTCG</div>
                          </div>
                          <div className="text-right">
                            <div className="font-mono text-xl text-citadel-cream/70">
                              ${taxableAfterTax.toLocaleString(undefined, {maximumFractionDigits: 0})}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="card bg-green-500/10 border-green-500/20">
                      <div className="flex items-center gap-4">
                        <TrendingUp className="w-8 h-8 text-green-400" />
                        <div>
                          <div className="text-sm text-citadel-cream/70">Roth SDIRA Advantage</div>
                          <div className="font-mono text-2xl text-green-400">
                            +${rothAdvantage.toLocaleString(undefined, {maximumFractionDigits: 0})}
                          </div>
                          <div className="text-xs text-citadel-cream/50">
                            vs. taxable account over {holdingPeriod} years
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="card">
                      <h4 className="font-medium text-citadel-cream mb-3">Key Assumptions</h4>
                      <ul className="space-y-1 text-sm text-citadel-cream/60">
                        <li>• Long-term capital gains rate: 23.8%</li>
                        <li>• Roth withdrawals after age 59½</li>
                        <li>• Traditional SDIRA taxed at current bracket</li>
                        <li>• Taxable account has annual dividend drag</li>
                      </ul>
                    </div>
                  </>
                ) : (
                  <div className="card text-center py-16">
                    <Calculator className="w-12 h-12 text-citadel-cream/30 mx-auto mb-4" />
                    <p className="text-citadel-cream/50">
                      Enter your details and click calculate
                    </p>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-12 card bg-citadel-charcoal">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="flex-1">
                  <h3 className="font-serif text-xl font-semibold text-citadel-cream mb-2">
                    Ready to Open an SDIRA?
                  </h3>
                  <p className="text-citadel-cream/60">
                    Compare providers and learn the complete SDIRA strategy in our playbook.
                  </p>
                </div>
                <Link href="/research/sdira-playbook" className="btn-primary whitespace-nowrap">
                  Read the SDIRA Playbook
                </Link>
              </div>
            </div>

            <div className="mt-8 p-4 bg-citadel-charcoal rounded-lg border border-citadel-border">
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-citadel-cream/50 flex-shrink-0 mt-0.5" />
                <p className="text-xs text-citadel-cream/50">
                  This calculator provides estimates for educational purposes only. Actual tax 
                  savings depend on your specific situation, investment performance, and tax 
                  laws at the time of withdrawal. Consult a tax professional before making decisions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
