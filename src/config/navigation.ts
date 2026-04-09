import type { Navigation } from '../lib/types';

export const navigation: Navigation = {
  /**
   * 頁首導覽 (Header Navigation)
   * 保留了所有原始連結，僅將 Label 替換為你的業務內容
   */
  header: {
    main: [
      { label: '生存法則 (Features)', href: '/features' },
      { label: '行銷書 (Pricing)', href: '/pricing' },
      { label: '展示 (Demo)', href: '/dashboard' },
      { label: '讀者見證 (Customers)', href: '/customers' },
      { label: '企業合作 (Enterprise)', href: '/enterprise' },
      { label: '使用文件 (Docs)', href: '/docs', feature: 'docs' },
      { label: '部落格 (Blog)', href: '/blog', feature: 'blog' },
    ],
    cta: [
      { label: '登入', href: '/login', variant: 'ghost' },
      { label: '訂閱電子報', href: 'https://billy4select.kit.com/profile/posts', variant: 'primary' },
    ],
  },

  /**
   * 頁尾導覽 (Footer Navigation)
   * 5 欄完整保留，將你的舊站分類與模板分類完美融合
   */
  footer: {
    product: [ // 原本的產品欄位，放你的網站核心連結
      { label: '首頁', href: '/' },
      { label: '功能介紹 (Features)', href: '/features' },
      { label: '工具整合 (Integrations)', href: '/integrations' },
      { label: '安全性 (Security)', href: '/security' },
      { label: '方案價格 (Pricing)', href: '/pricing' },
    ],
    solutions: [ // 原本的解決方案，放你的電子書與服務
      { label: '《AI時代職場生存法則》', href: '/enterprise' },
      { label: '讀者見證 (Customers)', href: '/customers' },
      { label: '預約展示 (Demo)', href: '/demo' },
      { label: '系統狀態 (Status)', href: '/status' },
    ],
    resources: [ // 資源欄位
      { label: '索取檔案 (Docs)', href: '/docs', feature: 'docs' },
      { label: '部落格 (Blog)', href: '/blog', feature: 'blog' },
      { label: '更新日誌 (Changelog)', href: '/changelog', feature: 'changelog' },
      { label: '產品規劃 (Roadmap)', href: '/roadmap', feature: 'roadmap' },
    ],
    company: [ // 公司/個人資訊
      { label: '關於比利 (About)', href: '/about' },
      { label: '人才招募 (Careers)', href: '/careers' },
      { label: '聯絡我 (Contact)', href: '/contact' },
      { label: '客戶好評 (Testimonials)', href: '/testimonials', feature: 'testimonials' },
    ],
    legal: [ // 法律條款
      { label: '隱私權政策 (Privacy)', href: '/privacy' },
      { label: '服務條款 (Terms)', href: '/terms' },
    ],
  },
};