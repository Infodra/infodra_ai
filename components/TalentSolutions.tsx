'use client'

import { Brain, BarChart3, Cpu, Cloud } from 'lucide-react'

export function TalentSolutions() {
  const services = [
    {
      icon: Brain,
      name: 'AI & Machine Learning Talent',
      description: 'Deploy experienced ML Engineers, AI Architects, Research Scientists, and MLOps Engineers to design, build, and scale intelligent systems for your enterprise.',
      gradient: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-100 dark:bg-blue-950/30',
    },
    {
      icon: BarChart3,
      name: 'Data & Analytics Professionals',
      description: 'Access Data Scientists, Data Engineers, and Big Data specialists who build robust pipelines and uncover actionable insights using AI-integrated analytics.',
      gradient: 'from-emerald-500 to-teal-500',
      bgColor: 'bg-emerald-100 dark:bg-emerald-950/30',
    },
    {
      icon: Cpu,
      name: 'Specialized & Emerging Tech Roles',
      description: 'Hire AI Product Managers, Robotics Engineers, Blockchain Developers, and IoT Architects to drive innovation in next-generation technology domains.',
      gradient: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-100 dark:bg-purple-950/30',
    },
    {
      icon: Cloud,
      name: 'IT & Infrastructure Talent',
      description: 'Engage Cloud Architects, DevOps Engineers, Full Stack Developers, Cybersecurity Specialists, and SREs to build and secure your digital infrastructure.',
      gradient: 'from-indigo-500 to-blue-500',
      bgColor: 'bg-indigo-100 dark:bg-indigo-950/30',
    },
  ]

  return (
    <section id="talent" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            IT and AI-ML Talent Solutions
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Flexible IT and AI-ML staffing solutions designed to accelerate enterprise projects across all technology domains.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl ${service.bgColor} border border-gray-200 dark:border-gray-700 hover:border-transparent transition-all hover:scale-105 hover:shadow-2xl`}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity`}></div>
              
              <div className="relative p-8">
                <div className={`w-20 h-20 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <service.icon size={36} className="text-white" />
                </div>
                
                <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                  {service.name}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
