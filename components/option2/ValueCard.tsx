'use client'

import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'

interface ValueCardProps {
  icon: LucideIcon
  title: string
  description: string
}

export function ValueCard({ icon: Icon, title, description }: ValueCardProps) {
  return (
    <motion.div
      className="bg-ovation-bg-secondary border border-ovation-border-primary rounded-lg p-8 transition-all duration-300"
      whileHover={{
        y: -8,
        boxShadow: '0 8px 32px rgba(185, 28, 58, 0.15)',
        borderColor: 'var(--ovation-border-accent)',
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-ovation-brand-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
        <Icon className="w-8 h-8 text-ovation-brand-primary" />
      </div>
      <h3 className="text-ovation-text-primary mb-4">{title}</h3>
      <p className="text-ovation-text-secondary">{description}</p>
    </motion.div>
  )
}
