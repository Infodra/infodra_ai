import { Metadata } from 'next'
import Link from 'next/link'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'About Infodra AI | AI Platforms & Engineering Talent',
  description:
    'Infodra AI is the AI and technology division of Infodra Technologies, delivering intelligent SaaS platforms, AI-powered automation, and engineering talent for modern enterprises.',
  keywords: [
    'about Infodra AI',
    'AI platforms',
    'engineering talent',
    'Infodra Technologies',
    'AI division',
    'SaaS products',
  ],
}

export default function AboutPage() {
  const capabilities = [
    {
      icon: '🤖',
      title: 'AI Platforms & Automation',
      description: 'Building intelligent platforms for video translation, document processing, voice generation, and predictive analytics.',
    },
    {
      icon: '💻',
      title: 'SaaS Product Development',
      description: 'Developing scalable cloud-native SaaS products like BiZlead and StaffTrack for business operations.',
    },
    {
      icon: '👥',
      title: 'AI-ML Engineering Talent',
      description: 'Deploying skilled AI engineers, data scientists, and software developers to enterprise teams worldwide.',
    },
    {
      icon: '⚡',
      title: 'Custom AI Solutions',
      description: 'Designing and delivering tailored AI applications for specific business challenges and industry requirements.',
    },
  ]

  const values = [
    {
      title: 'Engineering Excellence',
      description: 'Every platform we build follows rigorous engineering standards with production-grade architecture and security.',
    },
    {
      title: 'Innovation-Driven',
      description: 'We continuously explore and integrate cutting-edge AI technologies to deliver forward-looking solutions.',
    },
    {
      title: 'Client Partnership',
      description: 'We invest in understanding your business to deliver measurable impact and long-term value.',
    },
    {
      title: 'Transparency & Trust',
      description: 'Open communication, clear delivery timelines, and honest engagement at every stage.',
    },
  ]

  return (
    <main>
      {/* Hero Section */}
      <section className="relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/30 dark:from-gray-900 dark:via-gray-900 dark:to-blue-950/50 pt-24 pb-16">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-[500px] h-[500px] -top-48 -left-48 bg-blue-300 dark:bg-blue-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-15 animate-float"></div>
          <div className="absolute w-[500px] h-[500px] top-1/3 -right-48 bg-indigo-300 dark:bg-indigo-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-15 animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute w-[500px] h-[500px] -bottom-48 left-1/3 bg-blue-400 dark:bg-blue-800 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-15 animate-float" style={{ animationDelay: '4s' }}></div>
        </div>

        <div className="relative max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-[1.4]">
              <span className="block bg-gradient-to-r from-gray-900 via-primary-800 to-accent-800 dark:from-white dark:via-primary-300 dark:to-accent-300 bg-clip-text text-transparent mb-4 pb-2">
                About Infodra AI
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-[750px] mx-auto leading-relaxed">
              Infodra AI is the AI and digital product division of Infodra Technologies — a new-age technology startup led by industry veterans with over 20 years of experience, building intelligent SaaS products, AI-powered automation platforms, and deploying engineering talent for modern enterprises.
            </p>

            <p className="text-sm text-gray-500 dark:text-gray-400 font-normal">
              AI Platforms • SaaS Products • Engineering Talent • Custom Solutions
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Who We Are
            </h2>
          </div>

          <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            <p>
              <strong className="text-gray-900 dark:text-white">Infodra AI</strong> operates as the AI and digital product arm of{' '}
              <a
                href="https://www.infodratech.com/about"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 dark:text-primary-400 hover:underline font-medium"
              >
                Infodra Technologies Pvt Ltd
              </a>
              . Founded by industry veterans whose leadership brings over 20 years of hands-on experience across automotive engineering, software development, AI, and technical recruitment — we combine startup agility with deep domain expertise.
            </p>
            <p>
              We design, build, and deliver AI-powered platforms that help businesses automate workflows, break language barriers, generate leads, manage workforces, and make data-driven decisions. Our product portfolio includes AI Video Translator, AI Document Translator, AI Voice Generation Studio, BiZlead Database, StaffTrack, and AI Prediction/ML platforms.
            </p>
            <p>
              Beyond products, we provide engineering talent deployment — connecting organizations with skilled AI engineers, full-stack developers, data scientists, and DevOps specialists to accelerate their technology initiatives.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              What We Do
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Our core capabilities powering intelligent business transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((cap, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-600 hover:shadow-xl transition-all duration-300"
              >
                <div className="text-5xl mb-4">{cap.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {cap.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {cap.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Mission & Vision */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-950 dark:to-accent-950 rounded-2xl p-10 border border-primary-100 dark:border-primary-800">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Mission</h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                To empower businesses with intelligent AI platforms and skilled engineering talent that drive measurable outcomes — making advanced technology accessible, practical, and impactful.
              </p>
            </div>
            <div className="bg-gradient-to-br from-accent-50 to-primary-50 dark:from-accent-950 dark:to-primary-950 rounded-2xl p-10 border border-accent-100 dark:border-accent-800">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Vision</h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                To become a trusted global technology partner delivering scalable AI-powered platforms, innovative SaaS products, and world-class engineering expertise across industries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Our Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-600 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Parent Company Link */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
            Infodra AI is a division of <strong className="text-gray-900 dark:text-white">Infodra Technologies Pvt Ltd</strong>. Learn more about our parent company, leadership, and full range of engineering and technology services.
          </p>
          <a
            href="https://www.infodratech.com/about"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-gradient-ai text-white rounded-xl font-semibold text-lg hover:opacity-90 transition-all hover:scale-105 shadow-xl shadow-primary-500/20"
          >
            Learn More About Us →
          </a>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-primary-900 to-accent-900 text-white py-20 overflow-hidden mx-4 sm:mx-6 lg:mx-8 my-20 rounded-3xl">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Ready to Work With Us?
          </h2>
          <p className="text-lg md:text-xl text-primary-50 mb-10 max-w-2xl mx-auto leading-relaxed">
            Whether you need AI platforms, SaaS products, or engineering talent — we are ready to help.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="bg-white text-primary-600 px-8 py-3.5 rounded-lg font-semibold text-lg hover:bg-primary-50 hover:shadow-2xl active:shadow-lg transition-all duration-200 shadow-lg inline-block"
            >
              Contact Us
            </Link>
            <a
              href="https://wa.me/918148146785"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-3.5 rounded-lg font-semibold text-lg hover:bg-primary-400 hover:border-white active:bg-primary-600 transition-all duration-200 inline-block"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
