import { Building2, FileSearch, Handshake, ShieldCheck } from 'lucide-react'

const reasons = [
  {
    title: 'Protección de activos mineros',
    text: 'Acompañamos la constitución, revisión, defensa y estrategia de concesiones mineras.',
    icon: ShieldCheck,
  },
  {
    title: 'Due diligence integral',
    text: 'Integramos revisión legal, técnica, territorial y comercial antes de tomar decisiones.',
    icon: FileSearch,
  },
  {
    title: 'Brokerage minero estratégico',
    text: 'Apoyamos procesos de compra, venta, valorización, NDA y negociación de activos.',
    icon: Handshake,
  },
  {
    title: 'Advisory regional',
    text: 'Conectamos oportunidades y riesgos en Chile, Argentina y Perú con visión ejecutiva.',
    icon: Building2,
  },
]

export default function WhyAMA() {
  return (
    <section className="py-32 bg-[#0B1118]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-4xl mb-20">
          <div className="uppercase tracking-[5px] text-[#CFAE52] text-sm mb-4 font-semibold">
            Why AMA
          </div>

          <h2 className="text-5xl md:text-6xl font-black leading-tight mb-8">
            Mining assets require strategic decisions.
          </h2>

          <p className="text-[#A6B0BB] text-xl leading-relaxed">
            AMA ayuda a empresas mineras, inversionistas y titulares de concesiones
            a proteger, evaluar y desarrollar activos mineros con criterio legal,
            técnico y comercial.
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