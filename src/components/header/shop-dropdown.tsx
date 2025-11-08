'use client'

import { ChevronDownIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

const jeansCategories = [
  {
    name: 'MENS COLLECTION',
    href: '/men-collection',
    description: 'Comfortable relaxed-fit jeans with extra room.',
    image: '/images/fashion/Parshwam-1.webp',
  },
  {
    name: 'KIDS COLLECTION',
    href: '/kids-collection',
    description: 'Modern slim-fit jeans with a tailored look.',
    image: '/images/fashion/Parshwam-2.webp',
  },
  {
    name: 'DENIM COLLECTION',
    href: '/denim-collection',
    description: 'Trendy bootcut for every occasion, from casual to formal.',
    image: '/images/fashion/Parshwam-5.webp',
  },
  {
    name: 'COTTON COLLECTION',
    href: '/cotton-collection',
    description: 'Elegant skinny jeans for every season.',
    image: '/images/fashion/Parshwam-4.webp',
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
            className="fixed right-0 left-0 z-50 px-4 sm:px-6"
            style={{ top: menuTop + 8 }}
          >
            <div className="mx-auto w-full max-w-6xl overflow-hidden rounded-2xl bg-white font-sans shadow-2xl ring-1 ring-black/5 dark:bg-zinc-900 dark:ring-white/10">
              <div className="p-4 sm:p-6 lg:p-6">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-4">
                  {jeansCategories.map((category, index) => (
                    <motion.div
                      key={category.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.25,
                        delay: index * 0.06,
                        ease: 'easeOut',
                      }}
                    >
                      <Link
                        href={category.href}
                        className="group flex h-full flex-col overflow-hidden rounded-lg bg-zinc-50 transition-all duration-300 hover:bg-zinc-100 hover:shadow-sm dark:bg-zinc-800 dark:hover:bg-zinc-700"
                        onClick={() => setIsOpen(false)}
                      >
                        <div className="relative overflow-hidden rounded-lg">
                          <div className="aspect-[3/4] w-full overflow-hidden">
                            <div
                              className="h-full w-full bg-contain bg-no-repeat bg-center"
                              style={{ backgroundImage: `url(${category.image})` }}
                            />
                          </div>

                          <div className="pointer-events-none absolute inset-x-0 bottom-2 sm:bottom-3 flex justify-center px-2 sm:px-3">
                            <span className="inline-block rounded bg-white/85 px-2 pt-1.5 pb-1 shadow-sm">
                              <h3 className="text-center font-sans text-xs font-bold tracking-[0.02em] text-zinc-950 uppercase sm:text-sm lg:text-sm">
                                {category.name}
                              </h3>
                            </span>
                          </div>
                        </div>

                        <div className="mt-auto p-2 sm:p-3">
                          <p className="mt-1 font-sans text-[10px]/4 text-zinc-950 sm:text-xs/5">{category.description}</p>
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
