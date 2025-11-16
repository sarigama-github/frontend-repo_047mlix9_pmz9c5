import { motion } from 'framer-motion'

export default function Market() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">Market Breakdown</h2>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[360px]">
            <div className="absolute inset-0 grid place-items-center">
              {[1,2,3].map((r,i)=> (
                <motion.div key={i} initial={{opacity:0, scale:0.9}} whileInView={{opacity:0.6-i*0.15, scale:1}} viewport={{once:true}} transition={{duration:0.8, delay:i*0.12}} className={`absolute rounded-full border border-white/15`} style={{height: 240+ i*120, width: 240 + i*120}} />
              ))}
            </div>
            <div className="absolute inset-0 grid place-items-center text-center">
              <div>
                <div className="text-sm text-white/70">TAM</div>
                <div className="text-3xl font-bold text-white">$1.9B</div>
                <div className="text-sm text-white/60">Global behavioral change apps</div>
              </div>
            </div>
          </div>
          <div className="space-y-4 text-white/80">
            <p><span className="text-white font-semibold">SAM:</span> $380M English-speaking markets</p>
            <p><span className="text-white font-semibold">Growth:</span> 23% annual</p>
            <p><span className="text-white font-semibold">User Success:</span> 92% vs industry 8%</p>
          </div>
        </div>
      </div>
    </section>
  )
}
