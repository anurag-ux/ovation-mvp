/**
 * Utility functions
 * Shared helper functions across the application
 */

/**
 * Scrolls to a section by ID
 */
export function scrollToSection(sectionId: string) {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

/**
 * Checks if device is mobile
 */
export function isMobile(): boolean {
  if (typeof window === 'undefined') return false
  return window.innerWidth < 768
}

/**
 * Formats a number with locale string
 */
export function formatNumber(num: number): string {
  return num.toLocaleString()
}
