import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/kqB-rdL4TCJ7pyGb/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/30 via-slate-950/60 to-slate-950" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-40 pb-24 text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-6xl font-extrabold tracking-tight"
        >
          Build habits you’ll be proud of
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mt-6 text-lg sm:text-xl text-white/80 max-w-2xl mx-auto"
        >
          Social accountability with real stakes. Elegant design, soothing motion, and a touch of gold.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 flex items-center justify-center gap-4"
        >
          <button className="group relative inline-flex items-center gap-2 rounded-2xl px-5 py-3 font-medium text-slate-900">
            <span className="absolute -inset-[1.5px] rounded-2xl bg-gradient-to-br from-[#E1BFA5] via-[#A78BFA] to-[#60A5FA] blur-[6px] opacity-70 group-hover:opacity-90 transition" />
            <span className="relative rounded-[14px] bg-white/90 px-5 py-3 border border-white/40 backdrop-blur-xl">
              Get Started
            </span>
          </button>
          <button className="rounded-2xl border border-white/20 px-5 py-3 text-white/90 hover:bg-white/10">
            Learn more
          </button>
        </motion.div>
      </div>
    </section>
  )
}
