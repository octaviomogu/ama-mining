'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  MapPin,
  ShieldCheck,
  Pickaxe,
  Building2,
  Globe2,
  Phone,
  Mail,
  MessageCircle,
} from 'lucide-react'

const content = {
  en: {
    nav: ['About', 'Services', 'Regions', 'Team', 'Contact'],
    heroLabel: 'Andes Mining Advisory',
    heroTitle1: 'Strategic',
    heroTitle2: 'Mining Advisory',
    heroText:
      'Strategic mining advisory firm specialized in mining concessions, mining intelligence, due diligence and cross-border mining development throughout Chile and Argentina.',
    cta1: 'Explore AMA',
    cta2: 'Contact Us',
    aboutLabel: 'About AMA',
    aboutTitle1: 'Mining Intelligence',
    aboutTitle2: 'Meets Strategy',
    aboutText1:
      'AMA is a strategic mining advisory firm focused on mining assets, concessions, territorial intelligence, investment opportunities and cross-border mining development.',
    aboutText2:
      'We combine legal strategy, mining networking, due diligence and business vision to maximize the value and protection of strategic mining assets.',
    servicesLabel: 'Core Services',
    servicesTitle: 'Strategic Areas',
    servicesText:
      'Premium advisory solutions for mining companies, investors and strategic asset owners.',
    regionsLabel: 'Strategic Regions',
    regionsTitle1: 'Chile &',
    regionsTitle2: 'Argentina',
    teamLabel: 'Leadership',
    teamTitle: 'Founding Team',
    contactLabel: 'Contact',
    contactTitle1: 'Building Strategic',
    contactTitle2: 'Mining Opportunities',
    contactText:
      'AMA operates with strict confidentiality standards and a strategic long-term mining vision.',
    octavioRole: 'Founder & Strategic Mining Advisor',
    octavioText:
      'Specialist in mining concessions, strategic territorial protection, mining intelligence and cross-border advisory.',
    mariaRole: 'Chief Communications Officer',
    mariaText:
      'Specialist in corporate communications, institutional positioning and strategic relationships.',
  },

  es: {
    nav: ['Nosotros', 'Servicios', 'Regiones', 'Equipo', 'Contacto'],
    heroLabel: 'Andes Mining Advisory',
    heroTitle1: 'Advisory',
    heroTitle2: 'Minero Estratégico',
    heroText:
      'Firma de advisory minero estratégico especializada en concesiones mineras, inteligencia minera, due diligence y desarrollo minero binacional entre Chile y Argentina.',
    cta1: 'Conocer AMA',
    cta2: 'Contactar',
    aboutLabel: 'Sobre AMA',
    aboutTitle1: 'Inteligencia Minera',
    aboutTitle2: 'con Estrategia',
    aboutText1:
      'AMA es una firma de advisory minero estratégico enfocada en activos mineros, concesiones, inteligencia territorial, oportunidades de inversión y desarrollo binacional.',
    aboutText2:
      'Integramos estrategia legal, networking minero, due diligence y visión de negocios para maximizar el valor y la protección de activos mineros estratégicos.',
    servicesLabel: 'Servicios',
    servicesTitle: 'Áreas Estratégicas',
    servicesText:
      'Soluciones premium para compañías mineras, inversionistas y propietarios de activos estratégicos.',
    regionsLabel: 'Regiones Estratégicas',
    regionsTitle1: 'Chile &',
    regionsTitle2: 'Argentina',
    teamLabel: 'Liderazgo',
    teamTitle: 'Equipo Fundador',
    contactLabel: 'Contacto',
    contactTitle1: 'Construyendo',
    contactTitle2: 'Oportunidades Mineras',
    contactText:
      'AMA opera bajo estrictos estándares de confidencialidad y una visión minera estratégica de largo plazo.',
    octavioRole: 'Founder & Strategic Mining Advisor',
    octavioText:
      'Especialista en concesiones mineras, protección territorial estratégica, inteligencia minera y advisory binacional.',
    mariaRole: 'Chief Communications Officer',
    mariaText:
      'Especialista en comunicaciones corporativas, posicionamiento institucional y relaciones estratégicas.',
  },
}

const services = {
  en: [
    ['Mining Concessions', 'Strategic mining protection and concession advisory.'],
    ['Due Diligence', 'Legal, territorial and strategic mining evaluation.'],
    ['Mining Brokerage', 'Asset intermediation and investor networking.'],
    ['Cross-Border Expansion', 'Chile–Argentina mining growth strategy.'],
  ],
  es: [
    ['Concesiones Mineras', 'Protección estratégica y asesoría concesional minera.'],
    ['Due Diligence', 'Evaluación legal, territorial y estratégica minera.'],
    ['Brokerage Minero', 'Intermediación de activos y networking inversionista.'],
    ['Expansión Binacional', 'Estrategia minera de crecimiento Chile–Argentina.'],
  ],
}

const regions = {
  en: [
    'San Juan — Copper Expansion',
    'Salta & Catamarca — Lithium Triangle',
    'Antofagasta — Mining Capital',
    'Santiago — Financial Hub',
    'Concepción — Logistics & Strategy',
  ],
  es: [
    'San Juan — Expansión del Cobre',
    'Salta & Catamarca — Triángulo del Litio',
    'Antofagasta — Capital Minera',
    'Santiago — Centro Financiero',
    'Concepción — Logística & Estrategia',
  ],
}

export default function Home() {
  const [lang, setLang] = useState<'en' | 'es'>('en')
  const t = content[lang]

  return (
    <main className="bg-[#050505] text-white overflow-hidden">
      <a
        href="https://wa.me/56968631097"
        target="_blank"
        className="fixed bottom-6 right-6 z-50 bg-[#D4A017] hover:scale-110 transition-all text-black p-5 rounded-full shadow-[0_0_40px_rgba(212,160,23,0.6)]"
      >
        <MessageCircle size={28} />
      </a>

      <header className="fixed top-0 left-0 right-0 z-40 bg-black/30 backdrop-blur-2xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
          <div className="text-2xl font-black tracking-[5px]">
            AMA<span className="text-[#D4A017]">.</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-300">
            <a href="#about" className="hover:text-[#D4A017] transition-all">{t.nav[0]}</a>
            <a href="#services" className="hover:text-[#D4A017] transition-all">{t.nav[1]}</a>
            <a href="#regions" className="hover:text-[#D4A017] transition-all">{t.nav[2]}</a>
            <a href="#team" className="hover:text-[#D4A017] transition-all">{t.nav[3]}</a>
            <a href="#contact" className="hover:text-[#D4A017] transition-all">{t.nav[4]}</a>
          </nav>

          <button
            onClick={() => setLang(lang === 'en' ? 'es' : 'en')}
            className="border border-zinc-700 hover:border-[#D4A017] rounded-full px-4 py-2 text-sm flex items-center gap-2 transition-all"
          >
            <Globe2 size={16} />
            {lang === 'en' ? 'ES' : 'EN'}
          </button>
        </div>
      </header>

      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center scale-110"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=2000&auto=format&fit=crop')",
          }}
        />

        <div className="absolute inset-0 bg-black/80" />
        <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-[#D4A017]/20 blur-[160px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-orange-500/10 blur-[160px] rounded-full" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-40">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-5xl"
          >
            <div className="uppercase tracking-[8px] text-[#D4A017] text-sm font-semibold mb-6">
              {t.heroLabel}
            </div>

            <h1 className="text-6xl md:text-8xl lg:text-[110px] font-black leading-none mb-8">
              {t.heroTitle1}
              <span className="block text-[#D4A017] drop-shadow-[0_0_25px_rgba(212,160,23,0.5)]">
                {t.heroTitle2}
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-zinc-300 leading-relaxed max-w-4xl mb-10">
              {t.heroText}
            </p>

            <div className="flex flex-wrap gap-5">
              <a
                href="#services"
                className="bg-[#D4A017] hover:bg-[#f1bc2d] transition-all text-black font-bold px-8 py-4 rounded-2xl flex items-center gap-3 shadow-[0_0_40px_rgba(212,160,23,0.4)]"
              >
                {t.cta1}
                <ArrowRight size={20} />
              </a>

              <a
                href="#contact"
                className="border border-zinc-700 hover:border-[#D4A017] transition-all px-8 py-4 rounded-2xl font-semibold backdrop-blur-md"
              >
                {t.cta2}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="about" className="py-32 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-20 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <div className="uppercase tracking-[5px] text-[#D4A017] text-sm mb-4 font-semibold">
              {t.aboutLabel}
            </div>

            <h2 className="text-5xl md:text-6xl font-black leading-tight mb-8">
              {t.aboutTitle1}
              <span className="block text-[#D4A017]">{t.aboutTitle2}</span>
            </h2>

            <p className="text-zinc-300 text-lg leading-relaxed mb-6">{t.aboutText1}</p>
            <p className="text-zinc-500 text-lg leading-relaxed">{t.aboutText2}</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <img
              src="/images/mining-about.png"
              alt="Mining operation"
              className="rounded-[40px] shadow-[0_0_80px_rgba(0,0,0,0.7)] border border-zinc-800 w-full h-[620px] object-cover"
            />
          </motion.div>
        </div>
      </section>

      <section id="services" className="py-32 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-20">
            <div className="uppercase tracking-[5px] text-[#D4A017] text-sm mb-4 font-semibold">
              {t.servicesLabel}
            </div>

            <h2 className="text-5xl md:text-6xl font-black mb-6">{t.servicesTitle}</h2>
            <p className="text-zinc-400 text-xl max-w-3xl mx-auto">{t.servicesText}</p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
            {services[lang].map(([title, desc], idx) => {
              const icons = [
                <Pickaxe key="1" size={40} />,
                <ShieldCheck key="2" size={40} />,
                <Building2 key="3" size={40} />,
                <MapPin key="4" size={40} />,
              ]

              return (
                <motion.div
                  key={title}
                  whileHover={{ y: -12 }}
                  className="bg-[#151515] border border-zinc-800 hover:border-[#D4A017] transition-all rounded-[32px] p-8 hover:shadow-[0_0_50px_rgba(212,160,23,0.15)]"
                >
                  <div className="text-[#D4A017] mb-6">{icons[idx]}</div>
                  <h3 className="text-2xl font-bold mb-4">{title}</h3>
                  <p className="text-zinc-400 leading-relaxed">{desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <section id="regions" className="py-32 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <img
              src="/images/mining-about.png"
              alt="Strategic mining regions"
              className="rounded-[40px] border border-zinc-800 shadow-[0_0_80px_rgba(0,0,0,0.7)] w-full h-[620px] object-cover"
            />
          </div>

          <div>
            <div className="uppercase tracking-[5px] text-[#D4A017] text-sm mb-4 font-semibold">
              {t.regionsLabel}
            </div>

            <h2 className="text-5xl md:text-6xl font-black leading-tight mb-10">
              {t.regionsTitle1}
              <span className="block text-[#D4A017]">{t.regionsTitle2}</span>
            </h2>

            <div className="space-y-5">
              {regions[lang].map((region) => (
                <div
                  key={region}
                  className="bg-[#151515] border border-zinc-800 rounded-2xl p-5 flex items-center gap-4 hover:border-[#D4A017] transition-all"
                >
                  <div className="w-4 h-4 rounded-full bg-[#D4A017]" />
                  <span className="text-zinc-200 text-lg">{region}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="team" className="py-32 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-20">
            <div className="uppercase tracking-[5px] text-[#D4A017] text-sm mb-4 font-semibold">
              {t.teamLabel}
            </div>

            <h2 className="text-5xl md:text-6xl font-black">{t.teamTitle}</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            <motion.div
              whileHover={{ y: -8 }}
              className="bg-[#151515] border border-zinc-800 hover:border-[#D4A017] transition-all rounded-[32px] overflow-hidden"
            >
              <img src="/images/octavio.png" alt="Octavio Moya" className="w-full h-[600px] object-cover" />

              <div className="p-8">
                <h3 className="text-3xl font-black mb-2">Octavio Moya</h3>
                <div className="text-[#D4A017] font-semibold mb-6">{t.octavioRole}</div>
                <p className="text-zinc-400 leading-relaxed">{t.octavioText}</p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -8 }}
              className="bg-[#151515] border border-zinc-800 hover:border-[#D4A017] transition-all rounded-[32px] overflow-hidden"
            >
              <img src="/images/mariapaz.png" alt="María Paz Rivas" className="w-full h-[600px] object-cover" />

              <div className="p-8">
                <h3 className="text-3xl font-black mb-2">María Paz Rivas</h3>
                <div className="text-[#D4A017] font-semibold mb-6">{t.mariaRole}</div>
                <p className="text-zinc-400 leading-relaxed">{t.mariaText}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-32 bg-[#050505] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#D4A017]/10 to-transparent" />

        <div className="relative max-w-5xl mx-auto px-6 lg:px-10 text-center">
          <div className="uppercase tracking-[5px] text-[#D4A017] text-sm mb-4 font-semibold">
            {t.contactLabel}
          </div>

          <h2 className="text-5xl md:text-7xl font-black leading-tight mb-8">
            {t.contactTitle1}
            <span className="block text-[#D4A017]">{t.contactTitle2}</span>
          </h2>

          <p className="text-zinc-300 text-xl leading-relaxed mb-12">{t.contactText}</p>

          <div className="flex flex-col items-center gap-5 text-xl">
            <div className="flex items-center gap-3">
              <Mail className="text-[#D4A017]" />
              contacto@amamining.com
            </div>

            <div className="flex items-center gap-3">
              <Phone className="text-[#D4A017]" />
              +56 9 6863 1097
            </div>

            <div>Chile • Argentina</div>
          </div>
        </div>
      </section>

      <footer className="border-t border-zinc-800 bg-black py-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-2xl font-black tracking-[4px] mb-2">
              AMA<span className="text-[#D4A017]">.</span>
            </div>
            <div className="text-zinc-500 text-sm">Andes Mining Advisory © 2026</div>
          </div>

          <div className="flex items-center gap-6 text-zinc-400">
            <a
              href="https://www.linkedin.com/company/andes-mining-advisory-ama"
              target="_blank"
              className="hover:text-[#D4A017] transition-all border border-zinc-700 rounded-md px-2 py-1 font-bold"
            >
              in
            </a>

            <a href="mailto:contacto@amamining.com" className="hover:text-[#D4A017] transition-all">
              <Mail size={22} />
            </a>

            <a href="https://wa.me/56968631097" target="_blank" className="hover:text-[#D4A017] transition-all">
              <Phone size={22} />
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}