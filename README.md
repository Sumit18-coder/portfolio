# Sumit Avhale — Portfolio

Next.js 15 (App Router) + TypeScript + Tailwind CSS + Framer Motion.

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000. Requires Node 18.18+ (built and tested on Node 22).

## Before you deploy — replace these placeholders

All content lives in one file: `content/profile.ts`. Open it and replace:

- `github.username` and `github.url` — your real GitHub. Once a real username is set,
  the GitHub activity section automatically fetches live stats and recent repos from
  the GitHub REST API (server component, revalidates hourly). Until then it shows a
  quiet placeholder instead of fake numbers.
- `linkedin` — your real LinkedIn URL.
- `siteUrl` — your real deployed domain (used for metadata, sitemap, robots, Open Graph).
- Each project's `github` and `demo` links (currently `#`).

Also add real files to `public/`:

- `resume.pdf` — linked from the nav, hero, and command palette (⌘K).
- `og-image.png` — 1200×630, used for link previews on LinkedIn/X.
- `favicon.ico`

## Contact form (EmailJS)

The form in `components/sections/contact.tsx` is wired for EmailJS but needs your keys.
Copy `.env.example` to `.env.local` and fill in:

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=
```

Get these from https://www.emailjs.com after creating a service + template. Until they're
set, submitting the form shows a toast explaining it isn't configured yet — it won't fail silently.

## What's built

- Hero with a live-typing "API console" that cycles through real endpoints from your
  projects (`content/profile.ts` → `apiConsoleLines`) instead of a generic animation.
- About, categorized skills, expandable project cards, experience timeline, education,
  certifications.
- GitHub activity section (live data, graceful fallback if unset).
- Contact form with validation, EmailJS send, and toast notifications.
- Command palette (⌘K / Ctrl+K) for keyboard navigation and quick links.
- Dark mode by default with a light mode toggle, persisted across visits.
- Scroll progress bar, scroll-to-top button, scroll-spy navbar.
- SEO: dynamic metadata, Open Graph + Twitter cards, JSON-LD Person schema,
  `sitemap.xml`, `robots.txt`.
- Server Components by default; the API console, theme toggle, command palette,
  and contact form are the only client components.

## What's intentionally not built yet

To keep this shippable rather than half-finished everywhere, these bonus ideas from
the brief were left out — all straightforward to add later if you want them:
blog section, books/currently-learning list, Spotify widget, resume preview modal,
reading progress bar (separate from scroll progress), keyboard shortcuts beyond ⌘K.

## Deploy to Vercel

```bash
npm i -g vercel
vercel
```

Or push this to a GitHub repo and import it at https://vercel.com/new — Vercel
detects Next.js automatically. Add the EmailJS env vars in the Vercel project's
Environment Variables settings before your first production deploy.

## Security note

`next` and `react` are pinned to versions patched against the December 2025
React Server Components CVEs (CVE-2025-66478, CVE-2025-55183/55184, CVE-2025-67779).
Keep them current — run `npm outdated` periodically.
# portfolio
