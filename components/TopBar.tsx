'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function TopBar() {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScroll, setLastScroll] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY
      setIsVisible(currentScroll < lastScroll || currentScroll < 50)
      setLastScroll(currentScroll)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScroll])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const socialLinks = [
    { icon: '/icons/facebook.svg', href: 'https://facebook.com', alt: 'Visit our Facebook page', target: '_blank', rel: 'noopener noreferrer' },
    { icon: '/icons/instagram.svg', href: 'https://instagram.com', alt: 'Visit our Instagram page', target: '_blank', rel: 'noopener noreferrer' },
    { icon: '/icons/twitter.svg', href: 'https://twitter.com', alt: 'Visit our Twitter page', target: '_blank', rel: 'noopener noreferrer' },
    { icon: '/icons/linkedin.svg', href: 'https://linkedin.com', alt: 'Visit our LinkedIn page', target: '_blank', rel: 'noopener noreferrer' },
  ]

  return (
    <div 
      className={`bg-dark-surface border-b border-dark-border py-2 transition-all duration-300 ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}
      role="banner"
    >
      <div className="container mx-auto px-4 flex justify-between items-center text-sm">
        <nav className="flex gap-6" aria-label="Top navigation">
          <button
            onClick={() => scrollToSection('footer')}
            className="hover:text-brand-red transition-colors duration-300 text-gray-300 hover:scale-105 inline-block focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2 focus:ring-offset-dark-surface rounded px-1 py-1 min-h-[44px] flex items-center"
            aria-label="Join our team"
          >
            Join Our Team
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="hover:text-brand-red transition-colors duration-300 text-gray-300 hover:scale-105 inline-block focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2 focus:ring-offset-dark-surface rounded px-1 py-1 min-h-[44px] flex items-center"
            aria-label="About us"
          >
            About Us
          </button>
        </nav>
        <div className="flex gap-4" role="list" aria-label="Social media links">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target={social.target}
              rel={social.rel}
              className="text-gray-400 hover:text-brand-red transition-all duration-300 hover:scale-125 hover:rotate-6 focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2 focus:ring-offset-dark-surface rounded p-1 min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label={social.alt}
            >
              <Image
                src={social.icon}
                alt=""
                width={18}
                height={18}
                className="filter brightness-0 invert opacity-60 hover:opacity-100 transition-opacity"
                aria-hidden="true"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
