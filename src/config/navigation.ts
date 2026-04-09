import type { Navigation } from '../lib/types';

export const navigation: Navigation = {
  /**
   * 頁首導覽 (Header Navigation)
   */
  header: {
    main: [
      { label: '產品功能', href: '/features' },
      { label: '方案價格', href: '/pricing' },
      { label: '展示 Demo', href: '/dashboard' },
      { label: '客戶案例', href: '/customers' },
      { label: '企業方案', href: '/enterprise' },
      { label: '使用文件', href: '/docs', feature: 'docs' },
      { label: '部落格', href: '/blog', feature: 'blog' },
    ],
    cta: [
      { label: '登入', href: '/login', variant: 'ghost' },
      { label: '立即開始', href: '/register', variant: 'primary' },
    ],
  },

  /**
   * 頁尾導覽 (Footer Navigation)
   */
  footer: {
    product: [
      { label: '功能介紹', href: '/features' },
      { label: '工具整合', href: '/integrations' },
      { label: '安全防護', href: '/security' },
      { label: '方案價格', href: '/pricing' },
      { label: '常見問題', href: '/faq' },
    ],
    solutions: [
      { label: '企業解決方案', href: '/enterprise' },
      { label: '客戶見證', href: '/customers' },
      { label: '預約展示', href: '/demo' },
      { label: '系統狀態', href: '/status' },
    ],
    resources: [
      { label: '技術文件', href: '/docs', feature: 'docs' },
      { label: '官方部落格', href: '/blog', feature: 'blog' },
      { label: '更新日誌', href: '/changelog', feature: 'changelog' },
      { label: '產品規劃', href: '/roadmap', feature: 'roadmap' },
    ],
    company: [
      { label: '關於我們', href: '/about' },
      { label: '人才招募', href: '/careers' },
      { label: '聯絡我們', href: '/contact' },
      { label: '客戶好評', href: '/testimonials', feature: 'testimonials' },
    ],
    legal: [
      { label: '隱私權政策', href: '/privacy' },
      { label: '服務條款', href: '/terms' },
    ],
  },
};