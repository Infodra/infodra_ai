'use client'

import { ArrowRight, Factory, Shield, Zap, Users } from 'lucide-react'
import Link from 'next/link'

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryCTA?: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  showBadge?: boolean;
  showTrustIndicators?: boolean;
}

export function CTASection({
  title = "See What AI Can Do\nIn Your Plant",
  description = "Share your top quality, productivity or engineering challenge. We will show how AI can solve it — using examples from real factories, not slide decks.",
  primaryCTA = { text: "Request a Demo", href: "/contact" },
  secondaryCTA = { text: "Talk to an Expert", href: "/contact" },
  showBadge = true,
  showTrustIndicators = false,
}: CTASectionProps) {
  return (
    <section
      id="contact"
      className="relative py-24 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 overflow-hidden border-t border-primary-700"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950/30 via-transparent to-navy-950/60 pointer-events-none" />
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-accent-600/15 rounded-full blur-3xl" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {showBadge && (
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-white/10 border border-white/15 text-white text-xs font-bold tracking-[0.18em] uppercase mb-8 backdrop-blur-sm">
            <Factory size={14} />
            <span>Built for Manufacturers, by Engineers</span>
          </div>
        )}

        <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white whitespace-pre-line tracking-tight leading-[1.1]">
          {title}
        </h2>

        <p className="text-lg md:text-xl text-steel-300 mb-10 max-w-3xl mx-auto leading-relaxed">
          {description}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href={primaryCTA.href} className="btn-primary group text-base">
            <span>{primaryCTA.text}</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          {secondaryCTA && (
            <a
              href={secondaryCTA.href}
              target={secondaryCTA.href.startsWith('http') ? '_blank' : undefined}
              rel={secondaryCTA.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="btn-secondary-on-dark text-base"
            >
              {secondaryCTA.text}
            </a>
          )}
        </div>

        {showTrustIndicators && (
          <div className="mt-16 flex flex-wrap justify-center items-center gap-8 text-steel-300">
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5" />
              <span>Enterprise Security</span>
            </div>
            <div className="flex items-center space-x-2">
              <Zap className="w-5 h-5" />
              <span>99.9% Uptime</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5" />
              <span>24/7 Support</span>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
