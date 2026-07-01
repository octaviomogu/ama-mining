import Link from 'next/link'
import { ArrowRight, BarChart3 } from 'lucide-react'

const metals = [
  ['Copper', 'Core signal for Chile and Peru. San Juan strengthens Argentinaâ€™s copper position.'],
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