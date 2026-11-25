# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Residents of Molise and visitors to the region, in equal measure. Residents want to know what is happening nearby this weekend or in the coming days, and to find places they have not been to yet. Visitors, whether passing through or on holiday, want to know what is worth seeing and doing around them. Both use the app on their phone, often already on the move in the region.

The website (`moliseis.it`) is the app's landing page. Its visitors are deciding whether to install Molise Is.

## Product Purpose

Molise Is is a free mobile app for iPhone and Android that collects places, events and small discoveries from across Molise. It is a starting point, not an exhaustive guide: open it and find something worth seeing, doing or remembering.

For the website, success means a visitor understands what the app offers and installs it from the App Store or Google Play.

## Positioning

- **All in one place:** places and events from the whole region in a single app, so people do not have to chase dozens of sources (municipal pages, social posts, posters).
- **Editorial curation:** the content is selected and written by people, not aggregated automatically.
- **Community contributions:** users suggest places and events they think deserve to be included.

Whether the project presents itself as independent, institutional or commercial is not stated. Do not claim any of these.

## Capabilities and Constraints

App capabilities confirmed by current copy:

- **Luoghi:** villages, nature, viewpoints and small local businesses.
- **Eventi:** what is on today, at the weekend and in the coming days.
- **Le tue scoperte:** save favourites and suggest places or events.

Website constraints:

- Static Astro site (`output: 'static'`), no client-side JavaScript framework, native CSS. Deployed with Cloudflare Workers Static Assets from `dist/`.
- Routes: `/`, `/privacy-policy`, `/termini-e-condizioni`.
- All copy is in Italian (`lang="it"`).
- Store links: App Store `https://apps.apple.com/it/app/molise-is/id6747610311`, Google Play `https://play.google.com/store/apps/details?id=it.benitomatteobercini.moliseis&hl=it`.

Open decisions:

- The privacy policy and terms pages contain only editorial placeholders. They are not legal text.
- The contact email address still needs to be verified.
- There is no Open Graph image yet.

## Brand Commitments

- Name: **Molise Is**.
- Motto: **L'inatteso che ti aspetta**.
- Voice, from the existing copy: plain, warm, understated, second person (`tu`). The site avoids tourist superlatives and frames Molise as made of detours, festivals (*sagre*), trails, villages and things found almost by chance (*Il Molise non è una lista da completare*).
- **Logo (confirmed):** the multicolour map pin with the white silhouette of Molise, the app icon at `public/app-icon.webp`. It is the site logo and the favicon. The emblem drawn in `docs/brand/brand-color-system.png` (hills, village, waves) is not the logo.
- **Typefaces (binding):** Fraunces for titles and Lexend for text, the same as the app.
- **Colour (binding):** brand seeds Forest `#087A55`, Adriatic `#176B87`, Terra `#B84E23`; Ivory `#F7F4EC` stays the site background; tinted surfaces use the app's Material container tokens (FlexSeedScheme export). Buttons keep the Forest seed.
- **Store badges:** official Italian badges only (`public/badges/`), used under Apple's and Google's badge guidelines; never redrawn.
- **Copy:** the site copy may be rewritten for impact, keeping the name, the motto and the voice, and using only true facts.

## Evidence on Hand

- Real app screenshots are in `public/screenshots/` (6 smartphone, 6 tablet, light theme, Italian UI): home with suggestions and categories, map, place detail, favourites, events calendar. They show real places and events (e.g. Basilica Minore dell'Addolorata in Castelpetroso, Villa Princeton in Pettoranello del Molise, Lago Turchese in Castel San Vincenzo, Estatissima 2025) and the categories Natura, Storia, Folklore, Cibo, Attrazioni, Esperienze.
- Photographs of Molise, owned or licensed, are available but not yet in the repository. The only real photography on hand is inside the app screenshots.
- The official logo is available (see Brand Commitments).
- No download counts, store ratings, reviews, testimonials or press are available. Do not invent any of them.

## Product Principles

1. **A starting point, not an encyclopedia.** Help people find one good thing to do, not everything that exists.
2. **Close to home and close at hand.** Serve the person who is already in Molise, or about to be, with what is around them now.
3. **Curated, and open to the community.** People choose what goes in, and users can suggest what is missing.
4. **Honest about a small region.** Show Molise's real, unexpected texture without overselling it.
