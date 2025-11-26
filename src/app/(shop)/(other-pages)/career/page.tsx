import { Button } from '@/components/button'
import { Divider } from '@/components/divider'
import { Description, Field, Label } from '@/components/fieldset'
import { Heading } from '@/components/heading'
import { Input } from '@/components/input'
import { Text } from '@/components/text'
import { Textarea } from '@/components/textarea'
import { VectorArrowDown2 } from '@/components/vector-arrow-down'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Careers at PARSWAM',
  description:
    "Explore career opportunities at PARSWAM – India's leading men's bottom wear brand, offering growth, learning and a fashion-forward work culture.",
}

const openings = [
  {
    title: 'Store Manager',
    location: 'Ahmedabad / PAN India',
    experience: '2+ years in retail / fashion',
    responsibilities:
      'Manage store operations, supervise team members, handle stock and ensure an exceptional customer experience.',
  },
  {
    title: 'Sales Executive',
    location: 'Ahmedabad / PAN India',
    experience: '1+ year in sales / retail',
    responsibilities:
      'Assist customers, achieve sales targets, maintain store displays and support inventory management.',
  },
  {
    title: 'Marketing & Social Media Executive',
    location: 'Ahmedabad / Remote',
    experience: '1–3 years in digital marketing',
    responsibilities:
      'Plan and manage social media campaigns, branding, promotional content and basic marketing analytics.',
  },
]

const internshipPrograms = [
  'Fashion design internships – design, trend research, sampling.',
  'Retail / sales trainee program – store operations and customer management.',
  'Marketing trainee program – digital and offline marketing.',
]

const benefits = [
  'Professional growth and skill development.',
  'Innovative, fashion-oriented work culture.',
  'Teamwork and collaborative environment.',
  'Attractive employee benefits and perks.',
  'Opportunity to work with a premium fashion brand.',
  'Learning and training programs across departments.',
]

const testimonials = [
  {
    quote: 'Working at PARSWAM has boosted my skills and given me tremendous growth opportunities!',
    name: 'Ramesh Kumar',
    role: 'Store Manager',
  },
  {
    quote: 'Amazing work culture, supportive team and constant learning opportunities!',
    name: 'Sneha Patel',
    role: 'Marketing Executive',
  },
]

const Page = () => {
  return (
    <div className="container mt-16 sm:mt-24 lg:mt-28">
      <div className="flex flex-col justify-between gap-14 lg:flex-row">
        {/* LEFT: HERO & OVERVIEW */}
        <div className="flex flex-2/3 flex-col gap-10 md:gap-16 lg:gap-20 xl:gap-24">
          <div className="relative">
            <Heading
              level={1}
              fontSize="text-6xl sm:text-7xl lg:text-8xl 2xl:text-9xl font-medium"
              className="relative w-fit"
            >
              <span>Careers at </span>
              <span data-slot="italic">PARSWAM</span>
              <VectorArrowDown2 className="absolute -end-24 top-1/2 z-10 hidden h-20 sm:block sm:h-32 xl:-end-10 2xl:top-2/3" />
            </Heading>
          </div>

          <div className="max-w-2xl space-y-4">
            <Heading level={2} fontSize="text-3xl lg:text-4xl font-medium">
              Join India&apos;s leading men&apos;s bottom wear brand
            </Heading>
            <Text className="leading-relaxed text-zinc-600">
              Parswam Fashion Limited, headquartered in Ahmedabad, is a leading manufacturer of men&apos;s jeans, pants
              and trendy bottom wear under the brand <span data-slot="italic">PARSWAM</span>. We are known for premium
              fabrics, trend-focused designs and a dynamic work environment that encourages growth, ownership and
              learning.
            </Text>
          </div>

          <section className="space-y-6">
            <Heading level={2} fontSize="text-3xl lg:text-4xl font-medium">
              Why work with PARSWAM?
            </Heading>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {benefits.map((item) => (
                <div
                  key={item}
                  className="rounded-lg border border-zinc-200 bg-zinc-50 p-4 text-sm leading-relaxed text-zinc-700"
                >
                  {item}
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* RIGHT: CAREER APPLICATION FORM */}
        <div className="flex flex-1/3 lg:self-start">
          <CareerApplicationForm />
        </div>
      </div>

      <div className="mt-16 space-y-16 sm:mt-24 lg:mt-32">
        {/* CURRENT OPENINGS */}
        <section className="space-y-8">
          <Heading level={2} fontSize="text-3xl lg:text-4xl font-medium">
            Current openings
          </Heading>
          <div className="space-y-6">
            {openings.map((job) => (
              <div key={job.title} className="space-y-3 rounded-lg border border-zinc-200 bg-zinc-50 p-6">
                <Heading level={3} fontSize="text-2xl lg:text-3xl font-medium">
                  {job.title}
                </Heading>
                <Text className="text-sm text-zinc-700">
                  <strong>Location:</strong> {job.location}
                </Text>
                <Text className="text-sm text-zinc-700">
                  <strong>Experience:</strong> {job.experience}
                </Text>
                <Text className="text-sm leading-relaxed text-zinc-700">
                  <strong>Responsibilities:</strong> {job.responsibilities}
                </Text>
                <div>
                  <Button plain className="mt-2">
                    Apply for this role
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* INTERNSHIPS & TRAINEE PROGRAMS */}
        <section className="space-y-6">
          <Heading level={2} fontSize="text-3xl lg:text-4xl font-medium">
            Internships & trainee programs
          </Heading>
          <Text className="leading-relaxed text-zinc-600">
            We regularly offer internships and trainee roles across design, retail and marketing for passionate
            individuals looking to build a career in fashion and retail.
          </Text>
          <ul className="space-y-2 text-sm leading-relaxed text-zinc-700">
            {internshipPrograms.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        {/* TESTIMONIALS */}
        <section className="space-y-8">
          <Heading level={2} fontSize="text-3xl lg:text-4xl font-medium">
            Employee testimonials
          </Heading>
          <div className="grid gap-6 md:grid-cols-2">
            {testimonials.map((t) => (
              <div key={t.name} className="space-y-3 rounded-lg border border-zinc-200 bg-zinc-50 p-6">
                <Text className="leading-relaxed text-zinc-700">“{t.quote}”</Text>
                <Text className="text-sm font-semibold text-zinc-900">
                  {t.name} <span className="font-normal text-zinc-600">– {t.role}</span>
                </Text>
              </div>
            ))}
          </div>
        </section>
      </div>

      <Divider className="mt-16 sm:mt-24 lg:mt-32" />
    </div>
  )
}

const CareerApplicationForm = () => {
  return (
    <form action="" method="POST" className="flex w-full max-w-md flex-col gap-5">
      <Field>
        <Label>Full name</Label>
        <Input type="text" name="name" placeholder="Your full name" />
      </Field>

      <Field>
        <Label>Email</Label>
        <Input type="email" name="email" placeholder="you@example.com" />
      </Field>

      <Field>
        <Label>Phone number</Label>
        <Input type="tel" name="phone" placeholder="WhatsApp / primary contact" />
      </Field>

      <Field>
        <Label>Current job / position (optional)</Label>
        <Input type="text" name="currentPosition" placeholder="Your current role" />
      </Field>

      <Field>
        <Label>Preferred job location</Label>
        <Input type="text" name="location" placeholder="City / region you prefer" />
      </Field>

      <Field>
        <Label>Cover letter / message</Label>
        <Textarea
          name="message"
          rows={4}
          placeholder="Tell us about your experience, skills and why you want to work with PARSWAM."
        />
        <Description>
          You can also mention if you&apos;re interested in full-time roles, internships or trainee programs.
        </Description>
      </Field>

      <div className="space-y-3 pt-4">
        <Button type="submit" className="w-full">
          <span data-slot="icon" aria-hidden>
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M4 12L20 4L12 20L11 13L4 12Z" />
            </svg>
          </span>
          Submit application
        </Button>
        <Button
          href="https://api.whatsapp.com/send/?phone=916351137399&text=Hello%21%0D%0AI+am+interested+in+career+opportunities+at+PARSWAM.&type=phone_number&app_absent=0"
          color="green"
          className="w-full"
        >
          <span data-slot="icon" aria-hidden>
            <svg className="h-4 w-4" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
              <path d="M12.04 2C6.58 2 2.2 6.26 2.2 11.64c0 1.9.53 3.67 1.46 5.17L2 22l5.33-1.63a9.9 9.9 0 004.71 1.2h.01c5.46 0 9.84-4.26 9.84-9.64C21.9 6.26 17.5 2 12.04 2zm0 1.8c4.4 0 7.98 3.46 7.98 7.84 0 4.32-3.58 7.84-7.98 7.84h-.01c-1.5 0-2.96-.43-4.23-1.25l-.3-.18-3.16.96.97-3.03-.2-.31A6.93 6.93 0 014 11.64C4 7.26 7.64 3.8 12.04 3.8z" />
              <path d="M9.53 8.58c-.17-.37-.35-.38-.52-.39h-.44c-.16 0-.4.06-.62.3-.21.23-.82.8-.82 1.95 0 1.15.84 2.27.96 2.43.12.16 1.61 2.52 3.96 3.43 1.96.77 2.36.62 2.79.58.43-.04 1.37-.55 1.56-1.08.19-.53.19-.98.13-1.08-.06-.1-.21-.16-.45-.28-.24-.12-1.37-.67-1.58-.75-.21-.08-.36-.12-.52.12-.16.23-.6.74-.73.89-.13.15-.27.17-.5.06-.24-.12-1-.39-1.9-1.24-.7-.63-1.17-1.4-1.31-1.64-.14-.24-.01-.37.1-.49.1-.1.24-.27.36-.4.12-.13.16-.23.24-.39.08-.16.04-.3-.02-.42-.06-.12-.52-1.29-.73-1.77z" />
            </svg>
          </span>
          WhatsApp apply
        </Button>
      </div>
    </form>
  )
}

export default Page
