'use client'

import { Cpu, Cloud, Shield, Zap } from 'lucide-react'

export function PlatformOverview() {
  const features = [
    {
      icon: Zap,
      title: 'AI-Powered Automation',
      description: 'Leverage cutting-edge artificial intelligence to automate complex business processes',
    },
    {
      icon: Cloud,
      title: 'Scalable SaaS Infrastructure',
      description: 'Build and deploy applications on enterprise-grade cloud infrastructure',
    },
    {
      icon: Shield,
      title: 'Secure Cloud Deployment',
      description: 'Industry-leading security standards and compliance for your applications',
    },
    {
      icon: Cpu,
      title: 'Enterprise Engineering',
      description: 'Production-ready digital systems built with engineering excellence',
    },
  ]

  return (
    <section id="platform" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            The Infodra AI Platform
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Infodra AI is a technology platform designed to help businesses build, deploy, and scale intelligent applications. 
            Our platform combines artificial intelligence, cloud infrastructure, and engineering expertise to deliver production-ready digital systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-primary-50 dark:from-gray-800 dark:to-primary-950 border border-gray-200 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-500 transition-all hover:scale-105 hover:shadow-xl"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-ai flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <feature.icon size={28} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
