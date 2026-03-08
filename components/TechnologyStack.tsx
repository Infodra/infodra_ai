'use client'

import { Brain, CloudCog, Network, Webhook, Database } from 'lucide-react'

export function TechnologyStack() {
  const technologies = [
    {
      icon: Brain,
      title: 'AI / Machine Learning',
      description: 'Advanced neural networks and deep learning models',
    },
    {
      icon: CloudCog,
      title: 'Cloud Infrastructure',
      description: 'Scalable and reliable cloud-native architecture',
    },
    {
      icon: Network,
      title: 'Distributed Systems',
      description: 'High-performance distributed computing platforms',
    },
    {
      icon: Webhook,
      title: 'API Platforms',
      description: 'RESTful and GraphQL API development',
    },
    {
      icon: Database,
      title: 'SaaS Architecture',
      description: 'Multi-tenant enterprise SaaS solutions',
    },
  ]

  return (
    <section id="technology" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Technology Stack
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Infodra builds production-grade AI systems and scalable digital infrastructure using cutting-edge technologies and industry best practices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-500 transition-all hover:scale-105"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-ai flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <tech.icon size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">
                {tech.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {tech.description}
              </p>
            </div>
          ))}
        </div>

        {/* Tech logos or badges could go here */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-8 opacity-60">
          <div className="px-6 py-3 bg-gray-100 dark:bg-gray-800 rounded-lg text-gray-700 dark:text-gray-300 font-semibold">
            Python
          </div>
          <div className="px-6 py-3 bg-gray-100 dark:bg-gray-800 rounded-lg text-gray-700 dark:text-gray-300 font-semibold">
            TypeScript
          </div>
          <div className="px-6 py-3 bg-gray-100 dark:bg-gray-800 rounded-lg text-gray-700 dark:text-gray-300 font-semibold">
            TensorFlow
          </div>
          <div className="px-6 py-3 bg-gray-100 dark:bg-gray-800 rounded-lg text-gray-700 dark:text-gray-300 font-semibold">
            AWS
          </div>
          <div className="px-6 py-3 bg-gray-100 dark:bg-gray-800 rounded-lg text-gray-700 dark:text-gray-300 font-semibold">
            Kubernetes
          </div>
          <div className="px-6 py-3 bg-gray-100 dark:bg-gray-800 rounded-lg text-gray-700 dark:text-gray-300 font-semibold">
            React
          </div>
        </div>
      </div>
    </section>
  )
}
