import { Divider } from '@/components/divider'
import { Heading } from '@/components/heading'
import { Text } from '@/components/text'
import { VectorArrowDown2 } from '@/components/vector-arrow-down'
import { Metadata } from 'next'
import Image from 'next/image'
import { Fragment } from 'react'
import AnimatedArrow from './animated-arrow'

export const metadata: Metadata = {
  title: 'Our Story',
  description: 'Learn about our jeans and cotton pants manufacturing process at Parswam.',
}

const processSteps = [
  {
    title: 'Selection of Fabric',
    description: 'Denim is selected from large batches based on quality and color specifications for production.',
    image: '/ourstory/o1.png',
    imageAlt: 'Denim fabric rolls',
  },
  {
    title: 'Pattern Design and Layout',
    description:
      'Patterns for different garment parts are laid out on paper, optimizing fabric usage and minimizing waste.',
    image: '/ourstory/o2.png',
    imageAlt: 'Pattern design and layout',
  },
  {
    title: 'Spreading',
    description: 'Fabric layers are spread evenly on a cutting table to ensure consistent grain and tension.',
    image: '/ourstory/o3.png',
    imageAlt: 'Fabric spreading process',
  },
  {
    title: 'Cutting',
    description: 'Patterns are placed on the fabric and cut using automated cutting machines for precision.',
    image: '/ourstory/o4.png',
    imageAlt: 'Fabric cutting process',
  },
  {
    title: 'Sewing',
    description: 'Cut fabric pieces are sewn together to form the garment, including all seams and embellishments.',
    image: '/ourstory/o5.png',
    imageAlt: 'Sewing process',
  },
  {
    title: 'Washing',
    description:
      'Garments undergo various washing techniques like enzyme wash or stone washing to achieve desired softness and texture.',
    image: '/ourstory/o6.png',
    imageAlt: 'Washing process',
  },
  {
    title: 'Finishing Process',
    description:
      'Additional details such as buttons and zippers are added, and garments are pressed to enhance appearance.',
    image: '/ourstory/o7.png',
    imageAlt: 'Finishing process',
  },
  {
    title: 'Inspection',
    description: 'Each garment is inspected for quality and adherence to design specifications.',
    image: '/ourstory/o8.png',
    imageAlt: 'Quality inspection',
  },
  {
    title: 'Folding & Packing',
    description: 'Garments are folded, tagged, and packaged in protective materials ready for shipment.',
    image: '/ourstory/o9.png',
    imageAlt: 'Folding and packing',
  },
  {
    title: 'Ready for Delivery',
    description: 'Packaged garments are stocked in inventory, ready for distribution and sale.',
    image: '/ourstory/o10.png',
    imageAlt: 'Ready for delivery',
  },
]

const timelines = [
  {
    phase: 'Cutting and Stitching',
    duration: '1-1.5 Months',
  },
  {
    phase: 'Washing and Creation',
    duration: '0.5-1 Month',
  },
  {
    phase: 'Finishing and Packing',
    duration: '0.5-1 Month',
  },
]

const Page = () => {
  return (
    <div className="container mt-16 sm:mt-24 lg:mt-28">
      <div className="flex flex-col gap-14 md:gap-20 lg:gap-24">
        {/* Hero Section */}
        <div className="flex flex-col gap-8">
          <Heading level={1} fontSize="text-7xl lg:text-8xl 2xl:text-9xl font-medium" className="relative w-fit">
            <span>Our </span>
            <span data-slot="italic">Story</span>
            <VectorArrowDown2 className="absolute -end-20 top-1/2 hidden h-20 sm:block sm:h-32 xl:-end-10 2xl:top-2/3" />
          </Heading>
        </div>

        {/* Introduction */}
        <div className="space-y-6">
          <Heading level={2} fontSize="text-4xl lg:text-5xl font-medium">
            Jeans or Cotton Pants Manufacturing Process
          </Heading>
          <Text className="max-w-4xl leading-relaxed text-zinc-600">
            We are presently engaged in the business of manufacturing of readymade garments for men and kids. We
            purchase Fabrics from the wholesaler of denim as well as cotton. This material is being processed by many
            job workers to make the final products.
          </Text>
        </div>

        <Divider />

        {/* Process Steps */}
        <div className="space-y-16 md:space-y-24 lg:space-y-32">
          {processSteps.map((step, index) => (
            <Fragment key={step.title}>
              <div
                className={`flex flex-col gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } md:items-center md:gap-12 lg:gap-16`}
              >
                <div className="flex-1">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                    <Image
                      src={step.image}
                      alt={step.imageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
                <div className="flex-1 space-y-4">
                  <Heading level={3} fontSize="text-3xl lg:text-4xl font-medium">
                    {step.title}
                  </Heading>
                  <Text className="leading-relaxed text-zinc-600">{step.description}</Text>
                </div>
              </div>

              {index < processSteps.length - 1 ? <AnimatedArrow reverse={index % 2 !== 0} /> : null}
            </Fragment>
          ))}
        </div>

        <Divider />

        {/* Timeline Section */}
        <div className="space-y-8">
          <Heading level={2} fontSize="text-4xl lg:text-5xl font-medium">
            Manufacturing Timeline
          </Heading>
          <Text className="max-w-4xl leading-relaxed text-zinc-600">
            Mainly three processes are there to make a jean or cotton pant out of fabrics. The whole process takes 2-3
            months to make a jean or cotton pant. The processes are listed below:
          </Text>

          <div className="grid gap-6 sm:grid-cols-3">
            {timelines.map((timeline, index) => (
              <div key={index} className="space-y-3 rounded-lg border border-zinc-200 bg-zinc-50 p-6">
                <Text className="text-lg font-semibold">{timeline.phase}</Text>
                <Text className="text-sm text-zinc-600">Average Time: {timeline.duration}</Text>
              </div>
            ))}
          </div>
        </div>

        {/* Closing Statement */}
        <div className="rounded-lg bg-zinc-50 p-8 md:p-12">
          <Text className="leading-relaxed text-zinc-600">
            The final product comes from job workers which is ready to sale takes minimum 3-4 months depending upon
            various factors. Hence we have to plan accordingly and maintain stock accordingly. Therefore stock in hand
            has to be available for more than one third of the total sales forecasted. Thus most of the times output tax
            liability is being setoff against the input credit. Further we want to state that we have paid more than one
            lakh income tax since inception of the firm.
          </Text>
        </div>
      </div>

      <Divider className="mt-16 sm:mt-24 lg:mt-32" />
    </div>
  )
}

export default Page
