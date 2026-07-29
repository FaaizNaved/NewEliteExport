"use client"

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion"
import { Menu, X } from "lucide-react"
import { useEffect, useState } from "react"

import { LUXE_EASE } from "@/components/motion/reveal"
import { cn } from "@/lib/utils"
import { brand, navigation } from "@/lib/content"

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (value) => setScrolled(value > 72))

  useEffect(() => {
    if (!open) return
    const previous = document.body.style.overflow
    document.body.style.overflow = "hidden"

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false)
    }

    window.addEventListener("keydown", onKeyDown)
    return () => {
      document.body.style.overflow = previous
      window.removeEventListener("keydown", onKeyDown)
    }
  }, [open])

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter,border-color] duration-700 ease-luxe",
          open
            ? "border-b border-cream/10 bg-ink"
            : scrolled
              ? "border-b border-cream/10 bg-ink/85 backdrop-blur-xl"
              : "border-b border-transparent bg-transparent"
        )}
      >
        <div className="shell flex h-20 items-center justify-between gap-8 md:h-24">
          <a
            href="#top"
            className="flex shrink-0 items-baseline gap-2 text-cream"
            aria-label={`${brand.name} — back to top`}
          >
            <span className="font-serif text-xl leading-none tracking-tight md:text-2xl">
              {brand.wordmark}
            </span>
            <span className="text-[0.5625rem] tracking-[0.34em] text-brass uppercase">
              {brand.suffix}
            </span>
          </a>

          <nav aria-label="Primary" className="hidden items-center gap-10 lg:flex">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="link-quiet text-[0.6875rem] tracking-[0.22em] text-cream/70 uppercase transition-colors duration-500 hover:text-cream"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="hidden border border-cream/25 px-6 py-3 text-[0.6875rem] tracking-[0.22em] text-cream uppercase transition-colors duration-700 ease-luxe hover:border-brass hover:bg-brass/10 md:inline-block"
            >
              Enquire
            </a>

            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-controls="mobile-navigation"
              aria-label={open ? "Close menu" : "Open menu"}
              className="-mr-2 flex size-11 items-center justify-center text-cream lg:hidden"
            >
              {open ? (
                <X className="size-5" strokeWidth={1.25} />
              ) : (
                <Menu className="size-5" strokeWidth={1.25} />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Sibling of the header, not a child: the header carries a
          backdrop-filter, which would make `fixed` resolve against it. */}
      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: LUXE_EASE }}
            className="fixed inset-0 z-40 bg-ink pt-20 lg:hidden"
          >
            <nav aria-label="Primary" className="shell flex h-full flex-col justify-center gap-2 pb-24">
              {navigation.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.08 + index * 0.06, ease: LUXE_EASE }}
                  className="border-b border-cream/10 py-5 font-serif text-4xl text-cream sm:text-5xl"
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.a
                href={`mailto:${brand.email}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4, ease: LUXE_EASE }}
                className="mt-10 text-[0.6875rem] tracking-[0.22em] text-brass uppercase"
              >
                {brand.email}
              </motion.a>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  )
}
