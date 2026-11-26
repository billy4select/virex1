import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import fs from 'node:fs';
import path from 'node:path';

/**
 * 文章 sitemap lastmod：直接讀 content/blog 的 frontmatter。
 * 有 updatedDate 用更新日，沒有就用 publishedDate。
 * 靜態專題頁不給 lastmod（部署時檔案 mtime 不可靠，寧可省略）。
 */
function blogLastmodMap() {
	const dir = path.resolve('src/content/blog');
	const map = new Map();
	if (!fs.existsSync(dir)) return map;
	for (const file of fs.readdirSync(dir)) {
		if (!/\.(md|mdx)$/.test(file)) continue;
		const head = fs.readFileSync(path.join(dir, file), 'utf8').slice(0, 2500);
		const updated = head.match(/^updatedDate:\s*['"]?([0-9]{4}-[0-9]{2}-[0-9]{2})/m);
		const published = head.match(/^publishedDate:\s*['"]?([0-9]{4}-[0-9]{2}-[0-9]{2})/m);
		const date = updated?.[1] ?? published?.[1];
		if (date) map.set(`/blog/${file.replace(/\.(md|mdx)$/, '')}/`, date);
	}
	return map;
}
const blogLastmod = blogLastmodMap();


import icon from 'astro-icon';
import tailwindcss from '@tailwindcss/vite';
import { siteConfig } from './src/config';
import cloudflare from "@astrojs/cloudflare";
import { readFileSync } from 'node:fs';

const siteUrl = 'https://www.billy4select.com';

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
        // 文章頁帶 lastmod，讓 Google 知道內容被改寫過（大量改寫後尤其重要）
        const pathname = new URL(item.url).pathname;
        const lastmod = blogLastmod.get(pathname);
        if (lastmod) {
          item.lastmod = new Date(`${lastmod}T00:00:00Z`).toISOString();
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