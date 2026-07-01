import Link from 'next/link'
import { Mail, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-[#27313B] bg-[#060A0F] py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-3 gap-10 items-start">
        <div>
          <Link href="/">
            <div className="text-3xl font-black tracking-[4px] mb-2">
              AMA<span className="text-[#CFAE52]">.</span>
            </div>
            <div className="text-[#A6B0BB] text-sm tracking-[3px] uppercase">
              Strategic Mining Advisory
            </div>
          </Link>
        </div>

        <div className="text-[#A6B0BB] space-y-2">
          <div>Mining Assets</div>
          <div>Due Diligence</div>
          <div>Mining Brokerage</div>
          <div>Market Analysis</div>
          <div>Chile Â· Argentina Â· PerÃº</div>
        </div>

        <div className="flex lg:justify-end items-center gap-6 text-zinc-400">
          <a
            href="https://www.linkedin.com/company/andes-mining-advisory-ama"
            target="_blank"
            className="hover:text-[#CFAE52] border border-[#27313B] rounded-md px-2 py-1 font-bold"
          >
            in
          </a>

          <a href="mailto:octaviomoya@gmail.com" className="hover:text-[#CFAE52]">
            <Mail size={22} />
          </a>

          <a href="https://wa.me/56968631097" target="_blank" className="hover:text-[#CFAE52]">
            <Phone size={22} />
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 mt-10 pt-8 border-t border-[#27313B] text-[#6E7A89] text-sm">
        Andes Mining Advisory Â© 2026
      </div>
    </footer>
  )
}