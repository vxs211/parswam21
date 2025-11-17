'use client'

import gsap from 'gsap'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

const labels = ['MORELI', 'ANIMAN', 'GERNIUI'] as const

const HeroPillToggle = () => {
  const [active, setActive] = useState<(typeof labels)[number]>('MORELI')
  const activeIndex = labels.indexOf(active)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if ((active === 'MORELI' || active === 'ANIMAN' || active === 'GERNIUI') && imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        {
          y: '110vh',
          opacity: 0,
        },
        {
          y: '0%',
          opacity: 1,
          duration: 2.8,
          ease: 'power4.out',
        }
      )
    } else if (imageRef.current) {
      gsap.to(imageRef.current, {
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out',
      })
    }
  }, [active])

  return (
    <>
      <div
        ref={imageRef}
        className="pointer-events-none fixed inset-0 z-0 flex items-end justify-center pb-0 opacity-0"
      >
        {(active === 'MORELI' || active === 'ANIMAN' || active === 'GERNIUI') && (
          <Image
            src={active === 'MORELI' ? '/hero/h1.svg' : active === 'ANIMAN' ? '/hero/h2.svg' : '/hero/h3.svg'}
            alt="Hero"
            width={800}
            height={800}
            className="h-auto max-h-[100vh] w-full max-w-[100vw] translate-y-60 object-contain md:max-h-[95vh] md:w-auto md:translate-y-69 lg:w-full lg:max-w-[100vw] lg:translate-y-20"
          />
        )}
      </div>

      <div className="fixed bottom-[-144px] left-1/2 z-10 mx-auto flex w-full max-w-xl -translate-x-1/2 items-center justify-center text-xs font-semibold tracking-[0.18em] text-zinc-900 sm:static sm:bottom-auto sm:left-auto sm:mt-20 sm:translate-x-0">
        <div className="relative mx-auto flex w-full max-w-xs items-center gap-3 rounded-full bg-white/90 px-2 py-1.5 sm:max-w-sm md:max-w-md md:translate-y-[150px] lg:max-w-xl">
          <div
            className="pointer-events-none absolute inset-y-1 left-2 w-1/3 rounded-full bg-zinc-900 transition-transform duration-500 ease-out"
            style={{ transform: `translateX(${activeIndex * 100}%)` }}
          />

          {labels.map((label, index) => {
            const isActive = active === label
            const Tag = index === 1 ? 'h2' : index === 2 ? 'h3' : 'span'

            return (
              <button
                key={label}
                type="button"
                onClick={() => setActive(label)}
                className="relative z-10 flex-1 rounded-full px-6 py-3 text-center transition-colors duration-200"
              >
                <Tag className={isActive ? 'text-white' : 'text-zinc-900'}>{label}</Tag>
              </button>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default HeroPillToggle
