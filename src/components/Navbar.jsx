import { Link, NavLink } from 'react-router-dom'
import { Menu, Sparkles } from 'lucide-react'

const navLinkClass = ({ isActive }) =>
  `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
    isActive ? 'text-white bg-white/10' : 'text-white/80 hover:text-white hover:bg-white/10'
  }`

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 backdrop-blur-xl bg-white/10 border border-white/15 shadow-[0_8px_40px_-8px_rgba(0,0,0,0.4)] rounded-2xl">
          <div className="flex items-center justify-between px-4 py-3">
            <Link to="/" className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-xl p-[2px] bg-gradient-to-br from-[#E1BFA5] via-[#A78BFA] to-[#60A5FA] shadow-inner shadow-[#E1BFA5]/50">
                <div className="h-full w-full rounded-[10px] bg-slate-900/70 grid place-items-center">
                  <Sparkles className="h-5 w-5 text-white" />
                </div>
              </div>
              <span className="font-semibold text-white">Tap‑In</span>
            </Link>
            <nav className="hidden md:flex items-center gap-2">
              <NavLink to="/" className={navLinkClass} end>
                Home
              </NavLink>
              <NavLink to="/design" className={navLinkClass}>
                Design System
              </NavLink>
              <NavLink to="/components" className={navLinkClass}>
                Components
              </NavLink>
              <NavLink to="/docs" className={navLinkClass}>
                Docs
              </NavLink>
            </nav>
            <button className="md:hidden inline-flex items-center justify-center rounded-xl p-2 text-white/80 hover:text-white hover:bg-white/10">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
