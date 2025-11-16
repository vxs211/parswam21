'use client'

import { Checkbox, CheckboxField } from '@/components/checkbox'
import { Divider } from '@/components/divider'
import { Field, Label } from '@/components/fieldset'
import { Input } from '@/components/input'
import { Text, TextLink } from '@/components/text'
import {
  FavouriteIcon,
  Logout01Icon,
  Settings03Icon,
  ShoppingBasket01Icon,
  UserListIcon,
} from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import LinkNext from 'next/link'
import { type FormEvent, useState } from 'react'

const tiles = [
  {
    title: 'Orders',
    href: '/orders',
    icon: ShoppingBasket01Icon,
  },
  {
    title: 'Addresses',
    href: '/settings#address',
    icon: UserListIcon,
  },
  {
    title: 'Account Details',
    href: '/settings',
    icon: Settings03Icon,
  },
  {
    title: 'Log out',
    href: '#',
    icon: Logout01Icon,
  },
  {
    title: 'Wishlist',
    href: '/collections/all',
    icon: FavouriteIcon,
  },
]

export function AccountPageClient() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLoginSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsLoggedIn(true)
  }

  const handleRegisterSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsLoggedIn(true)
  }

  return (
    <div className="container">
      <div className="mx-auto max-w-5xl py-16 sm:py-24">
        {!isLoggedIn ? (
          <>
            <div className="grid gap-10 lg:grid-cols-2">
              {/* Login */}
              <section className="rounded-lg bg-zinc-50 px-8 py-10 shadow-sm dark:bg-zinc-900/40">
                <Text className="text-lg font-medium text-zinc-900">Login</Text>
                <form onSubmit={handleLoginSubmit} className="mt-6 space-y-5">
                  <Field>
                    <Label>
                      Username or email address <span className="text-red-500">*</span>
                    </Label>
                    <Input type="text" name="login-identifier" autoComplete="username" />
                  </Field>
                  <Field>
                    <Label>
                      Password <span className="text-red-500">*</span>
                    </Label>
                    <Input type="password" name="login-password" autoComplete="current-password" />
                  </Field>
                  <div className="flex items-center justify-between">
                    <CheckboxField>
                      <Checkbox name="remember" />
                      <Label>Remember me</Label>
                    </CheckboxField>
                    <TextLink href="#" className="text-xs underline">
                      Lost your password?
                    </TextLink>
                  </div>
                  <button
                    type="submit"
                    className="mt-4 w-full bg-zinc-900 py-3 text-sm font-medium tracking-[0.2em] text-white uppercase hover:bg-zinc-800"
                  >
                    Log in
                  </button>
                </form>
              </section>

              {/* Register */}
              <section className="rounded-lg bg-zinc-50 px-8 py-10 shadow-sm dark:bg-zinc-900/40">
                <Text className="text-lg font-medium text-zinc-900">Register</Text>
                <form onSubmit={handleRegisterSubmit} className="mt-6 space-y-5">
                  <Field>
                    <Label>
                      Username <span className="text-red-500">*</span>
                    </Label>
                    <Input type="text" name="register-username" autoComplete="username" />
                  </Field>
                  <Field>
                    <Label>
                      Email address <span className="text-red-500">*</span>
                    </Label>
                    <Input type="email" name="register-email" autoComplete="email" />
                  </Field>
                  <Field>
                    <Label>
                      Password <span className="text-red-500">*</span>
                    </Label>
                    <Input type="password" name="register-password" autoComplete="new-password" />
                  </Field>
                  <Text className="text-xs text-zinc-500">
                    Your personal data will be used to support your experience throughout this website, to manage access
                    to your account, and for other purposes described in our privacy policy.
                  </Text>
                  <button
                    type="submit"
                    className="mt-4 w-full bg-zinc-900 py-3 text-sm font-medium tracking-[0.2em] text-white uppercase hover:bg-zinc-800"
                  >
                    Register
                  </button>
                </form>
              </section>
            </div>

            <Divider className="mt-16" />
          </>
        ) : (
          <>
            <div className="space-y-4">
              <Text className="text-sm text-zinc-900">
                Hello vxs (not vxs?{' '}
                <TextLink href="#" className="underline">
                  Log out
                </TextLink>
                )
              </Text>
              <Text className="text-sm text-zinc-600">
                From your account dashboard you can view your{' '}
                <TextLink href="/orders" className="underline">
                  recent orders
                </TextLink>
                , manage your{' '}
                <TextLink href="/settings#address" className="underline">
                  shipping and billing addresses
                </TextLink>
                , and{' '}
                <TextLink href="/settings" className="underline">
                  edit your password and account details
                </TextLink>
                .
              </Text>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {tiles.map((tile) => (
                <LinkNext
                  key={tile.title}
                  href={tile.href}
                  className="group flex h-40 flex-col items-center justify-center gap-3 border border-zinc-200 bg-white px-6 text-center transition hover:border-zinc-900/60 hover:shadow-sm dark:border-zinc-800 dark:bg-zinc-900/40"
                >
                  <HugeiconsIcon
                    icon={tile.icon}
                    size={32}
                    color="currentColor"
                    strokeWidth={1}
                    className="text-zinc-900 group-hover:text-zinc-950 dark:text-zinc-100"
                  />
                  <Text className="text-xs font-medium tracking-[0.2em] text-zinc-900 group-hover:text-zinc-950 dark:text-zinc-100">
                    {tile.title.toUpperCase()}
                  </Text>
                </LinkNext>
              ))}
            </div>

            <Divider className="mt-16" />
          </>
        )}
      </div>
    </div>
  )
}
