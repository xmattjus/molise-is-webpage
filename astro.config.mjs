import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Legal pages are placeholders: kept out of the sitemap (and noindex) until the final texts exist.
const draftPages = ['/privacy-policy/', '/termini-e-condizioni/'];

export default defineConfig({
  site: 'https://moliseis.it',
  output: 'static',
  integrations: [
    sitemap({
      filter: (page) => !draftPages.some((path) => page.endsWith(path)),
    }),
  ],
});
