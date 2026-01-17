import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-bg via-dark-surface to-dark-bg flex items-center justify-center p-4 sm:p-6">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-brand-red/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#2a2a3e_1px,transparent_1px),linear-gradient(to_bottom,#2a2a3e_1px,transparent_1px)] bg-[size:2rem_2rem] md:bg-[size:4rem_4rem] opacity-20" aria-hidden="true"></div>

      <div className="container mx-auto relative z-10 w-full">
        <div className="text-center mb-8 md:mb-12 animate-fade-in-up px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4">
            <span className="text-white">Ovation MVP </span>
            <span className="text-gradient">Options</span>
          </h1>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Select an option to preview the homepage redesign
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8 max-w-6xl mx-auto px-4 sm:px-6">
          {/* Option 1 */}
          <Link
            href="/options/1"
            className="group relative premium-card p-6 sm:p-7 md:p-8 rounded-xl md:rounded-2xl hover-lift transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2 focus:ring-offset-dark-bg min-h-[280px] sm:min-h-[300px] flex flex-col"
            aria-label="View Option 1 - Modern Dark Theme Design"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-brand-red/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl md:rounded-2xl" aria-hidden="true"></div>
            <div className="relative z-10 flex flex-col flex-1">
              <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-brand-red/20 to-brand-red/10 rounded-xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 self-start">
                <span className="text-2xl sm:text-3xl font-bold text-brand-red">1</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3 group-hover:text-brand-red transition-colors">
                Option 1
              </h2>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 flex-1">
                Modern dark theme with premium animations, glassmorphism effects, and smooth transitions. Fully responsive design with enhanced UX.
              </p>
              <div className="flex items-center gap-2 text-brand-red text-xs sm:text-sm font-semibold group-hover:gap-3 transition-all mt-auto">
                View Design
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <div className="mt-4 sm:mt-6 h-0.5 sm:h-1 w-0 bg-gradient-to-r from-brand-red via-red-500 to-transparent group-hover:w-full transition-all duration-500"></div>
            </div>
          </Link>

          {/* Option 2 */}
          <Link
            href="/options/2"
            className="group relative premium-card p-6 sm:p-7 md:p-8 rounded-xl md:rounded-2xl hover-lift transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2 focus:ring-offset-dark-bg min-h-[280px] sm:min-h-[300px] flex flex-col"
            aria-label="View Option 2 - Modern Design with Mega Menu"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl md:rounded-2xl" aria-hidden="true"></div>
            <div className="relative z-10 flex flex-col flex-1">
              <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500/20 to-blue-500/10 rounded-xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 self-start">
                <span className="text-2xl sm:text-3xl font-bold text-blue-400">2</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3 group-hover:text-blue-400 transition-colors">
                Option 2
              </h2>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 flex-1">
                Modern design with mega menu navigation, animated statistics, and comprehensive service showcases. Built with Framer Motion animations.
              </p>
              <div className="flex items-center gap-2 text-blue-400 text-xs sm:text-sm font-semibold group-hover:gap-3 transition-all mt-auto">
                View Design
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <div className="mt-4 sm:mt-6 h-0.5 sm:h-1 w-0 bg-gradient-to-r from-blue-400 via-blue-500 to-transparent group-hover:w-full transition-all duration-500"></div>
            </div>
          </Link>

          {/* Option 3 */}
          <Link
            href="/options/3"
            className="group relative premium-card p-6 sm:p-7 md:p-8 rounded-xl md:rounded-2xl hover-lift transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2 focus:ring-offset-dark-bg opacity-60 min-h-[280px] sm:min-h-[300px] flex flex-col sm:col-span-2 md:col-span-1"
            aria-label="View Option 3 - Coming Soon"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl md:rounded-2xl" aria-hidden="true"></div>
            <div className="relative z-10 flex flex-col flex-1">
              <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-500/20 to-purple-500/10 rounded-xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 self-start">
                <span className="text-2xl sm:text-3xl font-bold text-purple-400">3</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3 group-hover:text-purple-400 transition-colors">
                Option 3
              </h2>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 flex-1">
                Coming soon - This option will feature a unique design direction and creative approach.
              </p>
              <div className="flex items-center gap-2 text-purple-400 text-xs sm:text-sm font-semibold group-hover:gap-3 transition-all mt-auto">
                View Design
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <div className="mt-4 sm:mt-6 h-0.5 sm:h-1 w-0 bg-gradient-to-r from-purple-400 via-purple-500 to-transparent group-hover:w-full transition-all duration-500"></div>
            </div>
          </Link>
        </div>

        {/* Back to options link (will be visible on option pages) */}
        <div className="text-center mt-8 sm:mt-12 px-4">
          <p className="text-gray-500 text-xs sm:text-sm">
            Select an option above to preview the design
          </p>
        </div>
      </div>
    </div>
  )
}
