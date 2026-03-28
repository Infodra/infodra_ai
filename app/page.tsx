import { HeroSection } from '@/components/HeroSection'
import { SolutionsSection } from '@/components/SolutionsSection'
import { IndustriesSection } from '@/components/IndustriesSection'
import { TechnologyExpertise } from '@/components/TechnologyExpertise'
import { WhyInfodra } from '@/components/WhyInfodra'
import { CTASection } from '@/components/CTASection'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <>
      <HeroSection />
      <SolutionsSection />
      <TechnologyExpertise />
      <IndustriesSection />
      <WhyInfodra />
      <CTASection />
      <Footer />
    </>
  )
}
