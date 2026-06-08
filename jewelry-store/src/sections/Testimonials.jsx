import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { SectionHead } from "../components/Motion";
import { TESTIMONIALS } from "../data/content";

export default function Testimonials() {
  return (
    <section className="relative section-pad py-24 sm:py-32 bg-ivory overflow-hidden">
      <div className="container-x">
        <SectionHead center eyebrow="Trusted by Thousands" title="Words from our" italic="patrons"
          sub="Five generations of families have chosen Aurelia for life's most precious moments." />

        <div className="mt-14">
          <Swiper modules={[Autoplay, Pagination]} spaceBetween={24} pagination={{ clickable: true }} loop
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            breakpoints={{ 0: { slidesPerView: 1 }, 768: { slidesPerView: 2 }, 1100: { slidesPerView: 3 } }}
            className="!pb-14">
            {TESTIMONIALS.map((t) => (
              <SwiperSlide key={t.name}>
                <div className="card-luxe rounded-2xl p-7 h-full hover:border-gold/30 hover:shadow-soft">
                  <div className="flex items-center justify-between">
                    <FaQuoteLeft className="text-gold/40" size={28} />
                    <div className="flex gap-0.5 text-gold">{Array.from({ length: 5 }).map((_, i) => <FaStar key={i} size={12} />)}</div>
                  </div>
                  <p className="mt-5 text-ink/75 font-light leading-relaxed">"{t.text}"</p>
                  <div className="mt-6 flex items-center gap-3 pt-5 border-t border-ink/8">
                    <img src={t.img} alt={t.name} className="h-11 w-11 rounded-full object-cover" loading="lazy" />
                    <div>
                      <p className="font-display text-lg leading-none">{t.name}</p>
                      <p className="text-xs text-ink/45 mt-1 tracking-wide2 uppercase">{t.city}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
