---
name: Kareem Mohamed — Portfolio
description: A terminal directory, not a résumé — bold wayfinding signage for a career with more than one gate.
colors:
  blue: "#0a2f6e"
  blue-deep: "#071f4d"
  paper: "#ffffff"
  paper-dim: "#f2f3f5"
  ink: "#0a0a0a"
  ink-muted: "#55585c"
  on-blue: "#ffffff"
  on-blue-muted: "#a9bcdd"
  line: "#d8dbe0"
  line-on-blue: "#23438a"
  amber: "#f2b705"
typography:
  display:
    fontFamily: "Overpass, ui-sans-serif, system-ui, sans-serif"
    fontWeight: 800
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Overpass, ui-sans-serif, system-ui, sans-serif"
    fontWeight: 400
    fontSize: "0.875rem"
    lineHeight: 1.6
  label:
    fontFamily: "Overpass, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 700
    letterSpacing: "0.16em"
rounded:
  none: "0px"
components:
  button-primary:
    backgroundColor: "{colors.amber}"
    textColor: "{colors.blue-deep}"
    rounded: "{rounded.none}"
    padding: "14px 24px"
  zone-badge:
    backgroundColor: "{colors.blue}"
    textColor: "{colors.on-blue}"
    rounded: "{rounded.none}"
    size: "40px"
---

# Design System: Kareem Mohamed — Portfolio

## Overview

**Creative North Star: "The Terminal Directory"**

The site reads as an airport wayfinding system, not a résumé and not a dashboard: committed signage-blue field panels alternate with high-contrast white, one signal-amber highlight marks arrows, live status, and key phrases, and a single sans family (Overpass — derived from U.S. highway signage type) carries every weight of the hierarchy through scale alone. Sections are zones, lettered A through F on a fixed badge, the way a terminal directory numbers its gates. The Experience section is a departures board: each role flips into place, and the current role carries a "Boarding Now" tag instead of a generic "Present" label.

This is the second visual identity this project has shipped. Both prior systems — a dark avionics/HUD instrument panel, and a quiet cream-and-serif editorial working paper — are anti-reference only. Nothing about their palettes, type, or component language carries forward: no dual-accent status lights, no monospace eyebrow chrome, no restrained single-accent-on-neutral palette. This system is deliberately bolder and more color-committed than either.

**Key Characteristics:**
- Committed blue/white color-blocking, not a neutral ground with a timid accent
- One typeface family (Overpass) for everything — no display/body/mono split
- Zone-lettered sections (A–F) as a real structural device, not decoration
- A departures-board flip is the one signature motion moment, reserved for Experience only
- Pictogram icons (flat, geometric, single-color) stand in for domain expertise the way gate signage uses pictograms for services

## Colors

A committed strategy: one saturated field color carries most of the surface, one signal color marks action and status.

### Primary
- **Terminal Blue** (#0a2f6e): the field color. Fills the masthead, hero, and contact/footer panels — never used as a small accent, always as a full region.
- **Terminal Blue Deep** (#071f4d): footer only, one shade below Terminal Blue for a grounding close.

### Secondary
- **Signal Amber** (#f2b705): the one highlight color. Used for primary CTAs, the `.mark` underline, arrows, zone badges' focus ring, current-item status tags, and list bullets. Never fills a background region larger than a button or a small badge.

### Neutral
- **Paper** (#ffffff): default section background.
- **Paper Dim** (#f2f3f5): the Experience section only, to set the departures board apart as its own zone.
- **Ink** (#0a0a0a): headline and body text on light backgrounds.
- **Ink Muted** (#55585c): captions, dates, secondary copy on light backgrounds.
- **On Blue / On Blue Muted** (#ffffff / #a9bcdd): text on Terminal Blue panels.
- **Line / Line on Blue** (#d8dbe0 / #23438a): hairline dividers, contextual to background.

### Named Rules
**The One Signal Rule.** Amber is the only color that means "look here" or "this is current." It never becomes a field color, and blue never functions as a status highlight.

## Typography

**Display Font:** Overpass (with ui-sans-serif, system-ui fallback)
**Body Font:** Overpass (same family, regular weight)
**Label/Mono Font:** none — no monospace anywhere in the visible UI.

**Character:** One signage typeface doing every job in the hierarchy through weight and size alone — 800 for headlines and role titles, 700 for labels and zone letters, 600 for company/tag lines, 400 for body copy. Overpass is derived from U.S. highway signage type (the Highway Gothic lineage), which is the actual real-world justification for the pick: it is legible at a distance and reads as infrastructure, not as a blog.

### Hierarchy
- **Display** (800, uppercase, `text-5xl`–`text-7xl`, leading ~1.02): hero headline only.
- **Headline** (800, uppercase, `text-3xl`–`text-4xl`): section titles, paired with the zone badge.
- **Title** (800, uppercase, `text-xl`): entry titles (role, project, school).
- **Body** (400, `text-sm`–`text-lg`, 1.6 line-height): paragraphs and bullets.
- **Label** (700, `text-xs`–`text-sm`, tracking 0.14–0.16em, uppercase): eyebrows, nav, badges, tags.

### Named Rules
**The One Face Rule.** Every piece of type on the page is Overpass. If a component seems to need a different face, the fix is a different weight or size, not a second family.

## Layout

Single reading column, `max-w-3xl` (48rem) for content sections, `max-w-5xl` for the masthead. Sections alternate background between Paper and Paper Dim/Blue to read as distinct zones — this is the primary structural device, more load-bearing than spacing alone. Section rhythm: `py-16` mobile, `py-24` desktop. Every section opens with a zone badge (a filled blue square with a bold white letter, A–F) beside the section title — this pairing is fixed and never appears without the badge.

## Elevation & Depth

Flat by design, same as the sections before it — no shadows anywhere. Depth and grouping come entirely from color-blocked panels (blue vs. paper vs. paper-dim) and hairline dividers, never from elevation.

### Named Rules
**The Flat Panel Rule.** A section either IS a color (full-bleed blue) or sits flat on paper. Nothing is elevated above its panel.

## Shapes

Hard corners everywhere — zero border-radius on buttons, badges, pictogram tiles, and status tags. This is a deliberate departure from both prior systems (which used 4px and full-round respectively): signage doesn't round its corners, and the hard edge reinforces the "infrastructure, not software chrome" character.

## Components

### Buttons
- **Shape:** square corners, no radius.
- **Primary:** amber fill, blue-deep text, bold uppercase label, `px-6 py-3.5`.
- **Secondary:** plain bold uppercase text link in on-blue or ink, with a `SignArrow` icon that shifts amber and nudges right on hover.

### Zone Badge
- A `40px` (desktop) filled blue square, bold white letter, 800 weight, paired immediately to the left of every section's `<h2>`. Never used decoratively away from a section title.

### Pictogram
- A `64px` filled square (blue on light backgrounds, amber on blue backgrounds) holding a flat single-color geometric icon, with a bold code (e.g. "DTA") and a muted label beneath. Used once, in the hero, to represent the three domain pillars — not repeated as generic decoration elsewhere.

### Departures Board (Experience)
- Each entry is a row: tabular date range, role title (800 uppercase), company + location line (company in blue), bullets in body weight.
- Entries flip into view on scroll (`perspective` + `rotateX`) instead of fading — the one reserved signature motion.
- The current role carries an amber "Boarding Now" tag instead of a border treatment — status is communicated through the tag alone, deliberately not through a side accent border (a recognized AI-slop tell the project's own detector flags).

### Status / Pending Tags
- Plain filled-background text tags (`bg-paper-dim` for "Details pending", `bg-amber` for "Boarding now") — no pill radius, no border-only chip style.

## Do's and Don'ts

### Do:
- **Do** treat section background color as the primary structural signal — pair every zone with an intentional blue/paper/paper-dim choice, not a default.
- **Do** keep the departures-board flip exclusive to Experience; every other section reveals with a plain fade-up.
- **Do** set all type in Overpass; vary weight and size, never family.

### Don't:
- **Don't** add a border-left/border-right accent stripe to a card or row to signal state — use a filled tag or badge instead. (The project's `detect.mjs` flags this as `side-tab`, a recognized AI-generated-UI tell.)
- **Don't** introduce a second highlight color alongside amber, or let blue serve as both field and accent.
- **Don't** round any corner. Radius does not exist in this system.
- **Don't** use a literal pixel font-size (`text-[15px]` and similar) — stay on Tailwind's documented type scale so every size traces to this file.
