import { ArrowUpRight } from "lucide-react"

import { ParallaxImage } from "@/components/motion/parallax-image"
import { Reveal } from "@/components/motion/reveal"
import { TextReveal } from "@/components/motion/text-reveal"
import { SectionHeading } from "@/components/section-heading"
import { cn } from "@/lib/utils"
import { collections } from "@/lib/content"

export function Collections() {
  return (
    <section id="collections" className="section bg-cream" aria-labelledby="collections-title">
      <div className="shell">
        <div className="grid gap-y-8 lg:grid-cols-12 lg:items-end lg:gap-x-16">
          <SectionHeading
            index={collections.index}
            eyebrow={collections.eyebrow}
            title={collections.title}
            titleId="collections-title"
            className="lg:col-span-6"
          />
          <p className="max-w-lg text-[0.9375rem] leading-[1.85] text-stone lg:col-span-5 lg:col-start-8 lg:pb-3">
            {collections.intro}
          </p>
        </div>

        <div className="mt-24 space-y-28 lg:mt-36 lg:space-y-44">
          {collections.items.map((item, index) => {
            const mirrored = index % 2 === 1

            return (
              <article
                key={item.title}
                className="grid gap-y-9 lg:grid-cols-12 lg:items-center lg:gap-x-16"
              >
                <div
                  className={cn(
                    "lg:col-span-7",
                    mirrored ? "lg:col-start-6 lg:row-start-1" : "lg:col-start-1"
                  )}
                >
                  <ParallaxImage
                    src={item.image.src}
                    alt={item.image.alt}
                    sizes="(min-width: 1024px) 56vw, 92vw"
                    amount={55}
                    zoom
                    className="aspect-4/3 w-full lg:aspect-16/11"
                  />
                </div>

                <div
                  className={cn(
                    "lg:col-span-4",
                    mirrored ? "lg:col-start-1 lg:row-start-1" : "lg:col-start-9"
                  )}
                >
                  <Reveal distance={16} duration={0.9}>
                    <span className="font-serif text-sm tracking-[0.2em] text-brass-deep">
                      {item.index}
                    </span>
                  </Reveal>

                  <h3 className="mt-4 font-serif text-display-sm font-light text-leather">
                    <TextReveal lines={[item.title]} />
                  </h3>

                  <Reveal delay={0.14}>
                    <p className="mt-6 max-w-md text-[0.9375rem] leading-[1.85] text-stone">
                      {item.summary}
                    </p>

                    <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
                      <a
                        href="#contact"
                        className="group inline-flex items-center gap-2.5 text-[0.6875rem] tracking-[0.22em] text-leather uppercase"
                      >
                        <span className="link-quiet">Enquire about this work</span>
                        <ArrowUpRight
                          className="size-4 transition-transform duration-700 ease-luxe group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          strokeWidth={1.25}
                        />
                      </a>
                      <span className="text-[0.625rem] tracking-[0.24em] text-stone uppercase">
                        {item.meta}
                      </span>
                    </div>
                  </Reveal>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
