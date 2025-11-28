'use client'

import gsap from 'gsap'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

const labels = ['MORELI', 'ANIMAN', 'GERNIUI'] as const

const HeroPillToggle = () => {
  const [active, setActive] = useState<(typeof labels)[number]>('MORELI')
  const activeIndex = labels.indexOf(active)
  const imageRef = useRef<HTMLDivElement>(null)
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([])
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 })

  useEffect(() => {
    if ((active === 'MORELI' || active === 'ANIMAN' || active === 'GERNIUI') && imageRef.current) {
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('hero-label-change', { detail: active }))
      }
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

  useEffect(() => {
    if (typeof window === 'undefined') return

    const handler = (event: Event) => {
      if (!(event instanceof CustomEvent)) return
      const value = event.detail as (typeof labels)[number]

      if (labels.includes(value)) {
        setActive(value)
      }
    }

    window.addEventListener('hero-force-label', handler as EventListener)

    return () => {
      window.removeEventListener('hero-force-label', handler as EventListener)
    }
  }, [])

  useEffect(() => {
    const updateIndicator = () => {
      const activeButton = buttonRefs.current[activeIndex]
      if (activeButton) {
        setIndicatorStyle({
          left: activeButton.offsetLeft,
          width: activeButton.offsetWidth,
        })
      }
    }

    updateIndicator()
    window.addEventListener('resize', updateIndicator)
    return () => window.removeEventListener('resize', updateIndicator)
  }, [activeIndex])

  return (
    <>
      <div
        ref={imageRef}
        className="pointer-events-none fixed inset-0 z-0 flex items-end justify-center pb-0 opacity-0"
      >
        {(active === 'MORELI' || active === 'ANIMAN' || active === 'GERNIUI') && (
          <Image
            key={active}
            src={active === 'MORELI' ? '/hero/h1.svg' : active === 'ANIMAN' ? '/hero/h2.svg' : '/hero/h3.svg'}
            alt="Hero"
            width={800}
            height={800}
            className="h-auto max-h-[100vh] w-full max-w-[100vw] translate-y-[12rem] object-contain sm:translate-y-[8rem] md:max-h-[95vh] md:w-auto md:translate-y-[16rem] lg:w-full lg:max-w-[100vw] lg:translate-y-[8rem]"
          />
        )}
      </div>

      <div className="hidden">
        <Image src="/hero/h1.svg" alt="Hero MORELI" width={800} height={800} priority />
        <Image src="/hero/h2.svg" alt="Hero ANIMAN" width={800} height={800} priority />
        <Image src="/hero/h3.svg" alt="Hero GERNIUI" width={800} height={800} priority />
      </div>

      <div className="fixed bottom-[-150px] left-1/2 z-10 mx-auto flex w-full max-w-xl -translate-x-1/2 items-center justify-center px-4 text-xs font-semibold tracking-[0.18em] text-zinc-900 sm:static sm:bottom-auto sm:left-auto sm:mt-20 sm:translate-x-0 sm:px-0">
        <div className="relative mx-auto flex w-full max-w-xs items-center rounded-full bg-white/90 p-1.5 sm:max-w-sm md:max-w-md md:translate-y-[150px] lg:max-w-xl lg:translate-y-[-30px]">
          <div
            className="pointer-events-none absolute inset-y-1.5 rounded-full bg-zinc-900 transition-all duration-500 ease-out"
            style={{
              left: `${indicatorStyle.left}px`,
              width: `${indicatorStyle.width}px`,
            }}
          />

          {labels.map((label, index) => {
            const isActive = active === label
            const Tag = index === 1 ? 'h2' : index === 2 ? 'h3' : 'span'

            return (
              <button
                key={label}
                type="button"
                ref={(el) => {
                  buttonRefs.current[index] = el
                }}
                onClick={() => setActive(label)}
                className="relative z-10 flex-1 rounded-full px-3 py-2.5 text-center transition-colors duration-200 sm:px-4 sm:py-3 md:px-6"
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
