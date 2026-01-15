import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://froggered.github.io',
  base: '/All-Saints',
  integrations: [tailwind()],
  output: 'static',
});
