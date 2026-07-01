export default function TrustBar({ t }: { t: any }) {
  return (
    <section className="bg-[#111A24] border-y border-[#27313B]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10 grid md:grid-cols-4 gap-8">
        {t.trust.map(([number, label]: [string, string]) => (
          <div key={number}>
            <div className="text-3xl md:text-4xl font-black text-[#CFAE52] mb-2">
              {number}
            </div>
            <div className="text-[#A6B0BB] leading-relaxed">{label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}