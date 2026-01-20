'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

export default function WhyChooseUs() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0')
            setTimeout(() => {
              setVisibleCards((prev) => {
                if (prev.includes(index)) return prev
                return [...prev, index]
              })
            }, index * 150)
            // Unobserve after first intersection to prevent re-triggering
            obs.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2, rootMargin: '50px' }
    )

    const cards = sectionRef.current?.querySelectorAll('[data-index]')
    cards?.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  const features = [
    {
      icon: '/icons/experience.svg',
      title: 'Experience',
      description: 'With over 25 years in the industry, we bring extensive knowledge and proven expertise to every project.',
      gradient: 'from-yellow-500/20 to-orange-500/20',
      hoverGradient: 'from-yellow-500/30 to-orange-500/30',
    },
    {
      icon: '/icons/team.svg',
      title: 'Dedicated Team',
      description: 'Our skilled professionals are committed to delivering exceptional service and support tailored to your needs.',
      gradient: 'from-blue-500/20 to-cyan-500/20',
      hoverGradient: 'from-blue-500/30 to-cyan-500/30',
    },
    {
      icon: '/icons/record.svg',
      title: 'Proven Track Record',
      description: 'We have successfully completed thousands of projects, earning the trust of businesses nationwide.',
      gradient: 'from-brand-red/20 to-pink-500/20',
      hoverGradient: 'from-brand-red/30 to-pink-500/30',
    },
    {
      icon: '/icons/solutions.svg',
      title: 'Tailored Solutions',
      description: 'Every business is unique. We customize our services to align with your specific requirements and goals.',
      gradient: 'from-green-500/20 to-emerald-500/20',
      hoverGradient: 'from-green-500/30 to-emerald-500/30',
    },
  ]

  return (
    <section id="about" ref={sectionRef} className="bg-dark-bg py-20 md:py-32 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-10" aria-hidden="true">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-red/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Why <span className="text-gradient">Choose Us</span>
          </h2>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-dark-card border border-dark-border rounded-full mb-6">
            <span className="w-2 h-2 bg-brand-red rounded-full animate-pulse"></span>
            <p className="text-brand-red text-xs uppercase tracking-widest font-semibold">Why us</p>
          </div>
          <p className="text-gray-400 text-base md:text-lg max-w-3xl mx-auto">
            At Ovation Workplace Services, we are committed to innovation, integrity, and customer satisfaction. 
            Our comprehensive IT solutions are designed to help your business thrive in today&apos;s digital landscape.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              data-index={index}
              className={`group premium-card p-6 hover-lift focus-within:ring-2 focus-within:ring-brand-red focus-within:ring-offset-2 focus-within:ring-offset-dark-bg transition-all duration-700 ease-out ${
                visibleCards.includes(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              tabIndex={0}
              role="article"
              aria-label={feature.title}
            >
              <div className={`relative mb-6 w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} group-hover:bg-gradient-to-br group-hover:${feature.hoverGradient} flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                <div className="absolute inset-0 bg-dark-card rounded-2xl opacity-90 group-hover:opacity-80 transition-opacity"></div>
                <Image
                  src={feature.icon}
                  alt={`${feature.title} icon`}
                  width={32}
                  height={32}
                  className="relative z-10 group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-3 group-hover:text-brand-red transition-colors relative inline-block">
                {feature.title}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-red group-hover:w-full transition-all duration-500"></span>
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm group-hover:text-gray-300 transition-colors">
                {feature.description}
              </p>
              <div className="mt-4 h-0.5 w-0 bg-gradient-to-r from-brand-red via-red-500 to-transparent group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
