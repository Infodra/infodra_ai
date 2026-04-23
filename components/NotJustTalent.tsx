'use client'

import { Target, Wrench, TrendingUp } from 'lucide-react'

export function NotJustTalent() {
  const points = [
    {
      icon: Target,
      title: 'Aligned to Real Plant Problems',
      description: 'We start with your actual pain — quality escapes, downtime, drawing rework — and assign experts who have solved that exact problem before.',
    },
    {
      icon: Wrench,
      title: 'Resumes Are Not the Product',
      description: 'You don\'t hire CVs. You get a working AI capability — proven on your data, integrated with your systems, owned end-to-end.',
    },
    {
      icon: TrendingUp,
      title: 'Measured on Outcomes',
      description: 'Engagements are tracked against the numbers leadership cares about — quality, productivity, cost — not utilization or hours.',
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary-200 mb-3">
            Our Difference
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Not Just Talent — We Deliver Outcomes
          </h2>
          <p className="text-lg md:text-xl text-primary-100 leading-relaxed">
            We don&apos;t hand over resumes and walk away. We align AI experts to real plant problems and stay accountable to measurable impact on quality, productivity and cost.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {points.map((p, i) => (
            <div
              key={i}
              className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm p-8 hover:bg-white/10 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-5">
                <p.icon size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">{p.title}</h3>
              <p className="text-primary-100 leading-relaxed text-sm">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
