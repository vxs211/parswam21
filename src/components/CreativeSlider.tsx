'use client'

import { useEffect, useState } from 'react'
import type { Swiper as SwiperType } from 'swiper'
import { Keyboard, Mousewheel, Navigation, Pagination, Thumbs } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/thumbs'

interface SlideData {
  id: number
  background: string
  link: string
  text: {
    subtitle: string
    title: string
  }
}

interface CreativeSliderProps {
  data: SlideData[]
}

export default function CreativeSlider({ data }: CreativeSliderProps) {
  const [galleryImg, setGalleryImg] = useState<SwiperType | null>(null)
  const [galleryText, setGalleryText] = useState<SwiperType | null>(null)

  useEffect(() => {
    // Load background images
    const backgroudImages = document.querySelectorAll<HTMLElement>('[data-background]')
    if (backgroudImages.length > 0) {
      backgroudImages.forEach((element) => {
        const image = element.dataset.background
        if (image) {
          element.style.backgroundImage = `url('${image}')`
        }
      })
    }
  }, [])

  useEffect(() => {
    if (galleryImg && galleryText) {
      const handleImgChange = () => {
        galleryText.slideTo(galleryImg.activeIndex)
      }
      const handleTextChange = () => {
        galleryImg.slideTo(galleryText.activeIndex)
      }

      galleryImg.on('slideChangeTransitionStart', handleImgChange)
      galleryText.on('transitionStart', handleTextChange)

      return () => {
        galleryImg.off('slideChangeTransitionStart', handleImgChange)
        galleryText.off('transitionStart', handleTextChange)
      }
    }
  }, [galleryImg, galleryText])

  return (
    <header className="relative h-screen w-full overflow-hidden bg-black">
      {/* Gallery Images */}
      <div className="gallery-img absolute inset-0 h-full w-full">
        <Swiper
          modules={[Navigation, Keyboard, Mousewheel, Pagination, Thumbs]}
          onSwiper={setGalleryImg}
          spaceBetween={0}
          centeredSlides={true}
          loopedSlides={4}
          mousewheel={true}
          speed={1500}
          navigation={{
            nextEl: '.half-slider-controls .swiper-button-next',
            prevEl: '.half-slider-controls .swiper-button-prev',
          }}
          pagination={{
            el: '.half-slider-pagination',
            clickable: true,
            renderBullet: function (_, className) {
              return (
                '<span class="' +
                className +
                '">' +
                '<svg class="fp-arc-loader" width="16" height="16" viewBox="0 0 16 16">' +
                '<circle class="path" cx="8" cy="8" r="5.5" fill="none" transform="rotate(-90 8 8)" stroke="#FFF"' +
                'stroke-opacity="1" stroke-width="1px"></circle>' +
                '<circle cx="8" cy="8" r="3" fill="#FFF"></circle>' +
                '</svg></span>'
              )
            },
          }}
          keyboard={{
            enabled: true,
          }}
          thumbs={{
            swiper: galleryText,
          }}
          className="h-full w-full"
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <div
                className="bg-img relative h-full w-full bg-cover bg-center bg-no-repeat"
                data-background={item.background}
                data-overlay-dark="3"
              >
                <a href={item.link} className="absolute inset-0 z-10" aria-label={item.text.title}></a>
                {/* Dark overlay */}
                <div className="pointer-events-none absolute inset-0 bg-black/30"></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Gallery Text */}
      <div className="gallery-text pointer-events-none absolute inset-0 z-20 flex h-full w-full items-center">
        <Swiper
          modules={[Mousewheel, Thumbs]}
          onSwiper={setGalleryText}
          spaceBetween={100}
          centeredSlides={true}
          slidesPerView={2}
          touchRatio={0.2}
          slideToClickedSlide={true}
          loopedSlides={4}
          mousewheel={true}
          speed={1500}
          breakpoints={{
            0: {
              spaceBetween: 10,
              slidesPerView: 1,
              centeredSlides: false,
            },
            640: {
              spaceBetween: 30,
              slidesPerView: 1,
              centeredSlides: false,
            },
            768: {
              spaceBetween: 50,
              slidesPerView: 1,
              centeredSlides: false,
            },
            1024: {
              spaceBetween: 100,
              slidesPerView: 2,
              centeredSlides: true,
            },
          }}
          className="h-full max-h-full w-full"
        >
          {data.map((item) => (
            <SwiperSlide
              key={item.id}
              className="flex h-full max-h-full w-[45%] flex-shrink-0 items-center sm:w-full md:w-full lg:w-[45%]"
            >
              <div className="text px-4 text-white">
                <h6 className="mb-2 text-sm uppercase tracking-wider opacity-70 md:text-base">
                  <span className="font-bold">{item.text.subtitle}</span>
                </h6>
                <h4 className="text-3xl font-light leading-tight md:text-5xl lg:text-6xl">{item.text.title}</h4>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Swiper Controls */}
      <div className="half-slider-controls absolute bottom-20 left-0 right-0 z-30 flex items-center justify-center gap-8">
        <div className="swiper-button-prev swiper-nav-ctrl flex cursor-pointer items-center gap-3 text-white transition-opacity hover:opacity-80">
          <div>
            <i className="fas fa-chevron-left text-xl"></i>
          </div>
          <div>
            <span className="text-sm uppercase tracking-wide">Prev Slide</span>
          </div>
        </div>
        <div className="swiper-button-next swiper-nav-ctrl flex cursor-pointer items-center gap-3 text-white transition-opacity hover:opacity-80">
          <div>
            <span className="text-sm uppercase tracking-wide">Next Slide</span>
          </div>
          <div>
            <i className="fas fa-chevron-right text-xl"></i>
          </div>
        </div>
      </div>

      {/* Swiper Pagination */}
      <div className="half-slider-pagination absolute bottom-8 left-1/2 z-30 -translate-x-1/2"></div>
    </header>
  )
}
