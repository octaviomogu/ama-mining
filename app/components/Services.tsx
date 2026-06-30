import { Building2, MapPin, Pickaxe, ShieldCheck } from 'lucide-react'

const services = [
  {
    title: 'Concesiones Mineras',
    desc: 'Protección, constitución, revisión y estrategia concesional minera.',
    icon: Pickaxe,
  },
  {
    title: 'Due Diligence',
    desc: 'Evaluación legal, territorial, técnica y estratégica de activos mineros.',
    icon: ShieldCheck,
  },
  {
    title: 'Brokerage Minero',
    desc: 'Intermediación, valorización, NDA, deal flow y networking inversionista.',
    icon: Building2,
  },
  {
    title: 'Expansión Regional',
    desc: 'Estrategia minera para Chile, Argentina y Perú.',
    icon: MapPin,
  },
]

export default function Services({ t }: { t: any }) {
  return (
    <section id="services" className="py-32 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-20">
          <div className="uppercase tracking-[5px] text-[#D4A017] text-sm mb-4 font-semibold">
            Servicios
          </div>

          <h2 className="text-5xl md:text-6xl font-black mb-6">
            {t.servicesTitle}
          </h2>

          <p className="text-zinc-400 text-xl max-w-3xl mx-auto">
            {t.servicesSubtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {services.map((service) => {
            const Icon = service.icon

            return (
              <div
                key={service.title}
                className="bg-[#151515] border border-zinc-800 hover:border-[#D4A017] rounded-[32px] p-8 transition-all"
              >
                <Icon className="text-[#D4A017] mb-6" size={40} />
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{service.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}