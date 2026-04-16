import type { APIRoute } from 'astro';
import { siteConfig } from '@/config';

export const GET: APIRoute = () => {
  const robotsTxt = `# robots.txt for ${siteConfig.name}
# 確保 AI 搜尋與傳統搜尋都能完整抓取

User-agent: *
Allow: /

# 移除 /_astro/ 的限制，確保 CSS 與 JS 正常渲染
Disallow: /api/

# 明確歡迎 AI 爬蟲（選填，但具備戰略意義）
User-agent: GPTBot
Allow: /
User-agent: ClaudeBot
Allow: /
User-agent: Google-Extended
Allow: /

# Sitemap location
Sitemap: ${siteConfig.url}/sitemap-index.xml
`;

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};