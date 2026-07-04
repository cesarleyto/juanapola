import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // Ponemos el subdominio temporal
  site: 'https://juanapola.com',
  
  integrations: [
    sitemap()
  ],
});