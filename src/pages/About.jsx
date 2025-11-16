import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BackgroundFX from '../components/BackgroundFX'
import { motion } from 'framer-motion'

const values = [
  { title: 'Results‑Driven', body: 'Everything orients to real behavior change and pride in showing up.' },
  { title: 'AI‑Verified', body: 'Lightweight verification keeps it honest without killing vibes.' },
  { title: 'Instant Payouts', body: 'When you win, you feel it right away. Zero friction.' },
  { title: 'Squad‑Viral', body: 'Progress is social. Friends make the journey meaningful.' },
]

export default function About() {
  return (
    <div className="relative min-h-screen text-white">
      <BackgroundFX />
      <Navbar />

      <main className="pt-28">
        {/* Hero */}
        <section className="text-center px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-br from-[#E1BFA5] via-[#A78BFA] to-[#60A5FA] bg-clip-text text-transparent">About Tap In</h1>
            <p className="mt-4 text-white/80">We help people keep the promises they make to themselves—together.</p>
          </div>
        </section>

        {/* Mission */}
        <section className="mt-12 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 md:p-8">
            <h2 className="text-2xl font-semibold text-white">Mission</h2>
            <p className="mt-2 text-white/80 leading-relaxed">Tap In exists to make consistent habits feel natural, supportive, and rewarding. We combine warmth, social proof, and gentle stakes to turn effort into pride.</p>
          </div>
        </section>

        {/* Values Grid */}
        <section className="mt-12 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v,i)=> (
              <motion.div key={v.title} initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.5, delay:i*0.08}} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
                <div className="text-[#D4A37F] font-semibold">{v.title}</div>
                <p className="text-white/70 mt-2 text-sm leading-relaxed">{v.body}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Story */}
        <section className="mt-12 px-4 sm:px-6 lg:px-8 pb-20">
          <div className="mx-auto max-w-4xl rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 md:p-8">
            <h2 className="text-2xl font-semibold text-white">Our Story</h2>
            <p className="mt-2 text-white/80 leading-relaxed">We saw friends try for years to build habits with little help from apps. Tap In blends real commitment with kind community, making success contagious—and fun.</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
