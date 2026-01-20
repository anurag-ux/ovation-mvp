'use client'

import { ArrowRight } from 'lucide-react'
import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isLoaded, setIsLoaded] = useState(false)
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  const words = ['Trusted', 'Reliable', 'Growth', 'Dedicated', 'Strategic']

  useEffect(() => {
    setIsLoaded(true)
    setDisplayText(words[0])
  }, [])

  useEffect(() => {
    const currentWord = words[currentWordIndex]
    const typeSpeed = 70
    const deleteSpeed = 40
    const pauseBeforeDelete = 1800
    const pauseBeforeType = 250

    let timeout: NodeJS.Timeout

    if (!isDeleting) {
      // Typing
      if (displayText.length < currentWord.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentWord.slice(0, displayText.length + 1))
        }, typeSpeed)
      } else {
        // Word complete, pause then start deleting
        timeout = setTimeout(() => {
          setIsDeleting(true)
        }, pauseBeforeDelete)
      }
    } else {
      // Deleting
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1))
        }, deleteSpeed)
      } else {
        // Deletion complete, move to next word
        setIsDeleting(false)
        setCurrentWordIndex((prev) => (prev + 1) % words.length)
        timeout = setTimeout(() => {}, pauseBeforeType)
      }
    }

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentWordIndex, words])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 30,
        y: (e.clientY / window.innerHeight - 0.5) * 30,
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const scrollToNext = () => {
    const nextSection = document.getElementById('core-values')
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const scrollToContact = () => {
    const footer = document.getElementById('footer')
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-dark-bg via-dark-surface to-dark-bg">
      {/* Background Image with Parallax */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt=""
          fill
          className="object-cover opacity-20 parallax-slow"
          priority
          sizes="100vw"
          style={{
            transform: `translate(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px) scale(1.1)`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-dark-bg/85 via-dark-bg/65 to-dark-bg/85"></div>
      </div>

      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute top-1/4 left-1/4 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-brand-red/25 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
            animation: 'float 8s ease-in-out infinite',
          }}
          aria-hidden="true"
        ></div>
        <div 
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-brand-red/15 rounded-full blur-3xl animate-pulse"
          style={{
            animationDelay: '1s',
            transform: `translate(${-mousePosition.x * 0.3}px, ${-mousePosition.y * 0.3}px)`,
            animation: 'float 10s ease-in-out infinite',
          }}
          aria-hidden="true"
        ></div>
        <div 
          className="absolute top-1/2 left-1/2 w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-blue-500/10 rounded-full blur-3xl animate-pulse"
          style={{
            animationDelay: '2s',
            transform: `translate(${mousePosition.x * 0.2}px, ${mousePosition.y * 0.2}px)`,
            animation: 'float 12s ease-in-out infinite',
          }}
          aria-hidden="true"
        ></div>
      </div>

      {/* Enhanced Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#2a2a3e_1px,transparent_1px),linear-gradient(to_bottom,#2a2a3e_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" aria-hidden="true"></div>
      
      {/* Shimmer Effect Overlay */}
      <div className="absolute inset-0 shimmer opacity-5" aria-hidden="true"></div>

      <div className="container mx-auto px-4 relative z-10 w-full">
        <div className={`max-w-5xl mx-auto text-center transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 md:mb-8 leading-[1.1] text-reveal" style={{ animationDelay: '0.2s' }}>
            <span className="block mb-2 md:mb-3">
              <span className="text-white">Your </span>
              <span className="text-gradient animate-glow">{displayText}</span>
              <span 
                className="inline-block w-[3px] h-[0.65em] bg-brand-red align-middle mx-0.5"
                style={{ animation: 'blink 1s ease-in-out infinite' }}
              ></span>
              <span className="text-white"> Partner</span>
            </span>
            <span className="block mb-2 md:mb-3">
              <span className="text-white">for Comprehensive </span>
              <span className="text-brand-red relative inline-block">
                IT Solutions
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-brand-red via-red-500 to-transparent opacity-60"></span>
              </span>
            </span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-8 md:mb-12 text-gray-400 leading-relaxed max-w-3xl mx-auto px-4 text-reveal" style={{ animationDelay: '0.9s' }}>
            Ovation Workplace Services is dedicated to providing exceptional IT solutions and support 
            to businesses of all sizes. With our comprehensive range of services, experienced team, 
            and commitment to excellence, we help organizations optimize their technology infrastructure 
            and achieve their business goals.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4 text-reveal" style={{ animationDelay: '1.1s' }}>
            <button
              onClick={scrollToContact}
              className="group relative bg-brand-red text-white px-8 md:px-10 py-4 md:py-5 rounded-xl font-semibold text-base md:text-lg flex items-center gap-2 overflow-hidden hover:shadow-2xl hover:shadow-brand-red/50 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2 focus:ring-offset-dark-bg min-h-[48px] md:min-h-[56px] premium-button glow-red w-full sm:w-auto"
              aria-label="Contact us - Talk to our team"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Image src="/icons/call.svg" alt="" width={20} height={20} aria-hidden="true" className="group-hover:scale-110 transition-transform" />
                Talk to us
              </span>
            </button>
            
            <button
              onClick={scrollToNext}
              className="group px-8 md:px-10 py-4 md:py-5 rounded-xl font-semibold text-base md:text-lg flex items-center gap-2 border-2 border-dark-border text-white hover:border-brand-red hover:text-brand-red hover:bg-brand-red/10 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2 focus:ring-offset-dark-bg min-h-[48px] md:min-h-[56px] backdrop-blur-sm w-full sm:w-auto"
              aria-label="Learn more about our services"
            >
              Learn More
              <ArrowRight className="group-hover:translate-x-2 transition-transform duration-300" size={20} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
