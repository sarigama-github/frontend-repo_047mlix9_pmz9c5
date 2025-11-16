import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BackgroundFX from '../components/BackgroundFX'

export default function Investors() {
  const highlights = [
    { title: 'Pre‑Seed', body: '$2M round, $10M cap' },
    { title: 'User Success', body: '92% completion vs 8% industry' },
    { title: 'Market Growth', body: '23% YoY in target segments' },
    { title: 'Zero Rake', body: 'Instant payouts build trust' },
    { title: 'AI‑Verified', body: 'Proof with humane UX' },
    { title: 'Social Flywheel', body: 'Squads drive retention & virality' },
  ]

  return (
    <div className="relative min-h-screen text-white">
      <BackgroundFX />
      <Navbar />
      <main className="pt-28 px-4 sm:px-6 lg:px-8 pb-20">
        {/* Hero */}
        <div className="mx-auto max-w-6xl text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-br from-[#E1BFA5] via-[#A78BFA] to-[#60A5FA] bg-clip-text text-transparent">Invest in Tap In</h1>
          <p className="mt-3 text-white/80">Pre‑Seed • $2M • $10M Cap</p>
        </div>

        {/* Highlights */}
        <div className="mx-auto max-w-7xl mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((h)=> (
            <div key={h.title} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
              <div className="text-[#D4A37F] font-semibold">{h.title}</div>
              <div className="text-white/80 mt-2">{h.body}</div>
            </div>
          ))}
        </div>

        {/* Market */}
        <div className="mx-auto max-w-6xl mt-10 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
          <div className="text-white font-semibold">TAM/SAM/SOM</div>
          <p className="text-white/70 mt-2">TAM $1.9B • SAM $380M • Growth 23% • User success 92% vs 8% industry</p>
        </div>

        {/* CTA */}
        <div className="mx-auto max-w-3xl mt-10 text-center">
          <a className="inline-flex items-center justify-center rounded-xl px-5 py-3 border border-white/20 bg-white/10 backdrop-blur text-white hover:bg-white/15" href="#">Download pitch deck</a>
          <span className="mx-3 text-white/40">or</span>
          <a className="inline-flex items-center justify-center rounded-xl px-5 py-3 border border-white/20 bg-white/10 backdrop-blur text-white hover:bg-white/15" href="#">Schedule a call</a>
        </div>
      </main>
      <Footer />
    </div>
  )
}
