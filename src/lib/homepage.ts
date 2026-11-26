/**
 * 首頁編輯設定
 *
 * 首頁只組裝畫面，內容集中在這裡。
 * 之後改主題卡、教學卡、問題入口，不需要動 index.astro。
 */

import { topicAreas } from './topic-curation';

export interface HomeTopic {
  slug: string;
  name: string;
  question: string;
  description: string;
  href: string;
}

export interface HomeSeriesChapter {
  label: string;
  href: string;
}

export interface HomeSeries {
  name: string;
  theme: string;
  description: string;
  href: string;
  chapters: HomeSeriesChapter[];
}

export interface HomeQuestion {
  label: string;
  question: string;
  description: string;
  href: string;
}

/**
 * 首頁「從你感興趣的事情開始」四個探索入口
 * 每個入口直接連到一篇真正的文章（articleId），不再連到主題頁，
 * 避免讀者點進去後面對一整頁文章清單而迷路。
 */
export interface HomeExploreEntry {
  label: string;
  question: string;
  description: string;
  /** 對應 src/content/blog 的文章 id（檔名，不含 .md） */
  articleId: string;
}

/** 首頁的領域卡，直接由 topic-curation.ts 的 topicAreas 產生，不用維護第二份 */
export const homeTopics: HomeTopic[] = topicAreas.map((area) => ({
  slug: area.slug,
  name: area.name,
  question: area.question,
  description: area.summary,
  href: `/topics/${area.slug}/`,
}));

export const homeSeries: HomeSeries[] = [
  {
    name: '打造 AI 工作團隊',
    theme: 'AI 工作流程與工具',
    description:
      '從單一 AI 工具到可以分工、交接與重複執行的工作流程。',
    href: '/ai-work-team/',
    chapters: [
      { label: '先找出值得交給 AI 的事', href: '/ai-work-team/lesson-01/' },
      { label: '建立角色、職責與工作說明書', href: '/ai-work-team/lesson-03/' },
      { label: '讓不同 AI 員工一起工作', href: '/ai-work-team/lesson-05/' },
    ],
  },
  {
    name: '行銷從診斷開始',
    theme: '行銷策略與診斷',
    description:
      '從需求、管道、訊息三個角開始，學會用四段診斷找問題，再看廣告數字與 90 天計畫。',
    href: '/marketing/',
    chapters: [
      { label: '先搞懂需求、管道、訊息', href: '/marketing/three-corners/' },
      { label: '業績掉了先查哪一段', href: '/marketing/diagnosis/' },
      { label: '廣告數字怎麼看', href: '/marketing/ad-numbers/' },
    ],
  },
  {
    name: 'SEO 從零開始',
    theme: '內容與 SEO',
    description:
      '從搜尋機制、意圖、關鍵字、文章結構、內鏈到技術檢查，七章走完一輪可以自己執行的 SEO。',
    href: '/seo/',
    chapters: [
      { label: '先搞懂搜尋怎麼運作', href: '/seo/how-seo-works/' },
      { label: '判斷搜尋意圖', href: '/seo/search-intent/' },
      { label: '把文章串成集群', href: '/seo/internal-links/' },
    ],
  },
  {
    name: 'Threads 經營教學',
    theme: '自媒體與個人事業',
    description:
      '從帳號定位、內容規劃到互動與經營，建立一套做得到的內容節奏。',
    href: '/threads/',
    chapters: [
      { label: '先調整起步心態，不急著完美', href: '/threads/' },
      { label: '用人設與定位找到你的說法', href: '/threads/persona/' },
      { label: '從信任累積到自然變現', href: '/threads/monetize/' },
    ],
  },
];

/** 首頁「從你感興趣的事情開始」 */
export const homeExploreEntries: HomeExploreEntry[] = [
  {
    label: '工具',
    question: '有沒有值得使用的工具？',
    description: 'AI 工具、工作軟體、網站服務與數位資源。',
    articleId: 'free-ai-tools-workflow',
  },
  {
    label: '方法',
    question: '有沒有更好的方法？',
    description: '工作效率、學習策略、知識管理與實際應用。',
    articleId: 'personal-knowledge-system-minimal',
  },
  {
    label: '閱讀',
    question: '有什麼值得閱讀？',
    description: '書籍推薦、閱讀心得與值得認識的知識。',
    articleId: 'free-zero-price-business-models',
  },
  {
    label: '思考',
    question: '有什麼值得重新思考？',
    description: '行銷、商業、AI、工作與個人成長的觀察。',
    articleId: 'ai-era-capability-map',
  },
];

/** 舊版 homeQuestions 保留相容 */
export const homeQuestions: HomeQuestion[] = [
  {
    label: '職涯',
    question: '離開公司後，你還帶得走什麼？',
    description: '頭銜與預算多半留在公司；方法、信任與判斷，才是你能帶走的資產。',
    href: '/blog/mid-career-portable-assets/',
  },
  {
    label: '知識變現',
    question: '專業要怎麼變成有人願意付費的 offer？',
    description: '從能力盤點到第一個付費方案，把累積的經驗整理成市場聽得懂的價值。',
    href: '/blog/turn-expertise-into-market-value/',
  },
  {
    label: '個人品牌',
    question: '個人品牌怎麼做，才不是一直發文？',
    description: '重點不是曝光量，而是讓對的人理解你、信任你、在需要時想起你。',
    href: '/blog/personal-brand-trust-not-reach/',
  },
];

/** 首頁「近期值得探索」精選文章 ID */
export const homeFeaturedExplore = [
  'ai-workflow-start-with-tasks',
  'notebooklm-complete-guide-2026',
  'why-business-exists-nine-questions',
  'mid-career-portable-assets',
];

/** 首頁「一些值得思考的事」觀點文章 ID */
export const homeThinkingPosts = [
  'judgment-in-ai-era',
  'ai-era-capability-map',
  'mid-career-portable-assets',
  'personal-brand-trust-not-reach',
];

export const homepageConfig = {
  latestCount: 4,
  latestTitle: '最新文章',
  feedbackCount: 4,
  featuredExploreCount: 4,
  thinkingCount: 4,
};
