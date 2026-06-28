import Link from 'next/link'
import { ArrowRight, BarChart3, Globe2, ShieldCheck } from 'lucide-react'

export default function InsightsPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <section className="px-6 lg:px-10 py-32 max-w-7xl mx-auto">
        <div className="uppercase tracking-[6px] text-[#D4A017] text-sm font-semibold mb-6">
          AMA Mining Intelligence Center
        </div>

        <h1 className="text-5xl md:text-7xl font-black leading-tight mb-8">
          Mining Intelligence,
          <span className="block text-[#D4A017]">Markets & Strategy</span>
        </h1>

        <p className="text-zinc-300 text-xl max-w-4xl leading-relaxed mb-16">
          Analysis, market signals and strategic mining information for Chile,
          Argentina and Peru. Built for investors, mining companies, asset owners
          and strategic decision makers.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <Link
            href="/insights/metal-markets"
            className="bg-[#151515] border border-zinc-800 hover:border-[#D4A017] rounded-[32px] p-8 transition-all"
          >
            <BarChart3 className="text-[#D4A017] mb-6" size={42} />
            <h2 className="text-2xl font-bold mb-4">Metal Markets Monitor</h2>
            <p className="text-zinc-400 leading-relaxed mb-6">
              Copper, lithium, gold, silver and strategic minerals with market
              interpretation for LATAM mining opportunities.
            </p>
            <div className="flex items-center gap-2 text-[#D4A017] font-semibold">
              View monitor <ArrowRight size={18} />
            </div>
          </Link>

          <div className="bg-[#151515] border border-zinc-800 rounded-[32px] p-8">
            <Globe2 className="text-[#D4A017] mb-6" size={42} />
            <h2 className="text-2xl font-bold mb-4">Chile • Argentina • Peru</h2>
            <p className="text-zinc-400 leading-relaxed">
              Cross-border intelligence focused on copper, lithium, rare earths,
              concessions, regulation and project development.
            </p>
          </div>

          <div className="bg-[#151515] border border-zinc-800 rounded-[32px] p-8">
            <ShieldCheck className="text-[#D4A017] mb-6" size={42} />
            <h2 className="text-2xl font-bold mb-4">Regulatory Watch</h2>
            <p className="text-zinc-400 leading-relaxed">
              Strategic monitoring of mining regulation, concession risks,
              territorial conflicts and investment conditions.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}