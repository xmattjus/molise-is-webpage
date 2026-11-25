---
name: Molise Is
description: L'inatteso che ti aspetta
colors:
  forest: "#087a55"
  adriatic: "#176b87"
  terra-cotta: "#b84e23"
  ivory: "#f7f4ec"
  surface: "#fffdf8"
  stone: "#6b726d"
  ink: "#17211c"
  forest-tint: "#cce8da"
  adriatic-tint: "#c9e3ed"
  terra-cotta-tint: "#f0d2c3"
typography:
  display:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "clamp(3.55rem, 8vw, 7.5rem)"
    fontWeight: 650
    lineHeight: 0.98
    letterSpacing: "-0.045em"
  headline:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "clamp(2.5rem, 5vw, 4.7rem)"
    fontWeight: 650
    lineHeight: 0.98
    letterSpacing: "-0.045em"
  title:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "clamp(2rem, 3vw, 3.1rem)"
    fontWeight: 650
    letterSpacing: "-0.04em"
  body:
    fontFamily: "Lexend, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
  lede:
    fontFamily: "Lexend, system-ui, sans-serif"
    fontSize: "clamp(1.05rem, 1.5vw, 1.22rem)"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Lexend, system-ui, sans-serif"
    fontSize: "0.78rem"
    fontWeight: 700
    letterSpacing: "0.14em"
rounded:
  sm: "0.75rem"
  md: "1.25rem"
  lg: "2rem"
  pill: "999px"
spacing:
  gutter: "1rem"
  section: "clamp(4.75rem, 9vw, 8.5rem)"
  container: "74rem"
components:
  button-primary:
    backgroundColor: "{colors.forest}"
    textColor: "#ffffff"
    rounded: "{rounded.pill}"
    padding: "0.8rem 1.25rem"
    height: "3.25rem"
  button-primary-hover:
    backgroundColor: "color-mix(in srgb, #087a55 90%, black)"
  button-secondary:
    backgroundColor: "color-mix(in srgb, #fffdf8 75%, transparent)"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0.8rem 1.25rem"
    height: "3.25rem"
  store-button:
    backgroundColor: "{colors.ivory}"
    textColor: "{colors.ink}"
    rounded: "1rem"
    padding: "0.75rem 1rem"
  feature-card:
    backgroundColor: "{colors.forest-tint}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "clamp(1.3rem, 2vw, 2rem)"
  cta-panel:
    backgroundColor: "{colors.forest}"
    textColor: "#ffffff"
    rounded: "clamp(2rem, 4vw, 4rem)"
    padding: "clamp(2rem, 5vw, 5rem)"
---

# Design System: Molise Is

## Overview

**Creative North Star: "Cartolina dal Borgo"**

The site reads like a postcard sent from a village you have just found: warm ivory paper, a large serif greeting, and the colours of the land and sea of Molise, with forest green, Adriatic blue and roof-tile terracotta. Stylised landscapes (hills, a sun, rows of houses with terracotta roofs) and slightly rotated organic blobs replace stock photography. The result feels familiar and handmade rather than promotional.

The layout is generous and calm. Sections breathe on large vertical padding, headlines are oversized and tightly set, and body copy stays muted and short. Depth comes from tonal blocks and a few soft shadows, never from glass or glow. Interaction is gentle: elements lift by 2px on hover and nothing flashes.

It must never look like an institutional portal (crests, banners, dense link grids) or a tech startup (purple gradients, neon dark mode, glassmorphism as a style).

**Key Characteristics:**
- Warm ivory canvas with ink text; one dark ink band for contrast.
- Fraunces display serif at very large sizes with tight negative tracking; Lexend for everything else.
- Three earth-and-sea accents, each with its own pale tint.
- Rounded, organic forms: pill buttons, 2rem cards, irregular blob shapes, a few small rotations.
- Illustration made in CSS shapes, not photographs (until real assets arrive).

## Colors

A warm, earthy palette: three accents taken from the region's landscape, set on ivory paper with near-black green ink. The brand colour guide (`public/brand-color-system.png`) is the source of these values and their hierarchy: Forest primary, Adriatic secondary, Terra tertiary, used sparingly.

### Primary
- **Forest** (`forest`): the brand's voice. Primary buttons, the download panel, the user avatar and the featured card in the app preview, the front hill in the landscape, and text selection.

### Secondary
- **Adriatic** (`adriatic`): the sea and events. Event date badges, the back of the landscape sky, the cool hero glow, and the focus ring (mixed 70% with white).

### Tertiary
- **Terra Cotta** (`terra-cotta`): small warm signals. Eyebrow labels and their leading rule, tiny uppercase labels, map pins and village roofs. It is never used for large fills.

### Neutral
- **Ivory** (`ivory`): the page background and the text colour on the ink band; also the store buttons.
- **Surface** (`surface`): a slightly lighter paper for raised surfaces such as the phone screen and the secondary button fill.
- **Stone** (`stone`): muted text (ledes, availability notes, footer).
- **Ink** (`ink`): body text, the feature band background, and the phone frame.
- **Border:** ink at 13% opacity (`color-mix(in srgb, ink 13%, transparent)`) for hairlines and outlines.

### Tints
- **Forest tint**, **Adriatic tint**, **Terra Cotta tint** (`forest-tint`, `adriatic-tint`, `terra-cotta-tint`): pale backgrounds for the three feature cards (Luoghi, Eventi, Le tue scoperte), one accent per card.

### Named Rules
**The Terracotta Pinch Rule.** Terra Cotta is used sparingly, for labels, pins, badges and callouts (the brand guide's "accenti, callout, badge"). It is never the primary call to action: that is Forest.

**The Mix, Don't Invent Rule.** New shades come from `color-mix()` on existing tokens (with white, black, ivory or transparent), as the incumbent code does. Do not add new hex values.

## Typography

**Display Font:** Fraunces (with Georgia, serif), variable optical size, weights 500–750
**Body Font:** Lexend (with system-ui), weights 400–700

**Character:** a soft, slightly old-style serif with personality for the greeting, paired with a highly legible, friendly sans for everything practical.

### Hierarchy
- **Display** (650, clamp 3.55–7.5rem, line-height 0.98, −0.045em): the hero H1 only, max width 9.6ch.
- **Headline** (650, clamp 2.5–4.7rem, line-height 0.98, −0.045em): section titles, max width 12ch.
- **Title** (Fraunces 650, clamp 2–3.1rem, −0.04em): feature card headings.
- **Lede** (Lexend 400, clamp 1.05–1.22rem, Stone): intro paragraphs, max width 38rem.
- **Body** (Lexend 400, 1rem, line-height 1.65).
- **Label** (Lexend 700, 0.78rem, 0.14em, uppercase, Terra Cotta): eyebrows, preceded by a 1.5rem × 2px rule in the same colour.

### Named Rules
**The Short Headline Rule.** Display and section titles are capped in `ch` (9.6ch and 12ch) so they break into two or three stacked lines, like a postcard caption.

**The Serif Speaks, Sans Explains Rule.** Fraunces is for names, titles and numbers. Lexend carries every sentence, button and label.

## Layout

A single centred container of `min(100% − 2rem, 74rem)`, with a 1rem gutter on each side. Sections use a fluid vertical rhythm of `clamp(4.75rem, 9vw, 8.5rem)`.

Content sits in two-column grids with slightly unequal fractions (1.02fr/0.98fr in the hero, 1fr/0.72fr in the feature heading, 1.05fr/0.95fr in the editorial band, 1.1fr/0.9fr in the CTA). The feature cards use three equal columns with a 1rem gap. Gaps between columns are fluid, up to 7–8rem.

Breakpoints: 64rem (the hero stacks), 52rem (feature, editorial and CTA grids stack), 44rem (header nav collapses to the CTA only), 40rem (the footer stacks), 34rem and 30rem (buttons and store buttons go full width).

The header is absolutely positioned over the hero, not sticky. In-page anchors use a 2rem scroll margin and smooth scroll, which is disabled under reduced motion.

## Elevation & Depth

Mostly flat, with tonal layering: ivory page, lighter surface, pale tinted cards, and one ink band. Shadows are soft, warm-tinted with ink, and appear only on elements that physically float: the phone mock-up, floating cards and the primary button. Decorative depth comes from large blurred radial glows in the hero, at about 17–18% of the accent colour.

### Shadow Vocabulary
- **Soft** (`box-shadow: 0 22px 60px rgb(23 33 28 / 0.12)`): the large floating object (the phone).
- **Card** (`box-shadow: 0 12px 30px rgb(23 33 28 / 0.09)`): small floating cards.
- **Button glow** (`box-shadow: 0 10px 25px color-mix(in srgb, forest 24%, transparent)`): the primary button only.

### Named Rules
**The Paper, Not Glass Rule.** Depth comes from paper tones and soft shadows. Translucency (`backdrop-filter`) appears only on the small floating cards over illustration, never as a general surface style.

## Shapes

Soft and organic. Corners scale with size: 0.75rem (small), 1–1.25rem (store buttons, mini tiles, floating cards), 2rem (feature cards), up to 4rem on the CTA panel, and fully pill-shaped buttons. Illustrative shapes use irregular blob radii (for example `47% 53% 42% 58% / 38% 43% 57% 62%`), and objects are tilted by 2–3° (the phone, floating cards) or 12–18° (background blobs) to feel placed by hand. Hills are `clip-path` polygons; houses are rectangles with triangular terracotta roofs.

## Components

### Buttons
Soft and welcoming: rounded, warm and lifted, inviting without insisting.
- **Shape:** fully rounded pill (999px), minimum height 3.25rem, label in Lexend 650.
- **Primary:** Forest background, white text, with the forest button glow.
- **Hover / Focus:** lifts by 2px (`translateY(-2px)`, 160ms ease); primary darkens to Forest mixed 90% with black. Focus shows a 3px Adriatic-white outline with a 4px offset.
- **Secondary:** semi-transparent surface fill with an ink 13% border; on hover the border strengthens to ink 25%.
- **Mobile:** below 34rem, hero buttons go full width.

### Store buttons
- Ivory pills with 1rem corners and a two-line label ("Scarica su" in 0.58rem Stone, store name in 0.9rem bold), sitting on the Forest CTA panel. They lift by 2px on hover and go full width below 30rem.

### Cards / Containers
- **Feature cards:** 2rem corners, one pale accent tint each, minimum height 20rem (14rem on mobile), with the content pushed apart vertically (a number at the top, the title and text at the bottom). No border and no shadow.
- **CTA panel:** a Forest block with corners from 2rem to 4rem, white text, and a light green eyebrow (`#bdebd7`).
- **Ink band:** a full-bleed Ink section with Ivory text and a lede at 66% Ivory, used to frame the feature cards.

### Navigation
- The header is transparent and sits over the hero. The brand is the app icon (3rem) plus "Molise Is" in Fraunces 700. Links are Lexend 550 at 0.9rem with no underline, followed by a primary pill CTA. Below 44rem only the CTA remains (a smaller pill, 2.8rem high).
- **Footer:** separated by an ink 13% hairline, with the Fraunces brand on the left and Stone 0.8rem links on the right. Links underline on hover.

### App preview (signature)
A CSS-drawn phone (8px Ink frame, 3rem corners, Surface screen, tilted 3°) between two blobs (Adriatic and Terra Cotta tints), with two floating cards (an event date badge and a terracotta place pin) tilted the opposite way. It is a stand-in to be replaced with real app screenshots, which should keep the tilt, blobs and floating-card composition.

### Landscape illustration (signature)
A blob-shaped frame in Adriatic mixed with white, a warm sun disc, two Forest hills (a lighter one behind) and a row of ivory houses with terracotta roofs. It is a stand-in to be replaced with real photographs of Molise.

## Do's and Don'ts

### Do:
- **Do** build every colour from the six brand tokens, their three tints, or `color-mix()` of them.
- **Do** set titles in Fraunces 650 with tight negative tracking and a `ch` max width; keep everything else in Lexend.
- **Do** keep corners generous (pill buttons, 2rem cards) and tilt floating objects by 2–3°.
- **Do** use soft ink-tinted shadows only on elements that float, and keep hover feedback to a 2px lift over 160ms.
- **Do** respect `prefers-reduced-motion` (smooth scroll and transitions off) and keep the visible Adriatic focus ring.

### Don't:
- **Don't** make it look like an institutional portal: no crests, banners, dense link grids or bureaucratic tables.
- **Don't** make it look like a tech startup: no purple gradients, neon dark mode, or glassmorphism as a surface style.
- **Don't** use Terra Cotta for the primary CTA or as the dominant colour of a page section.
- **Don't** introduce sharp corners or hard-edged, heavy drop shadows.
