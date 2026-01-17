'use client'

import { motion } from 'framer-motion'
import { OvationButton } from './OvationButton'
import Image from 'next/image'

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-28">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://admin.ovationwps.com/files/hero.jpg"
          alt=""
          fill
          className="object-cover opacity-20"
          priority
          sizes="100vw"
        />
      </div>
      
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-ovation-bg-primary/95 via-ovation-bg-primary/90 to-ovation-bg-secondary/95" />
      
      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 right-20 w-96 h-96 bg-ovation-brand-primary/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      <motion.div
        className="absolute bottom-20 left-20 w-96 h-96 bg-ovation-brand-accent/10 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Content */}
      <div className="relative z-10 ovation-container pt-8 pb-20 md:pb-32">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.p
              className="text-ovation-brand-primary font-semibold mb-4 md:mb-6 tracking-wider uppercase text-xs md:text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Your Trusted Partner
            </motion.p>
            
            <motion.h1
              className="ovation-h1 text-ovation-text-primary mb-6 md:mb-8 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Your Trusted Partner for Comprehensive IT Solutions
            </motion.h1>
            
            <motion.p
              className="text-ovation-text-secondary mb-10 md:mb-12 max-w-3xl mx-auto text-base md:text-lg leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Ovation Workplace Services is dedicated to providing exceptional IT solutions and support to businesses of all sizes. With our comprehensive range of services, experienced team, and commitment to excellence, we help organizations optimize their technology infrastructure and achieve their business goals.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <OvationButton variant="primary" icon>
                Get Started
              </OvationButton>
              <OvationButton variant="secondary">
                Learn More
              </OvationButton>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-20 border-t border-ovation-border-primary"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            {[
              { value: '10k+', label: 'Satisfied Customers' },
              { value: '25+', label: 'Years of Experience' },
              { value: '2025+', label: 'Individual Models Supported' },
              { value: '28k+', label: 'Zip Codes with NBD or Better SLA' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
              >
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-ovation-brand-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-ovation-text-secondary text-xs md:text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
