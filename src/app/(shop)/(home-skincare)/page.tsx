import { Divider } from '@/components/divider'
import GridMotion from '@/components/GridMotion'
import LogoLoop from '@/components/logoloop'
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

      {/* GridMotion Section */}
      <div className="mt-12">
        <GridMotion
          items={[
            'Item 1',
            <div key="jsx-item-1">Custom JSX Content</div>,
            'https://images.unsplash.com/photo-1723403804231-f4e9b515fe9d?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'Item 2',
            <div key="jsx-item-2">Custom JSX Content</div>,
            'Item 4',
            <div key="jsx-item-2b">Custom JSX Content</div>,
            'https://images.unsplash.com/photo-1723403804231-f4e9b515fe9d?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'Item 5',
            <div key="jsx-item-2c">Custom JSX Content</div>,
            'Item 7',
            <div key="jsx-item-2d">Custom JSX Content</div>,
            'https://images.unsplash.com/photo-1723403804231-f4e9b515fe9d?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'Item 8',
            <div key="jsx-item-2e">Custom JSX Content</div>,
            'Item 10',
            <div key="jsx-item-3">Custom JSX Content</div>,
            'https://images.unsplash.com/photo-1723403804231-f4e9b515fe9d?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'Item 11',
            <div key="jsx-item-2f">Custom JSX Content</div>,
            'Item 13',
            <div key="jsx-item-4">Custom JSX Content</div>,
            'https://images.unsplash.com/photo-1723403804231-f4e9b515fe9d?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'Item 14',
          ]}
          gradientColor="black"
        />
      </div>

      <div className="container mt-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 place-content-center justify-items-center gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
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
            overlayContent={<p className="font-sans font-bold text-zinc-950">Kendrick Lamar - GNX</p>}
          />
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
            overlayContent={<p className="font-sans font-bold text-zinc-950">Kendrick Lamar - GNX</p>}
          />
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
            overlayContent={<p className="font-sans font-bold text-zinc-950">Kendrick Lamar - GNX</p>}
          />
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
            overlayContent={<p className="font-sans font-bold text-zinc-950">Kendrick Lamar - GNX</p>}
          />
        </div>
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
              { src: '/clients/Untitled-design-21-4.png' },
              { src: '/clients/Untitled-design-23-3.png' },
              { src: '/clients/Untitled-design-24-4.png' },
              { src: '/clients/Untitled-design-25.png' },
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
              { src: '/clients/Untitled-design-26.png' },
              { src: '/clients/Untitled-design-27.png' },
              { src: '/clients/Untitled-design-28.png' },
              { src: '/clients/Untitled-design-29.png' },
              { src: '/clients/Untitled-design-31.png' },
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
    </div>
  )
}
