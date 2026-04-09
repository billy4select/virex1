import type { Navigation } from '../lib/types';

export const navigation: Navigation = {
  header: {
    main: [
      { label: '首頁', href: '/' },
      { label: 'BLOG', href: '/blog' },
      { label: '關於我', href: '/about' },
      /* 以下保留原本的頁面連結，但換成你的電子書標題 */
      { label: '生存法則', href: '/features' }, // 原 Features 頁改為生存法則
      { label: '行銷書', href: '/pricing' },   // 原 Pricing 頁改為行銷書
      { label: '使用文件', href: '/docs', feature: 'docs' },
    ],
    cta: [
      { label: '訂閱電子報', href: 'https://billy4select.kit.com/profile/posts', variant: 'ghost' },
      { label: '加入群組', href: 'https://line.me/ti/g2/RSL2m-6lcwDLR6RJ-XfMGMZnomMixnbD3jrBUw', variant: 'primary' },
    ],
  },

  footer: {
    /* 網站分類 */
    product: [ 
      { label: '首頁', href: '/' },
      { label: 'BLOG', href: '/blog' },
      { label: '關於我', href: '/about' },
      { label: '隱私權政策', href: '/privacy' },
      { label: '免責聲明', href: '/terms' },
    ],
    /* 電子書分類 - 對應到原本的各種功能分頁 */
    solutions: [ 
      { label: '《AI時代職場生存法則》', href: '/features' }, 
      { label: '《從零開始自媒體》', href: '/customers' },
      { label: '《寫給大家的行銷書》', href: '/pricing' },
      { label: '《流量騙局》', href: '/enterprise' },
    ],
    /* 更多資源 - 對應到原本的資源頁面 */
    resources: [
      { label: '索取檔案', href: '/docs' },
      { label: '訂閱電子報', href: 'https://billy4select.kit.com/profile/posts' },
      { label: '更新日誌', href: '/changelog', feature: 'changelog' },
    ],
    company: [
      { label: '客戶見證', href: '/testimonials' },
      { label: '聯絡比利', href: '/contact' },
    ],
    legal: [
      { label: 'Privacy', href: '/privacy' },
      { label: 'Terms', href: '/terms' },
    ],
  },
};