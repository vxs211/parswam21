'use client'

import { ChevronDownIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

const newArrivalCategories = [
  {
    name: 'SALE',
    href: '/sale',
    description: 'Shop markdowns and limited-time offers.',
    image: '/images/fashion/Parshwam-6.webp',
  },
  {
    name: 'NEW ARRIVALS',
    href: '/new-arrivals',
    description: 'Fresh drops and the latest trends.',
    image: '/images/fashion/Parshwam-1.webp',
  },
  {
    name: 'FEATURED COLLECATION',
    href: '/featured-collection',
    description: 'Handpicked highlights of the week.',
    image: '/images/fashion/Parshwam-2.webp',
  },
  {
    name: 'PREMIUM COLLECATION',
    href: '/premium-collection',
    description: 'Elevated fabrics and refined details.',
    image: '/images/fashion/Parshwam-3.webp',
  },
  {
    name: 'ONLINE EXCUSIVE',
    href: '/online-exclusive',
    description: 'Only available on our website.',
    image: '/images/fashion/Parshwam-4.webp',
  },
  {
    name: 'BEST SALE',
    href: '/best-selling',
    description: 'Our most-loved styles and top sellers.',
    image: '/images/fashion/Parshwam-5.webp',
  },
]

interface NewArrivalsDropdownProps {
  className?: string
}

const NewArrivalsDropdown = ({ className }: NewArrivalsDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isPointerFine, setIsPointerFine] = useState<boolean | null>(null)
  const triggerRef = useRef<HTMLDivElement | null>(null)
  const [menuTop, setMenuTop] = useState<number>(0)

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return
    const mq = window.matchMedia('(pointer: fine)')
    const update = () => setIsPointerFine(mq.matches)
    update()
    mq.addEventListener?.('change', update)
    return () => mq.removeEventListener?.('change', update)
  }, [])

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
      {/* New Arrivals Button */}
      <button
        className="flex items-center gap-1 font-sans text-sm/6 uppercase transition-colors hover:text-zinc-600"
        onClick={() => setIsOpen(!isOpen)}
      >
        New Arrivals
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
            <div className="mx-auto w-full max-w-7xl overflow-hidden rounded-3xl bg-white font-sans shadow-2xl ring-1 ring-black/5 backdrop-blur-xl dark:bg-zinc-900/95 dark:ring-white/10">
              {/* Header Section */}
              <div className="border-b border-zinc-100/50 bg-white px-6 py-4 dark:border-zinc-800/50 dark:bg-zinc-900/50">
                <h2 className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">New Arrivals</h2>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                  Fresh drops and the latest fashion trends
                </p>
              </div>

              <div className="p-6 sm:p-8">
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 lg:gap-5">
                  {newArrivalCategories.map((category, index) => (
                    <motion.div
                      key={category.name}
                      initial={{ opacity: 0, y: 20, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{
                        duration: 0.35,
                        delay: index * 0.05,
                        ease: [0.25, 0.46, 0.45, 0.94],
                      }}
                    >
                      <Link
                        href={category.href}
                        className="group relative flex h-full flex-col overflow-hidden rounded-2xl transition-all duration-500 hover:shadow-xl hover:shadow-zinc-900/10"
                        onClick={() => setIsOpen(false)}
                      >
                        {/* Image Container (match Shop dropdown) */}
                        <div className="relative overflow-hidden rounded-2xl">
                          <div className="aspect-[4/5] w-full overflow-hidden">
                            <div
                              className="h-full w-full bg-cover bg-center bg-no-repeat brightness-[0.85] saturate-[0.9] transition-all duration-700 group-hover:scale-105 group-hover:brightness-100 group-hover:saturate-100"
                              style={{ backgroundImage: `url(${category.image})` }}
                            />
                          </div>
                        </div>

                        {/* Category Name (no container) */}
                        <div className="mt-3 flex justify-center px-4 pb-4">
                          <span className="text-center text-sm font-semibold tracking-[0.04em] text-zinc-900 uppercase sm:text-[0.9rem]">
                            {category.name}
                          </span>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="border-t border-zinc-100 bg-white px-4 py-3 sm:px-6 sm:py-4 dark:border-zinc-800 dark:bg-zinc-900">
                <Link
                  href="/collections/new-arrivals"
                  className="flex items-center justify-center font-sans text-sm font-medium text-indigo-600 transition-colors hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
                  onClick={() => setIsOpen(false)}
                >
                  View All New Arrivals
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

export default NewArrivalsDropdown
