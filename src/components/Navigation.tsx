'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown, Phone } from 'lucide-react'
import { TalkToExpertButton } from './TalkToExpertButton'

const navItems = [
  {
    label: 'Sectors',
    href: '#sectors',
    children: [
      { label: 'Rare Metals', href: '/metals', description: 'Gallium, germanium, rare earths' },
      { label: 'Collectibles', href: '/collectibles', description: 'Wine, watches, memorabilia' },
      { label: 'Dubai Real Estate', href: '/real-estate/dubai', description: 'Tax free property investment' },
      { label: 'Fine Art', href: '/art', description: 'Blue chip art investments' },
      { label: 'Litigation Finance', href: '/litigation', description: 'Legal case investments' },
      { label: 'Business Acquisitions', href: '/acquisitions', description: 'Main street M&A' },
    ]
  },
  { 
    label: 'Tools', 
    href: '/tools',
    children: [
      { label: 'Allocation Calculator', href: '/tools/allocation-calculator', description: 'Find your ideal allocation' },
      { label: 'Transfer Calculator', href: '/tools/transfer-calculator', description: 'Compare international transfers' },
    ]
  },
  {
    label: 'Global',
    href: '/global',
    children: [
      { label: 'International Transfers', href: '/global/transfers', description: 'Move money worldwide' },
      { label: 'HSBC Expat', href: '/global/hsbc-expat', description: 'Offshore banking' },
      { label: 'Store Funds Abroad', href: '/global/offshore', description: 'Diversify internationally' },
    ]
  },
  { label: 'Research', href: '/research' },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-citadel-black/95 backdrop-blur-md border-b border-citadel-border' 
          : 'bg-citadel-black/50 backdrop-blur-sm'
      }`}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3 group">
            <div className="w-8 h-8 sm:w-10 sm:h-10 relative">
              <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
                <path 
                  d="M20 2L37 12V28L20 38L3 28V12L20 2Z" 
                  stroke="currentColor" 
                  strokeWidth="1.5"
                  className="text-citadel-gold"
                />
                <path 
                  d="M20 8L31 14.5V25.5L20 32L9 25.5V14.5L20 8Z" 
                  fill="currentColor"
                  className="text-citadel-gold/20 group-hover:text-citadel-gold/40 transition-colors"
                />
                <path 
                  d="M20 14L25 17V23L20 26L15 23V17L20 14Z" 
                  fill="currentColor"
                  className="text-citadel-gold"
                />
              </svg>
            </div>
            <span className="font-serif text-base sm:text-xl font-semibold tracking-tight">
              <span className="text-citadel-cream hidden xs:inline">Alternative</span>
              <span className="text-citadel-cream xs:hidden">Alt</span>
              <span className="text-citadel-gold"> Allocation</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div 
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-citadel-cream/80 hover:text-citadel-gold transition-colors"
                >
                  {item.label}
                  {item.children && <ChevronDown className="w-4 h-4" />}
                </Link>
                
                {item.children && openDropdown === item.label && (
                  <div className="absolute top-full left-0 pt-2 animate-fade-in">
                    <div className="bg-citadel-charcoal border border-citadel-border rounded-xl p-2 min-w-[280px] shadow-xl shadow-black/50">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block px-4 py-3 rounded-lg hover:bg-citadel-slate transition-colors group"
                        >
                          <span className="block text-sm font-medium text-citadel-cream group-hover:text-citadel-gold transition-colors">
                            {child.label}
                          </span>
                          <span className="block text-xs text-citadel-cream/50 mt-0.5">
                            {child.description}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <Link href="/about" className="btn-ghost">
              About
            </Link>
            <TalkToExpertButton variant="primary" />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="lg:hidden p-2 text-citadel-cream"
          >
            {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileOpen && (
          <div className="lg:hidden py-4 border-t border-citadel-gold/20 animate-fade-in bg-citadel-black/98 backdrop-blur-xl max-h-[calc(100vh-4rem)] overflow-y-auto">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <div key={item.label}>
                  <Link
                    href={item.href}
                    className="block px-4 py-3 text-citadel-cream hover:text-citadel-gold hover:bg-citadel-slate/50 rounded-lg transition-all font-medium"
                    onClick={() => setIsMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="pl-4 ml-4 border-l-2 border-citadel-gold/20 space-y-1 mb-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-citadel-cream/70 hover:text-citadel-gold hover:bg-citadel-slate/30 rounded-lg transition-all"
                          onClick={() => setIsMobileOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="flex flex-col gap-3 mt-4 pt-4 px-4 border-t border-citadel-border">
                <Link href="/about" className="btn-secondary w-full text-center justify-center">
                  About
                </Link>
                <TalkToExpertButton variant="primary" className="w-full text-center justify-center" />
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
