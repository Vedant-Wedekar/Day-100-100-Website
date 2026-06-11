import { useEffect, useState } from 'react'
import useLenis from './hooks/useLenis'

import Loader from './components/Loader'
import CustomCursor from './components/CustomCursor'
import ScrollProgress from './components/ScrollProgress'
import SakuraPetals from './components/SakuraPetals'
import Navbar from './components/Navbar'
import Marquee from './components/Marquee'
import { FloatingButtons, MobileCTA } from './components/FloatingButtons'

import Hero from './sections/Hero'
import Story from './sections/Story'
import SignatureDishes from './sections/SignatureDishes'
import ChefSpecial from './sections/ChefSpecial'
import StreetFood from './sections/StreetFood'
import Culture from './sections/Culture'
import Seasonal from './sections/Seasonal'
import Matcha from './sections/Matcha'
import Gallery from './sections/Gallery'
import Reviews from './sections/Reviews'
import Instagram from './sections/Instagram'
import Reservation from './sections/Reservation'
import Location from './sections/Location'
import FAQ from './sections/FAQ'
import Footer from './sections/Footer'

export default function App() {
  const [ready, setReady] = useState(false)
  const [dark, setDark] = useState(false)

  useLenis()

  // sync dark class + respect saved/system preference on first load
  useEffect(() => {
    const prefers = window.matchMedia('(prefers-color-scheme: dark)').matches
    setDark(prefers)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
  }, [dark])

  return (
    <div className="washi-grain">
      <Loader onDone={() => setReady(true)} />

      <ScrollProgress />
      <CustomCursor />
      <SakuraPetals />
      <Navbar dark={dark} setDark={setDark} />

      <main>
        <Hero />
        <Marquee />
        <Story />
        <SignatureDishes />
        <ChefSpecial />
        <StreetFood />
        <Culture />
        <Seasonal />
        <Matcha />
        <Gallery />
        <Reviews />
        <Instagram />
        <Reservation />
        <Location />
        <FAQ />
      </main>

      <Footer />

      <FloatingButtons />
      <MobileCTA />
    </div>
  )
}
