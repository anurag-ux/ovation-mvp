'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const values = [
  {
    icon: '/icons/integrity-ethics.svg',
    title: 'Integrity & Ethics',
    description: 'We conduct our business with the highest standards of integrity and ethical behavior, ensuring transparency and trust in all our interactions.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: '/icons/transparency.svg',
    title: 'Transparency',
    description: 'We believe in open communication and clear processes, keeping our clients informed every step of the way.',
    color: 'from-[#b30920] to-red-600',
  },
  {
    icon: '/icons/customer-centric.svg',
    title: 'Customer-Centric Focus',
    description: 'Your success is our priority. We tailor our solutions to meet your unique needs and exceed your expectations.',
    color: 'from-green-500 to-emerald-500',
  },
]

export function CoreValuesSection() {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden snap-start">
      {/* Artistic Elements */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-[#b30920]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-4 py-2 bg-[#b30920]/10 rounded-full mb-6">
            <span className="text-[#b30920] text-sm uppercase tracking-widest font-semibold">Our Values</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Our <span className="text-[#b30920]">Core Values</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Trust is the cornerstone of our relationship with each and every client
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="group relative"
              whileHover={{ y: -5 }}
            >
              <motion.div
                className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 h-full relative overflow-hidden"
                whileHover={{ boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
              >
                <motion.div
                  className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${value.color} rounded-2xl mb-6 relative z-10`}
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Image
                    src={value.icon}
                    alt={`${value.title} icon`}
                    width={40}
                    height={40}
                    className="brightness-0 invert"
                  />
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#b30920] transition-colors relative z-10">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed relative z-10">
                  {value.description}
                </p>
                <motion.div
                  className="mt-6 h-1 bg-gradient-to-r from-[#b30920] to-transparent"
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.3, duration: 0.5 }}
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#b30920]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={false}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
