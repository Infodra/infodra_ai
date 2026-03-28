'use client'

import { ArrowRight, Rocket, Shield, Zap, Users } from 'lucide-react'
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
  title = "Build Intelligent Systems\nWith Infodra",
  description = "Partner with Infodra to accelerate your AI initiatives, digital transformation, and engineering projects.",
  primaryCTA = { text: "Deploy AI-ML Talent", href: "mailto:connect@infodratech.com" },
  secondaryCTA = { text: "Contact Us", href: "/contact" },
  showBadge = true,
  showTrustIndicators = true,
}: CTASectionProps) {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-primary-600 via-primary-700 to-accent-700 dark:from-primary-900 dark:via-primary-950 dark:to-accent-950 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 -top-48 -left-48 bg-white/10 rounded-full filter blur-3xl"></div>
        <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-accent-400/20 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {showBadge && (
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium mb-8">
            <Rocket size={16} />
            <span>Transform Your Engineering Team</span>
          </div>
        )}

        <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white whitespace-pre-line">
          {title}
        </h2>

        <p className="text-xl text-primary-100 mb-12 max-w-3xl mx-auto leading-relaxed">
          {description}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={primaryCTA.href}
            className="group px-8 py-4 bg-white text-primary-700 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all hover:scale-105 flex items-center space-x-2 shadow-xl"
          >
            <span>{primaryCTA.text}</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          {secondaryCTA && (
            <a
              href={secondaryCTA.href}
              target={secondaryCTA.href.startsWith('http') ? '_blank' : undefined}
              rel={secondaryCTA.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="px-8 py-4 bg-transparent text-white rounded-lg font-semibold text-lg hover:bg-white/10 transition-all border-2 border-white hover:scale-105"
            >
              {secondaryCTA.text}
            </a>
          )}
        </div>

        {/* Trust indicators */}
        {showTrustIndicators && (
          <div className="mt-16 flex flex-wrap justify-center items-center gap-8 text-white/80">
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
