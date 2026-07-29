import Image from "next/image"

import { Reveal } from "@/components/motion/reveal"
import { SectionHeading } from "@/components/section-heading"
import { atelier } from "@/lib/content"

export function Atelier() {
  return (
    <section id="atelier" className="section bg-parchment" aria-labelledby="atelier-title">
      <div className="shell">
        <div className="grid gap-y-8 lg:grid-cols-12 lg:items-end lg:gap-x-16">
          <SectionHeading
            index={atelier.index}
            eyebrow={atelier.eyebrow}
            title={atelier.title}
            titleId="atelier-title"
            className="lg:col-span-6"
          />
          <p className="max-w-lg text-[0.9375rem] leading-[1.85] text-stone lg:col-span-5 lg:col-start-8 lg:pb-3">
            {atelier.intro}
          </p>
        </div>

        {/* Masonry by CSS columns — the photographs keep their own proportions
            instead of being cropped into a uniform grid. */}
        <div className="mt-20 gap-5 sm:columns-2 sm:gap-6 lg:mt-28 lg:columns-3 lg:gap-8">
          {atelier.images.map((photo, index) => (
            <Reveal
              key={photo.alt}
              delay={(index % 3) * 0.08}
              distance={34}
              duration={1.1}
              className="mb-5 break-inside-avoid sm:mb-6 lg:mb-8"
            >
              <figure className="group overflow-hidden bg-cream">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  sizes="(min-width: 1024px) 31vw, (min-width: 640px) 46vw, 92vw"
                  placeholder="blur"
                  className="h-auto w-full object-cover transition-transform duration-[1600ms] ease-luxe group-hover:scale-[1.045] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                />
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
