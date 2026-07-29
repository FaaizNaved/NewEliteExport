"use client"

import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion"
import Image from "next/image"
import { useRef, useState } from "react"

import { LUXE_EASE } from "@/components/motion/reveal"
import { cn } from "@/lib/utils"
import type { CraftStep } from "@/lib/content"

/**
 * Desktop: a sticky plate on the left cross-fades between stages while the
 * written stages scroll past on the right, with a brass rail filling as you go.
 * Below `lg` the plate is dropped and each stage carries its own photograph,
 * because a pinned image on a phone eats the whole screen.
 */
export function CraftTimeline({ steps }: { steps: CraftStep[] }) {
  const [active, setActive] = useState(0)
  const listRef = useRef<HTMLOListElement>(null)
  const reduced = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ["start 70%", "end 80%"],
  })
  const railProgress = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <div className="grid gap-y-14 lg:grid-cols-12 lg:gap-x-16">
      <div className="hidden lg:col-span-5 lg:block">
        <div className="sticky top-32">
          <div className="relative aspect-4/5 w-full overflow-hidden bg-bark">
            {steps.map((step, index) => (
              <motion.div
                key={step.index}
                className="absolute inset-0"
                initial={false}
                animate={{
                  opacity: index === active ? 1 : 0,
                  scale: index === active ? 1 : 1.05,
                }}
                transition={{ duration: reduced ? 0 : 1.2, ease: LUXE_EASE }}
              >
                <Image
                  src={step.image.src}
                  alt={step.image.alt}
                  fill
                  sizes="42vw"
                  placeholder="blur"
                  className="object-cover"
                />
              </motion.div>
            ))}

            <div className="scrim-soft pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between p-7">
              <span className="text-[0.625rem] tracking-[0.28em] text-cream/70 uppercase">
                {steps[active].title}
              </span>
              <span className="font-serif text-2xl text-brass">
                {steps[active].index}
                <span className="text-sm text-cream/60">/{steps.length}</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      <ol ref={listRef} className="relative lg:col-span-6 lg:col-start-8">
        <div aria-hidden className="absolute inset-y-0 left-0 w-px bg-cream/12" />
        <motion.div
          aria-hidden
          style={{ scaleY: reduced ? 1 : railProgress }}
          className="absolute inset-y-0 left-0 w-px origin-top bg-brass"
        />

        {steps.map((step, index) => (
          <motion.li
            key={step.index}
            onViewportEnter={() => setActive(index)}
            viewport={{ margin: "-45% 0px -45% 0px" }}
            className="relative pl-8 md:pl-14"
          >
            <span
              aria-hidden
              className={cn(
                "absolute top-[4.1rem] -left-[3px] size-[7px] rounded-full transition-colors duration-700 ease-luxe lg:top-[4.7rem]",
                index === active ? "bg-brass" : "bg-cream/25"
              )}
            />

            <div className="py-14 lg:py-16">
              <div className="flex items-baseline gap-5">
                <span className="font-serif text-lg text-brass">{step.index}</span>
                <h3
                  className={cn(
                    "font-serif text-3xl font-light transition-colors duration-700 ease-luxe md:text-4xl lg:text-[2.75rem]",
                    index === active ? "text-cream" : "text-cream/65"
                  )}
                >
                  {step.title}
                </h3>
              </div>

              <p className="mt-5 max-w-lg text-[0.9375rem] leading-[1.85] text-cream/65">
                {step.description}
              </p>

              <div className="relative mt-8 aspect-3/2 w-full overflow-hidden lg:hidden">
                <Image
                  src={step.image.src}
                  alt={step.image.alt}
                  fill
                  sizes="(min-width: 640px) 80vw, 92vw"
                  placeholder="blur"
                  className="object-cover"
                />
              </div>
            </div>
          </motion.li>
        ))}
      </ol>
    </div>
  )
}
