export default function Team({ t }: { t: any }) {
  return (
    <section id="team" className="py-32 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-20">
          <div className="uppercase tracking-[5px] text-[#D4A017] text-sm mb-4 font-semibold">
            Liderazgo
          </div>

          <h2 className="text-5xl md:text-6xl font-black">{t.teamTitle}</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          <div className="bg-[#151515] border border-zinc-800 rounded-[32px] overflow-hidden">
            <img
              src="/images/octavio.png"
              alt="Octavio Moya"
              className="w-full h-[600px] object-cover"
            />

            <div className="p-8">
              <h3 className="text-3xl font-black mb-2">Octavio Moya</h3>

              <div className="text-[#D4A017] font-semibold mb-6">
                Founder & Strategic Mining Advisor
              </div>

              <p className="text-zinc-400 leading-relaxed">
                Asesor legal experto en minería, concesiones mineras,
                inteligencia territorial y advisory minero estratégico.
              </p>
            </div>
          </div>

          <div className="bg-[#151515] border border-zinc-800 rounded-[32px] p-8 flex flex-col justify-center">
            <h3 className="text-3xl font-black mb-4">
              Equipo técnico minero
            </h3>

            <p className="text-zinc-400 text-lg leading-relaxed">
              El equipo AMA integra experiencia en peritaje SERNAGEOMIN,
              ingeniería en minas, comunicaciones estratégicas, análisis
              territorial y estructuración de oportunidades mineras.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}