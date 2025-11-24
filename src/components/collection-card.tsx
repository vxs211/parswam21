import { TCollection } from '@/data'
import { ArrowUpRightIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'
import Image from 'next/image'
import { Text, TextLink } from './text'

interface CollectionCardProps {
  collection: TCollection
  className?: string
  imageRatio?: string
  showArrow?: boolean
}

export default function CollectionCard({
  collection,
  className,
  imageRatio = 'aspect-3/4',
  showArrow = true,
}: CollectionCardProps) {
  const { id, title, handle, image } = collection
  const hoverImage = image?.replace(/(Parshwam-)(\d+)(\.webp)$/u, '$1$2-$2$3')
  const hasHoverImage = Boolean(image && hoverImage && hoverImage !== image)

  return (
    <div className={clsx('group/collection relative w-full', className)}>
      <div className={clsx('relative z-0 w-full overflow-hidden rounded-lg', imageRatio)}>
        <Image
          src={image || '/placeholder.webp'}
          alt={title}
          fill
          className="z-0 rounded-lg object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 30vw"
          priority
        />

        {hasHoverImage ? (
          <Image
            src={hoverImage || '/placeholder.webp'}
            alt={title}
            fill
            className="rounded-lg object-cover opacity-0 transition-opacity duration-300 group-hover/collection:opacity-100"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 30vw"
          />
        ) : null}

        <span className="absolute inset-0 bg-black/20 opacity-0 transition-opacity group-hover/collection:opacity-100"></span>
      </div>

      <div className="absolute inset-x-4 bottom-4 flex items-center justify-center gap-1">
        <div className="flex h-11 grow items-center justify-center rounded-full bg-white px-5 text-zinc-900 shadow-md">
          <Text className="text-xs leading-none tracking-[0.08em] uppercase sm:text-sm">{title}</Text>
        </div>

        {showArrow ? (
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-zinc-900 shadow-md">
            <ArrowUpRightIcon className="h-4 w-4" aria-hidden="true" />
          </div>
        ) : null}
      </div>

      <TextLink href={`/collections/${handle}`}>
        <span className="absolute inset-0"></span>
        <span className="sr-only">{title}</span>
      </TextLink>
    </div>
  )
}
