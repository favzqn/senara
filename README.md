# Senara

**Free interactive stories that teach life skills.**

[![Live](https://img.shields.io/badge/live-senara.id-4F46E5?style=flat-square)](https://senara.id)
[![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)](LICENSE)

Senara is a nonprofit, open-source platform for learning through interactive visual novel stories. Topics include mental health, financial literacy, digital literacy, communication, and environmental awareness.

**No sign-up. No payment. Just pick a story and start.**

## Stories

| Story | Topic | Difficulty | Duration |
|-------|-------|------------|----------|
| [Mental Health Hero](https://senara.id/story.html?id=pahlawan-kesehatan-mental) | Mental health literacy | Beginner | 25 min |
| [New Friend in Class 8B](https://senara.id/story.html?id=teman-baru-di-kelas-8b) | Social skills | Beginner | 20 min |
| [Digital Literacy Navigator](https://senara.id/story.html?id=digital-literacy-navigator) | Online safety | Beginner | 20 min |
| [Empty Wallet, Full Dreams](https://senara.id/story.html?id=dompet-kosong-mimpi-penuh) | Financial literacy | Beginner | 25 min |
| [Communication & Conflict](https://senara.id/story.html?id=komunikasi-resolusi-konflik) | Conflict resolution | Beginner | 20 min |
| [Zero Waste Mission](https://senara.id/story.html?id=misi-nol-sampah) | Environmental awareness | Beginner | 20 min |

## Pages

| Page | Description |
|------|-------------|
| [Home](https://senara.id/) | Landing page with interactive VN demo |
| [Collection](https://senara.id/collection.html) | Story browser with filters, search, sort |
| [About](https://senara.id/about.html) | Our story, approach, team, contribute |
| [TV](https://senara.id/tv.html) | Curated educational YouTube channels |
| [FAQ](https://senara.id/faq.html) | Frequently asked questions |
| [Safety](https://senara.id/safety.html) | Mental health resources & hotlines |
| [Donate](https://senara.id/donate.html) | Donation transparency |
| [Contact](https://senara.id/contact.html) | Get in touch |

## Languages

- **Indonesian** (default) — `?lang=id`
- **English** — `?lang=en`
- **Japanese** — `?lang=ja`

## Tech Stack

- **HTML/CSS/JS** — No framework, no build system
- **Tailwind CSS 3** — Built to 22KB (from CDN ~300KB)
- **Monogatari** — Visual novel engine for story playback
- **Service Worker** — Offline support + caching
- **JSON-LD** — Structured data for SEO

## Quick Start

```bash
# Clone
git clone https://github.com/favzqn/senara.git
cd senara

# Install Tailwind
npm install

# Build CSS
npm run build:css

# Watch mode
npm run watch:css

# Open in browser
start index.html
```

## Project Structure

```
senara/
├── index.html              # Landing page
├── collection.html         # Story browser
├── story.html              # VN player
├── about.html              # About (story/approach/team/contribute)
├── tv.html                 # Video library
├── faq.html                # FAQ
├── safety.html             # Safety & support
├── contact.html            # Contact
├── donate.html             # Donation transparency
├── privacy.html            # Privacy policy
├── terms.html              # Terms of service
├── accessibility.html      # Accessibility statement
├── for-organizations.html  # Partnership info
├── offline.html            # Offline fallback
│
├── js/
│   ├── i18n-simple.js      # Internationalization (id/en/ja)
│   ├── locales.js          # Locale loader
│   ├── locales/            # Translation files
│   ├── navbar.js           # Navbar component
│   ├── footer.js           # Footer component
│   ├── dark-mode.js        # Dark mode toggle
│   ├── shared-utils.js     # Shared functions
│   ├── performance-utils.js # Lazy loading
│   ├── home-page.js        # Landing page logic
│   ├── collection-page.js  # Collection filters/sort
│   ├── story-page.js       # Story detail page
│   ├── video-library.js    # TV page logic
│   └── vn-demo.js          # Lightweight VN demo
│
├── style/
│   ├── tailwind.min.css    # Built Tailwind (22KB)
│   ├── home.css            # Base styles + nav + footer
│   ├── pages.css           # Shared page components
│   ├── collection.css      # Collection page
│   ├── story-cards.css     # Story cards
│   ├── story.css           # VN player
│   ├── tv.css              # TV page
│   ├── about.css           # About page
│   ├── safety.css          # Safety page
│   ├── dark-mode.css       # Dark mode overrides
│   └── performance.css     # Loading states
│
├── data/
│   ├── stories.js          # Story metadata
│   ├── categories.js       # Category definitions
│   └── tv-channels.js      # YouTube channel data
│
├── monogatari/
│   ├── stories/            # VN story scripts
│   ├── js/story-loader.js  # Story loader
│   └── assets/scenes/      # Scene backgrounds
│
├── assets/
│   ├── og-image.svg        # Open Graph image
│   ├── thumbnails/         # Story thumbnails
│   └── icons/              # PWA icons
│
├── manifest.json           # PWA manifest
├── service-worker.js       # Service worker
├── tailwind.config.js      # Tailwind config
└── package.json            # npm scripts
```

## Design System

| Token | Light | Dark |
|-------|-------|------|
| Background | `#F8FAFC` | `#0F172A` |
| Surface | `#FFFFFF` | `#1E293B` |
| Text Primary | `#0F172A` | `#F1F5F9` |
| Text Secondary | `#475569` | `#94A3B8` |
| Accent | `#4F46E5` | `#818CF8` |
| CTA | `#F97316` | `#FB923C` |
| Border | `#E2E8F0` | `#334155` |

**Fonts:** Crimson Pro (headings) + Atkinson Hyperlegible (body)

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for how to get involved.

## License

MIT — See [LICENSE](LICENSE) for details.

## Support

- **Donate:** [Trakteer](https://trakteer.id/senara.id) · [Ko-fi](https://ko-fi.com/senara)
- **Email:** fauzan08fauzan@gmail.com
- **Instagram:** [@idsenara](https://instagram.com/idsenara)
