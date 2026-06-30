import { Mail, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-black py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col lg:flex-row items-center justify-between gap-6">
        <div>
          <div className="text-2xl font-black tracking-[4px] mb-2">
            AMA<span className="text-[#D4A017]">.</span>
          </div>

          <div className="text-zinc-500 text-sm">
            Andes Mining Advisory © 2026
          </div>
        </div>

        <div className="flex items-center gap-6 text-zinc-400">
          <a
            href="https://www.linkedin.com/company/andes-mining-advisory-ama"
            target="_blank"
            className="hover:text-[#D4A017] border border-zinc-700 rounded-md px-2 py-1 font-bold"
          >
            in
          </a>

          <a
            href="mailto:octaviomoya@gmail.com"
            className="hover:text-[#D4A017]"
          >
            <Mail size={22} />
          </a>

          <a
            href="https://wa.me/56968631097"
            target="_blank"
            className="hover:text-[#D4A017]"
          >
            <Phone size={22} />
          </a>
        </div>
      </div>
    </footer>
  )
}