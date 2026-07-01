export default function About({ t }: { t: any }) {
  return (
    <section id="about" className="py-32 bg-[#111A24]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-20 items-center">
        <div>
          <div className="uppercase tracking-[5px] text-[#CFAE52] text-sm mb-4 font-semibold">
            {t.aboutEyebrow}
          </div>

          <h2 className="text-5xl md:text-6xl font-black leading-tight mb-8">
            {t.aboutTitle}
          </h2>

          <p className="text-[#A6B0BB] text-xl leading-relaxed">
            {t.aboutText}
          </p>
        </div>

        <img
          src="/images/mining-about.png"
          alt="Mining operation"
          className="rounded-[40px] border border-[#27313B] w-full h-[620px] object-cover shadow-[0_0_80px_rgba(0,0,0,0.7)]"
        />
      </div>
    </section>
  )
}