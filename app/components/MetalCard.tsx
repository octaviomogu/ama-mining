import { Activity } from 'lucide-react'

type MetalCardProps = {
  name: string
  symbol: string
  price: string
  change: string
  trend: string
  region: string
  impact: string
}

export default function MetalCard({
  name,
  symbol,
  price,
  change,
  trend,
  region,
  impact,
}: MetalCardProps) {
  return (
    <div className="bg-[#151515] border border-zinc-800 hover:border-[#D4A017] rounded-[32px] p-8 transition-all hover:shadow-[0_0_50px_rgba(212,160,23,0.15)]">
      <div className="flex justify-between items-start mb-8">
        <div>
          <div className="text-5xl font-black text-[#D4A017]">{symbol}</div>
          <div className="text-zinc-400 mt-2">{name}</div>
        </div>

        <Activity className="text-[#D4A017]" size={34} />
      </div>

      <div className="space-y-4">
        <div>
          <div className="text-zinc-500 text-sm">Reference Price</div>
          <div className="text-2xl font-bold">{price}</div>
        </div>

        <div>
          <div className="text-zinc-500 text-sm">Daily Variation</div>
          <div className="text-[#D4A017] text-lg">{change}</div>
        </div>

        <div>
          <div className="text-zinc-500 text-sm">Trend</div>
          <div className="text-lg">{trend}</div>
        </div>

        <div>
          <div className="text-zinc-500 text-sm">Strategic Region</div>
          <div className="text-lg">{region}</div>
        </div>

        <p className="text-zinc-400 leading-relaxed pt-4">{impact}</p>
      </div>
    </div>
  )
}