import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLenis, useActiveSection } from "./hooks/useScroll";
import { NAV_LINKS } from "./data/content";

import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import FloatingActions from "./components/FloatingActions";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Programs from "./sections/Programs";
import Trainers from "./sections/Trainers";
import Facilities from "./sections/Facilities";
import Transformations from "./sections/Transformations";
import Pricing from "./sections/Pricing";
import Gallery from "./sections/Gallery";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

export default function App() {
  const [loading, setLoading] = useState(true);
  useLenis();
  const active = useActiveSection(NAV_LINKS.map((l) => l.id));

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">{loading && <Loader key="loader" />}</AnimatePresence>

      {/* page reveal after loader */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 0.6 }}
      >
        <Navbar active={active} />
        <main>
          <Hero />
          <About />
          <Programs />
          <Trainers />
          <Facilities />
          <Transformations />
          <Pricing />
          <Gallery />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
        <FloatingActions />
      </motion.div>
    </>
  );
}
