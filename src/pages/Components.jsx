import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

function GlassCard({ title, children }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
      <h3 className="text-white font-semibold mb-2">{title}</h3>
      {children}
    </div>
  )
}

export default function ComponentsPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white pt-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
        <h1 className="text-3xl font-bold">Components</h1>

        <GlassCard title="Primary CTA Button">
          <button className="group relative inline-flex items-center gap-2 rounded-2xl px-5 py-3 font-medium text-slate-900">
            <span className="absolute -inset-[1.5px] rounded-2xl bg-gradient-to-br from-[#E1BFA5] via-[#A78BFA] to-[#60A5FA] blur-[6px] opacity-70 group-hover:opacity-90 transition" />
            <span className="relative rounded-[14px] bg-white/90 px-5 py-3 border border-white/40 backdrop-blur-xl">Tap me</span>
          </button>
        </GlassCard>

        <GlassCard title="Info Banner">
          <div className="rounded-xl p-4 bg-gradient-to-br from-[#E1BFA5]/20 via-[#A78BFA]/10 to-transparent text-white/90">
            Keep your streak alive. Your group will cheer you on.
          </div>
        </GlassCard>

        <GlassCard title="Checklist Item">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="text-[#D4A37F]" />
            <span className="text-white/90">Meditate 10 minutes</span>
          </div>
        </GlassCard>
      </div>
    </div>
  )
}
