'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

export default function CoreValues() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0')
            setTimeout(() => {
              setVisibleCards((prev) => [...prev, index])
            }, index * 200)
          }
        })
      },
      { threshold: 0.2 }
    )

    const cards = sectionRef.current?.querySelectorAll('[data-index]')
    cards?.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  const values = [
    {
      icon: '/icons/integrity-ethics.svg',
      title: 'Integrity & Ethics',
      description: 'We conduct our business with the highest standards of integrity and ethical behavior, ensuring transparency and trust in all our interactions.',
      gradient: 'from-blue-500/20 to-purple-500/20',
      hoverGradient: 'from-blue-500/30 to-purple-500/30',
    },
    {
      icon: '/icons/transparency.svg',
      title: 'Transparency',
      description: 'We believe in open communication and clear processes, keeping our clients informed every step of the way.',
      gradient: 'from-brand-red/20 to-pink-500/20',
      hoverGradient: 'from-brand-red/30 to-pink-500/30',
    },
    {
      icon: '/icons/customer-centric.svg',
      title: 'Customer-Centric Focus',
      description: 'Your success is our priority. We tailor our solutions to meet your unique needs and exceed your expectations.',
      gradient: 'from-green-500/20 to-teal-500/20',
      hoverGradient: 'from-green-500/30 to-teal-500/30',
    },
  ]

  return (
    <section id="core-values" ref={sectionRef} className="bg-dark-bg py-20 md:py-32 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10" aria-hidden="true">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-brand-red/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-blue-500/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-block px-4 py-2 bg-brand-red/10 border border-brand-red/30 rounded-full mb-6">
            <p className="text-brand-red text-xs uppercase tracking-widest font-semibold">Our Values</p>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Our <span className="text-gradient">Core Values</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
            Trust is the cornerstone of our relationship with each and every client
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <div
              key={index}
              data-index={index}
              className={`group premium-card p-8 rounded-2xl hover-lift ${
                visibleCards.includes(index) ? 'animate-fade-in-up opacity-100' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
              tabIndex={0}
              role="article"
              aria-label={value.title}
            >
              <div className={`relative mb-6 w-20 h-20 rounded-2xl bg-gradient-to-br ${value.gradient} group-hover:bg-gradient-to-br group-hover:${value.hoverGradient} flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                <div className="absolute inset-0 bg-dark-card rounded-2xl opacity-90 group-hover:opacity-80 transition-opacity"></div>
                <Image
                  src={value.icon}
                  alt={`${value.title} icon`}
                  width={40}
                  height={40}
                  className="relative z-10 group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-brand-red transition-colors relative inline-block">
                {value.title}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-red group-hover:w-full transition-all duration-500"></span>
              </h3>
              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                {value.description}
              </p>
              <div className="mt-6 h-1 w-0 bg-gradient-to-r from-brand-red via-red-500 to-transparent group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
