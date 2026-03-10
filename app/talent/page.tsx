import { Metadata } from 'next'
import { EngineeringTalentSection } from '@/components/EngineeringTalentSection'
import { TalentSolutions } from '@/components/TalentSolutions'
import { HowItWorks } from '@/components/HowItWorks'
import { EngagementModels } from '@/components/EngagementModels'
import { CTASection } from '@/components/CTASection'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Engineering Talent Solutions | Infodra AI',
  description:
    'Access world-class engineering talent for your AI and software development projects. Hire dedicated developers, build remote teams, and scale your engineering capacity.',
  keywords: [
    'engineering talent',
    'hire developers',
    'remote engineers',
    'software development',
    'AI engineers',
    'dedicated teams',
    'staff augmentation'
  ],
}

export default function TalentPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-emerald-50/30 to-teal-50/30 dark:from-gray-900 dark:via-gray-900 dark:to-emerald-950/50 pt-24 pb-16">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-[500px] h-[500px] -top-48 -left-48 bg-emerald-300 dark:bg-emerald-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-15 animate-float"></div>
          <div className="absolute w-[500px] h-[500px] top-1/3 -right-48 bg-teal-300 dark:bg-teal-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-15 animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute w-[500px] h-[500px] -bottom-48 left-1/3 bg-emerald-400 dark:bg-emerald-800 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-15 animate-float" style={{ animationDelay: '4s' }}></div>
        </div>

        {/* Content */}
        <div className="relative max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            {/* Title */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-[1.4]">
              <span className="block bg-gradient-to-r from-gray-900 via-primary-800 to-accent-800 dark:from-white dark:via-primary-300 dark:to-accent-300 bg-clip-text text-transparent mb-4 pb-2">
                World-Class Engineering
              </span>
              <span className="block bg-gradient-to-r from-gray-900 via-primary-800 to-accent-800 dark:from-white dark:via-primary-300 dark:to-accent-300 bg-clip-text text-transparent pb-2">
                Talent On Demand
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-[700px] mx-auto leading-relaxed">
              Access elite software engineers, AI specialists, and technical experts to build, scale, and innovate faster.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
              <a
                href="#talent"
                className="group w-full sm:w-auto px-10 py-4 bg-gradient-ai text-white rounded-xl font-semibold text-lg hover:opacity-90 transition-all hover:scale-105 flex items-center justify-center space-x-2 shadow-xl shadow-primary-500/20"
              >
                <span>Explore Talent Solutions</span>
              </a>
              <a
                href="/contact"
                className="w-full sm:w-auto px-10 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-xl font-semibold text-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all border-2 border-gray-200 dark:border-gray-700 hover:scale-105 shadow-lg"
              >
                Hire Engineers
              </a>
            </div>

            {/* Trust Indicator */}
            <p className="text-sm text-gray-500 dark:text-gray-400 font-normal">
              AI Engineers • Full-Stack Developers • DevOps • Data Engineers • CAD Engineers
            </p>
          </div>
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

      {/* CTA Section */}
      <CTASection />
      <Footer />
    </main>
  )
}
