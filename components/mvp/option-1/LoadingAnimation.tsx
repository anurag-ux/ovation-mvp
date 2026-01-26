'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useState, useEffect } from 'react'

interface LoadingAnimationProps {
    onLoadingComplete?: () => void
    duration?: number
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

    const fillDuration = (duration - 400) / 1000 // Duration for color fill

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0a0a0a]"
                >
                    <div className="relative w-[100px] h-[100px]">
                        {/* Grey version of logo (always visible underneath) */}
                        <Image
                            src="/logos/vantage.svg"
                            alt="Loading"
                            width={100}
                            height={100}
                            priority
                            className="absolute inset-0 grayscale opacity-40"
                        />

                        {/* Colored version that fills in from left to right */}
                        <motion.div
                            className="absolute inset-0 overflow-hidden"
                            initial={{ clipPath: 'inset(0 100% 0 0)' }}
                            animate={{ clipPath: 'inset(0 0% 0 0)' }}
                            transition={{
                                duration: fillDuration,
                                ease: 'easeOut'
                            }}
                        >
                            <Image
                                src="/logos/vantage.svg"
                                alt="Loading"
                                width={100}
                                height={100}
                                priority
                            />
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
