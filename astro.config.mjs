import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';
import tailwindcss from '@tailwindcss/vite';
import { siteConfig } from './src/config';
import cloudflare from "@astrojs/cloudflare";

const siteUrl = 'https://blog.billy4select.com';

export default defineConfig({
  site: siteUrl,
  
  // 【修正 1】設定為 ignore，讓 Astro 靈活處理，配合 Cloudflare Pages 的預設行為
  trailingSlash: 'ignore',
  
  build: {
    // 【修正 2】改回 'directory'。這會產出 /about/index.html，
    // 讓網址變成漂亮的 /about，徹底解決 .html 轉向問題
    format: 'directory'
  },

  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },

  integrations: [
    mdx(),
    icon(),
    sitemap({
      // 【修正 3】強制 Sitemap 產出的網址不帶結尾斜槓，對齊 SEO 偏好
      serialize(item) {
        if (item.url.endsWith('/')) {
          item.url = item.url.slice(0, -1);
        }
        return item;
      },
      filter: (page) => {
        const { features } = siteConfig;
        if (!features.blog && page.includes('/blog')) return false;
        if (!features.docs && page.includes('/docs')) return false;
        if (!features.changelog && page.includes('/changelog')) return false;
        if (!features.testimonials && page.includes('/testimonials')) return false;
        if (!features.roadmap && page.includes('/roadmap')) return false;
        return true;
      },
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
    build: {
      assetsInlineLimit: 10240, 
      cssCodeSplit: true,
    },
  },

  adapter: cloudflare({
    imageService: 'passthrough' 
  })
});