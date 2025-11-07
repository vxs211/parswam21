import Image from 'next/image'
import clsx from 'clsx'

export function Logo({ className, ...props }: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div className={clsx(className)} {...props}>
      <Image 
        src="/images/parswamB.svg" 
        alt="ParsWam Logo" 
        width={160} 
        height={48}
        priority
      />
    </div>
  )
}
