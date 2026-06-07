import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLenis, useActiveSection } from "./hooks/useScroll";
import { NAV_LINKS } from "./data/content";

import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import FloatingActions from "./components/FloatingActions";

import Hero from "./sections/Hero";
import Heritage from "./sections/Heritage";
import Collections from "./sections/Collections";
import Signature from "./sections/Signature";
import Bridal from "./sections/Bridal";
import Craft from "./sections/Craft";
import Gallery from "./sections/Gallery";
import Reviews from "./sections/Reviews";
import Visit from "./sections/Visit";
import Faq from "./sections/Faq";
import Footer from "./sections/Footer";

export default function App() {
  const [loading, setLoading] = useState(true);
  useLenis();
  const active = useActiveSection(NAV_LINKS.map((l) => l.id));

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2400);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">{loading && <Loader key="loader" />}</AnimatePresence>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: loading ? 0 : 1 }} transition={{ duration: 0.7 }}>
        <Navbar active={active} />
        <main>
          <Hero />
          <Heritage />
          <Collections />
          <Signature />
          <Bridal />
          <Craft />
          <Gallery />
          <Reviews />
          <Visit />
          <Faq />
        </main>
        <Footer />
        <FloatingActions />
      </motion.div>
    </>
  );
}
