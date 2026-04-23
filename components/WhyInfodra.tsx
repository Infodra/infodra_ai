'use client'

import { Cog, Factory, Target, Rocket } from 'lucide-react'

export function WhyInfodra() {
  const strengths = [
    {
      icon: Cog,
      title: 'Mechanical Engineering + Applied AI',
      description:
        'Our team has spent years inside plants and engineering offices before building AI. Solutions that respect tolerances, cycle times, operator workflows and how machines actually behave — not lab demos.',
    },
    {
      icon: Factory,
      title: 'Built Around Real Production Workflows',
      description:
        'We design for shifts, supervisors, quality teams and maintenance — and integrate with the PLCs, MES and ERPs you already run. Adoption-ready, not shelfware.',
    },
    {
      icon: Target,
      title: 'Outcome-First, Always Measured',
      description:
        'Every engagement starts with a target — fewer rejects, less downtime, faster inspection, lower engineering effort — and is reviewed against those numbers.',
    },
    {
      icon: Rocket,
      title: 'Implementation Partner, Not Just Advisors',
      description:
        'We deploy on the line, integrate with existing systems, train your team and stay through ramp-up so the value lands inside your plant.',
    },
  ]

  return (
    <section className="relative py-24 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary-950/40 via-transparent to-primary-950/60 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="eyebrow-on-dark mb-3">Why Infodra</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">
            An AI Partner That Understands Manufacturing
          </h2>
          <p className="text-xl text-steel-300 max-w-3xl mx-auto leading-relaxed">
            Most AI vendors come from software. We come from the factory and the engineering office — and we build for it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {strengths.map((strength, index) => {
            const Icon = strength.icon
            return (
              <div key={index} className="industrial-card-dark p-7">
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-400 via-primary-500 to-accent-400 rounded-t-lg" />
                <div className="flex items-start gap-4">
                  <div className="icon-tile-lg flex-shrink-0">
                    <Icon size={26} className="text-white" strokeWidth={1.75} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-white tracking-tight">
                      {strength.title}
                    </h3>
                    <p className="text-sm text-steel-300 leading-relaxed">
                      {strength.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Trust strip */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { v: '50–60%', l: 'Inspection time reduction' },
            { v: '10–20%', l: 'OEE improvement' },
            { v: '30–40%', l: 'Downtime reduction' },
            { v: '50%', l: 'Engineering effort saved' },
          ].map((s, i) => (
            <div
              key={i}
              className="text-center rounded-lg border border-white/10 bg-white/[0.03] py-5 px-3"
            >
              <div className="text-3xl font-bold bg-gradient-to-r from-primary-300 to-accent-300 bg-clip-text text-transparent tracking-tight">
                {s.v}
              </div>
              <div className="text-xs text-steel-400 mt-1 tracking-wide uppercase">
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
