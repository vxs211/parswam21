import { Button } from '@/components/button'
import { Divider } from '@/components/divider'
import { Description, Field, Label } from '@/components/fieldset'
import { Heading } from '@/components/heading'
import { Input } from '@/components/input'
import { Select } from '@/components/select'
import { Text } from '@/components/text'
import { Textarea } from '@/components/textarea'
import { VectorArrowDown2 } from '@/components/vector-arrow-down'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Become a Franchise',
  description:
    'Join PARSWAM as an exclusive franchise partner and build a strong mens bottom wear business with premium products and brand support.',
}

const franchiseModels = [
  {
    title: '1. Exclusive PARSWAM Franchise Store',
    description:
      'Dedicated exclusive store selling only PARSWAM products. Ideal for premium markets and high-footfall locations.',
  },
  {
    title: '2. Multi-Brand Store Franchise (MBO)',
    description: 'Make PARSWAM your primary mens bottom wear brand in a multi-brand outlet with high-demand styles.',
  },
  {
    title: '3. Distributor + Franchise Model',
    description: 'Perfect for wholesalers who also want a strong retail presence with consistent monthly turnover.',
  },
]

const investmentPoints = [
  'Initial investment: based on city and shop size.',
  'Shop size required: 250–500 sq.ft.',
  'Interiors and branding as per PARSWAM brand standards.',
  'Opening stock requirement as per market capacity.',
  'Franchise fee discussed after location approval.',
  'High ROI potential due to strong repeat demand.',
]

const franchiseBenefits = [
  'Strong brand recall – PARSWAM.',
  'Premium quality and trending designs.',
  'High-margin products with fast-moving bottom wear.',
  'Exclusive franchise policy: one city, one franchise.',
  'Low business risk with repeat customer value.',
  'White-labelling / private label support.',
  'Monthly new designs to keep the store fresh.',
  'Pan-India delivery from our centralized operations.',
  'In-house manufacturing for quality and consistency.',
]

const preLaunchSupport = ['Shop selection guidance.', 'Store layout and branding support.', 'Opening stock planning.']

const postLaunchSupport = [
  'Marketing and advertising assistance.',
  'Monthly new collection supply.',
  'Display and product knowledge training.',
  'Inventory planning support.',
]

const eligibilityPoints = [
  'Shop in the main market or prominent commercial area.',
  'Investment capacity as per the selected franchise model.',
  'Retail / garment business experience preferred.',
  'Commitment to follow PARSWAM brand guidelines strictly.',
  'Must sell only PARSWAM products in the exclusive franchise store.',
]

const productRange = [
  "Men's Jeans",
  "Men's Pants",
  'Trendy bottom wear.',
  'Seasonal festive styles.',
  'Exclusive store editions.',
]

const Page = () => {
  return (
    <div className="container mt-16 sm:mt-24 lg:mt-28">
      <div className="flex flex-col justify-between gap-14 lg:flex-row">
        {/* LEFT: INTRO & OVERVIEW */}
        <div className="flex flex-2/3 flex-col gap-10 md:gap-16 lg:gap-20 xl:gap-24">
          <div className="relative">
            <Heading
              level={1}
              fontSize="text-6xl sm:text-7xl lg:text-8xl 2xl:text-9xl font-medium"
              className="relative w-fit"
            >
              <span>Become a </span>
              <span data-slot="italic">Franchise</span>
              <VectorArrowDown2 className="absolute -end-24 top-1/2 z-10 hidden h-20 sm:block sm:h-32 xl:-end-10 2xl:top-2/3" />
            </Heading>
          </div>

          <div className="max-w-2xl space-y-4">
            <Heading level={2} fontSize="text-3xl lg:text-4xl font-medium">
              Join India&apos;s growing mens bottom wear brand
            </Heading>
            <Text className="leading-relaxed text-zinc-600">
              PARSWAM is a leading mens bottom wear brand by Parswam Fashion Limited, Ahmedabad. With strong
              manufacturing capability and trending fashion designs, PARSWAM is rapidly becoming a preferred name in
              mens jeans, pants and trendy bottom wear across India.
            </Text>
            <Text className="leading-relaxed text-zinc-600">
              We are now expanding through exclusive franchise stores and select retail partners, offering a structured
              opportunity with brand support, high-demand products and robust margins.
            </Text>
          </div>

          <div className="space-y-4 rounded-lg border border-zinc-200 bg-zinc-50 p-6">
            <Heading level={3} fontSize="text-2xl lg:text-3xl font-medium">
              Franchise Opportunity
            </Heading>
            <Text className="text-sm leading-relaxed text-zinc-700">
              India&apos;s mens bottom wear market is growing quickly with strong repeat demand. PARSWAM offers a
              franchise opportunity that combines fast-selling products, attractive margins and structured brand
              support, helping you build a stable and scalable retail business.
            </Text>
          </div>
        </div>

        {/* RIGHT: FRANCHISE ENQUIRY FORM */}
        <div className="flex flex-1/3 lg:self-start">
          <FranchiseEnquiryForm />
        </div>
      </div>

      <div className="mt-16 space-y-16 sm:mt-24 lg:mt-32">
        {/* FRANCHISE MODELS */}
        <section className="space-y-8">
          <Heading level={2} fontSize="text-3xl lg:text-4xl font-medium">
            Franchise Models
          </Heading>
          <div className="grid gap-6 md:grid-cols-3">
            {franchiseModels.map((model) => (
              <div key={model.title} className="space-y-2 rounded-lg border border-zinc-200 bg-zinc-50 p-6">
                <Text className="text-xs font-semibold tracking-[0.18em] text-zinc-500 uppercase">{model.title}</Text>
                <Text className="text-sm leading-relaxed text-zinc-700">{model.description}</Text>
              </div>
            ))}
          </div>
        </section>

        {/* INVESTMENT DETAILS */}
        <section className="space-y-6">
          <Heading level={2} fontSize="text-3xl lg:text-4xl font-medium">
            Investment Details
          </Heading>
          <ul className="space-y-2 text-sm leading-relaxed text-zinc-700">
            {investmentPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </section>

        {/* BENEFITS */}
        <section className="space-y-8">
          <Heading level={2} fontSize="text-3xl lg:text-4xl font-medium">
            Why Choose a PARSWAM Franchise?
          </Heading>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {franchiseBenefits.map((benefit) => (
              <div key={benefit} className="rounded-lg border border-zinc-200 bg-zinc-50 p-4 text-sm text-zinc-700">
                {benefit}
              </div>
            ))}
          </div>
        </section>

        {/* SUPPORT SYSTEM */}
        <section className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div className="space-y-4">
            <Heading level={2} fontSize="text-3xl lg:text-4xl font-medium">
              Franchise Support System
            </Heading>
            <Text className="leading-relaxed text-zinc-600">
              From choosing the right location to running day-to-day operations, our team provides structured support
              that helps you launch smoothly and grow consistently.
            </Text>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="space-y-3 rounded-lg border border-zinc-200 bg-zinc-50 p-6">
              <Text className="text-xs font-semibold tracking-[0.18em] text-zinc-500 uppercase">
                Pre-launch support
              </Text>
              <ul className="space-y-2 text-sm leading-relaxed text-zinc-700">
                {preLaunchSupport.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="space-y-3 rounded-lg border border-zinc-200 bg-zinc-50 p-6">
              <Text className="text-xs font-semibold tracking-[0.18em] text-zinc-500 uppercase">
                Post-launch support
              </Text>
              <ul className="space-y-2 text-sm leading-relaxed text-zinc-700">
                {postLaunchSupport.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ELIGIBILITY + TERRITORY */}
        <section className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div className="space-y-6">
            <Heading level={2} fontSize="text-3xl lg:text-4xl font-medium">
              Franchise Eligibility Criteria
            </Heading>
            <ul className="space-y-2 text-sm text-zinc-700">
              {eligibilityPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <Heading level={2} fontSize="text-3xl lg:text-4xl font-medium">
              Territory Availability
            </Heading>
            <Text className="leading-relaxed text-zinc-600">
              We follow exclusive city-based franchise rules – only one PARSWAM franchise is allowed per city, subject
              to final approval after location verification.
            </Text>
            <div className="flex flex-wrap gap-4 text-sm">
              <span className="inline-flex items-center rounded-full bg-emerald-50 px-4 py-2 text-emerald-700">
                ✔ City available
              </span>
              <span className="inline-flex items-center rounded-full bg-red-50 px-4 py-2 text-red-700">
                ✘ Franchise already assigned
              </span>
            </div>
            <Text className="text-xs leading-relaxed text-zinc-500">
              *Final availability is confirmed only after we review your proposed location and city details.
            </Text>
          </div>
        </section>

        {/* PRODUCT RANGE */}
        <section className="space-y-8">
          <Heading level={2} fontSize="text-3xl lg:text-4xl font-medium">
            Product Range for Franchise Stores
          </Heading>
          <div className="flex flex-wrap gap-3">
            {productRange.map((item) => (
              <span
                key={item}
                className="inline-flex items-center rounded-full border border-zinc-200 bg-zinc-50 px-4 py-2 text-sm text-zinc-700"
              >
                {item}
              </span>
            ))}
          </div>
        </section>

        {/* FAQ SUMMARY */}
        <section className="space-y-6">
          <Heading level={2} fontSize="text-3xl lg:text-4xl font-medium">
            Key Franchise FAQs (Summary)
          </Heading>
          <ul className="space-y-2 text-sm leading-relaxed text-zinc-700">
            <li>
              <strong>Franchise cost:</strong> Investment depends on city, location and chosen model.
            </li>
            <li>
              <strong>Number of franchises per city:</strong> Only one franchise is allowed per city.
            </li>
            <li>
              <strong>Shop size:</strong> Typically 250–500 sq.ft. in a good commercial / market area.
            </li>
            <li>
              <strong>Marketing support:</strong> Yes, we support with both online and offline marketing initiatives.
            </li>
            <li>
              <strong>Dead stock risk:</strong> Very low due to fast-moving designs and strong repeat demand.
            </li>
          </ul>
        </section>
      </div>

      <Divider className="mt-16 sm:mt-24 lg:mt-32" />
    </div>
  )
}

const FranchiseEnquiryForm = () => {
  return (
    <form action="" method="POST" className="flex w-full max-w-md flex-col gap-5">
      <Field>
        <Label>Your name</Label>
        <Input type="text" name="name" placeholder="Your full name" />
      </Field>

      <Field>
        <Label>Business / firm name</Label>
        <Input type="text" name="businessName" placeholder="Registered firm name" />
      </Field>

      <Field>
        <Label>Phone number</Label>
        <Input type="tel" name="phone" placeholder="WhatsApp / primary contact" />
      </Field>

      <Field>
        <Label>Email (optional)</Label>
        <Input type="email" name="email" placeholder="you@example.com" />
      </Field>

      <Field>
        <Label>Your city</Label>
        <Input type="text" name="city" placeholder="City where you are based" />
      </Field>

      <Field>
        <Label>Proposed franchise location</Label>
        <Input type="text" name="location" placeholder="Market / area for the store" />
      </Field>

      <Field>
        <Label>Preferred franchise model</Label>
        <Select name="model" defaultValue="">
          <option value="" disabled>
            Select franchise model
          </option>
          <option value="exclusive-store">Exclusive PARSWAM franchise store</option>
          <option value="mbo">Multi-brand store franchise (MBO)</option>
          <option value="distributor-plus-franchise">Distributor + franchise model</option>
        </Select>
      </Field>

      <Field>
        <Label>Additional details</Label>
        <Textarea
          name="message"
          rows={4}
          placeholder="Share more about your experience, investment capacity, and why you want to partner with PARSWAM."
        />
        <Description>
          The more details you provide, the better we can evaluate your city and get back with the right proposal.
        </Description>
      </Field>

      <div className="space-y-3 pt-4">
        <Button type="submit" className="w-full">
          <span data-slot="icon" aria-hidden>
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M4 12L20 4L12 20L11 13L4 12Z" />
            </svg>
          </span>
          Submit franchise enquiry
        </Button>
        <Button
          href="https://api.whatsapp.com/send/?phone=916351137399&text=Hello%21%0D%0AI+am+interested+in+becoming+a+PARSWAM+franchise+partner.&type=phone_number&app_absent=0"
          color="green"
          className="w-full"
        >
          <span data-slot="icon" aria-hidden>
            <svg className="h-4 w-4" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
              <path d="M12.04 2C6.58 2 2.2 6.26 2.2 11.64c0 1.9.53 3.67 1.46 5.17L2 22l5.33-1.63a9.9 9.9 0 004.71 1.2h.01c5.46 0 9.84-4.26 9.84-9.64C21.9 6.26 17.5 2 12.04 2zm0 1.8c4.4 0 7.98 3.46 7.98 7.84 0 4.32-3.58 7.84-7.98 7.84h-.01c-1.5 0-2.96-.43-4.23-1.25l-.3-.18-3.16.96.97-3.03-.2-.31A6.93 6.93 0 014 11.64C4 7.26 7.64 3.8 12.04 3.8z" />
              <path d="M9.53 8.58c-.17-.37-.35-.38-.52-.39h-.44c-.16 0-.4.06-.62.3-.21.23-.82.8-.82 1.95 0 1.15.84 2.27.96 2.43.12.16 1.61 2.52 3.96 3.43 1.96.77 2.36.62 2.79.58.43-.04 1.37-.55 1.56-1.08.19-.53.19-.98.13-1.08-.06-.1-.21-.16-.45-.28-.24-.12-1.37-.67-1.58-.75-.21-.08-.36-.12-.52.12-.16.23-.6.74-.73.89-.13.15-.27.17-.5.06-.24-.12-1-.39-1.9-1.24-.7-.63-1.17-1.4-1.31-1.64-.14-.24-.01-.37.1-.49.1-.1.24-.27.36-.4.12-.13.16-.23.24-.39.08-.16.04-.3-.02-.42-.06-.12-.52-1.29-.73-1.77z" />
            </svg>
          </span>
          WhatsApp us for franchise
        </Button>
      </div>
    </form>
  )
}

export default Page
