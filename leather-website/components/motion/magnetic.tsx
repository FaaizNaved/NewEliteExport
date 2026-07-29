"use client"

import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion"
import type { MouseEvent, ReactNode } from "react"

type MagneticProps = {
  children: ReactNode
  className?: string
  /** Share of the cursor's offset from centre that the element follows. */
  strength?: number
}

/**
 * Pulls its child a fraction of the way toward the pointer while the pointer is
 * over it. Touch never fires `mousemove`, so this is inert on phones without a
 * capability check.
 */
export function Magnetic({ children, className, strength = 0.28 }: MagneticProps) {
  const reduced = useReducedMotion()
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const springConfig = { stiffness: 150, damping: 18, mass: 0.6 }
  const springX = useSpring(x, springConfig)
  const springY = useSpring(y, springConfig)

  if (reduced) return <div className={className}>{children}</div>

  function handleMove(event: MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect()
    x.set((event.clientX - (rect.left + rect.width / 2)) * strength)
    y.set((event.clientY - (rect.top + rect.height / 2)) * strength)
  }

  function reset() {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      className={className}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMove}
      onMouseLeave={reset}
    >
      {children}
    </motion.div>
  )
}
