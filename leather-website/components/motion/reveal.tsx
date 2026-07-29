"use client"

import { motion, useReducedMotion } from "framer-motion"
import type { ReactNode } from "react"

export const LUXE_EASE = [0.16, 1, 0.3, 1] as const

type RevealProps = {
  children: ReactNode
  className?: string
  /** Seconds of hold before the reveal starts — used to cascade siblings. */
  delay?: number
  /** Vertical travel in pixels. Set 0 for a pure fade. */
  distance?: number
  duration?: number
}

/**
 * Scroll-triggered fade-and-rise. Fires once, a little before the element is
 * fully in frame, so the motion has finished by the time it is being read.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  distance = 28,
  duration = 1,
}: RevealProps) {
  const reduced = useReducedMotion()

  if (reduced) return <div className={className}>{children}</div>

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration, delay, ease: LUXE_EASE }}
    >
      {children}
    </motion.div>
  )
}
