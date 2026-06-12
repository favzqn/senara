# Configuration & Infrastructure

## Config Files

### `js/config.js` — Centralized Config (frozen)

```js
CONFIG = {
  paths: {
    root: '/',
    stories: '/data/stories.js',
    monogatari: './monogatari/index.html',
    storyScript: (id) => `./monogatari/stories/${id}.js`,
    storyPage: (id) => `story.html?id=${id}`,
  },
  urls: {
    trakteer: 'https://trakteer.id/senara.id',        // Donation platform
    volunteerForm: 'https://forms.gle/...',             // Google Form
    contact: 'mailto:fauzan08fauzan@gmail.com?subject=...',
  },
  social: {
    twitter: (url, text) => `https://twitter.com/intent/tweet?...`,
    facebook: (url) => `https://www.facebook.com/sharer/sharer.php?...`,
    whatsapp: (text) => `https://wa.me/?text=${encodeURIComponent(text)}`,
  },
  ui: {
    mobileMenuDelay: 100,
    copyLinkTimeout: 2000,
    storyLoadTimeout: 5000,
  },
  features: {
    preloadAssets: true,
    enableAnalytics: true,     // Umami loaded via HTML script tags
    enableDebug: false,
  },
  validation: {
    minNameLength: 1,
    maxNameLength: 50,
  },
}
```

### `js/constants.js` — Enums & Constants (frozen)

Key constants:
- `CONSTANTS.CATEGORIES` — category name strings
- `CONSTANTS.EMOJIS` — story ID → emoji mapping
- `CONSTANTS.DIFFICULTIES` — Beginner, Intermediate, Advanced
- `CONSTANTS.STATUS` — published, draft, coming-soon
- `CONSTANTS.AGE_RATINGS` — 16+, 18+, All Ages
- `CONSTANTS.ERRORS` — error message strings
- `CONSTANTS.CATEGORY_SLUGS` — slug → category name mapping
- `CONSTANTS.DEFAULTS` — default player name, featured limit

### `version.json`

```json
{ "version": "1.0.4", "buildTime": "2026-01-01T10:47:24.427Z" }
```

### `bump-version.js`

Node.js script that updates version across all HTML files (query-string cache busting `?v=1.0.4`).

### `manifest.json` — PWA Manifest

- `short_name`: "Monogatari" (note: still uses engine name, not Senara)
- `orientation`: landscape
- `display`: fullscreen
- Icons: 13 sizes from 48x48 to 512x512

## Service Worker (`service-worker.js`)

**Cache name:** `senara-v1.0.4`

**Precached files:**
- `/`, `/index.html`, `/koleksi.html`, `/about.html`, `/faq.html`
- Core JS: config, constants, shared-utils, i18n-simple, navbar, footer, locales
- Data: stories.js, categories.js
- manifest.json

**Strategy:** Cache-first for same-origin GET requests. Network fetch on cache miss, then caches the response. Old caches deleted on activate.

## Analytics

- **Umami** — privacy-focused, no cookies
- Website ID: `d358dae2-966c-46d3-bf10-c43ae1e20415`
- Enabled via `data-umami-event` HTML attributes
- Story-specific analytics in `monogatari/js/analytics.js` (scene changes, choices, quizzes, completion, abandonment)
- **Note:** `CONFIG.features.enableAnalytics` is `true` but Umami is loaded via HTML `<script>` tags (not gated by this flag). The flag is currently unused in code.

## Deployment

- `_headers` file for cache control (HTML: no-cache, CSS/JS/data: 1-day cache)
- Compatible with Netlify, Cloudflare Pages, Vercel, Wasmer
- No build step — deploy files as-is

## Audio Pipeline

- `convert-audio.sh` — bash script to convert WAV → MP3 using ffmpeg
- Voice files stored in `monogatari/assets/voices/` as numbered MP3s

## Known Issues in Config

- `manifest.json` now correctly says "Senara" (fixed)
- `CONFIG.features.enableAnalytics` is `true` but Umami is loaded via HTML `<script>` tags — flag is unused dead code
- Service worker cache version needs manual bump in both `service-worker.js` and the `CACHE_NAME` string
