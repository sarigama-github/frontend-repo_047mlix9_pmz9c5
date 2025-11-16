import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BackgroundFX from '../components/BackgroundFX'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const sections = [
  { title: 'General', qs: 5 },
  { title: 'How It Works', qs: 6 },
  { title: 'AI Verification', qs: 5 },
  { title: 'Money & Payouts', qs: 7 },
  { title: 'Squads & Social', qs: 5 },
  { title: 'Safety & Privacy', qs: 5 },
  { title: 'Technical', qs: 5 },
  { title: 'Business & Investors', qs: 5 },
  { title: 'Miscellaneous', qs: 7 },
]

function Item({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur p-4">
      <button onClick={()=>setOpen(!open)} className="w-full flex items-center justify-between text-left">
        <span className="text-white/90 font-medium">{q}</span>
        <ChevronDown className={`h-5 w-5 text-white/60 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      <div className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
        <div className="overflow-hidden">
          <p className="text-white/70 mt-2 text-sm">{a}</p>
        </div>
      </div>
    </div>
  )
}

export default function FAQ() {
  return (
    <div className="relative min-h-screen text-white">
      <BackgroundFX />
      <Navbar />
      <main className="pt-28 px-4 sm:px-6 lg:px-8 pb-20">
        <div className="mx-auto max-w-5xl text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-br from-[#E1BFA5] via-[#A78BFA] to-[#60A5FA] bg-clip-text text-transparent">FAQ</h1>
          <p className="mt-3 text-white/80">Everything you want to know about Tap In.</p>
        </div>

        <div className="mx-auto max-w-5xl mt-10 space-y-8">
          {sections.map((s, i)=> (
            <div key={s.title}>
              <div className="text-white/70 uppercase tracking-wide text-xs mb-3">{s.title}</div>
              <div className="space-y-3">
                {Array.from({length: s.qs}).map((_,j)=> (
                  <Item key={j} q={`Question ${j+1}`} a="Answer with details about policies, verification, payouts, and more." />
                ))}
              </div>
            </div>
          ))}

          <div className="text-center pt-6">
            <a href="/contact" className="inline-flex items-center justify-center rounded-xl px-5 py-3 border border-white/20 bg-white/10 backdrop-blur text-white hover:bg-white/15">Still have questions? Contact us</a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
