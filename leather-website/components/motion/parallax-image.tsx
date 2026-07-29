"use client"

import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion"
import Image, { type StaticImageData } from "next/image"
import { useRef } from "react"

import { cn } from "@/lib/utils"

type ParallaxImageProps = {
  src: StaticImageData
  alt: string
  /** Wrapper — carry the aspect ratio and any rounding here. */
  className?: string
  sizes: string
  /** Vertical drift in pixels across the full scroll pass. 0 disables it. */
  amount?: number
  /** Slow zoom on hover. Pair with a `data-cursor` label on the wrapper. */
  zoom?: boolean
  eager?: boolean
  overlayClassName?: string
  imageClassName?: string
}

/**
 * Photography that drifts against the scroll. The frame is clipped and the
 * picture is over-sized by the drift distance in both directions, so the crop
 * never opens a gap at either end of the pass.
 */
export function ParallaxImage({
  src,
  alt,
  className,
  sizes,
  amount = 60,
  zoom = false,
  eager = false,
  overlayClassName,
  imageClassName,
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const smooth = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 30,
    restDelta: 0.001,
  })

  const y = useTransform(smooth, [0, 1], [amount, -amount])
  const drift = reduced || amount === 0 ? 0 : amount

  return (
    <div ref={ref} className={cn("relative isolate overflow-hidden", zoom && "group", className)}>
      <motion.div
        className="absolute inset-x-0"
        style={{
          top: -drift,
          bottom: -drift,
          y: drift === 0 ? 0 : y,
        }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          placeholder="blur"
          {...(eager ? { preload: true } : { loading: "lazy" as const })}
          className={cn(
            "object-cover",
            zoom &&
              "transition-transform duration-[1600ms] ease-luxe group-hover:scale-[1.05] motion-reduce:transition-none motion-reduce:group-hover:scale-100",
            imageClassName
          )}
        />
      </motion.div>
      {overlayClassName ? (
        <div aria-hidden className={cn("pointer-events-none absolute inset-0", overlayClassName)} />
      ) : null}
    </div>
  )
}
