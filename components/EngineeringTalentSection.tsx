'use client'

import { Brain, Code, Cloud, Database, Pencil, Briefcase } from 'lucide-react'

export function EngineeringTalentSection() {
  const capabilities = [
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      roles: [
        'Machine Learning Engineers',
        'Data Scientists',
        'NLP Engineers',
        'Computer Vision Engineers',
        'AI Solution Architects'
      ],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Code,
      title: 'Software Engineering',
      roles: [
        'Full Stack Developers',
        'Backend Engineers',
        'Frontend Developers',
        'API & Microservices Engineers',
        'QA Automation Engineers'
      ],
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: Cloud,
      title: 'Cloud & Infrastructure',
      roles: [
        'DevOps Engineers',
        'Cloud Engineers (AWS / Azure / GCP)',
        'Kubernetes Specialists',
        'Infrastructure Architects'
      ],
      gradient: 'from-indigo-500 to-blue-500',
    },
    {
      icon: Database,
      title: 'Data Engineering',
      roles: [
        'Data Engineers',
        'ETL Specialists',
        'Data Platform Engineers',
        'Analytics Engineers'
      ],
      gradient: 'from-emerald-500 to-teal-500',
    },
    {
      icon: Pencil,
      title: 'Mechanical & CAD Engineering',
      roles: [
        'CAD Design Engineers',
        'CAE Analysts',
        'Product Design Engineers',
        'Automotive Engineers'
      ],
      gradient: 'from-orange-500 to-red-500',
    },
    {
      icon: Briefcase,
      title: 'Technical Program & Delivery',
      roles: [
        'Technical Project Managers',
        'Business Analysts',
        'Solution Architects'
      ],
      gradient: 'from-violet-500 to-purple-500',
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-primary-50/30 dark:from-gray-900 dark:via-gray-900 dark:to-primary-950/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Engineering Talent for Enterprise Innovation
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Deploy specialized engineers and technical professionals across AI, software, cloud, and engineering domains.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-transparent transition-all hover:scale-105 hover:shadow-2xl p-8"
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${capability.gradient} opacity-0 group-hover:opacity-5 transition-opacity`}></div>
              
              <div className="relative">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${capability.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <capability.icon size={28} className="text-white" />
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                  {capability.title}
                </h3>
                
                {/* Roles List */}
                <ul className="space-y-2">
                  {capability.roles.map((role, roleIndex) => (
                    <li key={roleIndex} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                      <span className={`inline-block w-1.5 h-1.5 rounded-full bg-gradient-to-br ${capability.gradient} mt-2 mr-2 flex-shrink-0`}></span>
                      <span>{role}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
