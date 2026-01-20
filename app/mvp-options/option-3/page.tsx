'use client'

import { useEffect } from 'react'
import { CardNav, defaultNavItems } from '@/components/mvp/option-3/CardNav'
import { HeroSection } from '@/components/mvp/option-3/HeroSection'
import { ServicesSection } from '@/components/mvp/option-3/ServicesSection'
import { CoreValuesSection } from '@/components/mvp/option-3/CoreValuesSection'
import { WhyChooseUsSection } from '@/components/mvp/option-3/WhyChooseUsSection'
import { StatisticsSection } from '@/components/mvp/option-3/StatisticsSection'
import { CTASection } from '@/components/mvp/option-3/CTASection'
import { Footer } from '@/components/mvp/option-3/Footer'
import { CursorEffect } from '@/components/mvp/option-3/CursorEffect'
import { ParticleBackground } from '@/components/mvp/option-3/ParticleBackground'
import { GeometricBackground } from '@/components/mvp/option-3/GeometricBackground'

export default function Option3() {
  useEffect(() => {
    // Apply scrollbar styles to html element for Option 3
    document.documentElement.setAttribute('data-page-option', '3')
    return () => {
      document.documentElement.removeAttribute('data-page-option')
    }
  }, [])

  return (
    <div data-option="3" className="min-h-screen bg-white text-gray-900 overflow-x-hidden" style={{ scrollSnapType: 'y proximity' }}>
      <CursorEffect />
      <ParticleBackground />
      <GeometricBackground />
      
      {/* CardNav - Floating Pill Navigation */}
      <CardNav items={defaultNavItems} />
      
      <main>
        <HeroSection />
        <ServicesSection />
        <CoreValuesSection />
        <WhyChooseUsSection />
        <StatisticsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
