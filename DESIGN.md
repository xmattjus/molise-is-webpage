---
name: Molise Is
description: The village poster wall where Molise's places, events and discoveries are pasted together.
colors:
  forest: "#087a55"
  adriatic: "#176b87"
  terra-cotta: "#b84e23"
  ivory: "#f7f4ec"
  sheet: "#fffdf8"
  ink: "#17211c"
  stone: "#6b726d"
  stone-text: "#5c635e"
  primary-container: "#84f8c3"
  on-primary-container: "#005137"
  secondary-container: "#bde9ff"
  on-secondary-container: "#004d64"
  tertiary-container: "#ffdbcf"
  on-tertiary-container: "#812900"
  app-surface: "#f5fbf5"
typography:
  display:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "clamp(3rem, 7.2vw, 6rem)"
    fontWeight: 850
    lineHeight: 0.92
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "clamp(2.4rem, 5.4vw, 4.6rem)"
    fontWeight: 850
    lineHeight: 0.92
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "clamp(2rem, 4vw, 3.4rem)"
    fontWeight: 850
    lineHeight: 0.95
    letterSpacing: "-0.03em"
  poster-name:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "clamp(1.4rem, 2vw, 1.9rem)"
    fontWeight: 850
    lineHeight: 1
    letterSpacing: "-0.02em"
  lede:
    fontFamily: "Lexend, system-ui, sans-serif"
    fontSize: "clamp(1.05rem, 1.4vw, 1.2rem)"
    fontWeight: 400
    lineHeight: 1.55
  body:
    fontFamily: "Lexend, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Lexend, system-ui, sans-serif"
    fontSize: "0.74rem"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "0.12em"
  button:
    fontFamily: "Lexend, system-ui, sans-serif"
    fontSize: "0.82rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.08em"
rounded:
  label: "2px"
  paper: "3px"
  badge: "9px"
  screen: "1.1rem"
spacing:
  gutter: "clamp(1rem, 3vw, 2rem)"
  section: "clamp(5rem, 10vw, 9rem)"
  container: "76rem"
components:
  button-primary:
    backgroundColor: "{colors.forest}"
    textColor: "{colors.ivory}"
    typography: "{typography.button}"
    rounded: "{rounded.paper}"
    padding: "0.7rem 1.1rem"
    height: "2.75rem"
  poster-forest:
    backgroundColor: "{colors.forest}"
    textColor: "{colors.ivory}"
    rounded: "{rounded.paper}"
  poster-adriatic:
    backgroundColor: "{colors.adriatic}"
    textColor: "{colors.ivory}"
    rounded: "{rounded.paper}"
  poster-terra:
    backgroundColor: "{colors.terra-cotta}"
    textColor: "{colors.ivory}"
    rounded: "{rounded.paper}"
  poster-mint:
    backgroundColor: "{colors.primary-container}"
    textColor: "{colors.on-primary-container}"
    rounded: "{rounded.paper}"
  poster-sky:
    backgroundColor: "{colors.secondary-container}"
    textColor: "{colors.on-secondary-container}"
    rounded: "{rounded.paper}"
  poster-peach:
    backgroundColor: "{colors.tertiary-container}"
    textColor: "{colors.on-tertiary-container}"
    rounded: "{rounded.paper}"
  poster-sheet:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.ink}"
    rounded: "{rounded.paper}"
  paste-strip:
    backgroundColor: "{colors.terra-cotta}"
    textColor: "{colors.ivory}"
    typography: "{typography.label}"
    padding: "0.45rem 1.1rem"
  info-band:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.ink}"
    rounded: "{rounded.label}"
    padding: "1rem 1.1rem 1.15rem"
  category-chip:
    backgroundColor: "{colors.primary-container}"
    textColor: "{colors.on-primary-container}"
    rounded: "{rounded.label}"
    padding: "0.4rem 0.85rem"
  printed-screen:
    backgroundColor: "{colors.app-surface}"
    rounded: "{rounded.screen}"
  store-badge:
    rounded: "{rounded.badge}"
    height: "3rem"
---

# Design System: Molise Is

## Overview

**Creative North Star: "Muri delle sagre"**

The site is a village wall in Molise where the season's posters are pasted, and Molise Is is the poster on top that collects all the others. The ground is Ivory plaster with a fine grain; everything that carries content is a sheet of paper on it: full-colour Forest, Adriatic and Terra stock, a second run on the app's pale Material containers, and plain sheet white. Sheets hang slightly rotated, overlap, and carry a soft paper shadow. Heavy stacked Fraunces is set like a village print shop; Lexend capitals carry the small print (what, where, when). Real app screens are printed into the posters, never mocked inside a phone frame.

Density is poster-like: few words, very large type, generous wall between sheets. Composition is collage rather than grid of equal cards; posters overlap, older sheets show only their edges underneath, and the newest paste sits on top. Motion is the act of pasting: posters settle once on load from a slight lift and then stay still, except in the one signature moment where a stack of posters peels off the wall as you scroll.

The page rejects the app-landing template: no split hero with a phone mockup, no row of equal feature cards. The previous world ("Cartolina dal Borgo": pill buttons, 2rem cards, organic blobs, CSS-drawn landscapes) is retired.

**Key Characteristics:**
- Ivory plaster wall with a grain texture; content lives on paper sheets, never directly on glassy or floating cards.
- Seven paper stocks: three brand seeds with Ivory text, three app containers with their on-container text, and sheet white with Ink.
- Fraunces 850, tight tracking, stacked short lines; Lexend for every sentence, label and button.
- Nearly square corners (2-3px) on all paper; rounding is reserved for printed device screens and official badges.
- Small rotations (-5deg to 5deg) and overlap express the wall; a soft two-layer shadow lifts each sheet off the plaster.
- Diagonal Terra paste strips across poster corners carry short labels.

## Colors

Earth-and-sea paper stocks on an ivory plaster wall, shared one-for-one with the app's Material scheme.

### Primary
- **Forest** (`forest`): the main poster stock, the paper button, text selection and the caret. Buttons keep the Forest seed; no other colour is the primary action.

### Secondary
- **Adriatic** (`adriatic`): a second full-colour poster stock (the closing download poster, under-layer sheets) and the global focus ring (3px solid, 3px offset).

### Tertiary
- **Terra Cotta** (`terra-cotta`): paste strips, and occasionally an event poster's stock. It is the pinch of red on the wall, never the call to action.

### App containers (second-run paper)
- **Mint** (`primary-container` with `on-primary-container`), **Sky** (`secondary-container` with `on-secondary-container`), **Peach** (`tertiary-container` with `on-tertiary-container`): tinted poster stock, category chips and the draft notice on legal pages. These are the app's own FlexSeedScheme container tokens, so the site and the printed screenshots read as one product.

### Neutral
- **Ivory** (`ivory`): the wall. It stays the ground by choice, even though the app's surface (`app-surface`) is a cooler green-white. Also the text colour on the three seed stocks.
- **Sheet** (`sheet`): plain white paper for info bands, notices and legal pages.
- **Ink** (`ink`): all running text on the wall and on light paper; also the tint of every shadow.
- **Stone Text** (`stone-text`): muted text on the wall (secondary lines, footer). The brand Stone (`stone`) darkened to hold 5:1 on the grained wall; raw Stone is not used for text.
- **App Surface** (`app-surface`): the backing behind printed screenshots only, so their edges match the app.
- Borders are Ink at 14% (`color-mix`), used for the footer rule and nowhere structural.

The brand colour guide lives at `docs/brand/brand-color-system.png`. The app's dark Material scheme is recorded in `.impeccable/design.json` (`extensions.appDarkScheme`) for a future dark mode; the site is light-only today.

### Named Rules
**The Full-Strength Container Rule.** A tinted surface uses the app's Material container with its on-container text at full strength. Fading on-container text (the earlier 72% mix) fails AA; full strength measures about 7.2:1.

**The Ivory On Stock Rule.** Text on Forest, Adriatic or Terra stock is Ivory at full strength (4.6 to 5.5:1). Do not fade it with `color-mix` toward transparent.

**The Forest Acts Rule.** The paper button and the primary action are Forest. Terra Cotta labels and decorates; it never asks for the click.

## Typography

**Display Font:** Fraunces (with Georgia, serif), variable, optical sizing on
**Body Font:** Lexend (with system-ui, sans-serif), weights 400, 500, 700

**Character:** A village print shop: black-weight Fraunces stacked in short lines with tight negative tracking shouts the name of the thing, and Lexend in small spaced capitals gives the practical small print underneath.

### Hierarchy
- **Display** (850, `clamp(3rem, 7.2vw, 6rem)`, 0.92): the hero line and the closing poster line only, capped at 7 to 8.5ch so it stacks.
- **Headline** (850, `clamp(2.4rem, 5.4vw, 4.6rem)`, 0.92): section titles on the wall, capped at 11 to 12ch.
- **Title** (850, `clamp(2rem, 4vw, 3.4rem)`, 0.95): the headline of a large poster sheet.
- **Poster Name** (850, `clamp(1.4rem, 2vw, 1.9rem)`, 1): the real name on a small place or event poster; notices use the same voice at 1.7rem.
- **Lede** (400, `clamp(1.05rem, 1.4vw, 1.2rem)`, 1.55): one intro paragraph, max 34rem.
- **Body** (400, 1rem, 1.6): running text; legal prose at max 65ch.
- **Label** (700, 0.74rem, 0.12em tracking, uppercase): info lines and figure captions, like a poster's small print. Paste strips use the same voice at 0.78rem / 0.1em.

### Named Rules
**The Print Shop Weight Rule.** Every Fraunces line on the wall is 850 (legal h2 at 800), with `-0.02em` to `-0.03em` tracking and balanced wrapping. Lighter Fraunces is not part of this world.

**The Serif Names, Sans Tells Rule.** Fraunces is for titles, names and printed chips; Lexend carries every sentence, label, caption and button.

## Layout

A centred container (`min(100% - 2 × gutter, 76rem)`) with a fluid gutter (`clamp(1rem, 3vw, 2rem)`) and large section spacing (`clamp(5rem, 10vw, 9rem)`). Inside sections the layout is collage, not cards in a row: the hero is a 12-column wall where posters are placed by column span and pulled into overlap with negative margins, and z-index follows paste order (newest on top). Text-and-poster sections use a two-column grid (`1fr` / `0.9fr`) that collapses to one column at 56rem.

Breakpoints observed: 64rem (hero re-spans), 56rem (discover stacks), 46rem (posters go single-column, hero becomes full-width main poster with the screenshot poster peeking rotated below), 40rem (header text links hide), and the peel stack needs at least 52rem wide and 40rem tall. Anchored targets get `scroll-margin-top: 1.5rem`. The body never scrolls sideways (`overflow-x: clip`, min-width 20rem).

## Elevation & Depth

Depth is physical paper on a wall: a hybrid of overlap order, small rotation and a soft ink-tinted two-layer shadow (a tight contact shadow plus a long, negatively spread drop). The wall itself is flat and grained. There is no glass, blur or glow.

### Shadow Vocabulary
- **Paper** (`0 1px 1px rgb(23 33 28 / 0.1), 0 18px 32px -14px rgb(23 33 28 / 0.32)`): every poster sheet and the paper button at rest.
- **Paper Lifted** (`0 2px 2px rgb(23 33 28 / 0.1), 0 30px 48px -18px rgb(23 33 28 / 0.4)`): a sheet being pasted or peeled, and the button on hover.
- **Strip** (`0 6px 14px -8px rgb(23 33 28 / 0.5)`): paste strips, which sit tight on the poster.
- **Under-layer** (`0 1px 1px rgb(23 33 28 / 0.08)`): older sheets underneath, barely off the wall.

### Named Rules
**The Pasted, Not Floating Rule.** Shadows describe paper resting on plaster. Lift (the Lifted shadow, a 2px rise) appears only while a sheet is being pasted, peeled or pressed.

## Shapes

Paper is cut, not moulded: sheets have a 3px corner (`rounded.paper`), labels, chips and info bands 2px (`rounded.label`). Only things that are not paper round off: printed device screens use 1.1rem (`rounded.screen`) with a 1px border at 30% of the current colour, and official store badges 9px to match their artwork. Every sheet takes a `--tilt` rotation between roughly -5deg and 5deg; strips sit at 3 to 5deg across a corner and overhang the edge by about 0.9rem. The grain texture is applied to the wall, every poster and every chip.

## Components

### Paper Button
A printed label you can press.
- **Shape:** 3px corners, min height 2.75rem.
- **Primary:** Forest with Ivory, Lexend 700 uppercase 0.82rem at 0.08em, padding 0.7rem 1.1rem, Paper shadow.
- **Hover / Active:** rises 2px with the Lifted shadow and Forest darkened 12% toward black over 180ms on the paste easing; returns flat on press.
- **Focus:** global 3px Adriatic outline, 3px offset.

### Store Badges
The official App Store and Google Play badge artwork, 3rem tall, wrapped in a 9px-radius link that rises 2px on hover (180ms, paste easing). They are the primary action and always sit on a white info band, never directly on coloured stock.

### Poster Sheets
- **Stocks:** forest, adriatic, terra (Ivory text); mint, sky, peach (on-container text); sheet (Ink text).
- **Corner / Shadow:** 3px, Paper shadow, grain overlay, own `--tilt`.
- **Padding:** fluid, roughly `clamp(1.5rem, 4vw, 3rem)` on large sheets, 1rem 1.1rem on small place and event posters.
- **Small posters** carry a Poster Name and one Lexend line ("Luogo · Castel San Vincenzo") with real names only.

### Under-layer Sheets
Older posters beneath the hero, decorative and `aria-hidden`: plain stock with no content, only their edges showing, the Under-layer shadow, larger tilts (2 to 5deg). On mobile only one remains.

### Paste Strip
A Terra band pasted diagonally across a poster corner with a short Lexend capitals label ("Gratis su iPhone e Android", "È gratis", or the category of a stack sheet). Absolutely positioned, overhanging the edge, Strip shadow, no wrapping. On sheets that stack, each sheet uses a different corner so strips never cross.

### Info Band
A white sheet-coloured band at the foot of a coloured poster holding the store badges: 2px corners, padding 1rem 1.1rem, fit-content width. This is where the action lives on every poster that asks for the download.

### Printed Screen
A real app screenshot printed into a poster: App Surface backing, 1.1rem corners, 1px border at 30% of current colour, cropped with `object-fit: cover` to a fixed aspect (10/15 or 10/16 phone, 4/4.4 tablet). On the closing poster the screen rises from the bottom edge, open at the bottom and rotated 3deg. Never a drawn phone frame.

### Category Chips
Printed labels flat on the wall, not buttons: Fraunces 700 at 1.25rem, 2px corners, grain, mint/sky/peach container stock with on-container text, each with its own small tilt. Non-interactive list items.

### Notice Sheet
A small white sheet poster (max 24rem, tilt -1deg) with a Fraunces 850 title at 1.7rem and one Stone Text line, used for an aside such as "Manca un posto?".

### Details Sheet
The facts of a place or event on detail pages: a white sheet poster (tilt -0.8deg) holding a `<dl>` of rows, each a Lexend caps label in Stone Text ("Quando", "Dove", "Categoria") over a Lexend 500 value, rows divided by an Ink-14% rule, then the full-width "Indicazioni stradali" paper button. A past event carries a "Concluso" paste strip on its corner. New fields join as new rows. On phones it sits between the cover and the text; on desktop it hangs under the cover and both stay sticky beside the text (the cover is capped at the viewport minus 24rem so the pair fits); when there is no description it moves under the title, with the cover beside both. Event covers are shown whole (`object-fit: contain` on their stock, capped at 70svh on phones), never cropped, since flyers carry their date in print.

### Navigation
Header sits directly on the wall: pin logo (1.9rem) plus "Molise Is" in Fraunces 850 at 1.45rem, two Lexend 500 text links that underline on hover and hide below 40rem, and the download link. Footer repeats the pin and name above an Ink-14% rule, with Stone Text links that turn Ink and underline on hover.

### Peel Stack (signature)
"Uno sopra l'altro": three large poster sheets (Luoghi, Eventi, Scoperte) stacked in one sticky viewport; as the section scrolls, each top sheet lifts (Lifted shadow, -3deg extra tilt) and peels up and off to the left, revealing the next with its real screen. Driven by a CSS view timeline over a 330vh track. Without `animation-timeline` support, under reduced motion, or below 52rem wide / 40rem tall, the sheets sit side by side as a static staggered column.

### Paste-in Motion
Posters that load in the first view are pasted once: from 10px up, 102.5% scale and the Lifted shadow to rest, 700ms on `cubic-bezier(0.16, 1, 0.3, 1)`, staggered 70ms by paste order. The resting state is the visible default. Under reduced motion there is no paste-in, no peel and no smooth scroll, and hovers keep their shadow and colour change but do not rise (`--lift: 0`).

## Do's and Don'ts

### Do:
- **Do** put content on paper: one of the seven stocks, 3px corners, Paper shadow, grain, a small tilt.
- **Do** use Ivory at full strength on Forest, Adriatic and Terra, and on-container text at full strength on the app containers.
- **Do** keep the primary action as the official store badges on a white info band, and any button Forest.
- **Do** set titles and names in Fraunces 850 with tight tracking and a `ch` cap; set small print in Lexend 700 capitals.
- **Do** print real app screens and use real Molise place and event names.
- **Do** keep motion to the paste-in on load and the peel stack, with a static fallback for reduced motion and unsupported browsers.

### Don't:
- **Don't** build the app-landing template: no split hero with a phone mockup, no row of equal feature cards.
- **Don't** round paper sheets beyond 3px or use pill buttons; rounding belongs to printed screens and official badges only.
- **Don't** use glass, blur or glow; depth is overlap, tilt and the paper shadow.
- **Don't** use Terra Cotta for the primary action or as a section's dominant colour.
- **Don't** fade text on coloured stock or containers with `color-mix` toward transparent.
- **Don't** replace the Ivory wall with the app's green-white surface.
