'use client'

import Link from 'next/link'
import Image from 'next/image'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-3">
              <a href="https://www.infodratech.com" target="_blank" rel="noopener noreferrer">
                <Image 
                  src="/CompanyNameLogo.png" 
                  alt="Infodra AI Logo" 
                  width={200} 
                  height={50}
                  className="h-12 w-auto"
                />
              </a>
            </div>
            <p className="text-gray-400 mb-4 max-w-md leading-relaxed">
              Infodra AI Platform - A technology ecosystem by Infodra Technologies Pvt Ltd. 
              Providing AI engineers, software developers, and engineering specialists for modern businesses.
            </p>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-3">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products/saas-products" className="hover:text-primary-400 transition-colors">
                  All SaaS Products
                </Link>
              </li>
              <li>
                <Link href="/products/bizlead-database" className="hover:text-primary-400 transition-colors">
                  BiZlead Database
                </Link>
              </li>
              <li>
                <Link href="/products/stafftrack" className="hover:text-primary-400 transition-colors">
                  StaffTrack
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="hover:text-primary-400 transition-colors">
                  AI Platforms (Case Studies)
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-3">Company</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://infodratech.com/resourcing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-400 transition-colors"
                >
                  Engineering Services
                </a>
              </li>
              <li>
                <a
                  href="https://infodratech.com/digital-solutions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-400 transition-colors"
                >
                  Digital Solutions
                </a>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary-400 transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Infodra Technologies Private Limited. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <Link href="/privacy" className="hover:text-primary-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-primary-400 transition-colors">
                Terms of Service
              </Link>
              <a
                href="mailto:connect@infodratech.com"
                className="hover:text-primary-400 transition-colors"
              >
                connect@infodratech.com
              </a>
            </div>
          </div>
          <div className="mt-4 text-center text-gray-500 text-sm">
            <a
              href="https://infodratech.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-400 transition-colors"
            >
              infodratech.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
