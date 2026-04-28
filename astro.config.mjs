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
  
  // 【關鍵修正 1】改為 'always'。
  // Cloudflare Pages 預設會幫目錄補上斜槓。強制為 always 能讓 Astro 生成的連結
  // 與伺服器行為 100% 一致，直接消滅 307 轉向。
  trailingSlash: 'always',
  
  build: {
    // 【關鍵修正 2】保持 'directory'，這與 'always' 是最佳拍檔
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
      // 【關鍵修正 3】Sitemap 必須與網址行為一致，都要帶斜槓
      // 這樣搜尋引擎爬到的網址就是最終跳轉後的網址，解決 Canonical 報警
      serialize(item) {
        if (!item.url.endsWith('/')) {
          item.url += '/';
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