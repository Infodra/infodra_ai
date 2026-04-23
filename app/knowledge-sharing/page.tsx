import { Metadata } from 'next'
import Link from 'next/link'
import { Footer } from '@/components/Footer'
import { CTASection } from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'Knowledge Sharing | Infodra AI',
  description:
    'Workshops, executive briefings, architecture deep dives, and implementation playbooks that help your teams adopt AI and engineering practices with confidence.',
  keywords: [
    'AI workshops',
    'executive briefings',
    'architecture workshops',
    'AI playbooks',
    'engineering enablement',
  ],
}

const formats = [
  {
    title: 'Executive Briefings',
    description:
      'Decision-oriented sessions for leadership teams covering AI operating models, prioritization, and risk.',
    audience: 'CXOs, Heads of Engineering, Transformation Leaders',
  },
  {
    title: 'Architecture Deep Dives',
    description:
      'Hands-on architecture and system design sessions covering AI platforms, data pipelines, and MLOps.',
    audience: 'Architects, Engineering Leads, Senior Engineers',
  },
  {
    title: 'Implementation Workshops',
    description:
      'Working sessions on practical delivery topics like RAG systems, agentic workflows, and automation patterns.',
    audience: 'Engineering, Data, and Product Teams',
  },
  {
    title: 'Playbooks and Accelerators',
    description:
      'Reusable references for delivery, governance, and operations that reduce setup effort across initiatives.',
    audience: 'Program Owners, Delivery Leads, Internal CoEs',
  },
]

const topics = [
  'Generative AI for the enterprise',
  'Agentic AI design and guardrails',
  'MLOps and production readiness',
  'Data platform modernization',
  'Responsible AI and governance',
  'Cybersecurity for AI workloads',
  'Cloud architecture and FinOps',
  'Engineering quality and DevEx',
]

export default function KnowledgeSharingPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-primary-50/30 to-accent-50/30 dark:from-gray-900 dark:via-gray-900 dark:to-primary-950/40 pt-24 pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold tracking-wide uppercase text-primary-600 dark:text-primary-400 mb-3">
            Knowledge Sharing
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-gray-900 via-primary-800 to-accent-800 dark:from-white dark:via-primary-300 dark:to-accent-300 bg-clip-text text-transparent">
            Practical Learning, Built into Delivery
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We help teams internalize what we build through contextual workshops, structured briefings, and playbooks designed for repeatable execution.
          </p>
        </div>
      </section>

      {/* Formats */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Engagement Formats</h2>
            <p className="mt-3 text-gray-600 dark:text-gray-400">Choose the format that fits your team and goals.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {formats.map((f, index) => (
              <div
                key={index}
                className="rounded-2xl border border-gray-200 dark:border-gray-700 p-8 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 hover:shadow-lg transition-all"
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{f.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-3 leading-relaxed">{f.description}</p>
                <p className="text-sm text-primary-600 dark:text-primary-400 font-semibold">For: {f.audience}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Topics */}
      <section className="py-20 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Topics We Cover</h2>
            <p className="mt-3 text-gray-600 dark:text-gray-400">Curated tracks aligned with what enterprise teams need today.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {topics.map((t, idx) => (
              <span
                key={idx}
                className="px-5 py-2.5 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200 font-medium hover:border-primary-400 dark:hover:border-primary-500 transition-colors"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/contact"
              className="inline-block px-8 py-3.5 rounded-lg bg-gradient-ai text-white font-semibold hover:opacity-90 transition-opacity shadow-lg"
            >
              Request a Knowledge Session
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        title={"Equip Your Teams\nWith Practical AI Knowledge"}
        description="From executive briefings to engineering deep dives, we help your teams move faster with shared context."
        primaryCTA={{ text: 'Book a Briefing', href: '/contact' }}
        secondaryCTA={{ text: 'View Upskilling Tracks', href: '/upskilling' }}
        showBadge={false}
      />
      <Footer />
    </main>
  )
}
