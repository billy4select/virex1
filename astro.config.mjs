import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';
import tailwindcss from '@tailwindcss/vite';
import { siteConfig } from './src/config';
import cloudflare from "@astrojs/cloudflare";

// 直接寫死你的正式網址，確保 Sitemap 生成絕對正確
const siteUrl = 'https://blog.billy4select.com';

export default defineConfig({
  // 使用正確的網址
  site: siteUrl,

  integrations: [
    mdx(),
    icon(),
    sitemap({
      filter: (page) => {
        const { features } = siteConfig;
        // 根據功能開關過濾頁面
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
  },

  // 如果你是部署到 Cloudflare Pages，保留這行；如果是 GitHub Pages 則可移除
  adapter: cloudflare()
});