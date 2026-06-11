import { motion } from 'framer-motion'

// ---- Shared variants ---------------------------------------------------
export const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 0.9, 0.3, 1] } },
}

export const stagger = (amount = 0.1) => ({
  hidden: {},
  show: { transition: { staggerChildren: amount } },
})

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  show: { opacity: 1, scale: 1, transition: { duration: 1, ease: [0.22, 0.9, 0.3, 1] } },
}

// ---- Reveal: animates children in when scrolled into view --------------
export function Reveal({ children, className = '', delay = 0, y = 36, as = 'div', once = true, ...rest }) {
  const Tag = motion[as] || motion.div
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: '0px 0px -12% 0px' }}
      transition={{ duration: 0.8, ease: [0.22, 0.9, 0.3, 1], delay }}
      {...rest}
    >
      {children}
    </Tag>
  )
}

// ---- StaggerGroup: parent that staggers Reveal/StaggerItem children ----
export function StaggerGroup({ children, className = '', amount = 0.1, once = true, ...rest }) {
  return (
    <motion.div
      className={className}
      variants={stagger(amount)}
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin: '0px 0px -12% 0px' }}
      {...rest}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className = '', as = 'div', ...rest }) {
  const Tag = motion[as] || motion.div
  return (
    <Tag className={className} variants={fadeUp} {...rest}>
      {children}
    </Tag>
  )
}

// ---- WordReveal: hero-style line-by-line masked word reveal ------------
export function WordReveal({ words = [], className = '', wordClass = () => '' }) {
  return (
    <motion.h1
      className={className}
      initial="hidden"
      animate="show"
      variants={stagger(0.08)}
    >
      {words.map((w, i) => (
        <span className="line" key={i}>
          <motion.span
            className={`word ${wordClass(w, i)}`}
            variants={{
              hidden: { y: '120%' },
              show: { y: '0%', transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
            }}
          >
            {w}
          </motion.span>
        </span>
      ))}
    </motion.h1>
  )
}
