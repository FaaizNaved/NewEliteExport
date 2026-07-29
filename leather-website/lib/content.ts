import type { StaticImageData } from "next/image"

import collectionAccessories from "@/public/images/collection-accessories.jpg"
import collectionBags from "@/public/images/collection-bags.jpg"
import collectionCustom from "@/public/images/collection-custom.jpg"
import collectionSaddles from "@/public/images/collection-saddles.jpg"
import contactAtelier from "@/public/images/contact-atelier.jpg"
import craftCutting from "@/public/images/craft-cutting.jpg"
import craftEdging from "@/public/images/craft-edging.jpg"
import craftFinal from "@/public/images/craft-final.jpg"
import craftInspection from "@/public/images/craft-inspection.jpg"
import craftSelection from "@/public/images/craft-selection.jpg"
import craftStitching from "@/public/images/craft-stitching.jpg"
import galleryDetail from "@/public/images/gallery-detail.jpg"
import galleryDuffel from "@/public/images/gallery-duffel.jpg"
import galleryEquine from "@/public/images/gallery-equine.jpg"
import galleryHarness from "@/public/images/gallery-harness.jpg"
import gallerySatchel from "@/public/images/gallery-satchel.jpg"
import galleryTack from "@/public/images/gallery-tack.jpg"
import galleryToolkit from "@/public/images/gallery-toolkit.jpg"
import galleryWallets from "@/public/images/gallery-wallets.jpg"
import heritageArtisan from "@/public/images/heritage-artisan.jpg"
import heritageBench from "@/public/images/heritage-bench.jpg"
import heroSaddle from "@/public/images/hero-saddle.jpg"

/* -------------------------------------------------------------------------
 * Every word and photograph on the site lives here. Swapping in the client's
 * own photography is a one-file change: replace the files in /public/images
 * and, if the names differ, the imports above.
 * ---------------------------------------------------------------------- */

export type Photograph = {
  src: StaticImageData
  alt: string
}

export const brand = {
  name: "New Elite Export",
  wordmark: "New Elite",
  suffix: "Export",
  tagline: "Handcrafted leather since 1974",
  founded: 1974,
  email: "atelier@neweliteexport.com",
  phone: "+91 512 220 4471",
  address: ["Tannery Road, Jajmau", "Kanpur 208010, India"],
  hours: "Monday — Saturday, 09:00 to 18:00 IST",
  social: [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "Pinterest", href: "https://pinterest.com" },
  ],
} as const

export const navigation = [
  { label: "Heritage", href: "#heritage" },
  { label: "Craft", href: "#craft" },
  { label: "Collections", href: "#collections" },
  { label: "Atelier", href: "#atelier" },
  { label: "Contact", href: "#contact" },
] as const

export const hero = {
  eyebrow: "Est. 1974 — Kanpur, India",
  lines: ["The hand", "behind the", "leather"],
  description:
    "For five decades we have cut, stitched and burnished saddlery and fine leather goods for riders, houses and collectors in more than forty countries. One hide. One artisan. One piece at a time.",
  primaryCta: { label: "Explore the craft", href: "#heritage" },
  secondaryCta: { label: "View collections", href: "#collections" },
  scrollLabel: "Scroll",
  image: {
    src: heroSaddle,
    alt: "A chestnut horse in hand-tooled bridle leather beside a finished western saddle at dusk",
  } satisfies Photograph,
}

export const heritage = {
  eyebrow: "Our heritage",
  index: "01",
  title: "A workshop that keeps its own time",
  body: [
    "The atelier was opened in 1974 with four benches, a stone burnisher and a single rule that has never been rewritten: nothing leaves the room until the person who made it puts their name to it.",
    "Three generations later the benches number sixty. The rule is unchanged. We still buy hides by hand at the tannery, still cut with a head knife, still close every seam with a two-needle saddle stitch that no machine has yet learned to imitate.",
  ],
  pullQuote:
    "Machines make things quickly. Hands make things that last.",
  attribution: "Rafiq Ahmad, Master Saddler",
  primary: {
    src: heritageArtisan,
    alt: "A master artisan working leather beneath a workbench lamp in the atelier",
  } satisfies Photograph,
  secondary: {
    src: heritageBench,
    alt: "A head knife resting on a cutting mat among freshly cut leather panels",
  } satisfies Photograph,
  stats: [
    { value: "1974", label: "Atelier founded" },
    { value: "60", suffix: "+", label: "Master artisans" },
    { value: "40", suffix: "+", label: "Countries served" },
    { value: "100", suffix: "%", label: "Full-grain hides" },
  ],
}

export type CraftStep = {
  index: string
  title: string
  description: string
  image: Photograph
}

export const craft = {
  eyebrow: "Our craft",
  index: "02",
  title: "Six stages. No shortcuts.",
  intro:
    "A saddle takes eleven weeks to make and a lifetime to wear out. This is where those weeks go.",
  steps: [
    {
      index: "01",
      title: "Leather selection",
      description:
        "Hides are chosen by hand at the tannery, read for grain, temper and scar. Roughly one in four makes it onto the cutting table.",
      image: {
        src: craftSelection,
        alt: "Full-grain hides hanging in the selection room, graded by hand",
      },
    },
    {
      index: "02",
      title: "Hand cutting",
      description:
        "Patterns are laid against the hide's natural stretch and cut with a head knife. Every panel is drawn from the same back so the piece ages as one.",
      image: {
        src: craftCutting,
        alt: "Leatherworking tools arranged on a cutting mat beside a hand-cut card holder",
      },
    },
    {
      index: "03",
      title: "Hand stitching",
      description:
        "Two needles, one waxed linen thread, seven stitches to the inch. A saddle stitch does not unravel when a single stitch is cut — a machine seam does.",
      image: {
        src: craftStitching,
        alt: "An artisan saddle-stitching a leather panel held in a wooden stitching pony",
      },
    },
    {
      index: "04",
      title: "Edge finishing",
      description:
        "Edges are bevelled, sanded through four grits, sealed with gum tragacanth and burnished with hardwood until they take on a glass sheen.",
      image: {
        src: craftEdging,
        alt: "Hands feeding a leather strap through a hand-cranked edge splitter",
      },
    },
    {
      index: "05",
      title: "Quality inspection",
      description:
        "Every piece is examined against the light, stitch by stitch, by an artisan who did not make it. Anything short of the standard goes back to the bench.",
      image: {
        src: craftInspection,
        alt: "A finished tan leather sheath examined by hand in daylight",
      },
    },
    {
      index: "06",
      title: "The finished piece",
      description:
        "Oiled, rested for a week, then stamped with the atelier mark and the initials of the artisan who closed the final seam.",
      image: {
        src: craftFinal,
        alt: "A finished leather zip wallet and key fob laid out on a walnut bench",
      },
    },
  ] satisfies CraftStep[],
}

export type Collection = {
  index: string
  title: string
  summary: string
  meta: string
  image: Photograph
}

export const collections = {
  eyebrow: "Collections",
  index: "03",
  title: "Four disciplines, one standard",
  intro:
    "We do not run seasons and we do not hold stock. Each discipline is made to order, by the same hands, to the same rule.",
  items: [
    {
      index: "01",
      title: "Horse saddles",
      summary:
        "English, western and endurance trees built on hand-shaped frames, panelled in wool flock and covered in vegetable-tanned hide. Fitted to horse and rider, not to a size chart.",
      meta: "Eleven weeks — bespoke fitting",
      image: {
        src: collectionSaddles,
        alt: "A wall of hand-built leather saddles resting on wooden racks in the workshop",
      },
    },
    {
      index: "02",
      title: "Leather bags",
      summary:
        "Satchels, weekenders and briefcases cut from a single back so the grain runs true across every panel. Brass furniture, linen thread, edges burnished by hand.",
      meta: "Four weeks — twelve house patterns",
      image: {
        src: collectionBags,
        alt: "A hand-stitched brown leather satchel with brass buckles resting on stone",
      },
    },
    {
      index: "03",
      title: "Accessories",
      summary:
        "Belts, wallets, card cases, journal covers and desk objects. The small pieces where a shortcut has nowhere to hide, and where most workshops take one.",
      meta: "Two weeks — six leathers",
      image: {
        src: collectionAccessories,
        alt: "Hand-finished leather wallets and card cases in tan, oxblood and black",
      },
    },
    {
      index: "04",
      title: "Custom orders",
      summary:
        "Drawn with you from the first sketch: a pattern cut for one person, one horse, one purpose. Archived under your name so it can be made again in thirty years.",
      meta: "By commission — worldwide",
      image: {
        src: collectionCustom,
        alt: "A bespoke tan leather passport cover beside waxed thread and stitching irons",
      },
    },
  ] satisfies Collection[],
}

export const atelier = {
  eyebrow: "The atelier",
  index: "04",
  title: "Inside the workshop",
  intro:
    "Kanpur, six in the morning. Waxed thread, hardwood burnishers and the smell of vegetable tannin.",
  images: [
    {
      src: gallerySatchel,
      alt: "Macro detail of the rolled handle and saddle stitching on a tan leather bag",
    },
    {
      src: galleryToolkit,
      alt: "Saddlery tools, buckles and rivets arranged on a dark workbench cloth",
    },
    {
      src: galleryDetail,
      alt: "Bridles and harness leather hanging in rows on a tack room wall",
    },
    {
      src: galleryTack,
      alt: "Close detail of a black leather dressage saddle seated on a grey horse",
    },
    {
      src: galleryWallets,
      alt: "Two hand-stitched leather wallets resting on a worn wooden table",
    },
    {
      src: galleryEquine,
      alt: "A finished leather saddle and girth resting over a timber fence rail",
    },
    {
      src: galleryHarness,
      alt: "Two working horses standing in hand-made leather harness",
    },
    {
      src: galleryDuffel,
      alt: "A burgundy leather weekender bag on an empty road at first light",
    },
  ] satisfies Photograph[],
}

export type Assurance = {
  icon: "hide" | "stitch" | "commission" | "signature"
  title: string
  description: string
}

export const assurances = {
  eyebrow: "Why New Elite",
  index: "05",
  title: "What fifty years of leather teaches",
  items: [
    {
      icon: "hide",
      title: "Full-grain hides only",
      description:
        "No corrected grain, no bonded leather, no pigment sprayed over a flaw. The hide arrives with its history and keeps it.",
    },
    {
      icon: "stitch",
      title: "Saddle-stitched by hand",
      description:
        "Two needles through every hole, locked at the ends. Cut one stitch and the seam holds — the reason the technique has outlived every machine sent to replace it.",
    },
    {
      icon: "commission",
      title: "Made to order",
      description:
        "Nothing sits in a warehouse. Work begins the week you commission it, on a bench assigned to your piece alone.",
    },
    {
      icon: "signature",
      title: "A name on every piece",
      description:
        "The artisan who closes the final seam stamps their initials beside the house mark. Accountability you can read in the leather.",
    },
  ] satisfies Assurance[],
}

export type Testimonial = {
  quote: string
  name: string
  role: string
}

export const testimonials = {
  eyebrow: "In their words",
  index: "06",
  title: "Kept, worn, handed on",
  items: [
    {
      quote:
        "My father's saddle came from this workshop in 1981. It has been reflocked twice and ridden almost every week since. Mine was made on the same bench.",
      name: "Isabelle Marchetti",
      role: "Equestrian, Tuscany",
    },
    {
      quote:
        "We have sourced leather goods across four continents. Nobody finishes an edge like this. You can feel the difference with your eyes closed.",
      name: "Henrik Lindqvist",
      role: "Buying Director, Stockholm",
    },
    {
      quote:
        "They asked what I carried, how I walked, which shoulder I favoured. Then they made the bag. Eight years on it has not needed a single repair.",
      name: "Adaeze Okonkwo",
      role: "Architect, Lagos",
    },
  ] satisfies Testimonial[],
}

export const contact = {
  eyebrow: "Enquiries",
  index: "07",
  title: "Begin a commission",
  intro:
    "Tell us what you have in mind. A member of the atelier will reply within two working days — no catalogues, no mailing list.",
  image: {
    src: contactAtelier,
    alt: "An artisan at work in the New Elite Export atelier, surrounded by hand tools",
  } satisfies Photograph,
  submitLabel: "Send enquiry",
}

/* A short, deliberately unexotic list — extend as needed. */
export const countries = [
  "Australia",
  "Belgium",
  "Brazil",
  "Canada",
  "France",
  "Germany",
  "India",
  "Ireland",
  "Italy",
  "Japan",
  "Netherlands",
  "New Zealand",
  "Saudi Arabia",
  "South Africa",
  "Spain",
  "Sweden",
  "Switzerland",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
] as const
