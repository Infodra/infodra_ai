import { Metadata } from 'next'
import Link from 'next/link'
import { Brain, Code, Cloud, Users, Sparkles, Wrench } from 'lucide-react'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'AI & Engineering Solutions | Infodra AI',
  description:
    'Build intelligent systems, automate workflows, and scale engineering capacity through AI-powered platforms and expert technical talent.',
  keywords: [
    'AI solutions',
    'engineering solutions',
    'custom AI development',
    'SaaS development',
    'team augmentation',
    'digital transformation'
  ],
}

export default function SolutionsPage() {
  const solutions = [
    {
      icon: '🤖',
      title: 'AI Automation Solutions',
      description: 'Automate business operations using intelligent AI systems that streamline workflows, analyze data, and improve operational efficiency.',
      examples: [
        'AI document processing',
        'Workflow automation',
        'Intelligent reporting systems',
        'Content generation tools'
      ]
    },
    {
      icon: '⚡',
      title: 'Custom AI Application Development',
      description: 'Design and build tailored AI-powered applications that solve complex business challenges and enable data-driven decision making.',
      examples: [
        'Predictive analytics platforms',
        'AI-powered chat systems',
        'Recommendation engines',
        'Computer vision solutions'
      ]
    },
    {
      icon: '☁️',
      title: 'SaaS Platform Development',
      description: 'Develop scalable SaaS platforms using modern cloud infrastructure and secure multi-tenant architectures designed for enterprise use.',
      examples: [
        'Cloud-native SaaS applications',
        'Subscription platforms',
        'Enterprise automation tools',
        'Scalable web platforms'
      ]
    },
    {
      icon: '👥',
      title: 'Engineering Team Augmentation',
      description: 'Scale your development capabilities quickly with experienced engineers across AI, software development, cloud infrastructure, and data engineering.',
      examples: [
        'AI engineers',
        'Full-stack developers',
        'DevOps engineers',
        'Data engineers',
        'CAD engineers'
      ]
    },
    {
      icon: '🚀',
      title: 'Digital Transformation Solutions',
      description: 'Modernize legacy systems and integrate intelligent technologies to improve productivity, automation, and operational visibility.',
      examples: [
        'Cloud migration',
        'System modernization',
        'Workflow automation',
        'Enterprise software integration'
      ]
    }
  ]

  const industries = [
    {
      name: 'Technology',
      description: 'Accelerate product development with AI-powered tools and scalable engineering teams'
    },
    {
      name: 'Manufacturing',
      description: 'Optimize operations with predictive maintenance and intelligent automation systems'
    },
    {
      name: 'Automotive',
      description: 'Drive innovation with AI engineering solutions for smart mobility and connected vehicles'
    },
    {
      name: 'Financial Services',
      description: 'Build secure, compliant platforms with advanced data analytics and automation'
    },
    {
      name: 'Healthcare',
      description: 'Enable better patient outcomes with intelligent healthcare platforms and data systems'
    },
    {
      name: 'Retail',
      description: 'Enhance customer experience through AI-powered recommendations and automation'
    }
  ]

  const technologies = [
    { name: 'Artificial Intelligence', icon: '🧠' },
    { name: 'Machine Learning', icon: '🤖' },
    { name: 'Cloud Platforms', icon: '☁️' },
    { name: 'Data Engineering', icon: '📊' },
    { name: 'Workflow Automation', icon: '⚙️' },
    { name: 'Enterprise Software Development', icon: '💻' }
  ]

  const engagementModels = [
    {
      title: 'Dedicated Engineering Teams',
      description: 'Build a fully dedicated team of engineers aligned to your project goals and timeline'
    },
    {
      title: 'Project-Based Development',
      description: 'Fixed-scope engagements for specific AI platforms or software development projects'
    },
    {
      title: 'Technical Consulting',
      description: 'Expert guidance on AI strategy, architecture design, and technology selection'
    },
    {
      title: 'Long-Term Engineering Support',
      description: 'Ongoing technical support and feature development for your platforms'
    }
  ]

  return (
    <main>
      {/* Hero Section */}
      <section className="relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-orange-50/30 to-amber-50/30 dark:from-gray-900 dark:via-gray-900 dark:to-orange-950/50 pt-24 pb-16">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-[500px] h-[500px] -top-48 -left-48 bg-orange-300 dark:bg-orange-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-15 animate-float"></div>
          <div className="absolute w-[500px] h-[500px] top-1/3 -right-48 bg-amber-300 dark:bg-amber-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-15 animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute w-[500px] h-[500px] -bottom-48 left-1/3 bg-orange-400 dark:bg-orange-800 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-15 animate-float" style={{ animationDelay: '4s' }}></div>
        </div>

        {/* Content */}
        <div className="relative max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            {/* Title */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-[1.4]">
              <span className="block bg-gradient-to-r from-gray-900 via-primary-800 to-accent-800 dark:from-white dark:via-primary-300 dark:to-accent-300 bg-clip-text text-transparent mb-4 pb-2">
                AI & Engineering Solutions
              </span>
              <span className="block bg-gradient-to-r from-gray-900 via-primary-800 to-accent-800 dark:from-white dark:via-primary-300 dark:to-accent-300 bg-clip-text text-transparent pb-2">
                for Modern Enterprises
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-[700px] mx-auto leading-relaxed">
              Infodra helps organizations build intelligent systems, automate workflows, and scale engineering capacity through AI-powered platforms and expert technical talent.
            </p>

            {/* Trust Indicator */}
            <p className="text-sm text-gray-500 dark:text-gray-400 font-normal">
              AI Automation • Custom Development • SaaS Platforms • Team Augmentation
            </p>
          </div>
        </div>
      </section>

      {/* Core Solutions Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Our Core Solutions
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Comprehensive AI and engineering solutions to transform your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-600 hover:shadow-xl transition-all duration-300"
              >
                <div className="text-5xl mb-4">{solution.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {solution.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {solution.description}
                </p>
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-wide">
                    Examples:
                  </p>
                  <ul className="space-y-1.5">
                    {solution.examples.map((example, idx) => (
                      <li
                        key={idx}
                        className="text-sm text-gray-600 dark:text-gray-400 flex items-start"
                      >
                        <span className="text-primary-500 dark:text-primary-400 mr-2">•</span>
                        <span>{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Industries We Support
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Delivering AI and engineering solutions across diverse sectors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-600 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {industry.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {industry.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Expertise Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Technology Expertise
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Cutting-edge technologies powering modern solutions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-600 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-4xl mb-3">{tech.icon}</div>
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                  {tech.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Models Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Flexible Engagement Models
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Choose the partnership model that fits your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {engagementModels.map((model, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-600 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {model.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {model.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-primary-900 to-accent-900 text-white py-20 overflow-hidden mx-4 sm:mx-6 lg:mx-8 my-20 rounded-3xl">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 -top-48 -left-48 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-accent-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Ready to Build Your Next Intelligent Platform?
          </h2>
          <p className="text-lg md:text-xl text-primary-50 mb-10 max-w-2xl mx-auto leading-relaxed">
            Partner with Infodra to accelerate innovation using AI platforms and world-class engineering talent.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/talent"
              className="bg-white text-gray-900 px-10 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 active:bg-gray-200 transition duration-200 shadow-lg"
            >
              Deploy AI-ML Talent
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 active:bg-white/20 transition duration-200"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
