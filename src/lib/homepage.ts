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
  href: string;
  category: string;
  featured: {
    label: string;
    href: string;
    note: string;
  }[];
}

export interface HomeSeriesChapter {
  label: string;
  href: string;
}

export interface HomeSeries {
  name: string;
  theme: string;
  description: string;
  meta: string;
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
    eyebrow: '主題 01',
    question: '我還能學會什麼？如何提升自己的能力？',
    description:
      '從 AI 應用、數位技能到學習方法與工作效率，整理那些真的能放進日常工作的能力。',
    href: '/topics/ability-learning/',
    category: 'ability-learning',
    featured: [
      {
        label: '2026 NotebookLM 完整攻略',
        href: '/blog/notebooklm-complete-guide-2026/',
        note: '把資料蒐集、提問與整理變成一條可重複的流程。',
      },
      {
        label: 'AI 專案複盤與知識庫',
        href: '/blog/ai-project-review-knowledge-base/',
        note: '讓一次專案的經驗，變成下一次可以直接重用的知識。',
      },
    ],
  },
  {
    slug: 'business-thinking',
    name: '商業與思考',
    eyebrow: '主題 02',
    question: '我怎麼把產品價值說清楚，讓對的人願意買？',
    description:
      '從受眾、賣點、文案到提案，拆解行銷判斷與商業溝通。',
    href: '/topics/business-thinking/',
    category: 'business-thinking',
    featured: [
      {
        label: '受眾定義與廣告轉換',
        href: '/blog/audience-definition-ad-conversion/',
        note: '先檢查轉換問題是不是出在受眾定義，而不是創意。',
      },
      {
        label: 'Claude vs ChatGPT 提案',
        href: '/blog/claude-vs-chatgpt-proposal/',
        note: '用寫提案的真實情境，比較 Claude 與 ChatGPT 的差異。',
      },
    ],
  },
  {
    slug: 'personal-growth',
    name: '個人發展與事業',
    eyebrow: '主題 03',
    question: '我如何用能力創造更多機會？',
    description:
      'AI 時代的職涯轉型、專業判斷與個人累積，把能力變成下一階段的機會。',
    href: '/topics/personal-growth/',
    category: 'personal-growth',
    featured: [
      {
        label: '35 歲學 AI 會太晚嗎',
        href: '/blog/learn-ai-at-35-too-late-roi-metrics/',
        note: '用投資報酬率與累積十年的判斷力，回答轉型焦慮。',
      },
      {
        label: '中階主管的 AI 轉型',
        href: '/blog/middle-manager-transition-to-ai-curator-3-stages/',
        note: '從旁觀者、使用者，走到能定義問題的 AI 策展人。',
      },
    ],
  },
];

export const homeSeries: HomeSeries[] = [
  {
    name: 'AI 工作團隊',
    theme: '能力與學習',
    description:
      '把 AI 從單一工具，變成可分工、可交接、可重複的工作團隊。',
    meta: '6 個主題・完整實作',
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
    meta: '完整專題・自媒體經營',
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
  latestCount: 4,
  latestTitle: '最新內容',
  latestDescription:
    '最近的研究、實驗與觀察。先從主編精選開始，或直接看最新文章。',
  featuredPostId: 'senior-employees-ai-upskilling-strategy-not-replaced',
  featuredLabel: '主編精選',
  feedbackCount: 4,
};
