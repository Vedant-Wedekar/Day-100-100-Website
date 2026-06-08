import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { FaQuoteLeft } from "react-icons/fa";
import { SectionHead } from "../components/Motion";
import { TRANSFORMATIONS } from "../data/content";

// Draggable before/after comparison slider.
function Compare({ before, after }) {
  const [pos, setPos] = useState(50);
  const ref = useRef(null);
  const move = (clientX) => {
    const r = ref.current.getBoundingClientRect();
    setPos(Math.min(100, Math.max(0, ((clientX - r.left) / r.width) * 100)));
  };
  return (
    <div ref={ref} className="relative aspect-[4/5] rounded-2xl overflow-hidden select-none cursor-ew-resize"
      onMouseMove={(e) => e.buttons === 1 && move(e.clientX)}
      onTouchMove={(e) => move(e.touches[0].clientX)}
    >
      <img src={after} alt="after" className="absolute inset-0 h-full w-full object-cover" draggable={false} />
      <span className="absolute top-3 right-3 z-10 text-[10px] tracking-widest uppercase glass px-3 py-1 rounded-full text-lime">After</span>
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
        <img src={before} alt="before" className="absolute inset-0 h-full w-full object-cover grayscale" draggable={false}
          style={{ width: ref.current ? ref.current.offsetWidth : "100%", maxWidth: "none" }} />
        <span className="absolute top-3 left-3 text-[10px] tracking-widest uppercase glass px-3 py-1 rounded-full text-bone/70">Before</span>
      </div>
      <div className="absolute top-0 bottom-0 w-0.5 bg-lime" style={{ left: `${pos}%` }}>
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 h-9 w-9 rounded-full bg-lime grid place-items-center text-ink text-xs font-bold shadow-glow">⇆</div>
      </div>
    </div>
  );
}

export default function Transformations() {
  return (
    <section id="results" className="relative section-pad py-24 sm:py-32">
      <div className="container-x">
        <SectionHead center eyebrow="Real Results" title="Transformations That" accent="Speak"
          sub="Drag the slider to see the work. These are real members, real timelines, real grit." />

        <div className="mt-14 max-w-5xl mx-auto">
          <Swiper modules={[EffectFade, Pagination, Autoplay]} effect="fade" pagination={{ clickable: true }}
            autoplay={{ delay: 5500, disableOnInteraction: false }} loop className="!pb-12">
            {TRANSFORMATIONS.map((t) => (
              <SwiperSlide key={t.name}>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <Compare before={t.before} after={t.after} />
                  <motion.div
                    initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                  >
                    <FaQuoteLeft className="text-lime" size={32} />
                    <p className="mt-5 text-xl sm:text-2xl leading-relaxed font-light">"{t.quote}"</p>
                    <div className="mt-6 flex items-center gap-4">
                      <div>
                        <p className="font-head text-2xl uppercase">{t.name}</p>
                        <p className="text-sm text-bone/50">{t.weeks} program</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
