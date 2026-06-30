import { Globe2 } from 'lucide-react'
import { Lang } from '../lib/translations'

type Props = {
  lang: Lang
  setLang: (lang: Lang) => void
  t: any
}

export default function Navbar({ lang, setLang, t }: Props) {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-black/35 backdrop-blur-2xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <div className="text-2xl font-black tracking-[5px]">
          AMA<span className="text-[#D4A017]">.</span>
        </div>

        <nav className="hidden md:flex items-center gap-7 text-sm text-zinc-300">
          <a href="#about" className="hover:text-[#D4A017]">{t.nav[0]}</a>
          <a href="#services" className="hover:text-[#D4A017]">{t.nav[1]}</a>
          <a href="#regions" className="hover:text-[#D4A017]">{t.nav[2]}</a>
          <a href="#team" className="hover:text-[#D4A017]">{t.nav[3]}</a>
          <a href="#intelligence" className="hover:text-[#D4A017]">{t.nav[4]}</a>
          <a href="#contact" className="hover:text-[#D4A017]">{t.nav[5]}</a>
        </nav>

        <button
          onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
          className="border border-zinc-700 hover:border-[#D4A017] rounded-full px-4 py-2 text-sm flex items-center gap-2"
        >
          <Globe2 size={16} />
          {lang === 'es' ? 'EN' : 'ES'}
        </button>
      </div>
    </header>
  )
}