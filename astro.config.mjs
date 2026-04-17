import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';
import tailwindcss from '@tailwindcss/vite';
import { siteConfig } from './src/config';
import cloudflare from "@astrojs/cloudflare";
import pagefind from "astro-pagefind";

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
        if (!features.blog && page.includes('/blog')) return false;
        if (!features.docs && page.includes('/docs')) return false;
        if (!features.changelog && page.includes('/changelog')) return false;
        if (!features.testimonials && page.includes('/testimonials')) return false;
        if (!features.roadmap && page.includes('/roadmap')) return false;
        return true;
      },
    }),
    pagefind(), // 啟用全站搜尋索引
  ],

  vite: {
    plugins: [tailwindcss()],
    // 確保 Vite 能正確處理 pagefind 的依賴
    ssr: {
      external: ['node:buffer', 'node:path', 'node:fs']
    }
  },

  adapter: cloudflare({
    // 確保 Cloudflare 環境下的 KV 綁定不會影響靜態建置
    platformProxy: {
      enabled: true,
    },
  })
});