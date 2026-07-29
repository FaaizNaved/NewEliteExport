"use client"

import { motion, useReducedMotion, type Variants } from "framer-motion"

import { cn } from "@/lib/utils"

import { LUXE_EASE } from "./reveal"

type TextRevealProps = {
  lines: readonly string[]
  className?: string
  lineClassName?: string
  delay?: number
  /** `mount` for above-the-fold type, `view` for headings further down. */
  trigger?: "mount" | "view"
}

/*
 * The mask, not the line, is what gets observed. A line parked at y:112% sits
 * entirely outside its clipping box, and IntersectionObserver honours ancestor
 * clipping — observing the line directly would mean it never enters view and
 * therefore never animates.
 */
const LINE: Variants = {
  hidden: { y: "112%" },
  visible: { y: "0%" },
}

/**
 * Line-by-line mask reveal. Each line rides up from behind its own clipping
 * band, staggered, so a headline resolves like a title card rather than a
 * block of text appearing at once.
 */
export function TextReveal({
  lines,
  className,
  lineClassName,
  delay = 0,
  trigger = "view",
}: TextRevealProps) {
  const reduced = useReducedMotion()

  if (reduced) {
    return (
      <span className={className}>
        {lines.map((line) => (
          <span key={line} className={cn("block", lineClassName)}>
            {line}
          </span>
        ))}
      </span>
    )
  }

  return (
    <span className={className}>
      {lines.map((line, index) => (
        <motion.span
          key={line}
          className="block overflow-hidden pb-[0.08em]"
          initial="hidden"
          {...(trigger === "mount"
            ? { animate: "visible" as const }
            : {
                whileInView: "visible" as const,
                viewport: { once: true, margin: "0px 0px -15% 0px" },
              })}
        >
          <motion.span
            variants={LINE}
            transition={{
              duration: 1.15,
              delay: delay + index * 0.085,
              ease: LUXE_EASE,
            }}
            className={cn("block will-change-transform", lineClassName)}
          >
            {line}
          </motion.span>
        </motion.span>
      ))}
    </span>
  )
}
