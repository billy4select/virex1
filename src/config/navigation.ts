import type { Navigation } from '../lib/types';

export const navigation: Navigation = {
  header: {
    main: [
      { label: '這裡開始', href: '/start-here/' },
      { label: '教學', href: '/series/' },
      {
        label: '主題',
        href: '/topics/',
        children: [
          {
            label: 'AI 工作流程與工具',
            href: '/topics/ai-workflow/',
            description: '任務拆解、工具搭配、會議提案與資料分析',
          },
          {
            label: 'NotebookLM 實戰',
            href: '/topics/notebooklm/',
            description: '文件整理、提問指令、OCR 排錯與工具比較',
          },
          {
            label: '行銷、SEO 與廣告',
            href: '/topics/marketing/',
            description: '漏斗診斷、受眾定位、SEO 與廣告數據判讀',
          },
          {
            label: '商業模式與獲利',
            href: '/topics/business-model/',
            description: '需求驗證、單筆獲利結構、定價與策略分析',
          },
          {
            label: '職涯與 AI 時代',
            href: '/topics/career/',
            description: '35 歲後定位、能力盤點與 AI 時代判斷力',
          },
          {
            label: '學習與知識管理',
            href: '/topics/learning/',
            description: '30 天上手新領域、知識系統與清晰表達',
          },
          {
            label: '自媒體與個人事業',
            href: '/topics/personal-business/',
            description: '自媒體起步、Threads 經營、一人公司與變現',
          },
          {
            label: '書籍導讀',
            href: '/topics/book-guides/',
            description: '商管、行銷與思考類好書的完整拆解筆記',
          },
        ],
      },
      { label: '文章', href: '/blog/' },
      { label: '免費資源', href: '/resources/' },
      { label: '關於我', href: '/about/' },
    ],
    cta: [
      { label: '訂閱電子報', href: 'https://billy4select.substack.com/', variant: 'primary' },
    ],
  },
  footer: {
    product: [
      { label: '這裡開始', href: '/start-here/' },
      { label: '教學總覽', href: '/series/' },
      { label: '主題', href: '/topics/' },
      { label: '文章', href: '/blog/' },
      { label: '免費資源', href: '/resources/' },
      { label: '網站地圖', href: '/site-map/' },
      { label: '關於我', href: '/about/' },
      { label: '讀者回饋', href: '/testimonials/' },
    ],
    solutions: [
      { label: '《AI時代職場生存法則》', href: 'https://portaly.cc/billyselect4/product/jLrib0ZgLmXWs2WOTiy8' },
      { label: '《從零開始自媒體》', href: 'https://portaly.cc/billyselect4/product/ioeupgO66jK7vB24yJzY' },
      { label: '《寫給大家的行銷書》', href: 'https://portaly.cc/billyselect4/product/FlzuxW1QbZpC79Op2zhE' },
      { label: '《流量騙局》', href: 'https://portaly.cc/billyselect4/product/khu55lTbwebNRjRtUCQ3' },
      { label: '《人人都做得到的知識變現》', href: 'https://portaly.cc/billyselect4/product/icSVZ0k6BHdItavIKf9X' },
    ],
    resources: [
      { label: '訂閱電子報', href: 'https://billy4select.substack.com/' },
      { label: '打造 AI 團隊', href: '/ai-work-team/' },
      { label: 'Threads 教學', href: '/threads/' },
      { label: '行銷從診斷開始', href: '/marketing/' },
      { label: 'SEO 從零開始', href: '/seo/' },
      { label: 'NARRATIVE ENGINE', href: '/narrative-engine/' },
    ],
    company: [
      { label: 'YouTube', href: 'https://www.youtube.com/@billyselect4' },
      { label: 'Instagram', href: 'https://www.instagram.com/billy4select' },
      { label: 'Threads', href: 'https://www.threads.net/@billy4select' },
    ],
    legal: [
      { label: '隱私權政策', href: '/privacy/' },
      { label: '免責聲明', href: '/disclaimer/' },
      { label: '網站地圖', href: '/site-map/' },
    ],
  },
};
