import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';

export default defineConfig({
  site: 'https://kryshandy.com',
  trailingSlash: 'always',
  integrations: [
    mdx(),
    sitemap({
      filter: page => !page.endsWith('/rss.xml'),
    }),
    tailwind({ applyBaseStyles: false }),
    icon({ include: { lucide: ['*'] } }),
  ],
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
    },
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
});
