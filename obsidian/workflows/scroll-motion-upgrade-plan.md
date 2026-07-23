---
tags: [workflow, playbook, animation, wip]
updated: 2026-07-23
---

# Workflow — Scroll-Driven Motion Upgrade (Shahd Portfolio)

Playbook for adding premium, scroll-driven motion across the portfolio's
sections **using the starter's existing animation engine** — no new animation
library. Companion to [[new-page]] / [[generic-layout-prompt]]; read
[[animation-system]] and [[smooth-scroll]] before touching any of this.

> [!warning] Why this plan has no GSAP in it
> The original draft of this plan proposed GSAP ScrollTrigger for scrubbing/pinning.
> That conflicts with hard rule #1 ([[ai-agent-guide]]) and duplicates what this
> starter already built: `<SpringTrigger mode="scrub">` / `<ProgressTrigger>` use
> the same `"top bottom"`-style `TriggerPos` grammar as GSAP ScrollTrigger, running
> on the shared `src/lib/animation/ticker.ts` rAF loop, already fed by Lenis. There
> is nothing to "sync" — it's one pipeline. This plan uses only that pipeline.
> No new dependency, no ADR required, no fight with the `Stop` hook.

## Current sections (`src/views/home.tsx`)

`Grain` → `Header` → `Hero` → `About` → `Mission` → `Projects` → `Approach` →
`Calculator` → `Contact` → `Finale`. Each is a `"use client"` leaf under
`src/components/portfolio/`. This plan enhances that existing set — it does not
introduce new sections.

## Overall strategy

1. **Asset pipeline** (one-time setup, Phase 0).
2. **Per-section enhancement**, in the order below — each phase ships and gets
   reviewed before the next starts.
3. **Global pass** — perf, reduced-motion, resize handling.
4. **Documentation** — vault updates, catalog entries, changelog.

**Motion style**: cinematic but tasteful. Reserve pinning/scrubbing for the two
or three sections that earn it (Hero, Projects); everything else uses
`<Inview>` reveals and light `<SpringTrigger mode="scrub">` parallax — matching
existing usage elsewhere in the codebase.

---

### Phase 0 — Asset Preparation

- Produce short motion sequences per section (After Effects / Rive) **only**
  for sections that get a canvas scrubber (Hero; optionally Projects' featured
  card). Everything else animates DOM/SVG via springs — no frame sequences.
- Export **40–80 WebP frames** for the Hero sequence per the original brief —
  full cinematic version, load-time cost accepted per your call. Budget and
  document actual KB/frame and total payload once exported; note it in the
  PR description so it's visible, even though it's not being capped.
- Folder convention matches [[folder-structure]]: `public/assets/hero/`,
  `public/assets/projects/`, one folder per section — not `sections/<x>-frames/`
  as in the original draft, to match the existing `public/assets/<section>/`
  pattern used elsewhere in this repo.
- Provide a static fallback poster image per sequence (first/hero frame).
  `<ReducedMotion>` **does exist** (`components/common/reduced-motion.tsx`,
  global, mounted once) but only toggles react-spring's `skipAnimation` — it
  does not cover canvas. Each frame-sequence component needs its own
  `prefers-reduced-motion` check that falls back to this same poster image
  (detail in Phase 1 step 7).
- Document frame count + dimensions in this note once finalized (table below,
  fill in during Phase 0).

| Section | Frames | Dimensions | Total payload |
|---|---|---|---|
| Hero | 60 | 1920×1080 | 1.36 MB (~23 KB/frame avg) — source: Flow image-to-video, 8s clip |
| Projects (featured) | — | — | — |

---

### Phase 1 — Hero (`src/components/portfolio/hero.tsx`)

**Target**: pinned canvas frame-sequence scrubber that plays as the user
scrolls past the Hero, same cinematic intent as the original plan — built on
the ticker instead of GSAP.

**Steps**:
1. Build `HeroMotionGraphic.tsx` next to `hero.tsx` (feature-local component,
   not in `springs/` — it's not part of the animation engine).
2. Preload the WebP frame sequence; draw the current frame to a `<canvas>`.
3. Drive frame selection with `<ProgressTrigger>` (or `useProgressTrigger`
   directly if you need the raw `RefObject<number>` for a `requestAnimationFrame`
   draw loop instead of React re-renders per frame — canvas scrubbing at 40–80
   frames should read `progress.current` inside a `useLoop` callback, not
   `onChange` state, to avoid a re-render per scroll tick).
4. Pin the Hero section for the scrub duration using a tall wrapper
   (`h-[300vh]` or similar) with an inner `sticky`/`fixed` viewport. **Verified
   against `scroll-layout.tsx`**: this Lenis integration scrolls the real
   document (`lenis.raf(time)` inside a plain `requestAnimationFrame` loop,
   no transformed wrapper div), so native `position: sticky`/`fixed` behaves
   normally — no plugin needed. This will be the **first sticky/pin pattern in
   this codebase** (none exists yet), so document it clearly in the catalog
   entry (Phase 6) — Projects will likely reuse it.
5. Overlay text/CTA with `<Inview mode="once">` or `<TextEngine>` for the name
   reveal — don't hand text to the canvas.
6. Loading state: show the poster frame until the sequence is preloaded;
   `disableOnMobile` consideration for the full scrub vs. a lighter mobile
   treatment (decide per Phase 5 perf pass, not before).
7. **Reduced motion — don't rely on the global mechanism.** `<ReducedMotion>`
   (`components/common/reduced-motion.tsx`) only flips react-spring's global
   `skipAnimation` flag. A canvas frame-sequence isn't a spring — it's raw
   `drawImage()` calls — so it's invisible to that flag entirely. This
   component needs its own `matchMedia("(prefers-reduced-motion: reduce)")`
   check (same query `<ReducedMotion>` already watches) and fall straight to
   the poster frame when it matches. Flag this explicitly in the PR — it's an
   easy thing to assume is "already handled" and ship broken.

**Success** (checkable, not vibes):
- Scrubs at the frame rate scroll velocity implies, no visible stutter at
  60fps on a mid-tier laptop.
- Poster frame renders before JS/frames load (no flash of empty canvas).
- Works with `prefers-reduced-motion` — falls back to poster or a short
  `<Inview>` fade, per whatever `<ReducedMotion>` already does elsewhere.

---

### Phase 2 — About (`about.tsx`) / Mission (`mission.tsx`)

**Target**: progressive reveal of bio/mission copy with light parallax depth —
no frame sequence needed here.

**Steps**:
1. Layer any imagery/portrait with `<SpringTrigger mode="scrub">` for parallax
   (element moves at a different rate than scroll — classic depth effect).
2. Staggered text/element reveals via `<Inview mode="once">`, staggered with
   `delayIn`.
3. `<TextEngine>` for headline reveals if these sections have display copy —
   check [[text-engine]] for the right `mode` (`always`/`once`/`forward`/`progress`,
   never `manual`).

---

### Phase 3 — Projects (`projects.tsx`)

**Target**: the highest-value section for scroll motion after Hero — project
cards that reveal/scale on scroll, possibly a pinned "featured project" scrub.

**Steps**:
1. Per-card reveal via `<Inview mode="once">`, staggered by index.
2. If a featured project gets its own short frame sequence: same
   `ProgressTrigger` + `useLoop` canvas pattern as Hero, scoped to that one
   card — reuse `HeroMotionGraphic`'s underlying hook if it's written
   generically enough (`useFrameSequence(frames, progress)` as a small
   shared hook rather than duplicating logic). Same manual reduced-motion
   check from Phase 1 step 7 applies here too — it's per-instance, not
   inherited from the global flag.
3. If a horizontal-scroll gallery is wanted: `<SpringTrigger mode="scrub">`
   driving a `translateX`, pinned the same way as Hero (tall wrapper + sticky
   inner). No separate library for horizontal scroll — same primitives.

---

### Phase 4 — Approach / Calculator / Contact / Finale

- **Approach**: `<Inview>` staggered reveals for any process/step list; icon
  fills or line-draws are SVG `strokeDashoffset` springs via `<Spring>`, not
  CSS keyframes.
- **Calculator**: this is likely interactive already (client state) — keep
  motion to `<Hover>`/`<Inview>` on results, avoid scroll-scrub on anything
  the user is actively inputting into.
- **Contact / Finale**: subtle `<SpringTrigger mode="scrub">` background
  parallax or a single `<Inview>` closing reveal. Keep these light — they're
  exit points, not centerpieces.

For all four: richer motion only if it earns its keep. Default to the
lightest primitive that achieves the effect.

---

### Phase 5 — Global & Performance

- No GSAP↔Lenis sync step needed (see warning above) — confirm nothing in
  Phase 1–4 spun up a second rAF loop; everything should run through
  `useLoop`/the shared ticker.
- Reduced-motion: confirm every new component respects whatever
  `<ReducedMotion>` / `prefers-reduced-motion` mechanism already exists in
  `components/common` before adding a bespoke check per component.
- `disableOnMobile` per component where scrub motion would hurt mobile perf —
  never disable animation globally (existing rule, [[animation-system]]).
- Preload strategy for the Hero (and any Projects) frame sequences — lazy
  the rest of the page's images/video behind it.
- Lighthouse target: Performance > 90 — expect the 40–80 frame Hero sequence
  to be the main pressure point; that's the accepted tradeoff per your call
  in Phase 0, but measure it rather than assume.
- Resize/orientation: `useResizeLoop`/`useWindowSize` already exist — use
  them, don't add a raw `resize` listener.

---

### Phase 6 — Documentation

Per the existing "after making changes" rules in [[ai-agent-guide]] (this is
enforced by the `Stop` hook, not optional):

- `HeroMotionGraphic.tsx` stays **next to `hero.tsx`**, per
  [[component-conventions]] ("feature-specific components — next to the
  feature, not in `components/`"). It does *not* belong in
  `components/common`, and definitely not in `components/animation/springs/`
  (`#do-not-modify`, engine only). Same for any Projects equivalent.
- If `useFrameSequence` ends up shared between Hero and Projects, put it at
  `src/hooks/portfolio/use-frame-sequence.ts` — a **new, non-protected**
  domain folder distinct from `hooks/animation/` (which is `#do-not-modify`
  and reserved for the engine itself). Document it in [[hooks]] via
  [[templates/hook-note]].
- If this scrub/pin pattern gets reused a third time, *then* it's worth
  promoting to `components/common` with its own catalog entry — not before.
- New `public/assets/<section>/` folders → note in this file's Phase 0 table.
- [[changelog]] entry once each phase ships.
- **No ADR needed** for this plan itself — it doesn't change any rule, it
  applies existing ones. If a later phase genuinely needs something the
  engine doesn't support (e.g. Lottie for a specific sequence), *that* needs
  its own ADR amending [[decisions-log]] before it's used, same pattern as
  ADR-0014.

**Agent instructions** (paste into the prompt for whichever phase you're
running):
> Follow `obsidian/workflows/scroll-motion-upgrade-plan.md` and the vault.
> Use only `<SpringTrigger>` / `<ProgressTrigger>` / `<Inview>` / `<Spring>` /
> `useLoop` for all scroll and scrub motion — no GSAP, no framer-motion, no
> CSS keyframes (hard rule #1). Canvas frame sequences read progress via
> `useLoop`, not per-frame React state. Assets go in
> `public/assets/<section>/`. Respect design tokens ([[design-system]]) and
> `disableOnMobile` per component. Update the relevant catalog note and
> [[changelog]] for anything new.

---

## Implementation order

1. Phase 0 asset prep — Hero sequence only to start.
2. Phase 1 — Hero.
3. Ship, review, measure Lighthouse.
4. Phase 3 — Projects (higher value than About/Mission for motion investment).
5. Phase 2, 4 — remaining sections.
6. Phase 5 — global perf pass.
7. Phase 6 — final documentation sweep.

You said you want the agent to run the whole plan in one go rather than
per-phase PRs — if so, still ask it to commit per phase internally
(conventional commits, per [[new-page]] step 11) so the diff is reviewable
even if it's all one session.

## Risks & mitigations

- **Hero payload size** — accepted tradeoff (40–80 frames); mitigate only via
  aggressive WebP compression, not frame-count cuts, per your priority call.
- **Canvas re-render cost** — mitigate by reading ticker progress imperatively
  inside `useLoop`, never via React state per frame.
- **Convention drift** — mitigated structurally: there's no second animation
  system to drift into.
- **Over-animation** — keep Approach/Calculator/Contact/Finale intentionally
  light; Hero and Projects are where the budget goes.

## Success metrics

- Portfolio feels modern and intentional on scroll — Hero and Projects
  specifically, not uniformly across every section.
- No new runtime dependency added.
- `yarn lint` clean, no `#do-not-modify` files touched.
- Vault stays in sync with what got built (enforced by the `Stop` hook
  regardless).

## Related

[[animation-system]] · [[smooth-scroll]] · [[text-engine]] · [[new-page]] ·
[[folder-structure]] · [[decisions-log]]
