import { AiIdeaIcon, BoatIcon, CoinsDollarIcon, Mailbox01Icon, Plant03Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import clsx from 'clsx'
import { Text } from '../text'

const data = [
  {
    id: 1,
    title: 'MADE TO LAST',
    description:
      'Quality That Stays With You<br/>Our jeans are crafted with premium denim and durable stitching — designed to look great and last for years.',
    icon: AiIdeaIcon,
  },
  {
    id: 2,
    title: 'PAN-INDIA SHIPPING',
    description:
      'Fast Delivery, Anywhere<br/>Get your jeans delivered quickly and reliably across India, right to your doorstep.',
    icon: BoatIcon,
  },
  {
    id: 3,
    title: '5-STAR SUPPORT',
    description:
      'Here Whenever You Need Us<br/>Questions about fit, size, or care? Our support team is always ready to help at info@parswam.com',
    icon: Mailbox01Icon,
  },
  {
    id: 4,
    title: 'EASY PAY',
    description:
      'Smooth, Secure & Super Convenient<br/>Pay online or choose Cash on Delivery (COD) — every checkout stays quick, safe, and hassle-free.',
    icon: CoinsDollarIcon,
  },
  {
    id: 5,
    title: 'EARTH-FRIENDLY DENIM',
    description:
      'Good for You & the Planet<br/>Our jeans are made with eco-conscious processes and sustainable materials, helping reduce environmental impact.',
    icon: Plant03Icon,
  },
]

interface FeatureSection4Props {
  className?: string
}

const FeatureSection4 = ({ className }: FeatureSection4Props) => {
  return (
    <div className={clsx('grid grid-cols-1 gap-y-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5', className)}>
      {data.map((item, index, arr) => (
        <div
          key={item.id}
          className={clsx(
            'flex-col gap-2 border border-zinc-100 border-l-transparent px-4 py-5 sm:px-8 sm:py-10',
            index === arr.length - 1 ? 'sm:border-r-transparent' : 'bg-white'
          )}
        >
          <Text className="text-zinc-500">({index + 1})</Text>
          <Text className="mt-2 font-medium">{item.title}</Text>
          <HugeiconsIcon icon={item.icon} size={40} className="mt-10 text-zinc-700 sm:mt-14" strokeWidth={1} />
          <Text
            className="mt-4 text-zinc-500 normal-case"
            dangerouslySetInnerHTML={{ __html: item.description }}
          ></Text>
        </div>
      ))}
    </div>
  )
}

export default FeatureSection4
