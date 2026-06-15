# AGENTS.md — AI Agent Instructions for Senara

## Project Overview

Senara is a free, nonprofit interactive story platform built as a static website. It teaches life skills (mental health, financial literacy, digital literacy, communication, environmental awareness) through visual novel-style interactive stories.

**Live:** https://senara.id  
**Stack:** Astro 6 + TypeScript + Tailwind CSS 3 (built)  
**Static output. No server. No database.**

## Quick Reference

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start Astro dev server |
| `npm run build` | Full build (fetch videos + build CSS + astro build) |
| `npm run build:css` | Rebuild Tailwind CSS |
| `npm run watch:css` | Watch + rebuild Tailwind |
| `npm run preview` | Preview production build |
| `npm run serve` | Serve dist/ on port 8080 |
| `npm run fetch:videos` | Fetch YouTube video data |

## Architecture

### Pages (14 Astro pages in `src/pages/`)
- `index.astro` — Landing page with VN demo, featured stories, categories, CTA
- `collection.astro` — Story browser with filters, search, sort
- `story.astro` — VN player (Monogatari engine)
- `about.astro` — Multi-tab: Story, Approach, Team, Contribute
- `tv.astro` — YouTube video library (curated educational channels)
- `faq.astro` — FAQ with search + category filters
- `contact.astro` — Contact form info
- `donate.astro` — Donation transparency
- `safety.astro` — Mental health resources + hotlines
- `privacy.astro`, `terms.astro`, `accessibility.astro` — Legal
- `for-organizations.astro` — Partnership info
- `offline.astro` — Offline fallback (service worker)

### Components (`src/components/`)
- `Navbar.astro` — Navigation bar
- `Footer.astro` — Site footer
- `SEO.astro` — JSON-LD structured data, Open Graph meta

### Scripts (`src/scripts/`)
- `i18n.ts` — i18n system (3 languages: id, en, ja)
- `dark-mode.ts` — Dark mode toggle with localStorage
- `shared-utils.ts` — Shared functions: `createStoryCard()`, `t()`, `getText()`
- `home-page.ts` — Landing page logic
- `collection-page.ts` — Collection page filters/sort/search
- `story-page.ts` — Story detail page
- `video-library.ts` — TV page video library
- `vn-demo.ts` — Lightweight VN demo on landing page
- `config.ts` — Configuration
- `fetch-videos.ts` — YouTube data fetcher

### Styles (`src/styles/`)
- `home.css` — Base styles: nav, hero, footer, buttons, cards, VN demo
- `pages.css` — Shared page components: FAQ, donate, contact, safety, about
- `collection.css` — Collection page filters, grid, cards
- `story-cards.css` — Story card styles
- `story.css` — VN player styles
- `tv.css` — TV page styles
- `about.css` — About page tabs, sections, cards
- `safety.css` — Safety page styles + dark mode
- `dark-mode.css` — Dark mode overrides
- `performance.css` — Loading states, skeletons, reduced motion

### Data (`src/data/`)
- `stories.ts` — Story metadata (title, description, category, difficulty, etc.)
- `categories.ts` — Category definitions
- `tv-channels.ts` — YouTube channel data + hero configs

### i18n (`src/i18n/`)
- `id.json` — Indonesian translations (default)
- `en.json` — English translations
- `ja.json` — Japanese translations

### Layouts (`src/layouts/`)
- `BaseLayout.astro` — Base HTML layout with head, fonts, analytics

### VN Stories (Monogatari engine in `public/monogatari/`)
- `stories/pahlawan-kesehatan-mental/` — Mental Health Hero (5 chapters, voice acted)
- `stories/teman-baru-di-kelas-8b/` — New Friend in Class 8B (8 chapters)
- `stories/digital-literacy-navigator/` — Digital Literacy (1 chapter, coming-soon)
- `stories/dompet-kosong-mimpi-penuh/` — Financial Literacy (1 chapter, coming-soon)
- `stories/komunikasi-resolusi-konflik/` — Communication (1 chapter, coming-soon)
- `stories/misi-nol-sampah`` — Environmental Awareness (1 chapter, coming-soon)
- `js/story-loader.js` — Story loader with STORY_CONFIG
- `assets/scenes/` — Scene background images

## Key Patterns

### Component Pattern
Astro components render directly. Scripts use `client:load` or inline `<script>` tags.
```astro
---
// Frontmatter: data fetching, imports
---
<!-- Template: HTML with Astro syntax -->
<script>
  // Client-side JS
</script>
```

### i18n Pattern
HTML uses `data-i18n` attributes for text, `data-i18n-html` for HTML content:
```html
<h1 data-i18n="about.title">About Senara</h1>
<p data-i18n-html="faq.questions.support.a">Text with <a href="...">links</a></p>
```
JS uses `t(key)` or `getText(key, fallback)`.

### Dark Mode Pattern
CSS uses `@media (prefers-color-scheme: dark)` with `html:not(.light)` AND `html.dark` selectors. All overrides use `!important` because page CSS files load after `dark-mode.css`.

### Scroll Reveal Pattern
```ts
// Add .reveal class, observer adds .reveal-visible
document.querySelectorAll('.section').forEach(el => el.classList.add('reveal'));
```
CSS in `pages.css`: `.reveal { opacity: 0; transform: translateY(20px); }` → `.reveal.reveal-visible { opacity: 1; transform: none; }`

## Important Rules

1. **No emojis as icons** — Use inline SVGs (Lucide/Heroicons style)
2. **All clickable elements need `cursor: pointer`**
3. **All interactive elements need `:focus-visible` states**
4. **Dark mode overrides need `!important`** (specificity issue)
5. **Tailwind utilities for layout, custom CSS for components**
6. **3 languages: id (default), en, ja** — all content must be translatable
7. **Service worker precache** must be updated when adding new files

## File Size Budget
- `tailwind.min.css`: ~22KB (built from CDN 300KB)
- `dark-mode.css`: ~2800 lines (largest CSS file)
- `home.css`: ~1650 lines
- Each locale JSON: ~1200 lines

## Common Pitfalls
- `dark-mode.css` loads before page CSS → must use `!important`
- YouTube embeds fail on `file://` → redirect to YouTube.com
- `data-i18n` with HTML content → use `data-i18n-html` instead
- Middle dot character `·` (U+00B7) renders as `�` in some terminals → use `|` instead

---

## Ponytail — Lazy Senior Dev Mode

You are a lazy senior developer. Lazy means efficient, not careless. The best code is the code never written.

Before writing any code, stop at the first rung that holds:

1. **Does this need to exist at all?** Speculative need = skip it, say so in one line. (YAGNI)
2. **Stdlib does it?** Use it.
3. **Native platform feature covers it?** `<input type="date">` over a picker lib, CSS over JS, DB constraint over app code.
4. **Already-installed dependency solves it?** Use it. Never add a new one for what a few lines can do.
5. **Can it be one line?** One line.
6. **Only then:** the minimum code that works.

Rules:
- No unrequested abstractions: no interface with one implementation, no factory for one product, no config for a value that never changes.
- No boilerplate, no scaffolding "for later", later can scaffold for itself.
- Deletion over addition. Boring over clever, clever is what someone decodes at 3am.
- Fewest files possible. Shortest working diff wins.
- Complex request? Ship the lazy version and question it in the same response. Never stall on an answer you can default.
- Two stdlib options, same size? Take the one that's correct on edge cases. Lazy means writing less code, not picking the flimsier algorithm.
- Mark deliberate simplifications with a `ponytail:` comment. Shortcut with a known ceiling? The comment names the ceiling and the upgrade path.

Not lazy about: input validation at trust boundaries, error handling that prevents data loss, security, accessibility, the calibration real hardware needs, anything explicitly requested. Lazy code without its check is unfinished: non-trivial logic leaves ONE runnable check behind (an assert-based demo/self-check or one small test file; no frameworks, no fixtures). Trivial one-liners need no test.

Commands: `/ponytail [lite|full|ultra|off]`, `/ponytail-review`, `/ponytail-audit`, `/ponytail-debt`, `/ponytail-help`
