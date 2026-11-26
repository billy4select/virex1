import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';
import tailwindcss from '@tailwindcss/vite';
import { siteConfig } from './src/config';
import cloudflare from "@astrojs/cloudflare";
import { readFileSync } from 'node:fs';

const siteUrl = 'https://blog.billy4select.com';

/**
 * public/ 底下的靜態專題頁不會被 @astrojs/sitemap 自動收錄，
 * 由 tools/collect-static-urls.mjs 先產出 static-urls.json，這裡讀進來補進 sitemap。
 * 檔案不存在時退回空陣列，不會擋住 build。
 */
const staticUrls = (() => {
  try {
    return JSON.parse(readFileSync(new URL('./static-urls.json', import.meta.url), 'utf8'));
  } catch {
    return [];
  }
})();

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
      // 靜態專題頁（ai-work-team / threads / narrative-engine 共 65 頁）
      customPages: staticUrls,
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
        // 舊分類頁已 301 到 /topics/，不再放進 sitemap。
        if (page.includes('/blog/category/')) return false;
        // 舊分頁網址改為導向 /blog/?page=N，不再放進 sitemap。
        if (page.includes('/blog/page/')) return false;
        // 標籤頁僅為文章列表，noindex，不進 sitemap。
        if (page.includes('/blog/tag/')) return false;
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