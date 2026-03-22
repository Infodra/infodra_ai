"use client";

import Image from 'next/image';

interface HeroProps {
  title: string;
  description: string;
  primaryCTA: {
    text: string;
    href: string;
    subtext?: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  backgroundImage?: string;
  heroImage?: string;
  colorScheme?: {
    bg: string;
    orb1: string;
    orb2: string;
    orb3: string;
  };
}

export function Hero({
  title,
  description,
  primaryCTA,
  secondaryCTA,
  backgroundImage,
  heroImage,
  colorScheme,
}: HeroProps) {
  const colors = colorScheme || {
    bg: 'from-white via-cyan-50/30 to-blue-50/30 dark:from-gray-900 dark:via-gray-900 dark:to-cyan-950/50',
    orb1: 'bg-cyan-300 dark:bg-cyan-900',
    orb2: 'bg-blue-300 dark:bg-blue-900',
    orb3: 'bg-cyan-400 dark:bg-cyan-800'
  };

  return (
    <section className={`relative flex items-center justify-center overflow-hidden bg-gradient-to-br ${colors.bg} pt-24 pb-16`}>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute w-[500px] h-[500px] -top-48 -left-48 ${colors.orb1} rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-15 animate-float`}></div>
        <div className={`absolute w-[500px] h-[500px] top-1/3 -right-48 ${colors.orb2} rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-15 animate-float`} style={{ animationDelay: '2s' }}></div>
        <div className={`absolute w-[500px] h-[500px] -bottom-48 left-1/3 ${colors.orb3} rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-15 animate-float`} style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Content */}
      <div className={`relative max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 ${heroImage ? '' : 'text-center'}`}>
        <div className={`animate-fade-in ${heroImage ? 'flex flex-col lg:flex-row items-center gap-10' : ''}`}>
          <div className={heroImage ? 'lg:w-1/2 text-center lg:text-left' : ''}>
            {/* Title */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-[1.4]">
              <span className="block bg-gradient-to-r from-gray-900 via-primary-800 to-accent-800 dark:from-white dark:via-primary-300 dark:to-accent-300 bg-clip-text text-transparent pb-2">
                {title}
              </span>
            </h1>

            {/* Description */}
            <p className={`text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed ${heroImage ? '' : 'max-w-[700px] mx-auto'}`}>
              {description}
            </p>

            {/* CTA Buttons */}
            <div className={`flex flex-col sm:flex-row items-center gap-4 mb-6 ${heroImage ? 'lg:justify-start justify-center' : 'justify-center'}`}>
              <a
                href={primaryCTA.href}
                target={primaryCTA.href.startsWith('http') ? '_blank' : undefined}
                rel={primaryCTA.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group w-full sm:w-auto px-10 py-4 bg-gradient-ai text-white rounded-xl font-semibold text-lg hover:opacity-90 transition-all hover:scale-105 flex items-center justify-center space-x-2 shadow-xl shadow-primary-500/20"
              >
                <span>{primaryCTA.text}</span>
              </a>
              {secondaryCTA && (
                <a
                  href={secondaryCTA.href}
                  target={secondaryCTA.href.startsWith('http') ? '_blank' : undefined}
                  rel={secondaryCTA.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="w-full sm:w-auto px-10 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-xl font-semibold text-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all border-2 border-gray-200 dark:border-gray-700 hover:scale-105 shadow-lg"
                >
                  {secondaryCTA.text}
                </a>
              )}
            </div>

            {/* Subtext if provided */}
            {primaryCTA.subtext && (
              <p className="text-sm text-gray-500 dark:text-gray-400 font-normal">
                {primaryCTA.subtext}
              </p>
            )}
          </div>

          {/* Hero Image */}
          {heroImage && (
            <div className="lg:w-1/2 flex justify-center">
              <Image
                src={heroImage}
                alt={title}
                width={550}
                height={400}
                className="rounded-2xl shadow-2xl w-full h-auto max-w-[550px]"
                priority
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
