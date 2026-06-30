import { metals } from '../data/metals'
import MetalCard from '../components/MetalCard'
import { Globe2, ShieldCheck, TrendingUp, AlertTriangle } from 'lucide-react'

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <section className="px-6 lg:px-10 py-28 max-w-7xl mx-auto">
        <div className="uppercase tracking-[6px] text-[#D4A017] text-sm font-semibold mb-6">
          AMA Mining Intelligence Platform
        </div>

        <h1 className="text-5xl md:text-7xl font-black leading-tight mb-8">
          Executive Mining
          <span className="block text-[#D4A017]">Dashboard</span>
        </h1>

        <p className="text-zinc-300 text-xl max-w-4xl leading-relaxed mb-16">
          Strategic market signals, metal prices and mining intelligence for
          Chile, Argentina and Peru. Built for investors, asset owners and
          decision makers.
        </p>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mb-20">
          {metals.map((metal) => (
            <MetalCard key={metal.symbol} {...metal} />
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          <div className="bg-[#151515] border border-zinc-800 rounded-[32px] p-8">
            <Globe2 className="text-[#D4A017] mb-6" size={40} />
            <h2 className="text-2xl font-bold mb-4">Chile</h2>
            <p className="text-zinc-400 leading-relaxed">
              Copper, lithium, concessions, mining regulation and strategic
              asset protection.
            </p>
          </div>

          <div className="bg-[#151515] border border-zinc-800 rounded-[32px] p-8">
            <TrendingUp className="text-[#D4A017] mb-6" size={40} />
            <h2 className="text-2xl font-bold mb-4">Argentina</h2>
            <p className="text-zinc-400 leading-relaxed">
              Copper expansion in San Juan and lithium growth across Salta,
              Catamarca and Jujuy.
            </p>
          </div>

          <div className="bg-[#151515] border border-zinc-800 rounded-[32px] p-8">
            <ShieldCheck className="text-[#D4A017] mb-6" size={40} />
            <h2 className="text-2xl font-bold mb-4">Peru</h2>
            <p className="text-zinc-400 leading-relaxed">
              Copper, silver, gold and strategic mining opportunities in one of
              the worldÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢s key mining jurisdictions.
            </p>
          </div>
        </div>

        <div className="bg-[#0A0A0A] border border-zinc-800 rounded-[40px] p-10">
          <div className="flex items-center gap-4 mb-6">
            <AlertTriangle className="text-[#D4A017]" size={36} />
            <h2 className="text-3xl font-black">AMA Daily Mining Intelligence</h2>
          </div>

          <p className="text-zinc-300 text-lg leading-relaxed mb-6">
            Copper remains the core strategic metal for Chile and Peru, while
            Argentina is increasingly positioned as a long-term growth platform
            through copper expansion in San Juan and lithium development in the
            NOA region.
          </p>

          <p className="text-zinc-400 text-lg leading-relaxed">
            AMA tracks market prices not only as financial indicators, but as
            signals of concession value, deal flow, project timing, investor
            appetite and territorial opportunity.
          </p>
        </div>
      </section>
    </main>
  )
}