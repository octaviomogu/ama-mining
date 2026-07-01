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
                Founder & CEO Â· Strategic Mining Advisor
              </div>
              <p className="text-[#A6B0BB] leading-relaxed">
                Asesor legal experto en minerÃ­a, concesiones mineras, activos estratÃ©gicos,
                due diligence, brokerage minero y advisory regional.
              </p>
            </div>
          </div>

          <div className="bg-[#17212B] border border-[#27313B] rounded-[32px] p-8 flex flex-col justify-center">
            <h3 className="text-3xl font-black mb-2">MarÃ­a Paz Rivas</h3>
            <div className="text-[#CFAE52] font-semibold mb-6">
              Co-Founder & Chief Communications Officer
            </div>
            <p className="text-[#A6B0BB] text-lg leading-relaxed">
              Especialista en comunicaciones corporativas, posicionamiento institucional,
              reputaciÃ³n, relaciones estratÃ©gicas y narrativa empresarial para industrias
              de alto impacto.
            </p>
          </div>

          <div className="bg-[#17212B] border border-[#27313B] rounded-[32px] p-8 flex flex-col justify-center">
            <h3 className="text-3xl font-black mb-2">Technical Advisory</h3>
            <div className="text-[#CFAE52] font-semibold mb-6">
              Mining Engineering Â· SERNAGEOMIN Expertise
            </div>
            <p className="text-[#A6B0BB] text-lg leading-relaxed">
              El equipo AMA integra peritaje SERNAGEOMIN, ingenierÃ­a en minas,
              anÃ¡lisis territorial, criterio tÃ©cnico y soporte especializado para procesos
              de evaluaciÃ³n y toma de decisiones mineras.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}