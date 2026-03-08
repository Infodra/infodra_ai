import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import { Navbar } from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Infodra AI - AI Engineering & Technical Talent for Modern Enterprises',
  description: 'Infodra provides AI engineers, software developers, and engineering specialists who help organizations build intelligent systems, scalable platforms, and advanced automation solutions.',
  keywords: ['AI Engineering', 'Technical Talent', 'Software Development', 'Machine Learning', 'Cloud Infrastructure', 'Enterprise Solutions', 'CAD Engineering'],
  icons: {
    icon: '/infodra-logo.png',
    shortcut: '/infodra-logo.png',
    apple: '/infodra-logo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <Navbar />
          <main className="pt-[70px]">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
