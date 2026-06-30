import { ArrowRight, MessageCircle } from 'lucide-react'

export default function Hero({ t }: { t: any }) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <a
        href="https://wa.me/56968631097"
        target="_blank"
        className="fixed bottom-6 right-6 z-50 bg-[#D4A017] hover:scale-110 transition-all text-black p-5 rounded-full shadow-[0_0_40px_rgba(212,160,23,0.6)]"
      >
        <MessageCircle size={28} />
      </a>

      <div
        className="absolute inset-0 bg-cover bg-center scale-110"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=2000&auto=format&fit=crop')",
        }}
      />
      <div className="absolute inset-0 bg-black/80" />
      <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-[#D4A017]/20 blur-[160px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-40">
        <div className="max-w-5xl">
          <div className="uppercase tracking-[8px] text-[#D4A017] text-sm font-semibold mb-6">
            Andes Mining Advisory
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-[110px] font-black leading-none mb-8">
            {t.heroTitle1}
            <span className="block text-[#D4A017] drop-shadow-[0_0_25px_rgba(212,160,23,0.5)]">
              {t.heroTitle2}
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-zinc-300 leading-relaxed max-w-4xl mb-10">
            {t.heroText}
          </p>

          <div className="flex flex-wrap gap-5">
            <a href="#services" className="bg-[#D4A017] hover:bg-[#f1bc2d] text-black font-bold px-8 py-4 rounded-2xl flex items-center gap-3">
              {t.ctaServices}
              <ArrowRight size={20} />
            </a>

            <a href="#contact" className="border border-zinc-700 hover:border-[#D4A017] px-8 py-4 rounded-2xl font-semibold">
              {t.ctaContact}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}