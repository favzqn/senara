# Architecture

## Overview

Senara is a static site built with Astro 6, outputting pure HTML/CSS/JS. No server, no database.

```
┌─────────────────────────────────────────────────┐
│                    Browser                       │
│                                                  │
│  ┌──────────┐  ┌──────────┐  ┌──────────────┐  │
│  │ HTML     │  │ CSS      │  │ JavaScript   │  │
│  │ 14 pages │  │ 10 files │  │ 10 TS files  │  │
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

## Build Pipeline

### Astro Build
1. `npm run fetch:videos` — Fetches YouTube channel data
2. `npm run build:css` — Builds Tailwind CSS (22KB output)
3. `astro build` — Generates static HTML in `dist/`

### Development
```bash
npm run dev          # Astro dev server with HMR
npm run watch:css    # Tailwind watch mode
```

## Rendering Pipeline

### Page Load
1. Astro outputs static HTML for each page
2. CSS files loaded (tailwind.min.css → home.css → page-specific → dark-mode → performance)
3. TS scripts loaded (i18n, dark-mode, shared-utils, page-specific)
4. i18n translates all `data-i18n` elements
5. Page-specific JS initializes (filters, story loader, video library, etc.)

### Component Pattern
Astro components render server-side at build time:
```astro
---
// Frontmatter: data fetching, imports
const stories = allStoriesData.filter(s => s.featured);
---
<!-- Template: HTML with Astro syntax -->
<div class="grid">
  {stories.map(story => <StoryCard story={story} />)}
</div>

<script>
  // Client-side JS
</script>
```

## Data Flow

### Stories
```
src/data/stories.ts (metadata)
  → src/scripts/collection-page.ts (filters, sort, search)
  → src/scripts/shared-utils.ts createStoryCard() (render)
  → DOM

src/data/stories.ts + public/monogatari/stories/{id}/ (scripts)
  → src/scripts/story-page.ts (load story)
  → Monogatari engine (play)
  → DOM
```

### i18n
```
src/i18n/{lang}.json (translations)
  → src/scripts/i18n.ts (translatePage, t())
  → DOM (data-i18n, data-i18n-html attributes)
```

## CSS Architecture

### Load Order
1. `tailwind.min.css` — Utility classes (22KB)
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
npx tailwindcss -i style/tailwind-input.css -o public/style/tailwind.min.css --minify
```
- CDN: ~300KB
- Built: ~22KB (93% reduction)

### Service Worker
Precaches all critical assets. Falls back to `offline.html` for navigation requests.

### Lazy Loading
- Image lazy loading (`loading="lazy"`)
- Intersection Observer for reveal animations
- Font display swap

## Deployment

Static hosting (any CDN):
- Wasmer Edge (current)
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
