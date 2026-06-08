import { motion } from "framer-motion";

// Reveal-on-scroll wrapper used across every section.
export function Reveal({ children, delay = 0, y = 40, className = "" }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

// Stagger container + item, for grids/lists.
export const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
export const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

// Section heading block — eyebrow + title + optional kicker.
export function SectionHead({ eyebrow, title, accent, sub, center }) {
  return (
    <Reveal className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-[0.25em] text-lime uppercase">
        <span className="h-px w-8 bg-lime" /> {eyebrow}
      </span>
      <h2 className="font-head text-4xl sm:text-5xl lg:text-6xl mt-4 leading-[0.95] uppercase">
        {title} {accent && <span className="grad-text">{accent}</span>}
      </h2>
      {sub && <p className="mt-5 text-bone/60 text-base sm:text-lg leading-relaxed">{sub}</p>}
    </Reveal>
  );
}
