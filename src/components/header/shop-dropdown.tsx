'use client'

import { ChevronDownIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

const jeansCategories = [
  {
    name: "Men's Collection",
    href: '/collections/mens-jeans',
    description: 'Premium quality jeans for men',
    image: '/images/fashion/Parshwam-1-1.webp',
  },
  {
    name: "Jeans Collection",
    href: '/collections/womens-jeans',
    description: 'Stylish and comfortable jeans for women',
    image: '/images/fashion/Parshwam-2-2.webp',
  },
  {
    name: "Kid's Collection",
    href: '/collections/kids-jeans',
    description: 'Durable and fun jeans for children',
    image: '/images/fashion/Parshwam-3-3.webp',
  },
  {
    name: 'Cotton Collection',
    href: '/collections/cargo-joggers',
    description: 'Casual cargo pants and joggers',
    image: '/images/fashion/Parshwam-4-4.webp',
  },
]

interface ShopDropdownProps {
  className?: string
}

const ShopDropdown = ({ className }: ShopDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isPointerFine, setIsPointerFine] = useState<boolean | null>(null)
  const triggerRef = useRef<HTMLDivElement | null>(null)
  const [menuTop, setMenuTop] = useState<number>(0)

  // Detect if device has a fine pointer (e.g., mouse). Hover interactions only on such devices.
  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return
    const mq = window.matchMedia('(pointer: fine)')
    const update = () => setIsPointerFine(mq.matches)
    update()
    mq.addEventListener?.('change', update)
    return () => mq.removeEventListener?.('change', update)
  }, [])

  // Position dropdown under the trigger, but render it fixed so it can center to viewport
  const updateMenuTop = () => {
    if (!triggerRef.current) return
    const rect = triggerRef.current.getBoundingClientRect()
    setMenuTop(rect.bottom + window.scrollY)
  }

  useEffect(() => {
    if (!isOpen) return
    updateMenuTop()
    const onResize = () => updateMenuTop()
    const onScroll = () => updateMenuTop()
    window.addEventListener('resize', onResize)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('resize', onResize)
      window.removeEventListener('scroll', onScroll)
    }
  }, [isOpen])

  return (
    <div
      ref={triggerRef}
      className={clsx('relative', className)}
      onMouseEnter={isPointerFine ? () => setIsOpen(true) : undefined}
      onMouseLeave={isPointerFine ? () => setIsOpen(false) : undefined}
    >
      {/* Shop Button */}
      <button
        className="flex items-center gap-1 font-sans text-sm/6 uppercase transition-colors hover:text-zinc-600"
        onClick={() => setIsOpen(!isOpen)}
      >
        Shop
        <ChevronDownIcon className={clsx('h-4 w-4 transition-transform duration-200', isOpen && 'rotate-180')} />
      </button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={isPointerFine ? { opacity: 0, y: -10, scale: 0.98 } : { opacity: 0, y: -6, scale: 1 }}
            animate={isPointerFine ? { opacity: 1, y: 0, scale: 1 } : { opacity: 1, y: 0, scale: 1 }}
            exit={isPointerFine ? { opacity: 0, y: -10, scale: 0.98 } : { opacity: 0, y: -6, scale: 1 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="fixed left-0 right-0 z-50 px-4 sm:px-6"
            style={{ top: menuTop + 8 }}
          >
            <div className="mx-auto w-full max-w-6xl overflow-hidden rounded-2xl bg-white font-sans shadow-2xl ring-1 ring-black/5 dark:bg-zinc-900 dark:ring-white/10">
              <div className="p-4 sm:p-8">
                <div className="grid grid-cols-2 gap-4 sm:gap-8 sm:grid-cols-2 lg:grid-cols-4">
                  {jeansCategories.map((category, index) => (
                    <motion.div
                      key={category.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.3,
                        delay: index * 0.1,
                        ease: 'easeOut',
                      }}
                    >
                      <Link
                        href={category.href}
                        className="group block overflow-hidden rounded-lg bg-zinc-50 transition-all duration-300 hover:bg-zinc-100 hover:shadow-md dark:bg-zinc-800 dark:hover:bg-zinc-700"
                        onClick={() => setIsOpen(false)}
                      >
                        <div className="relative overflow-hidden rounded-lg">
                          {/* Larger image area */}
                          <div className="aspect-[3/4] w-full overflow-hidden">
                            <div
                              className="h-full w-full bg-cover bg-center"
                              style={{ backgroundImage: `url(${category.image})` }}
                            />
                          </div>

                          {/* Title over image */}
                          <div className="pointer-events-none absolute inset-x-0 bottom-3 flex justify-center px-4">
                            <h3 className="font-sans font-bold text-zinc-950 text-base sm:text-lg text-center uppercase tracking-[0.02em]">
                              {category.name}
                            </h3>
                          </div>
                        </div>

                        {/* Description under image (same site font and black text) */}
                        <div className="p-3 sm:p-4">
                          <p className="mt-1 text-xs/5 sm:text-sm/6 font-sans text-zinc-950">
                            {category.description}
                          </p>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* View All Link */}
              <div className="border-t border-zinc-100 bg-zinc-50 px-4 py-3 sm:px-6 sm:py-4 dark:border-zinc-800 dark:bg-zinc-900">
                <Link
                  href="/collections/all"
                  className="flex items-center justify-center font-sans text-sm font-medium text-indigo-600 transition-colors hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
                  onClick={() => setIsOpen(false)}
                >
                  View All Collections
                  <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default ShopDropdown
