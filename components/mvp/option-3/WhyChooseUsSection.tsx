'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const features = [
  {
    icon: '/icons/experience.svg',
    title: 'Experience',
    description: 'With over 25 years in the industry, we bring extensive knowledge and proven expertise to every project.',
  },
  {
    icon: '/icons/team.svg',
    title: 'Dedicated Team',
    description: 'Our skilled professionals are committed to delivering exceptional service and support tailored to your needs.',
  },
  {
    icon: '/icons/record.svg',
    title: 'Proven Track Record',
    description: 'We have successfully completed thousands of projects, earning the trust of businesses nationwide.',
  },
  {
    icon: '/icons/solutions.svg',
    title: 'Tailored Solutions',
    description: 'Every business is unique. We customize our services to align with your specific requirements and goals.',
  },
]

export function WhyChooseUsSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden snap-start">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Why <span className="text-[#b30920]">Choose Us</span>
          </h2>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-full mb-6">
            <span className="w-2 h-2 bg-[#b30920] rounded-full animate-pulse"></span>
            <span className="text-[#b30920] text-xs uppercase tracking-widest font-semibold">Why us</span>
          </div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            At Ovation Workplace Services, we are committed to innovation, integrity, and customer satisfaction. 
            Our comprehensive IT solutions are designed to help your business thrive in today&apos;s digital landscape.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-100 relative overflow-hidden"
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#b30920]/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={false}
              />
              <motion.div
                className="inline-flex items-center justify-center w-16 h-16 bg-[#b30920]/10 rounded-xl mb-4 relative z-10"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Image
                  src={feature.icon}
                  alt={`${feature.title} icon`}
                  width={32}
                  height={32}
                />
              </motion.div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#b30920] transition-colors relative z-10">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm relative z-10">
                {feature.description}
              </p>
              <motion.div
                className="mt-4 h-0.5 bg-gradient-to-r from-[#b30920] to-transparent relative z-10"
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
