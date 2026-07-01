import { Building2, FileSearch, Handshake, ShieldCheck } from 'lucide-react'

const reasons = [
  {
    title: 'ProtecciÃ³n de activos mineros',
    text: 'ConstituciÃ³n, revisiÃ³n, defensa y estrategia de concesiones mineras.',
    icon: ShieldCheck,
  },
  {
    title: 'Due diligence integral',
    text: 'RevisiÃ³n legal, tÃ©cnica, territorial y comercial antes de tomar decisiones.',
    icon: FileSearch,
  },
  {
    title: 'Brokerage minero estratÃ©gico',
    text: 'Compra, venta, valorizaciÃ³n, NDA, deal flow y negociaciÃ³n de activos.',
    icon: Handshake,
  },
  {
    title: 'Advisory regional',
    text: 'Chile, Argentina y PerÃº con visiÃ³n ejecutiva y criterio de inversiÃ³n.',
    icon: Building2,
  },
]

export default function WhyAMA({ t }: { t: any }) {
  return (
    <section className="py-32 bg-[#0B1118]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-4xl mb-20">
          <div className="uppercase tracking-[5px] text-[#CFAE52] text-sm mb-4 font-semibold">
            {t.whyEyebrow}
          </div>

          <h2 className="text-5xl md:text-6xl font-black leading-tight mb-8">
            {t.whyTitle}
          </h2>

          <p className="text-[#A6B0BB] text-xl leading-relaxed">
            {t.whyText}
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {reasons.map((item) => {
            const Icon = item.icon

            return (
              <div
                key={item.title}
                className="bg-[#17212B] border border-[#27313B] hover:border-[#CFAE52] rounded-[32px] p-8 transition-all"
              >
                <Icon className="text-[#CFAE52] mb-6" size={42} />
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-[#A6B0BB] leading-relaxed">{item.text}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}