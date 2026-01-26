'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useState, useEffect } from 'react'

interface LoadingAnimationProps {
  onLoadingComplete?: () => void
  duration?: number // Duration in milliseconds
}

export function LoadingAnimation({
  onLoadingComplete,
  duration = 2000
}: LoadingAnimationProps) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
      onLoadingComplete?.()
    }, duration)

    return () => clearTimeout(timer)
  }, [duration, onLoadingComplete])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white"
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="mb-8"
          >
            <Image
              src="/logos/vantage.svg"
              alt="Loading"
              width={80}
              height={80}
              priority
            />
          </motion.div>

          {/* Simple progress bar */}
          <div className="w-48 h-1 bg-gray-200 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-[#b30920] rounded-full"
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{
                duration: duration / 1000,
                ease: 'easeInOut'
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
