'use client'

import { MessageSquare, Users, CheckCircle, Rocket } from 'lucide-react'

interface HowItWorksStep {
  step: number;
  title: string;
  description: string;
}

interface HowItWorksProps {
  items?: HowItWorksStep[];
}

export function HowItWorks({ items }: HowItWorksProps = {}) {
  const gradients = [
    'from-blue-500 to-cyan-500',
    'from-purple-500 to-pink-500',
    'from-emerald-500 to-teal-500',
    'from-orange-500 to-red-500',
  ];

  const defaultSteps = [
    {
      step: 1,
      title: 'Share Your Requirements',
      description: 'Tell us about your project goals, technical needs, and timeline.',
    },
    {
      step: 2,
      title: 'Talent Matching',
      description: 'We identify engineers with the right expertise and domain experience.',
    },
    {
      step: 3,
      title: 'Interview & Select',
      description: 'You evaluate and select engineers who best fit your team.',
    },
    {
      step: 4,
      title: 'Start the Engagement',
      description: 'Selected engineers integrate with your team and begin contributing to your project.',
    },
  ];

  const steps = items || defaultSteps;

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A simple, streamlined process to get started
          </p>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-2 ${steps.length > 3 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'} gap-8`}>
          {steps.map((step, index) => {
            const gradient = gradients[index % gradients.length];
            
            return (
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
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center shadow-lg`}>
                      <span className="text-white font-bold text-lg">{step.step.toString().padStart(2, '0')}</span>
                    </div>
                  </div>

                  {/* Icon Circle */}
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-white text-2xl font-bold">{step.step}</span>
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
            );
          })}
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
