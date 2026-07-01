import Link from 'next/link'
import { Globe2 } from 'lucide-react'
import { Lang } from '../lib/translations'

type Props = {
  lang: Lang
  setLang: (lang: Lang) => void
  t: any
}

export default function Navbar({ lang, setLang, t }: Props) {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-[#0B1118]/85 backdrop-blur-2xl border-b border-[#27313B]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <Link href="/" className="leading-none">
          <div className="text-2xl font-black tracking-[5px]">
            AMA<span className="text-[#CFAE52]">.</span>
          </div>
          <div className="text-[10px] tracking-[3px] uppercase text-[#A6B0BB] mt-1">
            Strategic Mining Advisory
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-7 text-sm text-zinc-300">
          <a href="/#services" className="hover:text-[#CFAE52] transition-all">{t.nav[0]}</a>
          <a href="/#about" className="hover:text-[#CFAE52] transition-all">{t.nav[1]}</a>
          <Link href="/dashboard" className="hover:text-[#CFAE52] transition-all">{t.nav[2]}</Link>
          <a href="/#regions" className="hover:text-[#CFAE52] transition-all">{t.nav[3]}</a>
          <a href="/#team" className="hover:text-[#CFAE52] transition-all">{t.nav[4]}</a>
          <a href="/#contact" className="hover:text-[#CFAE52] transition-all">{t.nav[5]}</a>
        </nav>

        <button
          onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
          className="border border-[#27313B] hover:border-[#CFAE52] rounded-full px-4 py-2 text-sm flex items-center gap-2"
        >
          <Globe2 size={16} />
          {lang === 'es' ? 'EN' : 'ES'}
        </button>
      </div>
    </header>
  )
}