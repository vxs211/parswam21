import { Heading } from '@/components/heading'
import { Text } from '@/components/text'
import { VectorArrowDown2 } from '@/components/vector-arrow-down'
import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'We believe that our strength lies in our collaborative approach, which puts our clients at the center of everything we do.',
}

const Page = () => {
  return (
    <div className="container mt-16 pb-16 sm:mt-24 lg:mt-28">
      {/* SECTION1 */}
      <div className="flex flex-col justify-between gap-10 overflow-hidden lg:flex-row lg:gap-10 xl:gap-14">
        <div className="flex flex-2/3 flex-col gap-10 md:gap-16 lg:gap-20 xl:gap-24">
          <div className="relative">
            <Heading level={1} fontSize="text-7xl lg:text-8xl 2xl:text-9xl font-medium" className="relative w-fit">
              <span>About </span>
              <span data-slot="italic">Us</span>

              <VectorArrowDown2 className="absolute -end-32 top-1/2 hidden h-20 sm:block sm:h-32 lg:-end-16 2xl:top-2/3" />
            </Heading>
          </div>

          <div className="max-w-2xl space-y-6">
            <Heading level={2} fontSize="text-3xl lg:text-4xl font-medium">
              Setting Trends: Crafting Comfortable Fashion since 2006
            </Heading>
            <Text className="leading-relaxed text-zinc-600">
              Established in 2006, our company began as a manufacturer of fashion garments. Over the years, we have
              evolved into a renowned trendsetter, consistently delivering the latest advancements in style and fashion,
              all while prioritizing comfort. Our commitment to excellence is evident in our meticulous selection of
              high-class branded fabrics, ensuring unparalleled quality and customer satisfaction.
            </Text>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="space-y-2 rounded-lg border border-zinc-200 bg-zinc-50 p-6">
              <Text className="text-xs font-semibold tracking-[0.18em] text-zinc-500 uppercase">
                Trendsetting Designs
              </Text>
              <Text className="text-sm text-zinc-700">
                Be the trendsetter wherever you go with our innovative and fashion-forward styles that keep you ahead of
                the curve.
              </Text>
            </div>
            <div className="space-y-2 rounded-lg border border-zinc-200 bg-zinc-50 p-6">
              <Text className="text-xs font-semibold tracking-[0.18em] text-zinc-500 uppercase">Best Quality</Text>
              <Text className="text-sm text-zinc-700">
                Indulge in unparalleled comfort and durability with our meticulously crafted garments, ensuring you
                experience joy with every wear.
              </Text>
            </div>
            <div className="space-y-2 rounded-lg border border-zinc-200 bg-zinc-50 p-6">
              <Text className="text-xs font-semibold tracking-[0.18em] text-zinc-500 uppercase">
                Exclusive Limited Editions
              </Text>
              <Text className="text-sm text-zinc-700">
                Elevate your wardrobe with our handpicked, limited-edition collections, designed to make a statement and
                set you apart from the crowd.
              </Text>
            </div>
            <div className="space-y-2 rounded-lg border border-zinc-200 bg-zinc-50 p-6">
              <Text className="text-xs font-semibold tracking-[0.18em] text-zinc-500 uppercase">Affordable Rates</Text>
              <Text className="text-sm text-zinc-700">
                Experience the perfect blend of quality and affordability with our competitive pricing, making trendy
                fashion accessible to all.
              </Text>
            </div>
          </div>
        </div>

        <div className="flex flex-1/3">
          <Image
            src={'/images/fashion/Parshwam-1.webp'}
            width={520}
            height={600}
            alt={'Par Swam manufacturing'}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>

      {/* SECTION 2 */}
      <div className="mt-24 space-y-16 sm:mt-28 lg:mt-40">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-6">
            <Heading level={2} bigger>
              Here Fashion Meets <span data-slot="italic">Trends</span>
            </Heading>
            <Text className="leading-relaxed text-zinc-600">
              Step into the world of Par Swam, where timeless fashion intertwines seamlessly with the latest trends,
              ensuring you&apos;re always ahead of the curve.
            </Text>
            <Text className="leading-relaxed text-zinc-600">
              Our fashion style is very legendary and very classic. We believe everyone has their own unique style to
              bring to the table.
            </Text>
            <div className="relative aspect-[16/9] overflow-hidden rounded-lg">
              <Image
                src="/images/fashion/Parshwam-2.webp"
                alt="Par Swam fashion collection"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div className="relative aspect-[16/9] overflow-hidden rounded-lg">
              <Image
                src="/images/fashion/Parshwam-3.webp"
                alt="Par Swam denim collection"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="space-y-4 rounded-lg bg-zinc-50 p-8">
              <Text className="text-xs font-semibold tracking-[0.18em] text-zinc-500 uppercase">Testimonial</Text>
              <Text className="leading-relaxed text-zinc-700">
                "Our fashion style is very legendary and very classic I feel like it&apos;s different, and I feel like
                everybody got our own different style to bring to the table."
              </Text>
              <Text className="text-sm font-semibold text-zinc-900">Jason Maria</Text>
            </div>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="space-y-3">
            <Text className="flex items-center gap-2 text-sm font-semibold text-zinc-900">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-zinc-300 text-xs">
                01
              </span>
              Our Mission
            </Text>
            <Text className="text-sm leading-relaxed text-zinc-600">
              To inspire confidence and self-expression through trendsetting bottom wear, crafted with passion and
              precision.
            </Text>
          </div>

          <div className="space-y-3">
            <Text className="flex items-center gap-2 text-sm font-semibold text-zinc-900">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-zinc-300 text-xs">
                02
              </span>
              Our Vision
            </Text>
            <Text className="text-sm leading-relaxed text-zinc-600">
              To be the leading global authority in bottom wear, shaping the future of fashion with our commitment to
              quality, creativity, and sustainability.
            </Text>
          </div>

          <div className="space-y-3">
            <Text className="flex items-center gap-2 text-sm font-semibold text-zinc-900">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-zinc-300 text-xs">
                03
              </span>
              Our Core Values
            </Text>
            <Text className="text-sm leading-relaxed text-zinc-600">
              Excellence, innovation, integrity, inclusivity, and sustainability guide everything we do, ensuring we
              deliver the best while making a positive impact.
            </Text>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="overflow-hidden rounded-lg border border-zinc-200">
            <div className="relative aspect-[5/3]">
              <Image
                src="/images/fashion/Parshwam-4.webp"
                alt="Men's collection"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="space-y-3 p-8">
              <Text className="text-xs font-semibold tracking-[0.18em] text-zinc-500 uppercase">Mens Collection</Text>
              <Heading level={3} fontSize="text-2xl lg:text-3xl font-medium">
                Sophisticated style for the modern man
              </Heading>
              <Text className="text-sm leading-relaxed text-zinc-600">
                From classic denim to refined cotton pants, our men&apos;s collection is designed to balance comfort,
                style, and durability for every occasion.
              </Text>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg border border-zinc-200">
            <div className="relative aspect-[16/9]">
              <Image
                src="/images/fashion/Parshwam-5.webp"
                alt="Kids collection"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="space-y-3 p-8">
              <Text className="text-xs font-semibold tracking-[0.18em] text-zinc-500 uppercase">Kids Collection</Text>
              <Heading level={3} fontSize="text-2xl lg:text-3xl font-medium">
                Stylish comfort for young trendsetters
              </Heading>
              <Text className="text-sm leading-relaxed text-zinc-600">
                Thoughtfully crafted bottom wear that keeps up with every move, blending playful style with everyday
                comfort for kids.
              </Text>
            </div>
          </div>
        </div>

        <div className="max-w-4xl space-y-4">
          <Heading level={2} fontSize="text-3xl lg:text-4xl font-medium">
            Discover Par Swam: Your Trendsetting Destination
          </Heading>
          <Text className="leading-relaxed text-zinc-600">
            Elevate your wardrobe with Par Swam&apos;s trendsetting collection. Since 2006, we&apos;ve led the charge in
            redefining men&apos;s and boys&apos; bottom wear. From classic denim to sophisticated formal pants, each
            garment is crafted with precision and style, ensuring you stay on-trend and comfortable.
          </Text>
          <Text className="leading-relaxed text-zinc-600">
            At Par Swam, we embrace diversity and sustainability. Our inclusive range caters to every body type and
            personality, while our commitment to eco-friendly practices ensures you can shop with confidence. Join us on
            a journey of style and sustainability, where fashion meets conscience.
          </Text>
        </div>
      </div>
    </div>
  )
}

export default Page
