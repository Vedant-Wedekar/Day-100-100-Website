import { Reveal } from '../lib/motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import { FiPlay } from 'react-icons/fi'
import 'swiper/css'
import { REVIEWS } from '../lib/content'

export default function Reviews() {
  return (
    <section id="reviews" className="section overflow-hidden">
      <div className="wrap">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">お客様の声 · Reviews</p>
          <h2 className="h-section mt-4 text-[color:var(--fg)]">Loved across cities</h2>
        </Reveal>
      </div>

      <Reveal className="mt-12">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={1.1}
          spaceBetween={16}
          loop
          autoplay={{ delay: 2600, disableOnInteraction: false, pauseOnMouseEnter: true }}
          breakpoints={{ 640: { slidesPerView: 2.1 }, 1024: { slidesPerView: 3.1, spaceBetween: 24 } }}
          className="!px-5"
        >
          {REVIEWS.map((r, i) => (
            <SwiperSlide key={r.name} className="!h-auto">
              <figure className="no-min flex h-full flex-col rounded-4xl border border-[color:var(--line)] bg-[color:var(--card)] p-7">
                {i % 2 === 0 && (
                  <span className="mb-4 grid h-11 w-11 place-items-center rounded-full bg-sakura/40 text-beni">
                    <FiPlay />
                  </span>
                )}
                <blockquote className="flex-1 text-[color:var(--fg)]">“{r.text}”</blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-[color:var(--fg)] font-display text-[color:var(--bg)]">
                    {r.name.charAt(0)}
                  </span>
                  <span>
                    <span className="block text-sm font-medium text-[color:var(--fg)]">{r.name}</span>
                    <span className="block text-xs text-[color:var(--fg-soft)]">{r.city}</span>
                  </span>
                </figcaption>
              </figure>
            </SwiperSlide>
          ))}
        </Swiper>
      </Reveal>
    </section>
  )
}
