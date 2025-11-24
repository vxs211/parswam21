'use client'

import { ShoppingBag03Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import Link from 'next/link'

const CartIconBtn = () => {
  return (
    <Link
      href="/cart"
      className="-m-2.5 inline-flex cursor-pointer items-center justify-center rounded-md p-2.5"
      aria-label="Open shopping cart"
    >
      <HugeiconsIcon icon={ShoppingBag03Icon} size={24} color="currentColor" strokeWidth={1} />
      <span className="text-xs leading-none">(3)</span>
    </Link>
  )
}

export default CartIconBtn
