'use client'

import gsap from 'gsap'
import { useEffect, useRef } from 'react'

const HeroAnimatedTitle = () => {
  const titleRef = useRef<HTMLHeadingElement | null>(null)
  const parsRef = useRef<HTMLSpanElement | null>(null)
  const storeRef = useRef<HTMLSpanElement | null>(null)

  useEffect(() => {
    if (!titleRef.current || !parsRef.current || !storeRef.current) return

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          duration: 1.3,
          ease: 'expo.out',
        },
      })

      tl.from(titleRef.current, {
        opacity: 0,
        y: 50,
      })
        .from(
          parsRef.current,
          {
            opacity: 0,
            y: 40,
          },
          '>-0.4'
        )
        .from(
          storeRef.current,
          {
            opacity: 0,
            y: 40,
          },
          '>-0.2'
        )
    }, titleRef)

    return () => ctx.revert()
  }, [])

  return (
    <h2
      ref={titleRef}
      className="text-center leading-[0.8] font-extrabold tracking-[-0.5em] text-black sm:tracking-[-0.8em] md:tracking-[-1em]"
    >
      <span ref={parsRef} className="block text-[22vw] sm:text-[18vw] md:text-[16vw] lg:text-[20vw]">
        PARSWAM
      </span>
      <span
        ref={storeRef}
        className="block bg-gradient-to-r from-black via-zinc-500 to-white bg-clip-text text-[20vw] text-transparent italic sm:text-[12vw] md:text-[10vw] lg:text-[20vw]"
        data-slot="italic"
      >
        STORE
      </span>
    </h2>
  )
}

export default HeroAnimatedTitle
