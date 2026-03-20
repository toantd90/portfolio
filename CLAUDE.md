# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev          # Start development server
pnpm build        # Production build
pnpm start        # Start production server
pnpm lint         # Run ESLint
```

If you see `Cannot find module './[chunk].js'` errors, clear the stale build cache:
```bash
rm -rf .next && pnpm dev
```

## Architecture

This is a **Next.js 15** portfolio site using a hybrid router setup:
- **App Router** (`app/`) — page layout and all UI sections
- **Pages Router** (`pages/api/contact.js`) — contact form API route using `nodemailer`

### Key Directories

- `app/` — root layout (`layout.tsx`), home page (`page.tsx`), global styles (`globals.css`)
- `components/` — section components (`Hero`, `About`, `Skills`, `Projects`, `Contact`, `Header`, `Footer`, `Menu`)
- `components/ui/` — shadcn-compatible primitives (`splite.tsx` for Spline 3D, `spotlight.tsx`, `card.tsx`)
- `hooks/` — `useScrollAnimation.ts` — `IntersectionObserver` hook returning `{ ref, isVisible }` for scroll-triggered CSS transitions
- `lib/utils.ts` — `cn()` helper (`clsx` + `tailwind-merge`) used by `components/ui/`
- `public/images/` — static assets (project screenshots, skill icons, illustrations)

### Design System

The site is **always-dark** — no light mode, no `dark:` conditional Tailwind classes. All sections use `bg-neutral-950` or `bg-neutral-900` alternating backgrounds. The indigo/violet gradient palette is used consistently for headings, CTAs, hover states, and focus rings.

Custom Tailwind extensions in `tailwind.config.js`:
- Animations: `fade-in-up`, `fade-in`, `float`, `shimmer`, `spotlight`
- Shadows: `shadow-glow` (`violet/25`), `shadow-glow-lg` (`violet/35`)

### Hero Section

Uses `@splinetool/react-spline` lazy-loaded via `components/ui/splite.tsx` inside a `Suspense` boundary. The Spline scene URL is embedded in `components/Hero.tsx`.

### Contact Form

`pages/api/contact.js` handles POST requests, sending email via `nodemailer`. Requires environment variables for SMTP credentials (see `.env.local`).
