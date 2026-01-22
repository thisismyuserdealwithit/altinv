# Alt-Wealth Citadel

A premium alternative investing platform built with Next.js 14, TypeScript, and Tailwind CSS.

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
citadel-site/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── globals.css         # Global styles & Tailwind
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Homepage
│   │   └── metals/             # Metals section
│   │       └── page.tsx
│   └── components/
│       ├── Navigation.tsx      # Header navigation
│       ├── Footer.tsx          # Footer with newsletter
│       └── sections/           # Page section components
│           ├── HeroSection.tsx
│           ├── TrustBar.tsx
│           ├── StackSection.tsx
│           ├── CalculatorSection.tsx
│           ├── FeaturedSection.tsx
│           ├── ToolsSection.tsx
│           ├── HowItWorks.tsx
│           ├── ResearchSection.tsx
│           ├── MembershipSection.tsx
│           └── AdvisorCTA.tsx
├── package.json
├── tailwind.config.ts          # Tailwind configuration
├── tsconfig.json               # TypeScript configuration
└── README.md
```

## Design System

### Colors

```css
/* Primary */
--citadel-black: #0A0A0A
--citadel-charcoal: #141414
--citadel-gold: #C9A962
--citadel-cream: #F5F1E6

/* Pillar Accents */
--pillar-defense: #B87333 (Copper)
--pillar-liquidity: #2A9D8F (Teal)
--pillar-yield: #264653 (Emerald)
--pillar-structure: #1D3557 (Navy)
```

### Typography

- **Headings**: Cormorant Garamond (serif)
- **Body**: Inter (sans-serif)
- **Mono/Data**: JetBrains Mono

### Components

- `btn-primary`: Gold background, black text
- `btn-secondary`: Gold border, transparent background
- `btn-ghost`: No background, hover underline
- `card`: Charcoal background with border
- `card-elevated`: Card with hover lift effect
- `input-field`: Styled form input

## Features

### Homepage Sections

1. **Hero**: Value proposition with animated background
2. **Trust Bar**: Partner logos
3. **Sovereign Stack**: Four investment pillars
4. **Calculator**: Interactive allocation tool with SVG pie chart
5. **Featured**: Current opportunities
6. **Tools**: Tool previews
7. **How It Works**: 4-step process
8. **Research**: Latest guides
9. **Membership**: Pricing tiers
10. **Advisor CTA**: Match with specialists

### Interactive Elements

- **Allocation Calculator**: Real-time pie chart based on user inputs
- **Mobile Navigation**: Hamburger menu with dropdowns
- **Scroll Animations**: Framer Motion reveal effects
- **Dynamic Pie Chart**: SVG segments calculated from allocation

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Google Fonts (self-hosted recommended for production)

## Extending the Site

### Adding a New Page

1. Create folder in `src/app/[page-name]/`
2. Add `page.tsx` with metadata export
3. Import and use section components

### Adding a New Section

1. Create component in `src/components/sections/`
2. Import in page file
3. Add to page JSX

### Customizing Colors

Edit `tailwind.config.ts` under `theme.extend.colors.citadel`

## Production Checklist

- [ ] Replace placeholder images with actual product photography
- [ ] Connect form submissions to email service
- [ ] Add analytics (GA4, Mixpanel)
- [ ] Configure meta images for social sharing
- [ ] Set up proper domain and SSL
- [ ] Add proper legal pages (Terms, Privacy, Disclosures)
- [ ] Connect to CMS for content management
- [ ] Add authentication for member areas
- [ ] Connect payment processing (Stripe)

## License

Proprietary. All rights reserved.

