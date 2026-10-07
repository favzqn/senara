# Contributing to Senara

Senara is a free, open-source project maintained by one person. Small,
focused contributions are welcome: bug reports, fixes, story feedback, and
translations. There is no contributor program, no mentorship, and no
certificate; review happens when the maintainer has time.

The fastest way to help right now is an **issue**: a bug report with steps to
reproduce, or feedback on a story (what confused you, what felt wrong, what
taught you something).

## Ways to Contribute

- **Report bugs** via issues. Include what you expected and what happened.
- **Review stories**: clarity, accuracy, sensitivity for the target audience.
- **Translate**: currently Indonesian (default), English, Japanese.
- **Write a story**: see below. The format is simple and AI-assisted drafting
  is fine; human review of the script is what matters.
- **Code**: fixes and accessibility improvements, ideally discussed in an
  issue first so effort isn't wasted.

## Development Setup

```bash
git clone https://github.com/favzqn/senara.git
cd senara
npm install
npm run dev          # dev server
npm run build:css    # rebuild Tailwind CSS
npm run test:unit    # vitest
npm run build        # full production build
```

Then create a branch, make your changes, run the tests, and open a PR.

## Writing a Story

### Structure

Each story lives in `public/monogatari/stories/{story-id}/` and contains:
- `chapter-N.js` : chapter script with scenes, dialogue, and choices
- `index.js` : asset registration and chapter merge

Plan first, script second: a scene-by-scene breakdown (contents, learning
outcomes, choice points) before writing dialogue. Example:
`docs/plans/digital-literacy-ch2-plan.md`.

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
  "Scene-Continue": [
    "v Story continues here."
  ]
};
```

### Story Metadata

Register the story in `src/data/stories.ts`:

```ts
{
  id: 'your-story-id',
  title: 'Your Story Title',
  description: 'Brief description.',
  category: 'mental-health',
  status: 'coming-soon',   // flip to 'published' only when all chapters exist
  chapters: 5,
  // ...see existing entries for the full shape
}
```

### Translations

Title/description strings go in all 3 locale files:
- `src/i18n/id.json`
- `src/i18n/en.json`
- `src/i18n/ja.json`

## Code Style

- Semantic HTML (`<section>`, `<nav>`, `<main>`, `<footer>`)
- `data-i18n` / `data-i18n-html` for translatable text
- `data-umami-event` for analytics events
- `aria-label` for icon-only buttons
- Tailwind utilities for layout, custom CSS for components
- Dark mode rules go in `dark-mode.css` with `!important`
- Client scripts: vanilla TS, `getText(key, fallback)` for i18n
- SVG icons, never emoji
- Conventional Commits: `feat:`, `fix:`, `docs:`, `refactor:`, `chore:`

## Design Guidelines

- **No emojis as icons** : use inline SVGs
- **All clickable elements** need `cursor: pointer` and `:focus-visible`
- **Dark mode**: every new component needs dark mode support
- **Responsive**: test at 375px, 768px, 1024px, 1440px
- **Accessibility**: color contrast 4.5:1, keyboard navigation, ARIA labels
- See `AGENTS.md` for architecture notes and known pitfalls

## Questions?

Open an issue, or email fauzan08fauzan@gmail.com.
