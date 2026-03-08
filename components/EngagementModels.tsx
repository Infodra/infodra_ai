'use client'

import { UserCheck, FileCode, Users, Briefcase } from 'lucide-react'

export function EngagementModels() {
  const models = [
    {
      icon: UserCheck,
      title: 'Dedicated Engineers',
      description: 'Long-term technical professionals integrated into your team, working exclusively on your projects.',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: FileCode,
      title: 'Project-Based Delivery',
      description: 'End-to-end project execution with defined scope, timeline, and deliverables managed by Infodra.',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: Users,
      title: 'Technical Staffing',
      description: 'Flexible staffing solutions to scale your engineering capacity based on business needs.',
      gradient: 'from-indigo-500 to-purple-500',
    },
    {
      icon: Briefcase,
      title: 'Engineering Teams',
      description: 'Complete cross-functional teams with architects, developers, and DevOps engineers.',
      gradient: 'from-emerald-500 to-teal-500',
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-primary-950 dark:via-gray-900 dark:to-accent-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Flexible Engagement Models
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Choose the engagement model that best fits your organization's needs and project requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {models.map((model, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-transparent transition-all hover:scale-105 hover:shadow-2xl"
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${model.gradient} opacity-0 group-hover:opacity-10 transition-opacity`}></div>
              
              <div className="relative p-8">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${model.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <model.icon size={32} className="text-white" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                  {model.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {model.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div className="mt-16 text-center">
          <div className="inline-block px-8 py-4 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg">
            <p className="text-gray-700 dark:text-gray-300 text-lg">
              <span className="font-semibold text-gray-900 dark:text-white">Not sure which model fits?</span>
              <br />
              Our team will help you choose the optimal engagement approach for your specific needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
