import { HeroSection } from '@/components/HeroSection'
import { IndustriesSection } from '@/components/IndustriesSection'
import { TechnologyExpertise } from '@/components/TechnologyExpertise'
import { WhyInfodra } from '@/components/WhyInfodra'
import { CTASection } from '@/components/CTASection'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <>
      <HeroSection />
      <TechnologyExpertise />
      <IndustriesSection />
      <WhyInfodra />
      <CTASection />
      <Footer />
    </>
  )
}
