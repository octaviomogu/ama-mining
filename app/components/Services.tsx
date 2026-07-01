import { Building2, MapPin, Pickaxe, ShieldCheck } from 'lucide-react'

const services = [
  {
    title: 'Concesiones Mineras',
    desc: 'ProtecciÃ³n, constituciÃ³n, revisiÃ³n y estrategia concesional minera.',
    icon: Pickaxe,
  },
  {
    title: 'Due Diligence',
    desc: 'EvaluaciÃ³n legal, territorial, tÃ©cnica y estratÃ©gica de activos mineros.',
    icon: ShieldCheck,
  },
  {
    title: 'Brokerage Minero',
    desc: 'IntermediaciÃ³n, valorizaciÃ³n, NDA, deal flow y networking inversionista.',
    icon: Building2,
  },
  {
    title: 'ExpansiÃ³n Regional',
    desc: 'Estrategia minera para Chile, Argentina y PerÃº.',
    icon: MapPin,
  },
]

export default function Services({ t }: { t: any }) {
  return (
    <section id="services" className="py-32 bg-[#0B1118]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-20">
          <div className="uppercase tracking-[5px] text-[#CFAE52] text-sm mb-4 font-semibold">
            {t.servicesEyebrow}
          </div>

          <h2 className="text-5xl md:text-6xl font-black mb-6">
            {t.servicesTitle}
          </h2>

          <p className="text-[#A6B0BB] text-xl max-w-3xl mx-auto">
            {t.servicesSubtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {services.map((service) => {
            const Icon = service.icon

            return (
              <div
                key={service.title}
                className="bg-[#17212B] border border-[#27313B] hover:border-[#CFAE52] rounded-[32px] p-8 transition-all"
              >
                <Icon className="text-[#CFAE52] mb-6" size={40} />
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-[#A6B0BB] leading-relaxed">{service.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}