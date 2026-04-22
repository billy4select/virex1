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
  
  // 效能優化：強制預取（Prefetch）策略，讓使用者點擊連結時幾乎秒開
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport', // 當連結出現在視窗內時自動預取
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
      // 效能優化：合併小型 CSS 檔案，減少 HTTP 請求數（解決你報告中的鏈結關鍵要求問題）
      assetsInlineLimit: 4096, 
    },
  },

  // 確保使用 Cloudflare 的 SSR 或靜態模式
  adapter: cloudflare({
    imageService: 'passthrough' // 若不需要 Cloudflare 特別轉換圖片，維持原樣最快
  })
});