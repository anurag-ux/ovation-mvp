'use client'

import { useState, useRef, useLayoutEffect, useCallback, useEffect } from 'react'
import { gsap } from 'gsap'
import { GoArrowUpRight } from 'react-icons/go'
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
const ANIMATION_DURATION = 0.5

export function CardNav({ 
  items = defaultNavItems, 
  logoSrc = '/logos/ovation-logo-option2.png',
  logoAlt = 'Ovation Workplace Services'
}: CardNavProps) {
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement[]>([])
  const timelineRef = useRef<gsap.core.Timeline | null>(null)

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

  // GSAP Animation Logic
  useLayoutEffect(() => {
    if (!containerRef.current || !contentRef.current) return

    // Kill any existing timeline
    if (timelineRef.current) {
      timelineRef.current.kill()
    }

    const container = containerRef.current
    const content = contentRef.current
    const cards = cardsRef.current.filter(Boolean)

    if (isOpen) {
      // Calculate target height
      const targetHeight = calculateHeight()

      // Create opening timeline
      const tl = gsap.timeline()

      // First, expand the container
      tl.to(container, {
        height: targetHeight,
        duration: ANIMATION_DURATION,
        ease: 'power3.out',
      })

      // Show content
      tl.to(content, {
        opacity: 1,
        visibility: 'visible',
        duration: 0.1,
      }, '<')

      // Stagger animate cards
      tl.fromTo(
        cards,
        {
          opacity: 0,
          y: 30,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.4,
          stagger: 0.08,
          ease: 'power2.out',
        },
        '-=0.3'
      )

      timelineRef.current = tl
    } else {
      // Create closing timeline
      const tl = gsap.timeline()

      // Fade out cards first
      tl.to(cards, {
        opacity: 0,
        y: -20,
        scale: 0.95,
        duration: 0.25,
        stagger: 0.03,
        ease: 'power2.in',
      })

      // Hide content
      tl.to(content, {
        opacity: 0,
        visibility: 'hidden',
        duration: 0.1,
      })

      // Collapse container
      tl.to(container, {
        height: CLOSED_HEIGHT,
        duration: ANIMATION_DURATION * 0.8,
        ease: 'power3.inOut',
      }, '-=0.1')

      timelineRef.current = tl
    }

    return () => {
      if (timelineRef.current) {
        timelineRef.current.kill()
      }
    }
  }, [isOpen, calculateHeight])

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
            <Link href="/" className="flex items-center group">
              <div className="relative h-8 sm:h-10 w-auto">
                <Image
                  src={logoSrc}
                  alt={logoAlt}
                  width={180}
                  height={50}
                  className="h-8 sm:h-10 w-auto object-contain"
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

          {/* Expandable Content Area - with scroll on mobile (hidden scrollbar) */}
          <div
            ref={contentRef}
            className="px-4 sm:px-6 pb-6 opacity-0 invisible max-h-[70vh] overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
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

            {/* Mobile CTA Button */}
            <div className="md:hidden mt-6">
              <button
                onClick={() => scrollToSection('#footer')}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 bg-[#b30920] text-white rounded-lg font-semibold text-sm hover:bg-[#8a0719] transition-all duration-300"
              >
                Get Started
                <GoArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CardNav
