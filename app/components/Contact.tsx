import { Mail, Phone } from 'lucide-react'

export default function Contact({ t }: { t: any }) {
  return (
    <section id="contact" className="py-32 bg-[#0B1118]">
      <div className="relative max-w-5xl mx-auto px-6 lg:px-10 text-center">
        <div className="uppercase tracking-[5px] text-[#CFAE52] text-sm mb-4 font-semibold">
          {t.contactEyebrow}
        </div>

        <h2 className="text-5xl md:text-7xl font-black leading-tight mb-8">
          {t.contactTitle}
        </h2>

        <p className="text-[#A6B0BB] text-xl leading-relaxed mb-12">
          {t.contactText}
        </p>

        <div className="flex flex-col items-center gap-5 text-xl">
          <a
            href="mailto:octaviomoya@gmail.com"
            className="flex items-center gap-3 hover:text-[#CFAE52]"
          >
            <Mail className="text-[#CFAE52]" />
            octaviomoya@gmail.com
          </a>

          <a
            href="https://wa.me/56968631097"
            target="_blank"
            className="flex items-center gap-3 hover:text-[#CFAE52]"
          >
            <Phone className="text-[#CFAE52]" />
            +56 9 6863 1097
          </a>

          <div>Chile â€” Argentina â€” PerÃº</div>
        </div>
      </div>
    </section>
  )
}