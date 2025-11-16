import { Divider } from '@/components/divider'
import { Heading } from '@/components/heading'
import { Text } from '@/components/text'
import { VectorArrowDown2 } from '@/components/vector-arrow-down'
import { ClipboardCheck, DollarSign, Monitor, Package, PackageX, Phone } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Order Status & Tracking',
  description: 'Track your Parswam order and learn about our shipping policies.',
}

const shippingInfo = [
  {
    icon: Package,
    title: 'Shipment processing times',
    description:
      'All Orders are processed within 7-10 business days. If there will be a significant delay in shipment of Your Order, We will contact You via email or telephone.',
  },
  {
    icon: Monitor,
    title: 'Shipment to P.O. boxes or APO/FPO addresses',
    description:
      'Parswam.com currently ships to addresses across India, including all major cities and towns. Please ensure your full address and correct PIN code are provided for smooth delivery.',
  },
  {
    icon: ClipboardCheck,
    title: 'Shipment confirmation & Order tracking',
    description:
      'You will receive a Shipment Confirmation Email once Your Order has shipped containing your tracking number(s). The tracking number will be active within 48 hours.',
  },
  {
    icon: DollarSign,
    title: 'Customs, Duties and Taxes',
    description:
      'Parswam.com is not responsible for any customs and taxes applied to Your Order. All fees imposed during or after shipping are the responsibility of the customer (tariffs, taxes).',
  },
  {
    icon: PackageX,
    title: 'Damages',
    description:
      'Parswam.com is not liable for any products damaged or lost during shipping. If You received Your Order damaged, please contact the shipment carrier to file a claim. Please save all packaging materials and damaged goods before filing a claim.',
  },
  {
    icon: Phone,
    title: 'Contact Us',
    description:
      'If you have any questions about this Shipping Policy, You can contact Us: By visiting this page on our website: https://www.parswam.com/contact-us/',
  },
]

const Page = () => {
  return (
    <div className="container mt-16 sm:mt-24 lg:mt-28">
      <div className="flex flex-col gap-14 md:gap-20 lg:gap-24">
        {/* Hero Section */}
        <div className="flex flex-col gap-8">
          <Heading level={1} fontSize="text-7xl lg:text-8xl 2xl:text-9xl font-medium" className="relative w-fit">
            <span>Order Status </span>
            <span data-slot="italic">& Tracking</span>
            <VectorArrowDown2 className="absolute -end-20 top-1/2 hidden h-20 sm:block sm:h-32 xl:-end-10 2xl:top-2/3" />
          </Heading>
          <Text className="max-w-3xl text-zinc-600">
            Track your order and learn about our shipping policies. All orders are processed within 7-10 business days.
          </Text>
        </div>

        <Divider />

        {/* ExpressBees Tracking Section */}
        <div className="flex flex-col gap-8">
          <div className="space-y-4">
            <Heading level={2} fontSize="text-4xl lg:text-5xl font-medium">
              Track Your Shipment
            </Heading>
            <Text className="text-zinc-600">
              Enter your tracking number below to get real-time updates on your order delivery status.
            </Text>
          </div>

          {/* ExpressBees Tracking Widget */}
          <div className="overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm">
            <iframe
              src="https://97195.xpressbees.info/"
              title="ExpressBees Order Tracking"
              className="h-[600px] w-full border-0"
              loading="lazy"
            />
          </div>

          <div className="rounded-lg bg-zinc-50 p-6">
            <Text className="text-sm text-zinc-600">
              <strong>Note:</strong> Tracking numbers are typically activated within 48 hours of shipment. If you
              haven&apos;t received your tracking number or have any questions, please{' '}
              <a href="/contact" className="font-semibold text-zinc-900 underline hover:text-zinc-700">
                contact us
              </a>
              .
            </Text>
          </div>
        </div>

        {/* Shipping Information Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {shippingInfo.map((item, index) => (
            <div key={index} className="flex flex-col items-center gap-4 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-zinc-100">
                <item.icon className="h-8 w-8 text-zinc-900" strokeWidth={1.5} />
              </div>
              <div className="space-y-2">
                <Text className="font-semibold">{item.title}</Text>
                <Text className="text-sm leading-relaxed text-zinc-600">{item.description}</Text>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Divider className="mt-16 sm:mt-24 lg:mt-32" />
    </div>
  )
}

export default Page
