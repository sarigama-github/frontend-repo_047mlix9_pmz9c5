export default function Docs() {
  return (
    <div className="min-h-screen bg-[#030303] text-white pt-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-6">
        <h1 className="text-3xl font-bold">Tap‑In Architecture & Design</h1>
        <p className="text-white/80">Color‑faithful, glassmorphic, scroll‑reactive visuals using warm tans, purples, and blues.</p>

        <section className="prose prose-invert max-w-none">
          <h2>Design Philosophy</h2>
          <ul>
            <li>Ultra‑dark base (#030303) with translucent surfaces.</li>
            <li>Brand gradient accents: #E1BFA5 → #A78BFA → #60A5FA.</li>
            <li>Motion everywhere: subtle springs, staggered entrances, ambient backgrounds.</li>
          </ul>

          <h2>Background System</h2>
          <ul>
            <li>Parallax color fields tied to scroll.</li>
            <li>Animated gradient sweep across sections.</li>
            <li>Optional Spline scenes for hero moments.</li>
          </ul>
        </section>
      </div>
    </div>
  )
}
