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
  
  // 提升感知速度
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
      // 關鍵優化 1：提高內嵌門檻到 10KB
      // 這能解決報告中提到的「轉譯封鎖要求」，將小型 CSS 直接塞進 HTML
      assetsInlineLimit: 10240, 
      
      // 關鍵優化 2：優化 CSS 分塊策略
      cssCodeSplit: true,
    },
  },

  adapter: cloudflare({
    // 如果你要衝分，建議暫時維持 passthrough，
    // 並「手動」將 avatar.webp 裁切成 88x88 像素
    imageService: 'passthrough' 
  })
});