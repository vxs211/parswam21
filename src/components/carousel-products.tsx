'use client'

import ProductCard from '@/components/product-card'
import { TProductItem } from '@/data'
import clsx from 'clsx'
import { EmblaViewportRefType } from 'embla-carousel-react'
import { CarouselDots } from './carousel-dots'

interface CarouselProductsProps {
  products: TProductItem[]
  className?: string
  emblaRef: EmblaViewportRefType
  emblaApi?: any
}

const CarouselProducts = ({ className, products, emblaRef, emblaApi }: CarouselProductsProps) => {
  return (
    <div className={clsx('embla', className)} ref={emblaRef}>
      <div className="-ms-5 embla__container">
        {products.map((product) => (
          <div
            key={product.id}
            className="embla__slide basis-[86%] ps-5 md:basis-1/2 lg:basis-1/3 xl:basis-1/4 2xl:basis-1/4"
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
      <CarouselDots emblaApi={emblaApi} className="mt-8" />
    </div>
  )
}

export default CarouselProducts
