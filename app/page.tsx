import { HeroSection } from '@/components/HeroSection'
import { EngineeringTalentSection } from '@/components/EngineeringTalentSection'
import { TalentSolutions } from '@/components/TalentSolutions'
import { HowItWorks } from '@/components/HowItWorks'
import { IndustriesSection } from '@/components/IndustriesSection'
import { TechnologyExpertise } from '@/components/TechnologyExpertise'
import { EngagementModels } from '@/components/EngagementModels'
import { ProductsSection } from '@/components/ProductsSection'
import { WhyInfodra } from '@/components/WhyInfodra'
import { CTASection } from '@/components/CTASection'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <>
      <HeroSection />
      <EngineeringTalentSection />
      <TalentSolutions />
      <HowItWorks />
      <IndustriesSection />
      <TechnologyExpertise />
      <EngagementModels />
      <WhyInfodra />
      <ProductsSection />
      <CTASection />
      <Footer />
    </>
  )
}
