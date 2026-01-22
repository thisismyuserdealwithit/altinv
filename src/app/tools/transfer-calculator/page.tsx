'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Globe, DollarSign, Info, Check } from 'lucide-react'

interface Provider {
  name: string
  fee: number
  feeType: 'flat' | 'percent'
  exchangeRateMarkup: number
  speed: string
  minAmount: number
  maxAmount: number
  features: string[]
}

const providers: Provider[] = [
  {
    name: 'Wise (TransferWise)',
    fee: 0.5,
    feeType: 'percent',
    exchangeRateMarkup: 0,
    speed: '1-2 business days',
    minAmount: 1,
    maxAmount: 1000000,
    features: ['Mid-market rate', 'Multi-currency account', 'Debit card available'],
  },
  {
    name: 'OFX',
    fee: 0,
    feeType: 'flat',
    exchangeRateMarkup: 0.5,
    speed: '1-3 business days',
    minAmount: 1000,
    maxAmount: 5000000,
    features: ['No transfer fees', 'Dedicated dealer', 'Forward contracts'],
  },
  {
    name: 'XE',
    fee: 0,
    feeType: 'flat',
    exchangeRateMarkup: 0.8,
    speed: '1-4 business days',
    minAmount: 1,
    maxAmount: 500000,
    features: ['No transfer fees', 'Rate alerts', 'Mobile app'],
  },
  {
    name: 'PayPal/Xoom',
    fee: 4.99,
    feeType: 'flat',
    exchangeRateMarkup: 3.0,
    speed: 'Minutes to 3 days',
    minAmount: 1,
    maxAmount: 50000,
    features: ['Fast for small amounts', 'Cash pickup option', 'Mobile payments'],
  },
  {
    name: 'Western Union',
    fee: 10,
    feeType: 'flat',
    exchangeRateMarkup: 3.5,
    speed: 'Minutes to 5 days',
    minAmount: 1,
    maxAmount: 50000,
    features: ['Cash pickup', 'Extensive network', 'Mobile app'],
  },
  {
    name: 'Bank Wire (typical)',
    fee: 45,
    feeType: 'flat',
    exchangeRateMarkup: 3.0,
    speed: '3-5 business days',
    minAmount: 1,
    maxAmount: 10000000,
    features: ['Familiar', 'High limits', 'SWIFT network'],
  },
]

const currencies = [
  { code: 'USD', name: 'US Dollar', rate: 1 },
  { code: 'EUR', name: 'Euro', rate: 0.92 },
  { code: 'GBP', name: 'British Pound', rate: 0.79 },
  { code: 'CAD', name: 'Canadian Dollar', rate: 1.36 },
  { code: 'AUD', name: 'Australian Dollar', rate: 1.53 },
  { code: 'CHF', name: 'Swiss Franc', rate: 0.88 },
  { code: 'JPY', name: 'Japanese Yen', rate: 149.50 },
  { code: 'SGD', name: 'Singapore Dollar', rate: 1.34 },
  { code: 'HKD', name: 'Hong Kong Dollar', rate: 7.82 },
  { code: 'MXN', name: 'Mexican Peso', rate: 17.15 },
]

export default function TransferCalculatorPage() {
  const [amount, setAmount] = useState(10000)
  const [fromCurrency, setFromCurrency] = useState('USD')
  const [toCurrency, setToCurrency] = useState('EUR')
  const [showResults, setShowResults] = useState(false)

  const fromRate = currencies.find(c => c.code === fromCurrency)?.rate || 1
  const toRate = currencies.find(c => c.code === toCurrency)?.rate || 1
  const midMarketRate = toRate / fromRate

  const calculateProviderResult = (provider: Provider) => {
    if (amount < provider.minAmount || amount > provider.maxAmount) {
      return null
    }

    const fee = provider.feeType === 'flat' ? provider.fee : amount * (provider.fee / 100)
    const amountAfterFee = amount - fee
    const effectiveRate = midMarketRate * (1 - provider.exchangeRateMarkup / 100)
    const receivedAmount = amountAfterFee * effectiveRate
    const totalCost = amount - (receivedAmount / midMarketRate)
    const costPercent = (totalCost / amount) * 100

    return {
      provider,
      fee,
      effectiveRate,
      receivedAmount,
      totalCost,
      costPercent,
    }
  }

  const results = providers
    .map(calculateProviderResult)
    .filter(r => r !== null)
    .sort((a, b) => b!.receivedAmount - a!.receivedAmount)

  const handleCompare = () => {
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
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-citadel-blue/10 mb-6">
                <Globe className="w-8 h-8 text-citadel-blue" />
              </div>
              <h1 className="font-serif text-3xl md:text-4xl font-semibold text-citadel-cream mb-4">
                Global Transfer Analyzer
              </h1>
              <p className="text-citadel-cream/60 max-w-2xl mx-auto">
                Compare international money transfer providers to find the best rates and lowest fees. 
                See exactly how much arrives at the destination.
              </p>
            </div>

            {/* Input Form */}
            <div className="card mb-8">
              <div className="grid md:grid-cols-3 gap-6 items-end">
                <div>
                  <label className="block text-sm text-citadel-cream/70 mb-2">You Send</label>
                  <div className="flex gap-2">
                    <div className="relative flex-1">
                      <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(Number(e.target.value))}
                        className="w-full bg-citadel-slate border border-citadel-border rounded-lg px-4 py-3 text-citadel-cream text-lg focus:border-citadel-gold focus:outline-none"
                      />
                    </div>
                    <select
                      value={fromCurrency}
                      onChange={(e) => setFromCurrency(e.target.value)}
                      className="bg-citadel-slate border border-citadel-border rounded-lg px-4 py-3 text-citadel-cream focus:border-citadel-gold focus:outline-none"
                    >
                      {currencies.map(c => (
                        <option key={c.code} value={c.code}>{c.code}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-citadel-slate flex items-center justify-center">
                    <ArrowRight className="w-5 h-5 text-citadel-gold" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-citadel-cream/70 mb-2">They Receive</label>
                  <div className="flex gap-2">
                    <div className="relative flex-1">
                      <input
                        type="text"
                        value={(amount * midMarketRate).toLocaleString(undefined, {maximumFractionDigits: 2})}
                        disabled
                        className="w-full bg-citadel-slate/50 border border-citadel-border rounded-lg px-4 py-3 text-citadel-cream/50 text-lg"
                      />
                    </div>
                    <select
                      value={toCurrency}
                      onChange={(e) => setToCurrency(e.target.value)}
                      className="bg-citadel-slate border border-citadel-border rounded-lg px-4 py-3 text-citadel-cream focus:border-citadel-gold focus:outline-none"
                    >
                      {currencies.map(c => (
                        <option key={c.code} value={c.code}>{c.code}</option>
                      ))}
                    </select>
                  </div>
                  <p className="text-xs text-citadel-cream/50 mt-1">
                    Mid-market rate: 1 {fromCurrency} = {midMarketRate.toFixed(4)} {toCurrency}
                  </p>
                </div>
              </div>

              <button
                onClick={handleCompare}
                className="btn-primary w-full mt-6"
              >
                Compare Providers
              </button>
            </div>

            {/* Results */}
            {showResults && (
              <div className="space-y-4">
                <h2 className="font-serif text-xl font-semibold text-citadel-cream">
                  Provider Comparison
                </h2>
                <p className="text-sm text-citadel-cream/60 mb-6">
                  Sorted by amount received (best first)
                </p>

                {results.map((result, index) => (
                  <div 
                    key={result!.provider.name} 
                    className={`card ${index === 0 ? 'gold-glow border-citadel-gold/30' : ''}`}
                  >
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3">
                          {index === 0 && (
                            <span className="text-xs px-2 py-0.5 bg-green-500/20 text-green-400 rounded">
                              Best Rate
                            </span>
                          )}
                          <h3 className="font-serif text-lg font-semibold text-citadel-cream">
                            {result!.provider.name}
                          </h3>
                        </div>
                        <p className="text-sm text-citadel-cream/50 mt-1">
                          {result!.provider.speed}
                        </p>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {result!.provider.features.map(feature => (
                            <span key={feature} className="text-xs text-citadel-cream/50 flex items-center gap-1">
                              <Check className="w-3 h-3 text-green-400" />
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-4 md:gap-8 text-center md:text-right">
                        <div>
                          <div className="text-xs text-citadel-cream/50 uppercase">Fee</div>
                          <div className="font-mono text-citadel-cream">
                            {result!.fee > 0 ? `$${result!.fee.toFixed(2)}` : 'Free'}
                          </div>
                        </div>
                        <div>
                          <div className="text-xs text-citadel-cream/50 uppercase">Rate</div>
                          <div className="font-mono text-citadel-cream">
                            {result!.effectiveRate.toFixed(4)}
                          </div>
                        </div>
                        <div>
                          <div className="text-xs text-citadel-cream/50 uppercase">They Get</div>
                          <div className="font-mono text-lg text-green-400">
                            {result!.receivedAmount.toLocaleString(undefined, {maximumFractionDigits: 2})} {toCurrency}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Cost comparison to best */}
                    {index > 0 && (
                      <div className="mt-4 pt-4 border-t border-citadel-border">
                        <p className="text-sm text-red-400">
                          Costs {(result!.totalCost - results[0]!.totalCost).toLocaleString(undefined, {maximumFractionDigits: 2})} {fromCurrency} more than {results[0]!.provider.name}
                        </p>
                      </div>
                    )}
                  </div>
                ))}

                {/* Savings Summary */}
                {results.length > 1 && (
                  <div className="card bg-green-500/10 border-green-500/20">
                    <div className="flex items-center gap-4">
                      <DollarSign className="w-8 h-8 text-green-400" />
                      <div>
                        <h3 className="font-serif text-lg font-semibold text-citadel-cream">
                          Potential Savings
                        </h3>
                        <p className="text-citadel-cream/70">
                          Using {results[0]!.provider.name} instead of a typical bank wire saves you{' '}
                          <span className="text-green-400 font-mono font-semibold">
                            ${(results[results.length - 1]!.totalCost - results[0]!.totalCost).toLocaleString(undefined, {maximumFractionDigits: 2})}
                          </span>
                          {' '}on this transfer.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* HSBC Expat CTA */}
            <div className="mt-12 card bg-citadel-charcoal">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="flex-1">
                  <h3 className="font-serif text-xl font-semibold text-citadel-cream mb-2">
                    Need Regular International Transfers?
                  </h3>
                  <p className="text-citadel-cream/60">
                    HSBC Expat offers multi-currency accounts with competitive FX rates 
                    and low transfer fees for frequent international transfers.
                  </p>
                </div>
                <Link href="/global/hsbc-expat" className="btn-primary whitespace-nowrap">
                  Learn About HSBC Expat
                </Link>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="mt-8 p-4 bg-citadel-charcoal rounded-lg border border-citadel-border">
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-citadel-cream/50 flex-shrink-0 mt-0.5" />
                <p className="text-xs text-citadel-cream/50">
                  Exchange rates and fees shown are estimates based on typical rates and may vary. 
                  Actual rates are determined at the time of transfer. Always check current rates 
                  directly with providers before sending money. Some providers may have additional 
                  fees or requirements not shown here.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
