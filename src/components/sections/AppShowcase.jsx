import { motion, useScroll, useTransform } from 'framer-motion'

export default function AppShowcase() {
  const { scrollYProgress } = useScroll()
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08])
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -4])

  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">A soothing, social habit tracker</h2>
            <p className="mt-4 text-white/70">Beautiful motion, friendly accountability, and proof that builds pride. Glide through your day with gentle nudges and instant validation.</p>
          </div>
          <div className="relative h-[520px]">
            <div className="absolute -inset-6 rounded-[32px] bg-gradient-to-br from-[#E1BFA5]/25 via-[#A78BFA]/15 to-[#60A5FA]/25 blur-2xl" />
            <motion.div style={{ scale, rotate }} className="relative h-full rounded-[28px] border border-white/15 bg-white/5 backdrop-blur-2xl p-6">
              <div className="h-full w-full rounded-2xl bg-[radial-gradient(120%_80%_at_50%_0%,rgba(255,255,255,0.12),rgba(255,255,255,0.02))] grid place-items-center">
                <div className="aspect-[9/19] w-64 rounded-[2rem] border border-white/20 bg-gradient-to-b from-slate-900/60 to-slate-950/80 shadow-2xl relative overflow-hidden">
                  <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#A78BFA]/30 to-transparent" />
                  <div className="absolute bottom-0 inset-x-0 p-4">
                    <div className="rounded-xl p-3 bg-white/10 backdrop-blur border border-white/15 text-white/90 text-sm">“Day 7 complete. Proud of you.”</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
