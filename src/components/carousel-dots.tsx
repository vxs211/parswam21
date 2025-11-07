'use client'

import { EmblaCarouselType } from 'embla-carousel'
import { useCallback, useEffect, useState } from 'react'
import clsx from 'clsx'

interface CarouselDotsProps {
  emblaApi: EmblaCarouselType | undefined
  className?: string
}

export const CarouselDots = ({ emblaApi, className }: CarouselDotsProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const onDotButtonClick = useCallback(
    (index: number) => {
      if (!emblaApi) return
      emblaApi.scrollTo(index)
    },
    [emblaApi]
  )

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList())
  }, [])

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onInit(emblaApi)
    onSelect(emblaApi)
    emblaApi.on('reInit', onInit).on('reInit', onSelect).on('select', onSelect)
  }, [emblaApi, onInit, onSelect])

  return (
    <div className={clsx('flex items-center justify-center gap-2', className)}>
      {scrollSnaps.map((_, index) => (
        <button
          key={index}
          onClick={() => onDotButtonClick(index)}
          className={clsx(
            'h-2 w-2 rounded-full transition-colors',
            index === selectedIndex ? 'bg-black' : 'bg-gray-300'
          )}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  )
}
