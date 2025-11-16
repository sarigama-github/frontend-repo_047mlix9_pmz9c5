import { motion } from 'framer-motion'
import { ShieldCheck, Users, Camera, Wallet } from 'lucide-react'

const features = [
  {
    icon: ShieldCheck,
    title: 'Accountability that sticks',
    desc: 'Stake real money to keep your commitment. Your friends will see if you miss. '
  },
  {
    icon: Users,
    title: 'Groups that lift you up',
    desc: 'Join circles with shared goals. Celebrate wins, nudge when needed.'
  },
  {
    icon: Camera,
    title: 'Video check‑ins',
    desc: 'Record quick proof of completion. Authentic and human.'
  },
  {
    icon: Wallet,
    title: 'Clean money flow',
    desc: 'Transparent stakes, payouts, and fees. No surprises.'
  }
]

export default function FeatureCards() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-slate-950 to-slate-950">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-x-0 -top-24 h-72 bg-gradient-to-b from-[#E1BFA5]/20 via-[#A78BFA]/10 to-transparent blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6"
            >
              <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-[#E1BFA5] to-[#D4A37F] grid place-items-center mb-4">
                {<f.icon className="h-6 w-6 text-slate-900" />}
              </div>
              <h3 className="text-white font-semibold mb-1">{f.title}</h3>
              <p className="text-white/70 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
