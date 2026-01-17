'use client'

import { motion } from 'framer-motion'

export function GeometricBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Geometric Shapes */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 border-2 border-[#b30920]/10 rotate-45"
        animate={{
          rotate: [45, 405, 45],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      <motion.div
        className="absolute top-40 right-20 w-24 h-24 bg-[#b30920]/5 rounded-full"
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-32 left-1/4 w-40 h-40 border-4 border-blue-500/10 rotate-12"
        animate={{
          rotate: [12, 372, 12],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      <motion.div
        className="absolute top-1/3 right-1/4 w-16 h-16 bg-gradient-to-br from-[#b30920]/10 to-blue-500/10 rotate-45"
        animate={{
          rotate: [45, 225, 45],
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      {/* Hexagons */}
      <motion.div
        className="absolute top-1/2 left-10 w-20 h-20"
        style={{
          clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
          background: 'linear-gradient(135deg, rgba(179, 9, 32, 0.1), rgba(59, 130, 246, 0.1))',
        }}
        animate={{
          rotate: [0, 360],
          y: [0, -20, 0],
        }}
        transition={{
          rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
          y: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-16 w-28 h-28"
        style={{
          clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
          background: 'linear-gradient(45deg, rgba(179, 9, 32, 0.08), rgba(59, 130, 246, 0.08))',
        }}
        animate={{
          rotate: [360, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          rotate: { duration: 25, repeat: Infinity, ease: 'linear' },
          scale: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
        }}
      />
      
      {/* Triangles */}
      <motion.div
        className="absolute top-1/4 left-1/3 w-24 h-24"
        style={{
          clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
          background: 'rgba(179, 9, 32, 0.05)',
        }}
        animate={{
          rotate: [0, 360],
          x: [0, 30, 0],
        }}
        transition={{
          rotate: { duration: 18, repeat: Infinity, ease: 'linear' },
          x: { duration: 7, repeat: Infinity, ease: 'easeInOut' },
        }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/3 w-20 h-20"
        style={{
          clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
          background: 'rgba(59, 130, 246, 0.05)',
        }}
        animate={{
          rotate: [360, 0],
          y: [0, -25, 0],
        }}
        transition={{
          rotate: { duration: 22, repeat: Infinity, ease: 'linear' },
          y: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
        }}
      />
      
      {/* Lines and Grid Patterns */}
      <svg className="absolute inset-0 w-full h-full opacity-5" viewBox="0 0 1200 800" preserveAspectRatio="none">
        <motion.line
          x1="0"
          y1="200"
          x2="1200"
          y2="600"
          stroke="#b30920"
          strokeWidth="2"
          strokeDasharray="10 10"
          animate={{
            strokeDashoffset: [0, 20],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
        <motion.line
          x1="0"
          y1="400"
          x2="1200"
          y2="200"
          stroke="#3b82f6"
          strokeWidth="2"
          strokeDasharray="10 10"
          animate={{
            strokeDashoffset: [20, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </svg>
    </div>
  )
}
