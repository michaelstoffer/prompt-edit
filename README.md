# PromptEdit — Sales & Marketing Page

A high-performance marketing site for [PromptEdit](https://promptedit-eta.vercel.app) — an AI tools platform and template library for video creators. Built with Vue 3, Vite, and Tailwind v4. Zero external requests. WCAG AA accessible. Lighthouse-optimised.

**Live:** [promptedit-eta.vercel.app](https://promptedit-eta.vercel.app)

---

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Vue 3 (Composition API, `<script setup>`) |
| Build | Vite 6 |
| Styling | Tailwind CSS v4 (via `@tailwindcss/vite`) |
| Language | TypeScript |
| Font | Inter Variable — self-hosted via `@fontsource-variable/inter` |
| Deployment | Vercel |

---

## Architecture Highlights

### Zero External Requests
The Inter variable font is served locally from the npm package `@fontsource-variable/inter`. No Google Fonts. No CDN font calls. Every network request on load is to the same origin.

### Font Preload Plugin
A custom Vite plugin (`vite.config.ts`) injects `<link rel="preload">` for the Inter latin woff2 into `index.html` post-build. Font paths are kept hash-free across builds via `rollupOptions.output.assetFileNames` so the preload link stays valid on every deploy.

### CSS-Only UI Mockups
The dashboard preview and all template category visuals are drawn entirely with CSS — gradients, flexbox, grid, and border-radius. No images, no SVG assets, zero additional HTTP requests. Technique used by Linear, Vercel, and Stripe.

### Tailwind v4 Theme Tokens
Custom brand colors are defined in `src/style.css` via `@theme {}` and consumed as utility classes throughout:

```css
@theme {
  --color-brand: #ff5c00;
  --color-surface: #0c0c10;
  --color-muted: #888;
  /* … */
}
```

Classes like `text-brand`, `bg-surface`, `text-muted` are available in every component without configuration files.

### Security Headers (Vercel)
All responses include hardened HTTP headers via `vercel.json`:

- `Strict-Transport-Security` — HSTS with preload
- `X-Frame-Options: SAMEORIGIN` — clickjacking protection
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy` — camera, mic, geolocation, and payment all disabled

Static assets under `/assets/` are served with `Cache-Control: public, max-age=31536000, immutable` for 1-year browser caching.

---

## Accessibility (WCAG 2.1 AA)

Every interactive pattern is built to spec:

- **Skip navigation** — visually hidden "Skip to main content" link as the first focusable element, targeting `<main id="main-content">`
- **Landmark regions** — `<main>`, `<nav aria-label="Main navigation">`, `<nav aria-label="Footer links">`, `role="region"` on the logo strip
- **Section labels** — every `<section>` has `aria-labelledby` pointing to its heading
- **ARIA tabs** — the AI Tools section is a fully wired tab pattern: `role="tablist"`, `role="tab"` with `aria-selected` + `aria-controls`, `role="tabpanel"` with `aria-labelledby`
- **Accordion** — FAQ uses `<button>` with `aria-expanded` and `aria-controls` on each item
- **Focus ring** — `:focus-visible` shows a 2px brand-orange outline for keyboard users, suppressed on mouse interaction
- **Reduced motion** — `@media (prefers-reduced-motion: reduce)` collapses all animations and scroll-reveal transitions to instant
- **Color contrast** — all text meets 4.5:1 minimum (3:1 for large/bold). Button text uses `#1a0800` on the orange background instead of white, which would only achieve 3.09:1
- **Decorative noise** — `aria-hidden="true"` on all glows, blobs, marquee duplicates, and purely decorative SVGs

Axe-core reports **zero violations** on the production build.

---

## Page Sections

| Component | Description |
|---|---|
| `NavBar` | Fixed nav with scroll-blur, desktop links, mobile hamburger menu |
| `HeroSection` | Full-viewport hero with animated entrance, floating UI cards |
| `LogoStrip` | CSS marquee of integrated AI tools and plugins |
| `DashboardMockup` | CSS-drawn browser chrome showing the PromptEdit dashboard UI |
| `ProblemSection` | "You're paying for 8 tools" — the consolidation pitch |
| `ToolsSection` | ARIA tab panel — AI Video, Image, Audio, Plugins, Templates |
| `TemplatesSection` | 100K+ asset library with CSS visual previews per category |
| `PricingSection` | Two-plan grid — Credit Pack + Monthly Pro, with guarantee bar |
| `TestimonialsSection` | Three customer quotes with avatar initials |
| `FaqSection` | Accordion FAQ, 8 questions |
| `FinalCta` | Full-width conversion section |
| `FooterSection` | Logo, copyright, policy links |

---

## Getting Started

```bash
npm install
npm run dev
```

The dev server starts at `http://localhost:5173`.

```bash
npm run build   # type-check + production build → dist/
npm run preview # serve the dist/ folder locally
```

---

## Deployment

The project deploys to Vercel automatically. To deploy manually:

```bash
npx vercel --prod
```

All build settings are in `vercel.json` — no dashboard configuration required.
