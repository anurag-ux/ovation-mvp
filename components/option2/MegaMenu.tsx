'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Menu, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

interface MenuColumn {
  title: string
  items: { label: string; href: string }[]
}

const menuColumns: MenuColumn[] = [
  {
    title: 'Services',
    items: [
      { label: 'Facility Management', href: '#' },
      { label: 'Workspace Solutions', href: '#' },
      { label: 'Technology Services', href: '#' },
      { label: 'Maintenance & Support', href: '#' },
    ],
  },
  {
    title: 'Solutions',
    items: [
      { label: 'Corporate Offices', href: '#' },
      { label: 'Healthcare', href: '#' },
      { label: 'Education', href: '#' },
      { label: 'Government', href: '#' },
    ],
  },
  {
    title: 'Resources',
    items: [
      { label: 'Case Studies', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Whitepapers', href: '#' },
      { label: 'Events', href: '#' },
    ],
  },
  {
    title: 'Company',
    items: [
      { label: 'About Us', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Contact', href: '#' },
      { label: 'Partners', href: '#' },
    ],
  },
]

export function MegaMenu() {
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

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
      y: -20,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1],
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      scale: 0.95,
      transition: {
        duration: 0.2,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  }

  const columnVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.2,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  }

  return (
    <div className="bg-ovation-bg-primary/95 backdrop-blur-lg shadow-lg fixed top-0 left-0 right-0 z-50 border-b border-ovation-border-primary">
      <nav className="ovation-container py-4">
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
                className="flex items-center gap-2 text-ovation-text-primary hover:text-ovation-brand-primary font-semibold transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Solutions
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
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={menuVariants}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-screen max-w-6xl z-[100] pointer-events-auto"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <motion.div
                      className="bg-ovation-bg-secondary border border-ovation-border-primary rounded-lg shadow-2xl p-8 backdrop-blur-xl"
                      style={{
                        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3), 0 0 40px rgba(185, 28, 58, 0.1)',
                      }}
                    >
                      {/* 4 COLUMN GRID */}
                      <div className="grid grid-cols-4 gap-8">
                        {menuColumns.map((column, colIndex) => (
                          <motion.div
                            key={column.title}
                            variants={columnVariants}
                            initial="hidden"
                            animate="visible"
                            custom={colIndex}
                          >
                            {/* Column Header */}
                            <motion.h4
                              className="text-ovation-text-primary font-semibold mb-4 text-lg"
                              whileHover={{ x: 4 }}
                              transition={{ duration: 0.2 }}
                            >
                              {column.title}
                            </motion.h4>
                            
                            {/* Column Links */}
                            <ul className="space-y-3">
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
                                    className="text-ovation-text-secondary hover:text-ovation-brand-primary transition-all duration-300 block group relative"
                                  >
                                    <motion.span
                                      className="relative inline-block"
                                      whileHover={{ x: 4 }}
                                      transition={{ duration: 0.2 }}
                                    >
                                      {item.label}
                                      <motion.span
                                        className="absolute -bottom-1 left-0 w-0 h-0.5 bg-ovation-brand-primary"
                                        whileHover={{ width: '100%' }}
                                        transition={{ duration: 0.3 }}
                                      />
                                    </motion.span>
                                  </Link>
                                </motion.li>
                              ))}
                            </ul>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="#about"
              className="text-ovation-text-primary hover:text-ovation-brand-primary transition-colors duration-300 relative group"
            >
              <span className="relative">
                About
                <motion.span
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-ovation-brand-primary"
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </span>
            </Link>
            <Link
              href="#contact"
              className="text-ovation-text-primary hover:text-ovation-brand-primary transition-colors duration-300 relative group"
            >
              <span className="relative">
                Contact
                <motion.span
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-ovation-brand-primary"
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </span>
            </Link>
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-ovation-brand-primary text-ovation-text-primary font-semibold hover:bg-ovation-brand-primary-hover transition-all duration-300 ovation-glow-red"
              >
                Get Started
              </Link>
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
              <div className="pt-4 pb-6 space-y-4 border-t border-ovation-border-primary mt-4">
                <div>
                  <button
                    className="flex items-center justify-between w-full text-ovation-text-primary font-semibold py-2"
                    onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
                  >
                    Solutions
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
                                  <Link
                                    href={item.href}
                                    className="text-ovation-text-secondary hover:text-ovation-brand-primary transition-colors text-sm block py-1"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                  >
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
                <Link
                  href="#about"
                  className="block text-ovation-text-primary hover:text-ovation-brand-primary transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="#contact"
                  className="block text-ovation-text-primary hover:text-ovation-brand-primary transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </Link>
                <Link
                  href="#contact"
                  className="block w-full text-center px-6 py-3 rounded-lg bg-ovation-brand-primary text-ovation-text-primary font-semibold hover:bg-ovation-brand-primary-hover transition-all duration-300 mt-4"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  )
}
