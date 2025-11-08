'use client'

import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { ArrowDown01Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import Aside from './aside'
import { Text, TextLink } from './text'

const shop_menu = [
  { name: "Men's Collection", href: '/collections/mens-jeans' },
  { name: 'Jeans Collection', href: '/collections/womens-jeans' },
  { name: "Kid's Collection", href: '/collections/kids-jeans' },
  { name: 'Cotton Collection', href: '/collections/cargo-joggers' },
]

interface Props {
  className?: string
}

const AsideSidebarNavigation = ({ className }: Props) => {
  return (
    <Aside openFrom="right" type="sidebar-navigation" logoOnHeading contentMaxWidthClassName="max-w-sm">
      <div className={className}>
        {/* Content */}
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-zinc-900/10">
            <div className="space-y-2 py-6">
              <TextLink
                href="/"
                className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-medium hover:bg-zinc-50"
              >
                Home
              </TextLink>

              <Disclosure as="div" className="-mx-3">
                <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 ps-3 pe-3.5 text-base/7 font-medium hover:bg-zinc-50">
                  <Text>Shop</Text>
                  <HugeiconsIcon
                    className="group-data-open:rotate-180"
                    icon={ArrowDown01Icon}
                    size={24}
                    strokeWidth={1}
                  />
                </DisclosureButton>
                <DisclosurePanel className="ps-6 pe-3 pb-2">
                  {shop_menu.map((item) => (
                    <DisclosureButton
                      key={item.name}
                      as={TextLink}
                      href={item.href}
                      className="block rounded-lg py-1 text-sm/7 font-medium hover:bg-zinc-50"
                    >
                      {item.name}
                    </DisclosureButton>
                  ))}
                </DisclosurePanel>
              </Disclosure>
              <TextLink
                href="/collections/new-arrivals"
                className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-medium hover:bg-zinc-50"
              >
                New Arrivals
              </TextLink>
              <TextLink
                href="/fit-guide"
                className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-medium hover:bg-zinc-50"
              >
                Fit Guide
              </TextLink>
            </div>
            <div className="py-6">
              <TextLink
                href="/login"
                className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-medium hover:bg-zinc-50"
              >
                Sign in
              </TextLink>
              <TextLink
                href="/register"
                className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-medium hover:bg-zinc-50"
              >
                Register
              </TextLink>
            </div>
          </div>
        </div>
      </div>
    </Aside>
  )
}

export default AsideSidebarNavigation
