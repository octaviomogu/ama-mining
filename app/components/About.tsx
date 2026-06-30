export default function About({ t }: { t: any }) {
  return (
    <section id="about" className="py-32 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-20 items-center">
        <div>
          <div className="uppercase tracking-[5px] text-[#D4A017] text-sm mb-4 font-semibold">
            Sobre AMA
          </div>

          <h2 className="text-5xl md:text-6xl font-black leading-tight mb-8">
            {t.aboutTitle}
          </h2>

          <p className="text-zinc-300 text-lg leading-relaxed">
            {t.aboutText}
          </p>
        </div>

        <img
          src="/images/mining-about.png"
          alt="Mining operation"
          className="rounded-[40px] border border-zinc-800 w-full h-[620px] object-cover shadow-[0_0_80px_rgba(0,0,0,0.7)]"
        />
      </div>
    </section>
  )
}