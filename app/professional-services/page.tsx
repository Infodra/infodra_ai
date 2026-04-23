import { Metadata } from 'next'
import Link from 'next/link'
import {
  ScanSearch,
  Activity,
  PenTool,
  Wrench,
  Bot,
  FileText,
  BarChart3,
  Headphones,
  Mail,
  Users,
  ShoppingCart,
  Briefcase,
  Megaphone,
  Database,
  Search,
  ShieldCheck,
  Languages,
  Calendar,
  ArrowRight,
} from 'lucide-react'
import { Footer } from '@/components/Footer'
import { CTASection } from '@/components/CTASection'
import { BusinessServicesCarousel } from '@/components/BusinessServicesCarousel'

export const metadata: Metadata = {
  title: 'Services | Infodra AI',
  description:
    'AI services for manufacturing, engineering and business operations — from quality inspection and predictive maintenance to AI assistants and document intelligence.',
  keywords: [
    'AI for manufacturing',
    'AI quality inspection',
    'predictive maintenance services',
    'engineering automation services',
    'AI assistants for operations',
    'document intelligence',
  ],
}

const manufacturingServices = [
  {
    icon: ScanSearch,
    title: 'Automated Quality Inspection',
    tagline: 'Inspection time ↓ 50–60% · defect escapes ↓ 80–90%',
    description:
      'Always-on, camera-based inspection that works at line speed and stays consistent across shifts. Built for real plant conditions — lighting, dust, vibration and operator changes.',
    bullets: [
      'Surface defect detection on parts and assemblies',
      'Dimensional measurement directly from images',
      'Weld, paint, casting and finish inspection',
      'Inline pass/fail with full traceability per part',
    ],
  },
  {
    icon: Activity,
    title: 'Production Optimization & OEE',
    tagline: 'OEE ↑ 10–20% · fewer stoppages, higher throughput',
    description:
      'Turn machine data, downtime logs and shop-floor activity into clear actions supervisors can take the same shift — before a line is lost.',
    bullets: [
      'Live OEE across lines, machines and shifts',
      'Downtime root-cause and changeover analytics',
      'Bottleneck and yield improvement recommendations',
      'Production planning and scheduling insights',
    ],
  },
  {
    icon: PenTool,
    title: 'Engineering Automation',
    tagline: 'Routine design effort ↓ up to 50% · faster tender turnaround',
    description:
      'Automate the routine parts of engineering — drawing checks, BOM creation and document parsing — so your team spends time on product decisions, not paperwork.',
    bullets: [
      'CAD model and drawing automation',
      'Engineering drawing validation against design standards',
      'BOM extraction and reconciliation from PDFs and DWGs',
      'Spec, datasheet and tender document parsing',
    ],
  },
  {
    icon: Wrench,
    title: 'Predictive Maintenance & Planning',
    tagline: 'Unplanned downtime ↓ 30–40% · planned, not reactive',
    description:
      'Use machine signals and maintenance history to predict failures on critical equipment, cut unplanned downtime and plan spares and shutdowns better.',
    bullets: [
      'Vibration, temperature and current-based monitoring',
      'Failure-mode alerts to maintenance supervisors',
      'Spare-parts and shutdown planning support',
      'Standardised failure-mode library for the plant',
    ],
  },
]

const businessServices = [
  {
    icon: Bot,
    title: 'AI Assistants for Operations',
    tagline: 'Faster answers across SOPs, policies and internal systems.',
    bullets: [
      'Internal knowledge & policy assistants',
      'Workflow and approval helpers',
      'Web, mobile and internal-app access',
    ],
  },
  {
    icon: FileText,
    title: 'Document Intelligence',
    tagline: 'Turn invoices, POs, contracts and forms into clean data.',
    bullets: [
      'Invoice, PO and contract extraction',
      'Form and report processing at scale',
      'Validation and exception handling',
    ],
  },
  {
    icon: BarChart3,
    title: 'AI Analytics & Reporting',
    tagline: 'Reports, summaries and trends without analyst queues.',
    bullets: [
      'Natural-language Q&A on business data',
      'Auto-generated executive summaries',
      'Trend and anomaly highlights',
    ],
  },
  {
    icon: Headphones,
    title: 'AI for Sales & Support',
    tagline: 'Faster responses, better lead and deal coverage.',
    bullets: [
      'Tier-1 support automation',
      'Sales reply and proposal drafting',
      'Lead and account context surfacing',
    ],
  },
  {
    icon: Mail,
    title: 'Email & Inbox Automation',
    tagline: 'Triage, draft and route email at team scale.',
    bullets: [
      'Auto-classification and routing',
      'Draft replies in your voice',
      'Action-item and follow-up tracking',
    ],
  },
  {
    icon: Users,
    title: 'HR & Recruitment AI',
    tagline: 'Screen, summarize and respond — without the bottleneck.',
    bullets: [
      'Resume parsing and shortlisting',
      'Interview note summarization',
      'Policy and onboarding assistants',
    ],
  },
  {
    icon: ShoppingCart,
    title: 'Procurement & Vendor AI',
    tagline: 'Compare quotes, validate POs and track spend smarter.',
    bullets: [
      'Quote and tender comparison',
      'Vendor data extraction & enrichment',
      'Spend analytics and anomaly alerts',
    ],
  },
  {
    icon: Briefcase,
    title: 'Finance & Accounts AI',
    tagline: 'Close faster with AI-assisted reconciliation and reporting.',
    bullets: [
      'Invoice & expense classification',
      'Reconciliation assistants',
      'Variance and audit-flag detection',
    ],
  },
  {
    icon: Megaphone,
    title: 'Marketing & Content AI',
    tagline: 'On-brand content, faster — across channels and formats.',
    bullets: [
      'Campaign copy and ad variations',
      'SEO content drafts and outlines',
      'Brand-voice guardrails',
    ],
  },
  {
    icon: Database,
    title: 'Data Cleansing & Enrichment',
    tagline: 'Clean, dedupe and enrich CRM, ERP and master data.',
    bullets: [
      'Duplicate detection and merge',
      'Address, contact and company enrichment',
      'Master-data normalization',
    ],
  },
  {
    icon: Search,
    title: 'Enterprise Search & Knowledge',
    tagline: 'One AI search across docs, drives, wikis and tickets.',
    bullets: [
      'Unified search with citations',
      'Permission-aware retrieval',
      'Knowledge gap reports',
    ],
  },
  {
    icon: ShieldCheck,
    title: 'Compliance & Risk AI',
    tagline: 'Stay audit-ready with continuous AI checks.',
    bullets: [
      'Contract clause review',
      'Policy adherence checks',
      'Regulatory change monitoring',
    ],
  },
  {
    icon: Languages,
    title: 'Translation & Localization',
    tagline: 'Multilingual customer and internal communication.',
    bullets: [
      'Document and email translation',
      'Multilingual chat and support',
      'Glossary and tone control',
    ],
  },
  {
    icon: Calendar,
    title: 'Workflow & Scheduling AI',
    tagline: 'Coordinate meetings, tasks and approvals automatically.',
    bullets: [
      'Smart meeting scheduling',
      'Task creation from chat & email',
      'Approval routing and reminders',
    ],
  },
]

const transformationServices = [
  {
    title: 'AI Implementation & Consulting',
    description:
      'Identify the right AI use cases for your plant or business, define a practical roadmap and get to a working pilot quickly.',
  },
  {
    title: 'AI Adoption for Teams',
    description:
      'Help engineering, quality, operations and business teams adopt AI in their daily work — with role-based coaching and hands-on practice.',
  },
]

export default function ProfessionalServicesPage() {
  return (
    <main>
      {/* Hero */}
      <section
        className="relative overflow-hidden pt-32 pb-24 bg-cover bg-center"
        style={{ backgroundImage: "url('/services-hero.png')" }}
      >
        {/* Dark overlay for legibility */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-950/85 via-primary-900/75 to-primary-800/70" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white">
            AI Services Built Around
            <br />
            Real Work
          </h1>
          <p className="mt-6 text-lg md:text-xl text-primary-100 max-w-3xl mx-auto leading-relaxed">
            Focused first on manufacturing and engineering — the shop floor, the design office and critical equipment — and extended into business operations where AI saves real time.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-3.5 rounded-lg bg-white text-primary-900 font-semibold hover:bg-primary-50 transition-colors shadow-lg"
            >
              Talk to an Expert
            </Link>
            <Link
              href="/case-studies"
              className="px-8 py-3.5 rounded-lg bg-white/10 backdrop-blur text-white font-semibold border-2 border-white/30 hover:bg-white/20 transition-all"
            >
              See Results
            </Link>
          </div>
        </div>
      </section>

      {/* Section 1 - Manufacturing & Engineering */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Solutions for Engineering & Manufacturing
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Designed around real plant and engineering workflows — quality, productivity, maintenance and design — with measurable improvements in inspection time, OEE, downtime and engineering effort.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {manufacturingServices.map((svc, index) => (
              <div
                key={index}
                className="group rounded-2xl border border-gray-200 dark:border-gray-700 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 p-8 hover:shadow-xl hover:border-primary-300 dark:hover:border-primary-700 transition-all"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-ai flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <svc.icon size={28} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {svc.title}
                </h3>
                <p className="text-sm text-primary-600 dark:text-primary-400 font-semibold mb-3">
                  {svc.tagline}
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-5 leading-relaxed">
                  {svc.description}
                </p>
                <p className="text-xs font-semibold text-gray-900 dark:text-gray-100 uppercase tracking-wide mb-2">
                  What it covers
                </p>
                <ul className="space-y-1.5">
                  {svc.bullets.map((b, idx) => (
                    <li
                      key={idx}
                      className="text-sm text-gray-600 dark:text-gray-400 flex items-start"
                    >
                      <span className="text-primary-500 dark:text-primary-400 mr-2">•</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2 - Business Operations */}
      <section className="py-20 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Solutions for Business Operations
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Lightweight AI for back-office and customer-facing teams — designed to remove repetitive work, surface answers faster and free people for higher-value tasks.
            </p>
          </div>

          <BusinessServicesCarousel />
        </div>
      </section>

      {/* How we engage */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-sm font-semibold tracking-wide uppercase text-primary-600 dark:text-primary-400 mb-3">
              How We Engage
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              From First Conversation to Working Solution
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {transformationServices.map((svc, index) => (
              <div
                key={index}
                className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 p-8"
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {svc.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {svc.description}
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center mt-4 text-sm font-semibold text-primary-600 dark:text-primary-400 hover:underline"
                >
                  Start a conversation
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title={"Find the Right AI Service\nFor Your Business"}
        description="Share your top quality, productivity or operations challenge. We will recommend the right service and a clear next step."
        primaryCTA={{ text: 'Talk to an Expert', href: '/contact' }}
        secondaryCTA={{ text: 'See Case Studies', href: '/case-studies' }}
        showBadge={false}
      />
      <Footer />
    </main>
  )
}
