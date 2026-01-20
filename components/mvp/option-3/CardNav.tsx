'use client'

import { useState, useRef, useLayoutEffect, useCallback, useEffect } from 'react'
import { gsap } from 'gsap'
import { GoArrowUpRight } from 'react-icons/go'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube } from 'react-icons/fa'
import Image from 'next/image'
import Link from 'next/link'

// Types for the navigation items
export interface NavSubItem {
  label: string
  href: string
  icon?: string
}

export interface NavCardItem {
  title: string
  items: NavSubItem[]
  bgColor: string // Tailwind bg class or hex color
}

interface CardNavProps {
  items: NavCardItem[]
  logoSrc?: string
  logoAlt?: string
}

// Default navigation data matching the existing project structure
export const defaultNavItems: NavCardItem[] = [
  {
    title: 'Technology Areas',
    bgColor: 'bg-gradient-to-br from-rose-50 to-red-100',
    items: [
      { label: 'Digital Workplace', href: '#services' },
      { label: 'Hybrid Cloud Services', href: '#services' },
      { label: 'NextGen Network', href: '#services' },
      { label: 'Cybersecurity', href: '#services' },
    ],
  },
  {
    title: 'Support Models',
    bgColor: 'bg-gradient-to-br from-slate-50 to-gray-100',
    items: [
      { label: 'Field Services', href: '#services' },
      { label: 'Staffing & Professional Services', href: '#services' },
      { label: 'Managed Services', href: '#services' },
    ],
  },
  {
    title: 'About Us',
    bgColor: 'bg-gradient-to-br from-amber-50 to-orange-100',
    items: [
      { label: 'Leadership', href: '#about' },
      { label: 'Our Story', href: '#about' },
      { label: 'Partners', href: '#about' },
    ],
  },
  {
    title: 'Company',
    bgColor: 'bg-gradient-to-br from-emerald-50 to-teal-100',
    items: [
      { label: 'Vantage', href: '#services', icon: 'https://www.ovationwps.com/vantage.svg' },
      { label: 'Staffing', href: '#services' },
      { label: 'Careers', href: '#footer' },
      { label: 'Ovation HR', href: '#footer', icon: 'https://www.ovationwps.com/vantage.svg' },
    ],
  },
]

const CLOSED_HEIGHT = 60
// Faster animations for smoother mobile experience
const ANIMATION_DURATION = 0.35
const MOBILE_ANIMATION_DURATION = 0.25

export function CardNav({ 
  items = defaultNavItems, 
  logoSrc = '/logos/ovation-logo-option2.png',
  logoAlt = 'Ovation Workplace Services'
}: CardNavProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement[]>([])
  const timelineRef = useRef<gsap.core.Timeline | null>(null)
  
  // Check for mobile on mount
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Calculate the true height of content for animation
  const calculateHeight = useCallback((): number => {
    if (!contentRef.current) return CLOSED_HEIGHT

    // Store current styles
    const content = contentRef.current
    const originalDisplay = content.style.display
    const originalVisibility = content.style.visibility
    const originalPosition = content.style.position
    const originalHeight = content.style.height

    // Temporarily make visible for measurement
    content.style.display = 'block'
    content.style.visibility = 'hidden'
    content.style.position = 'absolute'
    content.style.height = 'auto'

    // Measure
    const height = content.scrollHeight

    // Restore original styles
    content.style.display = originalDisplay
    content.style.visibility = originalVisibility
    content.style.position = originalPosition
    content.style.height = originalHeight

    return height + CLOSED_HEIGHT + 24 // Add padding
  }, [])

  // GSAP Animation Logic - Optimized for mobile
  useLayoutEffect(() => {
    if (!containerRef.current || !contentRef.current) return

    // Kill any existing timeline
    if (timelineRef.current) {
      timelineRef.current.kill()
    }

    const container = containerRef.current
    const content = contentRef.current
    const cards = cardsRef.current.filter(Boolean)
    
    // Use faster animations on mobile
    const duration = isMobile ? MOBILE_ANIMATION_DURATION : ANIMATION_DURATION
    const cardDuration = isMobile ? 0.2 : 0.4
    const staggerDelay = isMobile ? 0.04 : 0.08

    if (isOpen) {
      // Calculate target height
      const targetHeight = calculateHeight()

      // Create opening timeline with optimized settings
      const tl = gsap.timeline({
        defaults: {
          force3D: true, // GPU acceleration
        }
      })

      // First, expand the container
      tl.to(container, {
        height: targetHeight,
        duration: duration,
        ease: 'power2.out', // Smoother easing
      })

      // Show content
      tl.to(content, {
        opacity: 1,
        visibility: 'visible',
        duration: 0.05,
      }, '<')

      // Stagger animate cards - simpler animation on mobile
      tl.fromTo(
        cards,
        {
          opacity: 0,
          y: isMobile ? 15 : 30,
          scale: isMobile ? 1 : 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: cardDuration,
          stagger: staggerDelay,
          ease: 'power2.out',
        },
        isMobile ? '-=0.15' : '-=0.3'
      )

      timelineRef.current = tl
    } else {
      // Create closing timeline
      const tl = gsap.timeline({
        defaults: {
          force3D: true,
        }
      })

      // Fade out cards first - faster on mobile
      tl.to(cards, {
        opacity: 0,
        y: isMobile ? -10 : -20,
        scale: isMobile ? 1 : 0.95,
        duration: isMobile ? 0.15 : 0.25,
        stagger: isMobile ? 0.02 : 0.03,
        ease: 'power2.in',
      })

      // Hide content
      tl.to(content, {
        opacity: 0,
        visibility: 'hidden',
        duration: 0.05,
      })

      // Collapse container
      tl.to(container, {
        height: CLOSED_HEIGHT,
        duration: duration * 0.8,
        ease: 'power2.inOut',
      }, '-=0.05')

      timelineRef.current = tl
    }

    return () => {
      if (timelineRef.current) {
        timelineRef.current.kill()
      }
    }
  }, [isOpen, calculateHeight, isMobile])

  const scrollToSection = (href: string) => {
    const id = href.replace('#', '')
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  // Lock body scroll when menu is open on mobile
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <>
      {/* Fixed Blur Strip - Blurs content behind navbar height (always visible) */}
      <div
        className="fixed top-0 left-0 right-0 z-30 pointer-events-none"
        style={{ height: CLOSED_HEIGHT + 32 }} // navbar height + top padding
        aria-hidden="true"
      >
        <div className="absolute inset-0 backdrop-blur-md bg-white/30" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/40 to-transparent" />
      </div>

      {/* Dark Overlay when menu is open */}
      <div
        className={`fixed inset-0 z-40 bg-black/30 transition-all duration-500 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl">
        {/* Main Navigation Container - Solid white background */}
        <div
          ref={containerRef}
          className="bg-white rounded-2xl shadow-2xl shadow-black/10 border border-gray-200/50 overflow-hidden"
          style={{ height: CLOSED_HEIGHT }}
        >
          {/* Header Bar (Always Visible) */}
          <div 
            className="flex items-center justify-between px-4 sm:px-6"
            style={{ height: CLOSED_HEIGHT }}
          >
            {/* Logo - Using Option 2's logo */}
            <Link href="/" className="flex items-center group flex-shrink-0">
              <div className="relative h-8 sm:h-10 w-[140px] sm:w-[180px]">
                <Image
                  src={logoSrc}
                  alt={logoAlt}
                  width={180}
                  height={50}
                  className="h-8 sm:h-10 w-auto object-contain object-left"
                  priority
                />
              </div>
            </Link>

            {/* Right Side - Get Started (Desktop) + Hamburger */}
            <div className="flex items-center gap-2 sm:gap-4">
              {/* Get Started Button - Desktop Only */}
              <button
                onClick={() => scrollToSection('#footer')}
                className="hidden md:flex items-center gap-2 px-5 py-2 bg-[#b30920] text-white rounded-lg font-semibold text-sm hover:bg-[#8a0719] transition-all duration-300 hover:scale-105 shadow-lg shadow-[#b30920]/20"
              >
                Get Started
                <GoArrowUpRight className="w-4 h-4" />
              </button>

              {/* Custom Hamburger Menu */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="relative w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-[#b30920]/50"
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isOpen}
              >
                <div className="w-6 h-5 flex flex-col justify-center items-center relative">
                  {/* Top Line */}
                  <span
                    className={`block absolute h-0.5 w-6 bg-gray-800 transform transition-all duration-300 ease-out ${
                      isOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'
                    }`}
                  />
                  {/* Middle Line */}
                  <span
                    className={`block absolute h-0.5 w-6 bg-gray-800 transition-all duration-300 ease-out ${
                      isOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
                    }`}
                  />
                  {/* Bottom Line */}
                  <span
                    className={`block absolute h-0.5 w-6 bg-gray-800 transform transition-all duration-300 ease-out ${
                      isOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>

          {/* Expandable Content Area */}
          <div
            ref={contentRef}
            className="opacity-0 invisible flex flex-col"
          >
            {/* Scrollable Cards Area - Mobile only scrolls this part */}
            <div className="px-4 sm:px-6 max-h-[50vh] md:max-h-none overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
              {/* Cards Grid - Desktop: Row, Mobile: Stack */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
                {items.map((card, index) => (
                  <div
                    key={card.title}
                    ref={(el) => {
                      if (el) cardsRef.current[index] = el
                    }}
                    className={`${card.bgColor} rounded-xl p-5 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] group`}
                  >
                    {/* Card Title */}
                    <h3 className="text-lg font-bold text-gray-900 mb-4 pb-3 border-b border-gray-900/10">
                      {card.title}
                    </h3>

                    {/* Sub-links */}
                    <ul className="space-y-2">
                      {card.items.map((item) => (
                        <li key={item.label}>
                          <button
                            onClick={() => scrollToSection(item.href)}
                            className="w-full flex items-center justify-between text-gray-700 hover:text-[#b30920] transition-colors py-1.5 group/item text-left"
                          >
                            <span className="flex items-center gap-2 text-sm font-medium">
                              {item.icon && (
                                // eslint-disable-next-line @next/next/no-img-element
                                <img
                                  src={item.icon}
                                  alt=""
                                  width={16}
                                  height={16}
                                  className="opacity-70 group-hover/item:opacity-100 transition-opacity"
                                />
                              )}
                              {item.label}
                            </span>
                            <GoArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-200" />
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Fixed Bottom Area - Mobile Only */}
            <div className="md:hidden px-4 pt-4 pb-6 bg-white border-t border-gray-100 mt-4">
              {/* Get Started Button */}
              <button
                onClick={() => scrollToSection('#footer')}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 bg-[#b30920] text-white rounded-lg font-semibold text-sm hover:bg-[#8a0719] transition-all duration-300 shadow-lg shadow-[#b30920]/20"
              >
                Get Started
                <GoArrowUpRight className="w-4 h-4" />
              </button>

              {/* Follow Us Section */}
              <div className="mt-5">
                <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider text-center mb-3">
                  Follow Us
                </h4>
                <div className="flex items-center justify-center gap-3">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#b30920] hover:text-white transition-all duration-300"
                    aria-label="Facebook"
                  >
                    <FaFacebookF className="w-4 h-4" />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#b30920] hover:text-white transition-all duration-300"
                    aria-label="Twitter"
                  >
                    <FaTwitter className="w-4 h-4" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#b30920] hover:text-white transition-all duration-300"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedinIn className="w-4 h-4" />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#b30920] hover:text-white transition-all duration-300"
                    aria-label="Instagram"
                  >
                    <FaInstagram className="w-4 h-4" />
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#b30920] hover:text-white transition-all duration-300"
                    aria-label="YouTube"
                  >
                    <FaYoutube className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Desktop bottom padding */}
            <div className="hidden md:block pb-6" />
          </div>
        </div>
      </div>
    </>
  )
}

export default CardNav
