const stats = [
  { value: '$100K+', label: 'Minimum Portfolio' },
  { value: '$749B', label: 'Addressable Market' },
  { value: '22', label: 'Vetted Partners' },
  { value: '6', label: 'Investment Sectors' },
]

export function TrustBar() {
  return (
    <section className="py-8 bg-citadel-charcoal border-y border-citadel-border">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-mono text-2xl md:text-3xl text-citadel-gold mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-citadel-cream/60">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
