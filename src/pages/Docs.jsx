export default function Docs() {
  return (
    <div className="min-h-screen bg-slate-950 text-white pt-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-6">
        <h1 className="text-3xl font-bold">Tap‑In Architecture & Design</h1>
        <p className="text-white/80">A polished, human‑centered system built around warmth, vibrancy, and clarity.</p>

        <section className="prose prose-invert max-w-none">
          <h2>Design Philosophy</h2>
          <ul>
            <li>Gradients and glass surfaces, never pure black/white.</li>
            <li>Every interaction has gentle motion and feedback.</li>
            <li>Compact layouts that still breathe.</li>
          </ul>

          <h2>Color System</h2>
          <p>Primary gradient accents: #E1BFA5 → #A78BFA → #60A5FA. Golds are used for glow, borders, and icons.</p>

          <h2>Animation System</h2>
          <ul>
            <li>Staggered entrances on scroll.</li>
            <li>Soft springs for buttons and toggles.</li>
            <li>Background ambiance via Spline cover.</li>
          </ul>
        </section>
      </div>
    </div>
  )
}
