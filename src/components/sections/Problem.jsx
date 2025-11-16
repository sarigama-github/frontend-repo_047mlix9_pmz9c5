import { motion } from 'framer-motion'

const problems = [
  { title: '92% fail rates', body: 'People struggle to maintain habits because motivation fades and life gets busy.' },
  { title: 'No real stakes', body: 'Most apps rely on reminders only. Without consequences, it’s easy to skip.' },
  { title: 'Lonely journeys', body: 'Progress is invisible to friends. No shared pride, no support.' },
  { title: 'Cluttered UX', body: 'Overloaded screens and noisy UI overwhelm instead of helping.' },
]

export default function Problem() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">The Problem</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((p, i) => (
            <motion.div key={p.title} initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{once:true, amount:0.2}} transition={{duration:0.5, delay:i*0.06}} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
              <div className="text-[#D4A37F] font-semibold">{p.title}</div>
              <p className="text-white/70 mt-2 text-sm leading-relaxed">{p.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
