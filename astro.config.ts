import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';

// Check if we're building for production (GitHub Pages)
const isProduction = process.env.NODE_ENV === 'production';

export default defineConfig({
  site: 'https://automator85.github.io',
  base: isProduction ? '/leibnizdata' : '',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
  integrations: [
    tailwind(),
    sitemap(),
    icon({
      include: {
        tabler: ['*'],
        'flat-color-icons': ['*'],
      },
    }),
  ],
  vite: {
    ssr: {
      noExternal: ['@astrojs/prism'],
    },
  },
});
