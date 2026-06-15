# Senara Board Decisions

Log of strategic decisions made by the board.

---

## 2026-06-15 18:00: Full Council Meeting (Session 2)

**Attendees:** All 30 roles (7 Executive, 6 Product & Engineering, 6 Content & Education, 3 Growth & Marketing, 3 User Success, 6 Operations & Legal)  
**Audit Scorecard:** Tech 8 | Features 7 | Security 6 | A11y 6 | Perf 7 | i18n 9 | PWA 7 | Content 5 | Tests 0 | CI/CD 0 | Docs 8 | Legal 7

### Decisions

1. **LICENSE file is critical** — MIT license claimed in README but file doesn't exist. Legal risk: code is "all rights reserved" by default.
   - Action: Create LICENSE file (MIT) — **DONE**

2. **Service worker not registering** — No `serviceWorker.register()` found in Astro pages.
   - Action: Add registration to BaseLayout.astro — **DONE**

3. **Accessibility gap** — No `aria-live` regions for dynamic content (collection filters, story loading).
   - Action: Add `aria-live="polite"` to collection results container — **DONE**

4. **No sitemap** — Search engines can't discover all pages.
   - Action: Install `@astrojs/sitemap` integration — **DONE**

5. **Zero test coverage** — No tests, no CI/CD. Acceptable for now but needs minimum viable testing.
   - Action: Add `npm run test` as smoke test (runs build) — **DONE**

6. **package.json issues** — `"type": "commonjs"` conflicts with Astro's ESM. `"license": "ISC"` should be `"MIT"`.
   - Action: Remove `"type"`, set license to MIT — **DONE**

7. **Freeze new features** — Content and quality are the only priorities until 4 complete stories exist.

8. **Complete Digital Literacy Navigator first** — Online safety is universal, already has 21 scene backgrounds.

9. **Privacy policy needs refresh** — Last updated December 2025. Deferred to Phase 2.

10. **Personal email exposure** — `fauzan08fauzan@gmail.com` in 6+ places. Switch to `hello@senara.id` when domain email is set up. Deferred.

### Scorecard Changes (Post-Fix)

| Category | Before | After | Change |
|----------|--------|-------|--------|
| Security | 6 | 7 | +1 (LICENSE file) |
| A11y | 6 | 7 | +1 (aria-live) |
| Tests | 0 | 1 | +1 (smoke test) |
| SEO | — | +1 | (sitemap) |

---

## 2026-06-15: Initial Board Formation

**Attendees:** CEO, CPO, CTO, CMO, CFO, CCO

### Context
Senara is live at senara.id with 6 published stories, but only 2 are substantial (Mental Health Hero: 5 chapters + voice acting; New Friend in Class 8B: 8 chapters). The platform recently migrated from vanilla HTML/CSS/JS to Astro + TypeScript. Documentation is stale. Play counts are low (~1,400 total).

### Decisions

1. **Content depth over breadth**
   - Complete existing stories before starting new ones
   - Mark incomplete stories honestly (not "published")
   - Flagship story (Mental Health Hero) is the proof of concept

2. **Documentation is blocking contributors**
   - AGENTS.md, README.md, ARCHITECTURE.md all describe pre-Astro architecture
   - Immediate update required

3. **Broken content hurts trust**
   - 4 stories reference Chapter 2 in loading screens but the files don't exist
   - Must fix or remove broken references immediately

4. **Growth strategy centers on flagship content**
   - Mental Health Hero has voice acting, 5 chapters, 150+ scenes
   - Lead with quality proof, not quantity of stubs
   - Indonesian SEO for "visual novel edukasi" and related queries

5. **Sustainability requires partnerships**
   - For-organizations page needs real CTAs
   - Grant applications needed for long-term survival
   - Impact metrics (stories completed, time spent) are essential for grants

### Action Items
See [ROADMAP.md](ROADMAP.md) for full task list.
