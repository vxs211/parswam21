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
  title: 'B2B Inquiry',
  description: "Parswam Fashion Limited – B2B wholesale & distribution for men's and kids' bottom wear across India.",
}

const businessTypes = ['Wholesaler', 'Distributor'] as const

const citySizes = ['Small City', 'Big City / Metro'] as const

const productRanges = [
  "Men's Collection",
  "Kids' Collection",
  'Trendy Collection',
  'Complete Bottom Wear Range',
] as const

const Page = () => {
  return (
    <div className="container mt-16 sm:mt-24 lg:mt-28">
      <div className="flex flex-col justify-between gap-14 lg:flex-row">
        {/* LEFT: INTRO & HIGHLIGHTS */}
        <div className="flex flex-2/3 flex-col gap-10 md:gap-16 lg:gap-20 xl:gap-24">
          <div className="relative">
            <Heading level={1} fontSize="text-7xl lg:text-8xl 2xl:text-9xl font-medium" className="relative w-fit">
              <span>B2B </span>
              <span data-slot="italic">Inquiry</span>

              <VectorArrowDown2 className="absolute -end-24 top-1/2 z-10 hidden h-20 sm:block sm:h-32 xl:-end-10 2xl:top-2/3" />
            </Heading>
          </div>

          <div className="max-w-2xl space-y-4">
            <Heading level={2} fontSize="text-3xl lg:text-4xl font-medium">
              B2B Wholesale & Distribution for Serious Partners
            </Heading>
            <Text className="leading-relaxed text-zinc-600">
              Parswam Fashion Limited is a premium manufacturer of men&apos;s and kids&apos; jeans, pants and trendy
              bottom wear. With in-house production and strict quality control, we supply exclusively to wholesalers and
              authorized distributors across India under our brand <span data-slot="italic">PARSWAM</span>.
            </Text>
            <Text className="leading-relaxed text-zinc-600">
              Our products are known for premium fabric quality, standout fitting and fashion-forward designs in bottom
              wear that move fast in the market and support strong repeat demand.
            </Text>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="space-y-2 rounded-lg border border-zinc-200 bg-zinc-50 p-6">
              <Text className="text-xs font-semibold tracking-[0.18em] text-zinc-500 uppercase">Important Notice</Text>
              <Text className="text-sm leading-relaxed text-zinc-700">
                We supply only to wholesalers and authorized distributors. We do not sell directly to retailers or small
                quantity buyers.
              </Text>
            </div>
            <div className="space-y-2 rounded-lg border border-zinc-200 bg-zinc-50 p-6">
              <Text className="text-xs font-semibold tracking-[0.18em] text-zinc-500 uppercase">
                Exclusive Distribution
              </Text>
              <Text className="text-sm leading-relaxed text-zinc-700">
                Distribution is strictly on a city-wise exclusive basis. In every city, only one distributor is
                appointed to protect your territory.
              </Text>
            </div>
          </div>

          <div className="space-y-4">
            <Heading level={2} fontSize="text-2xl lg:text-3xl font-medium">
              MOQ & Bulk Pricing
            </Heading>
            <ul className="space-y-2 text-sm leading-relaxed text-zinc-700">
              <li>Minimum order: 100 pcs per design for distributors (as per city potential).</li>
              <li>Bulk pricing depends on fabric quality, style and total order quantity.</li>
              <li>Private label / white labelling available for large quantity orders.</li>
              <li>Fast production and direct dispatch from our Ahmedabad head office.</li>
            </ul>
          </div>
        </div>

        {/* RIGHT: ENQUIRY FORM */}
        <div className="flex flex-1/3 lg:self-start">
          <B2BInquiryForm />
        </div>
      </div>

      <div className="mt-16 space-y-16 sm:mt-24 lg:mt-32">
        {/* PRODUCT CATEGORIES */}
        <section className="space-y-8">
          <Heading level={2} fontSize="text-3xl lg:text-4xl font-medium">
            PARSWAM Product Categories
          </Heading>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="space-y-2 rounded-lg border border-zinc-200 bg-zinc-50 p-6">
              <Text className="text-xs font-semibold tracking-[0.18em] text-zinc-500 uppercase">Men&apos;s Jeans</Text>
              <Text className="text-sm leading-relaxed text-zinc-700">
                Slim fit, regular fit, baggy jeans and stretch denim options designed for everyday comfort and trend
                driven looks.
              </Text>
            </div>
            <div className="space-y-2 rounded-lg border border-zinc-200 bg-zinc-50 p-6">
              <Text className="text-xs font-semibold tracking-[0.18em] text-zinc-500 uppercase">Men&apos;s Pants</Text>
              <Text className="text-sm leading-relaxed text-zinc-700">
                Casual, formal and chino pants in refined fabrics that balance durability, comfort and premium finish.
              </Text>
            </div>
            <div className="space-y-2 rounded-lg border border-zinc-200 bg-zinc-50 p-6">
              <Text className="text-xs font-semibold tracking-[0.18em] text-zinc-500 uppercase">Trendy Collection</Text>
              <Text className="text-sm leading-relaxed text-zinc-700">
                Joggers, stylish bottoms and new fashion ranges curated for young, fast-moving customers.
              </Text>
            </div>
          </div>
        </section>

        {/* WHY PARTNER WITH PARSWAM */}
        <section className="space-y-8">
          <Heading level={2} fontSize="text-3xl lg:text-4xl font-medium">
            Why Partner with PARSWAM?
          </Heading>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-4 text-sm text-zinc-700">
              In-house manufacturing for consistent quality and better control on timelines.
            </div>
            <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-4 text-sm text-zinc-700">
              Premium fabrics, strict quality checks and dependable fits that drive repeat purchases.
            </div>
            <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-4 text-sm text-zinc-700">
              Exclusive city-wise distribution model to protect your margins and territory.
            </div>
            <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-4 text-sm text-zinc-700">
              Fast dispatch and pan-India delivery support from our central hub.
            </div>
            <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-4 text-sm text-zinc-700">
              Strong brand pull for bottom wear under the PARSWAM name in multiple markets.
            </div>
            <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-4 text-sm text-zinc-700">
              White-labelling support and custom branding for qualified bulk partners.
            </div>
          </div>
        </section>

        {/* ELIGIBILITY & TERRITORY */}
        <section className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div className="space-y-6">
            <Heading level={2} fontSize="text-3xl lg:text-4xl font-medium">
              Distributor Eligibility Criteria
            </Heading>
            <ul className="space-y-2 text-sm text-zinc-700">
              <li>Must be an existing wholesaler or stockist in garments or related categories.</li>
              <li>Should have a shop or godown within the target city.</li>
              <li>Minimum starting order value based on city capacity and potential.</li>
              <li>Committed to selling only within the allotted city/region.</li>
              <li>Basic distribution and sales network in the allotted territory is expected.</li>
              <li>Prior experience in the garment industry is preferred but not mandatory.</li>
            </ul>
          </div>

          <div className="space-y-6">
            <Heading level={2} fontSize="text-3xl lg:text-4xl font-medium">
              Territory Availability
            </Heading>
            <Text className="leading-relaxed text-zinc-600">
              We follow an exclusive distribution policy. If a city is already assigned to a distributor, no other
              distributor will be appointed in that region.
            </Text>

            <div className="flex flex-wrap gap-4 text-sm">
              <span className="inline-flex items-center rounded-full bg-emerald-50 px-4 py-2 text-emerald-700">
                ✔ Open for distribution
              </span>
              <span className="inline-flex items-center rounded-full bg-red-50 px-4 py-2 text-red-700">
                ✘ Already assigned
              </span>
            </div>

            <Text className="text-xs leading-relaxed text-zinc-500">
              Final availability is confirmed only after we verify your business location, destination city and
              compliance with our eligibility criteria.
            </Text>
          </div>
        </section>
      </div>

      <Divider className="mt-16 sm:mt-24 lg:mt-32" />
    </div>
  )
}

const B2BInquiryForm = () => {
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
        <Label>Business type</Label>
        <Select name="businessType" defaultValue="">
          <option value="" disabled>
            Select business type
          </option>
          {businessTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </Select>
      </Field>

      <Field>
        <Label>Business location (your city)</Label>
        <Input type="text" name="businessCity" placeholder="City where your business is based" />
      </Field>

      <Field>
        <Label>Destination city (where you will sell)</Label>
        <Input type="text" name="destinationCity" placeholder="Primary selling / distribution city" />
      </Field>

      <Field>
        <Label>City size</Label>
        <Select name="citySize" defaultValue="">
          <option value="" disabled>
            Select city size
          </option>
          {citySizes.map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </Select>
      </Field>

      <Field>
        <Label>Interested product range</Label>
        <Select name="productRange" defaultValue="">
          <option value="" disabled>
            Select product range
          </option>
          {productRanges.map((range) => (
            <option key={range} value={range}>
              {range}
            </option>
          ))}
        </Select>
      </Field>

      <Field>
        <Label>Additional details</Label>
        <Textarea
          name="message"
          rows={4}
          placeholder="Share more about your business, experience, monthly volume and preferred cities."
        />
        <Description>Any extra context helps us evaluate your enquiry faster.</Description>
      </Field>

      <div className="space-y-3 pt-4">
        <Button type="submit" className="w-full">
          <span data-slot="icon" aria-hidden>
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M4 12L20 4L12 20L11 13L4 12Z" />
            </svg>
          </span>
          Submit enquiry
        </Button>
        <Button
          href="https://api.whatsapp.com/send/?phone=916351137399&text=Hello%21%0D%0AI+am+interested+in+your+PARSWAM+B2B+wholesale+and+distribution+program.&type=phone_number&app_absent=0"
          color="green"
          className="w-full"
        >
          <span data-slot="icon" aria-hidden>
            <svg className="h-4 w-4" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
              <path d="M12.04 2C6.58 2 2.2 6.26 2.2 11.64c0 1.9.53 3.67 1.46 5.17L2 22l5.33-1.63a9.9 9.9 0 004.71 1.2h.01c5.46 0 9.84-4.26 9.84-9.64C21.9 6.26 17.5 2 12.04 2zm0 1.8c4.4 0 7.98 3.46 7.98 7.84 0 4.32-3.58 7.84-7.98 7.84h-.01c-1.5 0-2.96-.43-4.23-1.25l-.3-.18-3.16.96.97-3.03-.2-.31A6.93 6.93 0 014 11.64C4 7.26 7.64 3.8 12.04 3.8z" />
              <path d="M9.53 8.58c-.17-.37-.35-.38-.52-.39h-.44c-.16 0-.4.06-.62.3-.21.23-.82.8-.82 1.95 0 1.15.84 2.27.96 2.43.12.16 1.61 2.52 3.96 3.43 1.96.77 2.36.62 2.79.58.43-.04 1.37-.55 1.56-1.08.19-.53.19-.98.13-1.08-.06-.1-.21-.16-.45-.28-.24-.12-1.37-.67-1.58-.75-.21-.08-.36-.12-.52.12-.16.23-.6.74-.73.89-.13.15-.27.17-.5.06-.24-.12-1-.39-1.9-1.24-.7-.63-1.17-1.4-1.31-1.64-.14-.24-.01-.37.1-.49.1-.1.24-.27.36-.4.12-.13.16-.23.24-.39.08-.16.04-.3-.02-.42-.06-.12-.52-1.29-.73-1.77z" />
            </svg>
          </span>
          WhatsApp us
        </Button>
      </div>
    </form>
  )
}

export default Page
