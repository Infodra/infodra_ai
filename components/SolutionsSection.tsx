'use client'

import { ScanSearch, Activity, PenTool, Wrench, TrendingDown, TrendingUp, ArrowDown } from 'lucide-react'

export function SolutionsSection() {
  const solutions = [
    {
      icon: ScanSearch,
      title: 'Automated Quality Inspection',
      description:
        'Always-on, camera-based inspection that catches defects earlier and keeps quality consistent across every shift — without slowing the line.',
      capabilities: [
        'Surface defect detection on parts and assemblies',
        'Dimensional measurement from images and scans',
        'Weld, paint, casting and finish inspection',
      ],
      metric: { icon: TrendingDown, label: 'Inspection Time', value: '↓ 50–60%' },
    },
    {
      icon: Activity,
      title: 'Production Optimization',
      description:
        'Turn machine data, downtime logs and shop-floor activity into clear actions that supervisors can take the same shift — protecting throughput and OEE.',
      capabilities: [
        'Live OEE across lines, machines and shifts',
        'Downtime root-cause and changeover analytics',
        'Bottleneck and throughput insights',
      ],
      metric: { icon: TrendingUp, label: 'OEE Improvement', value: '↑ 10–20%' },
    },
    {
      icon: PenTool,
      title: 'Engineering Automation',
      description:
        'Free your design team from repetitive checks and manual data entry. Standardize drawings, BOMs and engineering documents with rule-based intelligence.',
      capabilities: [
        'CAD model and drawing automation',
        'Drawing validation against design standards',
        'BOM extraction from PDFs, DWG and legacy files',
      ],
      metric: { icon: ArrowDown, label: 'Engineering Effort', value: '↓ up to 50%' },
    },
    {
      icon: Wrench,
      title: 'Predictive Maintenance',
      description:
        'Catch early signs of wear in motors, pumps, gearboxes and CNC equipment so maintenance is planned, not reactive — and production schedules stay intact.',
      capabilities: [
        'Vibration, temperature and current-based monitoring',
        'Failure-mode alerts to maintenance supervisors',
        'Spare-parts and intervention planning',
      ],
      metric: { icon: TrendingDown, label: 'Unplanned Downtime', value: '↓ 30–40%' },
    },
  ]

  return (
    <section
      id="solutions"
      className="relative py-24 bg-white overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="eyebrow mb-3">Our Solutions</p>
          <h2 className="text-4xl md:text-5xl font-bold text-steel-900 mb-4 tracking-tight">
            Four Solutions Built for Manufacturing Outcomes
          </h2>
          <p className="text-lg text-steel-600 max-w-3xl mx-auto leading-relaxed">
            Focused offerings that target the work happening every day on your shop floor and in your engineering office — each with a clear, measurable impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((solution, index) => {
            const Icon = solution.icon
            const MIcon = solution.metric.icon
            return (
              <div key={index} className="industrial-card !bg-white p-6 flex flex-col">
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 rounded-t-lg" />

                <div className="icon-tile mb-5">
                  <Icon size={24} className="text-white" strokeWidth={1.75} />
                </div>

                <h3 className="text-xl font-bold text-steel-900 mb-2 tracking-tight">
                  {solution.title}
                </h3>
                <p className="text-sm text-steel-600 mb-4 leading-relaxed">
                  {solution.description}
                </p>

                <div className="metric-badge mb-4 self-start">
                  <MIcon size={12} strokeWidth={2.5} />
                  <span>{solution.metric.value} {solution.metric.label}</span>
                </div>

                <ul className="space-y-1.5 mt-auto pt-3 border-t border-steel-200">
                  {solution.capabilities.map((cap, idx) => (
                    <li key={idx} className="text-xs text-steel-600 flex items-start">
                      <span className="text-primary-500 mr-2 mt-0.5">▸</span>
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
