'use client'

import { motion } from 'framer-motion'
import { Target, Users, Award, TrendingUp } from 'lucide-react'
import { ValueCard } from './ValueCard'

const values = [
  {
    icon: Target,
    title: 'Excellence',
    description: 'We strive for the highest standards in everything we do, delivering exceptional service quality and innovative solutions.',
  },
  {
    icon: Users,
    title: 'Partnership',
    description: 'We build lasting relationships with our clients, working together to achieve their workplace goals and objectives.',
  },
  {
    icon: Award,
    title: 'Integrity',
    description: 'We operate with transparency and honesty, maintaining the trust our clients place in us every single day.',
  },
  {
    icon: TrendingUp,
    title: 'Innovation',
    description: 'We continuously evolve our services and solutions to meet the changing needs of the modern workplace.',
  },
]

export function CoreValuesSection() {
  return (
    <section className="py-20 md:py-32 bg-ovation-bg-primary">
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
            Built on a Foundation of Trust
          </h2>
          <p className="text-ovation-text-secondary max-w-3xl mx-auto text-base md:text-lg">
            Our core values guide every decision we make and every service we deliver, ensuring consistent excellence for our clients.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <ValueCard key={value.title} {...value} />
          ))}
        </div>
      </div>
    </section>
  )
}
