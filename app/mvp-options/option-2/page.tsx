'use client'

import { useEffect } from 'react'
import { MegaMenu } from '@/components/mvp/option-2/MegaMenu'
import { HeroSection } from '@/components/mvp/option-2/HeroSection'
import { CoreValuesSection } from '@/components/mvp/option-2/CoreValuesSection'
import { ServicesSection } from '@/components/mvp/option-2/ServicesSection'
import { WhyChooseUsSection } from '@/components/mvp/option-2/WhyChooseUsSection'
import { StatisticsSection } from '@/components/mvp/option-2/StatisticsSection'
import { CTASection } from '@/components/mvp/option-2/CTASection'
import { Footer } from '@/components/mvp/option-2/Footer'

export default function Option2() {
  useEffect(() => {
    // Apply scrollbar styles to html element for Option 2
    document.documentElement.setAttribute('data-page-option', '2')
    return () => {
      document.documentElement.removeAttribute('data-page-option')
    }
  }, [])
  return (
    <div className="min-h-screen bg-ovation-bg-primary text-ovation-text-primary" data-option="2">
      <MegaMenu />
      <main>
        <HeroSection />
        <CoreValuesSection />
        <ServicesSection />
        <WhyChooseUsSection />
        <StatisticsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
