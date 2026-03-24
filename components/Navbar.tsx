'use client'

import { useState, useEffect, useRef } from 'react'
import { useTheme } from 'next-themes'
import { Moon, Sun, Menu, X, ChevronDown } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { products } from '@/data/products'

export function Navbar() {
  const [mounted, setMounted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [isProductsOpen, setIsProductsOpen] = useState(false)
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsProductsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Link href="/" className="flex items-center space-x-3">
              <Image 
                src="/infodra-logo.png" 
                alt="Infodra AI Logo" 
                width={120} 
                height={40}
                className="h-10 w-auto"
                priority
              />
              <span className="text-xl font-bold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                Infodra AI
              </span>
            </Link>
            <span className="hidden lg:inline text-gray-400 dark:text-gray-600">|</span>
            <span className="hidden lg:inline text-sm text-gray-600 dark:text-gray-400">
              A division of{' '}
              <a
                href="https://www.infodratechnologies.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 dark:text-primary-400 hover:underline font-medium"
              >
                Infodra Technologies
              </a>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400">
              Home
            </Link>
            
            {/* Products Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  setIsProductsOpen(!isProductsOpen)
                }}
                className="flex items-center space-x-1 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 cursor-pointer"
                aria-expanded={isProductsOpen}
                aria-haspopup="true"
              >
                <span>Products</span>
                <ChevronDown size={16} className={`transition-transform duration-200 ${isProductsOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isProductsOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-72 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 py-2 z-[100] pointer-events-auto"
                  role="menu"
                  aria-label="Products menu"
                >
                  <Link
                    href="/products"
                    className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    onClick={() => setIsProductsOpen(false)}
                  >
                    <div className="font-semibold">All Products</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">View our complete product catalog</div>
                  </Link>
                  <div className="border-t border-gray-200 dark:border-gray-700 my-2"></div>
                  <div className="px-4 py-1 text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider">AI Products</div>
                  {products && products.length > 0 ? (
                    products.filter(p => p.category === 'ai').map((product) => 
                      product.externalUrl ? (
                        <a
                          key={product.slug}
                          href={product.externalUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                          onClick={() => setIsProductsOpen(false)}
                        >
                          <div className="flex items-center space-x-2">
                            <span className="text-xl">{product.icon}</span>
                            <span className="font-medium">{product.title}</span>
                          </div>
                        </a>
                      ) : (
                        <Link
                          key={product.slug}
                          href={`/products/${product.slug}`}
                          className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                          onClick={() => setIsProductsOpen(false)}
                        >
                          <div className="flex items-center space-x-2">
                            <span className="text-xl">{product.icon}</span>
                            <span className="font-medium">{product.title}</span>
                          </div>
                        </Link>
                      )
                    )
                  ) : null}
                  <div className="border-t border-gray-200 dark:border-gray-700 my-2"></div>
                  <div className="px-4 py-1 text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider">SaaS Products</div>
                  {products && products.length > 0 ? (
                    products.filter(p => p.category === 'saas').map((product) => 
                      product.externalUrl ? (
                        <a
                          key={product.slug}
                          href={product.externalUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                          onClick={() => setIsProductsOpen(false)}
                        >
                          <div className="flex items-center space-x-2">
                            <span className="text-xl">{product.icon}</span>
                            <span className="font-medium">{product.title}</span>
                          </div>
                        </a>
                      ) : (
                        <Link
                          key={product.slug}
                          href={`/products/${product.slug}`}
                          className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                          onClick={() => setIsProductsOpen(false)}
                        >
                          <div className="flex items-center space-x-2">
                            <span className="text-xl">{product.icon}</span>
                            <span className="font-medium">{product.title}</span>
                          </div>
                        </Link>
                      )
                    )
                  ) : null}
                </div>
              )}
            </div>

            <Link href="/talent" className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400">
              Talent
            </Link>
            <Link href="/solutions" className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400">
              Solutions
            </Link>

            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
              aria-label="Toggle theme"
            >
              {mounted && (theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />)}
            </button>
            <Link
              href="/contact"
              className="px-6 py-2 bg-gradient-ai text-white rounded-lg hover:opacity-90 transition-opacity"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800"
              aria-label="Toggle theme"
            >
              {mounted && (theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />)}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
          <div className="px-4 py-4 space-y-3">
            <Link
              href="/"
              className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            
            {/* Products Expandable */}
            <div>
              <button
                type="button"
                onClick={() => setIsMobileProductsOpen(!isMobileProductsOpen)}
                className="w-full flex items-center justify-between px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
                aria-expanded={isMobileProductsOpen}
              >
                <span>Products</span>
                <ChevronDown size={16} className={`transition-transform duration-200 ${isMobileProductsOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isMobileProductsOpen && (
                <div className="pl-4 mt-2 space-y-2">
                  <Link
                    href="/products"
                    className="block px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
                    onClick={() => {
                      setIsOpen(false)
                      setIsMobileProductsOpen(false)
                    }}
                  >
                    All Products
                  </Link>
                  <div className="px-4 py-1 text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider">AI Products</div>
                  {products && products.length > 0 ? (
                    products.filter(p => p.category === 'ai').map((product) => 
                      product.externalUrl ? (
                        <a
                          key={product.slug}
                          href={product.externalUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
                          onClick={() => {
                            setIsOpen(false)
                            setIsMobileProductsOpen(false)
                          }}
                        >
                          <div className="flex items-center space-x-2">
                            <span>{product.icon}</span>
                            <span>{product.title}</span>
                          </div>
                        </a>
                      ) : (
                        <Link
                          key={product.slug}
                          href={`/products/${product.slug}`}
                          className="block px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
                          onClick={() => {
                            setIsOpen(false)
                            setIsMobileProductsOpen(false)
                          }}
                        >
                          <div className="flex items-center space-x-2">
                            <span>{product.icon}</span>
                            <span>{product.title}</span>
                          </div>
                        </Link>
                      )
                    )
                  ) : null}
                  <div className="px-4 py-1 text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mt-2">SaaS Products</div>
                  {products && products.length > 0 ? (
                    products.filter(p => p.category === 'saas').map((product) => 
                      product.externalUrl ? (
                        <a
                          key={product.slug}
                          href={product.externalUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
                          onClick={() => {
                            setIsOpen(false)
                            setIsMobileProductsOpen(false)
                          }}
                        >
                          <div className="flex items-center space-x-2">
                            <span>{product.icon}</span>
                            <span>{product.title}</span>
                          </div>
                        </a>
                      ) : (
                        <Link
                          key={product.slug}
                          href={`/products/${product.slug}`}
                          className="block px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
                          onClick={() => {
                            setIsOpen(false)
                            setIsMobileProductsOpen(false)
                          }}
                        >
                          <div className="flex items-center space-x-2">
                            <span>{product.icon}</span>
                            <span>{product.title}</span>
                          </div>
                        </Link>
                      )
                    )
                  ) : null}
                </div>
              )}
            </div>
            
            <Link
              href="/talent"
              className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              Talent
            </Link>
            <Link
              href="/solutions"
              className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              Solutions
            </Link>
            
            <Link
              href="/contact"
              className="block px-4 py-2 bg-gradient-ai text-white rounded-lg text-center"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
