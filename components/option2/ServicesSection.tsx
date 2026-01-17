'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'

const services = [
  {
    title: 'Field Services',
    description: 'Our field services team provides on-site technical support and maintenance to ensure your IT infrastructure operates at peak performance. With extensive coverage and rapid response times, we deliver expert solutions wherever you need them.',
    icon: '/icons/field-service.svg',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop&q=80',
    features: [
      'On-site technical support',
      'Rapid response times',
      'Extensive coverage',
      'Expert solutions',
    ],
  },
  {
    title: 'Staffing Services',
    description: 'We provide skilled IT professionals to augment your team, from temporary support to long-term placements. Our staffing solutions help you scale your workforce efficiently.',
    icon: '/icons/staff-service.svg',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop&q=80',
    features: [
      'Skilled IT professionals',
      'Temporary and long-term placements',
      'Workforce scaling',
      'Efficient solutions',
    ],
  },
  {
    title: 'Professional Services',
    description: 'Our expert consultants deliver strategic IT guidance, implementation services, and project management to help you achieve your technology goals.',
    icon: '/icons/professional-service.svg',
    image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&h=600&fit=crop&q=80',
    features: [
      'Strategic IT guidance',
      'Implementation services',
      'Project management',
      'Technology goal achievement',
    ],
  },
  {
    title: 'Managed Services',
    description: 'Comprehensive IT management solutions that handle your technology infrastructure, allowing you to focus on your core business operations.',
    icon: '/icons/managed-service.svg',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop&q=80',
    features: [
      'Comprehensive IT management',
      'Infrastructure handling',
      'Focus on core business',
      '24/7 support',
    ],
  },
]

export function ServicesSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95,
      rotateY: direction > 0 ? 15 : -15,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95,
      rotateY: direction < 0 ? 15 : -15,
    }),
  }

  const swipeConfidenceThreshold = 10000
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity
  }

  const paginate = (newDirection: number) => {
    setDirection(newDirection)
    if (newDirection === 1) {
      setCurrentIndex((prev) => (prev + 1) % services.length)
    } else {
      setCurrentIndex((prev) => (prev - 1 + services.length) % services.length)
    }
  }

  // Disable auto-play - user controls via tabs

  const currentService = services[currentIndex]

  return (
    <section id="services" className="py-20 md:py-32 bg-ovation-bg-secondary relative overflow-hidden">
      <div className="ovation-container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-ovation-brand-primary font-semibold mb-4 tracking-wider uppercase text-xs md:text-sm">
            Our Services
          </p>
          <h2 className="ovation-h2 text-ovation-text-primary mb-6">
            Services We Offer
          </h2>
          <p className="text-ovation-text-secondary max-w-3xl mx-auto text-base md:text-lg">
            At Ovation Workplace Services, we are committed to innovation, integrity, and customer satisfaction. Our comprehensive IT solutions are designed to help your business thrive in today&apos;s digital landscape.
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative max-w-5xl mx-auto">
          {/* Service Tabs at Top */}
          <div className="flex justify-center gap-2 sm:gap-3 mb-8 flex-wrap px-4">
            {services.map((service, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1)
                  setCurrentIndex(index)
                }}
                className={`px-4 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-ovation-brand-primary flex items-center gap-2 ${
                  index === currentIndex
                    ? 'bg-ovation-brand-primary text-ovation-text-primary shadow-lg shadow-ovation-brand-primary/50'
                    : 'bg-ovation-bg-primary text-ovation-text-secondary hover:text-ovation-text-primary border border-ovation-border-primary hover:border-ovation-brand-primary/50'
                }`}
                aria-label={`View ${service.title}`}
              >
                {index === currentIndex && (
                  <Image
                    src={service.icon}
                    alt=""
                    width={18}
                    height={18}
                    className="brightness-0 invert"
                  />
                )}
                {service.title}
              </button>
            ))}
          </div>

          {/* Carousel */}
          <div className="relative min-h-[600px] md:h-[500px] rounded-xl overflow-hidden border border-ovation-border-primary shadow-lg bg-ovation-bg-primary" style={{ perspective: '1000px' }}>
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: 'spring', stiffness: 200, damping: 25 },
                  opacity: { duration: 0.3 },
                  scale: { duration: 0.3 },
                  rotateY: { duration: 0.3 },
                }}
                drag="x"
                dragConstraints={{ left: -100, right: 100 }}
                dragElastic={0.2}
                whileDrag={{ scale: 0.98 }}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x)

                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1)
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1)
                  }
                }}
                className="absolute inset-0"
                style={{ transformStyle: 'preserve-3d', willChange: 'transform' }}
              >
                <div className="relative h-full w-full bg-ovation-bg-secondary">
                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col md:flex-row items-center justify-center p-4 md:p-8 lg:p-10 gap-6 md:gap-12">
                    {/* Left: Image */}
                    <motion.div
                      initial={{ x: -30, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.2, duration: 0.6 }}
                      className="relative w-full md:w-1/2 h-48 sm:h-56 md:h-full md:max-h-96 rounded-xl overflow-hidden border border-ovation-border-primary shadow-lg flex-shrink-0"
                    >
                      <Image
                        src={currentService.image}
                        alt={`${currentService.title} illustration`}
                        fill
                        className="object-cover"
                        priority={currentIndex === 0}
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ovation-bg-secondary/20 to-transparent"></div>
                    </motion.div>

                    {/* Right: Content */}
                    <div className="w-full md:w-1/2 text-center md:text-left">
                      {/* Icon */}
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="inline-flex items-center justify-center w-16 h-16 md:w-18 md:h-18 bg-ovation-brand-primary/20 rounded-xl border border-ovation-brand-primary/30 mb-5"
                      >
                        <Image
                          src={currentService.icon}
                          alt={`${currentService.title} icon`}
                          width={36}
                          height={36}
                        />
                      </motion.div>

                      {/* Title */}
                      <motion.h3
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        className="ovation-h3 text-ovation-text-primary mb-4"
                      >
                        {currentService.title}
                      </motion.h3>

                      {/* Description */}
                      <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        className="text-ovation-text-secondary text-base md:text-lg mb-6 leading-relaxed"
                      >
                        {currentService.description}
                      </motion.p>

                      {/* Features */}
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                        className="grid grid-cols-2 gap-3"
                      >
                        {currentService.features.map((feature, index) => (
                          <motion.div
                            key={index}
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.7 + index * 0.1, duration: 0.3 }}
                            className="flex items-start gap-2 bg-ovation-bg-primary/90 backdrop-blur-sm border border-ovation-border-primary rounded-lg p-3 hover:border-ovation-brand-primary/50 hover:bg-ovation-bg-primary transition-all duration-300"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-ovation-brand-primary mt-1.5 flex-shrink-0"></div>
                            <p className="text-ovation-text-primary text-xs md:text-sm font-semibold leading-tight">{feature}</p>
                          </motion.div>
                        ))}
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={() => paginate(-1)}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-ovation-bg-primary/90 backdrop-blur-md border border-ovation-border-primary rounded-full flex items-center justify-center text-ovation-text-primary hover:text-ovation-brand-primary hover:border-ovation-brand-primary transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-ovation-brand-primary shadow-lg"
              aria-label="Previous service"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => paginate(1)}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-ovation-bg-primary/90 backdrop-blur-md border border-ovation-border-primary rounded-full flex items-center justify-center text-ovation-text-primary hover:text-ovation-brand-primary hover:border-ovation-brand-primary transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-ovation-brand-primary shadow-lg"
              aria-label="Next service"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-4">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1)
                  setCurrentIndex(index)
                }}
                className={`transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-ovation-brand-primary ${
                  index === currentIndex
                    ? 'w-8 h-2 bg-ovation-brand-primary'
                    : 'w-2 h-2 bg-ovation-border-primary hover:bg-ovation-border-secondary'
                }`}
                aria-label={`Go to ${services[index].title}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
