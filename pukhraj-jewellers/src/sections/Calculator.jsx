import { useState } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { SectionHead, Reveal } from "../components/Motion";
import { RATES, CONTACT } from "../data/content";

const TYPES = [
  { name: "Necklace / Haar", trad: 40 },
  { name: "Bangles (pair)", trad: 32 },
  { name: "Mangalsutra", trad: 16 },
  { name: "Earrings", trad: 10 },
  { name: "Bridal Set", trad: 60 },
];
const GOLD_PER_G = 7142; // from RATES.gold

export default function Calculator() {
  const [typeIdx, setTypeIdx] = useState(4);
  const [saving, setSaving] = useState(55); // % lighter

  const type = TYPES[typeIdx];
  const tradW = type.trad;
  const lightW = +(tradW * (1 - saving / 100)).toFixed(1);
  const gramsSaved = +(tradW - lightW).toFixed(1);
  const moneySaved = Math.round(gramsSaved * GOLD_PER_G);
  const inr = (n) => "₹ " + n.toLocaleString("en-IN");

  // bar widths
  const lightPct = Math.max(8, (lightW / tradW) * 100);

  return (
    <section id="calculator" className="relative section-pad py-24 sm:py-32 bg-white">
      <div className="container-x grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div>
          <SectionHead eyebrow="Smart Savings Tool" title="See how much gold" italic="you'll save."
            sub="Pick a jewellery type and slide to your lightweight preference. Watch the gold weight — and the cost — drop instantly." />

          {/* type selector */}
          <div className="mt-8">
            <p className="text-xs uppercase tracking-wide2 text-ink/45 mb-3">Jewellery Type</p>
            <div className="flex flex-wrap gap-2">
              {TYPES.map((t, i) => (
                <button key={t.name} onClick={() => setTypeIdx(i)}
                  className={`rounded-full px-4 py-2 text-xs tracking-wide2 transition-all ${typeIdx === i ? "text-white shadow-gold" : "text-ink/60 border border-ink/15 hover:border-gold"}`}
                  style={typeIdx === i ? { background: "linear-gradient(110deg,#c39b4e,#dba38a)" } : {}}>
                  {t.name}
                </button>
              ))}
            </div>
          </div>

          {/* slider */}
          <div className="mt-7">
            <div className="flex justify-between text-xs uppercase tracking-wide2 text-ink/45 mb-2">
              <span>Lightweight Level</span><span className="text-gold font-semibold">{saving}% lighter</span>
            </div>
            <input type="range" min="30" max="65" value={saving} onChange={(e) => setSaving(+e.target.value)}
              className="w-full accent-gold cursor-pointer" style={{ accentColor: "#c39b4e" }} />
            <div className="flex justify-between text-[10px] text-ink/35 mt-1"><span>30%</span><span>65%</span></div>
          </div>
        </div>

        {/* result card */}
        <Reveal delay={0.1}>
          <div className="relative rounded-3xl p-8 sm:p-10 glass shadow-luxe overflow-hidden">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-rose-grad opacity-30 blur-2xl" />
            <p className="eyebrow">Your Estimate</p>
            <h3 className="font-display text-2xl mt-2">{type.name}</h3>

            {/* bars */}
            <div className="mt-7 space-y-5">
              <div>
                <div className="flex justify-between text-sm mb-1.5"><span className="text-ink/55">Traditional</span><span className="font-semibold text-ink/70">{tradW} g</span></div>
                <div className="h-3 rounded-full bg-ink/10 overflow-hidden"><motion.div className="h-full rounded-full bg-ink/30" initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 0.6 }} /></div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1.5"><span className="text-gold font-medium">Pukhraj Lightweight</span><span className="font-semibold gold-text">{lightW} g</span></div>
                <div className="h-3 rounded-full bg-ink/10 overflow-hidden"><motion.div key={lightPct} className="h-full rounded-full bg-gold-grad" initial={{ width: 0 }} animate={{ width: `${lightPct}%` }} transition={{ duration: 0.6 }} /></div>
              </div>
            </div>

            {/* savings */}
            <div className="mt-7 grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-white/70 p-4 text-center">
                <p className="font-display text-3xl gold-text">{gramsSaved} g</p>
                <p className="text-[11px] uppercase tracking-wide2 text-ink/45 mt-1">Gold Saved</p>
              </div>
              <motion.div key={moneySaved} initial={{ scale: 0.95, opacity: 0.6 }} animate={{ scale: 1, opacity: 1 }}
                className="rounded-2xl bg-white/70 p-4 text-center">
                <p className="font-display text-3xl gold-text">{inr(moneySaved)}</p>
                <p className="text-[11px] uppercase tracking-wide2 text-ink/45 mt-1">Approx. Saved*</p>
              </motion.div>
            </div>

            <p className="text-[10px] text-ink/35 mt-3">*Indicative on gold value alone at {RATES.gold.value}{RATES.gold.unit}. Final savings vary by design.</p>
            <a href={`https://wa.me/${CONTACT.whatsapp}?text=I used the calculator for a ${encodeURIComponent(type.name)} and want a lightweight quote`} target="_blank" rel="noreferrer" className="btn-gold w-full mt-5"><FaWhatsapp size={16} /> Get My Lightweight Quote</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
