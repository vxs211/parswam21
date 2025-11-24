'use client'

import { ArrowUpRightIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import { ReactNode, useEffect, useState } from 'react'
import { Button } from '../button'
import { Heading } from '../heading'
import StarSvg from '../star-svg'
import { Text } from '../text'

type Slide = {
  src: string
  heading?: ReactNode
  description?: string
  ctaLabel?: string
  ctaHref?: string
}

const slides: Slide[] = [
  {
    src: '/images/fashion/blog1.jpg',
    heading: (
      <>
        <span>Urban</span>
        <br />
        <span data-slot="italic">Jeans</span>
      </>
    ),
    description: 'Stunning denim for the fashion-forward. Elevate your look with our trendsetting jeans.',
    ctaLabel: 'VIEW COLLECTION',
    ctaHref: '/collections/all',
  },
  {
    src: '/images/fashion/blog2.jpg',
    heading: (
      <>
        <span>Chic</span>
        <br />
        <span data-slot="italic">Cotton Pants</span>
      </>
    ),
    description: 'Sophisticated comfort, redefined. Embrace style with our premium cotton pants.',
    ctaLabel: 'VIEW COLLECTION',
    ctaHref: '/collections/all',
  },
  {
    src: '/images/fashion/blog3.png',
    heading: (
      <>
        <span>Sleek</span>
        <br />
        <span data-slot="italic">Formal Pants</span>
      </>
    ),
    description: 'Elegant precision for the discerning gentleman. Command the room with our formal pants.',
    ctaLabel: 'VIEW COLLECTION',
    ctaHref: '/collections/all',
  },
]

interface HeroSection3Props {
  className?: string
}

const HeroSection3 = ({ className }: HeroSection3Props) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % slides.length)
    }, 7000)
    return () => clearInterval(interval)
  }, [])

  const currentSlide = slides[currentImageIndex] ?? slides[0]
  const headingContent = currentSlide.heading || (
    <>
      <span data-slot="italic">Where</span> Luxury <br /> finds its <span data-slot="italic">Meaning.</span>
    </>
  )
  const description =
    currentSlide.description ||
    'Unreservedly honest products that truly work, and be kind to skin and the planet – no exceptions!'
  const ctaLabel = currentSlide.ctaLabel || 'Explore all products'
  const ctaHref = currentSlide.ctaHref || '/collections/all'

  return (
    <div className="relative flex min-h-dvh w-full select-none">
      {slides.map((slide, index) => (
        <Image
          key={slide.src}
          src={slide.src}
          alt="hero"
          className={`object-cover object-center transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'absolute opacity-0'}`}
          fill
          priority
        />
      ))}
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative container flex flex-1 pt-20 pb-36">
        <div className="mx-auto flex w-full max-w-4xl flex-col items-center justify-center gap-y-7 self-center text-center text-white">
          <StarSvg width={48} height={48} color="white" />
          <Heading fontSize="text-5xl/none md:text-6xl/none lg:text-7xl/none 2xl:text-8xl/none font-semibold">
            {headingContent}
          </Heading>
          <Text className="max-w-sm">{description}</Text>
        </div>
      </div>

      <div className="absolute bottom-14 left-1/2 container max-w-3xl -translate-x-1/2 sm:bottom-20">
        <Button
          href={ctaHref}
          color="white"
          className="mt-10 w-full cursor-pointer !border-white py-5 font-medium tracking-wide underline sm:py-6"
        >
          {ctaLabel}
          <div className="absolute right-1.5 flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 text-white sm:h-12 sm:w-12">
            <ArrowUpRightIcon className="h-4 w-4" />
          </div>
        </Button>
      </div>
    </div>
  )
}

export default HeroSection3
