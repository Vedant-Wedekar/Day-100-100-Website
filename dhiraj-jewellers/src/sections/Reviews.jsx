import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar, FaArrowUp, FaArrowDown } from "react-icons/fa";
import { SectionHead, stagger, fadeUp } from "../components/Motion";
import { REVIEWS, RATES } from "../data/content";

const RATE_CARDS = [
  { ...RATES.gold22, accent: "from-gold to-goldLt" },
  { ...RATES.gold24, accent: "from-wine to-maroon" },
  { ...RATES.silver, accent: "from-emerald to-emLt" },
];

export default function Reviews() {
  const today = new Date().toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });
  return (
    <section id="reviews" className="relative section-pad py-24 sm:py-32 bg-maroon/20 overflow-x-hidden">
      <div className="container-x">
        <SectionHead center eyebrow="Customer Love" title="Cherished by" italic="thousands"
          sub="4.6★ from nearly 300 reviews — families who've trusted us for generations." />

        <div className="mt-14">
          <Swiper modules={[Autoplay, Pagination]} spaceBetween={24} pagination={{ clickable: true }} loop
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            breakpoints={{ 0: { slidesPerView: 1 }, 768: { slidesPerView: 2 }, 1100: { slidesPerView: 3 } }} className="!pb-14">
            {REVIEWS.map((r) => (
              <SwiperSlide key={r.name}>
                <div className="card-royal rounded-sm p-7 h-full hover:border-gold/40">
                  <div className="flex items-center justify-between">
                    <FaQuoteLeft className="text-gold/40" size={26} />
                    <div className="flex gap-0.5 text-gold">{Array.from({ length: 5 }).map((_, i) => <FaStar key={i} size={12} />)}</div>
                  </div>
                  <p className="mt-5 text-cream/75 font-light leading-relaxed">"{r.text}"</p>
                  <div className="mt-6 flex items-center gap-3 pt-5 border-t border-gold/15">
                    <img src={r.img} alt={r.name} className="h-11 w-11 rounded-full object-cover" loading="lazy" />
                    <div>
                      <p className="font-display text-lg leading-none text-cream">{r.name}</p>
                      <p className="text-xs text-cream/45 mt-1 tracking-wide2 uppercase">{r.city}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* gold rates */}
        <div className="mt-12">
          <div className="hair mb-10" />
          <p className="text-center eyebrow center justify-center mb-8">Today's Rates · {today}</p>
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }}
            className="grid sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {RATE_CARDS.map((c) => (
              <motion.div key={c.label} variants={fadeUp} whileHover={{ y: -6 }} className="relative rounded-sm p-6 overflow-hidden border border-gold/20 shadow-royal">
                <div className={`absolute inset-0 -z-10 bg-gradient-to-br ${c.accent} opacity-90`} />
                <p className="text-xs uppercase tracking-luxe text-night/70">{c.label}</p>
                <p className="font-display text-4xl mt-3 text-night">{c.value}<span className="text-base font-body">{c.unit}</span></p>
                <p className={`mt-2 inline-flex items-center gap-1.5 text-xs rounded-full px-2.5 py-1 bg-night/15 text-night`}>
                  {c.up ? <FaArrowUp size={10} /> : <FaArrowDown size={10} />} {c.change}
                </p>
              </motion.div>
            ))}
          </motion.div>
          <p className="text-center text-[11px] text-cream/40 mt-4">*Indicative Nagpur rates. Visit us for today's best price.</p>
        </div>
      </div>
    </section>
  );
}
