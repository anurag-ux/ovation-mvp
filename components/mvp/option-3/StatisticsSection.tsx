'use client'

import { motion } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'

interface Stat {
  value: number
  suffix: string
  label: string
}

const stats: Stat[] = [
  {
    value: 2025,
    suffix: '+',
    label: 'Individual Models Supported',
  },
  {
    value: 28140,
    suffix: '+',
    label: 'Zip Codes with NBD or Better SLA',
  },
  {
    value: 78405,
    suffix: '+',
    label: 'Successful Service Events',
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

    const duration = 2000
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
    <div ref={ref} className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white drop-shadow-lg">
      {count.toLocaleString()}
      {suffix}
    </div>
  )
}

export function StatisticsSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#b30920] via-red-700 to-[#b30920] relative overflow-hidden snap-start">
      {/* Artistic Background */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-white/90 font-semibold mb-4 tracking-wider uppercase text-sm">
            Our Impact
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Numbers That Speak
          </h2>
          <p className="text-white/80 text-lg max-w-3xl mx-auto">
            With over 25 years in the industry, we bring extensive knowledge and proven expertise to every project.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <CountUpAnimation value={stat.value} suffix={stat.suffix} />
              <h4 className="text-white text-lg font-semibold mt-4 mb-2">{stat.label}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
