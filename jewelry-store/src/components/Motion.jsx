import { motion } from "framer-motion";

// Scroll reveal wrapper used across every section.
export function Reveal({ children, delay = 0, y = 38, className = "" }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
export const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

// Elegant section header: eyebrow + serif title + optional subtitle.
export function SectionHead({ eyebrow, title, italic, sub, center }) {
  return (
    <Reveal className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      <span className={`eyebrow ${center ? "center" : ""}`}>{eyebrow}</span>
      <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl mt-4 leading-[1.02] text-ink">
        {title} {italic && <em className="gold-text not-italic font-medium italic">{italic}</em>}
      </h2>
      {sub && <p className="mt-5 text-ink/55 text-base sm:text-lg leading-relaxed font-light">{sub}</p>}
    </Reveal>
  );
}
