export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm">© {new Date().getFullYear()} Tap‑In. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm">
            <a className="hover:text-white" href="#">Privacy</a>
            <a className="hover:text-white" href="#">Terms</a>
            <a className="hover:text-white" href="#">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
