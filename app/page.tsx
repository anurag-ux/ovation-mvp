import Header from '@/components/Header'
import Hero from '@/components/Hero'
import CoreValues from '@/components/CoreValues'
import Services from '@/components/Services'
import WhyChooseUs from '@/components/WhyChooseUs'
import Statistics from '@/components/Statistics'
import Footer from '@/components/Footer'
import ScrollProgress from '@/components/ScrollProgress'

export default function Home() {
  return (
    <>
      {/* Skip to content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-brand-red focus:text-white focus:rounded-lg focus:shadow-lg focus:outline-none"
      >
        Skip to main content
      </a>
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
