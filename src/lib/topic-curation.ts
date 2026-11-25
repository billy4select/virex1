/**
 * 主題頁編輯精選（2026-11 改版）
 *
 * 四個主題頁不是第二個 /blog/。
 * 這裡只放經過挑選的起點與閱讀方向；完整文章留在 /blog/?theme=slug。
 *
 * 規則：
 * 1. 同一篇文章在同一個主題頁只出現一次（起點與方向不重複）。
 * 2. 同一個閱讀方向至少兩篇，才值得獨立成一個方向。
 * 3. start 的順序就是建議閱讀順序，頁面會顯示 1、2、3。
 * 4. 不是每篇文章都要進精選；沒進來的文章仍在 /blog/ 裡。
 */

export interface TopicStartArticle {
  id: string;
  role: '核心指南' | '實作入口' | '案例入口';
}

export interface TopicDirection {
  title: string;
  description: string;
  articleIds: string[];
}

export interface TopicSeriesLink {
  name: string;
  href: string;
  note: string;
}

export interface TopicCuration {
  slug: string;
  /** 主題頁開頭顯示的一句話（約 25 字內）。完整的 intro 只用在 meta description 與結構化資料 */
  lead: string;
  intro: string;
  /** 一句話說明這個主題適合誰讀 */
  audience: string;
  /** 一句話說明三篇起點文章的閱讀順序 */
  readingOrder: string;
  start: TopicStartArticle[];
  directions: TopicDirection[];
  series?: TopicSeriesLink;
}

export const topicCurations: TopicCuration[] = [
  {
    slug: 'work-efficiency',
    lead: '把 AI 與工具放進日常工作，變成可重複的流程。',
    intro:
      '工作不是把事情做完就好，而是用更好的方法持續產出。這個主題從任務與優先順序、個人工作系統，到 AI 工具、會議提案與知識沉澱，幫你建立可重複的工作方式。',
    audience:
      '適合想改善日常工作節奏、減少重複勞動，並把工具真正放進流程的上班族、主管與一人工作者。',
    readingOrder:
      '先建立「先拆任務再選方法」的思維；再選適合的工具與流程；最後用檢查與沉澱讓產出可重複使用。',
    start: [
      { id: 'ai-workflow-start-with-tasks', role: '核心指南' },
      { id: 'ai-tool-evaluation', role: '實作入口' },
      { id: 'ai-output-quality-check', role: '實作入口' },
    ],
    directions: [
      {
        title: 'AI 工具與工作流程',
        description:
          '先看任務瓶頸，再選工具；把研究、寫作與知識庫分開，最後用四道關卡檢查產出。',
        articleIds: [
          'ai-tool-combination',
          'free-ai-tools-workflow',
          'three-ai-brains-division',
        ],
      },
      {
        title: '提案、會議與日常工作',
        description:
          '把 AI 放進提案寫作、客戶簡報準備與會議記錄，看哪一段值得交給它、哪一段仍要自己判斷。',
        articleIds: [
          'claude-vs-chatgpt-proposal',
          'claude-objection-simulation',
          'ai-meeting-notes-workflow-summary',
          'ai-weekly-report-manager',
        ],
      },
      {
        title: '知識沉澱與專案複盤',
        description:
          '把會議、專案與客戶資料變成可重複使用的知識，而不是只留下「發生過什麼」。',
        articleIds: [
          'ai-knowledge-capture-meetings-projects',
          'ai-project-review-knowledge-base',
        ],
      },
      {
        title: 'NotebookLM 實戰',
        description:
          '從上傳準備、提問方式到 OCR 與 Audio Overview，解決職場研究與文件整理的實際問題。',
        articleIds: [
          'notebooklm-complete-guide-2026',
          'notebooklm-problems-solutions',
          'notebooklm-workplace-research',
          'notebooklm-vs-claude-internal-docs',
        ],
      },
    ],
    series: {
      name: '打造 AI 工作團隊',
      href: '/ai-work-team/',
      note: '可分工、可交接的 AI 協作系統。',
    },
  },
  {
    slug: 'learning-capability',
    lead: '學了卻用不出來？先判斷該學什麼，再把知識練成能力。',
    intro:
      '學很多不代表能力提升。這個主題從「該學什麼」與學習方法開始，進入刻意練習、判斷力與知識管理，幫你把知識轉成真正用得上的能力。',
    audience:
      '適合想持續學習、卻常覺得「學了卻用不出來」的知識工作者與中生代專業人士。',
    readingOrder:
      '先看能力地圖，知道該投資什麼；再建立學習方法與盤點；最後用一條實際路徑學一個新領域。',
    start: [
      { id: 'ai-era-capability-map', role: '核心指南' },
      { id: 'capability-inventory-workshop', role: '實作入口' },
      { id: 'learn-new-field-with-ai-30-days', role: '實作入口' },
    ],
    directions: [
      {
        title: '判斷力與刻意練習',
        description:
          '當 AI 能快速產生答案，真正稀缺的是判斷與可練習的子技能。',
        articleIds: [
          'judgment-in-ai-era',
          'deliberate-practice-knowledge-work',
        ],
      },
      {
        title: '個人知識管理',
        description:
          '從收集、理解到輸出，建立最小可行的知識系統，讓筆記真正服務於思考與產出。',
        articleIds: [
          'personal-knowledge-system-minimal',
        ],
      },
    ],
  },
  {
    slug: 'business-marketing',
    lead: '看懂一門生意怎麼成立，也看懂行銷卡在哪一段。',
    intro:
      '商業不是一堆名詞，而是一連串選擇：為誰解決什麼問題、用什麼成本交付、靠什麼守住。這個主題從生意為什麼成立開始，再拆需求、客群、模式與行銷診斷。',
    audience:
      '適合想看懂一門生意怎麼運作、判斷一個想法值不值得做，或想提升行銷判斷力的人。',
    readingOrder:
      '先理解生意為什麼成立；再學怎麼驗證需求與客群；最後用診斷框架找出業績問題出在哪一段。',
    start: [
      { id: 'why-business-exists-nine-questions', role: '核心指南' },
      { id: 'validate-market-demand-five-methods', role: '實作入口' },
      { id: 'marketing-diagnosis-traffic-conversion-aov-repurchase', role: '案例入口' },
    ],
    directions: [
      {
        title: '從需求到商業模式',
        description:
          '把消費者需求轉成商業機會，再從收入、成本、定價與獲利結構判斷生意能不能賺到錢。',
        articleIds: [
          'consumer-demand-to-business-opportunity',
          'beyond-business-model-canvas',
          'pricing-and-profit-structure',
          'how-ai-changes-cost-and-competition',
        ],
      },
      {
        title: '受眾、文案與信任',
        description:
          '受眾不是標籤，成長也不是把曝光做大。從情境與任務重新定義客群，再累積真正的信任。',
        articleIds: [
          'audience-is-not-a-label',
          'audience-definition-ad-conversion',
          'content-channel-trust-growth',
          'feature-to-copywriting-selling-point',
        ],
      },
      {
        title: 'AI 與行銷實作',
        description:
          '用 AI 分析評論、準備受眾資料、檢查文案常見錯誤，讓行銷工作更有效率。',
        articleIds: [
          'ai-batch-review-analysis',
          'ai-copywriting-audience-data',
          'ai-copywriting-mistakes',
        ],
      },
      {
        title: '企業策略觀察',
        description: '從公開資訊拆解一家公司的選擇與競爭優勢。',
        articleIds: ['analyze-company-strategy-public-info'],
      },
    ],
  },
  {
    slug: 'personal-development',
    lead: '把工作經驗整理成帶得走的資產，再慢慢長成個人事業。',
    intro:
      '這個主題談職涯與可帶走的能力，以及知識如何變成收入。兩條路可以分開看，也可以互相支援。',
    audience:
      '適合工作已有一段時間、想把經驗累積成可帶走的資產，或正在把專業做成個人事業與知識產品的人。',
    readingOrder:
      '先選路徑：職涯與可攜帶能力，或知識到收入。每條路都有一篇起點，再往下讀同方向文章。',
    start: [
      { id: 'mid-career-portable-assets', role: '核心指南' },
      { id: 'turn-expertise-into-market-value', role: '核心指南' },
      { id: 'personal-brand-trust-not-reach', role: '實作入口' },
    ],
    directions: [
      {
        title: '職涯與可攜帶能力',
        description:
          '把年資拆成判斷、關係與方法；看哪些能力離開公司後仍屬於你，以及中階與資深員工如何重新定位。',
        articleIds: [
          'career-strategy-after-35',
          'senior-employees-ai-upskilling-strategy-not-replaced',
          'middle-manager-transition-to-ai-curator-3-stages',
          'learn-ai-at-35-too-late-roi-metrics',
          'ai-data-analysis-human-ai-collaboration-professionalism',
        ],
      },
      {
        title: '知識變現與一人公司',
        description:
          '從內容到產品、從專業到付費 offer，以及用 AI 建立可穩定交付的一人工作系統。',
        articleIds: [
          'content-to-product-knowledge-business',
          'one-person-company-ai-work-system',
          'self-media-first-month-positioning-or-posting',
        ],
      },
    ],
    series: {
      name: 'Threads 經營教學',
      href: '/threads/',
      note: '從定位、內容到互動與經營。',
    },
  },
];

export function getTopicCuration(slug: string): TopicCuration | undefined {
  return topicCurations.find((c) => c.slug === slug);
}
