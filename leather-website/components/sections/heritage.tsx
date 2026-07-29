import { ParallaxImage } from "@/components/motion/parallax-image"
import { Reveal } from "@/components/motion/reveal"
import { SectionHeading } from "@/components/section-heading"
import { heritage } from "@/lib/content"

export function Heritage() {
  return (
    <section id="heritage" className="section bg-parchment" aria-labelledby="heritage-title">
      <div className="shell">
        <div className="grid gap-y-16 lg:grid-cols-12 lg:gap-x-16">
          {/* Photography — a tall plate with a smaller frame breaking its edge */}
          <div className="relative lg:col-span-6">
            <ParallaxImage
              src={heritage.primary.src}
              alt={heritage.primary.alt}
              sizes="(min-width: 1024px) 45vw, 92vw"
              amount={70}
              className="aspect-[4/5] w-full"
            />

            <div className="relative mt-6 w-2/3 sm:w-1/2 lg:absolute lg:-right-14 lg:-bottom-16 lg:mt-0 lg:w-[58%]">
              <ParallaxImage
                src={heritage.secondary.src}
                alt={heritage.secondary.alt}
                sizes="(min-width: 1024px) 28vw, 60vw"
                amount={40}
                className="aspect-[5/4] w-full ring-1 ring-parchment/60 lg:ring-8"
              />
            </div>
          </div>

          <div className="lg:col-span-5 lg:col-start-8 lg:pt-6">
            <SectionHeading
              index={heritage.index}
              eyebrow={heritage.eyebrow}
              title={heritage.title}
              titleId="heritage-title"
            />

            <div className="mt-9 space-y-6">
              {heritage.body.map((paragraph, index) => (
                <Reveal key={paragraph.slice(0, 24)} delay={0.1 + index * 0.08}>
                  <p className="text-[0.9375rem] leading-[1.85] text-stone md:text-base">
                    {paragraph}
                  </p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.2}>
              <figure className="mt-12 border-l border-tan/40 pl-7">
                <blockquote className="font-serif text-2xl leading-snug text-leather italic md:text-[1.75rem]">
                  {heritage.pullQuote}
                </blockquote>
                <figcaption className="mt-4 text-[0.625rem] tracking-[0.28em] text-stone uppercase">
                  {heritage.attribution}
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>

        {/* Ledger of the house, set as a hairline-divided row */}
        <dl className="mt-24 grid grid-cols-2 gap-y-12 border-t border-border pt-12 lg:mt-40 lg:grid-cols-4">
          {heritage.stats.map((stat, index) => (
            <Reveal
              key={stat.label}
              delay={index * 0.08}
              className="lg:not-first:border-l lg:not-first:border-border lg:not-first:pl-10"
            >
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <span className="block font-serif text-5xl font-light text-leather lg:text-6xl">
                  {stat.value}
                  {"suffix" in stat ? (
                    <span className="align-super text-2xl text-tan lg:text-3xl">{stat.suffix}</span>
                  ) : null}
                </span>
                <span className="mt-4 block text-[0.625rem] tracking-[0.28em] text-stone uppercase">
                  {stat.label}
                </span>
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  )
}
