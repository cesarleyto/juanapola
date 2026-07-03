import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // Ponemos el subdominio temporal
  site: 'https://juanapola.yaga.haus',
  
  integrations: [
    sitemap()
  ],
});