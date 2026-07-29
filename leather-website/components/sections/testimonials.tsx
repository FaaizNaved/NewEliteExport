import { Reveal } from "@/components/motion/reveal"
import { SectionHeading } from "@/components/section-heading"
import { cn } from "@/lib/utils"
import { testimonials } from "@/lib/content"

export function Testimonials() {
  const [lead, ...rest] = testimonials.items

  return (
    <section id="voices" className="section relative isolate bg-ink" aria-labelledby="voices-title">
      {/* An oversized quotation glyph, used as texture rather than punctuation */}
      <span
        aria-hidden
        className="pointer-events-none absolute -top-8 left-gutter -z-10 font-serif text-[22rem] leading-none text-brass/8 select-none lg:text-[34rem]"
      >
        &rdquo;
      </span>

      <div className="shell">
        <SectionHeading
          index={testimonials.index}
          eyebrow={testimonials.eyebrow}
          title={testimonials.title}
          titleId="voices-title"
          tone="dark"
        />

        <div className="mt-20 grid gap-y-16 lg:mt-28 lg:grid-cols-12 lg:gap-x-16">
          <Quote
            testimonial={lead}
            className="lg:col-span-9"
            quoteClassName="font-serif text-[1.75rem] leading-[1.35] font-light text-cream sm:text-4xl lg:text-[2.75rem]"
          />

          {rest.map((testimonial, index) => (
            <Quote
              key={testimonial.name}
              testimonial={testimonial}
              delay={0.1 + index * 0.08}
              className={cn(
                "border-t border-cream/10 pt-10 lg:col-span-5",
                index === 0 ? "lg:col-start-1" : "lg:col-start-7"
              )}
              quoteClassName="font-serif text-xl leading-[1.5] font-light text-cream/85 md:text-2xl"
            />
          ))}
        </div>
      </div>
    </section>
  )
}

type QuoteProps = {
  testimonial: (typeof testimonials.items)[number]
  className?: string
  quoteClassName?: string
  delay?: number
}

function Quote({ testimonial, className, quoteClassName, delay = 0 }: QuoteProps) {
  return (
    <Reveal delay={delay} duration={1.1} className={className}>
      <figure>
        <blockquote className={quoteClassName}>
          <p>&ldquo;{testimonial.quote}&rdquo;</p>
        </blockquote>
        <figcaption className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-1 text-[0.625rem] tracking-[0.28em] uppercase">
          <span className="text-brass">{testimonial.name}</span>
          <span aria-hidden className="h-px w-6 bg-cream/25" />
          <span className="text-cream/65">{testimonial.role}</span>
        </figcaption>
      </figure>
    </Reveal>
  )
}
