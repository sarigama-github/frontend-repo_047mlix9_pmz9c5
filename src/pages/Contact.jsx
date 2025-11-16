import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BackgroundFX from '../components/BackgroundFX'

export default function Contact() {
  return (
    <div className="relative min-h-screen text-white">
      <BackgroundFX />
      <Navbar />
      <main className="pt-28 px-4 sm:px-6 lg:px-8 pb-20">
        {/* Hero */}
        <div className="mx-auto max-w-5xl text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-br from-[#E1BFA5] via-[#A78BFA] to-[#60A5FA] bg-clip-text text-transparent">Get In Touch</h1>
          <p className="mt-3 text-white/80">We’d love to hear from you. Choose a path or send a message.</p>
        </div>

        {/* Methods */}
        <div className="mx-auto max-w-7xl mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {label:'General', value:'hello@tapin.app'},
            {label:'Support', value:'support@tapin.app'},
            {label:'Investors', value:'investors@tapin.app'},
            {label:'Location', value:'San Francisco, CA'},
          ].map((m)=> (
            <div key={m.label} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
              <div className="text-[#D4A37F] font-semibold">{m.label}</div>
              <div className="text-white/80 mt-2">{m.value}</div>
            </div>
          ))}
        </div>

        {/* Form */}
        <div className="mx-auto max-w-3xl mt-10 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
          <form className="grid gap-4">
            <input className="rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30" placeholder="Name" />
            <input className="rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30" placeholder="Email" />
            <input className="rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30" placeholder="Subject" />
            <textarea rows={5} className="rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30" placeholder="Message" />
            <div>
              <button className="group relative inline-flex items-center gap-2 rounded-2xl px-5 py-3 font-medium text-slate-900">
                <span className="absolute -inset-[1.5px] rounded-2xl bg-gradient-to-br from-[#E1BFA5] via-[#A78BFA] to-[#60A5FA] blur-[6px] opacity-70 group-hover:opacity-90 transition" />
                <span className="relative rounded-[14px] bg-white/90 px-5 py-3 border border-white/40 backdrop-blur-xl">Send Message</span>
              </button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  )
}
