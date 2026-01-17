'use client'

import { MegaMenu } from '@/components/option2/MegaMenu'
import { HeroSection } from '@/components/option2/HeroSection'
import { CoreValuesSection } from '@/components/option2/CoreValuesSection'
import { ServicesSection } from '@/components/option2/ServicesSection'
import { WhyChooseUsSection } from '@/components/option2/WhyChooseUsSection'
import { StatisticsSection } from '@/components/option2/StatisticsSection'
import { CTASection } from '@/components/option2/CTASection'
import { Footer } from '@/components/option2/Footer'

export default function Option2() {
  return (
    <div className="min-h-screen bg-ovation-bg-primary text-ovation-text-primary">
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
