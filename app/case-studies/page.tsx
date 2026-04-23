import { Metadata } from 'next'
import Link from 'next/link'
import { Footer } from '@/components/Footer'
import { CTASection } from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'Typical Outcomes | Infodra AI',
  description:
    'Realistic outcomes manufacturers and engineering teams can expect from AI — faster inspection, less downtime and reduced engineering effort.',
  keywords: [
    'AI outcomes manufacturing',
    'computer vision quality inspection',
    'predictive maintenance results',
    'OEE improvement',
    'engineering automation results',
  ],
}

const caseStudies = [
  {
    industry: 'Auto Components Manufacturing',
    title: 'Up to 60% Faster Inspection on High-Volume Lines',
    headlineMetric: { value: '↑ Up to 60%', label: 'Faster Inspection' },
    secondaryMetric: { value: '↓ Defect Escapes', label: 'Near Zero' },
    problem:
      'Operators inspect machined components by eye at the end of high-volume production lines. Throughput is capped by inspection speed, and small surface defects can slip through to the OEM customer.',
    solution:
      'A camera-based inspection station at the line exit, trained on the customer’s own defect samples and tuned to plant lighting. Pass/fail signals are pushed back to the existing PLC with full part-level traceability.',
    impact: [
      'Inspection cycle time can reduce by up to 60%',
      'Defect escape rate to customer can drop close to zero',
      'Operators can be reassigned to rework and process control',
      'Audit-ready traceability for every part inspected',
    ],
  },
  {
    industry: 'Process Plants',
    title: 'Up to 35% Reduction in Unplanned Downtime',
    headlineMetric: { value: '↓ Up to 35%', label: 'Unplanned Downtime' },
    secondaryMetric: { value: '↑ Planned', label: 'Maintenance Shift' },
    problem:
      'Repeated breakdowns on critical pumps, motors and gearboxes disrupt production schedules. Maintenance is largely reactive, and root causes are not consistently captured.',
    solution:
      'Vibration, temperature and current data from critical equipment are connected into a predictive monitoring model. Early-warning alerts and recommended actions are delivered to maintenance supervisors on shop-floor screens.',
    impact: [
      'Unplanned downtime can reduce by up to 35% within months',
      'Maintenance can shift from reactive to planned interventions',
      'Spare-parts usage can be optimized through earlier diagnosis',
      'A standardized failure-mode library is built for the plant',
    ],
  },
  {
    industry: 'Engineering & Design Office',
    title: 'Up to 50% Reduction in Drawing & BOM Effort',
    headlineMetric: { value: '↓ Up to 50%', label: 'Engineering Effort' },
    secondaryMetric: { value: '↑ Faster', label: 'Tender Turnaround' },
    problem:
      'Design engineers spend significant time validating drawings against company standards and manually building BOMs from legacy PDFs and supplier documents — slowing tender and quotation responses.',
    solution:
      'An engineering automation workflow auto-checks drawings against design rules and extracts structured BOM data from PDFs and DWG files, with engineer review built in.',
    impact: [
      'Drawing review effort can reduce by up to 50%',
      'BOM accuracy can improve through consistent rule application',
      'Tender and quotation responses can turn around faster',
      'Engineers can focus more time on product and design work',
    ],
  },
]

export default function CaseStudiesPage() {
  return (
    <main>
      {/* Industrial Hero */}
      <section
        className="relative overflow-hidden pt-32 pb-24 bg-cover bg-center border-b border-primary-700"
        style={{ backgroundImage: "url('/case-studies-hero.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary-950/85 via-primary-900/75 to-primary-800/70 pointer-events-none" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="eyebrow-on-dark mb-4">Typical Outcomes</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-white">
            Realistic Outcomes from AI in Manufacturing
          </h1>
          <p className="mt-6 text-lg md:text-xl text-primary-100 max-w-3xl mx-auto leading-relaxed">
            What manufacturing and engineering teams can typically expect from practical AI — faster inspection, less downtime and reduced engineering effort, measured against the numbers leadership cares about.
          </p>
        </div>
      </section>

      {/* Cases */}
      <section className="py-20 bg-primary-50 dark:bg-primary-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {caseStudies.map((cs, index) => (
              <article key={index} className="industrial-card p-8 flex flex-col">
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 rounded-t-lg" />

                <div className="flex items-center justify-between gap-3 mb-2">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary-700 dark:text-primary-400">
                    {cs.industry}
                  </p>
                  <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-1 rounded-full bg-primary-100 text-primary-700 dark:bg-primary-900/40 dark:text-primary-300 whitespace-nowrap">
                    Typical Outcome
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-steel-900 dark:text-white mb-5 tracking-tight">
                  {cs.title}
                </h2>

                {/* Metric strip */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="rounded-md border border-primary-200 dark:border-primary-800/60 bg-primary-50 dark:bg-primary-950/30 p-3">
                    <div className="text-2xl font-bold text-primary-700 dark:text-primary-300 tracking-tight">
                      {cs.headlineMetric.value}
                    </div>
                    <div className="text-[10px] uppercase tracking-wider text-steel-600 dark:text-steel-400 mt-0.5">
                      {cs.headlineMetric.label}
                    </div>
                  </div>
                  <div className="rounded-md border border-steel-200 dark:border-steel-700 bg-white dark:bg-steel-900 p-3">
                    <div className="text-2xl font-bold text-steel-800 dark:text-white tracking-tight">
                      {cs.secondaryMetric.value}
                    </div>
                    <div className="text-[10px] uppercase tracking-wider text-steel-600 dark:text-steel-400 mt-0.5">
                      {cs.secondaryMetric.label}
                    </div>
                  </div>
                </div>

                <div className="space-y-4 text-steel-600 dark:text-steel-300 leading-relaxed text-sm">
                  <div>
                    <h3 className="text-xs font-bold text-steel-900 dark:text-white uppercase tracking-[0.15em] mb-1">
                      Problem
                    </h3>
                    <p>{cs.problem}</p>
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-steel-900 dark:text-white uppercase tracking-[0.15em] mb-1">
                      Solution
                    </h3>
                    <p>{cs.solution}</p>
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-steel-900 dark:text-white uppercase tracking-[0.15em] mb-2">
                      Business Impact
                    </h3>
                    <ul className="space-y-1.5">
                      {cs.impact.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-primary-500 dark:text-primary-400 mr-2 mt-0.5">▸</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-10 text-center text-xs italic text-steel-500 dark:text-steel-400 max-w-3xl mx-auto leading-relaxed">
            Results shown are representative of typical AI implementations and may vary based on plant conditions and use case scope.
          </p>

          <div className="text-center mt-8">
            <Link href="/contact" className="btn-primary">
              Discuss Your Use Case
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        title={"See Similar Outcomes\nIn Your Plant"}
        description="Tell us about your top quality, downtime or engineering pain. We will map out a practical AI approach with realistic, achievable numbers for your operation."
        primaryCTA={{ text: 'See AI in Your Plant', href: '/contact' }}
        secondaryCTA={{ text: 'View Use Cases', href: '/#use-cases' }}
        showBadge={false}
      />
      <Footer />
    </main>
  )
}
