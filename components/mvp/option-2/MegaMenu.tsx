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

export function MegaMenu() {
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

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

  // Close menu on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsMegaMenuOpen(false)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setIsMegaMenuOpen(true)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsMegaMenuOpen(false)
    }, 200) // Small delay to allow moving to menu
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
      className="bg-ovation-bg-primary/98 backdrop-blur-xl shadow-lg fixed top-0 left-0 right-0 z-50 border-b border-ovation-border-primary"
      style={{ '--nav-height': '80px' } as React.CSSProperties}
    >
      <nav className="ovation-container py-3 md:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logos/ovation-logo-option2.png"
              alt="Ovation Workplace Services"
              width={180}
              height={50}
              className="h-10 md:h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <div 
              ref={menuRef}
              className="relative z-50"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {/* Trigger Button */}
              <motion.button
                className={`flex items-center gap-2 font-semibold transition-colors duration-300 text-sm ${
                  isMegaMenuOpen 
                    ? 'text-ovation-brand-primary' 
                    : 'text-ovation-text-primary hover:text-ovation-brand-primary'
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
              </motion.button>

              {/* MEGA MENU PANEL - Animated */}
              <AnimatePresence>
                {isMegaMenuOpen && (
                  <div className="fixed left-0 right-0 top-0 z-[100] pointer-events-none" style={{ top: 'calc(var(--nav-height, 80px) + 0.5rem)' }}>
                    <div className="ovation-container pointer-events-auto">
                      <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={menuVariants}
                        className="mx-auto"
                        style={{
                          width: '100%',
                          maxWidth: '1400px',
                        }}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                      >
                        <motion.div
                          className="bg-ovation-bg-secondary border border-ovation-border-primary rounded-2xl shadow-2xl p-8 md:p-10 lg:p-12 relative overflow-hidden"
                          style={{
                            boxShadow: '0 25px 70px rgba(0, 0, 0, 0.5), 0 0 50px rgba(185, 28, 58, 0.2)',
                            backgroundColor: 'rgba(26, 26, 26, 0.98)',
                            backdropFilter: 'blur(20px)',
                          }}
                        >
                          {/* Solid background overlay to prevent text bleed-through */}
                          <div className="absolute inset-0 bg-ovation-bg-secondary pointer-events-none" aria-hidden="true"></div>
                          {/* Subtle gradient overlay */}
                          <div className="absolute inset-0 bg-gradient-to-br from-ovation-brand-primary/8 via-transparent to-ovation-brand-accent/8 pointer-events-none" aria-hidden="true"></div>
                          
                          {/* 4 COLUMN GRID */}
                          <div className="grid grid-cols-4 gap-8 md:gap-10 lg:gap-12 relative z-10">
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
                              className="mb-6 pb-4 border-b border-ovation-border-primary/40"
                              whileHover={{ x: 2 }}
                              transition={{ duration: 0.2 }}
                            >
                              <h4 className="text-lg md:text-xl font-bold text-ovation-text-primary tracking-tight mb-3">
                                {column.title}
                              </h4>
                              <div className="h-0.5 w-16 bg-gradient-to-r from-ovation-brand-primary via-ovation-brand-accent to-transparent"></div>
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
                                    className="group relative flex items-center gap-3 text-ovation-text-secondary hover:text-ovation-text-primary transition-all duration-300 py-2.5 -mx-2 px-3 rounded-lg hover:bg-ovation-bg-primary/40 hover:shadow-md"
                                  >
                                    {item.icon && (
                                      <motion.div
                                        className="flex-shrink-0 w-5 h-5 flex items-center justify-center"
                                        whileHover={{ scale: 1.15, rotate: 5 }}
                                        transition={{ duration: 0.2 }}
                                      >
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
                                        className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-ovation-brand-primary to-ovation-brand-accent"
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
                                      <svg className="w-4 h-4 text-ovation-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              onClick={() => scrollToSection('hero')}
              className="text-ovation-text-primary hover:text-ovation-brand-primary transition-colors duration-300 relative group text-sm font-medium"
            >
              <span className="relative">
                Home
                <motion.span
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-ovation-brand-primary"
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </span>
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-ovation-text-primary hover:text-ovation-brand-primary transition-colors duration-300 relative group text-sm font-medium"
            >
              <span className="relative">
                About Us
                <motion.span
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-ovation-brand-primary"
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </span>
            </button>
            <button
              onClick={() => scrollToSection('footer')}
              className="text-ovation-text-primary hover:text-ovation-brand-primary transition-colors duration-300 relative group text-sm font-medium"
            >
              <span className="relative">
                Careers
                <motion.span
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-ovation-brand-primary"
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </span>
            </button>
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button
                onClick={() => scrollToSection('footer')}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-ovation-brand-primary text-ovation-text-primary font-semibold hover:bg-ovation-brand-primary-hover transition-all duration-300 ovation-glow-red text-sm"
              >
                CONTACT US
              </button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-ovation-text-primary p-2 hover:text-ovation-brand-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <motion.div
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-6 h-6" />
              </motion.div>
            ) : (
              <motion.div
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                <Menu className="w-6 h-6" />
              </motion.div>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="lg:hidden overflow-hidden"
            >
              <div className="pt-4 pb-6 space-y-4 border-t border-ovation-border-primary mt-4 max-h-[70vh] overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                <button
                  onClick={() => {
                    scrollToSection('hero')
                    setIsMobileMenuOpen(false)
                  }}
                  className="block w-full text-left text-ovation-text-primary hover:text-ovation-brand-primary transition-colors py-2"
                >
                  Home
                </button>
                <div>
                  <button
                    className="flex items-center justify-between w-full text-ovation-text-primary font-semibold py-2"
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
                        className="overflow-hidden pl-4 mt-2 space-y-3"
                      >
                        {menuColumns.map((column) => (
                          <div key={column.title} className="pt-2">
                            <h5 className="text-ovation-text-primary font-semibold mb-2 text-sm">
                              {column.title}
                            </h5>
                            <ul className="space-y-2">
                              {column.items.map((item) => (
                                <li key={item.label}>
                                  <button
                                    onClick={() => {
                                      scrollToSection(item.href.replace('#', ''))
                                      setIsMobileMenuOpen(false)
                                    }}
                                    className="w-full text-left text-ovation-text-secondary hover:text-ovation-brand-primary transition-colors text-sm block py-1 flex items-center gap-2"
                                  >
                                    {item.icon && (
                                      <img
                                        src={item.icon}
                                        alt=""
                                        width={16}
                                        height={16}
                                        className="group-hover:scale-110 transition-transform"
                                      />
                                    )}
                                    {item.label}
                                  </button>
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
                  className="block w-full text-left text-ovation-text-primary hover:text-ovation-brand-primary transition-colors py-2"
                >
                  About Us
                </button>
                <button
                  onClick={() => {
                    scrollToSection('footer')
                    setIsMobileMenuOpen(false)
                  }}
                  className="block w-full text-left text-ovation-text-primary hover:text-ovation-brand-primary transition-colors py-2"
                >
                  Careers
                </button>
                <button
                  onClick={() => {
                    scrollToSection('footer')
                    setIsMobileMenuOpen(false)
                  }}
                  className="block w-full text-center px-6 py-3 rounded-lg bg-ovation-brand-primary text-ovation-text-primary font-semibold hover:bg-ovation-brand-primary-hover transition-all duration-300 mt-4"
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
