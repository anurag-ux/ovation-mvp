'use client'

import { useEffect, useState, useRef } from 'react'
import { Menu, X as CloseIcon, ChevronDown } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
      setOpenDropdown(null)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false)
        setOpenMobileDropdown(null)
      }
      
      Object.values(dropdownRefs.current).forEach((ref) => {
        if (ref && !ref.contains(event.target as Node)) {
          setOpenDropdown(null)
        }
      })
    }

    if (isMobileMenuOpen || openDropdown) {
      document.addEventListener('mousedown', handleClickOutside)
      if (isMobileMenuOpen) {
        document.body.style.overflow = 'hidden'
      }
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen, openDropdown])

  // Close menu on ESC key
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        if (isMobileMenuOpen) {
          setIsMobileMenuOpen(false)
          setOpenMobileDropdown(null)
        }
        setOpenDropdown(null)
      }
    }

    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [isMobileMenuOpen])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setIsMobileMenuOpen(false)
      setOpenMobileDropdown(null)
      setOpenDropdown(null)
    }
  }

  const navLinks = [
    { label: 'Home', id: 'hero', type: 'link' },
    {
      label: 'About Us',
      id: 'about',
      type: 'dropdown',
      items: [{ label: 'Leadership', id: 'about' }],
    },
    {
      label: 'Technology Areas',
      id: 'services',
      type: 'dropdown',
      items: [
        { label: 'Digital Workplace', id: 'services' },
        { label: 'Hybrid Cloud Services', id: 'services' },
        { label: 'NextGen Network', id: 'services' },
        { label: 'Cybersecurity', id: 'services' },
      ],
    },
    {
      label: 'Support Models',
      id: 'services',
      type: 'dropdown',
      items: [
        { label: 'Field Services', id: 'services' },
        { label: 'Staffing & Professional Services', id: 'services' },
        { label: 'Managed Services', id: 'services' },
      ],
    },
    { label: 'Vantage', id: 'services', type: 'link', icon: 'https://www.ovationwps.com/vantage.svg' },
    { label: 'Staffing', id: 'services', type: 'link' },
    { label: 'Careers', id: 'footer', type: 'link' },
    { label: 'Ovation HR', id: 'footer', type: 'link', icon: 'https://www.ovationwps.com/vantage.svg' },
  ]

  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label)
  }

  const toggleMobileDropdown = (label: string) => {
    setOpenMobileDropdown(openMobileDropdown === label ? null : label)
  }

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'glass-effect shadow-2xl shadow-brand-red/20 backdrop-blur-xl'
          : 'bg-dark-bg/95 backdrop-blur-sm'
      }`}
      role="banner"
    >
      {/* Main Navigation */}
      <div className="container mx-auto px-4 py-3 md:py-4">
        <div className="flex items-center justify-between">
          {/* Logo with Animation */}
          <Link
            href="/"
            className="flex items-center group focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2 focus:ring-offset-dark-bg rounded-lg p-1 -m-1 transition-all duration-300 hover:scale-105"
            aria-label="Ovation Workplace Services - Home"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
          >
            <Image
              src="/logos/ovation-logo.svg"
              alt="Ovation Workplace Services"
              width={180}
              height={50}
              className="h-8 md:h-10 w-auto group-hover:opacity-80 transition-all duration-300"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex gap-1 items-center" aria-label="Main navigation">
            {navLinks.map((link, index) => {
              if (link.type === 'dropdown' && link.items) {
                return (
                  <div
                    key={link.label}
                    ref={(el) => (dropdownRefs.current[link.label] = el)}
                    className="relative"
                    onMouseEnter={() => setOpenDropdown(link.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button
                      className="relative px-4 py-2.5 text-sm font-medium text-gray-300 hover:text-white transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2 focus:ring-offset-dark-bg rounded-lg flex items-center gap-1 hover:bg-dark-card/50"
                      aria-label={`${link.label} menu`}
                      aria-expanded={openDropdown === link.label}
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      {link.label}
                      <ChevronDown
                        size={14}
                        className={`transition-all duration-300 ${
                          openDropdown === link.label ? 'rotate-180 text-brand-red' : ''
                        }`}
                      />
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-red group-hover:w-full transition-all duration-300"></span>
                    </button>

                    {/* Premium Dropdown Menu */}
                    {openDropdown === link.label && (
                      <div className="absolute top-full left-0 mt-2 w-72 bg-dark-card/95 backdrop-blur-xl border border-dark-border rounded-xl shadow-2xl shadow-brand-red/20 overflow-hidden animate-fade-in">
                        <div className="py-2">
                          {link.items.map((item, index) => (
                            <button
                              key={index}
                              onClick={() => scrollToSection(item.id)}
                              className="w-full text-left px-5 py-3.5 text-sm text-gray-300 hover:text-brand-red hover:bg-dark-surface/50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-inset group relative"
                              aria-label={`Navigate to ${item.label}`}
                              style={{ animationDelay: `${index * 50}ms` }}
                            >
                              <span className="relative z-10 group-hover:translate-x-2 transition-transform inline-block flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-brand-red rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                {item.label}
                              </span>
                              <span className="absolute left-0 top-0 w-0 h-full bg-brand-red/10 group-hover:w-full transition-all duration-300"></span>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )
              }

              return (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.id)}
                  className="relative px-4 py-2.5 text-sm font-medium text-gray-300 hover:text-white transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2 focus:ring-offset-dark-bg rounded-lg flex items-center gap-2 hover:bg-dark-card/50"
                  aria-label={`Navigate to ${link.label}`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {link.icon && (
                    <img
                      src={link.icon}
                      alt=""
                      width={18}
                      height={18}
                      className={link.label === 'Vantage' || link.label === 'Ovation HR' ? 'group-hover:scale-110 transition-transform' : 'filter brightness-0 invert opacity-80 group-hover:opacity-100'}
                    />
                  )}
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-red group-hover:w-full transition-all duration-300"></span>
                </button>
              )
            })}
          </nav>

          {/* Contact Button */}
          <div className="flex items-center gap-3 md:gap-4">
            <button
              onClick={() => scrollToSection('footer')}
              className="relative bg-brand-red text-white px-5 md:px-6 py-2 md:py-2.5 rounded-lg font-semibold text-xs md:text-sm overflow-hidden group hover:shadow-lg hover:shadow-brand-red/50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2 focus:ring-offset-dark-bg hover:scale-105 glow-red"
              aria-label="Contact us"
            >
              <span className="relative z-10">CONTACT US</span>
              <span className="absolute inset-0 bg-gradient-to-r from-brand-red to-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </button>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-white p-2 hover:text-brand-red transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2 focus:ring-offset-dark-bg rounded-lg hover:bg-dark-card/50 hover:scale-110"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <CloseIcon size={24} className="animate-fade-in" /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu with Premium Animations */}
        {isMobileMenuOpen && (
          <nav
            ref={menuRef}
            className="lg:hidden mt-4 pb-4 border-t border-dark-border pt-4 animate-fade-in backdrop-blur-md bg-dark-bg/50 rounded-b-xl"
            aria-label="Mobile navigation"
          >
            {navLinks.map((link, index) => {
              if (link.type === 'dropdown' && link.items) {
                return (
                  <div key={link.label} className="border-b border-dark-border last:border-b-0 mb-2">
                    <button
                      onClick={() => toggleMobileDropdown(link.label)}
                      className="w-full flex items-center justify-between px-4 py-3.5 text-gray-300 hover:text-brand-red hover:bg-dark-card/50 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2 focus:ring-offset-dark-bg group"
                      aria-label={`${link.label} menu`}
                      aria-expanded={openMobileDropdown === link.label}
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <span className="flex items-center gap-2">
                        {link.label}
                      </span>
                      <ChevronDown
                        size={16}
                        className={`transition-all duration-300 ${
                          openMobileDropdown === link.label ? 'rotate-180 text-brand-red' : ''
                        }`}
                      />
                    </button>

                    {/* Mobile Dropdown Items */}
                    {openMobileDropdown === link.label && (
                      <div className="pl-4 py-2 space-y-1 animate-fade-in">
                        {link.items.map((item, index) => (
                          <button
                            key={index}
                            onClick={() => scrollToSection(item.id)}
                            className="w-full text-left px-4 py-2.5 text-sm text-gray-400 hover:text-brand-red hover:bg-dark-card/50 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-inset group flex items-center gap-2"
                            aria-label={`Navigate to ${item.label}`}
                          >
                            <span className="w-1.5 h-1.5 bg-brand-red rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                            {item.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                )
              }

              return (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.id)}
                  className="block w-full text-left px-4 py-3.5 text-gray-300 hover:text-brand-red hover:bg-dark-card/50 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2 focus:ring-offset-dark-bg flex items-center gap-2 group"
                  aria-label={`Navigate to ${link.label}`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {link.icon && (
                    <img
                      src={link.icon}
                      alt=""
                      width={20}
                      height={20}
                      className={link.label === 'Vantage' || link.label === 'Ovation HR' ? 'group-hover:scale-110 transition-transform' : 'filter brightness-0 invert opacity-80 group-hover:opacity-100'}
                    />
                  )}
                  {link.label}
                </button>
              )
            })}
          </nav>
        )}
      </div>
    </header>
  )
}
