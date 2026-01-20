'use client'

import Image from 'next/image'

export default function Footer() {
  const socialLinks = [
    { icon: '/icons/facebook.svg', href: 'https://facebook.com', alt: 'Visit our Facebook page', target: '_blank', rel: 'noopener noreferrer' },
    { icon: '/icons/instagram.svg', href: 'https://instagram.com', alt: 'Visit our Instagram page', target: '_blank', rel: 'noopener noreferrer' },
    { icon: '/icons/twitter.svg', href: 'https://twitter.com', alt: 'Visit our Twitter page', target: '_blank', rel: 'noopener noreferrer' },
    { icon: '/icons/linkedin.svg', href: 'https://linkedin.com', alt: 'Visit our LinkedIn page', target: '_blank', rel: 'noopener noreferrer' },
  ]

  const certificates = [
    { icon: '/logos/iso-9001.svg', name: 'ISO 9001', alt: 'ISO 9001 Quality Management Certification' },
    { icon: '/logos/iso-27001.svg', name: 'ISO 27001', alt: 'ISO 27001 Information Security Certification' },
    { icon: '/logos/nmsdc.jpg', name: 'NMSDC', alt: 'National Minority Supplier Development Council Certification' },
  ]

  return (
    <footer id="footer" className="bg-dark-bg border-t border-dark-border relative overflow-hidden" role="contentinfo">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-5" aria-hidden="true">
        <Image
          src="/images/footer-bg.png"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" aria-hidden="true">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#2a2a3e_1px,transparent_1px),linear-gradient(to_bottom,#2a2a3e_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-red via-pink-500 to-brand-red" aria-hidden="true"></div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-5" aria-hidden="true">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-red/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-16 relative z-10">
        <div className="grid md:grid-cols-4 gap-8 md:gap-12 mb-8">
          {/* About Us */}
          <div className="animate-fade-in-up">
            <h3 className="text-lg md:text-xl font-bold mb-6 text-white relative inline-block">
              About Us
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-brand-red to-transparent"></span>
            </h3>
            <div className="space-y-4 text-gray-400">
              <a
                href="tel:+19088016897"
                className="flex items-center gap-3 group hover:text-brand-red active:text-brand-red transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2 focus:ring-offset-dark-bg rounded p-1 -m-1 min-h-[44px] hover:scale-105 active:scale-105"
                aria-label="Call us at +1 908-801-6897"
              >
                <div className="p-2 bg-dark-card rounded-lg border border-dark-border group-hover:border-brand-red group-active:border-brand-red group-hover:scale-110 group-active:scale-110 transition-all duration-300">
                  <Image src="/icons/call.svg" alt="" width={16} height={16} aria-hidden="true" />
                </div>
                <span>+1 908-801-6897</span>
              </a>
              <a
                href="mailto:HR@ovationwps.com"
                className="flex items-center gap-3 group hover:text-brand-red active:text-brand-red transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2 focus:ring-offset-dark-bg rounded p-1 -m-1 min-h-[44px] hover:scale-105 active:scale-105"
                aria-label="Email HR at HR@ovationwps.com"
              >
                <div className="p-2 bg-dark-card rounded-lg border border-dark-border group-hover:border-brand-red group-active:border-brand-red group-hover:scale-110 group-active:scale-110 transition-all duration-300">
                  <Image src="/icons/mail.svg" alt="" width={16} height={16} aria-hidden="true" />
                </div>
                <span>HR@ovationwps.com</span>
              </a>
              <a
                href="mailto:Sales@ovationwps.com"
                className="flex items-center gap-3 group hover:text-brand-red active:text-brand-red transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2 focus:ring-offset-dark-bg rounded p-1 -m-1 min-h-[44px] hover:scale-105 active:scale-105"
                aria-label="Email Sales at Sales@ovationwps.com"
              >
                <div className="p-2 bg-dark-card rounded-lg border border-dark-border group-hover:border-brand-red group-active:border-brand-red group-hover:scale-110 group-active:scale-110 transition-all duration-300">
                  <Image src="/icons/mail.svg" alt="" width={16} height={16} aria-hidden="true" />
                </div>
                <span>Sales@ovationwps.com</span>
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-lg md:text-xl font-bold mb-6 text-white relative inline-block">
              Services
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-brand-red to-transparent"></span>
            </h3>
            <ul className="space-y-3" role="list">
              {['Digital Workplace', 'Hybrid Cloud Services', 'NextGen Network', 'Cybersecurity'].map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="group flex items-center gap-3 text-gray-400 hover:text-brand-red active:text-brand-red transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2 focus:ring-offset-dark-bg rounded p-1 -m-1 min-h-[44px] hover:scale-105 active:scale-105"
                    aria-label={`Learn more about ${service}`}
                  >
                    <Image
                      src="/icons/arrow-white.svg"
                      alt=""
                      width={16}
                      height={16}
                      className="opacity-0 group-hover:opacity-100 group-active:opacity-100 -translate-x-2 group-hover:translate-x-0 group-active:translate-x-0 transition-all"
                      aria-hidden="true"
                    />
                    <span className="group-hover:translate-x-2 group-active:translate-x-2 transition-transform">{service}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-lg md:text-xl font-bold mb-6 text-white relative inline-block">
              Company
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-brand-red to-transparent"></span>
            </h3>
            <ul className="space-y-3" role="list">
              {[
                'About Us',
                'IMS Policy',
                'Supplier Relationship Management Policy',
                'License Management Policy',
                'Policy & Guidelines',
                'Acceptable Usage Policy',
                'Anti-Trust and Competition Compliance Policy',
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="group flex items-center gap-3 text-gray-400 hover:text-brand-red active:text-brand-red transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2 focus:ring-offset-dark-bg rounded p-1 -m-1 text-sm min-h-[44px] hover:scale-105 active:scale-105"
                    aria-label={`View ${item}`}
                  >
                    <Image
                      src="/icons/arrow-white.svg"
                      alt=""
                      width={16}
                      height={16}
                      className="opacity-0 group-hover:opacity-100 group-active:opacity-100 -translate-x-2 group-hover:translate-x-0 group-active:translate-x-0 transition-all"
                      aria-hidden="true"
                    />
                    <span className="group-hover:translate-x-2 group-active:translate-x-2 transition-transform">{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <h3 className="text-lg md:text-xl font-bold mb-6 text-white relative inline-block">
              Our Social Media
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-brand-red to-transparent"></span>
            </h3>
            <div className="flex gap-4 mb-8" role="list" aria-label="Social media links">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target={social.target}
                  rel={social.rel}
                  className="p-3 bg-dark-card rounded-lg border border-dark-border text-gray-400 hover:text-brand-red active:text-brand-red hover:border-brand-red active:border-brand-red hover:scale-125 active:scale-110 hover:rotate-12 active:rotate-6 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2 focus:ring-offset-dark-bg min-w-[44px] min-h-[44px] flex items-center justify-center glow-red"
                  aria-label={social.alt}
                >
                  <Image
                    src={social.icon}
                    alt=""
                    width={20}
                    height={20}
                    className="filter brightness-0 invert opacity-60 group-hover:opacity-100 group-active:opacity-100 transition-opacity"
                    aria-hidden="true"
                  />
                </a>
              ))}
            </div>
            <div className="flex flex-wrap gap-3" role="list" aria-label="Certifications">
              {certificates.map((cert, index) => (
                <div
                  key={index}
                  className="relative w-20 h-20 bg-dark-card border border-dark-border rounded-lg hover:border-brand-red active:border-brand-red transition-all duration-300 cursor-pointer overflow-hidden group focus-within:ring-2 focus-within:ring-brand-red focus-within:ring-offset-2 focus-within:ring-offset-dark-bg hover:scale-110 active:scale-105"
                  tabIndex={0}
                  role="img"
                  aria-label={cert.alt}
                >
                  <Image
                    src={cert.icon}
                    alt={cert.alt}
                    fill
                    className="object-contain p-2 group-hover:scale-110 group-active:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-dark-border pt-8 text-center">
          <p className="text-gray-500 text-sm">
            Copyright 2023. Ovationwps. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
