'use client'

import Link from 'next/link'
import Image from 'next/image'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube } from 'react-icons/fa'

// Social links
const socialLinks = [
  { icon: FaFacebookF, href: 'https://facebook.com/ovationwps', label: 'Facebook', color: 'hover:bg-blue-600' },
  { icon: FaTwitter, href: 'https://twitter.com/ovationwps', label: 'Twitter', color: 'hover:bg-sky-500' },
  { icon: FaLinkedinIn, href: 'https://linkedin.com/company/ovationwps', label: 'LinkedIn', color: 'hover:bg-blue-700' },
  { icon: FaInstagram, href: 'https://instagram.com/ovationwps', label: 'Instagram', color: 'hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-500' },
  { icon: FaYoutube, href: 'https://youtube.com/ovationwps', label: 'YouTube', color: 'hover:bg-red-600' },
]

export function Footer() {
  return (
    <footer id="footer" className="bg-gray-900 text-gray-300 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="relative h-10 w-auto">
                <Image
                  src="/logos/ovation-logo-option2.png"
                  alt="Ovation Workplace Services"
                  width={180}
                  height={50}
                  className="h-10 w-auto object-contain brightness-0 invert"
                />
              </div>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              Your trusted partner for comprehensive IT solutions. We deliver exceptional service and support to help your business thrive.
            </p>
            
            {/* Social Share Buttons */}
            <div>
              <p className="text-white font-semibold mb-4">Follow Us</p>
              <div className="flex items-center gap-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 ${social.color}`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#services" className="hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#careers" className="hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Email: info@ovationwps.com</li>
              <li>Phone: 1-800-OVATION</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Ovation Workplace Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
