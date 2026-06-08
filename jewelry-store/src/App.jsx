import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLenis, useActiveSection } from "./hooks/useScroll";
import { NAV_LINKS } from "./data/content";

import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import FloatingActions from "./components/FloatingActions";
import { QuickView, RingSizeModal } from "./components/Modals";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Collections from "./sections/Collections";
import Bestsellers from "./sections/Bestsellers";
import Bridal from "./sections/Bridal";
import Bespoke from "./sections/Bespoke";
import Craft from "./sections/Craft";
import Offers from "./sections/Offers";
import Services from "./sections/Services";
import Testimonials from "./sections/Testimonials";
import Gallery from "./sections/Gallery";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [quickView, setQuickView] = useState(null);   // product object or null
  const [ringSize, setRingSize] = useState(false);

  useLenis();
  const active = useActiveSection(NAV_LINKS.map((l) => l.id));

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2400);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">{loading && <Loader key="loader" />}</AnimatePresence>

      {/* page reveal */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: loading ? 0 : 1 }} transition={{ duration: 0.7 }}>
        <Navbar active={active} />
        <main>
          <Hero />
          <About />
          <Collections />
          <Bestsellers onQuickView={setQuickView} />
          <Bridal />
          <Bespoke />
          <Craft />
          <Offers />
          <Services onRingSize={() => setRingSize(true)} />
          <Testimonials />
          <Gallery />
          <Contact />
        </main>
        <Footer />
        <FloatingActions />
      </motion.div>

      {/* modals (frontend only) */}
      <QuickView product={quickView} onClose={() => setQuickView(null)} />
      <RingSizeModal open={ringSize} onClose={() => setRingSize(false)} />
    </>
  );
}
