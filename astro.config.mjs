// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import sanity from '@sanity/astro';

// https://astro.build/config
export default defineConfig({
  base: '',
  build: {
    assets: 'astro',
  },
  output: 'static',
  integrations: [
    tailwind(),
    react(),
    sanity({
      projectId: 'h8zbt27a',
      dataset: 'production',
      studioBasePath: '/admin',
      // Set useCdn to false if you're building statically.
      useCdn: true,
      apiVersion: '2023-03-20',
    }),
  ],
  vite: {
    ssr: {
      noExternal: ["astro"],
    },
  },
});
