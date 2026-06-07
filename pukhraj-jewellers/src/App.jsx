import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLenis, useActiveSection } from "./hooks/useScroll";
import { NAV_LINKS } from "./data/content";

import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import FloatingActions from "./components/FloatingActions";

import Hero from "./sections/Hero";
import WhyLightweight from "./sections/WhyLightweight";
import Collections from "./sections/Collections";
import Calculator from "./sections/Calculator";
import Bestsellers from "./sections/Bestsellers";
import Transformations from "./sections/Transformations";
import Instagram from "./sections/Instagram";
import Finder from "./sections/Finder";
import Reviews from "./sections/Reviews";
import GoldRate from "./sections/GoldRate";
import BookVisit from "./sections/BookVisit";
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

      {/* page reveal */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: loading ? 0 : 1 }} transition={{ duration: 0.7 }}>
        <Navbar active={active} />
        <main>
          <Hero />
          <WhyLightweight />
          <Collections />
          <Calculator />
          <Bestsellers />
          <Transformations />
          <Instagram />
          <Finder />
          <Reviews />
          <GoldRate />
          <BookVisit />
          <Faq />
        </main>
        <Footer />
        <FloatingActions />
      </motion.div>
    </>
  );
}
