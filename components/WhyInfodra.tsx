'use client'

import { Award, Code2, Globe, Server } from 'lucide-react'

export function WhyInfodra() {
  const strengths = [
    {
      icon: Award,
      title: 'Engineering-Driven Execution',
      description: 'Systematic engineering approach with experienced technical professionals who deliver production-ready systems',
    },
    {
      icon: Code2,
      title: 'AI & Cloud Expertise',
      description: 'Deep expertise in machine learning, artificial intelligence, and modern cloud infrastructure',
    },
    {
      icon: Globe,
      title: 'Global Talent Deployment',
      description: 'Access to skilled engineers and technical specialists ready to join your team across global locations',
    },
    {
      icon: Server,
      title: 'Production-Grade Systems',
      description: 'Enterprise-ready architecture, security, and scalability built into every solution we deliver',
    },
  ]

  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Why Enterprises Partner With Infodra
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Partner with a team committed to excellence, innovation, and your success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {strengths.map((strength, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl bg-gradient-to-br from-gray-50 to-primary-50 dark:from-gray-800 dark:to-primary-950 border border-gray-200 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-500 shadow-md hover:shadow-2xl transition-all duration-[250ms] ease-in-out hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-ai flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-[250ms] ease-in-out group-hover:shadow-lg group-hover:shadow-primary-500/50">
                <strength.icon size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">
                {strength.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {strength.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
