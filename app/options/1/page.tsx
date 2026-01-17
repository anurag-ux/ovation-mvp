import Header from '@/components/Header'
import Hero from '@/components/Hero'
import CoreValues from '@/components/CoreValues'
import Services from '@/components/Services'
import WhyChooseUs from '@/components/WhyChooseUs'
import Statistics from '@/components/Statistics'
import Footer from '@/components/Footer'
import ScrollProgress from '@/components/ScrollProgress'
import Link from 'next/link'

export default function Option1() {
  return (
    <>
      {/* Back to Options Link */}
      <div className="fixed top-4 left-4 z-50">
        <Link
          href="/"
          className="group flex items-center gap-2 px-4 py-2 bg-dark-card/90 backdrop-blur-md border border-dark-border rounded-lg text-white hover:text-brand-red hover:border-brand-red transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2 focus:ring-offset-dark-bg"
          aria-label="Back to MVP options"
        >
          <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span className="text-sm font-medium">Back to Options</span>
        </Link>
      </div>

      <ScrollProgress />
      <main id="main-content" className="min-h-screen">
        <Header />
        <Hero />
        <CoreValues />
        <Services />
        <WhyChooseUs />
        <Statistics />
        <Footer />
      </main>
    </>
  )
}
