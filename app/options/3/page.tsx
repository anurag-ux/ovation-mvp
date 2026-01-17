import Link from 'next/link'

export default function Option3() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-bg via-dark-surface to-dark-bg flex items-center justify-center p-4">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#2a2a3e_1px,transparent_1px),linear-gradient(to_bottom,#2a2a3e_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" aria-hidden="true"></div>

      <div className="container mx-auto relative z-10 text-center max-w-4xl">
        {/* Back to Options Link */}
        <div className="mb-8">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 px-4 py-2 bg-dark-card/90 backdrop-blur-md border border-dark-border rounded-lg text-white hover:text-purple-400 hover:border-purple-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-dark-bg"
            aria-label="Back to MVP options"
          >
            <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="text-sm font-medium">Back to Options</span>
          </Link>
        </div>

        <div className="premium-card p-12 rounded-2xl">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-purple-500/20 to-purple-500/10 rounded-xl mb-8">
            <span className="text-5xl font-bold text-purple-400">3</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Option 3</span>
          </h1>
          
          <p className="text-gray-400 text-lg md:text-xl mb-8 leading-relaxed">
            This design option is currently under development. 
            <br />
            We&apos;re creating a distinctive and creative approach that will present Ovation Workplace Services with a unique perspective.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/"
              className="px-8 py-4 bg-purple-500 text-white rounded-xl font-semibold text-lg hover:bg-purple-600 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-dark-bg"
            >
              Back to Options
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
