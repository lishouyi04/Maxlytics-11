# Maxlytics — Next.js

Performance-marketing agency website (Hong Kong), migrated from a single-file
HTML build to **Next.js (App Router) + TypeScript + Tailwind**, package-managed
with **pnpm** and ready to deploy on **Vercel**.

This is **Milestone 1**: the complete English homepage plus the shared header,
footer and call-to-action, with the original design system restored 1:1.

## Prerequisites

- Node.js **18.18+** or **20+**
- **pnpm** (via Corepack — ships with Node):
  ```bash
  corepack enable
  ```

## Getting started

```bash
pnpm install
pnpm dev          # http://localhost:3000
```

Other scripts:

```bash
pnpm build        # production build
pnpm start        # serve the production build
pnpm lint         # eslint
```

## Deploying to Vercel

Push this folder to a Git repo and import it on Vercel, or:

```bash
pnpm dlx vercel        # preview
pnpm dlx vercel --prod # production
```

Vercel auto-detects Next.js and pnpm — no extra configuration needed.

## Project structure

```
app/
  layout.tsx          # <html>, fonts, metadata, shared Header + CTA + Footer
  page.tsx            # homepage — assembles the section components
  globals.css         # the full design system (verbatim; Tailwind preflight off)
components/
  Header.tsx          # sticky nav, mega-menu dropdowns, mobile nav  (client)
  Footer.tsx
  CTASection.tsx      # contact form + success animation             (client)
  SiteEffects.tsx     # reveal-on-scroll, count-up reels, glow spotlight (client)
  sections/           # Hero, Services, DataPlatform, WhyHome,
                      # Platforms, Testimonials, Process
  shaders/
    ColorBends.tsx    # hero WebGL background                        (client)
    Radar.tsx         # services WebGL background                    (client)
lib/
  testimonials.ts     # testimonials data
public/
  fonts/  bg/  img/  testimonials/   # extracted assets
```

Design tokens are exposed both as CSS variables (in `globals.css`) and as
Tailwind utilities (see `tailwind.config.ts`), so new UI can use either.

## Known pre-launch TODOs

Carried over from the original build — to be finalised before going live:

- **Navigation targets** — SEO / service / Resources / About links currently
  point to `#`. Real routes arrive in Milestone 2 (SEO hub) and beyond.
- **Contact form** is demo-only (no backend submission yet).
- **WhatsApp number** is inconsistent between the CTA and the footer — confirm
  the correct number.
- **Placeholder content** — stat figures, platform logos, client logos and the
  testimonial names/photos are placeholders pending real assets.

## Roadmap

- **M2** — SEO hub page (+ Aurora shader, accordion), service detail pages.
- **M3** — remaining service pages, Case Studies.
- **M4** — Resources/Blog, About, Contact + real assets.
- **Later** — re-introduce the Traditional-Chinese (zh-HK) locale via `next-intl`
  (the original translations are preserved for reuse).
