/**
 * 首頁編輯設定
 *
 * 首頁只組裝畫面，內容集中在這裡。
 * 之後改主題卡、專題卡、問題入口，不需要動 index.astro。
 */

export interface HomeTopic {
  slug: string;
  name: string;
  question: string;
  description: string;
  href: string;
  category: string;
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

/** 首頁「從你感興趣的事情開始」四個探索入口 */
export interface HomeExploreEntry {
  label: string;
  question: string;
  description: string;
  href: string;
  relatedHref?: string;
}

export const homeTopics: HomeTopic[] = [
  {
    slug: 'work-efficiency',
    name: '工作與效率',
    question: '如何用更好的方法，完成工作與生活中的事情？',
    description:
      '任務安排、工作系統、時間分配，以及 AI 工具與自動化，整理真正能放進日常的方法。',
    href: '/topics/work-efficiency/',
    category: 'work-efficiency',
  },
  {
    slug: 'learning-capability',
    name: '學習與能力',
    question: '如何持續學習，培養真正用得上的能力？',
    description:
      '判斷該學什麼、建立學習方法，到刻意練習與知識管理，幫助你把知識轉成實際能力。',
    href: '/topics/learning-capability/',
    category: 'learning-capability',
  },
  {
    slug: 'business-marketing',
    name: '商業與行銷',
    question: '如何理解市場、顧客與一門生意的運作？',
    description:
      '需求驗證、客群與商業模式，到行銷診斷與品牌信任，整理看懂市場與生意的方法。',
    href: '/topics/business-marketing/',
    category: 'business-marketing',
  },
  {
    slug: 'personal-development',
    name: '個人發展與事業',
    question: '如何運用自己的能力與經驗，探索更多發展機會？',
    description:
      '職涯策略、可攜帶資產、個人品牌與知識變現，探索專業如何持續累積與發展。',
    href: '/topics/personal-development/',
    category: 'personal-development',
  },
];

export const homeSeries: HomeSeries[] = [
  {
    name: '打造 AI 工作團隊',
    theme: '工作與效率',
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
    name: 'Threads 經營教學',
    theme: '個人發展與事業',
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
    href: '/resources/',
    relatedHref: '/blog/ai-tool-evaluation/',
  },
  {
    label: '方法',
    question: '有沒有更好的方法？',
    description: '工作效率、學習策略、知識管理與實際應用。',
    href: '/topics/work-efficiency/',
    relatedHref: '/blog/ai-workflow-start-with-tasks/',
  },
  {
    label: '閱讀',
    question: '有什麼值得閱讀？',
    description: '書籍推薦、閱讀心得與值得認識的知識。',
    href: '/topics/learning-capability/',
    relatedHref: '/blog/personal-knowledge-system-minimal/',
  },
  {
    label: '思考',
    question: '有什麼值得重新思考？',
    description: '行銷、商業、AI、工作與個人成長的觀察。',
    href: '/topics/business-marketing/',
    relatedHref: '/blog/why-business-exists-nine-questions/',
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
  latestCount: 6,
  latestTitle: '最新文章',
  feedbackCount: 4,
  featuredExploreCount: 4,
  thinkingCount: 4,
};
