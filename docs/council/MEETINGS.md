# Senara Council Meetings

Meeting log for the Senara Board of Directors.

---

## Meeting #2 — Full Council

**Date:** 2026-06-15 18:00 WIB  
**Type:** Full Council (all 30 roles)  
**Quorum:** Full  

### Agenda
1. Full codebase audit review
2. Security, accessibility, performance, legal assessment
3. Content pipeline status
4. Action items execution

### Audit Results

| Category | Score | Notes |
|----------|-------|-------|
| Tech Stack | 8/10 | Modern, minimal, appropriate |
| Features | 7/10 | Core solid; 4/6 stories coming-soon |
| Security | 6/10 | No secrets; needs CSP, LICENSE file |
| Accessibility | 6/10 | Good basics; needs aria-live |
| Performance | 7/10 | Good fundamentals; needs image optimization |
| i18n | 9/10 | Nearly complete across 3 languages |
| PWA | 7/10 | Working; needs SW registration |
| Content | 5/10 | Only 2 published of 6 |
| Testing | 0/10 | No tests |
| CI/CD | 0/10 | No automation |
| Documentation | 8/10 | Excellent AGENTS.md |
| Legal | 7/10 | Policies present; missing LICENSE |

**Average:** 6.3/10

### Key Findings

1. **No LICENSE file** — MIT claimed but file missing. Legal risk.
2. **Service worker not registering** on Astro pages.
3. **No aria-live regions** — screen readers can't announce dynamic content.
4. **No sitemap** — SEO gap.
5. **Zero test coverage** — no test framework.
6. **package.json has `"type": "commonjs"`** — conflicts with Astro ESM.
7. **Privacy policy outdated** — December 2025.
8. **Personal email exposed** in 6+ places.

### Decisions Made

1. Create LICENSE file (MIT) — **DONE**
2. Fix service worker registration — **DONE**
3. Add aria-live to collection — **DONE**
4. Add @astrojs/sitemap — **DONE**
5. Add npm run test smoke script — **DONE**
6. Fix package.json type + license — **DONE**
7. Freeze new features until 4 complete stories
8. Complete Digital Literacy Navigator first
9. Defer privacy policy update to Phase 2
10. Defer email switch to Phase 2

### Post-Fix Scorecard

| Category | Before | After |
|----------|--------|-------|
| Security | 6 | 7 |
| A11y | 6 | 7 |
| Tests | 0 | 1 |
| SEO | — | +1 |
| Content | 5 | 8 |

**Content milestone: 6/6 stories published, 22 total chapters**

### Attendees

**Executive:** CEO, COO (CEO absorbs), CPO, CTO, CMO, CFO, CCO  
**Product & Engineering:** Product Manager (CPO), Tech Lead (CTO), DevOps (CTO), Security (CTO), QA Lead, AI Engineer (future)  
**Content & Education:** Editor-in-Chief, Curriculum Specialist (CCO), SME (per-story), Localization (CCO), Voice Director (future), Designer  
**Growth & Marketing:** SEO (CMO), Performance Marketer (future), PR (CMO)  
**User Success:** CSM (future), Support (Community Mgr), Community Manager  
**Operations & Legal:** Project Manager (COO), Data Analyst, Grant Manager (CFO), Legal (future), Partnerships (CEO), AI/Innovation (future)

---

## Meeting #6 — Status Check (Focused)

**Date:** 2026-06-15 19:47 WIB  
**Type:** Focused (CEO, CTO, CPO)  
**Topic:** Session wrap-up

### Summary

All three phases assessed:
- Phase 1 (Foundation): ✅ Complete
- Phase 2 (Content Depth): ✅ Complete
- Phase 3 (Growth): 🟡 SEO done, rest blocked on humans

### Remaining Phase 3 items (human-dependent)

| Item | Owner | Blocker |
|------|-------|---------|
| Verify Umami analytics | Data Analyst | Manual dashboard check |
| Impact dashboard | Data Analyst | Needs Umami data |
| Partner outreach | CEO | Needs to contact schools |
| Grant applications | CFO | Needs impact report |
| CI/CD workflow | CTO | When traffic justifies |
| Vitest tests | CTO | When traffic justifies |

### Decision

Code work session complete. Next meeting when analytics data is available or new content is planned.

### Session Stats (2026-06-15)

```
Commits: 14
Council meetings: 6
Roles defined: 30
Stories published: 6/6 (was 2/6)
Total chapters: 22 (was 16)
Phase 1: ✅
Phase 2: ✅
Phase 3: 🟡 (SEO complete)
```

---

## Meeting #8 — What's Next (Focused)

**Date:** 2026-06-15 19:58 WIB  
**Type:** Focused (CEO, CTO, CPO)  
**Topic:** Next steps after full session

### Summary

Code work complete for today. Platform is stable, SEO configured, all stories published. Next steps are human tasks.

### Priority Order

| # | Task | Owner | Type | When |
|---|------|-------|------|------|
| 1 | Deploy to Wasmer Edge | CEO | Manual | Now |
| 2 | Filter Umami to post-migration for accurate baseline | Data Analyst | Manual | This week |
| 3 | Share on social media — 6 stories published | CMO | Manual | This week |
| 4 | Contact schools for classroom use | CEO | Manual | Next week |
| 5 | Prepare grant application (Kemendikbud/Google.org) | CFO | Manual | Next month |
| 6 | Write more chapters (Ch3+ for 4 new stories) | Editor-in-Chief | Code | When ready |
| 7 | CI/CD + tests (GitHub Actions, Vitest) | CTO | Code | When traffic > 1K/mo |

### Decision

No more code work until user feedback or content needs drive it. Marketing and outreach are the bottleneck.

---

## Meeting #7 — Analytics Review (Focused)

**Date:** 2026-06-15 19:50 WIB  
**Type:** Focused (CEO, Data Analyst, CMO, CTO)  
**Topic:** Umami analytics data review

### Data (All Time: Nov 2025 — Jun 2026)

| Metric | Value |
|--------|-------|
| Visitors | 385 |
| Visits | 473 |
| Views | 2,999 |
| Bounce rate | 52% |
| Visit duration | 3m 51s |

### Key Findings

1. **Data is all-time (pre + post migration)** — old `.html` URLs traffic was from pre-Astro era, not broken links.
2. **Local dev paths** (`/Users/aaa/...`) are developer testing sessions, not real traffic.
3. **3m 51s average visit** — strong engagement, stories are working.
4. **46% from search/AI** (Google 20%, ChatGPT 17%, Bing 9%) — SEO is driving traffic.
5. **Indonesia 69%, US 19%** — primary audience correct, US could be diaspora/researchers.
6. **Chrome 77%, iOS 11%** — mobile-first is correct approach.

### Actions

| # | Task | Owner | Status |
|---|------|-------|--------|
| 1 | Add `.html` redirects (safety net for old bookmarks) | CTO | ✅ DONE |
| 2 | Filter Umami to post-migration period for accurate data | Data Analyst | Pending |
| 3 | Update council docs | CEO | ✅ DONE |

### Redirects Added

- `koleksi.html` → `/collection`
- `story.html` → `/story`
- `index.html` → `/`
- `tim.html` → `/about`
- `about.html` → `/about`
- `faq.html` → `/faq`
- `safety.html` → `/safety`
- `contact.html` → `/contact`

---

## Meeting #5 — Phase 3 Kickoff (Focused)

**Date:** 2026-06-15 19:40 WIB  
**Type:** Focused (CEO, CMO, CTO, CPO, Data Analyst)  
**Topic:** Phase 3 Growth — SEO and discoverability

### Decisions

1. **Phase 3 focus: SEO** — Content is ready, platform is stable, now we need Google to find us
2. **Skip features** — No new product work until users tell us what's missing
3. **Track Umami** — Verify analytics is capturing data before adding more tracking

### Actions

| # | Task | Owner | Status |
|---|------|-------|--------|
| 1 | Add JSON-LD Article schema to story pages | CTO | ✅ DONE |
| 2 | Add robots.txt | CTO | ✅ DONE |
| 3 | Verify Umami analytics | Data Analyst | Pending (manual check) |
| 4 | Update ROADMAP.md | CEO | ✅ DONE |
| 5 | Social sharing for completions | CPO | Already exists on story page; in-game sharing needs Monogatari engine changes (deferred) |

### Technical Details

- JSON-LD Article schema injected dynamically in `story-page.ts` via `updateMetaTags()`
- Schema includes: headline, description, datePublished, author, publisher, keywords, learningOutcomes
- `robots.txt` created at `public/robots.txt` with sitemap reference
- Build passes clean

---

## Meeting #4 — Next Content (Focused)

**Date:** 2026-06-15 19:24 WIB  
**Type:** Focused (CEO, CCO, Editor-in-Chief, CPO, CTO)  
**Topic:** Next story after Digital Literacy Navigator

### Decisions

1. **Next story: Empty Wallet, Full Dreams Chapter 2** — "Investasi untuk Pemula" (Investing for Beginners)
2. **Same process** as Digital Literacy Navigator: Editor-in-Chief writes, CTO integrates
3. **Diversifies platform** — financial literacy is a new category with no published content

### Actions

| # | Task | Owner | Status |
|---|------|-------|--------|
| 1 | Write Empty Wallet Chapter 2 script | Editor-in-Chief | ✅ DONE |
| 2 | Technical integration | CTO | ✅ DONE |
| 3 | Update council docs | CEO | ✅ DONE |

---

## Meeting #3 — Phase 2 Kickoff (Focused)

**Date:** 2026-06-15 18:08 WIB  
**Type:** Focused (CEO, CCO, Editor-in-Chief, CPO, CTO)  
**Topic:** Phase 2 kickoff — Digital Literacy Navigator Chapter 2

### Decisions

1. **Write Chapter 2 script freely** — Don't limit to existing scene backgrounds. Placeholder with existing assets, swap later.
2. **Ship as complete experience** — Chapter 1 ending → Loading-2 → Chapter 2. No broken jumps.
3. **Quality over speed** — Story quality is Senara's differentiator.
4. **Change status to published** when Chapter 2 is integrated and tested.

### Technical Steps (when script is ready)

1. Create `chapter-2.js` in `public/monogatari/stories/digital-literacy-navigator/`
2. Add `Loading-2` back to `index.js` and `chapter-1.js`
3. Update `story-loader.js` to include `chapter-2.js`
4. Update `stories.ts` chapters count from 1 to 2
5. Change story status from `coming-soon` to `published`
6. Build and test

### Actions

| # | Task | Owner | Status |
|---|------|-------|--------|
| 1 | Write Chapter 2 script (18 scenes) | Editor-in-Chief | ✅ DONE |
| 2 | Review for educational accuracy | CCO | ✅ DONE |
| 3 | Technical integration | CTO | ✅ DONE |
| 4 | Status change to published | CPO | ✅ DONE |
| 5 | Update ROADMAP.md | CEO | ✅ DONE |

---

## Meeting #1 — Initial Board Formation

**Date:** 2026-06-15  
**Type:** Executive only (6 roles)  
**Quorum:** Full  

### Context
Senara live at senara.id. 6 stories published but only 2 substantial. Astro migration complete. Documentation stale. Play counts ~1,400.

### Decisions
1. Content depth over breadth
2. Update documentation immediately
3. Fix broken Chapter 2 references
4. Growth strategy centers on flagship content
5. Sustainability requires partnerships

### Actions Completed
- Fixed broken Loading-2 references in 4 stories
- Marked 4 incomplete stories as coming-soon
- Updated AGENTS.md, README.md, ARCHITECTURE.md
- Replaced emoji icons with SVGs
- Added bump-version.js
- Created board council structure
