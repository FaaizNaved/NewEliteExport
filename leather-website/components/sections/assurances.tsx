import { Hammer, Layers, PenLine, Waypoints, type LucideIcon } from "lucide-react"

import { Reveal } from "@/components/motion/reveal"
import { SectionHeading } from "@/components/section-heading"
import { assurances, type Assurance } from "@/lib/content"

const ICONS: Record<Assurance["icon"], LucideIcon> = {
  hide: Layers,
  stitch: Waypoints,
  commission: Hammer,
  signature: PenLine,
}

export function Assurances() {
  return (
    <section id="why" className="section bg-cream" aria-labelledby="why-title">
      <div className="shell grid gap-y-16 lg:grid-cols-12 lg:gap-x-20">
        <SectionHeading
          index={assurances.index}
          eyebrow={assurances.eyebrow}
          title={assurances.title}
          titleId="why-title"
          className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start"
        />

        <ul className="lg:col-span-7 lg:col-start-6">
          {assurances.items.map((item, index) => {
            const Icon = ICONS[item.icon]

            return (
              <li key={item.title} className="border-b border-border last:border-b-0">
                <Reveal delay={index * 0.07} className="flex gap-6 py-10 md:gap-10 md:py-12">
                  <Icon
                    aria-hidden
                    className="mt-1.5 size-5 shrink-0 text-tan md:size-6"
                    strokeWidth={1}
                  />
                  <div>
                    <h3 className="font-serif text-2xl font-light text-leather md:text-[1.75rem]">
                      {item.title}
                    </h3>
                    <p className="mt-4 max-w-xl text-[0.9375rem] leading-[1.85] text-stone">
                      {item.description}
                    </p>
                  </div>
                </Reveal>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
