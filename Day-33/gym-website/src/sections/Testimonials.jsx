import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaStar } from "react-icons/fa";
import { SectionHead } from "../components/Motion";
import { TESTIMONIALS } from "../data/content";

export default function Testimonials() {
  return (
    <section className="relative section-pad py-24 sm:py-32 bg-char/40 overflow-hidden">
      <div className="container-x">
        <SectionHead center eyebrow="Testimonials" title="Loved By Our" accent="Members"
          sub="Don't take our word for it — hear it straight from the people who train here." />

        <div className="mt-14">
          <Swiper modules={[Autoplay, Pagination]} spaceBetween={20}
            pagination={{ clickable: true }} loop
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            breakpoints={{ 0: { slidesPerView: 1.05 }, 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
            className="!pb-14">
            {TESTIMONIALS.map((t) => (
              <SwiperSlide key={t.name}>
                <div className="glass rounded-2xl p-7 h-full hover:border-lime/40 transition-colors">
                  <div className="flex gap-1 text-lime">
                    {Array.from({ length: 5 }).map((_, i) => <FaStar key={i} size={14} />)}
                  </div>
                  <p className="mt-4 text-bone/80 leading-relaxed text-sm">"{t.text}"</p>
                  <div className="mt-6 flex items-center gap-3">
                    <img src={t.img} alt={t.name} className="h-11 w-11 rounded-full object-cover" />
                    <div>
                      <p className="font-semibold text-sm">{t.name}</p>
                      <p className="text-xs text-bone/45">{t.role}</p>
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
