'use client'

import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

export default function Services() {
  const [activeTab, setActiveTab] = useState('Field Services')

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

  return (
    <section id="services" className="bg-dark-surface py-20 md:py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20" aria-hidden="true">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-brand-red"></div>
            <p className="text-brand-red text-xs uppercase tracking-widest font-semibold">Our Services</p>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-brand-red"></div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Services We <span className="text-gradient">Offer</span>
          </h2>
        </div>

        {/* Service Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-16" role="tablist" aria-label="Service categories">
          {Object.keys(services).map((service, index) => (
            <button
              key={service}
              onClick={() => setActiveTab(service)}
              role="tab"
              aria-selected={activeTab === service}
              aria-controls={`service-${service.toLowerCase().replace(/\s+/g, '-')}`}
              className={`relative px-6 py-3 rounded-lg font-semibold transition-all duration-300 overflow-hidden group flex items-center gap-2 min-h-[44px] focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2 focus:ring-offset-dark-surface ${
                activeTab === service
                  ? 'bg-brand-red text-white shadow-lg shadow-brand-red/50 scale-105 glow-red'
                  : 'bg-dark-card text-gray-300 border border-dark-border hover:border-brand-red/50 hover:text-white hover:scale-105'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {activeTab === service && (
                <Image
                  src={services[service as keyof typeof services].icon}
                  alt=""
                  width={20}
                  height={20}
                  className="relative z-10 animate-float"
                  aria-hidden="true"
                />
              )}
              <span className="relative z-10">{service}</span>
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
              <div className="p-3 bg-gradient-to-br from-brand-red/20 to-transparent rounded-xl border border-brand-red/30">
                <Image
                  src={services[activeTab as keyof typeof services].icon}
                  alt={`${activeTab} icon`}
                  width={48}
                  height={48}
                  className="animate-float"
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
    </section>
  )
}
