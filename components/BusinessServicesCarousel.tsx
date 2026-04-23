'use client'

import { useEffect, useRef, useState } from 'react'
import {
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
  ChevronLeft,
  ChevronRight,
  LucideIcon,
} from 'lucide-react'

interface BusinessService {
  icon: LucideIcon
  title: string
  tagline: string
  bullets: string[]
}

const businessServices: BusinessService[] = [
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

export function BusinessServicesCarousel() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [paused, setPaused] = useState(false)

  const scrollByCard = (dir: 1 | -1) => {
    const el = trackRef.current
    if (!el) return
    const card = el.querySelector<HTMLElement>('[data-card]')
    const step = (card?.offsetWidth ?? 320) + 24
    el.scrollBy({ left: step * dir, behavior: 'smooth' })
  }

  useEffect(() => {
    if (paused) return
    const id = setInterval(() => {
      const el = trackRef.current
      if (!el) return
      const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 4
      if (atEnd) {
        el.scrollTo({ left: 0, behavior: 'smooth' })
      } else {
        scrollByCard(1)
      }
    }, 3500)
    return () => clearInterval(id)
  }, [paused])

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <button
        type="button"
        aria-label="Previous"
        onClick={() => scrollByCard(-1)}
        className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 w-11 h-11 items-center justify-center rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-md hover:bg-primary-50 dark:hover:bg-gray-700 hover:border-primary-300 transition-all"
      >
        <ChevronLeft size={22} className="text-gray-700 dark:text-gray-200" />
      </button>

      <button
        type="button"
        aria-label="Next"
        onClick={() => scrollByCard(1)}
        className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 w-11 h-11 items-center justify-center rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-md hover:bg-primary-50 dark:hover:bg-gray-700 hover:border-primary-300 transition-all"
      >
        <ChevronRight size={22} className="text-gray-700 dark:text-gray-200" />
      </button>

      <div
        ref={trackRef}
        className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scroll-smooth [scrollbar-width:thin]"
      >
        {businessServices.map((svc, index) => {
          const Icon = svc.icon
          return (
            <div
              key={index}
              data-card
              className="snap-start flex-shrink-0 w-[280px] sm:w-[320px] rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-6 hover:shadow-lg hover:border-primary-300 dark:hover:border-primary-700 transition-all"
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-ai flex items-center justify-center mb-4">
                <Icon size={20} className="text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                {svc.title}
              </h3>
              <p className="text-xs text-primary-600 dark:text-primary-400 font-semibold mb-3">
                {svc.tagline}
              </p>
              <ul className="space-y-1">
                {svc.bullets.map((b, idx) => (
                  <li
                    key={idx}
                    className="text-xs text-gray-600 dark:text-gray-400 flex items-start"
                  >
                    <span className="text-primary-500 dark:text-primary-400 mr-2">•</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>
    </div>
  )
}
