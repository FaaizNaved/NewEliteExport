import { ArrowDownRight } from "lucide-react"

import { Magnetic } from "@/components/motion/magnetic"
import { ParallaxImage } from "@/components/motion/parallax-image"
import { Reveal } from "@/components/motion/reveal"
import { TextReveal } from "@/components/motion/text-reveal"
import { brand, hero } from "@/lib/content"

export function Hero() {
  return (
    <section id="top" className="relative isolate flex h-[100svh] min-h-[38rem] flex-col bg-ink">
      <ParallaxImage
        src={hero.image.src}
        alt={hero.image.alt}
        sizes="100vw"
        amount={90}
        eager
        className="absolute inset-0 -z-10"
        imageClassName="object-[60%_center] md:object-center"
        overlayClassName="scrim"
      />

      <div className="shell flex flex-1 flex-col justify-end pt-28 pb-14 md:pb-20">
        <div className="grid items-end gap-y-10 lg:grid-cols-12 lg:gap-x-12">
          <div className="lg:col-span-7 xl:col-span-8">
            <Reveal delay={0.15} distance={16} duration={1.2}>
              <p className="eyebrow text-brass">{hero.eyebrow}</p>
            </Reveal>

            <h1 className="mt-8 font-serif text-display-lg font-light text-cream md:mt-10">
              <TextReveal lines={hero.lines} trigger="mount" delay={0.3} />
            </h1>
          </div>

          <div className="lg:col-span-5 lg:pb-3 xl:col-span-4">
            <Reveal delay={0.75} distance={20} duration={1.1}>
              <p className="max-w-md text-[0.9375rem] leading-relaxed text-cream/80 md:text-base">
                {hero.description}
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
                <Magnetic>
                  <a
                    href={hero.primaryCta.href}
                    className="group inline-flex items-center gap-3 border border-cream/30 px-8 py-4 text-[0.6875rem] tracking-[0.22em] text-cream uppercase transition-colors duration-700 ease-luxe hover:border-brass hover:bg-brass/10"
                  >
                    {hero.primaryCta.label}
                    <ArrowDownRight
                      className="size-4 transition-transform duration-700 ease-luxe group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                      strokeWidth={1.25}
                    />
                  </a>
                </Magnetic>

                <a
                  href={hero.secondaryCta.href}
                  className="link-quiet text-[0.6875rem] tracking-[0.22em] text-cream/75 uppercase transition-colors duration-500 hover:text-cream"
                >
                  {hero.secondaryCta.label}
                </a>
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal delay={1.1} distance={0} duration={1.4}>
          <div className="mt-14 flex items-center justify-between gap-6 border-t border-cream/10 pt-6">
            <span className="text-[0.625rem] tracking-[0.28em] text-cream/65 uppercase">
              {hero.scrollLabel}
            </span>
            <span className="hidden text-[0.625rem] tracking-[0.28em] text-cream/65 uppercase sm:block">
              Kanpur &middot; Est. {brand.founded}
            </span>
          </div>
        </Reveal>
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center"
      >
        <div className="scroll-cue" />
      </div>
    </section>
  )
}
