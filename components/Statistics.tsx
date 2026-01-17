'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

export default function Statistics() {
  const [counted, setCounted] = useState(false)
  const [values, setValues] = useState({ first: 0, second: 0, third: 0 })
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !counted) {
            setCounted(true)
            animateCounters()
          }
        })
      },
      { threshold: 0.5 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [counted])

  const animateCounters = () => {
    const targets = { first: 2025, second: 28140, third: 78405 }
    const duration = 2000
    const steps = 60
    const stepTime = duration / steps

    let currentStep = 0
    const timer = setInterval(() => {
      currentStep++
      const progress = currentStep / steps
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)

      setValues({
        first: Math.floor(targets.first * easeOutQuart),
        second: Math.floor(targets.second * easeOutQuart),
        third: Math.floor(targets.third * easeOutQuart),
      })

      if (currentStep >= steps) {
        setValues(targets)
        clearInterval(timer)
      }
    }, stepTime)
  }

  const stats = [
    {
      icon: '/icons/self.svg',
      number: values.first,
      suffix: '+',
      label: 'Individual Models Supported',
      gradient: 'from-blue-400 to-cyan-400',
    },
    {
      icon: '/icons/offered.svg',
      number: values.second,
      suffix: '+',
      label: 'Zip Codes with NBD or Better SLA offered',
      gradient: 'from-brand-red to-pink-400',
    },
    {
      icon: '/icons/success.svg',
      number: values.third,
      suffix: '+',
      label: 'Successful Service Events',
      gradient: 'from-green-400 to-emerald-400',
    },
  ]

  return (
    <section ref={sectionRef} className="relative bg-gradient-to-br from-dark-surface via-dark-bg to-dark-surface py-20 md:py-32 overflow-hidden" aria-label="Company statistics">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-10" aria-hidden="true">
        <Image
          src="/images/counter-bg.png"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>

      {/* Animated Background */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-brand-red/10 via-transparent to-brand-red/10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(179,9,32,0.1),transparent_50%)]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center group ${
                counted ? 'animate-fade-in-up opacity-100' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
              role="article"
              aria-label={`${stat.number}${stat.suffix} ${stat.label}`}
            >
              <div className="relative inline-flex items-center justify-center mb-6">
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 animate-pulse`} aria-hidden="true"></div>
                <div className="relative p-6 bg-dark-card rounded-2xl border border-dark-border group-hover:border-brand-red/50 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                  <Image
                    src={stat.icon}
                    alt={`${stat.label} icon`}
                    width={56}
                    height={56}
                    className="group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
              <div className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-br ${stat.gradient} bg-clip-text text-transparent`}>
                {stat.number.toLocaleString()}{stat.suffix}
              </div>
              <div className="text-gray-400 text-base md:text-lg leading-relaxed group-hover:text-gray-300 transition-colors">
                {stat.label}
              </div>
              <div className="mt-6 h-1 w-0 bg-gradient-to-r from-brand-red to-transparent group-hover:w-full transition-all duration-700 mx-auto max-w-xs"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
