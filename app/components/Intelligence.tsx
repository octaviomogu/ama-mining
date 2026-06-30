import Link from 'next/link'
import { ArrowRight, BarChart3 } from 'lucide-react'

export default function Intelligence({ t }: { t: any }) {
  return (
    <section id="intelligence" className="py-32 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="uppercase tracking-[5px] text-[#D4A017] text-sm mb-4 font-semibold">
            AMA Mining Intelligence Platform
          </div>

          <h2 className="text-5xl md:text-6xl font-black leading-tight mb-8">
            {t.intelligenceTitle}
          </h2>

          <p className="text-zinc-300 text-xl leading-relaxed mb-10">
            {t.intelligenceText}
          </p>

          <Link
            href="/dashboard"
            className="inline-flex items-center gap-3 bg-[#D4A017] hover:bg-[#f1bc2d] text-black font-bold px-8 py-4 rounded-2xl"
          >
            {t.intelligenceButton}
            <ArrowRight size={20} />
          </Link>
        </div>

        <div className="bg-[#151515] border border-zinc-800 rounded-[40px] p-10">
          <BarChart3 className="text-[#D4A017] mb-6" size={48} />

          <h3 className="text-3xl font-black mb-4">
            Metal Markets Monitor
          </h3>

          <p className="text-zinc-400 leading-relaxed">
            Cobre, oro, plata, litio y minerales críticos interpretados como señales de inversión, riesgo y oportunidad minera.
          </p>
        </div>
      </div>
    </section>
  )
}