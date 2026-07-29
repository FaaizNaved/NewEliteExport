import { Reveal } from "@/components/motion/reveal"
import { cn } from "@/lib/utils"

type SectionHeadingProps = {
  index: string
  eyebrow: string
  title: string
  /** Wire to the section's `aria-labelledby`. */
  titleId?: string
  intro?: string
  tone?: "light" | "dark"
  className?: string
  titleClassName?: string
  introClassName?: string
}

/**
 * The one masthead used by every section: index, label, serif title and an
 * optional standfirst. Keeps the editorial rhythm identical down the page.
 */
export function SectionHeading({
  index,
  eyebrow,
  title,
  titleId,
  intro,
  tone = "light",
  className,
  titleClassName,
  introClassName,
}: SectionHeadingProps) {
  const dark = tone === "dark"

  return (
    <div className={className}>
      <Reveal distance={16} duration={0.9}>
        <p className={cn("eyebrow", dark ? "text-brass" : "text-brass-deep")}>
          {index} &mdash; {eyebrow}
        </p>
      </Reveal>

      <Reveal delay={0.12} duration={1.1}>
        <h2
          id={titleId}
          className={cn(
            "mt-7 max-w-[16ch] font-serif text-display font-light",
            dark ? "text-cream" : "text-leather",
            titleClassName
          )}
        >
          {title}
        </h2>
      </Reveal>

      {intro ? (
        <Reveal delay={0.22} duration={1.1}>
          <p
            className={cn(
              "mt-8 max-w-xl text-[0.9375rem] leading-relaxed md:text-base",
              dark ? "text-cream/75" : "text-stone",
              introClassName
            )}
          >
            {intro}
          </p>
        </Reveal>
      ) : null}
    </div>
  )
}
