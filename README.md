# NuScript Website

Marketing website for NuScript — clinical documentation and revenue cycle
management services. Built with **Next.js** (App Router) and exported as a fully
static site, deployed on **Cloudflare Pages** and served at
[nuscript.net](https://nuscript.net).

An editorial "lab" design: an Instrument Serif display face over Public Sans
body, Inter Tight uppercase micro-labels, and a bone / ink / cyan-"plasma"
palette.

## Stack

- **Next.js 15** (App Router) — static export (`output: "export"`), so every page
  ships as prerendered HTML with its own `<title>`, meta description, and canonical
  URL for SEO.
- **Tailwind CSS** for styling; design tokens (bone / ink / plasma / sage) in
  `app/globals.css` and `tailwind.config.js`.
- **Fonts** — self-hosted at build via `next/font/google` (no runtime CDN):
  Instrument Serif (display), Public Sans (body), Inter Tight (labels/UI).
- **lucide-react** for icons.

## Local development

Prerequisites: Node.js 20+.

```bash
npm install
npm run dev        # http://localhost:3000
```

## Production build

```bash
npm run build      # outputs a static site to ./out
```

Cloudflare Pages builds this automatically on every push to `main`.

## Project structure

```
app/                     App Router: one folder per route
  layout.jsx             Root layout — fonts, <SiteHeader>, <CertificateFooter>, metadata
  page.jsx               Home
  about/                 /about
  contact/               /contact
  clinical-documentation/  · medico-legal-transcription/
  medical-coding/          · revenue-cycle-management/
  privacy-policy/  · terms-of-use/
  not-found.jsx          404
  robots.js  · sitemap.js
  globals.css            Tailwind + design tokens + animations
components/              SiteHeader, FloatingNav, Hero, ServicesGallery,
                         SpecialtiesMarquee, ScienceOfCare, CtaBand,
                         CertificateFooter, ServicePage, Journey, WhyNuScript,
                         ContactForm, BeakerProgress, LegalPage
lib/                     services.js (service content) · utils.js (helpers)
public/                  Images (WebP), favicon, _redirects
```

## Content

Service content lives in `lib/services.js` (overview, features, workflow steps).
The four service pages share the `ServicePage` template driven by that data.

## Routing & redirects

Clean lowercase URLs (e.g. `/clinical-documentation`). The old Base44 CamelCase
paths are 301-redirected to the new ones via `public/_redirects`.

## Deployment (Cloudflare Pages)

| Setting                | Value          |
| ---------------------- | -------------- |
| Build command          | `npx next build` |
| Build output directory | `out`          |
| Node version           | 20 (pinned via `.node-version`) |
