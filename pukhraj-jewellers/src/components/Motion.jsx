import { motion } from "framer-motion";

// Scroll reveal wrapper used across every section.
export function Reveal({ children, delay = 0, y = 36, className = "", style }) {
  return (
    <motion.div
      className={className}
      style={style}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
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
export const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

// Section header: eyebrow + serif title with optional gold italic + sub.
export function SectionHead({ eyebrow, title, italic, sub, center }) {
  return (
    <Reveal className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      <span className={`eyebrow ${center ? "center" : ""}`}>{eyebrow}</span>
      <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl mt-4 leading-[1.03] text-ink">
        {title} {italic && <em className="gold-text not-italic italic font-medium">{italic}</em>}
      </h2>
      {sub && <p className="mt-5 text-ink/55 text-base sm:text-lg leading-relaxed font-light">{sub}</p>}
    </Reveal>
  );
}
