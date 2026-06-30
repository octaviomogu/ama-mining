const regions = [
  'San Juan — Cobre y desarrollo minero',
  'Salta, Catamarca y Jujuy — Litio y minerales críticos',
  'Antofagasta — Capital minera de Chile',
  'Santiago — Centro financiero y corporativo',
  'Perú — Cobre, oro, plata y oportunidades mineras',
]

export default function Regions({ t }: { t: any }) {
  return (
    <section id="regions" className="py-32 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-20 items-center">
        <img
          src="/images/mining-about.png"
          alt="Strategic mining regions"
          className="rounded-[40px] border border-zinc-800 w-full h-[620px] object-cover shadow-[0_0_80px_rgba(0,0,0,0.7)]"
        />

        <div>
          <div className="uppercase tracking-[5px] text-[#D4A017] text-sm mb-4 font-semibold">
            Regiones
          </div>

          <h2 className="text-5xl md:text-6xl font-black leading-tight mb-10">
            {t.regionsTitle}
          </h2>

          <div className="space-y-5">
            {regions.map((region) => (
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
  )
}