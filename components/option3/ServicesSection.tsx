'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

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

export function ServicesSection() {
  const [activeTab, setActiveTab] = useState('Field Services')

  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden snap-start">
      {/* Artistic Background */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#b30920]/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-500/5 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
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

        {/* Service Tabs - Magnetic Effect */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {Object.keys(services).map((service, index) => (
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
                src={services[service as keyof typeof services].icon}
                alt=""
                width={20}
                height={20}
                className={`relative z-10 transition-transform ${activeTab === service ? 'brightness-0 invert' : 'group-hover:scale-110'}`}
              />
              <span className="relative z-10">{service}</span>
            </motion.button>
          ))}
        </div>

        {/* Service Content - Flip Animation */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, rotateX: -90 }}
          animate={{ opacity: 1, rotateX: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-5xl mx-auto"
          style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
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
                    src={services[activeTab as keyof typeof services].icon}
                    alt={`${activeTab} icon`}
                    width={48}
                    height={48}
                  />
                </div>
                <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                  {services[activeTab as keyof typeof services].title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  {services[activeTab as keyof typeof services].description}
                </p>
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
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  >
                    <motion.div
                      className="w-32 h-32 bg-white rounded-2xl mx-auto mb-4 shadow-lg flex items-center justify-center"
                      animate={{
                        rotate: [0, 360],
                      }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: 'linear',
                      }}
                    >
                      <Image
                        src={services[activeTab as keyof typeof services].icon}
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
    </section>
  )
}
