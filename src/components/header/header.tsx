'use client'

import { Logo } from '@/app/logo'
import clsx from 'clsx'
import Link from 'next/link'
import { TextLink } from '../text'
import CartIconBtn from './cart-icon-btn'
import HamburgerIconMenu from './hamburger-icon-menu'
import SearchIconPopover from './search-icon-popover'
import ShopDropdown from './shop-dropdown'
import NewArrivalsDropdown from './new-arrivals-dropdown'
import UserIconPopover from './user-icon-popover'

interface HeaderProps {
  className?: string
  hasBottomBorder?: boolean
  variant?: 'default' | 'bg-transparent-text-white'
}

const Header = ({ className, hasBottomBorder = true, variant = 'default' }: HeaderProps) => {
  return (
    <header
      className={clsx(
        className,
        'group z-10 w-full',
        variant === 'default' && 'relative bg-white',
        variant === 'bg-transparent-text-white' &&
          'absolute inset-x-0 top-0 bg-transparent text-white transition-colors duration-300 has-[.bitpan-popover-full-panel]:text-zinc-950'
      )}
    >
      <nav aria-label="Global" className="container">
        <div
          className={clsx(
            'flex items-center justify-between border-zinc-950/10 py-6 dark:border-white/10',
            hasBottomBorder && 'border-b',
            !hasBottomBorder && 'has-[.bitpan-popover-full-panel]:border-b'
          )}
        >
          {/* LEFT LOGO */}
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Logo />
            </Link>
          </div>

          {/* MAIN CENTER MENUS */}
          <div className="hidden lg:flex lg:gap-x-8">
            <TextLink href="/">Home</TextLink>
            <ShopDropdown />
            <NewArrivalsDropdown />
            <TextLink href="/fit-guide">Fit Guide</TextLink>
          </div>

          {/* RIGHT ICON BUTTONS */}
          <div className="flex flex-1 justify-end gap-x-2.5 md:gap-x-4 xl:gap-x-5">
            {/* HAMBURGER MENU */}
            <HamburgerIconMenu />

            {/* SEARCH */}
            <SearchIconPopover />

            {/* USER - DROPDOWN */}
            <UserIconPopover />

            {/* CART */}
            <CartIconBtn />
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
