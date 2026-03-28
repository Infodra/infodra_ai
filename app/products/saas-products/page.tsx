import { Metadata } from 'next'
import { ProductsSection } from '@/components/ProductsSection'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'SaaS Products | Infodra AI - Business Software Solutions',
  description:
    'Explore Infodra SaaS Products - BiZlead Database for B2B lead generation and StaffTrack for GPS-based workforce attendance tracking.',
  keywords: [
    'SaaS products',
    'lead generation',
    'B2B database',
    'workforce tracking',
    'attendance management',
    'GPS tracking',
    'business software',
  ],
}

export default function SaaSProductsPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-purple-50/30 to-pink-50/30 dark:from-gray-900 dark:via-gray-900 dark:to-purple-950/50 pt-24 pb-16">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-[500px] h-[500px] -top-48 -left-48 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-15 animate-float"></div>
          <div className="absolute w-[500px] h-[500px] top-1/3 -right-48 bg-pink-300 dark:bg-pink-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-15 animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute w-[500px] h-[500px] -bottom-48 left-1/3 bg-purple-400 dark:bg-purple-800 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-15 animate-float" style={{ animationDelay: '4s' }}></div>
        </div>

        {/* Content */}
        <div className="relative max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            {/* Title */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-[1.4]">
              <span className="block bg-gradient-to-r from-gray-900 via-primary-800 to-accent-800 dark:from-white dark:via-primary-300 dark:to-accent-300 bg-clip-text text-transparent mb-4 pb-2">
                SaaS Products
              </span>
              <span className="block text-3xl sm:text-4xl lg:text-5xl bg-gradient-to-r from-gray-900 via-primary-800 to-accent-800 dark:from-white dark:via-primary-300 dark:to-accent-300 bg-clip-text text-transparent pb-2">
                Ready-to-Use Business Platforms
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-[700px] mx-auto leading-relaxed">
              Powerful SaaS platforms for lead generation, workforce management, and streamlined business operations — ready to deploy today.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
              <a
                href="#products"
                className="group w-full sm:w-auto px-10 py-4 bg-gradient-ai text-white rounded-xl font-semibold text-lg hover:opacity-90 transition-all hover:scale-105 flex items-center justify-center space-x-2 shadow-xl shadow-primary-500/20"
              >
                <span>Explore SaaS Products</span>
              </a>
              <a
                href="/contact"
                className="w-full sm:w-auto px-10 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-xl font-semibold text-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all border-2 border-gray-200 dark:border-gray-700 hover:scale-105 shadow-lg"
              >
                Schedule Demo
              </a>
            </div>

            {/* Trust Indicator */}
            <p className="text-sm text-gray-500 dark:text-gray-400 font-normal">
              B2B Lead Generation • Workforce Tracking • Attendance Management
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid Section - SaaS only */}
      <ProductsSection category="saas" />

      {/* Stats Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Why Choose Infodra SaaS?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">Million+</div>
              <p className="text-gray-800 dark:text-gray-200 font-semibold mb-2">Business Records</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                Access verified B2B contact information instantly
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">98%+</div>
              <p className="text-gray-800 dark:text-gray-200 font-semibold mb-2">Data Accuracy</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                Verified and updated business data you can trust
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">24/7</div>
              <p className="text-gray-800 dark:text-gray-200 font-semibold mb-2">Always Available</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                Cloud-hosted platforms with reliable uptime
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-primary-900 to-accent-900 text-white py-20 overflow-hidden mx-4 sm:mx-6 lg:mx-8 my-20 rounded-3xl">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Ready to Scale Your Business?
          </h2>
          <p className="text-lg md:text-xl text-primary-50 mb-10 max-w-2xl mx-auto leading-relaxed">
            Get started with our SaaS products and streamline your lead generation and workforce management today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/contact"
              className="bg-white text-primary-600 px-8 py-3.5 rounded-lg font-semibold text-lg hover:bg-primary-50 hover:shadow-2xl active:shadow-lg transition-all duration-200 shadow-lg inline-block"
            >
              Get started
            </a>
            <a
              href="https://wa.me/918148146785"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-3.5 rounded-lg font-semibold text-lg hover:bg-primary-400 hover:border-white active:bg-primary-600 transition-all duration-200 inline-block"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
