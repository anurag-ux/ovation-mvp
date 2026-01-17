'use client'

import { motion } from 'framer-motion'
import { ServiceCard } from './ServiceCard'

const services = [
  {
    image: 'https://images.unsplash.com/photo-1681366099753-f904192f17bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGZhY2lsaXR5JTIwbWFuYWdlbWVudHxlbnwxfHx8fDE3Njg2NjQ0MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Facility Management',
    description: 'Comprehensive solutions to maintain and optimize your workplace environment for peak performance.',
    features: [
      'Preventive maintenance programs',
      'Emergency response services',
      'Energy management solutions',
      'Compliance and safety protocols',
    ],
  },
  {
    image: 'https://images.unsplash.com/photo-1718220216044-006f43e3a9b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzY4NjMxNjI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Workspace Solutions',
    description: 'Create inspiring work environments that enhance productivity and employee satisfaction.',
    features: [
      'Space planning and design',
      'Furniture and equipment',
      'Workplace technology integration',
      'Flexible workspace configurations',
    ],
  },
  {
    image: 'https://images.unsplash.com/photo-1767788543704-d68ce083048e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwd29ya3NwYWNlJTIwc29sdXRpb25zfGVufDF8fHx8MTc2ODY2NDQwNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Technology Services',
    description: 'Advanced technology solutions to streamline operations and enhance workplace connectivity.',
    features: [
      'Smart building automation',
      'IoT integration',
      'Digital workspace tools',
      'Data analytics and reporting',
    ],
  },
  {
    image: 'https://images.unsplash.com/photo-1767339736233-f4b02c41ee4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYWludGVuYW5jZSUyMHNlcnZpY2VzfGVufDF8fHx8MTc2ODY2NDQwN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Maintenance & Support',
    description: 'Reliable maintenance and support services to keep your facilities running smoothly 24/7.',
    features: [
      'Scheduled maintenance',
      'Rapid response support',
      'Asset lifecycle management',
      'Vendor coordination',
    ],
  },
]

export function ServicesSection() {
  return (
    <section className="py-20 md:py-32 bg-ovation-bg-secondary">
      <div className="ovation-container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-ovation-brand-primary font-semibold mb-4 tracking-wider uppercase">
            Our Services
          </p>
          <h2 className="text-ovation-text-primary mb-6">
            Comprehensive Workplace Solutions
          </h2>
          <p className="text-ovation-text-secondary max-w-3xl mx-auto text-lg">
            From facility management to cutting-edge technology, we provide end-to-end solutions tailored to your unique needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}
