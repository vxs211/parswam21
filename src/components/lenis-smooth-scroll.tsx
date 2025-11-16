'use client'

import Lenis from 'lenis'
import { useEffect, type ReactNode } from 'react'

interface LenisSmoothScrollProps {
  children: ReactNode
}

const LenisSmoothScroll = ({ children }: LenisSmoothScrollProps) => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.8,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
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
  }, [])

  return <>{children}</>
}

export default LenisSmoothScroll
