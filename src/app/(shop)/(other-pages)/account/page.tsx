import type { Metadata } from 'next'
import { AccountPageClient } from './account-client'

export const metadata: Metadata = {
  title: 'My Account',
  description: 'View your orders, addresses, wishlist and account details.',
}

export default function AccountPage() {
  return <AccountPageClient />
}
