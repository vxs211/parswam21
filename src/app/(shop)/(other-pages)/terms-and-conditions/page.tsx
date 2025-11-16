import { Heading } from '@/components/heading'
import { Text } from '@/components/text'
import { VectorArrowDown2 } from '@/components/vector-arrow-down'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'Read the terms and conditions that govern the use of the Parswam website, store, and related services.',
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
              <span>Terms &amp; </span>
              <span data-slot="italic">Conditions</span>

              <VectorArrowDown2 className="absolute -end-24 top-1/2 hidden h-16 sm:block sm:h-24 lg:-end-16 2xl:top-2/3" />
            </Heading>
          </div>

          <div className="max-w-2xl space-y-4 text-zinc-700">
            <Text>
              Welcome to{' '}
              <a href="https://www.parswam.com" target="_blank" rel="noopener noreferrer" className="underline">
                https://www.parswam.com
              </a>
              . These terms and conditions govern your use of our website and the services provided through it.
            </Text>
            <Text>
              By accessing or using our website, you agree to abide by these terms and conditions. If you do not agree
              with any part of these terms, please do not use our website.
            </Text>
          </div>
        </div>
      </div>

      {/* TERMS CONTENT */}
      <div className="mt-16 grid gap-10 text-sm leading-relaxed text-zinc-700 sm:mt-20 lg:mt-24">
        {/* Introduction */}
        <section className="space-y-3">
          <Heading level={2} fontSize="text-xl sm:text-2xl font-semibold">
            1. Introduction
          </Heading>
          <Text>
            Welcome to{' '}
            <a href="https://www.parswam.com" target="_blank" rel="noopener noreferrer" className="underline">
              https://www.parswam.com
            </a>
            . These terms and conditions govern your use of our website and the services provided through it. By
            accessing or using our website, you agree to abide by these terms and conditions. If you do not agree with
            any part of these terms, please do not use our website.
          </Text>
        </section>

        {/* Definitions */}
        <section className="space-y-3">
          <Heading level={2} fontSize="text-xl sm:text-2xl font-semibold">
            2. Definitions
          </Heading>
          <Text>For the purposes of these Terms &amp; Conditions:</Text>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              <span className="font-semibold">“Website”</span> refers to{' '}
              <a href="https://www.parswam.com" target="_blank" rel="noopener noreferrer" className="underline">
                https://www.parswam.com
              </a>
              .
            </li>
            <li>
              <span className="font-semibold">“User”, “you”, or “your”</span> refers to any person who accesses or uses
              the Website.
            </li>
            <li>
              <span className="font-semibold">“We”, “us”, or “our”</span> refers to Parswam, the owner and operator of
              the Website.
            </li>
          </ul>
        </section>

        {/* Online Store Terms */}
        <section className="space-y-3">
          <Heading level={2} fontSize="text-xl sm:text-2xl font-semibold">
            3. Online Store Terms
          </Heading>
          <Text>
            By agreeing to these terms, you represent that you are at least the age of majority in your state or
            province of residence. You may not use our products for any illegal or unauthorized purpose nor may you, in
            the use of the service, violate any laws in your jurisdiction.
          </Text>
        </section>

        {/* Products or Services */}
        <section className="space-y-3">
          <Heading level={2} fontSize="text-xl sm:text-2xl font-semibold">
            4. Products or Services
          </Heading>
          <Text>
            We offer a range of products for sale on our website. These products are subject to availability and may be
            subject to change without notice. We reserve the right to discontinue any product at any time.
          </Text>
        </section>

        {/* Pricing and Payment */}
        <section className="space-y-3">
          <Heading level={2} fontSize="text-xl sm:text-2xl font-semibold">
            5. Pricing and Payment
          </Heading>
          <Text>
            All prices displayed on our website are in Indian Rupee and are inclusive of applicable taxes unless
            otherwise stated. We reserve the right to change prices without notice. Payment is required at the time of
            placing an order.
          </Text>
        </section>

        {/* Shipping and Delivery */}
        <section className="space-y-3">
          <Heading level={2} fontSize="text-xl sm:text-2xl font-semibold">
            6. Shipping and Delivery
          </Heading>
          <Text>
            We will make every effort to ship your order promptly, but we cannot guarantee specific delivery dates. Any
            shipping times provided are estimates only. Risk of loss and title for items purchased from us pass to you
            upon delivery of the items to the carrier.
          </Text>
        </section>

        {/* Returns and Refunds */}
        <section className="space-y-3">
          <Heading level={2} fontSize="text-xl sm:text-2xl font-semibold">
            7. Returns and Refunds
          </Heading>
          <Text>
            Our returns and refunds policy can be found on our website. Please review this policy before making a
            purchase.
          </Text>
        </section>

        {/* Intellectual Property */}
        <section className="space-y-3">
          <Heading level={2} fontSize="text-xl sm:text-2xl font-semibold">
            8. Intellectual Property
          </Heading>
          <Text>
            All content on this website, including but not limited to text, graphics, logos, images, and software, is
            the property of Parswam and is protected by copyright and other intellectual property laws.
          </Text>
        </section>

        {/* Privacy */}
        <section className="space-y-3">
          <Heading level={2} fontSize="text-xl sm:text-2xl font-semibold">
            9. Privacy
          </Heading>
          <Text>
            Your use of our website is also governed by our Privacy Policy, which can be found on our website.
          </Text>
        </section>

        {/* Limitation of Liability */}
        <section className="space-y-3">
          <Heading level={2} fontSize="text-xl sm:text-2xl font-semibold">
            10. Limitation of Liability
          </Heading>
          <Text>
            We shall not be liable for any special or consequential damages that result from the use of, or the
            inability to use, the materials on this site or the performance of the products.
          </Text>
        </section>

        {/* Changes to Terms */}
        <section className="space-y-3">
          <Heading level={2} fontSize="text-xl sm:text-2xl font-semibold">
            11. Changes to Terms
          </Heading>
          <Text>
            We reserve the right to modify these terms and conditions at any time without notice. Changes will be
            effective immediately upon posting on the website.
          </Text>
        </section>

        {/* Contact Information */}
        <section className="space-y-3">
          <Heading level={2} fontSize="text-xl sm:text-2xl font-semibold">
            12. Contact Information
          </Heading>
          <Text>
            If you have any questions about these terms and conditions, please contact us at{' '}
            <a href="mailto:theparswam007@gmail.com" className="underline">
              theparswam007@gmail.com
            </a>
            .
          </Text>
        </section>
      </div>
    </div>
  )
}

export default Page
