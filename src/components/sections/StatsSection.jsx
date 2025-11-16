import { motion } from 'framer-motion'

export default function StatsSection() {
  const stats = [
    { k: '92%', v: 'Completion with Tap‑In', sub: 'vs 8% industry average' },
    { k: '0%', v: 'Rake', sub: 'Instant payouts' },
    { k: '23%', v: 'Market Growth', sub: 'Annualized' },
  ]

  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 min-h-[320px] grid place-items-center">
            <div className="text-center">
              <div className="text-white/80">Habit Tracker</div>
              <div className="mt-4 h-40 w-72 mx-auto rounded-xl bg-gradient-to-b from-[#A78BFA]/20 to-transparent relative overflow-hidden">
                <div className="absolute bottom-0 left-0 right-0 flex gap-2 items-end p-5">
                  {[40,60,80,55,95].map((h,i)=> (
                    <motion.div key={i} initial={{height:0}} whileInView={{height:h}} viewport={{once:true}} transition={{duration:0.8, delay:0.1*i}} className="w-8 rounded-md bg-gradient-to-t from-[#60A5FA] to-[#A78BFA]" style={{height:h}} />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {stats.map((s,i)=> (
              <motion.div key={s.k} initial={{opacity:0, y:14}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.5, delay:i*0.08}} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 text-center">
                <div className="text-4xl font-extrabold bg-gradient-to-br from-[#E1BFA5] via-[#A78BFA] to-[#60A5FA] text-transparent bg-clip-text">{s.k}</div>
                <div className="text-white font-medium mt-1">{s.v}</div>
                <div className="text-white/60 text-sm">{s.sub}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
