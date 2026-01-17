'use client'

import { ChevronDown } from 'lucide-react'
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

export function MegaMenuLocked() {
  return (
    <div className="bg-ovation-bg-primary/95 backdrop-blur-lg shadow-lg fixed top-0 left-0 right-0 z-50">
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
            <div className="relative z-50">
              {/* Trigger Button - ALWAYS SHOWS AS ACTIVE */}
              <button className="flex items-center gap-2 text-ovation-brand-primary font-semibold">
                Solutions
                <ChevronDown className="w-4 h-4 rotate-180" />
              </button>

              {/* MEGA MENU PANEL - ALWAYS VISIBLE - LOCKED OPEN */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-screen max-w-6xl z-[100]">
                <div className="bg-ovation-bg-secondary border border-ovation-border-primary rounded-lg shadow-xl p-8">
                  {/* 4 COLUMN GRID */}
                  <div className="grid grid-cols-4 gap-8">
                    {menuColumns.map((column) => (
                      <div key={column.title}>
                        {/* Column Header */}
                        <h4 className="text-ovation-text-primary font-semibold mb-4">
                          {column.title}
                        </h4>
                        
                        {/* Column Links */}
                        <ul className="space-y-3">
                          {column.items.map((item) => (
                            <li key={item.label}>
                              <Link
                                href={item.href}
                                className="text-ovation-text-secondary hover:text-ovation-brand-primary transition-colors duration-300 block"
                              >
                                {item.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <Link
              href="#about"
              className="text-ovation-text-primary hover:text-ovation-brand-primary transition-colors duration-300"
            >
              About
            </Link>
            <Link
              href="#contact"
              className="text-ovation-text-primary hover:text-ovation-brand-primary transition-colors duration-300"
            >
              Contact
            </Link>
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-ovation-brand-primary text-ovation-text-primary font-semibold hover:bg-ovation-brand-primary-hover transition-all duration-300 ovation-glow-red"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>
    </div>
  )
}
