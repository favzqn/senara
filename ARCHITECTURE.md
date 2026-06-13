# Architecture

## Overview

Senara is a static website with no server, no database, and no build system (except Tailwind CSS). It runs entirely in the browser.

```
┌─────────────────────────────────────────────────┐
│                    Browser                       │
│                                                  │
│  ┌──────────┐  ┌──────────┐  ┌──────────────┐  │
│  │ HTML     │  │ CSS      │  │ JavaScript   │  │
│  │ 13 pages │  │ 12 files │  │ 15 files     │  │
│  └──────────┘  └──────────┘  └──────────────┘  │
│                                                  │
│  ┌──────────────────────────────────────────┐   │
│  │         Service Worker (cache)            │   │
│  └──────────────────────────────────────────┘   │
│                                                  │
│  ┌──────────────────────────────────────────┐   │
│  │         LocalStorage (state)              │   │
│  │  - Language preference                    │   │
│  │  - Dark mode preference                   │   │
│  │  - Story progress                         │   │
│  │  - Collection filters                     │   │
│  └──────────────────────────────────────────┘   │
└─────────────────────────────────────────────────┘
         │                    │
         ▼                    ▼
   ┌──────────┐        ┌──────────┐
   │ YouTube  │        │ Monogatari│
   │ (embeds) │        │ (VN engine)│
   └──────────┘        └──────────┘
```

## Rendering Pipeline

### Page Load
1. Browser loads HTML
2. CSS files loaded (tailwind.min.css → home.css → page-specific → dark-mode → performance)
3. JS files loaded (locales → i18n → config → constants → shared-utils → navbar → footer → page-specific)
4. `DOMContentLoaded` fires
5. Navbar renders into `#navbar-placeholder`
6. Footer renders into `footer` element
7. Page-specific JS initializes (filters, story loader, video library, etc.)
8. i18n translates all `data-i18n` elements

### Component Rendering
Navbar and footer are JS-rendered components:
```js
// navbar.js
function getNavbarHTML(pageName) { /* returns HTML string */ }
function initNavbar(pageName) {
  document.getElementById('navbar-placeholder').outerHTML = getNavbarHTML(pageName);
}

// footer.js
function getFooterHTML() { /* returns HTML string */ }
function initFooter() {
  document.querySelector('footer').outerHTML = getFooterHTML();
}
```

### Story Card Rendering
```js
// shared-utils.js
function createStoryCard(story, options) {
  // Returns a DOM element with thumbnail, title, tags, metadata, play button
  // Uses getText() for i18n, SVG icons (no emojis)
}
```

## Data Flow

### Stories
```
data/stories.js (metadata)
  → collection-page.js (filters, sort, search)
  → shared-utils.js createStoryCard() (render)
  → DOM

data/stories.js + monogatari/stories/{id}/ (scripts)
  → story-page.js (load story)
  → Monogatari engine (play)
  → DOM
```

### Videos
```
data/tv-channels.js (channel config)
  → video-library.js (fetch RSS, render)
  → YouTube embeds
  → DOM
```

### i18n
```
js/locales/{lang}.js (translations)
  → js/locales.js (loader)
  → js/i18n-simple.js (translatePage, t())
  → DOM (data-i18n, data-i18n-html attributes)
```

## CSS Architecture

### Load Order
1. `tailwind.min.css` — Utility classes
2. `home.css` — Base styles, nav, footer, buttons, cards
3. Page-specific CSS (`collection.css`, `about.css`, `safety.css`, etc.)
4. `dark-mode.css` — Dark mode overrides (must use `!important`)
5. `performance.css` — Loading states, reduced motion

### Specificity Strategy
```
Tailwind utilities (low) → home.css (medium) → page CSS (high) → dark-mode.css (!important)
```

Dark mode uses `!important` because it loads before page-specific CSS.

### Dark Mode Selectors
```css
/* System preference */
@media (prefers-color-scheme: dark) {
  html:not(.light) { /* overrides */ }
}

/* Manual toggle */
html.dark { /* overrides */ }
```

## State Management

All state is in the browser — no server:

| State | Storage | Purpose |
|-------|---------|---------|
| Language | `localStorage('senara_lang')` | i18n preference |
| Dark mode | `localStorage('senara_dark_mode')` | Theme preference |
| Story progress | `localStorage('monogatari_*')` | VN save data |
| Collection filters | `sessionStorage` + URL params | Filter state |

## Performance

### Tailwind Build
```bash
npx tailwindcss -i style/tailwind-input.css -o style/tailwind.min.css --minify
```
- CDN: ~300KB
- Built: ~22KB (93% reduction)

### Service Worker
Precaches all critical assets. Falls back to `offline.html` for navigation requests.

### Lazy Loading
`performance-utils.js` handles:
- Image lazy loading (`loading="lazy"`)
- Intersection Observer for reveal animations
- Font display swap

## Deployment

Static hosting (any CDN):
- GitHub Pages
- Netlify
- Vercel
- Cloudflare Pages

No server-side code. No environment variables. No database.

## Analytics

Umami (self-hosted, privacy-focused):
```html
<script defer src="https://cloud.umami.is/script.js" data-website-id="..."></script>
```
Events tracked with `data-umami-event` attributes.
