'use client'

import { useEffect } from 'react'

export function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Only initialize Lenis on client side
    if (typeof window === 'undefined') return

    // Dynamic import to avoid SSR issues
    import('lenis').then((Lenis) => {
      const lenis = new Lenis.default({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
      })

      function raf(time: number) {
        lenis.raf(time)
        requestAnimationFrame(raf)
      }

      requestAnimationFrame(raf)

      return () => {
        lenis.destroy()
      }
    }).catch((error) => {
      console.error('Failed to load Lenis:', error)
    })
  }, [])

  return (
    <>
      {children}
    </>
  )
}

