'use client'

import { useEffect } from 'react'

export function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Only initialize Lenis on client side
    if (typeof window === 'undefined') return

    let lenisInstance: any = null
    let rafId: number | null = null

    // Dynamic import to avoid SSR issues
    import('lenis').then((LenisModule) => {
      const Lenis = LenisModule.default || LenisModule
      lenisInstance = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
      })

      function raf(time: number) {
        if (lenisInstance) {
          lenisInstance.raf(time)
        }
        rafId = requestAnimationFrame(raf)
      }

      rafId = requestAnimationFrame(raf)
    }).catch((error) => {
      console.error('Failed to load Lenis:', error)
    })

    return () => {
      if (rafId !== null) {
        cancelAnimationFrame(rafId)
      }
      if (lenisInstance) {
        lenisInstance.destroy()
      }
    }
  }, [])

  return (
    <>
      {children}
    </>
  )
}

