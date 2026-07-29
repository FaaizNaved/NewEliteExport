import { SectionHeading } from "@/components/section-heading"
import { craft } from "@/lib/content"

import { CraftTimeline } from "./craft-timeline"

export function Craft() {
  return (
    <section id="craft" className="section bg-ink" aria-labelledby="craft-title">
      <div className="shell">
        <div className="grid gap-y-8 lg:grid-cols-12 lg:items-end lg:gap-x-16">
          <SectionHeading
            index={craft.index}
            eyebrow={craft.eyebrow}
            title={craft.title}
            titleId="craft-title"
            tone="dark"
            className="lg:col-span-6"
          />
          <p className="max-w-lg text-[0.9375rem] leading-[1.85] text-cream/65 lg:col-span-5 lg:col-start-8 lg:pb-3">
            {craft.intro}
          </p>
        </div>

        <div className="mt-20 lg:mt-32">
          <CraftTimeline steps={craft.steps} />
        </div>
      </div>
    </section>
  )
}
