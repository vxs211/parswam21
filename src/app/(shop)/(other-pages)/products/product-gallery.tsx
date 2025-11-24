'use client'

import { Dialog } from '@headlessui/react'
import { HeartIcon as HeartIconOutline, ViewfinderCircleIcon } from '@heroicons/react/24/outline'
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid'
import { Cancel01Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import clsx from 'clsx'
import Image from 'next/image'
import { useEffect, useState } from 'react'

interface TImage {
  src: string
  alt?: string
  width?: number
  height?: number
}

/**
 * A client component that defines a media gallery for hosting images, 3D models, and videos of products
 */
export function ProductGallery({ media, className }: { media: TImage[]; className?: string }) {
  const [isOpenModal, setOpenModal] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const [isWishlisted, setIsWishlisted] = useState(false)

  const closeModal = () => {
    setOpenModal(false)
    setActiveIndex(0)
  }

  if (!media.length) {
    return null
  }

  return (
    <>
      <div className={`swimlane hidden-scrollbar lg:grid-flow-row lg:grid-cols-2 lg:overflow-x-hidden ${className}`}>
        {media.map((image, i) => {
          const isFullWidth = i % 3 === 0

          return (
            <div
              className={clsx(
                'group relative aspect-3/4 w-72 shrink-0 cursor-pointer snap-center bg-gray-100 sm:w-96 lg:w-full',
                isFullWidth ? 'lg:col-span-2' : 'lg:col-span-1'
              )}
              key={'image' + i}
              onClick={() => {
                setOpenModal(true)
                setActiveIndex(i)
              }}
              aria-hidden
            >
              <Image
                src={image.src}
                alt={image.alt || 'Product image'}
                sizes={isFullWidth ? '(max-width: 1024px) 24rem, 90vw' : '(max-width: 1024px) 24rem, 40vw'}
                fill
                className="h-full w-full object-cover"
                priority
              />

              {/* Quick view button */}
              <button
                className="absolute top-3 left-3 flex h-8 w-8 items-center justify-center rounded-full bg-white opacity-0 transition-opacity group-hover:opacity-100 dark:text-neutral-100"
                type="button"
              >
                <span className="sr-only">View image</span>
                <ViewfinderCircleIcon className="h-4 w-4" />
              </button>

              {/* Wishlist heart button */}
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation()
                  setIsWishlisted((prev) => !prev)
                }}
                className="absolute top-3 right-3 flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 bg-white/95 text-zinc-900 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
              >
                <span className="sr-only">{isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}</span>
                {isWishlisted ? <HeartIconSolid className="h-4 w-4" /> : <HeartIconOutline className="h-4 w-4" />}
              </button>
            </div>
          )
        })}
      </div>

      <div className="">
        <Dialog
          open={isOpenModal}
          transition
          as="div"
          className="fixed inset-0 z-50 overflow-y-auto"
          onClose={closeModal}
        >
          <>
            <span className="dr inline-block h-screen align-middle" aria-hidden="true">
              &#8203;
            </span>

            <button
              type="button"
              onClick={closeModal}
              className="fixed top-2 left-2 z-50 -m-2.5 cursor-pointer p-2.5 sm:top-5 sm:left-5"
            >
              <HugeiconsIcon icon={Cancel01Icon} size={32} color="currencyColor" strokeWidth={1} />
            </button>

            <div className="inline-block w-full overflow-hidden bg-white text-left align-middle text-neutral-900 shadow-xl">
              <div className="container">
                <ModalImageGallery media={media} indexActive={activeIndex} />
              </div>
            </div>
          </>
        </Dialog>
      </div>
    </>
  )
}

function ModalImageGallery({ media, indexActive }: { media: TImage[]; indexActive: number }) {
  const [currentIndex, setCurrentIndex] = useState(indexActive ?? 0)
  const [isHovering, setIsHovering] = useState(false)
  const [position, setPosition] = useState({ x: 0.5, y: 0.5 })

  useEffect(() => {
    if (typeof indexActive === 'number') {
      setCurrentIndex(indexActive)
    }
  }, [indexActive])

  if (!media.length) return null

  const currentImage = media[currentIndex] ?? media[0]

  const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = (event) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const x = (event.clientX - rect.left) / rect.width
    const y = (event.clientY - rect.top) / rect.height

    setPosition({
      x: Math.min(1, Math.max(0, x)),
      y: Math.min(1, Math.max(0, y)),
    })
  }

  const showPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + media.length) % media.length)
  }

  const showNext = () => {
    setCurrentIndex((prev) => (prev + 1) % media.length)
  }

  return (
    <div className="flex flex-col gap-6 md:flex-row md:items-stretch">
      {/* Main image with hover lens */}
      <div className="relative flex-1 rounded-2xl border border-zinc-200 bg-zinc-50">
        <div
          className="relative aspect-[3/4] w-full cursor-zoom-in overflow-hidden"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          onMouseMove={handleMouseMove}
        >
          <Image
            src={currentImage.src}
            alt={currentImage.alt || 'Product image'}
            fill
            sizes="(min-width: 1024px) 32vw, 90vw"
            className="object-contain"
          />

          {isHovering && (
            <div
              className="pointer-events-none absolute h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/70 bg-white/10 shadow-[0_0_0_1px_rgba(0,0,0,0.15)]"
              style={{
                left: `${position.x * 100}%`,
                top: `${position.y * 100}%`,
              }}
            />
          )}

          {media.length > 1 && (
            <>
              <button
                type="button"
                onClick={showPrev}
                className="absolute top-1/2 left-6 flex h-16 w-16 -translate-y-1/2 items-center justify-center rounded-full bg-white text-2xl text-zinc-900 shadow-lg transition hover:bg-white/90"
              >
                <span className="sr-only">Previous image</span>
                &#8592;
              </button>
              <button
                type="button"
                onClick={showNext}
                className="absolute top-1/2 right-6 flex h-16 w-16 -translate-y-1/2 items-center justify-center rounded-full bg-white text-2xl text-zinc-900 shadow-lg transition hover:bg-white/90"
              >
                <span className="sr-only">Next image</span>
                &#8594;
              </button>
            </>
          )}
        </div>

        {media.length > 1 && (
          <div className="mt-4 flex gap-4 overflow-x-auto pb-1">
            {media.map((image, index) => (
              <button
                key={image.src + index}
                type="button"
                onClick={() => setCurrentIndex(index)}
                className={clsx(
                  'relative h-20 w-16 shrink-0 overflow-hidden rounded-lg border',
                  index === currentIndex ? 'border-zinc-900' : 'border-zinc-200'
                )}
              >
                <Image src={image.src} alt={image.alt || 'Thumbnail'} fill sizes="96px" className="object-cover" />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Zoomed panel (desktop only) */}
      <div className="relative hidden flex-1 overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50 md:block">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `url(${currentImage.src})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: '200%',
            backgroundPosition: `${position.x * 100}% ${position.y * 100}%`,
          }}
        />
      </div>
    </div>
  )
}
