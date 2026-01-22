import { HeroSection } from '@/components/sections/HeroSection'
import { TrustBar } from '@/components/sections/TrustBar'
import { StackSection } from '@/components/sections/StackSection'
import { CalculatorSection } from '@/components/sections/CalculatorSection'
import { FeaturedSection } from '@/components/sections/FeaturedSection'
import { ToolsSection } from '@/components/sections/ToolsSection'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { ResearchSection } from '@/components/sections/ResearchSection'
import { MembershipSection } from '@/components/sections/MembershipSection'
import { AdvisorCTA } from '@/components/sections/AdvisorCTA'

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <StackSection />
      <CalculatorSection />
      <FeaturedSection />
      <ToolsSection />
      <HowItWorks />
      <ResearchSection />
      <MembershipSection />
      <AdvisorCTA />
    </>
  )
}

