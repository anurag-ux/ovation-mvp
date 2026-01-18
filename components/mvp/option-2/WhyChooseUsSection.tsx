'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

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
    gradient: 'from-ovation-brand-primary/20 to-pink-500/20',
    hoverGradient: 'from-ovation-brand-primary/30 to-pink-500/30',
  },
  {
    icon: '/icons/solutions.svg',
    title: 'Tailored Solutions',
    description: 'Every business is unique. We customize our services to align with your specific requirements and goals.',
    gradient: 'from-green-500/20 to-emerald-500/20',
    hoverGradient: 'from-green-500/30 to-emerald-500/30',
  },
]

export function WhyChooseUsSection() {
  return (
    <section className="py-20 md:py-32 bg-ovation-bg-secondary relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-10" aria-hidden="true">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-ovation-brand-primary/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.2, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
        />
      </div>

      <div className="ovation-container relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="ovation-h2 text-ovation-text-primary mb-4">
            Why <span className="text-ovation-brand-primary">Choose Us</span>
          </h2>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-ovation-bg-primary border border-ovation-border-primary rounded-full mb-6">
            <span className="w-2 h-2 bg-ovation-brand-primary rounded-full animate-pulse"></span>
            <p className="text-ovation-brand-primary text-xs uppercase tracking-widest font-semibold">Why us</p>
          </div>
          <p className="text-ovation-text-secondary text-base md:text-lg max-w-3xl mx-auto">
            At Ovation Workplace Services, we are committed to innovation, integrity, and customer satisfaction. 
            Our comprehensive IT solutions are designed to help your business thrive in today&apos;s digital landscape.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-ovation-bg-primary border border-ovation-border-primary rounded-2xl p-6 hover:border-ovation-brand-primary/50 hover:shadow-xl transition-all duration-300 hover-lift"
            >
              <div className={`relative mb-6 w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} group-hover:bg-gradient-to-br group-hover:${feature.hoverGradient} flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                <div className="absolute inset-0 bg-ovation-bg-primary rounded-2xl opacity-90 group-hover:opacity-80 transition-opacity"></div>
                <Image
                  src={feature.icon}
                  alt={`${feature.title} icon`}
                  width={32}
                  height={32}
                  className="relative z-10 group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="ovation-h4 text-ovation-text-primary mb-3 group-hover:text-ovation-brand-primary transition-colors relative inline-block">
                {feature.title}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-ovation-brand-primary group-hover:w-full transition-all duration-500"></span>
              </h3>
              <p className="text-ovation-text-secondary leading-relaxed text-sm md:text-base group-hover:text-ovation-text-primary transition-colors">
                {feature.description}
              </p>
              <div className="mt-4 h-0.5 w-0 bg-gradient-to-r from-ovation-brand-primary via-ovation-brand-accent to-transparent group-hover:w-full transition-all duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
