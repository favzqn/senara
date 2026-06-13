# Contributing to Senara

Thank you for your interest in contributing to Senara! We're a nonprofit, community-built platform and we welcome contributors of all skill levels.

## Ways to Contribute

### Writers
Write interactive story scripts with dialogue, choices, and branching paths. No coding experience needed — we'll help with the technical format.

### Illustrators
Create character art, scene backgrounds, and UI assets. Any style welcome — anime, pixel art, minimalist, etc.

### Editors & Reviewers
Review scripts for clarity, accuracy, and sensitivity. Help ensure content is appropriate for the target audience.

### Developers
Help build the platform — new features, bug fixes, performance improvements, accessibility.

### Translators
Translate stories and UI into other languages. Currently: Indonesian, English, Japanese.

### Community & Outreach
Help spread the word — social media, blog posts, partnerships with schools and organizations.

## Getting Started

1. **Fork** the repository
2. **Clone** your fork:
   ```bash
   git clone https://github.com/YOUR_USERNAME/senara.git
   cd senara
   ```
3. **Install** dependencies:
   ```bash
   npm install
   ```
4. **Build** CSS:
   ```bash
   npm run build:css
   ```
5. **Create** a branch:
   ```bash
   git checkout -b feature/your-feature
   ```
6. **Make** your changes
7. **Test** by opening `index.html` in a browser
8. **Commit** and push:
   ```bash
   git add -A
   git commit -m "feat: your feature description"
   git push origin feature/your-feature
   ```
9. **Open** a Pull Request

## Writing a Story

### Story Structure
Each story lives in `monogatari/stories/{story-id}/` and contains:
- `chapter-1.js` — Chapter script with scenes, dialogue, and choices
- `index.js` — Asset registration and chapter merge

### Script Format
```js
const Chapter1 = {
  "Scene-1": [
    "show scene scene-1 with fadeIn",
    "show character v center with fadeIn",
    "v Character dialogue here.",
    {
      "Choice": {
        "Dialog": "What do you want to do?",
        "A": { "Text": "Option A", "Do": "jump Scene-A" },
        "B": { "Text": "Option B", "Do": "jump Scene-B" }
      }
    }
  ],
  "Scene-A": [
    "show scene scene-2 with fadeIn",
    "v Response to option A.",
    "jump Scene-Continue"
  ],
  "Scene-B": [
    "show scene scene-3 with fadeIn",
    "v Response to option B.",
    "jump Scene-Continue"
  ],
  "Scene-Continue": [
    "v Story continues here."
  ]
};
```

### Story Metadata
Add your story to `data/stories.js`:
```js
{
  id: 'your-story-id',
  title: 'Your Story Title',
  description: 'Brief description.',
  category: 'mental-health',
  difficulty: 'Beginner',
  duration: 20,
  age: '13+',
  status: 'published',
  tags: ['tag1', 'tag2'],
  createdAt: '2025-01-01',
  rating: 4.5,
  plays: 0,
  scriptBy: 'Your Name'
}
```

### Translations
Add title/description translations to all 3 locale files:
- `js/locales/en.js`
- `js/locales/id.js`
- `js/locales/ja.js`

## Code Style

### HTML
- Use semantic elements (`<section>`, `<nav>`, `<main>`, `<footer>`)
- Add `data-i18n` attributes for translatable text
- Add `data-umami-event` for analytics tracking
- Use `aria-label` for icon-only buttons

### CSS
- Use Tailwind utilities for layout
- Use custom CSS for components
- Add dark mode rules in `dark-mode.css` with `!important`
- Scope page-specific styles to avoid leaks

### JavaScript
- Use vanilla JS (no frameworks)
- Use `DOMContentLoaded` for initialization
- Use `getText(key, fallback)` for i18n
- Use SVG icons, not emojis

### Git Commits
Follow [Conventional Commits](https://www.conventionalcommits.org/):
- `feat:` — New feature
- `fix:` — Bug fix
- `docs:` — Documentation
- `style:` — Formatting (no code change)
- `refactor:` — Code restructuring
- `perf:` — Performance improvement
- `chore:` — Maintenance

## Design Guidelines

- **No emojis as icons** — Use inline SVGs
- **All clickable elements** need `cursor: pointer` and `:focus-visible`
- **Dark mode** — Every new component needs dark mode support
- **Responsive** — Test at 375px, 768px, 1024px, 1440px
- **Accessibility** — Color contrast 4.5:1, keyboard navigation, ARIA labels

## Questions?

Open an issue or email fauzan08fauzan@gmail.com.
