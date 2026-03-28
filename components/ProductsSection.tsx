'use client'

import Link from 'next/link'
import { products as allProducts } from '@/data/products'

interface ProductsSectionProps {
  category?: 'ai' | 'saas'
}

export function ProductsSection({ category }: ProductsSectionProps) {
  // Defensive check for products
  if (!allProducts || allProducts.length === 0) {
    return (
      <section id="products" className="py-24 bg-gradient-to-br from-gray-50 via-white to-primary-50 dark:from-gray-950 dark:via-gray-900 dark:to-primary-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Innovation Platforms by Infodra
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Products coming soon...
            </p>
          </div>
        </div>
      </section>
    )
  }

  const aiProducts = (!category || category === 'ai') ? allProducts.filter(p => p.category === 'ai').map(product => ({
    icon: product.icon,
    name: product.title,
    description: product.shortDescription,
    features: product.features.slice(0, 4).map(f => f.title),
    slug: product.slug
  })) : []

  const saasProducts = (!category || category === 'saas') ? allProducts.filter(p => p.category === 'saas').map(product => ({
    icon: product.icon,
    name: product.title,
    description: product.shortDescription,
    features: product.features.slice(0, 4).map(f => f.title),
    slug: product.slug
  })) : []

  const renderProductCard = (product: typeof aiProducts[0], index: number) => (
    <div
      key={index}
      className="group bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700 hover:border-primary-200 dark:hover:border-primary-700 flex flex-col"
    >
      {/* Header with gradient */}
      <div className="bg-gradient-to-r from-primary-50 to-accent-50 dark:from-primary-950 dark:to-accent-950 p-8 text-center border-b border-primary-100 dark:border-primary-800 group-hover:from-primary-100 group-hover:to-accent-100 dark:group-hover:from-primary-900 dark:group-hover:to-accent-900 transition">
        <div className="text-6xl mb-4 transition-transform group-hover:scale-110 duration-300">
          {product.icon}
        </div>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white whitespace-pre-line">
          {product.name}
        </h3>
      </div>

      {/* Content */}
      <div className="p-6 space-y-6 flex flex-col flex-1">
        {/* Description */}
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed min-h-[60px]">
          {product.description}
        </p>

        {/* Features */}
        <div>
          <h4 className="font-semibold text-gray-900 dark:text-white mb-3 text-sm uppercase tracking-wide text-primary-600 dark:text-primary-400">
            Key Features
          </h4>
          <ul className="space-y-2.5">
            {product.features.slice(0, 4).map((feature, idx) => (
              <li
                key={idx}
                className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2.5"
              >
                <span className="text-primary-500 dark:text-primary-400 font-bold flex-shrink-0 mt-0.5">→</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA Button */}
        <Link
          href={`/products/${product.slug}`}
          className="block w-full bg-gradient-to-r from-primary-600 to-accent-600 dark:from-primary-500 dark:to-accent-500 text-white text-center py-3 rounded-lg hover:shadow-lg active:shadow-md transition-all duration-200 font-semibold group-hover:from-primary-700 group-hover:to-accent-700 mt-auto"
        >
          Learn More →
        </Link>
      </div>
    </div>
  )

  return (
    <section id="products" className="py-24 bg-gradient-to-br from-gray-50 via-white to-primary-50 dark:from-gray-950 dark:via-gray-900 dark:to-primary-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* AI Platforms */}
        {aiProducts.length > 0 && (
          <>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                AI Platforms
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Intelligent AI-powered platforms designed to automate workflows, break language barriers, and unlock new growth opportunities.
              </p>
            </div>

            <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 ${saasProducts.length > 0 ? 'mb-24' : ''}`}>
              {aiProducts.map((product, index) => renderProductCard(product, index))}
            </div>
          </>
        )}

        {/* SaaS Products */}
        {saasProducts.length > 0 && (
          <>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                SaaS Products
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Ready-to-use SaaS platforms for lead generation, workforce management, and business operations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {saasProducts.map((product, index) => renderProductCard(product, index))}
            </div>
          </>
        )}
      </div>
    </section>
  )
}
