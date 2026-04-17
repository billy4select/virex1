import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';
import tailwindcss from '@tailwindcss/vite';
import { siteConfig } from './src/config';
import cloudflare from "@astrojs/cloudflare";
import pagefind from "astro-pagefind";

// 這裡直接填入你的網站網址
const siteUrl = 'https://blog.billy4select.com';

export default defineConfig({
  site: siteUrl,
  output: 'static',

  integrations: [
    mdx(),
    icon(),
    sitemap({
      filter: (page) => {
        const { features } = siteConfig;

        // 根據你的功能設定來過濾不需要出現在地圖上的頁面
        if (!features.blog && page.includes('/blog')) return false;
        if (!features.docs && page.includes('/docs')) return false;
        if (!features.changelog && page.includes('/changelog')) return false;
        if (!features.testimonials && page.includes('/testimonials')) return false;
        if (!features.roadmap && page.includes('/roadmap')) return false;

        return true;
      },
    }),
    pagefind(), // 啟用 Pagefind 搜尋索引
  ],

  vite: {
    plugins: [tailwindcss()],
  },

  adapter: cloudflare()
});