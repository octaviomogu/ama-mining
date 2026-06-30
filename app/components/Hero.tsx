import { ArrowRight, MessageCircle } from 'lucide-react'

export default function Hero({ t }: { t: any }) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0B0F14]">
      <a
        href="https://wa.me/56968631097"
        target="_blank"
        className="fixed bottom-6 right-6 z-50 bg-[#D4A017] hover:scale-110 transition-all text-black p-5 rounded-full shadow-[0_0_40px_rgba(212,160,23,0.6)]"
      >
        <MessageCircle size={28} />
      </a>

      <div
        className="absolute inset-0 bg-cover bg-center scale-110 opacity-75"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=2200&auto=format&fit=crop')",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F14] via-[#0B0F14]/85 to-[#0B0F14]/55" />
      <div className="absolute top-0 left-0 w-[720px] h-[720px] bg-[#D4A017]/20 blur-[170px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#6E7A89]/10 blur-[150px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-40">
        <div className="max-w-6xl">
          <div className="uppercase tracking-[8px] text-[#D4A017] text-sm font-semibold mb-6">
            Andes Mining Advisory
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-[112px] font-black leading-none mb-8">
            {t.heroTitle1}
            <span className="block text-[#D4A017] drop-shadow-[0_0_25px_rgba(212,160,23,0.45)]">
              {t.heroTitle2}
            </span>
          </h1>

          <p className="text-2xl md:text-3xl text-zinc-200 leading-relaxed max-w-5xl mb-6">
            {t.heroText}
          </p>

          <p className="text-base md:text-lg text-zinc-400 tracking-wide mb-10">
            {t.heroSubline}
          </p>

          <div className="flex flex-wrap gap-5">
            <a
              href="#services"
              className="bg-[#D4A017] hover:bg-[#f1bc2d] text-black font-bold px-8 py-4 rounded-2xl flex items-center gap-3 shadow-[0_0_40px_rgba(212,160,23,0.35)]"
            >
              {t.ctaServices}
              <ArrowRight size={20} />
            </a>

            <a
              href="#contact"
              className="border border-zinc-600 hover:border-[#D4A017] px-8 py-4 rounded-2xl font-semibold bg-white/5 backdrop-blur-md"
            >
              {t.ctaContact}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}