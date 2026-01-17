'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

interface ServiceCardProps {
  image: string
  title: string
  description: string
  features: string[]
}

export function ServiceCard({ image, title, description, features }: ServiceCardProps) {
  return (
    <motion.div
      className="bg-ovation-bg-secondary border border-ovation-border-primary rounded-lg overflow-hidden group transition-all duration-300"
      whileHover={{
        y: -8,
        boxShadow: '0 16px 48px rgba(0, 0, 0, 0.25)',
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative h-64 overflow-hidden">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
          className="relative w-full h-full"
        >
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-ovation-bg-primary/90 to-transparent" />
      </div>
      
      <div className="p-8">
        <h3 className="text-ovation-text-primary mb-4">{title}</h3>
        <p className="text-ovation-text-secondary mb-6">{description}</p>
        
        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3 text-ovation-text-secondary">
              <div className="w-1.5 h-1.5 rounded-full bg-ovation-brand-primary mt-2 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        
        <motion.div
          className="flex items-center gap-2 text-ovation-brand-primary font-semibold cursor-pointer"
          whileHover={{ gap: '12px' }}
          transition={{ duration: 0.3 }}
        >
          Learn More
          <ArrowRight className="w-5 h-5" />
        </motion.div>
      </div>
    </motion.div>
  )
}
