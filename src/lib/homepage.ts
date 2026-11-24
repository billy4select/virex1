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

export const homeTopics: HomeTopic[] = [
  {
    slug: 'ability-learning',
    name: '能力與學習',
    question: '我還能學會什麼，並把所學真的放進工作？',
    description:
      '從 AI 工具、知識管理到學習方法與判斷力，整理那些真的能放進日常工作的能力。',
    href: '/topics/ability-learning/',
    category: 'ability-learning',
  },
  {
    slug: 'business-thinking',
    name: '商業與思考',
    question: '我怎麼看懂一門生意，找到值得解決的問題？',
    description:
      '從需求、客群、商業模式到成本與成長，拆解一門生意如何成立、如何被選擇。',
    href: '/topics/business-thinking/',
    category: 'business-thinking',
  },
  {
    slug: 'personal-growth',
    name: '個人發展與事業',
    question: '我如何把能力與經驗，變成下一階段的機會？',
    description:
      '從職涯策略、個人品牌到知識產品，探索如何累積專業並發展自己的事業。',
    href: '/topics/personal-growth/',
    category: 'personal-growth',
  },
  {
    slug: 'marketing-brand',
    name: '行銷與品牌',
    question: '如何理解受眾、建立品牌，讓產品與想法被看見？',
    description:
      '從受眾理解、內容策略到品牌溝通與 AI 行銷，整理讓價值被市場理解的方法。',
    href: '/topics/marketing-brand/',
    category: 'marketing-brand',
  },
];

export const homeSeries: HomeSeries[] = [
  {
    name: 'AI 工作團隊',
    theme: '能力與學習',
    description:
      '把 AI 從單一工具，變成可分工、可交接、可重複的工作團隊。',
    href: '/ai-work-team/',
    chapters: [
      { label: '先找出值得交給 AI 的事', href: '/ai-work-team/lesson-01/' },
      { label: '建立角色、職責與工作說明書', href: '/ai-work-team/lesson-03/' },
      { label: '讓不同 AI 員工一起工作', href: '/ai-work-team/lesson-05/' },
    ],
  },
  {
    name: 'Threads 怎麼經營',
    theme: '個人發展與事業',
    description:
      '從起步心態、人設定位、發文頻率到互動與變現，建立一套你做得到的內容節奏。',
    href: '/threads/',
    chapters: [
      { label: '先調整起步心態，不急著完美', href: '/threads/' },
      { label: '用人設與定位找到你的說法', href: '/threads/persona/' },
      { label: '從信任累積到自然變現', href: '/threads/monetize/' },
    ],
  },
];

export const homeQuestions: HomeQuestion[] = [
  {
    label: 'AI 工具',
    question: 'AI 工具很多，哪一個真的能放進工作？',
    description: '先從免費工具組合與實際工作流程開始，不急著追每一個新工具。',
    href: '/blog/free-ai-tools-workflow/',
  },
  {
    label: '工作流程',
    question: '會議記錄與後續追蹤，AI 能接手到什麼程度？',
    description: '從逐字稿到行動清單，先找出哪一段最值得自動化。',
    href: '/blog/ai-meeting-notes-workflow-summary/',
  },
  {
    label: '內容經營',
    question: '想經營 Threads，先定位還是先發文？',
    description: '人設不是想出來的，是從你持續寫的東西裡長出來的。',
    href: '/threads/persona/',
  },
];

export const homepageConfig = {
  latestCount: 5,
  latestTitle: '最新文章',
  feedbackCount: 4,
};
