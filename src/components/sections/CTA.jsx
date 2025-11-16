export default function CTA() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/5 backdrop-blur-xl p-10 text-center">
          <div className="absolute -inset-20 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(225,191,165,0.15),transparent_60%)]" />
          <h2 className="relative text-3xl md:text-4xl font-bold text-white">Join the waitlist</h2>
          <p className="relative mt-3 text-white/80">Be the first to feel the difference. Investors welcome.</p>
          <div className="relative mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <input placeholder="you@domain.com" className="w-full sm:w-80 rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30" />
            <button className="group relative inline-flex items-center justify-center rounded-xl px-5 py-3 font-medium text-slate-900">
              <span className="absolute -inset-[1.5px] rounded-xl bg-gradient-to-br from-[#E1BFA5] via-[#A78BFA] to-[#60A5FA] blur-[6px] opacity-70 group-hover:opacity-90 transition" />
              <span className="relative rounded-[10px] bg-white/90 px-5 py-3 border border-white/40 backdrop-blur-xl">Get Early Access</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
