/**
 * 首頁編輯設定
 *
 * 首頁只組裝畫面，內容集中在這裡。
 * 之後改主題卡、專題卡、問題入口，不需要動 index.astro。
 */

export interface HomeTopic {
  slug: string;
  name: string;
  eyebrow: string;
  question: string;
  description: string;
  points: string[];
  href: string;
  category: string;
  icon: string;
}

export interface HomeSeriesChapter {
  label: string;
  href: string;
}

export interface HomeSeries {
  name: string;
  theme: string;
  description: string;
  outcome: string;
  meta: string;
  href: string;
  icon: string;
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
    eyebrow: '主題 01',
    question: '我還能學會什麼？如何提升自己的能力？',
    description:
      '從 AI 應用、數位技能到學習方法與工作效率，整理那些真的能放進日常工作的能力。',
    points: ['AI 應用與工具', '數位技能與工作流程', '學習方法與知識管理'],
    href: '/topics/ability-learning/',
    category: 'ai-tech',
    icon: 'lucide:graduation-cap',
  },
  {
    slug: 'business-thinking',
    name: '商業與思考',
    eyebrow: '主題 02',
    question: '我如何理解市場與商業世界？',
    description:
      '從行銷、品牌、商業模式到市場觀察，拆解一門生意為什麼成立、又如何成長。',
    points: ['行銷與品牌', '商業模式與經營', '市場與消費者觀察'],
    href: '/topics/business-thinking/',
    category: 'business-marketing',
    icon: 'lucide:briefcase-business',
  },
  {
    slug: 'personal-growth',
    name: '個人發展與事業',
    eyebrow: '主題 03',
    question: '我如何用能力創造更多機會？',
    description:
      '把能力轉化成職涯機會、個人品牌與內容事業，讓一個人也能建立可持續的發展路徑。',
    points: ['職涯與專業發展', '個人品牌', '自媒體與知識變現'],
    href: '/topics/personal-growth/',
    category: 'personal-brand',
    icon: 'lucide:rocket',
  },
];

export const homeSeries: HomeSeries[] = [
  {
    name: 'AI 工作團隊',
    theme: '能力與學習',
    description:
      '把 AI 從單一工具，變成可分工、可交接、可重複的工作團隊。',
    outcome:
      '走完六個主題，你會有一份自己的 AI 工作說明書，以及一套能持續調整的工作流程。',
    meta: '6 個主題・完整實作',
    href: '/ai-work-team/',
    icon: 'lucide:bot',
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
    outcome:
      '走完之後，你會知道自己的定位、發文頻率與轉換路徑，而不是只靠靈感發文。',
    meta: '完整專題・自媒體經營',
    href: '/threads/',
    icon: 'lucide:message-circle',
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
  latestCount: 4,
  latestTitle: '最新內容',
  latestDescription:
    '最近的研究、實驗與觀察。先從主編精選開始，或直接看最新文章。',
  featuredPostId: 'senior-employees-ai-upskilling-strategy-not-replaced',
  featuredLabel: '主編精選',
  feedbackCount: 4,
};
