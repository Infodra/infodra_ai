'use client'

import Link from 'next/link'
import Image from 'next/image'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <Image 
                src="/infodra-logo.png" 
                alt="Infodra AI Logo" 
                width={120} 
                height={40}
                className="h-10 w-auto"
              />
              <span className="text-2xl font-bold text-white">Infodra AI</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Infodra AI Platform - A technology ecosystem by Infodra Technologies Pvt Ltd. 
              Providing AI engineers, software developers, and engineering specialists for modern businesses.
            </p>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Products</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#products" className="hover:text-primary-400 transition-colors">
                  ParkAlert
                </Link>
              </li>
              <li>
                <Link href="#products" className="hover:text-primary-400 transition-colors">
                  BizLead
                </Link>
              </li>
              <li>
                <Link href="#products" className="hover:text-primary-400 transition-colors">
                  AI Assistant
                </Link>
              </li>
              <li>
                <Link href="#products" className="hover:text-primary-400 transition-colors">
                  StaffTrack
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#talent" className="hover:text-primary-400 transition-colors">
                  Engineering Services
                </Link>
              </li>
              <li>
                <Link href="#technology" className="hover:text-primary-400 transition-colors">
                  Technology
                </Link>
              </li>
              <li>
                <Link href="#industries" className="hover:text-primary-400 transition-colors">
                  Industries
                </Link>
              </li>
              <li>
                <a
                  href="https://infodratechnologies.com/about"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-400 transition-colors"
                >
                  About Infodra
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-gray-800">
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
                href="mailto:connect@infodra.ai"
                className="hover:text-primary-400 transition-colors"
              >
                connect@infodra.ai
              </a>
            </div>
          </div>
          <div className="mt-4 text-center text-gray-500 text-sm">
            <a
              href="https://infodratechnologies.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-400 transition-colors"
            >
              infodratechnologies.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
