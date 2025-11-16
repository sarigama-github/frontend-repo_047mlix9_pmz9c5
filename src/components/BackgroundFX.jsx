import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

// Ambient, layered background with parallax + scroll-reactive gradients
export default function BackgroundFX({ intensity = 1 }) {
  const ref = useRef(null)
  const { scrollY } = useScroll()

  // Parallax transforms
  const ySlow = useTransform(scrollY, [0, 1000], [0, -60 * intensity])
  const yMed = useTransform(scrollY, [0, 1000], [0, -120 * intensity])
  const yFast = useTransform(scrollY, [0, 1000], [0, -200 * intensity])

  return (
    <div ref={ref} className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {/* Base ultra-dark */}
      <div className="absolute inset-0 bg-[#030303]" />

      {/* Soft vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(255,255,255,0.06),transparent_60%)]" />

      {/* Floating color fields */}
      <motion.div style={{ y: ySlow }} className="absolute -top-40 -left-40 h-[60vmax] w-[60vmax] rounded-full blur-[80px] opacity-60"
        aria-hidden
        
        // Warm gold/tan to purple
      >
        <div className="h-full w-full rounded-full bg-[radial-gradient(circle_at_30%_30%,#E1BFA5_0%,transparent_55%),radial-gradient(circle_at_70%_60%,#A78BFA_0%,transparent_45%)]" />
      </motion.div>

      <motion.div style={{ y: yMed }} className="absolute top-[30%] -right-48 h-[55vmax] w-[55vmax] rounded-full blur-[90px] opacity-60" aria-hidden>
        <div className="h-full w-full rounded-full bg-[radial-gradient(circle_at_60%_40%,#60A5FA_0%,transparent_50%),radial-gradient(circle_at_20%_80%,#D4A37F_0%,transparent_45%)]" />
      </motion.div>

      {/* Animated gradient sweep */}
      <motion.div style={{ y: yFast }} className="absolute inset-x-0 top-[10%] h-[50vh] opacity-[0.35]" aria-hidden>
        <div className="h-full w-full animate-[bg-pan_18s_linear_infinite] bg-[length:200%_200%] bg-gradient-to-r from-[#E1BFA5]/20 via-[#A78BFA]/15 to-[#60A5FA]/20" />
      </motion.div>

      {/* Glass grid overlay */}
      <div className="absolute inset-0 opacity-[0.08] [mask-image:radial-gradient(60%_60%_at_50%_40%,black,transparent_75%)]">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <style>{`
        @keyframes bg-pan { 0%{background-position:0% 50%} 50%{background-position:100% 50%} 100%{background-position:0% 50%} }
      `}</style>
    </div>
  )
}
