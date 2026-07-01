# AMA Project ATLAS V3 - clean modular rebuild
# Ejecutar desde PowerShell como:
# cd C:\Users\vicente\Desktop\ama-mining
# .\apply_ama_atlas_v3.ps1

$ErrorActionPreference = "Stop"

Set-Location "C:\Users\vicente\Desktop\ama-mining"
git checkout v2-intelligence-platform

New-Item -ItemType Directory -Force app\components | Out-Null
New-Item -ItemType Directory -Force app\lib | Out-Null
New-Item -ItemType Directory -Force app\dashboard | Out-Null

function Write-Utf8NoBom($Path, $Content) {
  $fullPath = Join-Path (Get-Location) $Path
  $dir = Split-Path $fullPath
  if (!(Test-Path $dir)) {
    New-Item -ItemType Directory -Force $dir | Out-Null
  }
  [System.IO.File]::WriteAllText($fullPath, $Content, [System.Text.UTF8Encoding]::new($false))
}

Write-Utf8NoBom "app\lib\translations.ts" @'
export type Lang = 'es' | 'en'

export const translations = {
  es: {
    nav: ['Advisory', 'Activos Mineros', 'Análisis de Mercado', 'Regiones', 'Leadership', 'Contacto'],

    heroEyebrow: 'Andes Mining Advisory',
    heroTitle1: 'Strategic',
    heroTitle2: 'Mining Advisory',
    heroText:
      'Protegemos, desarrollamos y maximizamos el valor de activos mineros estratégicos en Chile, Argentina y Perú.',
    heroSubline:
      'Concesiones Mineras • Due Diligence • Brokerage Minero • Market Analysis',
    ctaPrimary: 'Explorar advisory',
    ctaSecondary: 'Contactar',

    trust: [
      ['+200', 'Concesiones mineras tramitadas por año'],
      ['3', 'Países estratégicos: Chile, Argentina y Perú'],
      ['Legal · Técnico · Comercial', 'Criterio integrado para decisiones mineras'],
      ['NDA', 'Procesos bajo estricta confidencialidad'],
    ],

    whyEyebrow: 'Why AMA',
    whyTitle: 'Los activos mineros requieren decisiones estratégicas.',
    whyText:
      'AMA ayuda a empresas mineras, inversionistas y titulares de concesiones a proteger, evaluar y desarrollar activos mineros con criterio legal, técnico y comercial.',

    aboutEyebrow: 'Activos Mineros',
    aboutTitle: 'No se trata solo de tramitar. Se trata de proteger valor.',
    aboutText:
      'AMA Mining integra experiencia legal, técnica y comercial para apoyar decisiones críticas sobre concesiones, proyectos, oportunidades de inversión y activos mineros de alto valor.',

    servicesEyebrow: 'Advisory',
    servicesTitle: 'Áreas de advisory estratégico',
    servicesSubtitle:
      'Acompañamos a propietarios de activos, inversionistas, compañías mineras y proveedores estratégicos en decisiones de alto impacto.',

    marketEyebrow: 'Market Analysis',
    marketTitle: 'Análisis de mercado para decisiones mineras',
    marketText:
      'Seguimiento de metales, señales de mercado, regulación, riesgos concesionales y oportunidades de inversión en Chile, Argentina y Perú.',
    marketButton: 'Ver Market Analysis Center',

    regionsEyebrow: 'Regiones',
    regionsTitle: 'Chile, Argentina y Perú',

    teamEyebrow: 'Leadership',
    teamTitle: 'Liderazgo estratégico minero',

    contactEyebrow: 'Contacto',
    contactTitle: 'Hablemos de su activo minero',
    contactText:
      'Trabajamos bajo confidencialidad, visión estratégica y foco en proteger y desarrollar oportunidades mineras de alto potencial.',
  },

  en: {
    nav: ['Advisory', 'Mining Assets', 'Market Analysis', 'Regions', 'Leadership', 'Contact'],

    heroEyebrow: 'Andes Mining Advisory',
    heroTitle1: 'Strategic',
    heroTitle2: 'Mining Advisory',
    heroText:
      'Protecting, developing and maximizing the value of strategic mining assets across Chile, Argentina and Peru.',
    heroSubline:
      'Mining Concessions • Due Diligence • Mining Brokerage • Market Analysis',
    ctaPrimary: 'Explore advisory',
    ctaSecondary: 'Contact',

    trust: [
      ['+200', 'Mining concessions processed every year'],
      ['3', 'Strategic countries: Chile, Argentina and Peru'],
      ['Legal · Technical · Commercial', 'Integrated criteria for mining decisions'],
      ['NDA', 'Processes under strict confidentiality'],
    ],

    whyEyebrow: 'Why AMA',
    whyTitle: 'Mining assets require strategic decisions.',
    whyText:
      'AMA helps mining companies, investors and concession holders protect, evaluate and develop mining assets through legal, technical and commercial criteria.',

    aboutEyebrow: 'Mining Assets',
    aboutTitle: 'It is not just about processing. It is about protecting value.',
    aboutText:
      'AMA Mining integrates legal, technical and commercial expertise to support critical decisions regarding concessions, projects, investment opportunities and high-value mining assets.',

    servicesEyebrow: 'Advisory',
    servicesTitle: 'Strategic advisory areas',
    servicesSubtitle:
      'We advise asset owners, investors, mining companies and strategic suppliers on high-impact mining decisions.',

    marketEyebrow: 'Market Analysis',
    marketTitle: 'Market analysis for mining decisions',
    marketText:
      'Monitoring metals, market signals, regulation, concession risks and investment opportunities across Chile, Argentina and Peru.',
    marketButton: 'View Market Analysis Center',

    regionsEyebrow: 'Regions',
    regionsTitle: 'Chile, Argentina and Peru',

    teamEyebrow: 'Leadership',
    teamTitle: 'Strategic mining leadership',

    contactEyebrow: 'Contact',
    contactTitle: 'Let’s discuss your mining asset',
    contactText:
      'We operate with confidentiality, strategic vision and a strong focus on protecting and developing high-potential mining opportunities.',
  },
}
'@

Write-Utf8NoBom "app\page.tsx" @'
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
'@

Write-Utf8NoBom "app\components\Navbar.tsx" @'
import Link from 'next/link'
import { Globe2 } from 'lucide-react'
import { Lang } from '../lib/translations'

type Props = {
  lang: Lang
  setLang: (lang: Lang) => void
  t: any
}

export default function Navbar({ lang, setLang, t }: Props) {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-[#0B1118]/85 backdrop-blur-2xl border-b border-[#27313B]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <Link href="/" className="leading-none">
          <div className="text-2xl font-black tracking-[5px]">
            AMA<span className="text-[#CFAE52]">.</span>
          </div>
          <div className="text-[10px] tracking-[3px] uppercase text-[#A6B0BB] mt-1">
            Strategic Mining Advisory
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-7 text-sm text-zinc-300">
          <a href="/#services" className="hover:text-[#CFAE52] transition-all">{t.nav[0]}</a>
          <a href="/#about" className="hover:text-[#CFAE52] transition-all">{t.nav[1]}</a>
          <Link href="/dashboard" className="hover:text-[#CFAE52] transition-all">{t.nav[2]}</Link>
          <a href="/#regions" className="hover:text-[#CFAE52] transition-all">{t.nav[3]}</a>
          <a href="/#team" className="hover:text-[#CFAE52] transition-all">{t.nav[4]}</a>
          <a href="/#contact" className="hover:text-[#CFAE52] transition-all">{t.nav[5]}</a>
        </nav>

        <button
          onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
          className="border border-[#27313B] hover:border-[#CFAE52] rounded-full px-4 py-2 text-sm flex items-center gap-2"
        >
          <Globe2 size={16} />
          {lang === 'es' ? 'EN' : 'ES'}
        </button>
      </div>
    </header>
  )
}
'@

Write-Utf8NoBom "app\components\Hero.tsx" @'
import { ArrowRight, MessageCircle } from 'lucide-react'

export default function Hero({ t }: { t: any }) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0B1118]">
      <a
        href="https://wa.me/56968631097"
        target="_blank"
        className="fixed bottom-6 right-6 z-50 bg-[#CFAE52] hover:scale-110 transition-all text-black p-5 rounded-full shadow-[0_0_40px_rgba(207,174,82,0.45)]"
      >
        <MessageCircle size={28} />
      </a>

      <div
        className="absolute inset-0 bg-cover bg-center scale-110 opacity-75"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=2200&auto=format&fit=crop')",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#0B1118] via-[#0B1118]/88 to-[#0B1118]/50" />
      <div className="absolute top-0 left-0 w-[720px] h-[720px] bg-[#CFAE52]/18 blur-[170px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#6E7A89]/10 blur-[150px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-40">
        <div className="max-w-6xl">
          <div className="uppercase tracking-[8px] text-[#CFAE52] text-sm font-semibold mb-6">
            {t.heroEyebrow}
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-[112px] font-black leading-none mb-8">
            {t.heroTitle1}
            <span className="block text-[#CFAE52] drop-shadow-[0_0_25px_rgba(207,174,82,0.45)]">
              {t.heroTitle2}
            </span>
          </h1>

          <p className="text-2xl md:text-3xl text-zinc-200 leading-relaxed max-w-5xl mb-6">
            {t.heroText}
          </p>

          <p className="text-base md:text-lg text-[#A6B0BB] tracking-wide mb-10">
            {t.heroSubline}
          </p>

          <div className="flex flex-wrap gap-5">
            <a
              href="#services"
              className="bg-[#CFAE52] hover:bg-[#e4c46b] text-black font-bold px-8 py-4 rounded-2xl flex items-center gap-3 shadow-[0_0_40px_rgba(207,174,82,0.35)]"
            >
              {t.ctaPrimary}
              <ArrowRight size={20} />
            </a>

            <a
              href="#contact"
              className="border border-[#27313B] hover:border-[#CFAE52] px-8 py-4 rounded-2xl font-semibold bg-white/5 backdrop-blur-md"
            >
              {t.ctaSecondary}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
'@

Write-Utf8NoBom "app\components\TrustBar.tsx" @'
export default function TrustBar({ t }: { t: any }) {
  return (
    <section className="bg-[#111A24] border-y border-[#27313B]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10 grid md:grid-cols-4 gap-8">
        {t.trust.map(([number, label]: [string, string]) => (
          <div key={number}>
            <div className="text-3xl md:text-4xl font-black text-[#CFAE52] mb-2">
              {number}
            </div>
            <div className="text-[#A6B0BB] leading-relaxed">{label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
'@

Write-Utf8NoBom "app\components\WhyAMA.tsx" @'
import { Building2, FileSearch, Handshake, ShieldCheck } from 'lucide-react'

const reasons = [
  {
    title: 'Protección de activos mineros',
    text: 'Constitución, revisión, defensa y estrategia de concesiones mineras.',
    icon: ShieldCheck,
  },
  {
    title: 'Due diligence integral',
    text: 'Revisión legal, técnica, territorial y comercial antes de tomar decisiones.',
    icon: FileSearch,
  },
  {
    title: 'Brokerage minero estratégico',
    text: 'Compra, venta, valorización, NDA, deal flow y negociación de activos.',
    icon: Handshake,
  },
  {
    title: 'Advisory regional',
    text: 'Chile, Argentina y Perú con visión ejecutiva y criterio de inversión.',
    icon: Building2,
  },
]

export default function WhyAMA({ t }: { t: any }) {
  return (
    <section className="py-32 bg-[#0B1118]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-4xl mb-20">
          <div className="uppercase tracking-[5px] text-[#CFAE52] text-sm mb-4 font-semibold">
            {t.whyEyebrow}
          </div>

          <h2 className="text-5xl md:text-6xl font-black leading-tight mb-8">
            {t.whyTitle}
          </h2>

          <p className="text-[#A6B0BB] text-xl leading-relaxed">
            {t.whyText}
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {reasons.map((item) => {
            const Icon = item.icon

            return (
              <div
                key={item.title}
                className="bg-[#17212B] border border-[#27313B] hover:border-[#CFAE52] rounded-[32px] p-8 transition-all"
              >
                <Icon className="text-[#CFAE52] mb-6" size={42} />
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-[#A6B0BB] leading-relaxed">{item.text}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
'@

Write-Utf8NoBom "app\components\About.tsx" @'
export default function About({ t }: { t: any }) {
  return (
    <section id="about" className="py-32 bg-[#111A24]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-20 items-center">
        <div>
          <div className="uppercase tracking-[5px] text-[#CFAE52] text-sm mb-4 font-semibold">
            {t.aboutEyebrow}
          </div>

          <h2 className="text-5xl md:text-6xl font-black leading-tight mb-8">
            {t.aboutTitle}
          </h2>

          <p className="text-[#A6B0BB] text-xl leading-relaxed">
            {t.aboutText}
          </p>
        </div>

        <img
          src="/images/mining-about.png"
          alt="Mining operation"
          className="rounded-[40px] border border-[#27313B] w-full h-[620px] object-cover shadow-[0_0_80px_rgba(0,0,0,0.7)]"
        />
      </div>
    </section>
  )
}
'@

Write-Utf8NoBom "app\components\Services.tsx" @'
import { Building2, MapPin, Pickaxe, ShieldCheck } from 'lucide-react'

const services = [
  {
    title: 'Concesiones Mineras',
    desc: 'Protección, constitución, revisión y estrategia concesional minera.',
    icon: Pickaxe,
  },
  {
    title: 'Due Diligence',
    desc: 'Evaluación legal, territorial, técnica y estratégica de activos mineros.',
    icon: ShieldCheck,
  },
  {
    title: 'Brokerage Minero',
    desc: 'Intermediación, valorización, NDA, deal flow y networking inversionista.',
    icon: Building2,
  },
  {
    title: 'Expansión Regional',
    desc: 'Estrategia minera para Chile, Argentina y Perú.',
    icon: MapPin,
  },
]

export default function Services({ t }: { t: any }) {
  return (
    <section id="services" className="py-32 bg-[#0B1118]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-20">
          <div className="uppercase tracking-[5px] text-[#CFAE52] text-sm mb-4 font-semibold">
            {t.servicesEyebrow}
          </div>

          <h2 className="text-5xl md:text-6xl font-black mb-6">
            {t.servicesTitle}
          </h2>

          <p className="text-[#A6B0BB] text-xl max-w-3xl mx-auto">
            {t.servicesSubtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {services.map((service) => {
            const Icon = service.icon

            return (
              <div
                key={service.title}
                className="bg-[#17212B] border border-[#27313B] hover:border-[#CFAE52] rounded-[32px] p-8 transition-all"
              >
                <Icon className="text-[#CFAE52] mb-6" size={40} />
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-[#A6B0BB] leading-relaxed">{service.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
'@

Write-Utf8NoBom "app\components\MarketAnalysis.tsx" @'
import Link from 'next/link'
import { ArrowRight, BarChart3 } from 'lucide-react'

const metals = [
  ['Copper', 'Core signal for Chile and Peru. San Juan strengthens Argentina’s copper position.'],
  ['Gold', 'Defensive value and exploration relevance across the Andes.'],
  ['Lithium', 'Strategic despite volatility, especially in Argentina and Chile.'],
]

export default function MarketAnalysis({ t }: { t: any }) {
  return (
    <section id="intelligence" className="py-32 bg-[#111A24]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="uppercase tracking-[5px] text-[#CFAE52] text-sm mb-4 font-semibold">
            {t.marketEyebrow}
          </div>

          <h2 className="text-5xl md:text-6xl font-black leading-tight mb-8">
            {t.marketTitle}
          </h2>

          <p className="text-[#A6B0BB] text-xl leading-relaxed mb-10">
            {t.marketText}
          </p>

          <Link
            href="/dashboard"
            className="inline-flex items-center gap-3 bg-[#CFAE52] hover:bg-[#e4c46b] text-black font-bold px-8 py-4 rounded-2xl"
          >
            {t.marketButton}
            <ArrowRight size={20} />
          </Link>
        </div>

        <div className="bg-[#17212B] border border-[#27313B] rounded-[40px] p-10">
          <BarChart3 className="text-[#CFAE52] mb-6" size={48} />

          <h3 className="text-3xl font-black mb-8">Strategic Market Signals</h3>

          <div className="space-y-5">
            {metals.map(([metal, insight]) => (
              <div key={metal} className="border border-[#27313B] rounded-2xl p-5 bg-[#0B1118]/60">
                <div className="text-[#CFAE52] font-bold mb-2">{metal}</div>
                <p className="text-[#A6B0BB] leading-relaxed">{insight}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
'@

Write-Utf8NoBom "app\components\Regions.tsx" @'
const regions = [
  'San Juan — Cobre y desarrollo minero',
  'Salta, Catamarca y Jujuy — Litio y minerales críticos',
  'Antofagasta — Capital minera de Chile',
  'Santiago — Centro financiero y corporativo',
  'Perú — Cobre, oro, plata y oportunidades mineras',
]

export default function Regions({ t }: { t: any }) {
  return (
    <section id="regions" className="py-32 bg-[#0B1118]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-20 items-center">
        <img
          src="/images/mining-about.png"
          alt="Strategic mining regions"
          className="rounded-[40px] border border-[#27313B] w-full h-[620px] object-cover shadow-[0_0_80px_rgba(0,0,0,0.7)]"
        />

        <div>
          <div className="uppercase tracking-[5px] text-[#CFAE52] text-sm mb-4 font-semibold">
            {t.regionsEyebrow}
          </div>

          <h2 className="text-5xl md:text-6xl font-black leading-tight mb-10">
            {t.regionsTitle}
          </h2>

          <div className="space-y-5">
            {regions.map((region) => (
              <div
                key={region}
                className="bg-[#17212B] border border-[#27313B] rounded-2xl p-5 flex items-center gap-4 hover:border-[#CFAE52] transition-all"
              >
                <div className="w-4 h-4 rounded-full bg-[#CFAE52]" />
                <span className="text-zinc-200 text-lg">{region}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
'@

Write-Utf8NoBom "app\components\Team.tsx" @'
export default function Team({ t }: { t: any }) {
  return (
    <section id="team" className="py-32 bg-[#111A24]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-20">
          <div className="uppercase tracking-[5px] text-[#CFAE52] text-sm mb-4 font-semibold">
            {t.teamEyebrow}
          </div>

          <h2 className="text-5xl md:text-6xl font-black">{t.teamTitle}</h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="bg-[#17212B] border border-[#27313B] rounded-[32px] overflow-hidden">
            <img
              src="/images/octavio.png"
              alt="Octavio Moya"
              className="w-full h-[520px] object-cover"
            />

            <div className="p-8">
              <h3 className="text-3xl font-black mb-2">Octavio Moya</h3>
              <div className="text-[#CFAE52] font-semibold mb-6">
                Founder & CEO · Strategic Mining Advisor
              </div>
              <p className="text-[#A6B0BB] leading-relaxed">
                Asesor legal experto en minería, concesiones mineras, activos estratégicos,
                due diligence, brokerage minero y advisory regional.
              </p>
            </div>
          </div>

          <div className="bg-[#17212B] border border-[#27313B] rounded-[32px] p-8 flex flex-col justify-center">
            <h3 className="text-3xl font-black mb-2">María Paz Rivas</h3>
            <div className="text-[#CFAE52] font-semibold mb-6">
              Co-Founder & Chief Communications Officer
            </div>
            <p className="text-[#A6B0BB] text-lg leading-relaxed">
              Especialista en comunicaciones corporativas, posicionamiento institucional,
              reputación, relaciones estratégicas y narrativa empresarial para industrias
              de alto impacto.
            </p>
          </div>

          <div className="bg-[#17212B] border border-[#27313B] rounded-[32px] p-8 flex flex-col justify-center">
            <h3 className="text-3xl font-black mb-2">Technical Advisory</h3>
            <div className="text-[#CFAE52] font-semibold mb-6">
              Mining Engineering · SERNAGEOMIN Expertise
            </div>
            <p className="text-[#A6B0BB] text-lg leading-relaxed">
              El equipo AMA integra peritaje SERNAGEOMIN, ingeniería en minas,
              análisis territorial, criterio técnico y soporte especializado para procesos
              de evaluación y toma de decisiones mineras.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
'@

Write-Utf8NoBom "app\components\Contact.tsx" @'
import { Mail, Phone } from 'lucide-react'

export default function Contact({ t }: { t: any }) {
  return (
    <section id="contact" className="py-32 bg-[#0B1118]">
      <div className="relative max-w-5xl mx-auto px-6 lg:px-10 text-center">
        <div className="uppercase tracking-[5px] text-[#CFAE52] text-sm mb-4 font-semibold">
          {t.contactEyebrow}
        </div>

        <h2 className="text-5xl md:text-7xl font-black leading-tight mb-8">
          {t.contactTitle}
        </h2>

        <p className="text-[#A6B0BB] text-xl leading-relaxed mb-12">
          {t.contactText}
        </p>

        <div className="flex flex-col items-center gap-5 text-xl">
          <a
            href="mailto:octaviomoya@gmail.com"
            className="flex items-center gap-3 hover:text-[#CFAE52]"
          >
            <Mail className="text-[#CFAE52]" />
            octaviomoya@gmail.com
          </a>

          <a
            href="https://wa.me/56968631097"
            target="_blank"
            className="flex items-center gap-3 hover:text-[#CFAE52]"
          >
            <Phone className="text-[#CFAE52]" />
            +56 9 6863 1097
          </a>

          <div>Chile — Argentina — Perú</div>
        </div>
      </div>
    </section>
  )
}
'@

Write-Utf8NoBom "app\components\Footer.tsx" @'
import Link from 'next/link'
import { Mail, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-[#27313B] bg-[#060A0F] py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-3 gap-10 items-start">
        <div>
          <Link href="/">
            <div className="text-3xl font-black tracking-[4px] mb-2">
              AMA<span className="text-[#CFAE52]">.</span>
            </div>
            <div className="text-[#A6B0BB] text-sm tracking-[3px] uppercase">
              Strategic Mining Advisory
            </div>
          </Link>
        </div>

        <div className="text-[#A6B0BB] space-y-2">
          <div>Mining Assets</div>
          <div>Due Diligence</div>
          <div>Mining Brokerage</div>
          <div>Market Analysis</div>
          <div>Chile · Argentina · Perú</div>
        </div>

        <div className="flex lg:justify-end items-center gap-6 text-zinc-400">
          <a
            href="https://www.linkedin.com/company/andes-mining-advisory-ama"
            target="_blank"
            className="hover:text-[#CFAE52] border border-[#27313B] rounded-md px-2 py-1 font-bold"
          >
            in
          </a>

          <a href="mailto:octaviomoya@gmail.com" className="hover:text-[#CFAE52]">
            <Mail size={22} />
          </a>

          <a href="https://wa.me/56968631097" target="_blank" className="hover:text-[#CFAE52]">
            <Phone size={22} />
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 mt-10 pt-8 border-t border-[#27313B] text-[#6E7A89] text-sm">
        Andes Mining Advisory © 2026
      </div>
    </footer>
  )
}
'@

Write-Utf8NoBom "app\dashboard\page.tsx" @'
'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Activity, AlertTriangle, Globe2, ShieldCheck, TrendingUp } from 'lucide-react'

const data = {
  es: {
    label: 'AMA Strategic Market Analysis',
    title1: 'Market Analysis',
    title2: 'Center',
    home: 'Volver a AMA',
    intro:
      'Señales de mercado, precios de metales y análisis estratégico para decisiones sobre activos mineros en Chile, Argentina y Perú.',
    metals: [
      ['Cu', 'Cobre', 'US$ 4.58/lb', '+1.14%', 'Alcista', 'Chile • Perú • Argentina'],
      ['Au', 'Oro', 'US$ 2,365/oz', '+0.61%', 'Defensivo', 'Chile • Argentina • Perú'],
      ['Ag', 'Plata', 'US$ 31.04/oz', '-0.12%', 'Estable', 'Perú • Chile • Argentina'],
      ['Li', 'Litio', 'Referencia de mercado', 'Volátil', 'Estratégico', 'Argentina • Chile • Perú'],
    ],
    regions: [
      ['Chile', 'Cobre, litio, concesiones mineras, regulación y protección de activos estratégicos.'],
      ['Argentina', 'Expansión cuprífera en San Juan y desarrollo de litio en Salta, Catamarca y Jujuy.'],
      ['Perú', 'Cobre, oro, plata y oportunidades mineras en una jurisdicción clave para la región.'],
    ],
    commentTitle: 'Comentario Estratégico AMA',
    comment1:
      'El cobre continúa siendo el metal estratégico central para Chile y Perú, mientras Argentina fortalece su posición como plataforma de crecimiento minero a través del cobre en San Juan y el litio en el NOA.',
    comment2:
      'AMA analiza los precios de metales no solo como referencias financieras, sino como señales de valor concesional, oportunidad de inversión, timing de proyectos y apetito del mercado.',
  },
  en: {
    label: 'AMA Strategic Market Analysis',
    title1: 'Market Analysis',
    title2: 'Center',
    home: 'Back to AMA',
    intro:
      'Market signals, metal prices and strategic analysis for mining asset decisions across Chile, Argentina and Peru.',
    metals: [
      ['Cu', 'Copper', 'US$ 4.58/lb', '+1.14%', 'Bullish', 'Chile • Peru • Argentina'],
      ['Au', 'Gold', 'US$ 2,365/oz', '+0.61%', 'Defensive', 'Chile • Argentina • Peru'],
      ['Ag', 'Silver', 'US$ 31.04/oz', '-0.12%', 'Stable', 'Peru • Chile • Argentina'],
      ['Li', 'Lithium', 'Market reference', 'Volatile', 'Strategic', 'Argentina • Chile • Peru'],
    ],
    regions: [
      ['Chile', 'Copper, lithium, mining concessions, regulation and strategic asset protection.'],
      ['Argentina', 'Copper expansion in San Juan and lithium development in Salta, Catamarca and Jujuy.'],
      ['Peru', 'Copper, gold, silver and mining opportunities in a key regional jurisdiction.'],
    ],
    commentTitle: 'AMA Strategic Comment',
    comment1:
      'Copper remains the core strategic metal for Chile and Peru, while Argentina strengthens its position as a mining growth platform through copper in San Juan and lithium in the NOA region.',
    comment2:
      'AMA analyzes metal prices not only as financial references, but as signals of concession value, investment opportunity, project timing and market appetite.',
  },
}

export default function DashboardPage() {
  const [lang, setLang] = useState<'es' | 'en'>('es')
  const t = data[lang]

  return (
    <main className="min-h-screen bg-[#0B1118] text-white">
      <section className="px-6 lg:px-10 py-28 max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <div className="uppercase tracking-[6px] text-[#CFAE52] text-sm font-semibold">
            {t.label}
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="border border-[#27313B] hover:border-[#CFAE52] rounded-full px-4 py-2 text-sm"
            >
              {t.home}
            </Link>

            <button
              onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
              className="border border-[#27313B] hover:border-[#CFAE52] rounded-full px-4 py-2 text-sm flex items-center gap-2"
            >
              <Globe2 size={16} />
              {lang === 'es' ? 'EN' : 'ES'}
            </button>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-black leading-tight mb-8">
          {t.title1}
          <span className="block text-[#CFAE52]">{t.title2}</span>
        </h1>

        <p className="text-[#A6B0BB] text-xl max-w-4xl leading-relaxed mb-16">
          {t.intro}
        </p>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mb-20">
          {t.metals.map(([symbol, name, price, change, trend, region]) => (
            <div
              key={symbol}
              className="bg-[#17212B] border border-[#27313B] hover:border-[#CFAE52] rounded-[32px] p-8 transition-all"
            >
              <div className="flex justify-between items-start mb-8">
                <div>
                  <div className="text-5xl font-black text-[#CFAE52]">{symbol}</div>
                  <div className="text-[#A6B0BB] mt-2">{name}</div>
                </div>

                <Activity className="text-[#CFAE52]" size={34} />
              </div>

              <div className="space-y-4">
                <div>
                  <div className="text-[#A6B0BB] text-sm">Precio referencial</div>
                  <div className="text-2xl font-bold">{price}</div>
                </div>

                <div>
                  <div className="text-[#A6B0BB] text-sm">Variación</div>
                  <div className="text-lg text-[#CFAE52]">{change}</div>
                </div>

                <div>
                  <div className="text-[#A6B0BB] text-sm">Tendencia</div>
                  <div className="text-lg">{trend}</div>
                </div>

                <div>
                  <div className="text-[#A6B0BB] text-sm">Relevancia estratégica</div>
                  <div className="text-lg">{region}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {t.regions.map(([country, desc], index) => {
            const icons = [Globe2, TrendingUp, ShieldCheck]
            const Icon = icons[index]

            return (
              <div key={country} className="bg-[#17212B] border border-[#27313B] rounded-[32px] p-8">
                <Icon className="text-[#CFAE52] mb-6" size={40} />
                <h2 className="text-2xl font-bold mb-4">{country}</h2>
                <p className="text-[#A6B0BB] leading-relaxed">{desc}</p>
              </div>
            )
          })}
        </div>

        <div className="bg-[#111A24] border border-[#27313B] rounded-[40px] p-10">
          <div className="flex items-center gap-4 mb-6">
            <AlertTriangle className="text-[#CFAE52]" size={36} />
            <h2 className="text-3xl font-black">{t.commentTitle}</h2>
          </div>

          <p className="text-zinc-300 text-lg leading-relaxed mb-6">{t.comment1}</p>
          <p className="text-[#A6B0BB] text-lg leading-relaxed">{t.comment2}</p>
        </div>
      </section>
    </main>
  )
}
'@

npm run build

if ($LASTEXITCODE -ne 0) {
  Write-Host "Build falló. No se hará commit." -ForegroundColor Red
  exit 1
}

git add .
git commit -m "Apply AMA Project ATLAS V3 redesign"
git push -u origin v2-intelligence-platform

Write-Host "ATLAS V3 aplicado correctamente en v2-intelligence-platform." -ForegroundColor Green
