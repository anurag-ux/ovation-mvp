'use client'

import { useEffect } from 'react'
import { Header } from '@/components/option3/Header'
import { HeroSection } from '@/components/option3/HeroSection'
import { ServicesSection } from '@/components/option3/ServicesSection'
import { CoreValuesSection } from '@/components/option3/CoreValuesSection'
import { WhyChooseUsSection } from '@/components/option3/WhyChooseUsSection'
import { StatisticsSection } from '@/components/option3/StatisticsSection'
import { CTASection } from '@/components/option3/CTASection'
import { Footer } from '@/components/option3/Footer'
import { CursorEffect } from '@/components/option3/CursorEffect'
import { ParticleBackground } from '@/components/option3/ParticleBackground'
import { GeometricBackground } from '@/components/option3/GeometricBackground'

export default function Option3() {
  useEffect(() => {
    // Add scrollbar styles to document
    const style = document.createElement('style')
    style.textContent = `
      html::-webkit-scrollbar {
        width: 12px;
      }
      html::-webkit-scrollbar-track {
        background: #f1f1f1;
        border-radius: 10px;
      }
      html::-webkit-scrollbar-thumb {
        background: linear-gradient(180deg, #b30920, #8a0719);
        border-radius: 10px;
        border: 2px solid #f1f1f1;
        animation: scrollbar-glow 2s ease-in-out infinite;
      }
      html::-webkit-scrollbar-thumb:hover {
        background: linear-gradient(180deg, #8a0719, #b30920);
        box-shadow: 0 0 10px rgba(179, 9, 32, 0.5);
      }
      @keyframes scrollbar-glow {
        0%, 100% { box-shadow: 0 0 5px rgba(179, 9, 32, 0.3); }
        50% { box-shadow: 0 0 15px rgba(179, 9, 32, 0.6); }
      }
      html { scrollbar-width: thin; scrollbar-color: #b30920 #f1f1f1; }
    `
    document.head.appendChild(style)
    return () => {
      document.head.removeChild(style)
    }
  }, [])

  return (
    <div data-option="3" className="min-h-screen bg-white text-gray-900 overflow-x-hidden" style={{ scrollSnapType: 'y proximity' }}>
      <CursorEffect />
      <ParticleBackground />
      <GeometricBackground />
      <Header />
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
