import { useState } from 'react'
import { SmoothScrollProvider } from './lib/smoothScroll'
import Cursor from './components/Cursor'
import { Loader, ScrollProgress, Background } from './components/Chrome'
import Navbar from './components/Navbar'
import CommandMenu from './components/CommandMenu'

import Hero from './sections/Hero'
import Marquee from './sections/Marquee'
import About from './sections/About'
import Skills from './sections/Skills'
import Work from './sections/Work'
import Process from './sections/Process'
import Experience from './sections/Experience'
import Services from './sections/Services'
import Testimonials from './sections/Testimonials'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

export default function App() {
  const [cmdOpen, setCmdOpen] = useState(false)

  return (
    <SmoothScrollProvider>
      <Loader />
      <Background />
      <Cursor />
      <ScrollProgress />
      <Navbar onOpenCmd={() => setCmdOpen(true)} />
      <CommandMenu open={cmdOpen} setOpen={setCmdOpen} />

      <main>
        <Hero />
        <Marquee />
        <About />
        <Skills />
        <Work />
        <Process />
        <Experience />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </SmoothScrollProvider>
  )
}
