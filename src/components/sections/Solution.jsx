import { motion } from 'framer-motion'

const steps = [
  { step: '1', title: 'Stake', body: 'Put small money on the line for your commitment.' },
  { step: '2', title: 'Do', body: 'Complete the habit—short, human, achievable.' },
  { step: '3', title: 'Prove', body: 'Record a quick video check‑in for friendly verification.' },
  { step: '4', title: 'Payout', body: 'Instant rewards when you show up. Pride compounds.' },
]

export default function Solution() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">The Solution: Commitment Loop</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <motion.div key={s.step} initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.5, delay:i*0.06}} className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
              <div className="absolute -top-3 -left-3 h-10 w-10 rounded-xl bg-gradient-to-br from-[#E1BFA5] to-[#A78BFA] text-slate-900 grid place-items-center font-bold">{s.step}</div>
              <h3 className="text-white font-semibold">{s.title}</h3>
              <p className="text-white/70 text-sm mt-1">{s.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
