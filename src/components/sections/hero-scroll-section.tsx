'use client'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef } from 'react'
import HeroAnimatedTitle from '../hero-animated-title'
import HeroPillToggle from '../hero-pill-toggle'

type HeroLabel = 'MORELI' | 'ANIMAN' | 'GERNIUI'

const HeroScrollSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null)
  const currentLabelRef = useRef<HeroLabel>('MORELI')

  useEffect(() => {
    if (typeof window === 'undefined' || !sectionRef.current) return

    gsap.registerPlugin(ScrollTrigger)

    const labels: HeroLabel[] = ['MORELI', 'ANIMAN', 'GERNIUI']

    const trigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top top',
      end: () => '+=' + window.innerHeight * 3,
      pin: true,
      scrub: 0.6,
      snap: {
        snapTo: [0, 0.5, 1],
        duration: 0.8,
        ease: 'power2.out',
      },
      onUpdate: (self) => {
        const progress = self.progress
        let index = 0

        if (progress < 0.33) {
          index = 0
        } else if (progress < 0.66) {
          index = 1
        } else {
          index = 2
        }

        const nextLabel = labels[index]

        if (currentLabelRef.current !== nextLabel) {
          currentLabelRef.current = nextLabel
          window.dispatchEvent(
            new CustomEvent('hero-force-label', {
              detail: nextLabel,
            })
          )
        }
      },
    })

    return () => {
      trigger.kill()
    }
  }, [])

  return (
    <section ref={sectionRef} className="relative h-[90vh] bg-white select-none md:min-h-screen">
      <div className="absolute top-1/2 left-1/2 container max-w-3xl -translate-x-1/2 -translate-y-1/2 px-4 lg:max-w-7xl">
        <div className="flex flex-col items-center gap-4 sm:gap-6">
          <HeroAnimatedTitle />
          <HeroPillToggle />
        </div>
      </div>
    </section>
  )
}

export default HeroScrollSection
