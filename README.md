# Senara

**Free interactive stories that teach life skills.**

[![Live](https://img.shields.io/badge/live-senara.id-4F46E5?style=flat-square)](https://senara.id)
[![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)](LICENSE)

Senara is a nonprofit, open-source platform for learning through interactive visual novel stories. Topics include mental health, financial literacy, digital literacy, communication, and environmental awareness.

**No sign-up. No payment. Just pick a story and start.**

## Stories

| Story | Topic | Chapters | Status |
|-------|-------|----------|--------|
| [Mental Health Hero](https://senara.id/story?id=pahlawan-kesehatan-mental) | Mental health literacy | 5 | Published (voice acted) |
| [New Friend in Class 8B](https://senara.id/story?id=teman-baru-di-kelas-8b) | Social skills / BISINDO | 8 | Published |
| [Digital Literacy Navigator](https://senara.id/story?id=digital-literacy-navigator) | Online safety | 1 | Coming soon |
| [Empty Wallet, Full Dreams](https://senara.id/story?id=dompet-kosong-mimpi-penuh) | Financial literacy | 1 | Coming soon |
| [Communication & Conflict](https://senara.id/story?id=komunikasi-resolusi-konflik) | Conflict resolution | 1 | Coming soon |
| [Zero Waste Mission](https://senara.id/story?id=misi-nol-sampah) | Environmental awareness | 1 | Coming soon |

## Pages

| Page | Description |
|------|-------------|
| [Home](https://senara.id/) | Landing page with interactive VN demo |
| [Collection](https://senara.id/collection) | Story browser with filters, search, sort |
| [About](https://senara.id/about) | Our story, approach, team, contribute |
| [TV](https://senara.id/tv) | Curated educational YouTube channels |
| [FAQ](https://senara.id/faq) | Frequently asked questions |
| [Safety](https://senara.id/safety) | Mental health resources & hotlines |
| [Donate](https://senara.id/donate) | Donation transparency |
| [Contact](https://senara.id/contact) | Get in touch |

## Languages

- **Indonesian** (default) — `?lang=id`
- **English** — `?lang=en`
- **Japanese** — `?lang=ja`

## Tech Stack

- **Astro 6** — Static site generator with TypeScript
- **Tailwind CSS 3** — Built to 22KB (from CDN ~300KB)
- **Monogatari** — Visual novel engine for story playback
- **Service Worker** — Offline support + caching
- **JSON-LD** — Structured data for SEO
- **Umami** — Privacy-focused analytics

## Quick Start

```bash
# Clone
git clone https://github.com/favzqn/senara.git
cd senara

# Install
npm install

# Dev server
npm run dev

# Build CSS
npm run build:css

# Full build
npm run build
```

## Project Structure

```
senara/
├── src/
│   ├── pages/              # 14 Astro pages
│   ├── components/         # Navbar, Footer, SEO
│   ├── scripts/            # Client-side TypeScript
│   ├── styles/             # CSS (10 files)
│   ├── data/               # Story/category/channel data
│   ├── i18n/               # Translations (id, en, ja)
│   └── layouts/            # BaseLayout.astro
│
├── public/
│   ├── monogatari/         # VN engine + stories
│   ├── style/              # Built Tailwind CSS
│   ├── assets/             # Thumbnails, icons, images
│   ├── manifest.json       # PWA manifest
│   └── service-worker.js   # Service worker
│
├── docs/council/           # Board of Directors docs
├── tailwind.config.js      # Tailwind config
├── astro.config.mjs        # Astro config
├── AGENTS.md               # AI agent instructions
└── package.json
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
