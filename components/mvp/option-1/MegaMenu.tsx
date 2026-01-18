'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Menu, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

interface MenuColumn {
  title: string
  items: { label: string; href: string; icon?: string }[]
}

const menuColumns: MenuColumn[] = [
  {
    title: 'Technology Areas',
    items: [
      { label: 'Digital Workplace', href: '#services' },
      { label: 'Hybrid Cloud Services', href: '#services' },
      { label: 'NextGen Network', href: '#services' },
      { label: 'Cybersecurity', href: '#services' },
    ],
  },
  {
    title: 'Support Models',
    items: [
      { label: 'Field Services', href: '#services' },
      { label: 'Staffing & Professional Services', href: '#services' },
      { label: 'Managed Services', href: '#services' },
    ],
  },
  {
    title: 'About Us',
    items: [
      { label: 'Leadership', href: '#about' },
    ],
  },
  {
    title: 'Company',
    items: [
      { label: 'Vantage', href: '#services', icon: 'https://www.ovationwps.com/vantage.svg' },
      { label: 'Staffing', href: '#services' },
      { label: 'Careers', href: '#footer' },
      { label: 'Ovation HR', href: '#footer', icon: 'https://www.ovationwps.com/vantage.svg' },
    ],
  },
]

export default function MegaMenu() {
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
      setIsMegaMenuOpen(false)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setIsMobileMenuOpen(false)
      setIsMegaMenuOpen(false)
    }
  }

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMegaMenuOpen(false)
      }
    }

    if (isMegaMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isMegaMenuOpen])

  // Handle body scroll lock for mobile
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setIsMegaMenuOpen(true)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsMegaMenuOpen(false)
    }, 200)
  }

  const menuVariants = {
    hidden: {
      opacity: 0,
      y: -15,
      scale: 0.98,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
        staggerChildren: 0.08,
        delayChildren: 0.15,
      },
    },
    exit: {
      opacity: 0,
      y: -15,
      scale: 0.98,
      transition: {
        duration: 0.25,
        ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
      },
    },
  }

  const columnVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -8 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
      },
    },
  }

  return (
    <div 
      ref={menuRef}
      className={`sticky top-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'glass-effect shadow-2xl shadow-brand-red/20 backdrop-blur-xl'
          : 'bg-dark-bg/95 backdrop-blur-sm'
      }`}
      role="banner"
    >
      <nav className="container mx-auto px-4 py-3 md:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
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
          <div className="hidden lg:flex items-center gap-6">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300 relative group"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-red group-hover:w-full transition-all duration-300"></span>
            </button>

            <div 
              className="relative z-50"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {/* Mega Menu Trigger */}
              <motion.button
                className={`flex items-center gap-2 text-sm font-medium transition-colors duration-300 relative group ${
                  isMegaMenuOpen 
                    ? 'text-brand-red' 
                    : 'text-gray-300 hover:text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Services
                <motion.div
                  animate={{ rotate: isMegaMenuOpen ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                >
                  <ChevronDown className="w-4 h-4" />
                </motion.div>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-red group-hover:w-full transition-all duration-300"></span>
              </motion.button>

              {/* MEGA MENU PANEL */}
              <AnimatePresence>
                {isMegaMenuOpen && (
                  <div className="fixed left-0 right-0 top-20 z-[100] pointer-events-none">
                    <div className="container mx-auto px-4 pointer-events-auto">
                      <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={menuVariants}
                        className="max-w-6xl mx-auto"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                      >
                        <motion.div
                          className="bg-dark-card/98 backdrop-blur-xl border border-dark-border rounded-2xl shadow-2xl p-8 md:p-10 lg:p-12 relative overflow-hidden"
                          style={{
                            boxShadow: '0 25px 70px rgba(0, 0, 0, 0.5), 0 0 50px rgba(179, 9, 32, 0.2)',
                          }}
                        >
                          {/* Background overlay */}
                          <div className="absolute inset-0 bg-dark-card pointer-events-none" aria-hidden="true"></div>
                          <div className="absolute inset-0 bg-gradient-to-br from-brand-red/8 via-transparent to-transparent pointer-events-none" aria-hidden="true"></div>
                          
                          {/* 4 COLUMN GRID */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12 relative z-10">
                            {menuColumns.map((column, colIndex) => (
                              <motion.div
                                key={column.title}
                                variants={columnVariants}
                                initial="hidden"
                                animate="visible"
                                custom={colIndex}
                                className="relative"
                              >
                                {/* Column Header */}
                                <motion.div
                                  className="mb-6 pb-4 border-b border-dark-border/40"
                                  whileHover={{ x: 2 }}
                                  transition={{ duration: 0.2 }}
                                >
                                  <h4 className="text-lg md:text-xl font-bold text-white tracking-tight mb-3">
                                    {column.title}
                                  </h4>
                                  <div className="h-0.5 w-16 bg-gradient-to-r from-brand-red via-red-500 to-transparent"></div>
                                </motion.div>
                                
                                {/* Column Links */}
                                <ul className="space-y-4">
                                  {column.items.map((item, itemIndex) => (
                                    <motion.li
                                      key={item.label}
                                      variants={itemVariants}
                                      initial="hidden"
                                      animate="visible"
                                      custom={itemIndex}
                                    >
                                      <Link
                                        href={item.href}
                                        onClick={(e) => {
                                          e.preventDefault()
                                          scrollToSection(item.href.replace('#', ''))
                                        }}
                                        className="group relative flex items-center gap-3 text-gray-300 hover:text-white transition-all duration-300 py-2.5 -mx-2 px-3 rounded-lg hover:bg-dark-surface/50 hover:shadow-md"
                                      >
                                        {item.icon && (
                                          <motion.div
                                            className="flex-shrink-0 w-5 h-5 flex items-center justify-center"
                                            whileHover={{ scale: 1.15, rotate: 5 }}
                                            transition={{ duration: 0.2 }}
                                          >
                                            {/* eslint-disable-next-line @next/next/no-img-element */}
                                            <img
                                              src={item.icon}
                                              alt=""
                                              width={20}
                                              height={20}
                                              className="opacity-80 group-hover:opacity-100 transition-opacity"
                                            />
                                          </motion.div>
                                        )}
                                        <span className="text-sm md:text-base font-medium leading-relaxed relative flex-1 tracking-wide">
                                          {item.label}
                                          <motion.span
                                            className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-red to-red-500"
                                            whileHover={{ width: '100%' }}
                                            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                                          />
                                        </span>
                                        <motion.div
                                          className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0"
                                          initial={{ x: -5 }}
                                          whileHover={{ x: 0 }}
                                          transition={{ duration: 0.2 }}
                                        >
                                          <svg className="w-4 h-4 text-brand-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                                          </svg>
                                        </motion.div>
                                      </Link>
                                    </motion.li>
                                  ))}
                                </ul>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      </motion.div>
                    </div>
                  </div>
                )}
              </AnimatePresence>
            </div>

            <button
              onClick={() => scrollToSection('about')}
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300 relative group"
            >
              About Us
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-red group-hover:w-full transition-all duration-300"></span>
            </button>

            <button
              onClick={() => scrollToSection('footer')}
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300 relative group"
            >
              Careers
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-red group-hover:w-full transition-all duration-300"></span>
            </button>
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:flex items-center gap-3 md:gap-4">
            <motion.button
              onClick={() => scrollToSection('footer')}
              className="relative bg-brand-red text-white px-5 md:px-6 py-2 md:py-2.5 rounded-lg font-semibold text-xs md:text-sm overflow-hidden group hover:shadow-lg hover:shadow-brand-red/50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2 focus:ring-offset-dark-bg hover:scale-105 glow-red"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Contact us"
            >
              <span className="relative z-10">CONTACT US</span>
              <span className="absolute inset-0 bg-gradient-to-r from-brand-red to-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </motion.button>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-white p-2 hover:text-brand-red transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2 focus:ring-offset-dark-bg rounded-lg hover:bg-dark-card/50 hover:scale-110"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={24} className="animate-fade-in" /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="lg:hidden overflow-hidden mt-4 pb-4 border-t border-dark-border pt-4 backdrop-blur-md bg-dark-bg/50 rounded-b-xl"
            >
              <div className="space-y-4">
                <button
                  onClick={() => {
                    scrollToSection('hero')
                    setIsMobileMenuOpen(false)
                  }}
                  className="block w-full text-left px-4 py-3.5 text-gray-300 hover:text-brand-red hover:bg-dark-card/50 rounded-lg transition-all duration-200 font-medium"
                >
                  Home
                </button>
                
                <div>
                  <button
                    className="flex items-center justify-between w-full px-4 py-3.5 text-gray-300 hover:text-brand-red hover:bg-dark-card/50 rounded-lg transition-all duration-200 font-medium"
                    onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
                  >
                    Services
                    <motion.div
                      animate={{ rotate: isMegaMenuOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {isMegaMenuOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden pl-4 mt-2 space-y-4"
                      >
                        {menuColumns.map((column) => (
                          <div key={column.title} className="pt-2">
                            <h5 className="text-white font-semibold mb-2 text-sm">
                              {column.title}
                            </h5>
                            <ul className="space-y-2">
                              {column.items.map((item) => (
                                <li key={item.label}>
                                  <Link
                                    href={item.href}
                                    onClick={(e) => {
                                      e.preventDefault()
                                      scrollToSection(item.href.replace('#', ''))
                                    }}
                                    className="flex items-center gap-2 text-gray-400 hover:text-brand-red transition-colors py-2 text-sm"
                                  >
                                    {item.icon && (
                                      // eslint-disable-next-line @next/next/no-img-element
                                      <img
                                        src={item.icon}
                                        alt=""
                                        width={18}
                                        height={18}
                                      />
                                    )}
                                    {item.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <button
                  onClick={() => {
                    scrollToSection('about')
                    setIsMobileMenuOpen(false)
                  }}
                  className="block w-full text-left px-4 py-3.5 text-gray-300 hover:text-brand-red hover:bg-dark-card/50 rounded-lg transition-all duration-200 font-medium"
                >
                  About Us
                </button>

                <button
                  onClick={() => {
                    scrollToSection('footer')
                    setIsMobileMenuOpen(false)
                  }}
                  className="block w-full text-left px-4 py-3.5 text-gray-300 hover:text-brand-red hover:bg-dark-card/50 rounded-lg transition-all duration-200 font-medium"
                >
                  Careers
                </button>

                <button
                  onClick={() => {
                    scrollToSection('footer')
                    setIsMobileMenuOpen(false)
                  }}
                  className="w-full mt-4 px-4 py-3.5 bg-brand-red text-white rounded-lg font-semibold hover:bg-red-700 transition-colors"
                >
                  CONTACT US
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  )
}
