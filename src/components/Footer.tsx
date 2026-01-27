import Link from 'next/link'
import { Mail, Linkedin, Twitter } from 'lucide-react'

const footerLinks = {
  sectors: [
    { label: 'Rare Metals', href: '/metals' },
    { label: 'Collectibles', href: '/collectibles' },
    { label: 'Dubai Real Estate', href: '/real-estate/dubai' },
    { label: 'Fine Art', href: '/art' },
    { label: 'Litigation Finance', href: '/litigation' },
    { label: 'Business Acquisitions', href: '/acquisitions' },
  ],
  global: [
    { label: 'International Transfers', href: '/global/transfers' },
    { label: 'HSBC Expat', href: '/global/hsbc-expat' },
    { label: 'Store Funds Abroad', href: '/global/offshore' },
  ],
  company: [
    { label: 'About', href: '/about' },
    { label: 'Research', href: '/research' },
    { label: 'Newsletter', href: '/newsletter' },
    { label: 'Contact', href: '/contact' },
    { label: 'Book a Call', href: '/call' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Disclosures', href: '/disclosures' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-citadel-black border-t border-citadel-border">
      {/* Main Footer */}
      <div className="container-custom py-10 sm:py-16">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 sm:gap-3 mb-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10">
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
                    className="text-citadel-gold/20"
                  />
                  <path 
                    d="M20 14L25 17V23L20 26L15 23V17L20 14Z" 
                    fill="currentColor"
                    className="text-citadel-gold"
                  />
                </svg>
              </div>
              <span className="font-serif text-lg sm:text-xl font-semibold">
                <span className="text-citadel-cream">Alternative</span>
                <span className="text-citadel-gold"> Allocation</span>
              </span>
            </Link>
            <p className="text-sm text-citadel-cream/60 mb-6 max-w-xs">
              Your guide to alternative investments. Free research, 
              expert guidance, and vetted partners across six sectors. 
              No account required.
            </p>
            
            {/* Newsletter */}
            <div className="mb-6">
              <p className="text-sm font-medium text-citadel-cream mb-2">
                Weekly Newsletter
              </p>
              <form className="flex flex-col xs:flex-row gap-2">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 bg-citadel-slate border border-citadel-border rounded-lg px-3 py-2.5 text-sm text-citadel-cream focus:outline-none focus:border-citadel-gold min-h-[44px]"
                />
                <button type="submit" className="btn-primary py-2.5 px-4 text-sm whitespace-nowrap">
                  Subscribe
                </button>
              </form>
            </div>

            {/* Social */}
            <div className="flex gap-4">
              <a href="#" className="text-citadel-cream/50 hover:text-citadel-gold transition-colors p-2 -m-2">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-citadel-cream/50 hover:text-citadel-gold transition-colors p-2 -m-2">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-citadel-cream/50 hover:text-citadel-gold transition-colors p-2 -m-2">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-medium text-citadel-cream mb-3 sm:mb-4 text-sm sm:text-base">Sectors</h4>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.sectors.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-xs sm:text-sm text-citadel-cream/60 hover:text-citadel-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-citadel-cream mb-3 sm:mb-4 text-sm sm:text-base">Global</h4>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.global.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-xs sm:text-sm text-citadel-cream/60 hover:text-citadel-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-citadel-cream mb-3 sm:mb-4 text-sm sm:text-base">Company</h4>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-xs sm:text-sm text-citadel-cream/60 hover:text-citadel-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-citadel-cream mb-3 sm:mb-4 text-sm sm:text-base">Legal</h4>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-xs sm:text-sm text-citadel-cream/60 hover:text-citadel-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-citadel-border">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-citadel-cream/40">
              © {new Date().getFullYear()} Alternative Allocation. All rights reserved.
            </p>
            <p className="text-xs text-citadel-cream/30 max-w-xl text-center md:text-right">
              This site is for educational purposes only. Nothing on this site constitutes 
              investment, tax, or legal advice. Consult qualified professionals before 
              making financial decisions.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
