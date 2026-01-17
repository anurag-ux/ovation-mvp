'use client'

import { motion } from 'framer-motion'
import { Target, Users, Award, TrendingUp } from 'lucide-react'
import { ValueCard } from './ValueCard'

const values = [
  {
    icon: Award,
    title: 'Integrity & Ethics',
    description: 'We conduct our business with the highest standards of integrity and ethical behavior, ensuring transparency and trust in all our interactions.',
  },
  {
    icon: Target,
    title: 'Transparency',
    description: 'We believe in open communication and clear processes, keeping our clients informed every step of the way.',
  },
  {
    icon: Users,
    title: 'Customer-Centric Focus',
    description: 'Your success is our priority. We tailor our solutions to meet your unique needs and exceed your expectations.',
  },
]

export function CoreValuesSection() {
  return (
    <section id="about" className="py-20 md:py-32 bg-ovation-bg-primary">
      <div className="ovation-container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-ovation-brand-primary font-semibold mb-4 tracking-wider uppercase text-xs md:text-sm">
            Our Values
          </p>
          <h2 className="ovation-h2 text-ovation-text-primary mb-6">
            Our Core Values
          </h2>
          <p className="text-ovation-text-secondary max-w-3xl mx-auto text-base md:text-lg">
            Trust is the cornerstone of our relationship with each and every client
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <ValueCard key={value.title} {...value} />
          ))}
        </div>
      </div>
    </section>
  )
}
