import { Divider } from '@/components/divider'
import HeroAnimatedTitle from '@/components/hero-animated-title'
import HeroPillToggle from '@/components/hero-pill-toggle'
import LogoLoop from '@/components/logoloop'
import FeatureSection2 from '@/components/sections/feature-section-2'
import FeatureSection3 from '@/components/sections/feature-section-3'
import FeatureSection4 from '@/components/sections/feature-section-4'
import SectionCollectionCarousel from '@/components/sections/section-collection-carousel'
import SectionProductCarousel from '@/components/sections/section-product-carousel'
import { getCollections, getGroupCollections } from '@/data'
import clsx from 'clsx'

export const metadata = {
  title: 'Fashion',
  description:
    'Discover the latest trends in fashion and style with our curated collection of clothing, accessories, and more.',
}

// CreativeSlider is a client component and will render on the client boundary.

export default async function Home() {
  let collections = await getCollections('fashion')
  let groupCollections = await getGroupCollections('fashion')

  return (
    <div>
      {/* <HeroSection3 /> */}
      <section className="relative min-h-screen bg-white">
        <div className="absolute top-1/2 left-1/2 container max-w-3xl -translate-x-1/2 -translate-y-1/2 px-4">
          <div className="flex flex-col items-center gap-4 sm:gap-6">
            <HeroAnimatedTitle />
            <HeroPillToggle />
          </div>
        </div>
      </section>

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
          src: '/images/fashion/Parshwam-1-1.webp',
          width: 644,
          height: 653,
          alt: 'fashion-feature-1',
        }}
      />
      {/* Logos loop above footer */}
      <div className="container mt-20 sm:mt-28 lg:mt-32">
        <div className="space-y-8">
          {/* First line - left to right */}
          <LogoLoop
            logos={[
              { src: '/client/logo 1(par).png' },
              { src: '/client/logo 2(par).png' },
              { src: '/client/logo 3(par).png' },
              { src: '/client/logo 4(par).png' },
            ]}
            speed={40}
            direction="left"
            logoHeight={60}
            gap={48}
            pauseOnHover
            fadeOut
            fadeOutColor="#fff"
            scaleOnHover
            ariaLabel="Our Clients"
          />

          {/* Second line - right to left */}
          <LogoLoop
            logos={[
              { src: '/client/logo 5(par).png' },
              { src: '/client/logo 6(par).png' },
              { src: '/client/logo 7(par).png' },
              { src: '/client/logo 8(par).png' },
              { src: '/client/logo 9(par).png' },
            ]}
            speed={40}
            direction="right"
            logoHeight={60}
            gap={48}
            pauseOnHover
            fadeOut
            fadeOutColor="#fff"
            scaleOnHover
            ariaLabel="Our Clients"
          />
        </div>
      </div>
      <div className="container mt-24 sm:mt-28 lg:mt-40">
        <Divider />
      </div>
      <FeatureSection3
        className="mt-20 sm:mt-28 lg:mt-32"
        heading={`Explore our exclusive denim collections, blending comfort with <span data-slot="italic">timeless style.</span>`}
        collection1={{
          title: 'Raw Denim  <br /><span data-slot="italic">collection.</span>',
          desciption: 'Discover our exclusive collection of printed modal scarves, designed to elevate your style',
          images: [
            '/images/fashion/Parshwam-1.webp',
            '/images/fashion/Parshwam-2.webp',
            '/images/fashion/Parshwam-3.webp',
            '/images/fashion/Parshwam-4.webp',
          ],
        }}
        collection2={{
          title: 'The artist´s <br /> <span data-slot="italic">wardrobe.</span>',
          desciption: 'Discover our exclusive collection of printed modal scarves, designed to elevate your style',
          images: [
            '/images/fashion/Parshwam-1.webp',
            '/images/fashion/Parshwam-2.webp',
            '/images/fashion/Parshwam-3.webp',
            '/images/fashion/Parshwam-4.webp',
          ],
        }}
      />
      <FeatureSection4 className="container mt-24 sm:mt-28 lg:mt-40" />
    </div>
  )
}
