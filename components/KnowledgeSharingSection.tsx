'use client'

import Link from 'next/link'

export function KnowledgeSharingSection() {
  const knowledgeFormats = [
    {
      title: 'Executive Briefings',
      description: 'Decision-oriented sessions for leadership teams on AI operating models, risk, and prioritization.',
    },
    {
      title: 'Engineering Deep Dives',
      description: 'Hands-on architecture, MLOps, and deployment workshops for engineering and platform teams.',
    },
    {
      title: 'Playbooks and Accelerators',
      description: 'Reusable implementation assets that reduce setup effort and increase delivery consistency.',
    },
  ]

  const caseStudies = [
    {
      industry: 'Manufacturing',
      title: 'Reduced manual processing in quality operations',
      summary: 'Implemented document intelligence and workflow automation to reduce review cycle times and improve traceability.',
      impact: 'Faster operations and better audit readiness',
    },
    {
      industry: 'SaaS Business',
      title: 'Built an AI-enabled support assistant',
      summary: 'Designed a retrieval-powered assistant that improved response consistency and reduced support backlog.',
      impact: 'Improved response speed and customer satisfaction',
    },
    {
      industry: 'Enterprise Services',
      title: 'Modernized analytics and forecasting stack',
      summary: 'Reworked fragmented reporting pipelines into a governed data platform with predictive forecasting capabilities.',
      impact: 'Clearer planning signals for growth teams',
    },
  ]

  const upskillingTracks = [
    'AI Foundations for Business Teams',
    'Applied Prompt Engineering for Operations',
    'MLOps and Production Readiness',
    'Data Engineering for AI Workloads',
    'Responsible AI and Governance in Practice',
    'Role-based Reskilling for Developers and Analysts',
  ]

  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        <div id="knowledge-sharing" className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Knowledge Sharing
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            We help teams internalize what we build through practical learning, contextual workshops, and repeatable delivery playbooks.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {knowledgeFormats.map((item, index) => (
              <div
                key={index}
                className="rounded-xl border border-gray-200 dark:border-gray-700 p-6 bg-gradient-to-br from-white to-primary-50/40 dark:from-gray-800 dark:to-gray-900"
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div id="case-studies">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Case Studies
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Representative outcomes from enterprise programs across AI transformation, automation, and platform modernization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((caseStudy, index) => (
              <article
                key={index}
                className="rounded-2xl border border-gray-200 dark:border-gray-700 p-7 bg-gray-50 dark:bg-gray-800"
              >
                <p className="text-sm uppercase tracking-wider text-primary-600 dark:text-primary-400 mb-2">
                  {caseStudy.industry}
                </p>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{caseStudy.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{caseStudy.summary}</p>
                <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">Impact: {caseStudy.impact}</p>
              </article>
            ))}
          </div>
        </div>

        <div id="upskilling" className="rounded-3xl p-8 md:p-12 bg-gradient-to-br from-primary-600 via-primary-700 to-accent-700 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Upskilling and Reskilling</h2>
              <p className="text-primary-100 leading-relaxed mb-6">
                Structured learning tracks designed to help your teams transition from experimentation to confident AI-enabled execution.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="px-6 py-3 rounded-lg bg-white text-primary-700 font-semibold hover:bg-gray-100 transition-colors"
                >
                  Plan a Learning Program
                </Link>
                <Link
                  href="/talent"
                  className="px-6 py-3 rounded-lg border border-white/70 text-white font-semibold hover:bg-white/10 transition-colors"
                >
                  Build a Hybrid Team
                </Link>
              </div>
            </div>

            <ul className="space-y-3">
              {upskillingTracks.map((track, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-white/90" />
                  <span className="text-primary-50">{track}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
