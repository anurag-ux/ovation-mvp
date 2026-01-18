/**
 * Shared TypeScript types and interfaces
 */

/**
 * MVP Option types
 */
export type MVPOption = 1 | 2 | 3

/**
 * Navigation link structure
 */
export interface NavLink {
  label: string
  href: string
  icon?: string
  type: 'link' | 'dropdown'
  items?: NavLink[]
}

/**
 * Service item structure
 */
export interface Service {
  title: string
  description: string
  icon: string
  features?: string[]
  image?: string
}
