'use client'

import { ArrowRight, Sparkles } from 'lucide-react'
import Link from 'next/link'

export function HeroSection() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-primary-50/30 to-accent-50/30 dark:from-gray-900 dark:via-gray-900 dark:to-primary-950/50 pt-24 pb-16">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] -top-48 -left-48 bg-primary-300 dark:bg-primary-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-15 animate-float"></div>
        <div className="absolute w-[500px] h-[500px] top-1/3 -right-48 bg-accent-300 dark:bg-accent-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-15 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute w-[500px] h-[500px] -bottom-48 left-1/3 bg-primary-400 dark:bg-primary-800 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-15 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* AI Neural Network Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg className="absolute w-full h-full opacity-20 dark:opacity-30" viewBox="0 0 1200 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Neural network connections */}
          <g className="animate-pulse" style={{ animationDuration: '4s' }}>
            <line x1="100" y1="150" x2="300" y2="100" stroke="url(#grad1)" strokeWidth="1.5" />
            <line x1="100" y1="150" x2="300" y2="250" stroke="url(#grad1)" strokeWidth="1.5" />
            <line x1="100" y1="350" x2="300" y2="250" stroke="url(#grad1)" strokeWidth="1.5" />
            <line x1="100" y1="350" x2="300" y2="400" stroke="url(#grad1)" strokeWidth="1.5" />
            <line x1="300" y1="100" x2="550" y2="200" stroke="url(#grad1)" strokeWidth="1.5" />
            <line x1="300" y1="250" x2="550" y2="200" stroke="url(#grad1)" strokeWidth="1.5" />
            <line x1="300" y1="250" x2="550" y2="350" stroke="url(#grad1)" strokeWidth="1.5" />
            <line x1="300" y1="400" x2="550" y2="350" stroke="url(#grad1)" strokeWidth="1.5" />
          </g>
          <g className="animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }}>
            <line x1="650" y1="200" x2="900" y2="100" stroke="url(#grad2)" strokeWidth="1.5" />
            <line x1="650" y1="200" x2="900" y2="300" stroke="url(#grad2)" strokeWidth="1.5" />
            <line x1="650" y1="350" x2="900" y2="300" stroke="url(#grad2)" strokeWidth="1.5" />
            <line x1="650" y1="350" x2="900" y2="450" stroke="url(#grad2)" strokeWidth="1.5" />
            <line x1="900" y1="100" x2="1100" y2="200" stroke="url(#grad2)" strokeWidth="1.5" />
            <line x1="900" y1="300" x2="1100" y2="200" stroke="url(#grad2)" strokeWidth="1.5" />
            <line x1="900" y1="300" x2="1100" y2="400" stroke="url(#grad2)" strokeWidth="1.5" />
            <line x1="900" y1="450" x2="1100" y2="400" stroke="url(#grad2)" strokeWidth="1.5" />
          </g>
          {/* Neural nodes - left network */}
          {[
            [100, 150], [100, 350], [300, 100], [300, 250], [300, 400],
            [550, 200], [550, 350],
          ].map(([cx, cy], i) => (
            <circle key={`l${i}`} cx={cx} cy={cy} r="8" fill="url(#grad1)" className="animate-pulse" style={{ animationDuration: `${3 + i * 0.5}s` }} />
          ))}
          {/* Neural nodes - right network */}
          {[
            [650, 200], [650, 350], [900, 100], [900, 300], [900, 450],
            [1100, 200], [1100, 400],
          ].map(([cx, cy], i) => (
            <circle key={`r${i}`} cx={cx} cy={cy} r="8" fill="url(#grad2)" className="animate-pulse" style={{ animationDuration: `${3.5 + i * 0.4}s` }} />
          ))}
          {/* Gradients */}
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6366f1" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
            <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
          </defs>
        </svg>

        {/* Floating particles */}
        {[
          { left: '10%', top: '20%', size: 6, delay: '0s', duration: '6s' },
          { left: '20%', top: '60%', size: 4, delay: '1s', duration: '8s' },
          { left: '35%', top: '30%', size: 7, delay: '2s', duration: '7s' },
          { left: '50%', top: '70%', size: 5, delay: '0.5s', duration: '9s' },
          { left: '65%', top: '25%', size: 6, delay: '1.5s', duration: '6s' },
          { left: '75%', top: '55%', size: 4, delay: '3s', duration: '8s' },
          { left: '85%', top: '35%', size: 6, delay: '0.8s', duration: '7s' },
          { left: '90%', top: '65%', size: 5, delay: '2.5s', duration: '9s' },
          { left: '15%', top: '45%', size: 5, delay: '1.2s', duration: '7.5s' },
          { left: '45%', top: '15%', size: 6, delay: '0.3s', duration: '8.5s' },
          { left: '70%', top: '75%', size: 4, delay: '2s', duration: '6.5s' },
          { left: '55%', top: '40%', size: 5, delay: '1.8s', duration: '9s' },
        ].map((p, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gradient-to-br from-primary-400 to-accent-400 dark:from-primary-400 dark:to-accent-400 opacity-40 animate-float"
            style={{
              left: p.left,
              top: p.top,
              width: `${p.size}px`,
              height: `${p.size}px`,
              animationDelay: p.delay,
              animationDuration: p.duration,
            }}
          />
        ))}

        {/* Orbiting rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]">
          <div className="absolute inset-0 rounded-full border-2 border-primary-300/20 dark:border-primary-500/20 animate-spin" style={{ animationDuration: '25s' }} />
          <div className="absolute inset-8 rounded-full border-2 border-accent-300/20 dark:border-accent-500/20 animate-spin" style={{ animationDuration: '20s', animationDirection: 'reverse' }} />
          <div className="absolute inset-16 rounded-full border-2 border-primary-400/15 dark:border-primary-400/20 animate-spin" style={{ animationDuration: '30s' }} />
        </div>
      </div>

      {/* Content */}
      <div className="relative max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-semibold mb-5 border border-primary-200 dark:border-primary-800">
            <Sparkles size={16} />
            <span>Engineering-Led AI Platform</span>
          </div>

          {/* Title - Two Lines */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-[1.4]">
            <span className="block bg-gradient-to-r from-gray-900 via-primary-800 to-accent-800 dark:from-white dark:via-primary-300 dark:to-accent-300 bg-clip-text text-transparent mb-4 pb-2">
              AI Platforms & Engineering Talent
            </span>
            <span className="block bg-gradient-to-r from-gray-900 via-primary-800 to-accent-800 dark:from-white dark:via-primary-300 dark:to-accent-300 bg-clip-text text-transparent pb-2">
              for Modern Enterprises
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-[700px] mx-auto leading-relaxed">
            Infodra AI delivers intelligent SaaS platforms and engineering expertise to help organizations build scalable AI systems, automate workflows, and accelerate digital innovation.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <Link
              href="/products"
              className="group w-full sm:w-auto px-10 py-4 bg-gradient-ai text-white rounded-xl font-semibold text-lg hover:opacity-90 transition-all hover:scale-105 flex items-center justify-center space-x-2 shadow-xl shadow-primary-500/20"
            >
              <span>Explore AI & SaaS Products</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/talent"
              className="w-full sm:w-auto px-10 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-xl font-semibold text-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all border-2 border-gray-200 dark:border-gray-700 hover:scale-105 shadow-lg"
            >
              Deploy Engineering Talent
            </Link>
          </div>

          {/* Trust Indicator */}
          <p className="text-sm text-gray-500 dark:text-gray-400 font-normal">
            AI Platforms • Software Engineering • Global Technical Talent
          </p>
        </div>
      </div>
    </section>
  )
}
