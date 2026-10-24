import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';

export default defineConfig({
  site: 'https://votre-domaine.com',
  trailingSlash: 'always',
  integrations: [
    mdx(),
    // sitemap({
    //   filter: (page) => !page.includes('/admin/') && !page.endsWith('/rss.xml'),
    // }),
    tailwind({ applyBaseStyles: false }),
    icon({ include: { lucide: ['*'] } })
  ],
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true
    },
    drafts: true
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler'
        }
      }
    }
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport'
  },
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto'
  }
});