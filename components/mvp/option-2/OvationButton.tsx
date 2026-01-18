'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

interface OvationButtonProps {
  variant?: 'primary' | 'secondary' | 'tertiary'
  children: React.ReactNode
  onClick?: () => void
  disabled?: boolean
  icon?: boolean
  className?: string
}

export function OvationButton({
  variant = 'primary',
  children,
  onClick,
  disabled = false,
  icon = false,
  className = '',
}: OvationButtonProps) {
  const baseStyles = `
    inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg
    font-semibold transition-all duration-300
    disabled:opacity-50 disabled:cursor-not-allowed
  `

  const variants = {
    primary: `
      bg-ovation-brand-primary text-ovation-text-primary
      hover:bg-ovation-brand-primary-hover hover:ovation-glow-red
      active:bg-ovation-brand-secondary
      disabled:bg-ovation-bg-tertiary disabled:text-ovation-text-disabled
    `,
    secondary: `
      bg-transparent text-ovation-text-primary border-2 border-ovation-border-accent
      hover:bg-ovation-brand-primary hover:border-ovation-brand-primary
      active:bg-ovation-brand-secondary active:border-ovation-brand-secondary
      disabled:border-ovation-border-primary disabled:text-ovation-text-disabled
    `,
    tertiary: `
      bg-transparent text-ovation-text-secondary
      hover:text-ovation-text-primary hover:bg-ovation-bg-secondary
      active:text-ovation-brand-primary
      disabled:text-ovation-text-disabled
    `,
  }

  return (
    <motion.button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
    >
      {children}
      {icon && <ArrowRight className="w-5 h-5" />}
    </motion.button>
  )
}
