import { motion, AnimatePresence } from "framer-motion";
import { FiX } from "react-icons/fi";
import { FaWhatsapp, FaRegHeart } from "react-icons/fa";
import { CONTACT } from "../data/content";

// Shared modal shell with backdrop + spring entrance.
function Shell({ open, onClose, children, wide }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div className="fixed inset-0 z-[80] grid place-items-center p-4"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <div className="absolute inset-0 bg-ink/55 backdrop-blur-sm" onClick={onClose} />
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 30, scale: 0.96 }}
            transition={{ type: "spring", damping: 26, stiffness: 240 }}
            className={`relative bg-ivory w-full ${wide ? "max-w-3xl" : "max-w-md"} max-h-[90vh] overflow-auto shadow-soft`}>
            <button onClick={onClose} aria-label="Close"
              className="absolute top-3 right-3 z-10 grid place-items-center h-10 w-10 rounded-full bg-ivory/80 hover:bg-sand transition-colors">
              <FiX size={20} />
            </button>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Product quick-view (frontend only).
export function QuickView({ product, onClose }) {
  return (
    <Shell open={!!product} onClose={onClose} wide>
      {product && (
        <div className="grid sm:grid-cols-2">
          <div className="aspect-square sm:aspect-auto overflow-hidden bg-cream">
            <img src={product.img} alt={product.name} className="h-full w-full object-cover" />
          </div>
          <div className="p-7 sm:p-9 flex flex-col">
            <span className="eyebrow">{product.tag} Collection</span>
            <h3 className="font-display text-3xl sm:text-4xl mt-3 leading-tight">{product.name}</h3>
            <p className="gold-text text-2xl font-medium mt-3">{product.price}</p>
            <p className="text-ink/55 font-light mt-4 leading-relaxed text-sm">
              Hand-finished in certified 18K gold with ethically sourced, VVS-clarity stones.
              Each piece arrives with a lifetime authenticity certificate and BIS hallmark.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-ink/70">
              <li>✦ BIS Hallmarked &amp; Certified</li>
              <li>✦ Lifetime Exchange &amp; Buyback</li>
              <li>✦ Complimentary Resizing</li>
              <li>✦ No-cost EMI Available</li>
            </ul>
            <div className="mt-auto pt-7 flex flex-col gap-3">
              <a href={`https://wa.me/${CONTACT.whatsapp}?text=I'm interested in the ${encodeURIComponent(product.name)}`}
                target="_blank" rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] text-white px-7 py-3.5 text-sm uppercase tracking-wide2">
                <FaWhatsapp size={18} /> Inquire on WhatsApp
              </a>
              <button className="btn-ghost"><FaRegHeart /> Add to Wishlist</button>
            </div>
          </div>
        </div>
      )}
    </Shell>
  );
}

// Ring size guide modal.
const SIZES = [
  ["6", "46.8", "14.9"], ["8", "48.0", "15.3"], ["10", "49.3", "15.7"],
  ["12", "51.5", "16.4"], ["14", "53.1", "16.9"], ["16", "54.4", "17.3"],
  ["18", "57.0", "18.1"], ["20", "59.5", "18.9"], ["22", "61.9", "19.7"],
];
export function RingSizeModal({ open, onClose }) {
  return (
    <Shell open={open} onClose={onClose}>
      <div className="p-7 sm:p-9">
        <span className="eyebrow">Find Your Fit</span>
        <h3 className="font-display text-3xl mt-3">Ring Size Guide</h3>
        <p className="text-ink/55 font-light text-sm mt-3">
          Measure the inner diameter of a ring that fits, then match it below. Visit us for a precise in-store sizing.
        </p>
        <div className="mt-6 overflow-hidden rounded-lg border border-ink/10">
          <table className="w-full text-sm">
            <thead className="bg-ink text-ivory text-xs uppercase tracking-wide2">
              <tr><th className="py-2.5 px-3 text-left">Indian</th><th className="py-2.5 px-3 text-left">Circ. (mm)</th><th className="py-2.5 px-3 text-left">Dia. (mm)</th></tr>
            </thead>
            <tbody>
              {SIZES.map((r, i) => (
                <tr key={r[0]} className={i % 2 ? "bg-cream/60" : "bg-ivory"}>
                  <td className="py-2 px-3 font-medium">{r[0]}</td><td className="py-2 px-3 text-ink/70">{r[1]}</td><td className="py-2 px-3 text-ink/70">{r[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <a href={`https://wa.me/${CONTACT.whatsapp}`} target="_blank" rel="noreferrer" className="btn-gold w-full mt-6">Request Free Sizer Kit</a>
      </div>
    </Shell>
  );
}
