'use client'

import { useState } from 'react'
import { Lang, translations } from './lib/translations'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import WhyAMA from './components/WhyAMA'
import About from './components/About'
import Services from './components/Services'
import MarketAnalysis from './components/MarketAnalysis'
import Regions from './components/Regions'
import Team from './components/Team'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Home() {
  const [lang, setLang] = useState<Lang>('es')
  const t = translations[lang]

  return (
    <main className="bg-[#0B1118] text-[#F4F6F8] overflow-hidden">
      <Navbar lang={lang} setLang={setLang} t={t} />
      <Hero t={t} />
      <TrustBar t={t} />
      <WhyAMA t={t} />
      <About t={t} />
      <Services t={t} />
      <MarketAnalysis t={t} />
      <Regions t={t} />
      <Team t={t} />
      <Contact t={t} />
      <Footer />
    </main>
  )
}