'use client'

import Link from 'next/link'
import { MegaMenu } from '@/components/option2/MegaMenu'
import { HeroSection } from '@/components/option2/HeroSection'
import { CoreValuesSection } from '@/components/option2/CoreValuesSection'
import { ServicesSection } from '@/components/option2/ServicesSection'
import { StatisticsSection } from '@/components/option2/StatisticsSection'
import { CTASection } from '@/components/option2/CTASection'
import { Footer } from '@/components/option2/Footer'

export default function Option2() {
  return (
    <div className="min-h-screen bg-ovation-bg-primary">
      {/* Back to Options Link */}
      <div className="fixed top-4 left-4 z-[60]">
        <Link
          href="/"
          className="group inline-flex items-center gap-2 px-4 py-2 bg-ovation-bg-secondary/90 backdrop-blur-md border border-ovation-border-primary rounded-lg text-ovation-text-primary hover:text-ovation-brand-primary hover:border-ovation-brand-primary transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-ovation-brand-primary focus:ring-offset-2 focus:ring-offset-ovation-bg-primary"
          aria-label="Back to MVP options"
        >
          <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span className="text-sm font-medium">Back to Options</span>
        </Link>
      </div>

      <MegaMenu />
      <main>
        <HeroSection />
        <CoreValuesSection />
        <ServicesSection />
        <StatisticsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
