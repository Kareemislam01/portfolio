---
name: Kareem Mohamed — Portfolio
description: A technical working paper, not a dashboard — active, unfinished thinking made public.
colors:
  paper: "#f5f6f3"
  paper-raised: "#ffffff"
  ink: "#14171a"
  ink-muted: "#5b6570"
  line: "#dde1d9"
  accent: "#0f8f63"
  accent-ink: "#eefaf4"
typography:
  display:
    fontFamily: "Schibsted Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontWeight: 600
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Literata, ui-serif, Georgia, serif"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Schibsted Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 500
    letterSpacing: "0.14em"
rounded:
  sm: "4px"
  full: "9999px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper-raised}"
    rounded: "{rounded.sm}"
    padding: "14px 24px"
  link-marked:
    textColor: "{colors.ink}"
    typography: "{typography.display}"
---

# Design System: Kareem Mohamed — Portfolio

## Overview

**Creative North Star: "The Working Paper"**

The site reads like a technical working paper, not a finished résumé or a dashboard: strong typographic hierarchy carries the authority, generous margins give the content room to breathe, and one confident accent color is spent the way a reader marks a key claim — never as a status light, never as page-filling chrome. A faint growth-curve figure runs through the page as watermark and, in Experience, as the literal spine of the timeline: data-as-motif, present but never dominant.

The system explicitly rejects the terminal/instrument-panel identity this site shipped with previously (dark ground, dual amber/phosphor accent lights, mono-labeled chrome). That look is now anti-reference only; nothing about materials, palette, or component language carries forward from it.

**Key Characteristics:**
- Editorial masthead + single reading column, not a persistent dashboard sidebar
- One accent color (signal green), spent only on marks, links, and timeline nodes
- Display sans for headline authority, text-optimized serif for long-form reading
- A single growth-curve SVG figure reused as hero watermark and Experience spine

## Colors

A restrained palette: near-white paper, soft-black ink, and exactly one accent.

### Primary
- **Signal Green** (#0f8f63): the one confident accent. Used only for the `.mark` underline stroke behind key phrases, link-hover underline color, and the timeline node rings in Experience. Never fills a background larger than a small dot or a thin stroke.

### Neutral
- **Paper** (#f5f6f3): page background. Deliberately cool, not warm cream — avoids the cream-plus-serif cliché.
- **Paper Raised** (#ffffff): button text color and any surface that needs to sit slightly above paper.
- **Ink** (#14171a): headline and body-emphasis text, primary button fill.
- **Ink Muted** (#5b6570): body copy, captions, secondary metadata (dates, locations, tags).
- **Line** (#dde1d9): all hairline borders and dividers.

### Named Rules
**The One Mark Rule.** The accent color never fills a region larger than a timeline node or an underline stroke. If a design needs a second saturated color to feel finished, the layout is doing too little, not the palette.

## Typography

**Display Font:** Schibsted Grotesk (with ui-sans-serif, system-ui fallback)
**Body Font:** Literata (with ui-serif, Georgia fallback)
**Label/Mono Font:** JetBrains Mono — used minimally, for the direction-contract comment only; not part of the visible UI type system.

**Character:** A confident newspaper-grotesk for headlines, paired with a serif built specifically for on-screen long-form reading. The pairing argues for authority (display) and time-on-page (body) rather than a single do-everything sans.

### Hierarchy
- **Display** (600, `text-5xl`–`text-6xl`, leading 1.05): hero headline only.
- **Headline** (600, `text-3xl`–`text-4xl`): section titles.
- **Title** (600, `text-xl`): entry titles (role, project, school).
- **Body** (400, `text-[15px]`–`text-lg`, 1.6 line-height): paragraphs and bullets, ~65–75ch measure.
- **Label** (500, `text-sm`, tracking 0.14em, uppercase, Schibsted not mono): section eyebrows and masthead nav.

### Named Rules
**The No-Chrome Rule.** Labels and eyebrows are set in the display sans, not a monospace face. Monospace is reserved for the build-time direction contract; it never appears as visible UI chrome again.

## Layout

Single reading column, `max-w-3xl` (48rem), centered, consistent across every section — no full-bleed dashboard sections. The masthead is a sticky top bar (not a persistent sidebar), `max-w-5xl`, slightly wider than the content column to give the nav room to breathe. Section rhythm: `py-20` mobile, `py-28` desktop, separated by single hairline `border-line` rules — no shadows, no card elevation. Experience uses a left-aligned vertical hairline as a timeline rail with accent-ringed nodes per entry, echoing the growth-curve watermark's role as a data-motif spine.

## Elevation & Depth

Flat by design. No shadows anywhere in the system; depth is conveyed only through the paper/paper-raised distinction and hairline borders, never through elevation.

### Named Rules
**The Flat-By-Default Rule.** Every surface sits at the same visual depth. If something needs to stand out, it earns that through typography or the accent mark, never a shadow.

## Shapes

Minimal radius throughout (`4px` on buttons; `9999px`/full-round only on the tiny timeline nodes). No large rounded cards, no pill-shaped chips or tags — tags render as plain interpunct-separated text, not bordered pills, to keep the page reading as a publication rather than a UI kit.

## Components

### Buttons
- **Shape:** 4px radius.
- **Primary:** ink background, paper-raised text, `px-5 py-3`. Reserved for the one primary action per section (email).
- **Secondary:** not a button — a plain underlined text link (`decoration-line`, hover `decoration-accent`) with a trailing arrow icon.

### Links / Marked Text
- **Style:** underline in `line` color by default; underline shifts to `accent` on hover. The `.mark` utility (a thin accent-colored underline band, `0.16em` tall, positioned at 96% of the line) is reserved for one phrase per major headline — never applied to body copy or more than once per viewport.

### Timeline (Experience)
- **Rail:** a single hairline vertical border.
- **Node:** a small circle, accent-colored ring, paper-colored fill, centered on the rail per entry.
- **Entry:** date range + location in muted display-sans caption, role as title, company in italic serif, bullets in body serif.

### Skill Columns
- No cards, no borders, no per-item indicator dots. A plain label (display sans, uppercase, tracked) over a plain list of skills in body text. Three columns on desktop, stacked on mobile.

### Project Entries
- No card chrome. Each project is a row separated by a hairline top border, title + optional "Details pending" caption, summary, and interpunct-joined tags as plain text.

## Do's and Don'ts

### Do:
- **Do** spend the accent color only on: the `.mark` stroke, link-hover underlines, and timeline nodes.
- **Do** keep every section inside the single `max-w-3xl` reading column.
- **Do** set eyebrows and labels in Schibsted Grotesk, never mono.

### Don't:
- **Don't** reintroduce a persistent sidebar/dashboard nav — the masthead is a publication header, not an instrument panel.
- **Don't** add a second saturated accent color or a "status light" pairing; this system is intentionally restrained to one.
- **Don't** add shadows, card elevation, or pill/chip-styled tags — depth and grouping come from hairlines and typography only.
- **Don't** let the growth-curve watermark exceed ~35% opacity or grow more visually complex; it is a watermark, not an illustration.
