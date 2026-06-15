# Senara Roadmap

## Phase 1: Foundation (June 2026) ✅

**Goal:** Stabilize the platform after Astro migration, fix broken content, align documentation.

- [x] Fix broken Chapter 2 references in 4 stories (index.js + chapter-1.js)
- [x] Mark incomplete stories as "coming-soon" instead of "published"
- [x] Update AGENTS.md, README.md, ARCHITECTURE.md for Astro architecture
- [x] Replace emoji icons with SVGs in categories
- [x] Add `npm run bump` script
- [x] Clean up stale `dist/` directory
- [x] Create LICENSE file (MIT)
- [x] Fix service worker registration
- [x] Add aria-live to collection results
- [x] Add sitemap generation (@astrojs/sitemap)
- [x] Add smoke test (`npm run test`)
- [x] Fix package.json (remove commonjs, set MIT license)
- [x] Add board council structure with 30 roles
- [x] Add non-C-level roles to council

## Phase 2: Content Depth (July-August 2026)

**Goal:** Complete the two most-promoted stories to full chapter count.

- [x] Complete Digital Literacy Navigator Chapter 2 (18 scenes: algorithms, echo chambers, digital footprints, addiction, healthy habits)
- [ ] Complete Empty Wallet, Full Dreams Chapter 2 (Investasi untuk Pemula)
- [ ] Complete Digital Literacy Navigator Chapter 3-5
- [ ] Complete Empty Wallet, Full Dreams Chapter 2-5
- [ ] Add progress tracking (localStorage-based chapter completion)
- [ ] Add "What's New" section to landing page
- [ ] Update privacy policy date
- [ ] Switch contact email to hello@senara.id
- [ ] Add aria-live to story loading states

## Phase 3: Growth (September-October 2026)

**Goal:** Drive user acquisition and establish impact metrics.

- [ ] Add JSON-LD Article schema to story pages
- [ ] Social sharing for story completions
- [ ] Impact dashboard (stories completed, time spent, learning outcomes)
- [ ] Partner outreach to schools and organizations
- [ ] Grant applications (Kemendikbud, Google.org, AWS EdStart)
- [ ] Add GitHub Actions CI/CD workflow
- [ ] Add basic Vitest tests

## Phase 4: Scale (November-December 2026)

**Goal:** Expand content library and establish sustainable operations.

- [ ] Complete remaining stories (Communication, Zero Waste)
- [ ] Voice acting for additional stories
- [ ] Community contribution pipeline
- [ ] Mobile-first PWA improvements
- [ ] Analytics-driven content optimization
- [ ] Hire: Designer, Curriculum Specialist
- [ ] Curriculum alignment document (Kemendikbud mapping)

## Metrics

| Metric | Current | Phase 2 Target | Phase 4 Target |
|--------|---------|----------------|----------------|
| Stories completed | 2/6 | 4/6 | 6/6 |
| Total chapters | 16 | 24 | 30+ |
| Monthly plays | ~1,400 | 3,000 | 10,000 |
| Languages | 3 | 3 | 3 |
| Partner organizations | 1 | 2 | 5+ |
| Test coverage | Smoke only | Smoke + unit | Smoke + unit + e2e |
| Audit score (avg) | 6.3 | 7.5 | 9.0 |

## Hiring Priority

| Phase | Roles | Why |
|-------|-------|-----|
| **Now (Solo)** | CEO absorbs COO, PM, Partnerships | One person, lean operations |
| **Phase 2 (2-3 people)** | Designer, Editor-in-Chief, Curriculum Specialist | Content quality needs humans |
| **Phase 3 (5-7 people)** | Tech Lead, Community Manager, Grant Manager | Scale engineering + funding |
| **Phase 4 (10+ people)** | AI Engineer, Voice Director, Legal, Customer Success | Platform maturity |
