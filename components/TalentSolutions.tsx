'use client'

import { ScanSearch, Gauge, FileSearch, Briefcase } from 'lucide-react'

export function TalentSolutions() {
  const services = [
    {
      icon: ScanSearch,
      name: 'AI for Quality Inspection & Automation',
      description: 'Camera-based defect detection, dimensional checks and inline inspection — built and tuned by experts who understand your parts, lighting and PLC environment.',
      gradient: 'from-primary-600 to-primary-500',
      bgColor: 'bg-primary-50 dark:bg-primary-950/30',
    },
    {
      icon: Gauge,
      name: 'AI for Production & Maintenance',
      description: 'Predictive maintenance, OEE analytics and IoT-driven production monitoring delivered by engineers who have worked on real shop-floor data, not just dashboards.',
      gradient: 'from-primary-700 to-accent-500',
      bgColor: 'bg-primary-50 dark:bg-primary-950/30',
    },
    {
      icon: FileSearch,
      name: 'AI for Engineering & Design Automation',
      description: 'Drawing validation, BOM extraction and CAD automation in Inventor, SolidWorks and AutoCAD — accelerating tenders, design reviews and documentation work.',
      gradient: 'from-accent-600 to-primary-600',
      bgColor: 'bg-accent-50 dark:bg-accent-950/30',
    },
    {
      icon: Briefcase,
      name: 'AI for Business Operations',
      description: 'AI assistants, document processing and analytics for sales, purchase, finance and HR — practical automation that removes repetitive work from your teams.',
      gradient: 'from-primary-500 to-accent-500',
      bgColor: 'bg-primary-50 dark:bg-primary-950/30',
    },
  ]

  return (
    <section id="talent" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary-700 dark:text-primary-400 mb-3">
            Capabilities
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            AI Capability Areas We Deliver Through Experts
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Four practical capability areas — each delivered by specialists who understand manufacturing, engineering and the operations behind them.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl ${service.bgColor} border border-gray-200 dark:border-gray-700 hover:border-transparent transition-all hover:scale-105 hover:shadow-2xl`}
            >
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