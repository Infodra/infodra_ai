'use client'

import { Brain, Cloud, Network, Database, BarChart3 } from 'lucide-react'

export function TechnologyExpertise() {
  const technologies = [
    {
      icon: Brain,
      title: 'Artificial Intelligence & Machine Learning',
      description: 'Deep learning, neural networks, computer vision, NLP, and predictive analytics',
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure & DevOps',
      description: 'AWS, Azure, GCP, Kubernetes, Docker, CI/CD pipelines, and infrastructure automation',
    },
    {
      icon: Network,
      title: 'Distributed Systems & APIs',
      description: 'Microservices, RESTful APIs, GraphQL, message queues, and event-driven architectures',
    },
    {
      icon: Database,
      title: 'Enterprise SaaS Platforms',
      description: 'Multi-tenant architecture, scalable backend systems, and cloud-native applications',
    },
    {
      icon: BarChart3,
      title: 'Data Engineering & Analytics',
      description: 'Big data processing, ETL pipelines, data warehousing, and business intelligence',
    },
  ]

  return (
    <section id="technology" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Technology Expertise
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Infodra builds production-grade AI systems and scalable digital infrastructure using cutting-edge technologies and industry best practices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-500 transition-all hover:scale-105 hover:shadow-xl"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-ai flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <tech.icon size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                {tech.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {tech.description}
              </p>
            </div>
          ))}
        </div>

        {/* Tech badges */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-4">
          {['Python', 'TypeScript', 'TensorFlow', 'PyTorch', 'React', 'Node.js', 'AWS', 'Kubernetes', 'PostgreSQL', 'MongoDB'].map((tech, index) => (
            <div
              key={index}
              className="px-6 py-3 bg-gray-100 dark:bg-gray-800 rounded-lg text-gray-700 dark:text-gray-300 font-semibold hover:bg-gradient-ai hover:text-white transition-all cursor-default"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
