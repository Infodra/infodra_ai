'use client'

import { Cog, Car, FlaskConical, HardHat } from 'lucide-react'

export function SolutionsByIndustry() {
  const industries = [
    {
      icon: Car,
      name: 'Automotive Components Manufacturing',
      description:
        'Defect detection on machined and assembled parts, OEE monitoring across CNC cells, and traceability for every part shipped to OEM customers.',
    },
    {
      icon: HardHat,
      name: 'Heavy Engineering & Fabrication',
      description:
        'Engineering automation for drawings, BOMs and tender documents, plus weld and fabrication inspection to standardize quality across long-cycle work.',
    },
    {
      icon: FlaskConical,
      name: 'Process Plants',
      description:
        'Predictive maintenance for pumps, motors, gearboxes and rotating equipment, with intelligent monitoring of critical process parameters to prevent unplanned stoppages.',
    },
    {
      icon: Cog,
      name: 'Fasteners & Precision Components',
      description:
        'High-speed visual inspection for fasteners, threaded parts and precision components, plus dimensional checks at line speed — protecting quality on millions of parts per shift.',
    },
  ]

  return (
    <section className="py-24 bg-white dark:bg-steel-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="eyebrow mb-3">Solutions by Industry</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-steel-900 dark:text-white tracking-tight">
            Tailored to How You Make Things
          </h2>
          <p className="text-xl text-steel-600 dark:text-steel-300 max-w-3xl mx-auto leading-relaxed">
            Industry-specific applications shaped by real plant constraints — cycle times, tolerances, equipment, materials and customer audits.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {industries.map((ind, index) => {
            const Icon = ind.icon
            return (
              <div key={index} className="industrial-card p-7">
                <div className="absolute top-0 bottom-0 left-0 w-1 bg-gradient-to-b from-primary-500 to-primary-700 rounded-l-lg" />
                <div className="flex items-start gap-4">
                  <div className="icon-tile-lg flex-shrink-0">
                    <Icon size={26} className="text-white" strokeWidth={1.75} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-steel-900 dark:text-white tracking-tight">
                      {ind.name}
                    </h3>
                    <p className="text-steel-600 dark:text-steel-300 leading-relaxed">
                      {ind.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
