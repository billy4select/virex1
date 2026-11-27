/**
 * Entity SEO 單一基準事實（Single Source of Truth）
 *
 * 統一全站、/about/ 作者頁、文章署名與 JSON-LD @id 節點，
 * 讓 Google 與 AI 搜尋引擎能將「比利陳（Billy Chen）｜行銷裡的路人甲」
 * 與官網、著作、各外部平台串聯成同一個可驗證的實體。
 */

import { url as siteUrl, logo as siteLogo } from './site';

export interface ExternalProfile {
  id: string;
  name: string;
  handle: string;
  href: string;
  description: string;
}

export interface PublishedBook {
  title: string;
  href: string;
  description: string;
}

const baseUrl = siteUrl.replace(/\/$/, '');

export const entityConfig = {
  /** 全站與外部平台一致使用的唯一基準稱呼 */
  canonicalBrand: '比利陳｜行銷裡的路人甲',
  personName: '比利陳',
  alternateNames: [
    '比利陳 Billy Chen',
    'Billy Chen',
    '行銷裡的路人甲',
    '比利陳｜行銷裡的路人甲',
    '比利陳（Billy Chen）｜行銷裡的路人甲',
  ],

  /** 全站共用的固定 JSON-LD @id 節點 */
  ids: {
    person: `${baseUrl}/#person`,
    website: `${baseUrl}/#website`,
    profilePage: `${baseUrl}/about/#profile`,
    blog: `${baseUrl}/blog/#blog`,
  },

  siteUrl: `${baseUrl}/`,
  aboutUrl: `${baseUrl}/about/`,
  imageUrl: `${baseUrl}${siteLogo}`,
  email: 'billy4select@gmail.com',

  jobTitle: '整合行銷與產品實戰工作者／專欄作者',
  shortCredentials: '10 年以上 PM、品牌與廣告投放實戰經驗・獨立出版 5 本行銷與 AI 電子書',
  bio: '十多年 PM、品牌、整合行銷與廣告投放實戰經驗，跨足傳統產業、3C、商品企劃、會員經營與內容製作，並獨立出版五本行銷與 AI 電子書。所有內容來自工作經驗、閱讀研究與親自實測。',

  knowsAbout: [
    '整合行銷',
    '行銷策略',
    '品牌定位',
    '廣告投放',
    'SEO 搜尋引擎優化',
    'AI 工作流程',
    'NotebookLM',
    '內容行銷',
    '自媒體經營',
    '一人公司與知識變現',
  ],

  /** 公開外部平台（頁面展示用，與 sameAs 保持一致） */
  externalProfiles: [
    {
      id: 'portaly',
      name: 'Portaly 作品與連結總覽',
      handle: 'portaly.cc/billyselect4',
      href: 'https://portaly.cc/billyselect4',
      description: '五本獨立出版電子書、免費資源與全平台官方入口。',
    },
    {
      id: 'youtube',
      name: 'YouTube',
      handle: '@billyselect4',
      href: 'https://www.youtube.com/@billyselect4',
      description: 'AI、自媒體、行銷與商業相關的長篇拆解內容。',
    },
    {
      id: 'substack',
      name: 'Substack 電子報',
      handle: 'billy4select.substack.com',
      href: 'https://billy4select.substack.com/',
      description: '每週整理值得深入研究的 AI、商業與個人事業觀察。',
    },
    {
      id: 'kit',
      name: 'Kit 週報',
      handle: 'billy4select.kit.com',
      href: 'https://billy4select.kit.com/',
      description: '訂閱者專屬筆記、工具整理與新文章更新通知。',
    },
    {
      id: 'threads',
      name: 'Threads',
      handle: '@billy4select',
      href: 'https://www.threads.net/@billy4select',
      description: '日常行銷觀察、AI 實測心得與即時交流。',
    },
    {
      id: 'instagram',
      name: 'Instagram',
      handle: '@billy4select',
      href: 'https://www.instagram.com/billy4select',
      description: '圖文重點整理、思考框架與商業案例精華。',
    },
  ] satisfies ExternalProfile[],

  /** Person JSON-LD sameAs（涵蓋所有官方帳號與頻道 ID） */
  sameAs: [
    'https://portaly.cc/billyselect4',
    'https://www.youtube.com/@billyselect4',
    'https://www.youtube.com/channel/UCDC7CXKOTdac0ZzVyTSg6eQ',
    'https://billy4select.substack.com/',
    'https://substack.com/@billy4select',
    'https://billy4select.kit.com/',
    'https://www.threads.net/@billy4select',
    'https://www.instagram.com/billy4select',
  ],

  /** 獨立出版電子書（2025–2026），共五本 */
  books: [
    {
      title: '從零開始自媒體',
      href: 'https://portaly.cc/billyselect4/product/ioeupgO66jK7vB24yJzY',
      description:
        '以行銷理論為基礎的自媒體經營指南，從目標受眾、內容、市場測試到變現與長期系統。',
    },
    {
      title: '寫給大家的行銷書',
      href: 'https://portaly.cc/billyselect4/product/FlzuxW1QbZpC79Op2zhE',
      description:
        '用「減法」看行銷：回到流量、轉換、客單價與回購的基本架構，先診斷問題出在哪裡。',
    },
    {
      title: '人人都做得到的知識變現',
      href: 'https://portaly.cc/billyselect4/product/icSVZ0k6BHdItavIKf9X',
      description:
        '為素人設計的知識整理方法，把經驗與技能萃取、結構化，做成課程或電子書等小型知識產品。',
    },
    {
      title: 'AI時代職場生存法則',
      href: 'https://portaly.cc/billyselect4/product/jLrib0ZgLmXWs2WOTiy8',
      description:
        '把 AI 放進日常工作的方法：任務拆解、工具選擇、協作流程與判斷邊界，讓效率提升而不是多一份焦慮。',
    },
    {
      title: '流量騙局',
      href: 'https://portaly.cc/billyselect4/product/khu55lTbwebNRjRtUCQ3',
      description:
        '拆解流量數字的錯覺：曝光、點擊與轉換之間差在哪，哪些指標值得追，哪些只是好看。',
    },
  ] satisfies PublishedBook[],
} as const;
