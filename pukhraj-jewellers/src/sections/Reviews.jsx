import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { SectionHead, Reveal } from "../components/Motion";
import { REVIEWS, STATS } from "../data/content";

function Counter({ value, suffix }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const c = animate(0, value, { duration: 2, ease: [0.22, 1, 0.36, 1], onUpdate: (v) => setN(Math.floor(v)) });
    return () => c.stop();
  }, [inView, value]);
  return <span ref={ref}>{n.toLocaleString("en-IN")}{suffix}</span>;
}

export default function Reviews() {
  return (
    <section id="reviews" className="relative section-pad py-24 sm:py-32 bg-white overflow-hidden">
      <div className="container-x">
        <SectionHead center eyebrow="Why Customers Trust Us" title="Loved across" italic="Vidarbha & beyond"
          sub="4.9★ from thousands of happy families — wedding stories, daily-wear delight and real lightweight experiences." />

        {/* reviews carousel */}
        <div className="mt-14">
          <Swiper modules={[Autoplay, Pagination]} spaceBetween={24} pagination={{ clickable: true }} loop
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            breakpoints={{ 0: { slidesPerView: 1 }, 768: { slidesPerView: 2 }, 1100: { slidesPerView: 3 } }} className="!pb-14">
            {REVIEWS.map((r) => (
              <SwiperSlide key={r.name}>
                <div className="card-luxe rounded-2xl p-7 h-full hover:border-gold/30 hover:shadow-soft">
                  <div className="flex items-center justify-between">
                    <FaQuoteLeft className="text-gold/40" size={26} />
                    <div className="flex gap-0.5 text-gold">{Array.from({ length: 5 }).map((_, i) => <FaStar key={i} size={12} />)}</div>
                  </div>
                  <p className="mt-5 text-ink/75 font-light leading-relaxed">"{r.text}"</p>
                  <div className="mt-6 flex items-center gap-3 pt-5 border-t border-ink/8">
                    <img src={r.img} alt={r.name} className="h-11 w-11 rounded-full object-cover" loading="lazy" />
                    <div>
                      <p className="font-display text-lg leading-none">{r.name}</p>
                      <p className="text-xs text-ink/45 mt-1 tracking-wide2 uppercase">{r.city}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* trust stats */}
        <div className="mt-12">
          <div className="hair mb-12" />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {STATS.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.1} className="text-center">
                <p className="font-display text-4xl sm:text-5xl lg:text-6xl gold-text"><Counter value={s.value} suffix={s.suffix} /></p>
                <p className="mt-2 text-[11px] sm:text-xs uppercase tracking-wide2 text-ink/50">{s.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
