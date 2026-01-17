'use client'

import { useEffect, useState } from 'react'

export function CursorEffect() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Disable on mobile/touch devices
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)

    if (isMobile) return

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    document.addEventListener('mousemove', handleMouseMove)
    const interactiveElements = document.querySelectorAll('a, button, [role="button"]')
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter)
      el.addEventListener('mouseleave', handleMouseLeave)
    })

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter)
        el.removeEventListener('mouseleave', handleMouseLeave)
      })
      window.removeEventListener('resize', checkMobile)
    }
  }, [isMobile])

  if (isMobile) return null

  return (
    <>
      <div
        className="fixed top-0 left-0 w-6 h-6 bg-[#b30920]/20 rounded-full pointer-events-none z-[9999] mix-blend-difference transition-transform duration-300 ease-out hidden md:block"
        style={{
          transform: `translate(${mousePosition.x - 12}px, ${mousePosition.y - 12}px)`,
          scale: isHovering ? 2 : 1,
        }}
      />
      <div
        className="fixed top-0 left-0 w-2 h-2 bg-[#b30920] rounded-full pointer-events-none z-[9999] transition-transform duration-150 ease-out hidden md:block"
        style={{
          transform: `translate(${mousePosition.x - 4}px, ${mousePosition.y - 4}px)`,
        }}
      />
    </>
  )
}
