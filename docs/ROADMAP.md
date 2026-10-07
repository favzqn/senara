# Senara Roadmap

**Rule (standing since 2026-06-15):** content and quality before growth.
No new features until the content library is finished.

**Maintenance reality:** one maintainer. Phases are ordered by priority,
not by date. Dates in earlier versions of this file were aspirational and
are gone.

---

## Done ✓

### Phase 1: Foundation
- [x] Fix broken Chapter 2 references in 4 stories
- [x] Mark incomplete stories honestly as "coming-soon"
- [x] Update AGENTS.md, README.md, ARCHITECTURE.md for Astro architecture
- [x] Replace emoji icons with SVGs in categories
- [x] LICENSE file (MIT), service worker registration, sitemap
- [x] `npm run bump` script, smoke test, package.json cleanup
- [x] aria-live on collection results

### Platform quality (rolled up from old Phases 3-4)
- [x] JSON-LD Article schema on story pages
- [x] robots.txt, social sharing on story detail pages
- [x] Vitest unit tests + GitHub Actions CI (build, tests, link check)
- [x] Progress tracking (localStorage chapter completion)
- [x] Multi-language story system (Monogatari native i18n)
- [x] Chapter 2 completed for all four stub stories

---

## Now: Finish the stories

The four stub stories have 2 chapters each; they need 5 (matching the
"full" target set by Mental Health Hero). Until then they stay
`coming-soon`.

- [ ] **Digital Literacy Navigator** chapters 3-5
  (plan: [docs/plans/digital-literacy-ch2-plan.md](docs/plans/digital-literacy-ch2-plan.md) style: scene breakdown first, then script)
- [ ] **Empty Wallet, Full Dreams** chapters 3-5
- [ ] **Communication & Conflict** chapters 3-5
- [ ] **Zero Waste Mission** chapters 3-5
- [ ] Flip each to `published` in `src/data/stories.ts` when its 5 chapters
      are done: one story at a time, no batch publishes
- [ ] English translation for completed chapters (Indonesian first)

## Next: Small hygiene (cheap, do between chapters)

- [ ] What's New section on landing page
- [ ] Update privacy policy date (stale since Dec 2025)
- [ ] Switch contact email to hello@senara.id
- [ ] aria-live on story loading states
- [ ] Verify Umami analytics is actually capturing data

---

## Deferred: Growth (only after 6 complete stories)

These need content and metrics that don't exist yet. Doing them now is
building a stage with no play.

- [ ] Impact dashboard (stories completed, time spent)
- [ ] Grant applications (Kemendikbud, Google.org, AWS EdStart)
- [ ] Partner outreach to schools and organizations
- [ ] Voice acting for additional stories
- [ ] Community contribution pipeline

**Revisit when:** all 6 stories are `published` with 5 chapters each.
