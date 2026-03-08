'use client'

import { Brain, Code, Ruler, Users } from 'lucide-react'

export function TalentSolutions() {
  const services = [
    {
      icon: Brain,
      name: 'AI / Machine Learning Engineering',
      description: 'Design, develop, and deploy intelligent systems with experienced machine learning engineers, data scientists, and AI specialists.',
      gradient: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-100 dark:bg-blue-950/30',
    },
    {
      icon: Code,
      name: 'Software Engineering Teams',
      description: 'Dedicated full-stack development teams building scalable web platforms, SaaS products, and enterprise applications.',
      gradient: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-100 dark:bg-purple-950/30',
    },
    {
      icon: Ruler,
      name: 'CAD & Engineering Services',
      description: 'Mechanical design engineers and CAD professionals supporting automotive, manufacturing, and industrial engineering projects.',
      gradient: 'from-indigo-500 to-purple-500',
      bgColor: 'bg-indigo-100 dark:bg-indigo-950/30',
    },
    {
      icon: Users,
      name: 'Technical Talent Deployment',
      description: 'Flexible staffing solutions providing AI engineers, software developers, and technical specialists for enterprise initiatives.',
      gradient: 'from-emerald-500 to-teal-500',
      bgColor: 'bg-emerald-100 dark:bg-emerald-950/30',
    },
  ]

  return (
    <section id="talent" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Our Engineering Services
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Flexible engineering and technical staffing solutions designed to accelerate enterprise projects.
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
