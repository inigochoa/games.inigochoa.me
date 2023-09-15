import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import robotsTxt from 'astro-robots-txt';

// https://astro.build/config
export default defineConfig({
  integrations: [
    sitemap(),
    tailwind(),
    robotsTxt(),
  ],
  site: 'https://games.inigochoa.me'
});
