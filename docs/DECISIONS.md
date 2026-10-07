# Senara: Decision Log

Record of decisions that shaped the project. Newest first.

> **Note on history:** entries before 2026-10 were written in a "board of
> directors" framing (docs/council/) that never matched reality: the project
> has always had a single maintainer. The decisions themselves were real; the
> framing was dropped during the October 2026 solo re-scope.

---

## 2026-10-07: Solo re-scope

**Context:** The project had been idle since 2026-07-17. It was built and
maintained by one person from the start (165 commits, 100% single author), but
the repo and site carried open-collaboration framing: a 30-role board, meeting
logs, contributor recruitment copy, roadmap phases for community contribution
that never materialized.

**Decisions:**

1. **Honest scope.** Solo-maintained open-source project. Council docs
   (BOARD.md, MEETINGS.md) deleted, DECISIONS/ROADMAP moved to `docs/`.
2. **Content depth before growth.** The platform is feature-complete for its
   size; what's missing is finished stories. Grants, dashboards, and partner
   outreach are deferred until the content library is real (see ROADMAP.md).
3. **Keep CONTRIBUTING.md**, but scoped to what actually helps: issues, PRs,
   and the story-writing format. No promises of mentorship, certificates, or
   team onboarding.

---

## 2026-06-15: Phase 2 session (audit follow-up)

**Audit scorecard at the time:** Tech 8 | Features 7 | Security 6 | A11y 6 |
Perf 7 | i18n 9 | PWA 7 | Content 5 | Tests 0 | CI/CD 0 | Docs 8 | Legal 7

### Decisions

1. **LICENSE file is critical**: MIT license claimed in README but file
   didn't exist. → Created (MIT). **DONE**
2. **Service worker not registering** → registration added to
   BaseLayout.astro. **DONE**
3. **Accessibility gap**: no `aria-live` regions for dynamic content.
   → Added to collection results. **DONE**
4. **No sitemap** → `@astrojs/sitemap` added. **DONE**
5. **Zero test coverage** → `npm run test` smoke test (runs build) added;
   Vitest + CI workflow later added in Phase 3 work. **DONE**
6. **package.json conflicts**: `"type": "commonjs"` vs Astro ESM, license
   ISC vs MIT → fixed. **DONE**
7. **Freeze new features**: content and quality only until 4 complete
   stories exist. (Still the standing rule as of 2026-10.)
8. **Complete Digital Literacy Navigator first**: online safety is
   universal, story already has 21 scene backgrounds.
9. **Privacy policy needs refresh**: last updated December 2025. **OPEN**
10. **Personal email exposure**: `fauzan08fauzan@gmail.com` in 6+ places.
    Switch to `hello@senara.id` when domain email is set up. **OPEN**

---

## 2026-06-15: Initial priorities

**Context:** Senara live at senara.id with 6 stories, only 2 substantial
(Mental Health Hero: 5 chapters + voice acting; New Friend in Class 8B:
8 chapters). Recent migration from vanilla HTML/CSS/JS to Astro + TypeScript.
Play counts low (~1,400 total).

### Decisions

1. **Content depth over breadth**: complete existing stories before new
   ones; mark incomplete stories honestly (not "published"); Mental Health
   Hero is the proof of concept.
2. **Documentation was blocking contributors**: AGENTS.md, README.md,
   ARCHITECTURE.md described pre-Astro architecture → updated.
3. **Broken content hurts trust**: 4 stories referenced Chapter 2 that
   didn't exist → fixed or flagged.
4. **Growth strategy centers on flagship content**: lead with Mental
   Health Hero quality; Indonesian SEO for "visual novel edukasi".
5. **Sustainability requires partnerships**: for-organizations page,
   grants, impact metrics. *(Deferred 2026-10: needs content first.)*
