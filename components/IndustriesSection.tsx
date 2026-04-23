'use client'

import { Eye, Ruler, Activity, Wrench, PenTool, FileText } from 'lucide-react'

export function IndustriesSection() {
  const useCases = [
    {
      icon: Eye,
      name: 'Automated Defect Detection',
      description:
        'Catch surface defects, missing parts and assembly errors in real time with line-side cameras — freeing operators from repetitive visual checks.',
      metric: '↓ 80–90% defect escapes',
    },
    {
      icon: Ruler,
      name: 'Dimensional Measurement',
      description:
        'Measure critical dimensions directly from images at line speed. Replace 100% manual gauging with continuous, repeatable checks.',
      metric: '↓ 50–60% inspection time',
    },
    {
      icon: Activity,
      name: 'OEE & Production Monitoring',
      description:
        'Live availability, performance and quality on every line. Act on losses the same shift they happen — not in the next monthly review.',
      metric: '↑ 10–20% OEE',
    },
    {
      icon: Wrench,
      name: 'Predictive Maintenance',
      description:
        'Spot failure patterns in motors, pumps, gearboxes and CNC machines early. Move from firefighting to planned interventions.',
      metric: '↓ 30–40% downtime',
    },
    {
      icon: PenTool,
      name: 'Engineering Automation',
      description:
        'Automate repetitive CAD work, variant generation and rule-based modeling so designers focus on product decisions.',
      metric: '↓ up to 50% engineering effort',
    },
    {
      icon: FileText,
      name: 'Drawing & BOM Validation',
      description:
        'Auto-check engineering drawings against your standards and extract accurate BOMs from PDFs and legacy files — fewer downstream errors.',
      metric: 'Faster tender turnaround',
    },
  ]

  return (
    <section
      id="use-cases"
      className="py-24 bg-primary-50 dark:bg-primary-950"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="eyebrow mb-3">Industry Use Cases</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-steel-900 dark:text-white tracking-tight">
            Where AI Pays Back on the Shop Floor
          </h2>
          <p className="text-lg text-steel-600 dark:text-steel-300 max-w-3xl mx-auto leading-relaxed">
            Six high-impact use cases already running in plants and engineering offices — each tied to a measurable improvement in quality, productivity or cost.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((uc, index) => {
            const Icon = uc.icon
            return (
              <div key={index} className="industrial-card p-7 flex flex-col">
                {/* Left accent bar */}
                <div className="absolute top-0 bottom-0 left-0 w-1 bg-gradient-to-b from-primary-500 to-primary-700 rounded-l-lg" />

                <div className="flex items-start justify-between mb-4">
                  <div className="icon-tile-lg">
                    <Icon size={26} className="text-white" strokeWidth={1.75} />
                  </div>
                  <span className="metric-badge">{uc.metric}</span>
                </div>

                <h3 className="text-xl font-bold mb-2 text-steel-900 dark:text-white tracking-tight">
                  {uc.name}
                </h3>
                <p className="text-sm text-steel-600 dark:text-steel-300 leading-relaxed">
                  {uc.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
