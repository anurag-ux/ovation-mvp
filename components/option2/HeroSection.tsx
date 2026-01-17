'use client'

import { motion } from 'framer-motion'
import { OvationButton } from './OvationButton'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-ovation-bg-primary via-ovation-bg-secondary to-ovation-bg-primary" />
      
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
      <div className="relative z-10 ovation-container py-32 md:py-40">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.p
              className="text-ovation-brand-primary font-semibold mb-6 tracking-wider uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Excellence in Workplace Services
            </motion.p>
            
            <motion.h1
              className="text-ovation-text-primary mb-8 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Transform Your Workplace with Innovative Solutions
            </motion.h1>
            
            <motion.p
              className="text-ovation-text-secondary mb-12 max-w-3xl mx-auto text-lg md:text-xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              We deliver comprehensive facility management and workspace solutions that empower your business to thrive in the modern workplace.
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
              { value: '500+', label: 'Clients Served' },
              { value: '25+', label: 'Years Experience' },
              { value: '98%', label: 'Client Satisfaction' },
              { value: '24/7', label: 'Support Available' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-bold text-ovation-brand-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-ovation-text-secondary text-sm md:text-base">
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
