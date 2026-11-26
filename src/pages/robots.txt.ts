import type { APIRoute } from 'astro';
import { siteConfig } from '@/config';

export const GET: APIRoute = () => {
  const robotsTxt = `# robots.txt for ${siteConfig.name}

# 第一部分：通用規則與內容訊號 (符合歐盟版權規範)
# 允許搜尋引擎索引，但禁止直接拿內容去「訓練」AI 模型
User-agent: *
Content-Signal: search=yes,ai-train=no
Allow: /
Disallow: /api/

# 第二部分：針對特定 AI 爬蟲的「統一」設定
# 允許這些爬蟲有助於你的內容出現在 AI 搜尋結果中（帶連結）
User-agent: GPTBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Google-Extended
Allow: /

# 第三部分：阻擋高負載或惡意爬蟲 (避免吃掉你的頻寬)
User-agent: Amazonbot
Disallow: /

User-agent: Bytespider
Disallow: /

User-agent: CCBot
Disallow: /

# 第四部分：網站地圖
Sitemap: ${siteConfig.url}/sitemap-index.xml
`;

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};