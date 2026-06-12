# Content Structure

## Story Schema

Each story in `data/stories.js` (`allStoriesData` array):

```js
{
  id: "pahlawan-kesehatan-mental",   // Unique ID (used in URLs, filenames)
  title: "Pahlawan Kesehatan Mental", // Display title
  description: "...",                  // Short desc for cards
  longDescription: "...",              // Detailed desc for story page
  category: "mind-emotions",           // Category ID (from categories.js)
  tags: ["Mental Health", "..."],      // Array of tags
  age: "13+",                          // Age rating
  series: "Mental Health Series",      // Series grouping
  featured: true,                      // Show on homepage
  thumbnail: "/senara/assets/thumbnails/pahlawan-kesehatan-mental.png",
  duration: 45,                        // Minutes
  chapters: 5,                         // Chapter count
  difficulty: "Intermediate",          // Beginner | Intermediate | Advanced
  learningOutcomes: ["...", "..."],    // What players learn
  author: "Senara Team",
  scriptBy: "Diceritain Team",        // Optional
  collaboration: "In partnership with...", // Optional
  releaseDate: "2024-01-15",           // ISO date
  status: "published",                 // published | draft | coming-soon
  rating: 4.8,                         // 0-5
  plays: 1250,                         // Play count
  voiceActed: true,                    // Has voice acting
  hasChoices: true,                    // Has branching choices
  hasAchievements: true                // Has achievement badges
}
```

## Helper Functions (global)

- `getStoryById(id)` — returns story object or null
- `getFeaturedStories()` — returns featured stories
- `getStoriesByStatus(status)` — filter by status
- `getStoriesByDifficulty(difficulty)` — filter by difficulty
- `getStoriesSortedByRating()` — sort by rating desc
- `getStoriesSortedByPopularity()` — sort by plays desc

## Current Stories

### 1. Pahlawan Kesehatan Mental (Mental Health Hero)
- **Category:** Mind & Emotions
- **5 chapters, ~45 min, Intermediate, 13+**
- Voice acted (130+ voice files), multiple choice paths, achievement badges
- Collaboration with diceritain.id
- Topics: mental health literacy, depression, stress management, relaxation techniques, professional help

### 2. Teman Baru di Kelas 8B (New Friend in Class 8B)
- **Category:** Relationships & Social Dynamics
- **8 chapters, ~25 min, Beginner, 10+**
- Has choices and achievements, no voice acting
- Topics: inclusivity, BISINDO (Indonesian Sign Language), empathy, friendship

## Categories (7)

| ID | Title | Icon |
|----|-------|------|
| `mind-emotions` | Mind & Emotions | 🧠 |
| `self-awareness-identity` | Self-Awareness & Identity | 🌱 |
| `relationships-social` | Relationships & Social Dynamics | 🩷 |
| `digital-life-online` | Digital Life & Online Identity | 📱 |
| `college-work-adulthood` | College, Work & Early Adulthood | 💼 |
| `social-issues` | Social Issues | 🌍 |
| `money-young-adult-life` | Money & Young Adult Life | 💸 |

Each category has: `id`, `slug`, `title`, `description`, `icon`, `color`, `borderColor`

Helper functions: `getCategoryById(id)`, `getCategoryBySlug(slug)`, `getAllCategories()`, `getTranslatedCategory(cat)`, `getAllCategoriesTranslated()`

## VN Script Format (Monogatari DSL)

Stories use Monogatari's scripting language. Each chapter is a JS file that defines scenes on `window.ChapterN`:

```js
window.Chapter1 = {
  "Scene-1": [
    "show scene scene-1",                           // Display background
    "play music chapter-1 with loop fade 20 volume 10", // Play music
    "v Dialog text here",                            // Character dialog (v = Vani)
    { Input: { Text: "Masukkan namamu:", ... } },    // Player input
    { Choice: {                                      // Branching choice
      "Choice-1": { Text: "Option A", Do: "jump Scene-2" },
      "Choice-2": { Text: "Option B", Do: "jump Scene-3" },
    }},
    "jump Scene-2",                                  // Navigate to next scene
  ],
  "Scene-2": [ ... ],
};
```

### Story Loading Flow

1. `story-loader.js` reads `?story=` URL param
2. Looks up `STORY_CONFIG[storyId]` for script file list
3. Loads chapter scripts sequentially (order matters)
4. Each chapter sets `window.ChapterN = { ... }`
5. Story's `index.js` merges all chapters: `Object.assign({}, Chapter1, Chapter2, ..., mainStory)`
6. Calls `monogatari.script(completeStory)`
7. `main.js` initializes the engine

### Asset Types

- **Scenes** — background images (`monogatari.assets('scenes', {...})`)
- **Characters** — character definitions with name/color (`monogatari.characters({...})`)
- **Music** — background music MP3s
- **Voices** — voice acting MP3s (per dialog line)
- **Sounds** — sound effects (typewriter, clap, wrong)
- **Videos** — video files (currently unused)
- **Images** — overlay images (currently unused)

### Adding a New Story

1. Create folder: `monogatari/stories/{story-id}/`
2. Create `chapter-N.js` files — each exports `window.ChapterN` with scene objects
3. Create `index.js` — defines scenes, characters, assets, merges chapters, calls `monogatari.script()`
4. Add entry to `STORY_CONFIG` in `monogatari/js/story-loader.js`
5. Add story metadata to `data/stories.js` (`allStoriesData` array)
6. Add thumbnails to `assets/thumbnails/`
7. Add voice files to `monogatari/assets/voices/` (if voice acted)
