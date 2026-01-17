'use client'

import { motion } from 'framer-motion'
import { OvationButton } from './OvationButton'
import { CheckCircle2 } from 'lucide-react'

const benefits = [
  'Free consultation with our experts',
  'Customized solutions for your needs',
  'Proven track record of success',
  'Ongoing support and partnership',
]

export function CTASection() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-ovation-bg-secondary via-ovation-bg-primary to-ovation-bg-secondary relative overflow-hidden">
      {/* Background glow effects */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-ovation-brand-primary/10 rounded-full blur-3xl"
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

      <div className="ovation-container relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="bg-ovation-bg-secondary border border-ovation-border-accent rounded-2xl p-8 md:p-12 lg:p-16 shadow-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-12">
              <motion.p
                className="text-ovation-brand-primary font-semibold mb-4 tracking-wider uppercase"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Ready to Transform Your Workplace?
              </motion.p>
              
              <motion.h2
                className="text-ovation-text-primary mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Let&apos;s Build Something Great Together
              </motion.h2>
              
              <motion.p
                className="text-ovation-text-secondary text-lg max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Partner with Ovation to create a workplace that empowers your team and drives your business forward.
              </motion.p>
            </div>

            {/* Benefits Grid */}
            <motion.div
              className="grid md:grid-cols-2 gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                >
                  <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-ovation-brand-primary flex-shrink-0 mt-1" />
                  <span className="text-ovation-text-primary text-sm md:text-base">{benefit}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <OvationButton variant="primary" icon>
                Schedule Consultation
              </OvationButton>
              <OvationButton variant="secondary">
                Download Brochure
              </OvationButton>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              className="mt-12 pt-12 border-t border-ovation-border-primary text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              <p className="text-ovation-text-secondary mb-2">
                Questions? Call us at{' '}
                <a
                  href="tel:1-800-OVATION"
                  className="text-ovation-brand-primary hover:text-ovation-brand-primary-hover transition-colors"
                >
                  1-800-OVATION
                </a>
              </p>
              <p className="text-ovation-text-tertiary text-sm">
                Available Monday - Friday, 8AM - 6PM EST
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
