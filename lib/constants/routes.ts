/**
 * Application route constants
 * Centralized route definitions for easier maintenance
 */

export const ROUTES = {
  HOME: '/',
  MVP_OPTIONS: {
    OPTION_1: '/mvp-options/option-1',
    OPTION_2: '/mvp-options/option-2',
    OPTION_3: '/mvp-options/option-3',
  },
  // Future routes will be added here
  // ABOUT: '/about',
  // SERVICES: '/services',
  // CONTACT: '/contact',
} as const

/**
 * Route type for TypeScript autocomplete
 */
export type Route = typeof ROUTES[keyof typeof ROUTES] | typeof ROUTES['MVP_OPTIONS'][keyof typeof ROUTES['MVP_OPTIONS']]
