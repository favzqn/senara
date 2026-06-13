# AGENTS.md — AI Agent Instructions for Senara

## Project Overview

Senara is a free, nonprofit interactive story platform built as a static website. It teaches life skills (mental health, financial literacy, digital literacy, communication, environmental awareness) through visual novel-style interactive stories.

**Live:** https://senara.id  
**Stack:** Vanilla HTML/CSS/JS + Tailwind CSS 3 (built)  
**No framework. No build system. No server.**

## Quick Reference

| Command | Purpose |
|---------|---------|
| `npm run build:css` | Rebuild Tailwind CSS |
| `npm run watch:css` | Watch + rebuild Tailwind |
| `npm run bump` | Bump version across all files |
| `npx tailwindcss -i style/tailwind-input.css -o style/tailwind.min.css --minify` | Manual Tailwind build |

## Architecture

### Pages (13 HTML files)
- `index.html` — Landing page with VN demo, featured stories, comparison, CTA
- `collection.html` — Story browser with filters, search, sort
- `story.html` — VN player (Monogatari engine)
- `about.html` — Multi-tab: Story, Approach, Team, Contribute
- `tv.html` — YouTube video library (curated educational channels)
- `faq.html` — FAQ with search + category filters
- `contact.html` — Contact form info
- `donate.html` — Donation transparency
- `safety.html` — Mental health resources + hotlines
- `privacy.html`, `terms.html`, `accessibility.html` — Legal
- `for-organizations.html` — Partnership info
- `offline.html` — Offline fallback (service worker)

### CSS Files
- `style/tailwind.min.css` — Built Tailwind (22KB, from CDN ~300KB)
- `style/home.css` — Base styles: nav, hero, footer, buttons, cards, VN demo, language toggle
- `style/pages.css` — Shared page components: FAQ, donate, contact, safety, about
- `style/collection.css` — Collection page filters, grid, cards
- `style/story-cards.css` — Story card styles
- `style/story.css` — VN player styles
- `style/tv.css` — TV page styles
- `style/about.css` — About page tabs, sections, cards
- `style/safety.css` — Safety page styles + dark mode
- `style/dark-mode.css` — Dark mode overrides (~2800 lines)
- `style/performance.css` — Loading states, skeletons, reduced motion
- `style/main.css` — Monogatari engine template (mostly empty)

### JS Files
- `js/i18n-simple.js` — i18n system (3 languages: id, en, ja)
- `js/locales.js` — Locale loader
- `js/locales/id.js`, `en.js`, `ja.js` — Translation files
- `js/navbar.js` — Navbar component (renders into `#navbar-placeholder`)
- `js/footer.js` — Footer component (renders into `footer` element)
- `js/dark-mode.js` — Dark mode toggle with localStorage
- `js/shared-utils.js` — Shared functions: `createStoryCard()`, `t()`, `getText()`
- `js/performance-utils.js` — Lazy loading, image optimization
- `js/home-page.js` — Landing page logic
- `js/collection-page.js` — Collection page filters/sort/search
- `js/story-page.js` — Story detail page
- `js/video-library.js` — TV page video library
- `js/vn-demo.js` — Lightweight VN demo on landing page
- `js/config.js`, `js/constants.js` — Configuration

### Data Files
- `data/stories.js` — Story metadata (title, description, category, difficulty, etc.)
- `data/categories.js` — Category definitions
- `data/tv-channels.js` — YouTube channel data + hero configs

### VN Stories (Monogatari engine)
- `monogatari/stories/pahlawan-kesehatan-mental/` — Mental Health Hero (5 chapters)
- `monogatari/stories/teman-baru-di-kelas-8b/` — New Friend in Class 8B
- `monogatari/stories/digital-literacy-navigator/` — Digital Literacy
- `monogatari/stories/dompet-kosong-mimpi-penuh/` — Financial Literacy
- `monogatari/stories/komunikasi-resolusi-konflik/` — Communication
- `monogatari/stories/misi-nol-sampah/` — Environmental Awareness
- `monogatari/js/story-loader.js` — Story loader with STORY_CONFIG
- `monogatari/assets/scenes/` — Scene background images

## Key Patterns

### Component Pattern
Navbar and footer are JS components that render into placeholder elements:
```html
<nav id="navbar-placeholder"></nav>
<!-- page content -->
<footer id="footer-placeholder"></footer>
```
```js
document.addEventListener('DOMContentLoaded', () => {
  initNavbar('pageName');
  initFooter();
});
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
```js
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
8. **Version bump** with `npm run bump` when releasing

## File Size Budget
- `tailwind.min.css`: ~22KB (built from CDN 300KB)
- `dark-mode.css`: ~2800 lines (largest CSS file)
- `home.css`: ~1650 lines
- Each locale file: ~1200 lines

## Common Pitfalls
- `dark-mode.css` loads before page CSS → must use `!important`
- `about.css` alternating backgrounds leak to other pages → scope with `[data-page="about"]`
- YouTube embeds fail on `file://` → redirect to YouTube.com
- `data-i18n` with HTML content → use `data-i18n-html` instead
- Middle dot character `·` (U+00B7) renders as `�` in some terminals → use `|` instead
