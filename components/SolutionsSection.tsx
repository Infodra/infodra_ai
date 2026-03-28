'use client'

import Link from 'next/link'

export function SolutionsSection() {
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
    <>
      {/* Core Solutions Section */}
      <section id="solutions" className="py-20 bg-white dark:bg-gray-900">
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
    </>
  )
}
