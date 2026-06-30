'use client'

import { useState } from 'react'
import { translations, Lang } from './lib/translations'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Intelligence from './components/Intelligence'
import Regions from './components/Regions'
import Team from './components/Team'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Home() {
  const [lang, setLang] = useState<Lang>('es')
  const t = translations[lang]

  return (
    <main className="bg-[#050505] text-white overflow-hidden">
      <Navbar lang={lang} setLang={setLang} t={t} />
      <Hero t={t} />
      <About t={t} />
      <Services t={t} />
      <Intelligence t={t} />
      <Regions t={t} />
      <Team t={t} />
      <Contact t={t} />
      <Footer />
    </main>
  )
}