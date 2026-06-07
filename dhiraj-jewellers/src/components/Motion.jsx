import { motion } from "framer-motion";

export function Reveal({ children, delay = 0, y = 36, className = "", style }) {
  return (
    <motion.div
      className={className}
      style={style}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.09 } } };
export const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

// Section heading with an ornamental divider motif.
export function SectionHead({ eyebrow, title, italic, sub, center }) {
  return (
    <Reveal className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      <span className={`eyebrow ${center ? "center" : ""}`}>{eyebrow}</span>
      <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl mt-4 leading-[1.05] text-cream">
        {title} {italic && <em className="gold-text not-italic italic font-medium">{italic}</em>}
      </h2>
      {center && (
        <div className="mt-5 flex items-center justify-center gap-2 text-gold/70">
          <span className="h-px w-10 bg-gold/40" /> <span className="text-xs">✦</span> <span className="h-px w-10 bg-gold/40" />
        </div>
      )}
      {sub && <p className="mt-4 text-cream/60 text-base sm:text-lg leading-relaxed font-light">{sub}</p>}
    </Reveal>
  );
}
