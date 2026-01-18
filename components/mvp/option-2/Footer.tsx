'use client'

import { motion } from 'framer-motion'
import { Linkedin, Twitter, Facebook, Mail, Phone, MapPin } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const footerLinks = {
  services: {
    title: 'Services',
    links: [
      { label: 'Facility Management', href: '#' },
      { label: 'Workspace Solutions', href: '#' },
      { label: 'Technology Services', href: '#' },
      { label: 'Maintenance & Support', href: '#' },
    ],
  },
  company: {
    title: 'Company',
    links: [
      { label: 'About Us', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Case Studies', href: '#' },
      { label: 'News & Blog', href: '#' },
    ],
  },
  resources: {
    title: 'Resources',
    links: [
      { label: 'Whitepapers', href: '#' },
      { label: 'Documentation', href: '#' },
      { label: 'Help Center', href: '#' },
      { label: 'Contact Us', href: '#' },
    ],
  },
  legal: {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Cookie Policy', href: '#' },
      { label: 'Accessibility', href: '#' },
    ],
  },
}

const socialLinks = [
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Facebook, href: '#', label: 'Facebook' },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="footer" className="bg-ovation-bg-secondary border-t border-ovation-border-primary">
      <div className="ovation-container py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Image
              src="/logos/ovation-logo-option2.png"
              alt="Ovation Workplace Services"
              width={180}
              height={50}
              className="h-10 mb-6"
            />
            <p className="text-ovation-text-secondary mb-6">
              Excellence in workplace services, delivering comprehensive solutions that transform how you work.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="tel:1-800-OVATION"
                className="flex items-center gap-3 text-ovation-text-secondary hover:text-ovation-brand-primary transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>1-800-OVATION</span>
              </a>
              <a
                href="mailto:info@ovationwps.com"
                className="flex items-center gap-3 text-ovation-text-secondary hover:text-ovation-brand-primary transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>info@ovationwps.com</span>
              </a>
              <div className="flex items-start gap-3 text-ovation-text-secondary">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <span>
                  123 Business Avenue<br />
                  Suite 500<br />
                  New York, NY 10001
                </span>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([key, section]) => (
            <div key={key}>
              <h5 className="ovation-h4 text-ovation-text-primary font-semibold mb-4">{section.title}</h5>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-ovation-text-secondary hover:text-ovation-brand-primary transition-colors text-sm md:text-base"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <motion.div
          className="bg-ovation-bg-tertiary border border-ovation-border-primary rounded-lg p-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-2xl mx-auto text-center">
            <h4 className="ovation-h4 text-ovation-text-primary mb-2">Stay Updated</h4>
            <p className="text-ovation-text-secondary mb-6 text-sm md:text-base">
              Subscribe to our newsletter for the latest insights and updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-ovation-bg-primary border border-ovation-border-primary rounded-lg text-ovation-text-primary placeholder:text-ovation-text-tertiary focus:outline-none focus:border-ovation-brand-primary transition-colors"
              />
              <button className="px-6 py-3 bg-ovation-brand-primary text-ovation-text-primary font-semibold rounded-lg hover:bg-ovation-brand-primary-hover transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-ovation-border-primary">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <p className="text-ovation-text-tertiary text-sm">
              © {currentYear} Ovation Workplace Services. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 flex items-center justify-center bg-ovation-bg-tertiary border border-ovation-border-primary rounded-lg text-ovation-text-secondary hover:text-ovation-brand-primary hover:border-ovation-brand-primary transition-all"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
