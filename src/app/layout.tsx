import Aside from '@/components/aside'
import LenisSmoothScroll from '@/components/lenis-smooth-scroll'
import '@/styles/tailwind.css'
import clsx from 'clsx'
import type { Metadata } from 'next'
import { DM_Sans, Playfair_Display } from 'next/font/google'

const dm_sans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  style: ['normal'],
  variable: '--font-dm-sans',
})
const playfair_display = Playfair_Display({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  style: 'italic',
  variable: '--font-playfair-display',
})

export const metadata: Metadata = {
  title: {
    template: '%s - Parswam',
    default: 'Parswam',
  },
  description:
    'Parswam is a modern and elegant jeans store built with Next.js, Tailwind CSS, and TypeScript. It is designed to be simple and easy to use, with a focus on performance and accessibility.',
  keywords: [
    'Next.js',
    'Tailwind CSS',
    'TypeScript',
    'Bipan',
    'Headless UI',
    'Fashion',
    'Hijab',
    'Skincare',
    'E-commerce',
  ],
  icons: {
    icon: '/images/fashion/favicon.jpg',
  },
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={clsx(
        'text-zinc-950 antialiased dark:bg-zinc-900 dark:text-white dark:lg:bg-zinc-950',
        dm_sans.variable,
        playfair_display.variable
      )}
    >
      <body className="overflow-x-hidden">
        <LenisSmoothScroll>
          <Aside.Provider>{children}</Aside.Provider>
        </LenisSmoothScroll>
      </body>
    </html>
  )
}
