'use client'

import { Factory, Car, Building2, Rocket, Briefcase } from 'lucide-react'

export function IndustriesSection() {
  const industries = [
    {
      icon: Car,
      name: 'Automotive',
      description: 'Smart mobility and connected vehicle solutions',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Factory,
      name: 'Manufacturing',
      description: 'Industrial automation and IoT systems',
      gradient: 'from-indigo-500 to-blue-500',
    },
    {
      icon: Building2,
      name: 'Industrial Engineering',
      description: 'Process optimization and intelligent systems',
      gradient: 'from-blue-600 to-indigo-600',
    },
    {
      icon: Rocket,
      name: 'Technology Startups',
      description: 'Rapid product development and scaling',
      gradient: 'from-purple-500 to-indigo-500',
    },
    {
      icon: Briefcase,
      name: 'Digital Businesses',
      description: 'SaaS platforms and digital transformation',
      gradient: 'from-indigo-500 to-purple-500',
    },
  ]

  return (
    <section id="industries" className="py-24 bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-primary-950 dark:via-gray-900 dark:to-accent-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Industries We Support
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Infodra supports engineering innovation and digital transformation initiatives across complex industrial and technology environments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-500 transition-all hover:scale-105 hover:shadow-xl"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${industry.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <industry.icon size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                {industry.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {industry.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
