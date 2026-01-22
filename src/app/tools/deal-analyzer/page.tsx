'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Calculator, TrendingUp, DollarSign, Percent, Building, Info } from 'lucide-react'

interface DealInputs {
  purchasePrice: number
  downPayment: number
  interestRate: number
  loanTerm: number
  grossRent: number
  vacancy: number
  propertyTax: number
  insurance: number
  maintenance: number
  propertyManagement: number
  otherExpenses: number
  appreciationRate: number
  rentGrowth: number
  holdPeriod: number
}

interface DealResults {
  monthlyMortgage: number
  annualNOI: number
  cashOnCash: number
  capRate: number
  dscr: number
  totalCashFlow: number[]
  equityBuildup: number[]
  totalReturn: number
  irr: number
}

export default function DealAnalyzerPage() {
  const [inputs, setInputs] = useState<DealInputs>({
    purchasePrice: 500000,
    downPayment: 25,
    interestRate: 7.0,
    loanTerm: 30,
    grossRent: 4500,
    vacancy: 5,
    propertyTax: 6000,
    insurance: 1800,
    maintenance: 5,
    propertyManagement: 8,
    otherExpenses: 1200,
    appreciationRate: 3,
    rentGrowth: 2,
    holdPeriod: 5,
  })

  const [results, setResults] = useState<DealResults | null>(null)
  const [showResults, setShowResults] = useState(false)

  const handleInputChange = (field: keyof DealInputs, value: number) => {
    setInputs(prev => ({ ...prev, [field]: value }))
  }

  const calculateDeal = () => {
    const loanAmount = inputs.purchasePrice * (1 - inputs.downPayment / 100)
    const downPaymentAmount = inputs.purchasePrice * (inputs.downPayment / 100)
    const monthlyRate = inputs.interestRate / 100 / 12
    const numPayments = inputs.loanTerm * 12

    // Monthly mortgage payment
    const monthlyMortgage = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / 
                           (Math.pow(1 + monthlyRate, numPayments) - 1)

    // Year 1 calculations
    const effectiveGrossIncome = inputs.grossRent * 12 * (1 - inputs.vacancy / 100)
    const maintenanceCost = effectiveGrossIncome * (inputs.maintenance / 100)
    const propertyManagementCost = effectiveGrossIncome * (inputs.propertyManagement / 100)
    const totalExpenses = inputs.propertyTax + inputs.insurance + maintenanceCost + 
                         propertyManagementCost + inputs.otherExpenses
    const annualNOI = effectiveGrossIncome - totalExpenses
    const annualDebtService = monthlyMortgage * 12

    // Key metrics
    const cashOnCash = ((annualNOI - annualDebtService) / downPaymentAmount) * 100
    const capRate = (annualNOI / inputs.purchasePrice) * 100
    const dscr = annualNOI / annualDebtService

    // Multi-year projection
    const totalCashFlow: number[] = []
    const equityBuildup: number[] = []
    let remainingBalance = loanAmount
    let currentRent = inputs.grossRent
    let propertyValue = inputs.purchasePrice

    for (let year = 1; year <= inputs.holdPeriod; year++) {
      // Calculate this year's values
      const yearlyRent = currentRent * 12 * (1 - inputs.vacancy / 100)
      const yearlyMaintenance = yearlyRent * (inputs.maintenance / 100)
      const yearlyPM = yearlyRent * (inputs.propertyManagement / 100)
      const yearlyExpenses = inputs.propertyTax + inputs.insurance + yearlyMaintenance + yearlyPM + inputs.otherExpenses
      const yearlyNOI = yearlyRent - yearlyExpenses
      const yearlyCashFlow = yearlyNOI - annualDebtService

      totalCashFlow.push(yearlyCashFlow)

      // Calculate principal paid this year
      let principalPaid = 0
      for (let month = 0; month < 12; month++) {
        const interestPayment = remainingBalance * monthlyRate
        const principalPayment = monthlyMortgage - interestPayment
        principalPaid += principalPayment
        remainingBalance -= principalPayment
      }
      
      propertyValue *= (1 + inputs.appreciationRate / 100)
      equityBuildup.push(propertyValue - remainingBalance)

      // Grow rent for next year
      currentRent *= (1 + inputs.rentGrowth / 100)
    }

    // Calculate total return
    const totalCashFlowSum = totalCashFlow.reduce((a, b) => a + b, 0)
    const finalEquity = equityBuildup[equityBuildup.length - 1]
    const totalReturn = ((totalCashFlowSum + finalEquity - downPaymentAmount) / downPaymentAmount) * 100

    // Simple IRR approximation
    const avgAnnualReturn = totalReturn / inputs.holdPeriod
    const irr = avgAnnualReturn * 0.7 // Simplified approximation

    setResults({
      monthlyMortgage,
      annualNOI,
      cashOnCash,
      capRate,
      dscr,
      totalCashFlow,
      equityBuildup,
      totalReturn,
      irr,
    })
    setShowResults(true)
  }

  return (
    <div className="pt-20 min-h-screen bg-citadel-black">
      {/* Header */}
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
            {/* Title */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-citadel-gold/10 mb-6">
                <Calculator className="w-8 h-8 text-citadel-gold" />
              </div>
              <h1 className="font-serif text-3xl md:text-4xl font-semibold text-citadel-cream mb-4">
                Real Estate Deal Analyzer
              </h1>
              <p className="text-citadel-cream/60 max-w-2xl mx-auto">
                Analyze rental property investments with detailed cash flow projections, 
                cap rates, cash-on-cash returns, and multi-year forecasts.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Input Form */}
              <div className="space-y-6">
                {/* Purchase Details */}
                <div className="card">
                  <h3 className="font-serif text-lg font-semibold text-citadel-cream mb-4 flex items-center gap-2">
                    <Building className="w-5 h-5 text-citadel-gold" />
                    Purchase Details
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm text-citadel-cream/70 mb-1">Purchase Price</label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-citadel-cream/50">$</span>
                        <input
                          type="number"
                          value={inputs.purchasePrice}
                          onChange={(e) => handleInputChange('purchasePrice', Number(e.target.value))}
                          className="w-full bg-citadel-slate border border-citadel-border rounded-lg px-8 py-2 text-citadel-cream focus:border-citadel-gold focus:outline-none"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm text-citadel-cream/70 mb-1">Down Payment (%)</label>
                      <input
                        type="number"
                        value={inputs.downPayment}
                        onChange={(e) => handleInputChange('downPayment', Number(e.target.value))}
                        className="w-full bg-citadel-slate border border-citadel-border rounded-lg px-4 py-2 text-citadel-cream focus:border-citadel-gold focus:outline-none"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm text-citadel-cream/70 mb-1">Interest Rate (%)</label>
                        <input
                          type="number"
                          step="0.1"
                          value={inputs.interestRate}
                          onChange={(e) => handleInputChange('interestRate', Number(e.target.value))}
                          className="w-full bg-citadel-slate border border-citadel-border rounded-lg px-4 py-2 text-citadel-cream focus:border-citadel-gold focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-citadel-cream/70 mb-1">Loan Term (years)</label>
                        <input
                          type="number"
                          value={inputs.loanTerm}
                          onChange={(e) => handleInputChange('loanTerm', Number(e.target.value))}
                          className="w-full bg-citadel-slate border border-citadel-border rounded-lg px-4 py-2 text-citadel-cream focus:border-citadel-gold focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Income */}
                <div className="card">
                  <h3 className="font-serif text-lg font-semibold text-citadel-cream mb-4 flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-green-400" />
                    Income
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm text-citadel-cream/70 mb-1">Monthly Gross Rent</label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-citadel-cream/50">$</span>
                        <input
                          type="number"
                          value={inputs.grossRent}
                          onChange={(e) => handleInputChange('grossRent', Number(e.target.value))}
                          className="w-full bg-citadel-slate border border-citadel-border rounded-lg px-8 py-2 text-citadel-cream focus:border-citadel-gold focus:outline-none"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm text-citadel-cream/70 mb-1">Vacancy Rate (%)</label>
                      <input
                        type="number"
                        value={inputs.vacancy}
                        onChange={(e) => handleInputChange('vacancy', Number(e.target.value))}
                        className="w-full bg-citadel-slate border border-citadel-border rounded-lg px-4 py-2 text-citadel-cream focus:border-citadel-gold focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Expenses */}
                <div className="card">
                  <h3 className="font-serif text-lg font-semibold text-citadel-cream mb-4 flex items-center gap-2">
                    <Percent className="w-5 h-5 text-red-400" />
                    Annual Expenses
                  </h3>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm text-citadel-cream/70 mb-1">Property Tax</label>
                        <div className="relative">
                          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-citadel-cream/50">$</span>
                          <input
                            type="number"
                            value={inputs.propertyTax}
                            onChange={(e) => handleInputChange('propertyTax', Number(e.target.value))}
                            className="w-full bg-citadel-slate border border-citadel-border rounded-lg px-8 py-2 text-citadel-cream focus:border-citadel-gold focus:outline-none"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm text-citadel-cream/70 mb-1">Insurance</label>
                        <div className="relative">
                          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-citadel-cream/50">$</span>
                          <input
                            type="number"
                            value={inputs.insurance}
                            onChange={(e) => handleInputChange('insurance', Number(e.target.value))}
                            className="w-full bg-citadel-slate border border-citadel-border rounded-lg px-8 py-2 text-citadel-cream focus:border-citadel-gold focus:outline-none"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm text-citadel-cream/70 mb-1">Maintenance (%)</label>
                        <input
                          type="number"
                          value={inputs.maintenance}
                          onChange={(e) => handleInputChange('maintenance', Number(e.target.value))}
                          className="w-full bg-citadel-slate border border-citadel-border rounded-lg px-4 py-2 text-citadel-cream focus:border-citadel-gold focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-citadel-cream/70 mb-1">Property Mgmt (%)</label>
                        <input
                          type="number"
                          value={inputs.propertyManagement}
                          onChange={(e) => handleInputChange('propertyManagement', Number(e.target.value))}
                          className="w-full bg-citadel-slate border border-citadel-border rounded-lg px-4 py-2 text-citadel-cream focus:border-citadel-gold focus:outline-none"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm text-citadel-cream/70 mb-1">Other Expenses (annual)</label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-citadel-cream/50">$</span>
                        <input
                          type="number"
                          value={inputs.otherExpenses}
                          onChange={(e) => handleInputChange('otherExpenses', Number(e.target.value))}
                          className="w-full bg-citadel-slate border border-citadel-border rounded-lg px-8 py-2 text-citadel-cream focus:border-citadel-gold focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Projections */}
                <div className="card">
                  <h3 className="font-serif text-lg font-semibold text-citadel-cream mb-4 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-citadel-gold" />
                    Projections
                  </h3>
                  <div className="space-y-4">
                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm text-citadel-cream/70 mb-1">Appreciation (%)</label>
                        <input
                          type="number"
                          step="0.5"
                          value={inputs.appreciationRate}
                          onChange={(e) => handleInputChange('appreciationRate', Number(e.target.value))}
                          className="w-full bg-citadel-slate border border-citadel-border rounded-lg px-4 py-2 text-citadel-cream focus:border-citadel-gold focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-citadel-cream/70 mb-1">Rent Growth (%)</label>
                        <input
                          type="number"
                          step="0.5"
                          value={inputs.rentGrowth}
                          onChange={(e) => handleInputChange('rentGrowth', Number(e.target.value))}
                          className="w-full bg-citadel-slate border border-citadel-border rounded-lg px-4 py-2 text-citadel-cream focus:border-citadel-gold focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-citadel-cream/70 mb-1">Hold (years)</label>
                        <input
                          type="number"
                          value={inputs.holdPeriod}
                          onChange={(e) => handleInputChange('holdPeriod', Number(e.target.value))}
                          className="w-full bg-citadel-slate border border-citadel-border rounded-lg px-4 py-2 text-citadel-cream focus:border-citadel-gold focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  onClick={calculateDeal}
                  className="btn-primary w-full"
                >
                  Analyze Deal
                </button>
              </div>

              {/* Results */}
              <div>
                {showResults && results ? (
                  <div className="space-y-6 sticky top-24">
                    {/* Key Metrics */}
                    <div className="card gold-glow">
                      <h3 className="font-serif text-lg font-semibold text-citadel-cream mb-4">
                        Key Metrics
                      </h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-citadel-slate rounded-lg p-4">
                          <div className="text-xs text-citadel-cream/50 uppercase">Cap Rate</div>
                          <div className="font-mono text-2xl text-citadel-gold">{results.capRate.toFixed(2)}%</div>
                        </div>
                        <div className="bg-citadel-slate rounded-lg p-4">
                          <div className="text-xs text-citadel-cream/50 uppercase">Cash on Cash</div>
                          <div className={`font-mono text-2xl ${results.cashOnCash >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                            {results.cashOnCash.toFixed(2)}%
                          </div>
                        </div>
                        <div className="bg-citadel-slate rounded-lg p-4">
                          <div className="text-xs text-citadel-cream/50 uppercase">DSCR</div>
                          <div className={`font-mono text-2xl ${results.dscr >= 1.25 ? 'text-green-400' : results.dscr >= 1 ? 'text-amber-400' : 'text-red-400'}`}>
                            {results.dscr.toFixed(2)}x
                          </div>
                        </div>
                        <div className="bg-citadel-slate rounded-lg p-4">
                          <div className="text-xs text-citadel-cream/50 uppercase">Total Return</div>
                          <div className="font-mono text-2xl text-citadel-gold">{results.totalReturn.toFixed(1)}%</div>
                        </div>
                      </div>
                    </div>

                    {/* Monthly/Annual */}
                    <div className="card">
                      <h3 className="font-serif text-lg font-semibold text-citadel-cream mb-4">
                        Year 1 Summary
                      </h3>
                      <div className="space-y-3 text-sm">
                        <div className="flex justify-between pb-2 border-b border-citadel-border">
                          <span className="text-citadel-cream/70">Monthly Mortgage</span>
                          <span className="font-mono text-citadel-cream">${results.monthlyMortgage.toLocaleString(undefined, {maximumFractionDigits: 0})}</span>
                        </div>
                        <div className="flex justify-between pb-2 border-b border-citadel-border">
                          <span className="text-citadel-cream/70">Annual NOI</span>
                          <span className="font-mono text-citadel-cream">${results.annualNOI.toLocaleString(undefined, {maximumFractionDigits: 0})}</span>
                        </div>
                        <div className="flex justify-between pb-2 border-b border-citadel-border">
                          <span className="text-citadel-cream/70">Annual Debt Service</span>
                          <span className="font-mono text-citadel-cream">${(results.monthlyMortgage * 12).toLocaleString(undefined, {maximumFractionDigits: 0})}</span>
                        </div>
                        <div className="flex justify-between pt-2">
                          <span className="text-citadel-cream font-medium">Year 1 Cash Flow</span>
                          <span className={`font-mono font-medium ${results.totalCashFlow[0] >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                            ${results.totalCashFlow[0].toLocaleString(undefined, {maximumFractionDigits: 0})}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Multi-Year Projection */}
                    <div className="card">
                      <h3 className="font-serif text-lg font-semibold text-citadel-cream mb-4">
                        {inputs.holdPeriod}-Year Projection
                      </h3>
                      <div className="space-y-2">
                        <div className="grid grid-cols-3 text-xs text-citadel-cream/50 pb-2 border-b border-citadel-border">
                          <span>Year</span>
                          <span className="text-right">Cash Flow</span>
                          <span className="text-right">Equity</span>
                        </div>
                        {results.totalCashFlow.map((cf, i) => (
                          <div key={i} className="grid grid-cols-3 text-sm">
                            <span className="text-citadel-cream/70">Year {i + 1}</span>
                            <span className={`text-right font-mono ${cf >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                              ${cf.toLocaleString(undefined, {maximumFractionDigits: 0})}
                            </span>
                            <span className="text-right font-mono text-citadel-gold">
                              ${results.equityBuildup[i].toLocaleString(undefined, {maximumFractionDigits: 0})}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Verdict */}
                    <div className={`card border-l-4 ${
                      results.cashOnCash >= 8 && results.dscr >= 1.25 
                        ? 'border-l-green-500' 
                        : results.cashOnCash >= 4 && results.dscr >= 1.1 
                        ? 'border-l-amber-500' 
                        : 'border-l-red-500'
                    }`}>
                      <h3 className="font-serif text-lg font-semibold text-citadel-cream mb-2">
                        Quick Verdict
                      </h3>
                      <p className="text-sm text-citadel-cream/70">
                        {results.cashOnCash >= 8 && results.dscr >= 1.25 
                          ? 'Strong deal. Good cash flow with healthy debt coverage. Consider proceeding with full due diligence.'
                          : results.cashOnCash >= 4 && results.dscr >= 1.1 
                          ? 'Marginal deal. Returns are acceptable but not exceptional. Look for ways to improve terms or negotiate price.'
                          : 'Weak deal. Cash flow is insufficient or debt coverage is concerning. Pass or significantly renegotiate.'
                        }
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="card text-center py-16">
                    <Calculator className="w-12 h-12 text-citadel-cream/30 mx-auto mb-4" />
                    <p className="text-citadel-cream/50">
                      Enter deal details and click "Analyze Deal" to see results
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Disclaimer */}
            <div className="mt-12 p-4 bg-citadel-charcoal rounded-lg border border-citadel-border">
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-citadel-cream/50 flex-shrink-0 mt-0.5" />
                <p className="text-xs text-citadel-cream/50">
                  This calculator provides estimates for educational purposes only. Actual results 
                  will vary based on market conditions, property-specific factors, and your 
                  individual situation. Always conduct thorough due diligence and consult with 
                  real estate and financial professionals before making investment decisions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

