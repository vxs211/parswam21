'use client'

import { VectorArrowDown2 } from '@/components/vector-arrow-down'
import { useEffect, useRef, useState } from 'react'

interface AnimatedArrowProps {
  reverse?: boolean
}

const AnimatedArrow = ({ reverse }: AnimatedArrowProps) => {
  const ref = useRef<HTMLDivElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el || typeof IntersectionObserver === 'undefined') return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
          } else {
            // Reset when it leaves the viewport so animation can replay
            setVisible(false)
          }
        })
      },
      { threshold: 0.2 }
    )

    observer.observe(el)
    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <div
      ref={ref}
      className={`relative z-10 -mt-10 -mb-10 flex justify-center text-black ${
        visible ? 'arrow-draw-active' : 'arrow-draw-inactive'
      }`}
    >
      <VectorArrowDown2
        className={`arrow-draw-svg h-28 w-auto scale-y-100 text-inherit md:h-48 md:w-auto md:scale-y-100 ${
          reverse ? '-translate-x-10 scale-x-[-1] md:-translate-x-16' : 'translate-x-10 md:translate-x-16'
        }`}
        aria-hidden
      />
      <style jsx>{`
        .arrow-draw-inactive {
          opacity: 0;
        }

        .arrow-draw-active {
          opacity: 1;
        }

        .arrow-draw-svg path {
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          transition: opacity 0.3s ease-out;
        }

        .arrow-draw-active .arrow-draw-svg path {
          animation: arrow-draw-line 2.5s ease-in-out forwards;
        }

        @keyframes arrow-draw-line {
          0% {
            stroke-dashoffset: 1000;
          }
          100% {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </div>
  )
}

export default AnimatedArrow
