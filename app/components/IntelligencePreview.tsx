import Link from 'next/link'
import { ArrowRight, BarChart3, Globe2, ShieldCheck, TrendingUp } from 'lucide-react'

type Props = {
  lang: 'es' | 'en'
}

export default function IntelligencePreview({ lang }: Props) {
  const t = {
    es: {
      label: 'AMA Mining Intelligence Platform',
      title1: 'Inteligencia Minera',
      title2: 'para mejores decisiones',
      body: 'Mercados de metales, señales estratégicas, regulación minera y análisis ejecutivo para Chile, Argentina y Perú.',
      button: 'Entrar al Intelligence Center',
      cards: [
        ['Metal Markets', 'Cobre, oro, plata, litio y minerales estratégicos.'],
        ['Regulatory Watch', 'Seguimiento normativo y riesgos concesionales.'],
        ['Mining Signals', 'Señales de mercado, inversión y oportunidades.'],
      ],
    },
    en: {
      label: 'AMA Mining Intelligence Platform',
      title1: 'Mining Intelligence',
      title2: 'for better decisions',
      body: 'Metal markets, strategic signals, mining regulation and executive analysis for Chile, Argentina and Peru.',
      button: 'Enter Intelligence Center',
      cards: [
        ['Metal Markets', 'Copper, gold, silver, lithium and strategic minerals.'],
        ['Regulatory Watch', 'Regulatory monitoring and concession risk.'],
        ['Mining Signals', 'Market, investment and opportunity signals.'],
      ],
    },
  }[lang]

  const icons = [BarChart3, ShieldCheck, TrendingUp]

  return (
    <section id="intelligence" className="py-32 bg-[#0A0A0A] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D4A017]/10 blur-[150px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="uppercase tracking-[5px] text-[#D4A017] text-sm mb-4 font-semibold">
              {t.label}
            </div>

            <h2 className="text-5xl md:text-6xl font-black leading-tight mb-8">
              {t.title1}
              <span className="block text-[#D4A017]">{t.title2}</span>
            </h2>

            <p className="text-zinc-300 text-xl leading-relaxed mb-10">
              {t.body}
            </p>

            <Link
              href="/dashboard"
              className="inline-flex items-center gap-3 bg-[#D4A017] hover:bg-[#f1bc2d] transition-all text-black font-bold px-8 py-4 rounded-2xl shadow-[0_0_40px_rgba(212,160,23,0.35)]"
            >
              {t.button}
              <ArrowRight size={20} />
            </Link>
          </div>

          <div className="bg-[#151515] border border-zinc-800 rounded-[40px] p-8 shadow-[0_0_80px_rgba(0,0,0,0.65)]">
            <div className="flex items-center gap-4 mb-8">
              <Globe2 className="text-[#D4A017]" size={42} />
              <div>
                <div className="text-2xl font-black">Chile • Argentina • Perú</div>
                <div className="text-zinc-500">Strategic Mining Intelligence</div>
              </div>
            </div>

            <div className="space-y-5">
              {t.cards.map(([title, desc], index) => {
                const Icon = icons[index]

                return (
                  <div
                    key={title}
                    className="bg-black/40 border border-zinc-800 rounded-2xl p-5 hover:border-[#D4A017] transition-all"
                  >
                    <Icon className="text-[#D4A017] mb-3" size={28} />
                    <h3 className="text-xl font-bold mb-2">{title}</h3>
                    <p className="text-zinc-400 leading-relaxed">{desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
