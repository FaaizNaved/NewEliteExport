import { ArrowUp } from "lucide-react"

import { Reveal } from "@/components/motion/reveal"
import { brand, navigation } from "@/lib/content"

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-ink pt-24 pb-10 lg:pt-32">
      <div className="shell">
        <Reveal duration={1.1}>
          <div className="flex flex-wrap items-end justify-between gap-x-12 gap-y-6 border-b border-cream/10 pb-12">
            <p className="font-serif text-[clamp(2.5rem,8vw,7rem)] leading-[0.9] font-light text-cream">
              {brand.wordmark}
              <span className="ml-4 align-super text-[0.6875rem] tracking-[0.34em] text-brass uppercase">
                {brand.suffix}
              </span>
            </p>
            <p className="text-[0.625rem] tracking-[0.28em] text-cream/65 uppercase">
              {brand.tagline}
            </p>
          </div>
        </Reveal>

        <div className="grid gap-y-12 pt-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-12">
          <nav aria-label="Footer">
            <h2 className="text-[0.625rem] tracking-[0.28em] text-cream/65 uppercase">Explore</h2>
            <ul className="mt-6 space-y-3">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="link-quiet text-[0.9375rem] text-cream/75 transition-colors duration-500 hover:text-cream"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-[0.625rem] tracking-[0.28em] text-cream/65 uppercase">Atelier</h2>
            <address className="mt-6 space-y-1 text-[0.9375rem] leading-relaxed text-cream/75 not-italic">
              {brand.address.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
          </div>

          <div>
            <h2 className="text-[0.625rem] tracking-[0.28em] text-cream/65 uppercase">Contact</h2>
            <ul className="mt-6 space-y-3 text-[0.9375rem] text-cream/75">
              <li>
                <a href={`mailto:${brand.email}`} className="link-quiet">
                  {brand.email}
                </a>
              </li>
              <li>
                <a href={`tel:${brand.phone.replace(/[^+\d]/g, "")}`} className="link-quiet">
                  {brand.phone}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-[0.625rem] tracking-[0.28em] text-cream/65 uppercase">Follow</h2>
            <ul className="mt-6 space-y-3 text-[0.9375rem] text-cream/75">
              {brand.social.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="link-quiet"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-20 flex flex-wrap items-center justify-between gap-x-8 gap-y-4 border-t border-cream/10 pt-8">
          <p className="text-[0.625rem] tracking-[0.24em] text-cream/60 uppercase">
            &copy; {year} {brand.name}. All rights reserved.
          </p>
          <a
            href="#top"
            className="group inline-flex items-center gap-2.5 text-[0.625rem] tracking-[0.24em] text-cream/70 uppercase transition-colors duration-500 hover:text-cream"
          >
            Back to top
            <ArrowUp
              className="size-3.5 transition-transform duration-700 ease-luxe group-hover:-translate-y-1"
              strokeWidth={1.25}
            />
          </a>
        </div>
      </div>
    </footer>
  )
}
