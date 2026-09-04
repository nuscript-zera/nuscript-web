# NuScript Website

Marketing website for NuScript — clinical documentation and revenue cycle
management services. Built with **Next.js** (App Router) and exported as a fully
static site, deployed on **Cloudflare Pages** and served at
[nuscript.net](https://nuscript.net).

## Stack

- **Next.js 15** (App Router) — static export (`output: "export"`), so every page
  ships as prerendered HTML with its own `<title>`, meta description, and canonical
  URL for proper SEO.
- **Tailwind CSS** for styling.
- **General Sans** — self-hosted via `next/font/local` (no external font CDN).
- **framer-motion** for animations, **lucide-react** for icons, **sonner** for toasts.

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

The `out/` directory is the complete static site. Cloudflare Pages builds this
automatically on every push to `main` (see below).

## Project structure

```
app/                     App Router: one folder per route
  layout.jsx             Root layout — fonts, <Nav>, <Footer>, metadata defaults
  page.jsx               Home
  about/                 /about
  contact/               /contact
  clinical-documentation/
  medico-legal-transcription/
  medical-coding/
  revenue-cycle-management/
  privacy-policy/
  terms-of-use/
  not-found.jsx          404
  robots.js              Generates /robots.txt
  sitemap.js             Generates /sitemap.xml
  globals.css            Tailwind + design tokens + type scale
  fonts/                 Self-hosted General Sans variable font
components/              Nav, Footer, GenericHero, CTABox, home/, about/, pages/, ui/
lib/utils.js            cn() helper + createPageUrl() route map
public/                 Images (WebP), logos, favicon, _redirects
```

## Routing & redirects

Pages use clean lowercase URLs (e.g. `/clinical-documentation`). The old Base44
CamelCase paths (e.g. `/ClinicalDocumentation`) are 301-redirected to the new ones
via `public/_redirects`, so existing links and search results keep working.

## Deployment (Cloudflare Pages)

The `nuscript-web` repo is connected to Cloudflare Pages. Build settings:

| Setting                | Value          |
| ---------------------- | -------------- |
| Framework preset       | Next.js (Static HTML Export) |
| Build command          | `npx next build` |
| Build output directory | `out`          |
| Node version           | 20 (pinned via `.node-version`) |

Any push to `main` triggers a new production deployment.

## Images

Source photos are optimized to WebP and live in `public/`. To add a new image,
drop the optimized `.webp` into `public/` and reference it as `/your-image.webp`.
