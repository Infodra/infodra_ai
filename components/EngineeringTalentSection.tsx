'use client'

import { Eye, Activity, FileCog, Bot } from 'lucide-react'

export function EngineeringTalentSection() {
  const capabilities = [
    {
      icon: Eye,
      title: 'Manufacturing AI & Computer Vision Experts',
      roles: [
        { name: 'Computer Vision Engineers', desc: 'Build defect detection and visual inspection systems for high-volume production lines.' },
        { name: 'Edge AI Engineers', desc: 'Deploy AI models on shop-floor cameras and integrate pass/fail signals with PLCs.' },
        { name: 'Industrial AI Specialists', desc: 'Apply AI to real plant problems — surface inspection, dimensional checks, assembly verification.' },
      ],
      gradient: 'from-primary-600 to-primary-500',
    },
    {
      icon: Activity,
      title: 'Production & Maintenance AI Specialists',
      roles: [
        { name: 'Predictive Maintenance Engineers', desc: 'Use vibration, temperature and current data to flag equipment failures before they cause downtime.' },
        { name: 'OEE & Production Analytics Experts', desc: 'Turn shop-floor data into clear views of availability, performance and quality.' },
        { name: 'IoT & Sensor Data Engineers', desc: 'Connect machines, sensors and historians so production data is reliable and usable.' },
      ],
      gradient: 'from-primary-700 to-accent-500',
    },
    {
      icon: FileCog,
      title: 'Engineering Automation Experts',
      roles: [
        { name: 'CAD Automation Engineers', desc: 'Automate repetitive design tasks in Inventor, SolidWorks and AutoCAD with rule-based scripts and AI.' },
        { name: 'Drawing Validation & BOM Automation Specialists', desc: 'Auto-check engineering drawings against standards and extract structured BOMs from PDFs and DWG files.' },
        { name: 'Document Intelligence Engineers', desc: 'Pull useful data out of GA drawings, datasheets, supplier documents and quality reports.' },
      ],
      gradient: 'from-accent-600 to-primary-600',
    },
    {
      icon: Bot,
      title: 'Business AI & Automation Experts',
      roles: [
        { name: 'AI Assistants for Operations', desc: 'Build internal copilots for sales, purchase, HR and customer support teams.' },
        { name: 'Document Processing Automation', desc: 'Automate invoices, POs, contracts and quality certificates with AI-driven extraction and routing.' },
        { name: 'AI Analytics & Reporting Specialists', desc: 'Deliver dashboards and AI-generated insights on production, quality, sales and finance.' },
      ],
      gradient: 'from-primary-500 to-accent-500',
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-primary-50/30 dark:from-gray-900 dark:via-gray-900 dark:to-primary-950/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary-700 dark:text-primary-400 mb-3">
            Specialized Roles
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            AI Experts Aligned to Manufacturing & Engineering
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Practical AI specialists who understand inspection, downtime, drawings, BOMs and shop-floor realities — not just generic IT skills.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {capabilities.map((capability, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-transparent transition-all hover:shadow-2xl p-8"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${capability.gradient} opacity-0 group-hover:opacity-5 transition-opacity`}></div>

              <div className="relative">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${capability.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <capability.icon size={28} className="text-white" />
                </div>

                <h3 className="text-xl font-bold mb-5 text-gray-900 dark:text-white">
                  {capability.title}
                </h3>

                <ul className="space-y-3">
                  {capability.roles.map((role, roleIndex) => (
                    <li key={roleIndex} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                      <span className={`inline-block w-1.5 h-1.5 rounded-full bg-gradient-to-br ${capability.gradient} mt-2 mr-2 flex-shrink-0`}></span>
                      <span>
                        <strong className="text-gray-800 dark:text-gray-200">{role.name}:</strong>{' '}
                        {role.desc}
                      </span>
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