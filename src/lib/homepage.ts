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

export const homeTopics: HomeTopic[] = [
  {
    slug: 'ai-workflow',
    name: 'AI 工作流程與工具',
    question: '怎麼把 AI 放進日常工作，而不是只停在試用？',
    description: '任務拆解、工具選擇、提案會議與知識沉澱。',
    href: '/topics/ai-workflow/',
    category: 'ai-workflow',
  },
  {
    slug: 'notebooklm',
    name: 'NotebookLM 實戰',
    question: '怎麼用 NotebookLM 讀文件、做研究，又不踩坑？',
    description: '入門、上傳準備、提問方式與常見問題。',
    href: '/topics/notebooklm/',
    category: 'notebooklm',
  },
  {
    slug: 'business-marketing',
    name: '商業與行銷',
    question: '如何理解市場、顧客與一門生意的運作？',
    description: '需求驗證、商業模式、受眾定位與行銷診斷。',
    href: '/topics/business-marketing/',
    category: 'business-marketing',
  },
  {
    slug: 'career-business',
    name: '職涯與個人事業',
    question: '如何把能力與經驗，變成可以帶走的資產與收入？',
    description: '能力盤點、職涯轉型、個人品牌與知識變現。',
    href: '/topics/career-business/',
    category: 'career-business',
  },
];

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
    name: 'Threads 經營教學',
    theme: '職涯與個人事業',
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
