import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { existsSync, readFileSync } from 'node:fs';

const dist = new URL('./dist/', import.meta.url);

// Any page that renders <meta name="robots" content="noindex"> stays out of the sitemap
// (draft legal pages, events without a description). Runs after the HTML is written.
const isIndexable = (page) => {
  const file = new URL(`.${new URL(page).pathname}index.html`, dist);
  return !existsSync(file) || !readFileSync(file, 'utf8').includes('<meta name="robots" content="noindex"');
};

export default defineConfig({
  site: 'https://moliseis.it',
  output: 'static',
  integrations: [sitemap({ filter: isIndexable })],
});
