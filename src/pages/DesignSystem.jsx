import { motion } from 'framer-motion'

export default function DesignSystem() {
  return (
    <div className="min-h-screen bg-slate-950 text-white pt-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold">Design System</h1>
        <p className="text-white/70 mt-2">Brand colors, gradients, and surfaces.</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[['#E1BFA5','#D4A37F'], ['#A78BFA','#60A5FA'], ['#E1BFA5','#A78BFA'], ['#A78BFA','#E1BFA5']].map((g, i) => (
            <motion.div key={i} initial={{opacity:0,y:12}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="rounded-2xl p-6 border border-white/10 bg-white/5 backdrop-blur-xl">
              <div className="h-32 rounded-xl" style={{background:`linear-gradient(135deg, ${g[0]}, ${g[1]})`}} />
              <div className="mt-4 text-sm text-white/80">{g[0]} → {g[1]}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
