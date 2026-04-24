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
  
  // 【新增關鍵點 1】強制所有網址不帶結尾斜槓，對齊你的導覽列設定
  trailingSlash: 'never',
  
  build: {
    // 【新增關鍵點 2】確保編譯出來是 about.html，避免 Cloudflare 產生目錄型轉址
    format: 'file'
  },

  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },

  integrations: [
    mdx(),
    icon(),
    sitemap({
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