'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    {
      label: 'Technology Areas',
      href: '#services',
      dropdown: [
        { label: 'Digital Workplace', href: '#services' },
        { label: 'Hybrid Cloud Services', href: '#services' },
        { label: 'NextGen Network', href: '#services' },
        { label: 'Cybersecurity', href: '#services' },
      ],
    },
    {
      label: 'Support Models',
      href: '#services',
      dropdown: [
        { label: 'Field Services', href: '#services' },
        { label: 'Staffing & Professional Services', href: '#services' },
        { label: 'Managed Services', href: '#services' },
      ],
    },
    { label: 'About Us', href: '#about' },
    { label: 'Careers', href: '#careers' },
  ]

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setMobileMenuOpen(false)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10">
              <Image
                src="https://www.ovationwps.com/Ovationwps.svg"
                alt="Ovation Workplace Services"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-xl font-bold text-gray-900 group-hover:text-[#b30920] transition-colors">
              Ovation WPS
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.dropdown && setOpenDropdown(link.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  onClick={() => link.href && scrollToSection(link.href.replace('#', ''))}
                  className="flex items-center gap-1 text-gray-700 hover:text-[#b30920] transition-colors font-medium"
                >
                  {link.label}
                  {link.dropdown && <ChevronDown className="w-4 h-4" />}
                </button>

                {link.dropdown && (
                  <AnimatePresence>
                    {openDropdown === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden"
                      >
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.label}
                            href={item.href}
                            className="block px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#b30920] transition-colors"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className="px-6 py-2.5 bg-[#b30920] text-white rounded-lg font-semibold hover:bg-[#8a0719] transition-all duration-300 hover:scale-105 shadow-lg shadow-[#b30920]/20"
            >
              CONTACT US
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-gray-200 mt-4 pb-4"
            >
              {navLinks.map((link) => (
                <div key={link.label} className="py-2">
                  <button
                    onClick={() => {
                      if (link.href) scrollToSection(link.href.replace('#', ''))
                      if (link.dropdown) setOpenDropdown(openDropdown === link.label ? null : link.label)
                    }}
                    className="flex items-center justify-between w-full px-4 py-2 text-gray-700 hover:text-[#b30920] transition-colors font-medium"
                  >
                    {link.label}
                    {link.dropdown && <ChevronDown className="w-4 h-4" />}
                  </button>
                  {link.dropdown && openDropdown === link.label && (
                    <div className="pl-6 mt-2 space-y-1">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          className="block px-4 py-2 text-sm text-gray-600 hover:text-[#b30920] transition-colors"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full mt-4 mx-4 px-6 py-2.5 bg-[#b30920] text-white rounded-lg font-semibold hover:bg-[#8a0719] transition-colors"
              >
                CONTACT US
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
