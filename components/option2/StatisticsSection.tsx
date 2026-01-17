'use client'

import { motion } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'

interface Stat {
  value: number
  suffix: string
  label: string
  description: string
}

const stats: Stat[] = [
  {
    value: 2025,
    suffix: '+',
    label: 'Individual Models Supported',
    description: 'Comprehensive device support coverage',
  },
  {
    value: 28140,
    suffix: '+',
    label: 'Zip Codes with NBD or Better SLA offered',
    description: 'Extensive service coverage nationwide',
  },
  {
    value: 78405,
    suffix: '+',
    label: 'Successful Service Events',
    description: 'Proven track record of excellence',
  },
]

function CountUpAnimation({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const currentRef = ref.current
    if (!currentRef) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.5 }
    )

    observer.observe(currentRef)

    return () => {
      observer.unobserve(currentRef)
    }
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const duration = 2000 // 2 seconds
    const steps = 60
    const increment = value / steps
    const stepDuration = duration / steps

    let currentStep = 0

    const timer = setInterval(() => {
      currentStep++
      if (currentStep <= steps) {
        setCount(Math.floor(increment * currentStep))
      } else {
        setCount(value)
        clearInterval(timer)
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [isVisible, value])

  return (
    <div ref={ref} className="text-4xl md:text-5xl lg:text-6xl font-bold text-ovation-brand-primary">
      {count.toLocaleString()}
      {suffix}
    </div>
  )
}

export function StatisticsSection() {
  return (
    <section className="py-20 md:py-32 bg-ovation-bg-primary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_var(--ovation-brand-primary),transparent_50%)]" />
      </div>

      <div className="ovation-container relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-ovation-brand-primary font-semibold mb-4 tracking-wider uppercase text-xs md:text-sm">
            Company Statistics
          </p>
          <h2 className="ovation-h2 text-ovation-text-primary mb-6">
            Our Track Record
          </h2>
          <p className="text-ovation-text-secondary max-w-3xl mx-auto text-base md:text-lg">
            With over 25 years in the industry, we bring extensive knowledge and proven expertise to every project.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <CountUpAnimation value={stat.value} suffix={stat.suffix} />
              <h4 className="ovation-h4 text-ovation-text-primary mt-4 mb-2">{stat.label}</h4>
              <p className="text-ovation-text-secondary text-sm md:text-base">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
