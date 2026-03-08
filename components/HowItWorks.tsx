'use client'

import { MessageSquare, Users, CheckCircle, Rocket } from 'lucide-react'

export function HowItWorks() {
  const steps = [
    {
      number: '01',
      icon: MessageSquare,
      title: 'Share Your Requirements',
      description: 'Tell us about your project goals, technical needs, and timeline.',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      number: '02',
      icon: Users,
      title: 'Talent Matching',
      description: 'We identify engineers with the right expertise and domain experience.',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      number: '03',
      icon: CheckCircle,
      title: 'Interview & Select',
      description: 'You evaluate and select engineers who best fit your team.',
      gradient: 'from-emerald-500 to-teal-500',
    },
    {
      number: '04',
      icon: Rocket,
      title: 'Start the Engagement',
      description: 'Selected engineers integrate with your team and begin contributing to your project.',
      gradient: 'from-orange-500 to-red-500',
    },
  ]

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A simple process to deploy engineering talent for your enterprise projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Connector line (hidden on mobile and last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-20 left-full w-full h-0.5 bg-gradient-to-r from-gray-300 to-transparent dark:from-gray-600 -ml-4 z-0"></div>
              )}
              
              <div className="relative bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700 z-10">
                {/* Step Number */}
                <div className="absolute -top-4 -right-4">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-lg`}>
                    <span className="text-white font-bold text-lg">{step.number}</span>
                  </div>
                </div>

                {/* Icon */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${step.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <step.icon size={32} className="text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href="mailto:connect@infodra.ai"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-lg font-semibold text-lg hover:opacity-90 transition-all hover:scale-105 shadow-lg"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </section>
  )
}
