import { brand } from "./content"

/** Set NEXT_PUBLIC_SITE_URL at build time to make canonical/OG URLs absolute. */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.neweliteexport.com"
).replace(/\/$/, "")

export const siteDescription =
  `${brand.name} is a handcraft leather atelier founded in ${brand.founded}: ` +
  "hand-cut, saddle-stitched horse saddles, bags, accessories and bespoke commissions in full-grain leather."

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteUrl}#organization`,
  name: brand.name,
  url: siteUrl,
  description: siteDescription,
  foundingDate: String(brand.founded),
  email: brand.email,
  telephone: brand.phone,
  logo: `${siteUrl}/images/hero-saddle.jpg`,
  image: `${siteUrl}/images/hero-saddle.jpg`,
  sameAs: brand.social.map((item) => item.href),
  address: {
    "@type": "PostalAddress",
    streetAddress: brand.address[0],
    addressLocality: "Kanpur",
    addressRegion: "Uttar Pradesh",
    postalCode: "208010",
    addressCountry: "IN",
  },
  makesOffer: [
    "Handcrafted leather horse saddles",
    "Handcrafted leather bags",
    "Leather accessories",
    "Custom leather commissions",
  ].map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Product", name } })),
} as const
