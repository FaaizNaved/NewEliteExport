# New Elite Export — brand site

A single-page, non-commerce brand showcase for a handcraft leather atelier
(saddles, bags, accessories, commissions). Next.js 16 App Router, TypeScript,
Tailwind CSS v4, Framer Motion, shadcn/ui, Lucide, `next/image`, `next/font`.

```bash
npm run dev
```

## Where things live

| Path | What |
| --- | --- |
| `lib/content.ts` | **Every word and photograph on the page.** Copy, brand details, image imports. |
| `lib/site.ts` | Canonical URL, meta description, JSON-LD organisation schema. |
| `app/globals.css` | Design tokens: palette, fluid type scale, section rhythm, easing, component classes (`.shell`, `.section`, `.eyebrow`, `.field`). |
| `app/layout.tsx` | Fonts, metadata/OG/Twitter, structured data, header + footer + cursor. |
| `app/page.tsx` | Section order. Server component. |
| `components/sections/*` | One file per section. Server components except where scroll state is needed. |
| `components/motion/*` | `Reveal`, `TextReveal`, `ParallaxImage`, `Magnetic`. All honour `prefers-reduced-motion`. |
| `app/actions.ts` | Contact form server action. |

## Swapping in the client's photography

Drop files into `public/images/` and point the imports at the top of
`lib/content.ts` at them. Static imports give Next the intrinsic dimensions and
a blur placeholder for free, so nothing else needs to change.

The current photographs are placeholders sourced from Unsplash. Replace them
before launch.

## Contact form

`app/actions.ts` validates the submission server-side (required fields, email
and phone shape, length caps, honeypot) and then **logs it — it does not send
mail yet**. Replace the `console.info` line with a transactional send (Resend,
SES, SMTP); the validated payload above it is everything such a call needs.

## Before launch

- Set `NEXT_PUBLIC_SITE_URL` so canonical, OG and sitemap URLs are absolute.
- Replace the placeholder address, phone, email and social links in `lib/content.ts`.
- Swap the photography (above) and re-check the `alt` text.
- Add a real `app/favicon.ico`.
