import type { Navigation } from '../lib/types';

export const navigation: Navigation = {
  /**
   * 頁首導覽 (Header) - 這裡放最常用的
   */
  header: {
    main: [
      { label: '首頁', href: '/' },
      { label: 'BLOG', href: '/blog' },
      { label: '關於我', href: '/about' },
      { label: '訂閱電子報', href: 'https://billy4select.kit.com/profile/posts' },
    ],
    cta: [
      { label: '加入 Line 群組', href: 'https://line.me/ti/g2/RSL2m-6lcwDLR6RJ-XfMGMZnomMixnbD3jrBUw?utm_source=invitation&utm_medium=link_copy&utm_campaign=default', variant: 'primary' },
    ],
  },

  /**
   * 頁尾導覽 (Footer) - 這裡放完整的連結分類
   */
  footer: {
    product: [ // 改為「網站」
      { label: '首頁', href: '/' },
      { label: 'BLOG', href: '/blog' },
      { label: '關於我', href: '/about' },
      { label: '隱私權政策', href: '/privacy' },
      { label: '免責聲明', href: '/terms' },
    ],
    solutions: [ // 改為「電子書」
      { label: '《AI 時代職場生存法則》', href: '/ebook-ai-career' },
      { label: '《從零開始自媒體》', href: '/ebook-self-media' },
      { label: '《寫給大家的行銷書》', href: '/ebook-marketing' },
      { label: '《流量騙局》', href: '/ebook-traffic-scam' },
    ],
    resources: [ // 改為「更多資源」
      { label: '索取檔案', href: '/resources' },
      { label: '訂閱電子報', href: 'https://billy4select.kit.com/profile/posts' },
    ],
    company: [], // 留空，或放你其他的社群連結
    legal: [],
  },
};