import { Metadata } from 'next'
import Link from 'next/link'
import { EngineeringTalentSection } from '@/components/EngineeringTalentSection'
import { TalentSolutions } from '@/components/TalentSolutions'
import { HowItWorks } from '@/components/HowItWorks'
import { EngagementModels } from '@/components/EngagementModels'
import { NotJustTalent } from '@/components/NotJustTalent'
import { CTASection } from '@/components/CTASection'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'AI Experts for Manufacturing & Engineering | Infodra AI',
  description:
    'Practical AI experts for inspection, predictive maintenance, engineering automation and business operations — aligned to manufacturing and engineering workflows.',
  keywords: [
    'AI experts manufacturing',
    'computer vision engineers',
    'predictive maintenance specialists',
    'CAD automation engineers',
    'industrial AI talent',
    'engineering automation experts'
  ],
}

export default function TalentPage() {
  return (
    <main>
      {/* Hero Section */}
      <section
        className="relative overflow-hidden pt-32 pb-24 bg-cover bg-center"
        style={{ backgroundImage: "url('/talent-hero.png')" }}
      >
        {/* Dark overlay for legibility */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-950/85 via-primary-900/75 to-primary-800/70" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary-200 mb-4">
            AI Talent for Industry
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white">
            AI Experts for
            <br />
            Manufacturing &amp; Engineering
          </h1>
          <p className="mt-6 text-lg md:text-xl text-primary-100 max-w-3xl mx-auto leading-relaxed">
            Practical AI specialists for inspection, production monitoring, predictive maintenance and engineering automation — aligned to how manufacturing and engineering teams actually work.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-3.5 rounded-lg bg-white text-primary-900 font-semibold hover:bg-primary-50 transition-colors shadow-lg"
            >
              Talk to an Expert
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3.5 rounded-lg bg-white/10 backdrop-blur text-white font-semibold border-2 border-white/30 hover:bg-white/20 transition-all"
            >
              Request a Demo
            </Link>
          </div>
          <p className="mt-8 text-sm text-primary-200/80">
            Computer Vision • Predictive Maintenance • OEE Analytics • CAD Automation • BOM Extraction • AI Assistants
          </p>
        </div>
      </section>

      {/* Engineering Talent Section */}
      <EngineeringTalentSection />

      {/* Talent Solutions */}
      <TalentSolutions />

      {/* How It Works */}
      <HowItWorks />

      {/* Engagement Models */}
      <EngagementModels />

      {/* Differentiation */}
      <NotJustTalent />

      {/* CTA Section */}
      <CTASection />
      <Footer />
    </main>
  )
}
