import { Divider } from '@/components/divider'
import FeatureSection2 from '@/components/sections/feature-section-2'
import FeatureSection3 from '@/components/sections/feature-section-3'
import HeroSection3 from '@/components/sections/hero-section-3'
import SectionCollectionCarousel from '@/components/sections/section-collection-carousel'
import SectionProductCarousel from '@/components/sections/section-product-carousel'
import TiltedCard from '@/components/tiltedcards'
import { getCollections, getGroupCollections } from '@/data'
import clsx from 'clsx'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Fashion',
  description:
    'Discover the latest trends in fashion and style with our curated collection of clothing, accessories, and more.',
}

export default async function Home() {
  let collections = await getCollections('fashion')
  let groupCollections = await getGroupCollections('fashion')

  return (
    <div>
      <HeroSection3 />

      <div className="container mt-20">
        <TiltedCard
          imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
          altText="Kendrick Lamar - GNX Album Cover"
          captionText="Kendrick Lamar - GNX"
          containerHeight="300px"
          containerWidth="300px"
          imageHeight="300px"
          imageWidth="300px"
          rotateAmplitude={12}
          scaleOnHover={1.2}
          showMobileWarning={false}
          showTooltip={true}
          displayOverlayContent={true}
          overlayContent={
            <p className="font-sans font-bold text-white">
              Kendrick Lamar - GNX
            </p>
          }
        />
      </div>

      <SectionCollectionCarousel className="container mt-20 sm:mt-28 lg:mt-28" groupCollections={groupCollections} />

      {collections
        ?.filter((_, i) => i < 3)
        .map((collection, index) => (
          <SectionProductCarousel
            key={index}
            className={clsx('container', index === 0 ? 'mt-44' : 'mt-36')}
            products={collection?.products}
            collectionTitle={collection?.title}
            collectionHandle={collection?.handle}
            collectionDescription={collection?.description}
          />
        ))}

      <FeatureSection2
        className="container mt-20 sm:mt-28 lg:mt-32"
        variant="up"
        heading={`Premium Denim <span data-slot="italic">Crafted</span> With Care <span data-slot="italic">&</span> Precision`}
        faqs={[
          {
            question: 'Premium Materials',
            answer: 'We use only the highest quality denim sourced from trusted mills with sustainable practices.',
          },
          {
            question: 'Perfect Fit Guarantee',
            answer: 'Every pair is designed with attention to detail to ensure the perfect fit and comfort.',
          },
          {
            question: 'Sustainable Production',
            answer: 'We are committed to reducing water usage and implementing eco-friendly manufacturing processes.',
          },
          {
            question: 'Timeless Style',
            answer: 'Our designs blend classic silhouettes with modern trends for jeans that never go out of style.',
          },
        ]}
        image={{
          src: '/images/fashion/feature-1.png',
          width: 644,
          height: 653,
          alt: 'fashion-feature-1',
        }}
      />

      <div className="container mt-24 sm:mt-28 lg:mt-40">
        <Divider />
      </div>

      <FeatureSection3
        className="mt-20 sm:mt-28 lg:mt-32"
        heading={`Explore our exclusive designs, blending luxury with <span data-slot="italic">timeless elegance.</span>`}
        collection1={{
          title: 'Raw Denim <br /><span data-slot="italic">edition.</span>',
          desciption: 'Our most comfortable jeans for daily wear, combining style with ultimate comfort',
          images: [
            '/images/fashion/newyork.jpg',
            '/images/fashion/newyork-1.jpg',
            '/images/fashion/newyork-2.jpg',
            '/images/fashion/newyork-3.jpg',
          ],
        }}
        collection2={{
          title: 'Everyday <br /> <span data-slot="italic">essentials.</span>',
          desciption: 'Our most comfortable jeans for daily wear, combining style with ultimate comfort',
          images: [
            '/images/fashion/NewYork-3.png',
            '/images/fashion/p1-1.jpg',
            '/images/fashion/p2-1.jpg',
            '/images/fashion/p3-1.jpg',
          ],
        }}
      />
    </div>
  )
}
