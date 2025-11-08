import { TProductItem } from '@/data'
import { ShoppingBagIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'
import Image from 'next/image'
import { Text, TextLink } from './text'

interface ProductCardProps {
  product: TProductItem
  className?: string
  imageRatio?: string
  showVendor?: boolean
  labelOverride?: string
}

export default function ProductCard({ product, className, imageRatio = 'aspect-3/4', showVendor = true, labelOverride }: ProductCardProps) {
  const { id, title, price, featured_image, handle, images = [], tags, vendor, selected_options } = product

  const primaryImage = images?.[0]
  const primaryImageSrc = typeof primaryImage === 'string' ? primaryImage : primaryImage?.src

  const secondaryImage = images?.[1]
  const secondaryImageSrc = typeof secondaryImage === 'string' ? secondaryImage : secondaryImage?.src
  const hoverImageSrc = secondaryImageSrc
    ? secondaryImageSrc
    : primaryImageSrc?.replace(/(Parshwam-)(\d+)(\.webp)$/u, '$1$2-$2$3')
  const hasHoverImage = Boolean(hoverImageSrc && hoverImageSrc !== primaryImageSrc)

  // find the product color
  const color = selected_options.find((option) => option.name === 'Color')?.value
  // // find the product size
  const size = selected_options.find((option) => option.name === 'Size')?.value

  return (
    <div className={clsx('group/prd relative w-full', className)}>
      {/* Product Image */}
      <div className={clsx('relative w-full', imageRatio)}>
        <Image
          src={primaryImageSrc || '/placeholder.webp'}
          alt={title}
          fill
          className="z-0 rounded-lg object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 30vw"
          priority
        />
        {hasHoverImage ? (
          <Image
            src={hoverImageSrc || '/placeholder.webp'}
            alt={title}
            fill
            className="z-0 rounded-lg object-cover opacity-0 transition-opacity duration-300 group-hover/prd:opacity-100"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 30vw"
          />
        ) : null}
      </div>

      {/* Category Label */}
      {showVendor ? (
        <div className="absolute top-3 left-3">
          <div className="rounded-full bg-white px-3.5 py-1.5 text-xs leading-none text-zinc-900 uppercase">{labelOverride ?? vendor}</div>
        </div>
      ) : null}

      {/* Shopping Bag Icon */}
      <div className="absolute top-3 right-3">
        <div className="rounded-full bg-white p-1.5 text-zinc-500">
          <ShoppingBagIcon className="h-4 w-4" />
        </div>
      </div>

      {/* Product Info */}
      <div className="pt-3">
        <div className="flex justify-between">
          <TextLink href={`/products/${handle}`}>
            <span className="absolute inset-0"></span>
            {title}
          </TextLink>
          <Text className="">₹{(price * 10).toFixed(1)}</Text>
        </div>
        <Text className="mt-0.5 text-xs text-zinc-500">{color ?? size ?? ''}</Text>
      </div>
    </div>
  )
}
