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
      'SeÃ±ales de mercado, precios de metales y anÃ¡lisis estratÃ©gico para decisiones sobre activos mineros en Chile, Argentina y PerÃº.',
    metals: [
      ['Cu', 'Cobre', 'US$ 4.58/lb', '+1.14%', 'Alcista', 'Chile â€¢ PerÃº â€¢ Argentina'],
      ['Au', 'Oro', 'US$ 2,365/oz', '+0.61%', 'Defensivo', 'Chile â€¢ Argentina â€¢ PerÃº'],
      ['Ag', 'Plata', 'US$ 31.04/oz', '-0.12%', 'Estable', 'PerÃº â€¢ Chile â€¢ Argentina'],
      ['Li', 'Litio', 'Referencia de mercado', 'VolÃ¡til', 'EstratÃ©gico', 'Argentina â€¢ Chile â€¢ PerÃº'],
    ],
    regions: [
      ['Chile', 'Cobre, litio, concesiones mineras, regulaciÃ³n y protecciÃ³n de activos estratÃ©gicos.'],
      ['Argentina', 'ExpansiÃ³n cuprÃ­fera en San Juan y desarrollo de litio en Salta, Catamarca y Jujuy.'],
      ['PerÃº', 'Cobre, oro, plata y oportunidades mineras en una jurisdicciÃ³n clave para la regiÃ³n.'],
    ],
    commentTitle: 'Comentario EstratÃ©gico AMA',
    comment1:
      'El cobre continÃºa siendo el metal estratÃ©gico central para Chile y PerÃº, mientras Argentina fortalece su posiciÃ³n como plataforma de crecimiento minero a travÃ©s del cobre en San Juan y el litio en el NOA.',
    comment2:
      'AMA analiza los precios de metales no solo como referencias financieras, sino como seÃ±ales de valor concesional, oportunidad de inversiÃ³n, timing de proyectos y apetito del mercado.',
  },
  en: {
    label: 'AMA Strategic Market Analysis',
    title1: 'Market Analysis',
    title2: 'Center',
    home: 'Back to AMA',
    intro:
      'Market signals, metal prices and strategic analysis for mining asset decisions across Chile, Argentina and Peru.',
    metals: [
      ['Cu', 'Copper', 'US$ 4.58/lb', '+1.14%', 'Bullish', 'Chile â€¢ Peru â€¢ Argentina'],
      ['Au', 'Gold', 'US$ 2,365/oz', '+0.61%', 'Defensive', 'Chile â€¢ Argentina â€¢ Peru'],
      ['Ag', 'Silver', 'US$ 31.04/oz', '-0.12%', 'Stable', 'Peru â€¢ Chile â€¢ Argentina'],
      ['Li', 'Lithium', 'Market reference', 'Volatile', 'Strategic', 'Argentina â€¢ Chile â€¢ Peru'],
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
                  <div className="text-[#A6B0BB] text-sm">VariaciÃ³n</div>
                  <div className="text-lg text-[#CFAE52]">{change}</div>
                </div>

                <div>
                  <div className="text-[#A6B0BB] text-sm">Tendencia</div>
                  <div className="text-lg">{trend}</div>
                </div>

                <div>
                  <div className="text-[#A6B0BB] text-sm">Relevancia estratÃ©gica</div>
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