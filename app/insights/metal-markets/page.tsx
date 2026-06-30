import { metals } from '@/app/data/metals'
import { TrendingUp, Activity, Globe2 } from 'lucide-react'

export default function MetalMarketsPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <section className="px-6 lg:px-10 py-32 max-w-7xl mx-auto">
        <div className="uppercase tracking-[6px] text-[#D4A017] text-sm font-semibold mb-6">
          AMA Metal Markets Monitor
        </div>

        <h1 className="text-5xl md:text-7xl font-black leading-tight mb-8">
          Metals, Prices
          <span className="block text-[#D4A017]">and Mining Signals</span>
        </h1>

        <p className="text-zinc-300 text-xl max-w-4xl leading-relaxed mb-16">
          A strategic market monitor for copper, lithium, gold, silver and
          critical minerals with interpretation for Chile, Argentina and Peru.
        </p>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mb-20">
          {metals.map((metal) => (
            <div
              key={metal.symbol}
              className="bg-[#151515] border border-zinc-800 hover:border-[#D4A017] rounded-[32px] p-8 transition-all"
            >
              <div className="flex items-center justify-between mb-8">
                <div>
                  <div className="text-5xl font-black text-[#D4A017]">
                    {metal.symbol}
                  </div>
                  <div className="text-zinc-400 mt-2">{metal.name}</div>
                </div>

                <Activity className="text-[#D4A017]" size={34} />
              </div>

              <div className="space-y-4">
                <div>
                  <div className="text-zinc-500 text-sm">Reference Price</div>
                  <div className="text-2xl font-bold">{metal.price}</div>
                </div>

                <div>
                  <div className="text-zinc-500 text-sm">Variation</div>
                  <div className="text-lg text-[#D4A017]">{metal.change}</div>
                </div>

                <div>
                  <div className="text-zinc-500 text-sm">Trend</div>
                  <div className="text-lg">{metal.trend}</div>
                </div>

                <div>
                  <div className="text-zinc-500 text-sm">Strategic Relevance</div>
                  <div className="text-lg">{metal.region}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#0A0A0A] border border-zinc-800 rounded-[40px] p-10">
          <div className="flex items-center gap-4 mb-6">
            <TrendingUp className="text-[#D4A017]" size={36} />
            <h2 className="text-3xl font-black">AMA Strategic Comment</h2>
          </div>

          <p className="text-zinc-300 text-lg leading-relaxed mb-6">
            Copper remains the core strategic metal for Chile and Peru, while
            Argentina is increasingly positioned as a long-term growth platform
            through copper expansion in San Juan and lithium development in the
            NOA region.
          </p>

          <p className="text-zinc-400 text-lg leading-relaxed">
            AMA tracks metal markets not only as price references, but as
            indicators of deal flow, concession value, project timing, investor
            appetite and cross-border mining opportunities.
          </p>

          <div className="mt-8 flex items-center gap-3 text-[#D4A017]">
            <Globe2 size={20} />
            Chile ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚Â¢ Argentina ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚Â¢ Peru
          </div>
        </div>
      </section>
    </main>
  )
}
