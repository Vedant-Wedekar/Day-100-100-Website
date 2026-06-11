import { motion } from 'framer-motion'
import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa'
import { BRAND } from '../lib/content'
import { scrollToId } from '../hooks/useLenis'

const waLink = `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(
  'Hello SAKURA! I would like to book a table.'
)}`

/** Desktop / tablet floating action buttons (bottom-right). */
export function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-5 z-[70] hidden flex-col gap-3 sm:flex">
      <motion.a
        href={waLink}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.4, type: 'spring', stiffness: 260, damping: 18 }}
        whileHover={{ scale: 1.08 }}
        className="grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-float"
      >
        <FaWhatsapp size={26} />
      </motion.a>
      <motion.a
        href={`tel:${BRAND.phone}`}
        aria-label="Call us"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.5, type: 'spring', stiffness: 260, damping: 18 }}
        whileHover={{ scale: 1.08 }}
        className="grid h-14 w-14 place-items-center rounded-full bg-beni text-white shadow-float"
      >
        <FaPhoneAlt size={19} />
      </motion.a>
    </div>
  )
}

/** Mobile-only sticky bottom CTA bar. */
export function MobileCTA() {
  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ delay: 1.4, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 bottom-0 z-[70] flex gap-2 p-3 sm:hidden"
      style={{ paddingBottom: 'max(0.75rem, env(safe-area-inset-bottom))' }}
    >
      <a
        href={waLink}
        target="_blank"
        rel="noreferrer"
        className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#25D366] text-white shadow-float"
        aria-label="WhatsApp"
      >
        <FaWhatsapp size={22} />
      </a>
      <button
        onClick={() => scrollToId('#reserve')}
        className="btn btn-primary h-12 flex-1 justify-center shadow-float"
      >
        Reserve a table · 予約
      </button>
    </motion.div>
  )
}
