# Architecture

## Two-Layer Design

### Layer 1: Marketing/Platform Site (root)

Static HTML pages with shared navbar/footer injected via JS.

- `index.html` — homepage (hero, featured stories, categories, testimonials)
- `koleksi.html` — story collection (search, filters, sorting)
- `story.html?id=...` — story detail (info, learning outcomes, play button)
- `about.html`, `faq.html`, `kontak.html`, `tim.html`, etc. — static pages

Each page loads the same script bundle:
```
locales.js → i18n-simple.js → config.js → constants.js → shared-utils.js → performance-utils.js → navbar.js → footer.js → page-specific.js
```

### Layer 2: Visual Novel Engine (`monogatari/`)

Self-contained VN player. Loads when user clicks "Play" on a story.

- Entry: `story.html` → Play button → redirects to `monogatari/index.html?story={storyId}`
- `story-loader.js` reads `?story=` param, dynamically loads matching chapter scripts
- After scripts load, `main.js` initializes Monogatari engine
- Each story's `index.js` merges all chapter scene objects into `monogatari.script()`

## User Flow

```
Homepage → Collection → Story Detail → Play (VN Engine)
```

1. `index.html` — browse featured stories and categories
2. `koleksi.html` — full listing with search/filters
3. `story.html?id=...` — story info, learning outcomes, credits
4. `monogatari/index.html?story=...` — visual novel experience

## Data Flow

- Story metadata: `data/stories.js` (global `allStoriesData` array)
- Category metadata: `data/categories.js` (global `allCategoriesData` array)
- No API/backend — everything is client-side global functions
- Player progress: browser `localStorage` (Monogatari engine)
- Language preference: `localStorage` key `senara_language`

## Directory Layout

```
senara/
├── index.html                  # Homepage
├── about.html                  # About page
├── collection.html             # Story collection (was koleksi.html)
├── story.html                  # Story detail page
├── faq.html                    # FAQ
├── contact.html                # Contact (was kontak.html)
├── team.html                   # Team (was tim.html)
├── donate.html                 # Donation transparency (was donasi.html)
├── roadmap.html                # Roadmap
├── contribute.html             # Contribution guide
├── accessibility.html          # Accessibility (was aksesibilitas.html)
├── safety.html                 # Safety & support (was keselamatan.html)
├── approach.html               # Approach & philosophy (was pendekatan.html)
├── privacy.html                # Privacy policy
├── terms.html                  # Terms & conditions
├── for-organizations.html      # For organizations (was untuk-organisasi.html)
│
├── data/
│   ├── stories.js              # Story metadata database
│   └── categories.js           # Category definitions
│
├── js/
│   ├── config.js               # Paths, URLs, feature flags (frozen)
│   ├── constants.js            # Enums, categories, error messages (frozen)
│   ├── shared-utils.js         # Common utility functions
│   ├── i18n-simple.js          # I18n module
│   ├── locales.js              # Locale loader (sync document.write)
│   ├── locales/
│   │   ├── id.js               # Indonesian (~950 lines)
│   │   └── en.js               # English (~950 lines)
│   ├── navbar.js               # Navbar component + SW registration
│   ├── footer.js               # Footer component
│   ├── home-page.js            # Homepage logic
│   ├── collection-page.js      # Collection page (filter/sort/search)
│   ├── story-page.js           # Story detail page logic
│   ├── video-library.js        # Senara TV (YouTube curation)
│   └── performance-utils.js    # Lazy loading, skeletons
│
├── style/
│   ├── main.css                # Base styles (Monogatari VN)
│   ├── home.css                # Homepage + navbar + footer + Claymorphism design system
│   ├── collection.css          # Collection page styles
│   ├── story.css               # Story detail page styles
│   ├── story-cards.css         # Story card component styles
│   ├── performance.css         # Loading/skeleton styles
│   ├── tv.css                  # Senara TV video library styles
│   └── dark-mode.css           # Claymorphism utility classes (repurposed)
│
├── assets/
│   ├── demo.mp4                # Homepage demo video
│   ├── thumbnails/             # Story thumbnails
│   └── (icons, og-image, etc.)
│
├── monogatari/                 # VN engine (self-contained)
│   ├── index.html              # VN player entry point
│   ├── engine/core/
│   │   ├── monogatari.js       # Core engine (minified)
│   │   └── monogatari.css
│   ├── js/
│   │   ├── options.js          # Engine settings (autosave, slots, ratio)
│   │   ├── storage.js          # Persistent storage
│   │   ├── story-loader.js     # Dynamic story script loader
│   │   ├── main.js             # Engine init + analytics hooks
│   │   ├── analytics.js        # Story analytics (Umami)
│   │   └── quiz-analytics.js   # Quiz tracking
│   ├── assets/
│   │   └── voices/             # Voice acting MP3s (115+ files)
│   └── stories/
│       ├── pahlawan-kesehatan-mental/
│       │   ├── index.js        # Story config (scenes, chars, music, assets)
│       │   ├── chapter-1.js    # Chapter scenes (window.Chapter1)
│       │   ├── chapter-2.js
│       │   ├── chapter-3.js
│       │   ├── chapter-4.js
│       │   └── chapter-5.js
│       └── teman-baru-di-kelas-8b/
│           ├── index.js
│           └── chapter-1.js
│
├── _headers                    # Cache control (Netlify/CF Pages)
├── manifest.json               # PWA manifest
├── service-worker.js           # Offline caching
├── version.json                # Version tracking
├── bump-version.js             # Version bump utility
├── convert-audio.sh            # WAV→MP3 conversion
└── robots.txt
```

## Key Patterns

- **Global scope** — all utilities exposed as global functions (no module system)
- **Frozen config** — `Object.freeze()` on CONFIG and CONSTANTS
- **Component injection** — navbar/footer rendered via JS into placeholder `<div>` elements
- **Dynamic story loading** — `story-loader.js` fetches chapter scripts by URL param
- **Chapter merging** — each chapter exposes `window.ChapterN`, merged via `Object.assign()` in `index.js`
- **Analytics everywhere** — `data-umami-event` attributes on interactive elements
- **Error handling** — invalid story IDs show a user-friendly error page instead of silently falling back
- **i18n pattern** — `getText(key, fallback)` in shared-utils.js for JS strings; `data-i18n` attributes for HTML; English as source default, translations in locale files
- **Design system** — Claymorphism (indigo/orange), generated by UI/UX Pro Max skill
