import { Heading } from '@/components/heading'
import { Text } from '@/components/text'
import { VectorArrowDown2 } from '@/components/vector-arrow-down'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Learn how Parswam collects, uses, discloses, and protects your personal data when you use our website and services.',
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
              <span>Privacy </span>
              <span data-slot="italic">Policy</span>

              <VectorArrowDown2 className="absolute -end-24 top-1/2 hidden h-16 sm:block sm:h-24 lg:-end-16 2xl:top-2/3" />
            </Heading>
          </div>

          <div className="max-w-2xl space-y-4 text-zinc-700">
            <Text>
              This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your
              information when You use the Service and tells You about Your privacy rights and how the law protects You.
            </Text>
            <Text>
              By using the Website, You agree to the collection and use of information in accordance with this Privacy
              Policy.
            </Text>
          </div>
        </div>
      </div>

      {/* POLICY CONTENT */}
      <div className="mt-16 grid gap-10 text-sm leading-relaxed text-zinc-700 sm:mt-20 lg:mt-24">
        {/* Security of Your Personal Data */}
        <section className="space-y-3">
          <Heading level={2} fontSize="text-xl sm:text-2xl font-semibold">
            Security of Your Personal Data
          </Heading>
          <Text>
            The security of Your Personal Data is important to Us, but remember that no method of transmission over the
            Internet, or method of electronic storage is 100% secure. While We strive to use commercially acceptable
            means to protect Your Personal Data, We cannot guarantee its absolute security.
          </Text>
        </section>

        {/* Interpretation & Definitions */}
        <section className="space-y-4">
          <div className="space-y-2">
            <Heading level={2} fontSize="text-xl sm:text-2xl font-semibold">
              Interpretation
            </Heading>
            <Text>
              The words of which the initial letter is capitalized have meanings defined under the following conditions.
              The following definitions shall have the same meaning regardless of whether they appear in singular or in
              plural.
            </Text>
          </div>

          <div className="space-y-2">
            <Heading level={2} fontSize="text-xl sm:text-2xl font-semibold">
              Definitions
            </Heading>
            <Text>For the purposes of this Privacy Policy:</Text>
            <div className="space-y-2">
              <Text>
                <span className="font-semibold">Account</span> means a unique account created for You to access our
                Service or parts of our Service.
              </Text>
              <Text>
                <span className="font-semibold">Affiliate</span> means an entity that controls, is controlled by or is
                under common control with a party, where “control” means ownership of 50% or more of the shares, equity
                interest or other securities entitled to vote for election of directors or other managing authority.
              </Text>
              <Text>
                <span className="font-semibold">Company</span> (referred to as either “the Company”, “We”, “Us” or “Our”
                in this Agreement) refers to Parswam, Unnamed Road, Parishkaar-2 Phase-2, Khokhra, Ahmedabad, Gujarat
                380038.
              </Text>
              <Text>
                <span className="font-semibold">Cookies</span> are small files that are placed on Your computer, mobile
                device or any other device by a website, containing the details of Your browsing history on that website
                among its many uses.
              </Text>
              <Text>
                <span className="font-semibold">Country</span> refers to: Gujarat, India.
              </Text>
              <Text>
                <span className="font-semibold">Device</span> means any device that can access the Service such as a
                computer, a cellphone or a digital tablet.
              </Text>
              <Text>
                <span className="font-semibold">Personal Data</span> is any information that relates to an identified or
                identifiable individual.
              </Text>
              <Text>
                <span className="font-semibold">Service</span> refers to the Website.
              </Text>
              <Text>
                <span className="font-semibold">Service Provider</span> means any natural or legal person who processes
                the data on behalf of the Company. It refers to third-party companies or individuals employed by the
                Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services
                related to the Service or to assist the Company in analyzing how the Service is used.
              </Text>
              <Text>
                <span className="font-semibold">Usage Data</span> refers to data collected automatically, either
                generated by the use of the Service or from the Service infrastructure itself (for example, the duration
                of a page visit).
              </Text>
              <Text>
                <span className="font-semibold">Website</span> refers to Parswam, accessible from{' '}
                <a href="http://www.parswam.com" target="_blank" rel="noopener noreferrer" className="underline">
                  http://www.parswam.com
                </a>
                .
              </Text>
              <Text>
                <span className="font-semibold">You</span> means the individual accessing or using the Service, or the
                company, or other legal entity on behalf of which such individual is accessing or using the Service, as
                applicable.
              </Text>
            </div>
          </div>
        </section>

        {/* Collecting and Using Your Personal Data */}
        <section className="space-y-3">
          <Heading level={2} fontSize="text-xl sm:text-2xl font-semibold">
            Collecting and Using Your Personal Data
          </Heading>

          <div className="space-y-2">
            <Heading level={3} fontSize="text-lg font-semibold">
              Types of Data Collected
            </Heading>
            <Heading level={4} fontSize="text-base font-semibold">
              Personal Data
            </Heading>
            <Text>
              While using Our Service, We may ask You to provide Us with certain personally identifiable information
              that can be used to contact or identify You. Personally identifiable information may include, but is not
              limited to:
            </Text>
            <ul className="list-disc space-y-1 pl-5">
              <li>Email address</li>
              <li>First name and last name</li>
              <li>Phone number</li>
              <li>Address, State, Province, ZIP/Postal code, City</li>
              <li>Usage Data</li>
            </ul>
          </div>

          <div className="space-y-2">
            <Heading level={4} fontSize="text-base font-semibold">
              Usage Data
            </Heading>
            <Text>Usage Data is collected automatically when using the Service.</Text>
            <Text>
              Usage Data may include information such as Your Device’s Internet Protocol address (e.g. IP address),
              browser type, browser version, the pages of our Service that You visit, the time and date of Your visit,
              the time spent on those pages, unique device identifiers and other diagnostic data.
            </Text>
            <Text>
              When You access the Service by or through a mobile device, We may collect certain information
              automatically, including, but not limited to, the type of mobile device You use, Your mobile device unique
              ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet
              browser You use, unique device identifiers and other diagnostic data.
            </Text>
            <Text>
              We may also collect information that Your browser sends whenever You visit our Service or when You access
              the Service by or through a mobile device.
            </Text>
          </div>
        </section>

        {/* Tracking Technologies and Cookies */}
        <section className="space-y-3">
          <Heading level={2} fontSize="text-xl sm:text-2xl font-semibold">
            Tracking Technologies and Cookies
          </Heading>
          <Text>
            We use Cookies and similar tracking technologies to track the activity on Our Service and store certain
            information. Tracking technologies used are beacons, tags, and scripts to collect and track information and
            to improve and analyze Our Service.
          </Text>
          <Text>The technologies We use may include:</Text>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              <span className="font-semibold">Cookies or Browser Cookies.</span> A cookie is a small file placed on Your
              Device. You can instruct Your browser to refuse all Cookies or to indicate when a Cookie is being sent.
              However, if You do not accept Cookies, You may not be able to use some parts of our Service. Unless you
              have adjusted Your browser setting so that it will refuse Cookies, our Service may use Cookies.
            </li>
            <li>
              <span className="font-semibold">Web Beacons.</span> Certain sections of our Service and our emails may
              contain small electronic files known as web beacons (also referred to as clear gifs, pixel tags, and
              single-pixel gifs) that permit the Company, for example, to count users who have visited those pages or
              opened an email and for other related website statistics (for example, recording the popularity of a
              certain section and verifying system and server integrity).
            </li>
          </ul>
          <Text>
            Cookies can be “Persistent” or “Session” Cookies. Persistent Cookies remain on Your personal computer or
            mobile device when You go offline, while Session Cookies are deleted as soon as You close Your web browser.
          </Text>
          <Text>We use both Session and Persistent Cookies for the purposes set out below:</Text>
          <div className="space-y-2">
            <Text className="font-semibold">Necessary / Essential Cookies</Text>
            <Text>Type: Session Cookies</Text>
            <Text>Administered by: Us</Text>
            <Text>
              Purpose: These Cookies are essential to provide You with services available through the Website and to
              enable You to use some of its features. They help to authenticate users and prevent fraudulent use of user
              accounts. Without these Cookies, the services that You have asked for cannot be provided, and We only use
              these Cookies to provide You with those services.
            </Text>
          </div>
          <div className="space-y-2">
            <Text className="font-semibold">Cookies Policy / Notice Acceptance Cookies</Text>
            <Text>Type: Persistent Cookies</Text>
            <Text>Administered by: Us</Text>
            <Text>Purpose: These Cookies identify if users have accepted the use of cookies on the Website.</Text>
          </div>
          <div className="space-y-2">
            <Text className="font-semibold">Functionality Cookies</Text>
            <Text>Type: Persistent Cookies</Text>
            <Text>Administered by: Us</Text>
            <Text>
              Purpose: These Cookies allow us to remember choices You make when You use the Website, such as remembering
              your login details or language preference. The purpose of these Cookies is to provide You with a more
              personal experience and to avoid You having to re-enter your preferences every time You use the Website.
            </Text>
          </div>
          <Text>
            For more information about the cookies we use and your choices regarding cookies, please visit our Cookies
            Policy or the Cookies section of our Privacy Policy.
          </Text>
        </section>

        {/* Use of Your Personal Data */}
        <section className="space-y-3">
          <Heading level={2} fontSize="text-xl sm:text-2xl font-semibold">
            Use of Your Personal Data
          </Heading>
          <Text>The Company may use Personal Data for the following purposes:</Text>
          <ul className="list-disc space-y-1 pl-5">
            <li>To provide and maintain our Service, including to monitor the usage of our Service.</li>
            <li>
              To manage Your Account: to manage Your registration as a user of the Service. The Personal Data You
              provide can give You access to different functionalities of the Service that are available to You as a
              registered user.
            </li>
            <li>
              For the performance of a contract: the development, compliance and undertaking of the purchase contract
              for the products, items or services You have purchased or of any other contract with Us through the
              Service.
            </li>
            <li>
              To contact You: To contact You by email, telephone calls, SMS, or other equivalent forms of electronic
              communication regarding updates or informative communications related to the functionalities, products or
              contracted services, including security updates.
            </li>
            <li>
              To provide You with news, special offers and general information about other goods, services and events
              which we offer that are similar to those that you have already purchased or enquired about unless You have
              opted not to receive such information.
            </li>
            <li>To manage Your requests: To attend and manage Your requests to Us.</li>
            <li>
              For business transfers: We may use Your information to evaluate or conduct a merger, divestiture,
              restructuring, reorganization, dissolution, or other sale or transfer of some or all of Our assets.
            </li>
            <li>
              For other purposes: We may use Your information for other purposes, such as data analysis, identifying
              usage trends, determining the effectiveness of our promotional campaigns and to evaluate and improve our
              Service, products, services, marketing and your experience.
            </li>
          </ul>
        </section>

        {/* Sharing Your Personal Data */}
        <section className="space-y-3">
          <Heading level={2} fontSize="text-xl sm:text-2xl font-semibold">
            Sharing Your Personal Data
          </Heading>
          <Text>We may share Your personal information in the following situations:</Text>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              With Service Providers: We may share Your personal information with Service Providers to monitor and
              analyze the use of our Service, to contact You.
            </li>
            <li>
              For business transfers: We may share or transfer Your personal information in connection with any merger,
              sale of Company assets, financing, or acquisition of all or a portion of Our business to another company.
            </li>
            <li>
              With Affiliates: We may share Your information with Our affiliates, in which case we will require those
              affiliates to honor this Privacy Policy.
            </li>
            <li>
              With business partners: We may share Your information with Our business partners to offer You certain
              products, services or promotions.
            </li>
            <li>
              With other users: when You share personal information or otherwise interact in the public areas with other
              users, such information may be viewed by all users and may be publicly distributed outside.
            </li>
            <li>
              With Your consent: We may disclose Your personal information for any other purpose with Your consent.
            </li>
          </ul>
        </section>

        {/* Retention of Your Personal Data */}
        <section className="space-y-3">
          <Heading level={2} fontSize="text-xl sm:text-2xl font-semibold">
            Retention of Your Personal Data
          </Heading>
          <Text>
            The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this
            Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our legal
            obligations, resolve disputes, and enforce our legal agreements and policies.
          </Text>
          <Text>
            The Company will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for
            a shorter period of time, except when this data is used to strengthen the security or to improve the
            functionality of Our Service, or We are legally obligated to retain this data for longer time periods.
          </Text>
        </section>

        {/* Transfer of Your Personal Data */}
        <section className="space-y-3">
          <Heading level={2} fontSize="text-xl sm:text-2xl font-semibold">
            Transfer of Your Personal Data
          </Heading>
          <Text>
            Your information, including Personal Data, is processed at the Company’s operating offices and in any other
            places where the parties involved in the processing are located. It may be transferred to computers located
            outside of Your state, province, country or other governmental jurisdiction where the data protection laws
            may differ.
          </Text>
          <Text>
            Your consent to this Privacy Policy followed by Your submission of such information represents Your
            agreement to that transfer.
          </Text>
          <Text>
            The Company will take all steps reasonably necessary to ensure that Your data is treated securely and in
            accordance with this Privacy Policy and no transfer of Your Personal Data will take place to an organization
            or a country unless there are adequate controls in place including the security of Your data and other
            personal information.
          </Text>
        </section>

        {/* Delete Your Personal Data */}
        <section className="space-y-3">
          <Heading level={2} fontSize="text-xl sm:text-2xl font-semibold">
            Delete Your Personal Data
          </Heading>
          <Text>
            You have the right to delete or request that We assist in deleting the Personal Data that We have collected
            about You. Our Service may give You the ability to delete certain information about You from within the
            Service.
          </Text>
          <Text>
            You may update, amend, or delete Your information at any time by signing in to Your Account, if you have
            one, and visiting the account settings section that allows you to manage Your personal information. You may
            also contact Us to request access to, correct, or delete any personal information that You have provided to
            Us.
          </Text>
          <Text>
            Please note, however, that We may need to retain certain information when we have a legal obligation or
            lawful basis to do so.
          </Text>
        </section>

        {/* Disclosure of Your Personal Data */}
        <section className="space-y-3">
          <Heading level={2} fontSize="text-xl sm:text-2xl font-semibold">
            Disclosure of Your Personal Data
          </Heading>
          <Heading level={3} fontSize="text-lg font-semibold">
            Business Transactions
          </Heading>
          <Text>
            If the Company is involved in a merger, acquisition or asset sale, Your Personal Data may be transferred. We
            will provide notice before Your Personal Data is transferred and becomes subject to a different Privacy
            Policy.
          </Text>
          <Heading level={3} fontSize="text-lg font-semibold">
            Law Enforcement
          </Heading>
          <Text>
            Under certain circumstances, the Company may be required to disclose Your Personal Data if required to do so
            by law or in response to valid requests by public authorities (e.g. a court or a government agency).
          </Text>
          <Heading level={3} fontSize="text-lg font-semibold">
            Other Legal Requirements
          </Heading>
          <Text>
            The Company may disclose Your Personal Data in the good faith belief that such action is necessary to:
          </Text>
          <ul className="list-disc space-y-1 pl-5">
            <li>Comply with a legal obligation</li>
            <li>Protect and defend the rights or property of the Company</li>
            <li>Prevent or investigate possible wrongdoing in connection with the Service</li>
            <li>Protect the personal safety of Users of the Service or the public</li>
            <li>Protect against legal liability</li>
          </ul>
        </section>

        {/* Children’s Privacy */}
        <section className="space-y-3">
          <Heading level={2} fontSize="text-xl sm:text-2xl font-semibold">
            Children’s Privacy
          </Heading>
          <Text>
            Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable
            information from anyone under the age of 13. If You are a parent or guardian and You are aware that Your
            child has provided Us with Personal Data, please contact Us.
          </Text>
          <Text>
            If We become aware that We have collected Personal Data from anyone under the age of 13 without verification
            of parental consent, We take steps to remove that information from Our servers. If We need to rely on
            consent as a legal basis for processing Your information and Your country requires consent from a parent, We
            may require Your parent’s consent before We collect and use that information.
          </Text>
        </section>

        {/* Links to Other Websites */}
        <section className="space-y-3">
          <Heading level={2} fontSize="text-xl sm:text-2xl font-semibold">
            Links to Other Websites
          </Heading>
          <Text>
            Our Service may contain links to other websites that are not operated by Us. If You click on a third party
            link, You will be directed to that third party’s site. We strongly advise You to review the Privacy Policy
            of every site You visit.
          </Text>
          <Text>
            We have no control over and assume no responsibility for the content, privacy policies or practices of any
            third party sites or services.
          </Text>
        </section>

        {/* Changes to this Privacy Policy */}
        <section className="space-y-3">
          <Heading level={2} fontSize="text-xl sm:text-2xl font-semibold">
            Changes to this Privacy Policy
          </Heading>
          <Text>
            We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new
            Privacy Policy on this page and updating the “Last updated” date at the top of this Privacy Policy.
          </Text>
          <Text>
            You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy
            are effective when they are posted on this page.
          </Text>
        </section>

        {/* Contact Us */}
        <section className="space-y-3">
          <Heading level={2} fontSize="text-xl sm:text-2xl font-semibold">
            Contact Us
          </Heading>
          <Text>If you have any questions about this Privacy Policy, You can contact us:</Text>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              By email:{' '}
              <a href="mailto:taajaskhavda@gmail.com" className="underline">
                taajaskhavda@gmail.com
              </a>
            </li>
            <li>
              By visiting this page on our website:{' '}
              <a href="https://parswam.com/contact-us/" target="_blank" rel="noopener noreferrer" className="underline">
                https://parswam.com/contact-us/
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  )
}

export default Page
