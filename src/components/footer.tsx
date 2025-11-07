import { clsx } from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { Text } from './text'

const navigation = {
  quickLinks: [
    { name: 'Mens Jeans', href: '#' },
    { name: 'Kids Jeans', href: '#' },
    { name: 'Cargo & Joggers', href: '#' },
    { name: 'New Arrivals', href: '#' },
    { name: 'Featured Collection', href: '#' },
    { name: 'Premium Collection', href: '#' },
    { name: 'Online Exclusive', href: '#' },
    { name: 'Best Sale', href: '#' },
  ],
  corporate: [
    { name: 'About Us', href: '#' },
    { name: 'Career', href: '#' },
    { name: 'Become a Franchise', href: '#' },
    { name: 'B2B Inquiry', href: '#' },
    { name: 'Our Story', href: '#' },
  ],
  help: [
    { name: 'Order Status & Tracking', href: '#' },
    { name: 'Contact Us', href: '#' },
    { name: 'Return & Exchange Policy', href: '#' },
    { name: 'Term & Condition', href: '#' },
    { name: 'Privacy Policy', href: '#' },
  ],
  social: [
    {
      name: 'Facebook',
      href: '#',
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: '#',
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'X',
      href: '#',
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
        </svg>
      ),
    },
    {
      name: 'WhatsApp',
      href: '#',
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path fillRule="evenodd" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      name: 'YouTube',
      href: '#',
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
}

interface FooterProps {
  className?: string
}

export default function Footer({ className }: FooterProps) {
  return (
    <footer className={clsx('bg-white pb-8', className)}>
      <div className="border-t border-zinc-900/10 pt-8">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="flex max-w-xs flex-col gap-4 lg:flex-1">
            <Link href="/" className="-m-1.5 w-fit p-1.5">
              <span className="sr-only">ParsWam</span>
              <Image src="/images/parswamB.svg" alt="ParsWam Logo" width={160} height={48} priority />
            </Link>
            <p className="text-xs uppercase leading-6 tracking-[0.12em] text-zinc-600">
              Established in 2008, we&apos;ve evolved from a humble fashion manufacturer into a leading trendsetter —
              redefining style with timeless designs, unmatched comfort and the finest branded fabrics.
            </p>
          </div>

          <div>
            <Text className="text-sm/6 font-medium">Quick Link</Text>
            <ul role="list" className="mt-6 space-y-4">
              {navigation.quickLinks.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm/6 text-zinc-600 uppercase hover:text-zinc-900">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <Text className="text-sm/6 font-medium">Corporate</Text>
            <ul role="list" className="mt-6 space-y-4">
              {navigation.corporate.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm/6 text-zinc-600 uppercase hover:text-zinc-900">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <Text className="text-sm/6 font-medium">Let Us Help You</Text>
            <ul role="list" className="mt-6 space-y-4">
              {navigation.help.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm/6 text-zinc-600 uppercase hover:text-zinc-900">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-zinc-900/10 pt-8 md:flex md:items-center md:justify-between">
        <div className="flex gap-x-6 md:order-2">
          {navigation.social.map((item) => (
            <Link key={item.name} href={item.href} className="text-zinc-600 hover:text-zinc-800">
              <span className="sr-only">{item.name}</span>
              <item.icon aria-hidden="true" className="size-6" />
            </Link>
          ))}
        </div>
        <Text className="mt-8 text-sm/6 text-zinc-600 md:order-1 md:mt-0">
          &copy; 2025 PARSWAM, Inc. All rights reserved.
        </Text>
      </div>
    </footer>
  )
}
