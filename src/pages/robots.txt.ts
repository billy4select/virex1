import type { APIRoute } from 'astro';
import { siteConfig } from '@/config';

export const GET: APIRoute = () => {
  const robotsTxt = `# robots.txt for ${siteConfig.name}

# 第一部分：通用規則 - 允許所有爬蟲抓取公開內容
User-agent: *
Allow: /
Disallow: /api/

# 第二部分：針對 AI 爬蟲的設定
# 雖然 User-agent: * 已經允許抓取，但明確標註可增加索引友善度
User-agent: GPTBot
Allow: /

User-agent: ClaudeBot
Allow: /

# Google-Extended 是 Google 用來訓練其 AI 模型（如 Gemini）的爬蟲
# 允許它有助於您的內容出現在 Google 的 AI 搜尋摘要中
User-agent: Google-Extended
Allow: /

# 第三部分：網站地圖
Sitemap: ${siteConfig.url}/sitemap-index.xml
`;

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};