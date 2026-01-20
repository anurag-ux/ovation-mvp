'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, useMotionValue, useTransform, animate, PanInfo } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

export default function Services() {
  const [activeTab, setActiveTab] = useState('Field Services')
  const [activeSlide, setActiveSlide] = useState(0)
  const [containerWidth, setContainerWidth] = useState(0)
  const [perspectiveX, setPerspectiveX] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const services = {
    'Field Services': {
      title: 'Field Services',
      description: 'Our field services team provides on-site technical support and maintenance to ensure your IT infrastructure operates at peak performance. With extensive coverage and rapid response times, we deliver expert solutions wherever you need them.',
      icon: '/icons/field-service.svg',
    },
    'Staffing Services': {
      title: 'Staffing Services',
      description: 'We provide skilled IT professionals to augment your team, from temporary support to long-term placements. Our staffing solutions help you scale your workforce efficiently.',
      icon: '/icons/staff-service.svg',
    },
    'Professional Services': {
      title: 'Professional Services',
      description: 'Our expert consultants deliver strategic IT guidance, implementation services, and project management to help you achieve your technology goals.',
      icon: '/icons/professional-service.svg',
    },
    'Managed Services': {
      title: 'Managed Services',
      description: 'Comprehensive IT management solutions that handle your technology infrastructure, allowing you to focus on your core business operations.',
      icon: '/icons/managed-service.svg',
    },
  }

  const serviceKeys = Object.keys(services)

  // 3D Carousel Configuration - Increased width for full description
  const ITEM_WIDTH = 300
  const ITEM_GAP = 20
  const TRACK_ITEM_OFFSET = ITEM_WIDTH + ITEM_GAP
  const TOTAL_ITEMS = serviceKeys.length

  // Motion values for drag animation
  const x = useMotionValue(0)

  // Update container width on mount and resize
  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth)
      }
    }
    updateWidth()
    window.addEventListener('resize', updateWidth)
    return () => window.removeEventListener('resize', updateWidth)
  }, [])

  // Subscribe to x changes for dynamic perspective
  useEffect(() => {
    const unsubscribe = x.on('change', (value) => {
      const pos = -value / TRACK_ITEM_OFFSET
      setPerspectiveX(pos * TRACK_ITEM_OFFSET + ITEM_WIDTH / 2)
    })
    // Set initial value
    setPerspectiveX(ITEM_WIDTH / 2)
    return () => unsubscribe()
  }, [x, TRACK_ITEM_OFFSET, ITEM_WIDTH])

  // Animate to specific slide
  const goToSlide = (index: number) => {
    const targetX = -index * TRACK_ITEM_OFFSET
    animate(x, targetX, {
      type: 'spring',
      stiffness: 300,
      damping: 30,
    })
    setActiveSlide(index)
  }

  // Handle drag end with circular navigation
  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const velocity = info.velocity.x
    const offset = info.offset.x

    let newIndex = activeSlide

    if (Math.abs(velocity) > 500) {
      // Flick gesture
      newIndex = velocity > 0 ? activeSlide - 1 : activeSlide + 1
    } else if (Math.abs(offset) > ITEM_WIDTH / 3) {
      // Drag gesture
      newIndex = offset > 0 ? activeSlide - 1 : activeSlide + 1
    }

    // Circular navigation - wrap around
    if (newIndex < 0) {
      newIndex = TOTAL_ITEMS - 1
    } else if (newIndex >= TOTAL_ITEMS) {
      newIndex = 0
    }
    goToSlide(newIndex)
  }

  // Navigate to next slide (circular)
  const goToNextSlide = () => {
    const newIndex = activeSlide >= TOTAL_ITEMS - 1 ? 0 : activeSlide + 1
    goToSlide(newIndex)
  }

  // Navigate to previous slide (circular)
  const goToPrevSlide = () => {
    const newIndex = activeSlide <= 0 ? TOTAL_ITEMS - 1 : activeSlide - 1
    goToSlide(newIndex)
  }

  return (
    <section id="services" className="bg-dark-surface py-20 md:py-32 relative overflow-x-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20" aria-hidden="true">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 overflow-x-hidden">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-16 animate-fade-in-up">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-brand-red"></div>
            <p className="text-brand-red text-xs uppercase tracking-widest font-semibold">Our Services</p>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-brand-red"></div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Services We <span className="text-gradient">Offer</span>
          </h2>
        </div>

        {/* ==================== MOBILE 3D CAROUSEL VIEW ==================== */}
        <div className="block md:hidden">
          {/* 3D Carousel Container with Perspective */}
          <div
            ref={containerRef}
            className="relative overflow-hidden"
            style={{
              perspective: 1000,
              perspectiveOrigin: `${perspectiveX}px 50%`,
            }}
          >
            <motion.div
              className="flex cursor-grab active:cursor-grabbing"
              style={{
                x,
                gap: ITEM_GAP,
                paddingLeft: (containerWidth - ITEM_WIDTH) / 2,
                paddingRight: (containerWidth - ITEM_WIDTH) / 2,
              }}
              drag="x"
              dragConstraints={{
                left: -(TOTAL_ITEMS - 1) * TRACK_ITEM_OFFSET - TRACK_ITEM_OFFSET * 0.3,
                right: TRACK_ITEM_OFFSET * 0.3,
              }}
              dragElastic={0.2}
              onDragEnd={handleDragEnd}
            >
              {serviceKeys.map((serviceKey, index) => {
                const service = services[serviceKey as keyof typeof services]
                
                // Calculate rotateY based on position
                const range = [
                  (index - 1) * -TRACK_ITEM_OFFSET,
                  index * -TRACK_ITEM_OFFSET,
                  (index + 1) * -TRACK_ITEM_OFFSET,
                ]

                return (
                  <ServiceCard3D
                    key={serviceKey}
                    service={service}
                    x={x}
                    range={range}
                    itemWidth={ITEM_WIDTH}
                    isActive={activeSlide === index}
                  />
                )
              })}
            </motion.div>
          </div>

          {/* Carousel Navigation Dots - No Arrows */}
          <div className="flex justify-center gap-2 mt-8">
            {serviceKeys.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-brand-red ${
                  activeSlide === index
                    ? 'w-8 h-2 bg-brand-red'
                    : 'w-2 h-2 bg-dark-border hover:bg-gray-500'
                }`}
                aria-label={`Go to ${serviceKeys[index]}`}
              />
            ))}
          </div>
        </div>

        {/* ==================== DESKTOP TABS VIEW ==================== */}
        <div className="hidden md:block">
          {/* Service Tabs */}
          <div className="flex flex-wrap justify-center gap-x-[2.75rem] gap-y-8 py-10 mb-16 px-2 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden" role="tablist" aria-label="Service categories">
            {serviceKeys.map((service, index) => (
              <button
                key={service}
                onClick={() => setActiveTab(service)}
                role="tab"
                aria-selected={activeTab === service}
                aria-controls={`service-${service.toLowerCase().replace(/\s+/g, '-')}`}
                className={`relative px-4 sm:px-6 py-4 sm:py-5 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 overflow-hidden group flex items-center gap-2 min-h-[44px] flex-shrink-0 focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2 focus:ring-offset-dark-surface ${
                  activeTab === service
                    ? 'bg-brand-red text-white shadow-lg shadow-brand-red/50 sm:scale-105 glow-red'
                    : 'bg-dark-card text-gray-300 border border-dark-border hover:border-brand-red/50 hover:text-white sm:hover:scale-105'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Image
                  src={services[service as keyof typeof services].icon}
                  alt=""
                  width={18}
                  height={18}
                  className={`relative z-10 flex-shrink-0 transition-opacity duration-300 ${
                    activeTab === service 
                      ? 'opacity-100 brightness-0 invert' 
                      : 'opacity-70'
                  }`}
                  aria-hidden="true"
                />
                <span className="relative z-10 whitespace-nowrap">{service}</span>
                {activeTab === service && (
                  <span className="absolute inset-0 bg-gradient-to-r from-brand-red to-red-600"></span>
                )}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Left Content */}
            <div
              id={`service-${activeTab.toLowerCase().replace(/\s+/g, '-')}`}
              role="tabpanel"
              aria-labelledby={activeTab}
              className="text-white animate-fade-in-left"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-gradient-to-br from-brand-red/20 to-transparent rounded-xl border border-brand-red/30 flex-shrink-0">
                  <Image
                    src={services[activeTab as keyof typeof services].icon}
                    alt={`${activeTab} icon`}
                    width={48}
                    height={48}
                  />
                </div>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent relative inline-block">
                  {services[activeTab as keyof typeof services].title}
                  <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-brand-red via-red-500 to-transparent"></span>
                </h3>
              </div>
              <p className="text-lg text-gray-400 leading-relaxed mb-6">
                {services[activeTab as keyof typeof services].description}
              </p>
              <button
                type="button"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-dark-card border border-dark-border rounded-lg hover:border-brand-red hover:text-brand-red hover:bg-brand-red/10 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2 focus:ring-offset-dark-surface min-h-[44px] hover:scale-105"
                aria-label={`Learn more about ${activeTab}`}
              >
                Learn More
                <ArrowRight className="group-hover:translate-x-2 transition-transform duration-300" size={20} aria-hidden="true" />
              </button>
            </div>

            {/* Right Content - Visuals */}
            <div className="space-y-6 animate-fade-in-right">
              <div className="group relative premium-card rounded-2xl overflow-hidden hover-lift">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-red/20 via-brand-red/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 shimmer" aria-hidden="true"></div>
                <div className="relative p-8 h-48 flex items-center justify-center">
                  <div className="text-center">
                    <div className="mb-4 flex justify-center">
                      <div className="p-4 bg-dark-card rounded-xl border border-dark-border group-hover:border-brand-red group-hover:scale-110 transition-all duration-300 glow-red">
                        <Image src="/icons/self.svg" alt="Satisfied customers icon" width={40} height={40} className="group-hover:scale-110 transition-transform" />
                      </div>
                    </div>
                    <p className="text-2xl md:text-3xl font-bold text-white group-hover:scale-110 transition-transform">10k+</p>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors">Satisfied Customers</p>
                  </div>
                </div>
              </div>
              
              <div className="group relative premium-card rounded-2xl overflow-hidden hover-lift">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 via-yellow-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 shimmer" aria-hidden="true"></div>
                <div className="relative p-8 h-48 flex items-center justify-center">
                  <div className="text-center">
                    <div className="mb-4 flex justify-center">
                      <div className="p-4 bg-dark-card rounded-xl border border-dark-border group-hover:border-yellow-500 group-hover:scale-110 transition-all duration-300">
                        <Image src="/icons/success.svg" alt="Years of experience icon" width={40} height={40} className="group-hover:scale-110 transition-transform" />
                      </div>
                    </div>
                    <p className="text-2xl md:text-3xl font-bold text-white group-hover:scale-110 transition-transform">25+</p>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors">Years of Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// 3D Service Card Component with rotateY effect
interface ServiceCard3DProps {
  service: {
    title: string
    description: string
    icon: string
  }
  x: ReturnType<typeof useMotionValue<number>>
  range: number[]
  itemWidth: number
  isActive: boolean
}

function ServiceCard3D({ service, x, range, itemWidth, isActive }: ServiceCard3DProps) {
  // Calculate rotateY based on x position
  const rotateY = useTransform(x, range, [45, 0, -45], { clamp: false })
  const scale = useTransform(x, range, [0.9, 1, 0.9], { clamp: true })
  const opacity = useTransform(x, range, [0.7, 1, 0.7], { clamp: true })
  const z = useTransform(x, range, [-80, 0, -80], { clamp: true })

  return (
    <motion.div
      className="flex-shrink-0"
      style={{
        width: itemWidth,
        rotateY,
        scale,
        opacity,
        z,
        transformStyle: 'preserve-3d',
      }}
    >
      <div 
        className={`bg-dark-card border rounded-2xl p-6 flex flex-col h-[520px] transition-all duration-300 ${
          isActive ? 'border-brand-red/50 shadow-lg shadow-brand-red/20' : 'border-dark-border'
        }`}
      >
        {/* Top: Icon & Title */}
        <div className="flex items-center gap-3 mb-5">
          <div className="p-3 bg-gradient-to-br from-brand-red/20 to-transparent rounded-xl border border-brand-red/30 flex-shrink-0">
            <Image
              src={service.icon}
              alt={`${service.title} icon`}
              width={36}
              height={36}
            />
          </div>
          <h3 className="text-xl font-bold text-white">
            {service.title}
          </h3>
        </div>

        {/* Middle: Full Description + Learn More */}
        <p className="text-gray-400 text-sm leading-relaxed mb-5 flex-grow">
          {service.description}
        </p>
        <button
          type="button"
          className="group inline-flex items-center gap-2 px-5 py-2.5 bg-dark-surface border border-dark-border rounded-lg hover:border-brand-red hover:text-brand-red active:border-brand-red active:text-brand-red transition-all duration-300 text-white text-sm font-medium w-fit mb-5"
          aria-label={`Learn more about ${service.title}`}
        >
          Learn More
          <ArrowRight className="group-hover:translate-x-1 group-active:translate-x-1 transition-transform duration-300" size={16} aria-hidden="true" />
        </button>

        {/* Bottom: Stats Tiles - 2 Column Grid */}
        <div className="grid grid-cols-2 gap-3">
          {/* Satisfied Customers Tile */}
          <div className="aspect-square bg-dark-surface border border-dark-border rounded-xl flex flex-col items-center justify-center p-3 hover:border-brand-red/50 active:border-brand-red/50 transition-colors">
            <div className="p-2.5 bg-dark-card rounded-lg border border-dark-border mb-2">
              <Image src="/icons/self.svg" alt="" width={22} height={22} aria-hidden="true" />
            </div>
            <p className="text-xl font-bold text-white">10k+</p>
            <p className="text-gray-400 text-[10px] text-center leading-tight">Satisfied Customers</p>
          </div>

          {/* Years of Experience Tile */}
          <div className="aspect-square bg-dark-surface border border-dark-border rounded-xl flex flex-col items-center justify-center p-3 hover:border-yellow-500/50 active:border-yellow-500/50 transition-colors">
            <div className="p-2.5 bg-dark-card rounded-lg border border-dark-border mb-2">
              <Image src="/icons/success.svg" alt="" width={22} height={22} aria-hidden="true" />
            </div>
            <p className="text-xl font-bold text-white">25+</p>
            <p className="text-gray-400 text-[10px] text-center leading-tight">Years of Experience</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
