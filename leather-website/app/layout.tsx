import type { Metadata, Viewport } from "next"
import { Cormorant_Garamond, Inter } from "next/font/google"

import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { brand } from "@/lib/content"
import { organizationSchema, siteDescription, siteUrl } from "@/lib/site"

import "./globals.css"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
})

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${brand.name} — Handcrafted Leather Saddles, Bags & Accessories`,
    template: `%s — ${brand.name}`,
  },
  description: siteDescription,
  applicationName: brand.name,
  keywords: [
    "handcrafted leather saddles",
    "leather horse saddle manufacturer",
    "handmade leather bags",
    "full-grain leather accessories",
    "custom leather goods",
    "saddlery atelier",
    "leather export house",
  ],
  authors: [{ name: brand.name, url: siteUrl }],
  creator: brand.name,
  publisher: brand.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: brand.name,
    title: `${brand.name} — Handcrafted Leather Since ${brand.founded}`,
    description: siteDescription,
    url: siteUrl,
    locale: "en_GB",
    images: [
      {
        url: "/images/hero-saddle.jpg",
        width: 2400,
        height: 1602,
        alt: "Hand-tooled bridle leather and a finished saddle at the New Elite Export atelier",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${brand.name} — Handcrafted Leather Since ${brand.founded}`,
    description: siteDescription,
    images: ["/images/hero-saddle.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  category: "Craft & Manufacturing",
}

export const viewport: Viewport = {
  themeColor: "#12100e",
  colorScheme: "light",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable} antialiased`}>
      <body className="min-h-dvh">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[110] focus:bg-ink focus:px-5 focus:py-3 focus:text-[0.6875rem] focus:tracking-[0.22em] focus:text-cream focus:uppercase"
        >
          Skip to content
        </a>

        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />

        <script
          type="application/ld+json"
          // Static, author-controlled JSON — no user input reaches this string.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </body>
    </html>
  )
}
