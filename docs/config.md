# Configuration & Infrastructure

## Config File

### `src/scripts/config.ts` — Centralized Config (frozen)

```ts
export const CONFIG = {
  paths: {
    monogatari: './monogatari/index.html',
  },
  social: {
    twitter: (url, text) => `https://twitter.com/intent/tweet?url=...&text=...`,
    facebook: (url) => `https://www.facebook.com/sharer/sharer.php?u=...`,
    whatsapp: (text) => `https://wa.me/?text=...`,
  },
  ui: {
    copyLinkTimeout: 2000,
  },
};

Object.freeze(CONFIG);
```

### `manifest.json` — PWA Manifest

- `short_name`: Senara
- `orientation`: any
- `display`: standalone
- Icons: 1 SVG (`assets/icons/icon.svg`, sizes "any")

## Service Worker (`public/service-worker.js`)

**Cache name:** `senara-v2.0.0`

**Precached files (26):**

14 routes:
`/`, `/collection/`, `/tv/`, `/about/`, `/faq/`, `/story/`, `/contact/`, `/donate/`, `/safety/`, `/privacy/`, `/terms/`, `/accessibility/`, `/for-organizations/`, `/offline/`

11 CSS files:
`home.css`, `tailwind.min.css`, `collection.css`, `story-cards.css`, `story.css`, `tv.css`, `about.css`, `performance.css`, `dark-mode.css`, `pages.css`, `safety.css`

Plus `manifest.json`.

**Strategy:** Cache-first for same-origin GET requests. Network fetch on cache miss, then caches the response. Navigation requests fall back to `/offline/` on network failure. Old caches deleted on activate.

## Analytics

- **Umami** — privacy-focused, no cookies
- Loaded via `<script defer>` in `src/layouts/BaseLayout.astro`
- Website ID: `d358dae2-966c-46d3-bf10-c43ae1e20415`
- Enabled via `data-umami-event` HTML attributes on interactive elements

## Deployment

- **Stack:** Astro 6 + TypeScript + Tailwind CSS 3
- Build with `npm run build` (fetches videos, builds CSS, runs `astro build`)
- Output is static files in `dist/`
- Compatible with Netlify, Cloudflare Pages, Vercel
- Service worker registered in `BaseLayout.astro`

## Audio Pipeline

- `convert-audio.sh` — bash script to convert WAV → MP3 using ffmpeg
- Voice files stored in `public/monogatari/assets/voices/` as numbered MP3s
