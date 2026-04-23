import { Metadata } from 'next'
import Link from 'next/link'
import { Footer } from '@/components/Footer'
import { CTASection } from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'Upskilling and Reskilling | Infodra AI',
  description:
    'Role-based learning programs for engineering, data, product, and leadership teams to operate confidently in an AI-first environment.',
  keywords: [
    'AI upskilling',
    'reskilling programs',
    'enterprise training',
    'AI learning paths',
    'MLOps training',
  ],
}

const tracks = [
  {
    title: 'AI Foundations for Business Teams',
    audience: 'Operations, Marketing, Sales, HR',
    outcomes: [
      'Working understanding of generative and predictive AI',
      'Confidence in identifying high-impact use cases',
      'Hands-on practice with everyday AI tooling',
    ],
  },
  {
    title: 'Applied Prompt Engineering',
    audience: 'Knowledge workers and analysts',
    outcomes: [
      'Reliable patterns for structured outputs',
      'Practical evaluation of prompt quality',
      'Templates for repeatable workflows',
    ],
  },
  {
    title: 'MLOps and Production Readiness',
    audience: 'ML engineers and platform teams',
    outcomes: [
      'CI/CD for ML and model lifecycle management',
      'Observability and rollback strategies',
      'Scalable serving and feature pipelines',
    ],
  },
  {
    title: 'Data Engineering for AI Workloads',
    audience: 'Data engineers and platform owners',
    outcomes: [
      'Modern ELT and data quality practices',
      'Vector and hybrid retrieval foundations',
      'Cost-aware pipeline design',
    ],
  },
  {
    title: 'Responsible AI and Governance',
    audience: 'Risk, compliance, and product leaders',
    outcomes: [
      'Practical responsible AI controls',
      'Policy alignment for enterprise rollouts',
      'Risk-tiered evaluation frameworks',
    ],
  },
  {
    title: 'Reskilling for Developers and Analysts',
    audience: 'Software developers and analysts',
    outcomes: [
      'Transition paths into AI-enabled roles',
      'Project-based portfolio building',
      'Mentor-supported learning checkpoints',
    ],
  },
]

const deliveryModes = [
  {
    title: 'Cohort-Based Programs',
    description: 'Structured learning with peer cohorts, mentor support, and applied projects.',
  },
  {
    title: 'On-Site Bootcamps',
    description: 'Concentrated, hands-on bootcamps customized to your stack and use cases.',
  },
  {
    title: 'Self-Paced Plus Coaching',
    description: 'Curated learning paths combined with scheduled coaching and reviews.',
  },
]

export default function UpskillingPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-primary-50/30 to-accent-50/30 dark:from-gray-900 dark:via-gray-900 dark:to-primary-950/40 pt-24 pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold tracking-wide uppercase text-primary-600 dark:text-primary-400 mb-3">
            Upskilling and Reskilling
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-gray-900 via-primary-800 to-accent-800 dark:from-white dark:via-primary-300 dark:to-accent-300 bg-clip-text text-transparent">
            Build AI-Ready Teams, Role by Role
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Role-based learning paths that move teams from awareness to confident, production-ready execution in an AI-first environment.
          </p>
        </div>
      </section>

      {/* Tracks */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Learning Tracks</h2>
            <p className="mt-3 text-gray-600 dark:text-gray-400">Curated programs designed for measurable role outcomes.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tracks.map((t, index) => (
              <div
                key={index}
                className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 p-8 hover:shadow-lg transition-all"
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{t.title}</h3>
                <p className="text-sm text-primary-600 dark:text-primary-400 font-semibold mb-4">{t.audience}</p>
                <ul className="space-y-2">
                  {t.outcomes.map((o, idx) => (
                    <li key={idx} className="text-gray-600 dark:text-gray-300 text-sm flex items-start">
                      <span className="text-primary-500 dark:text-primary-400 mr-2">•</span>
                      <span>{o}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery modes */}
      <section className="py-20 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Delivery Modes</h2>
            <p className="mt-3 text-gray-600 dark:text-gray-400">Pick the format that suits your team and goals.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {deliveryModes.map((d, index) => (
              <div
                key={index}
                className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-8 hover:shadow-lg transition-all"
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{d.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{d.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/contact"
              className="inline-block px-8 py-3.5 rounded-lg bg-gradient-ai text-white font-semibold hover:opacity-90 transition-opacity shadow-lg"
            >
              Plan a Learning Program
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        title={"Make Your Teams\nProduction-Ready for AI"}
        description="From foundations to advanced engineering tracks, we design learning programs that translate to real delivery outcomes."
        primaryCTA={{ text: 'Talk to Learning Team', href: '/contact' }}
        secondaryCTA={{ text: 'View Case Studies', href: '/case-studies' }}
        showBadge={false}
      />
      <Footer />
    </main>
  )
}
