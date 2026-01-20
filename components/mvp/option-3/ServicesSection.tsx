'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight, Share2 } from 'lucide-react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'

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

const serviceKeys = Object.keys(services) as (keyof typeof services)[]

// Share links helper
const getShareLinks = (title: string) => ({
  facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}&quote=${encodeURIComponent(title)}`,
  twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(window.location.href)}`,
  linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent(title)}`,
  whatsapp: `https://wa.me/?text=${encodeURIComponent(title + ' ' + window.location.href)}`,
})

export function ServicesSection() {
  const [activeTab, setActiveTab] = useState<keyof typeof services>('Field Services')
  const [activeSlide, setActiveSlide] = useState(0)
  const [showShareMenu, setShowShareMenu] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)

  // Handle carousel scroll
  const handleScroll = () => {
    if (carouselRef.current) {
      const scrollLeft = carouselRef.current.scrollLeft
      const slideWidth = carouselRef.current.offsetWidth
      const newIndex = Math.round(scrollLeft / slideWidth)
      setActiveSlide(newIndex)
    }
  }

  // Scroll to specific slide
  const scrollToSlide = (index: number) => {
    if (carouselRef.current) {
      const slideWidth = carouselRef.current.offsetWidth
      carouselRef.current.scrollTo({
        left: slideWidth * index,
        behavior: 'smooth'
      })
      setActiveSlide(index)
    }
  }

  // Handle share
  const handleShare = (platform: keyof ReturnType<typeof getShareLinks>) => {
    const links = getShareLinks(`Check out ${services[activeTab].title} by Ovation WPS`)
    window.open(links[platform], '_blank', 'width=600,height=400')
    setShowShareMenu(false)
  }

  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden snap-start">
      {/* Artistic Background */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#b30920]/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-500/5 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#b30920]"></div>
            <span className="text-[#b30920] text-sm uppercase tracking-widest font-semibold">Our Services</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#b30920]"></div>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Services We <span className="text-[#b30920]">Offer</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            At Ovation Workplace Services, we are committed to innovation, integrity, and customer satisfaction.
          </p>
        </motion.div>

        {/* ==================== DESKTOP VIEW ==================== */}
        <div className="hidden md:block">
          {/* Service Tabs - Desktop Only */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {serviceKeys.map((service, index) => (
              <motion.button
                key={service}
                onClick={() => setActiveTab(service)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 flex items-center gap-2 relative overflow-hidden group ${
                  activeTab === service
                    ? 'bg-[#b30920] text-white shadow-xl shadow-[#b30920]/30'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200'
                }`}
              >
                {activeTab === service && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#8a0719] to-[#b30920]"
                    layoutId="activeTab"
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                )}
                <Image
                  src={services[service].icon}
                  alt=""
                  width={20}
                  height={20}
                  className={`relative z-10 transition-transform ${activeTab === service ? 'brightness-0 invert' : 'group-hover:scale-110'}`}
                />
                <span className="relative z-10">{service}</span>
              </motion.button>
            ))}
          </div>

          {/* Service Content - Desktop */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="max-w-5xl mx-auto"
          >
            <motion.div
              className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 sm:p-12 shadow-xl border border-gray-100 relative overflow-hidden group"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="absolute top-0 right-0 w-64 h-64 bg-[#b30920]/5 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  x: [0, 20, 0],
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-[#b30920]/10 rounded-2xl mb-6">
                    <Image
                      src={services[activeTab].icon}
                      alt={`${activeTab} icon`}
                      width={48}
                      height={48}
                    />
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                    {services[activeTab].title}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    {services[activeTab].description}
                  </p>
                  <div className="flex items-center gap-3">
                    <motion.button
                      className="group relative inline-flex items-center gap-2 px-6 py-3 bg-[#b30920] text-white rounded-xl font-semibold overflow-hidden shadow-lg shadow-[#b30920]/20"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-[#8a0719] to-[#b30920]"
                        initial={{ x: '-100%' }}
                        whileHover={{ x: 0 }}
                        transition={{ duration: 0.3 }}
                      />
                      <span className="relative z-10 flex items-center gap-2">
                        Learn More
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </motion.button>

                    {/* Share Button - Desktop */}
                    <div className="relative">
                      <motion.button
                        onClick={() => setShowShareMenu(!showShareMenu)}
                        className="p-3 rounded-xl bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-[#b30920] transition-all"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Share2 className="w-5 h-5" />
                      </motion.button>
                      <AnimatePresence>
                        {showShareMenu && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.9 }}
                            className="absolute bottom-full left-0 mb-2 flex gap-2 bg-white p-2 rounded-xl shadow-xl border border-gray-100"
                          >
                            <button onClick={() => handleShare('facebook')} className="p-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-colors">
                              <FaFacebookF className="w-4 h-4" />
                            </button>
                            <button onClick={() => handleShare('twitter')} className="p-2 rounded-lg bg-sky-500 text-white hover:bg-sky-600 transition-colors">
                              <FaTwitter className="w-4 h-4" />
                            </button>
                            <button onClick={() => handleShare('linkedin')} className="p-2 rounded-lg bg-blue-700 text-white hover:bg-blue-800 transition-colors">
                              <FaLinkedinIn className="w-4 h-4" />
                            </button>
                            <button onClick={() => handleShare('whatsapp')} className="p-2 rounded-lg bg-green-500 text-white hover:bg-green-600 transition-colors">
                              <FaWhatsapp className="w-4 h-4" />
                            </button>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
                <motion.div
                  className="relative h-64 sm:h-80 rounded-2xl overflow-hidden bg-gradient-to-br from-[#b30920]/10 to-blue-500/10 border border-gray-200"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      className="text-center"
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                    >
                      <motion.div
                        className="w-32 h-32 bg-white rounded-2xl mx-auto mb-4 shadow-lg flex items-center justify-center"
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                      >
                        <Image
                          src={services[activeTab].icon}
                          alt=""
                          width={80}
                          height={80}
                        />
                      </motion.div>
                      <p className="text-gray-600 font-medium">Visual Representation</p>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* ==================== MOBILE CAROUSEL VIEW ==================== */}
        <div className="md:hidden">
          {/* Carousel */}
          <div
            ref={carouselRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 -mx-4 px-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {serviceKeys.map((serviceKey, index) => {
              const service = services[serviceKey]
              return (
                <motion.div
                  key={serviceKey}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex-shrink-0 w-full snap-center"
                >
                  <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg border border-gray-100 relative overflow-hidden h-[340px] flex flex-col">
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#b30920]/5 rounded-full blur-2xl" />
                    
                    {/* Icon - Enhanced visibility */}
                    <div className="inline-flex items-center justify-center w-14 h-14 bg-[#b30920] rounded-xl mb-3 flex-shrink-0 shadow-lg shadow-[#b30920]/30">
                      <Image
                        src={service.icon}
                        alt={`${service.title} icon`}
                        width={32}
                        height={32}
                        className="brightness-0 invert"
                      />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-2 flex-shrink-0">
                      {service.title}
                    </h3>

                    {/* Description - Fixed height with line clamp */}
                    <p className="text-gray-600 leading-relaxed text-sm flex-1 line-clamp-4">
                      {service.description}
                    </p>

                    {/* Actions - Always at bottom */}
                    <div className="flex items-center gap-3 mt-4 flex-shrink-0">
                      <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-[#b30920] text-white rounded-lg font-semibold text-sm hover:bg-[#8a0719] transition-colors">
                        Learn More
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Dot Navigation - As specified */}
          <div className="flex justify-center gap-2 mt-4">
            {serviceKeys.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToSlide(index)}
                className={`transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#b30920] ${
                  activeSlide === index
                    ? 'w-8 h-2 bg-[#b30920]'
                    : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to ${serviceKeys[index]}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
