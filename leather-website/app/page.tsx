import { Assurances } from "@/components/sections/assurances"
import { Atelier } from "@/components/sections/atelier"
import { Collections } from "@/components/sections/collections"
import { Contact } from "@/components/sections/contact"
import { Craft } from "@/components/sections/craft"
import { Heritage } from "@/components/sections/heritage"
import { Hero } from "@/components/sections/hero"
import { Testimonials } from "@/components/sections/testimonials"

export default function Home() {
  return (
    <>
      <Hero />
      <Heritage />
      <Craft />
      <Collections />
      <Atelier />
      <Assurances />
      <Testimonials />
      <Contact />
    </>
  )
}
