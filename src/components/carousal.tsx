'use client'

import Autoplay from 'embla-carousel-autoplay'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useCallback, useEffect, useState } from 'react'

import { cn } from '@/lib/utils'

import useEmblaCarousel from 'embla-carousel-react'

const images = [
  { src: '/images/fashion/Parshwam-1.webp', alt: 'Fashion image 1', title: 'Parshwam 1' },
  { src: '/images/fashion/Parshwam-2.webp', alt: 'Fashion image 2', title: 'Parshwam 2' },
  { src: '/images/fashion/Parshwam-3.webp', alt: 'Fashion image 3', title: 'Parshwam 3' },
  { src: '/images/fashion/Parshwam-4.webp', alt: 'Fashion image 4', title: 'Parshwam 4' },
  { src: '/images/fashion/Parshwam-5.webp', alt: 'Fashion image 5', title: 'Parshwam 5' },
  { src: '/images/fashion/Parshwam-6.webp', alt: 'Fashion image 6', title: 'Parshwam 6' },
  { src: '/images/fashion/Parshwam-7.webp', alt: 'Fashion image 7', title: 'Parshwam 7' },
  { src: '/images/fashion/jacket.jpg', alt: 'Fashion jacket', title: 'Jacket' },
  { src: '/images/fashion/jean.jpg', alt: 'Fashion jeans', title: 'Jeans' },
  { src: '/images/fashion/shoes.jpg', alt: 'Fashion shoes', title: 'Shoes' },
]

export function Skiper54() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [currentIndex, setCurrentIndex] = useState(0)

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])
  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi])

  useEffect(() => {
    if (!emblaApi) return

    emblaApi.on('select', () => {
      setCurrentIndex(emblaApi.selectedScrollSnap())
    })
  }, [emblaApi])

  return (
    <div className="flex h-full w-screen items-center justify-center overflow-hidden bg-[#f5f4f3]">
      <div className="w-full" ref={emblaRef}>
        <div className="flex">
          {images.map((img, index) => (
            <div key={index} className="flex-[0_0_100%] min-w-0">
              <motion.div
                initial={false}
                animate={{
                  clipPath: currentIndex !== index ? 'inset(15% 0 15% 0 round 2rem)' : 'inset(0 0 0 0 round 2rem)',
                }}
                className="h-full w-full overflow-hidden rounded-3xl"
              >
                <div className="relative h-full w-full border">
                  <img src={img.src} alt={img.alt} className="h-full w-full scale-105 object-cover" />
                </div>
              </motion.div>
              <AnimatePresence mode="wait">
                {currentIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, filter: 'blur(10px)' }}
                    animate={{ opacity: 1, filter: 'blur(0px)' }}
                    transition={{ duration: 0.5 }}
                    className="absolute bottom-0 left-2 flex h-[14%] w-full translate-y-full items-center justify-center p-2 text-center font-medium tracking-tight text-black/20"
                  >
                    {img.title}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute right-0 -bottom-4 flex w-full items-center justify-between gap-2 px-4">
        <button
          aria-label="Previous slide"
          onClick={scrollPrev}
          className="rounded-full bg-black/10 p-2"
        >
          <ChevronLeft className="text-white" />
        </button>
        <button aria-label="Next slide" onClick={scrollNext} className="rounded-full bg-black/10 p-2">
          <ChevronRight className="text-white" />
        </button>
      </div>

      <div className="flex w-full items-center justify-center">
        <div className="flex items-center justify-center gap-2">
          {Array.from({ length: images.length }).map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={cn(
                'h-2 w-2 cursor-pointer rounded-full transition-all',
                currentIndex === index ? 'bg-black' : 'bg-[#D9D9D9]'
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

/**
 * Skiper 54 Carousel_006 — React + Framer Motion
 * Built with shadcn/ui And Embla Carousel - Read docs to learn more https://ui.shadcn.com/docs/components/carousel https://embla-carousel.com/
 *
 * Illustrations by AarzooAly - https://x.com/AarzooAly
 *
 * License & Usage:
 * - Free to use and modify in both personal and commercial projects.
 * - Attribution to Skiper UI is required when using the free version.
 * - No attribution required with Skiper UI Pro.
 *
 * Feedback and contributions are welcome.
 *
 * Author: @gurvinder-singh02
 * Website: https://gxuri.in
 * Twitter: https://x.com/Gur__vi
 */
