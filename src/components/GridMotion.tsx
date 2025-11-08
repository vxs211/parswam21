'use client';

import { useEffect, useRef, FC, ReactNode } from 'react';
import { gsap } from 'gsap';
import { ArrowUpRightIcon } from '@heroicons/react/24/solid'
import { Button } from './button'
import { Heading } from './heading'

interface GridMotionProps {
  items?: (string | ReactNode)[];
  gradientColor?: string;
}

const GridMotion: FC<GridMotionProps> = ({ items = [], gradientColor = 'black' }) => {
  const gridRef = useRef<HTMLDivElement>(null);
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);
  // Initialize without touching window during SSR; set on mount.
  const mouseXRef = useRef<number>(0);

  const totalItems = 28;
  const defaultItems = Array.from({ length: totalItems }, (_, index) => `Item ${index + 1}`);
  const combinedItems = items.length > 0 ? items.slice(0, totalItems) : defaultItems;

  useEffect(() => {
    // Set initial mouse X to center of viewport on client
    if (typeof window !== 'undefined') {
      mouseXRef.current = window.innerWidth / 2;
    }
    gsap.ticker.lagSmoothing(0);

    const handleMouseMove = (e: MouseEvent): void => {
      mouseXRef.current = e.clientX;
    };

    const updateMotion = (): void => {
      const maxMoveAmount = 300;
      const baseDuration = 0.8;
      const inertiaFactors = [0.6, 0.4, 0.3, 0.2];

      rowRefs.current.forEach((row, index) => {
        if (row) {
          const direction = index % 2 === 0 ? 1 : -1;
          const vw = typeof window !== 'undefined' ? window.innerWidth : 1;
          const moveAmount = ((mouseXRef.current / vw) * maxMoveAmount - maxMoveAmount / 2) * direction;

          gsap.to(row, {
            x: moveAmount,
            duration: baseDuration + inertiaFactors[index % inertiaFactors.length],
            ease: 'power3.out',
            overwrite: 'auto'
          });
        }
      });
    };

    const removeAnimationLoop = gsap.ticker.add(updateMotion);
    if (typeof window !== 'undefined') {
      window.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('mousemove', handleMouseMove);
      }
      removeAnimationLoop();
    };
  }, []);

  return (
    <div ref={gridRef} className="w-full overflow-hidden">
      <section
        className="relative flex h-[65vh] w-full items-center justify-center overflow-hidden sm:h-[75vh] lg:h-[85vh]"
        style={{
          background: `radial-gradient(circle, ${gradientColor} 0%, transparent 100%)`
        }}
      >
        <div className="absolute inset-0 z-[4] pointer-events-none bg-[length:250px]"></div>
        <div className="relative z-[2] grid h-[120vh] w-[120vw] origin-center rotate-[-15deg] grid-rows-4 grid-cols-1 gap-4 flex-none">
          {Array.from({ length: 4 }, (_, rowIndex) => (
            <div
              key={rowIndex}
              className="grid gap-4 grid-cols-7"
              style={{ willChange: 'transform, filter' }}
              ref={el => {
                if (el) rowRefs.current[rowIndex] = el;
              }}
            >
              {Array.from({ length: 7 }, (_, itemIndex) => {
                const content = combinedItems[rowIndex * 7 + itemIndex];
                return (
                  <div key={itemIndex} className="relative">
                    <div className="relative w-full h-full overflow-hidden rounded-[10px] bg-[#111] flex items-center justify-center text-white text-[1.5rem]">
                      {typeof content === 'string' && content.startsWith('http') ? (
                        <div
                          className="w-full h-full bg-cover bg-center absolute top-0 left-0"
                          style={{ backgroundImage: `url(${content})` }}
                        ></div>
                      ) : (
                        <div className="p-4 text-center z-[1]">{content}</div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
        {/* Center overlay heading (optional visual anchor) */}
        <div className="pointer-events-none absolute inset-0 z-[3] flex items-center justify-center">
          <Heading fontSize="text-4xl/none md:text-5xl/none lg:text-6xl/none font-semibold text-white opacity-70">
            View Collection
          </Heading>
        </div>

        {/* Bottom CTA like hero */}
        <div className="container absolute bottom-10 left-1/2 z-[5] max-w-3xl -translate-x-1/2 sm:bottom-14">
          <Button
            href="/collections/all"
            color="white"
            className="mt-6 w-full cursor-pointer !border-white py-5 font-medium tracking-wide underline sm:py-6"
          >
            VIEW COLLECTION
            <div className="absolute right-1.5 flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 text-white sm:h-12 sm:w-12">
              <ArrowUpRightIcon className="h-4 w-4" />
            </div>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default GridMotion;
