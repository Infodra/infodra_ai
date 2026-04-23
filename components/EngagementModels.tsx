'use client'

import { UserCheck, FlaskConical, FileCode, Users } from 'lucide-react'

export function EngagementModels() {
  const models = [
    {
      icon: UserCheck,
      title: 'Dedicated AI Engineers (Manufacturing Focus)',
      description: 'Long-term AI specialists embedded with your engineering, quality or production team — focused on inspection, downtime, drawings or operations.',
      gradient: 'from-primary-600 to-primary-500',
    },
    {
      icon: FlaskConical,
      title: 'AI Pilot & Proof of Concept Teams',
      description: 'Small focused teams that prove a use case on your real data and shop-floor conditions — typically 4 to 8 weeks to a working pilot.',
      gradient: 'from-accent-500 to-primary-600',
    },
    {
      icon: FileCode,
      title: 'Project-Based AI Implementation',
      description: 'End-to-end delivery of a defined AI use case — scope, timeline and outcome owned by Infodra, with clear acceptance criteria.',
      gradient: 'from-primary-700 to-accent-500',
    },
    {
      icon: Users,
      title: 'Full AI Delivery Squads',
      description: 'Cross-functional squads with AI engineers, data engineers, MLOps and a delivery lead — for plant-wide or multi-site rollouts.',
      gradient: 'from-primary-500 to-accent-500',
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-primary-950 dark:via-gray-900 dark:to-accent-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary-700 dark:text-primary-400 mb-3">
            Engagement Models
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Flexible Ways to Engage Our AI Experts
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            From a focused pilot to a full delivery squad — choose the model that fits where you are on your AI journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {models.map((model, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-transparent transition-all hover:scale-105 hover:shadow-2xl"
            >
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

        <div className="mt-16 text-center">
          <div className="inline-block px-8 py-4 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg">
            <p className="text-gray-700 dark:text-gray-300 text-lg">
              <span className="font-semibold text-gray-900 dark:text-white">Not sure where to start?</span>
              <br />
              We will help you pick the right engagement based on your plant priorities and AI maturity.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}