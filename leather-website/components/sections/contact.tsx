import { MapPin } from "lucide-react"

import { ParallaxImage } from "@/components/motion/parallax-image"
import { Reveal } from "@/components/motion/reveal"
import { SectionHeading } from "@/components/section-heading"
import { brand, contact } from "@/lib/content"

import { ContactForm } from "./contact-form"

export function Contact() {
  return (
    <section id="contact" className="section bg-bark" aria-labelledby="contact-title">
      <div className="shell">
        <div className="grid gap-y-20 lg:grid-cols-12 lg:gap-x-20">
          <div className="lg:col-span-5">
            <SectionHeading
              index={contact.index}
              eyebrow={contact.eyebrow}
              title={contact.title}
              titleId="contact-title"
              intro={contact.intro}
              tone="dark"
            />

            <Reveal delay={0.2} className="mt-14">
              <ParallaxImage
                src={contact.image.src}
                alt={contact.image.alt}
                sizes="(min-width: 1024px) 40vw, 92vw"
                amount={45}
                className="aspect-3/2 w-full"
                overlayClassName="bg-ink/25"
              />
            </Reveal>

            <Reveal delay={0.1} className="mt-12">
              <dl className="grid gap-y-9 sm:grid-cols-2 lg:grid-cols-1 lg:gap-y-8">
                <div>
                  <dt className="text-[0.625rem] tracking-[0.28em] text-cream/65 uppercase">
                    Atelier
                  </dt>
                  <dd className="mt-3 flex items-start gap-2.5 text-[0.9375rem] leading-relaxed text-cream/75">
                    <MapPin className="mt-1 size-4 shrink-0 text-brass" strokeWidth={1.25} />
                    <span>
                      {brand.address.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                    </span>
                  </dd>
                </div>

                <div>
                  <dt className="text-[0.625rem] tracking-[0.28em] text-cream/65 uppercase">
                    Direct
                  </dt>
                  <dd className="mt-3 space-y-1.5 text-[0.9375rem] text-cream/75">
                    <a href={`mailto:${brand.email}`} className="link-quiet block w-fit">
                      {brand.email}
                    </a>
                    <a
                      href={`tel:${brand.phone.replace(/[^+\d]/g, "")}`}
                      className="link-quiet block w-fit"
                    >
                      {brand.phone}
                    </a>
                    <span className="block pt-1 text-cream/65">{brand.hours}</span>
                  </dd>
                </div>
              </dl>
            </Reveal>
          </div>

          <div className="lg:col-span-6 lg:col-start-7 lg:pt-6">
            <Reveal delay={0.12} duration={1.1}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
