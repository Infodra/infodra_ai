'use client'

import { Car, TrendingUp, Bot, UserCheck, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export function ProductsSection() {
  const products = [
    {
      icon: Car,
      name: 'ParkAlert',
      description: 'Smart parking management platform with real-time availability tracking and predictive analytics.',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: TrendingUp,
      name: 'BizLead',
      description: 'AI-powered lead discovery and business intelligence platform for identifying high-value prospects.',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: Bot,
      name: 'AI Assistant',
      description: 'Enterprise AI automation assistants that streamline workflows and productivity.',
      gradient: 'from-indigo-500 to-purple-500',
    },
    {
      icon: UserCheck,
      name: 'StaffTrack',
      description: 'Remote workforce attendance and productivity tracking platform with geo-location validation and workforce analytics.',
      gradient: 'from-emerald-500 to-teal-500',
    },
  ]

  return (
    <section id="products" className="py-24 bg-gradient-to-br from-gray-50 via-white to-primary-50 dark:from-gray-950 dark:via-gray-900 dark:to-primary-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Innovation Platforms by Infodra
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            In addition to engineering services, Infodra develops intelligent SaaS platforms designed to solve modern operational challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-transparent transition-all hover:scale-105 hover:shadow-2xl"
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-10 transition-opacity`}></div>
              
              <div className="relative p-8">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${product.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <product.icon size={32} className="text-white" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                  {product.name}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {product.description}
                </p>
                
                <Link
                  href={`#${product.name.toLowerCase()}`}
                  className="inline-flex items-center space-x-2 text-primary-600 dark:text-primary-400 font-semibold group-hover:gap-3 transition-all"
                >
                  <span>Learn More</span>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
