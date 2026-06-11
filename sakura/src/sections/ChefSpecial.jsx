import { Reveal } from '../lib/motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, EffectCoverflow } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'
import { SPECIALS } from '../lib/content'

const grads = [
  'from-beni to-kohaku',
  'from-sora to-matchadeep',
  'from-sumi to-beni',
  'from-kohaku to-sakura',
  'from-matcha to-kogane',
]

export default function ChefSpecial() {
  return (
    <section id="special" className="section overflow-hidden bg-[color:var(--bg-soft)]">
      <div className="wrap">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">料理長のおすすめ · Chef's Table</p>
          <h2 className="h-section mt-4 text-[color:var(--fg)]">Tonight's specials</h2>
          <p className="mx-auto mt-5 max-w-md text-[color:var(--fg-soft)]">
            Hand-picked by our head chef, prepared in limited counts each evening.
          </p>
        </Reveal>
      </div>

      <Reveal className="mt-12">
        <Swiper
          modules={[Autoplay, Pagination, EffectCoverflow]}
          effect="coverflow"
          grabCursor
          centeredSlides
          loop
          slidesPerView={1.15}
          spaceBetween={16}
          autoplay={{ delay: 3200, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          coverflowEffect={{ rotate: 0, stretch: 0, depth: 120, modifier: 1.4, slideShadows: false }}
          breakpoints={{
            640: { slidesPerView: 1.8, spaceBetween: 24 },
            1024: { slidesPerView: 2.6, spaceBetween: 28 },
          }}
          className="!px-5 !pb-14"
        >
          {SPECIALS.map((s, i) => (
            <SwiperSlide key={s.en}>
              <div
                className={`no-min relative flex h-[360px] flex-col justify-end overflow-hidden rounded-4xl bg-gradient-to-br p-7 text-white shadow-float sm:h-[420px] ${grads[i % grads.length]}`}
              >
                <span className="absolute right-5 top-5 font-jp text-6xl text-white/20 sm:text-7xl">
                  {s.jp.charAt(0)}
                </span>
                <span className="font-jp text-sm text-white/85">{s.jp}</span>
                <h3 className="mt-1 font-display text-3xl leading-tight sm:text-4xl">{s.en}</h3>
                <p className="mt-3 max-w-xs text-sm text-white/85">{s.desc}</p>
                <span className="mt-5 inline-flex w-fit rounded-full bg-white/20 px-4 py-1.5 text-sm font-medium backdrop-blur">
                  {s.price}
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Reveal>
    </section>
  )
}
