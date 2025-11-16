import { Heading } from '@/components/heading'
import { Text } from '@/components/text'
import { VectorArrowDown2 } from '@/components/vector-arrow-down'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Return & Exchange Policy',
  description:
    'Learn about order cancellations, returns, and refunds for purchases made on ParsWam, including timelines and conditions.',
}

const Page = () => {
  return (
    <div className="container mt-16 pb-16 sm:mt-24 lg:mt-28">
      {/* HERO / TITLE */}
      <div className="flex flex-col justify-between gap-8 overflow-hidden lg:flex-row lg:gap-6 xl:gap-2.5">
        <div className="flex flex-2/3 flex-col gap-16 md:gap-20 lg:gap-24 xl:gap-28">
          <div className="relative">
            <Heading
              level={1}
              fontSize="text-4xl sm:text-5xl lg:text-6xl 2xl:text-7xl font-medium"
              className="relative w-fit"
            >
              <span>Return &amp; Exchange </span>
              <span data-slot="italic">Policy</span>

              <VectorArrowDown2 className="absolute -end-24 top-1/2 hidden h-16 sm:block sm:h-24 lg:-end-16 2xl:top-2/3" />
            </Heading>
          </div>

          <div className="max-w-2xl space-y-4 text-zinc-700">
            <Text>
              Thank you for shopping at{' '}
              <a href="https://www.parswam.com" target="_blank" rel="noopener noreferrer" className="underline">
                https://www.parswam.com
              </a>
              . We are committed to providing you with a seamless shopping experience and exceptional customer service.
            </Text>
            <Text>
              Please read our Cancellation and Refund Policy carefully to understand your rights and responsibilities
              regarding cancellations, returns and refunds.
            </Text>
          </div>
        </div>
      </div>

      {/* POLICY CONTENT */}
      <div className="mt-16 grid gap-10 text-sm leading-relaxed text-zinc-700 sm:mt-20 lg:mt-24">
        {/* 1. Order Cancellation */}
        <section className="space-y-3">
          <Heading level={2} fontSize="text-xl sm:text-2xl font-semibold">
            1. Order Cancellation
          </Heading>

          <div className="space-y-2">
            <Text className="font-semibold">1.1 Cancellation Before Shipment</Text>
            <Text>
              You may request to cancel your order before it has been shipped. To do so, please contact our customer
              support team as soon as possible. If your order has not been shipped, we will process your cancellation
              and issue a full refund.
            </Text>
          </div>

          <div className="space-y-2">
            <Text className="font-semibold">1.2 Cancellation After Shipment</Text>
            <Text>
              If your order has already been shipped, you may still request a cancellation. In such cases, you will need
              to return the product(s) following our Return Policy (as outlined below). Once we receive the returned
              item(s) and confirm their condition, we will process your cancellation and issue a refund, minus any
              applicable shipping and handling charges.
            </Text>
          </div>
        </section>

        {/* 2. Return Policy */}
        <section className="space-y-3">
          <Heading level={2} fontSize="text-xl sm:text-2xl font-semibold">
            2. Return Policy
          </Heading>

          <div className="space-y-2">
            <Text className="font-semibold">2.1 Damaged or Defective Products</Text>
            <Text>
              If you receive a damaged or defective product, please notify us within 48 hours of receiving the item. We
              will arrange for the return of the product at our expense and provide you with a replacement or a full
              refund, as per your preference.
            </Text>
          </div>

          <div className="space-y-2">
            <Text className="font-semibold">2.2 Change of Mind</Text>
            <Text>
              If you are not satisfied with your purchase and wish to return it for a refund, you may do so within 7
              days of receiving the item. The product must be in its original condition, unused, and in its original
              packaging. You will be responsible for the return shipping costs. Once we receive the returned item and
              inspect its condition, we will issue a refund for the product’s cost, excluding any shipping and handling
              charges.
            </Text>
          </div>
        </section>

        {/* 3. Refund Process */}
        <section className="space-y-3">
          <Heading level={2} fontSize="text-xl sm:text-2xl font-semibold">
            3. Refund Process
          </Heading>

          <div className="space-y-2">
            <Text className="font-semibold">3.1 Refund Timing</Text>
            <Text>
              Refunds will be processed within 8–12 days of receiving the returned item(s) and verifying their
              condition.
            </Text>
          </div>

          <div className="space-y-2">
            <Text className="font-semibold">3.2 Refund Method</Text>
            <Text>
              Refunds will be issued using the original payment method used for the purchase. Please note that it may
              take additional time for the refund to reflect in your account, depending on your payment provider.
            </Text>
          </div>
        </section>

        {/* 4. Contact Us */}
        <section className="space-y-3">
          <Heading level={2} fontSize="text-xl sm:text-2xl font-semibold">
            4. Contact Us
          </Heading>
          <Text>
            If you have any questions or concerns about our Cancellation and Refund Policy, please contact our customer
            support team at{' '}
            <a href="mailto:support@parswam.com" className="underline">
              support@parswam.com
            </a>
            . We are here to assist you and provide further clarification.
          </Text>
        </section>

        {/* 5. Policy Updates */}
        <section className="space-y-3">
          <Heading level={2} fontSize="text-xl sm:text-2xl font-semibold">
            5. Policy Updates
          </Heading>
          <Text>
            We reserve the right to update or modify this Cancellation and Refund Policy at any time. The latest version
            will be posted on our website, and the updated policy will be effective from the date of posting.
          </Text>
          <Text>
            By making a purchase on our website, you acknowledge that you have read, understood, and agreed to the terms
            of this Cancellation and Refund Policy. Your satisfaction is our priority, and we are committed to ensuring
            a positive shopping experience for you.
          </Text>
        </section>
      </div>
    </div>
  )
}

export default Page
