/**
 * 專題頁編輯精選（2026-11 改版）
 *
 * 專題頁不是第二個 /blog/。
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
  /** 「讀完你會知道…」一句話，取代文章原本較長的摘要 */
  outcome: string;
}

export interface TopicDirection {
  title: string;
  description: string;
  /** 「適合：…」一句話，說明這個方向適合哪一種讀者 */
  forWho: string;
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
    slug: 'ai-workflow',
    lead: '把 AI 放進日常工作，變成可重複的流程，而不是每次重新試。',
    intro:
      '先拆任務、再選工具，是把 AI 用進工作的順序。這個專題從工作流程與工具選擇開始，延伸到提案、會議、知識沉澱與資料安全，整理能重複使用的 AI 工作方式。',
    audience: '適合想把 AI 真正放進日常工作的上班族、主管與一人工作者。',
    readingOrder: '先拆任務，再選工具，最後用檢查關卡確認產出能交付。',
    start: [
      {
        id: 'ai-workflow-start-with-tasks',
        role: '核心指南',
        outcome: '怎麼把一個真實任務，變成可以重複使用的 AI 流程。',
      },
      {
        id: 'ai-tool-evaluation',
        role: '實作入口',
        outcome: '用哪五個維度判斷工具，不再無止境換工具。',
      },
      {
        id: 'ai-output-quality-check',
        role: '實作入口',
        outcome: '交付前要過的四道關卡：事實、邏輯、語氣、責任。',
      },
    ],
    directions: [
      {
        title: '選工具與組合',
        forWho: '適合：工具很多、不知道怎麼搭配的人',
        description: '工具不是越強越好，而是看哪一個適合哪一段任務。',
        articleIds: [
          'ai-tool-combination',
          'three-ai-brains-division',
          'free-ai-tools-workflow',
        ],
      },
      {
        title: '放進提案、會議與週報',
        forWho: '適合：想把 AI 用在每週固定工作的人',
        description: '看哪一段值得交給 AI，哪一段仍要自己判斷。',
        articleIds: [
          'claude-vs-chatgpt-proposal',
          'claude-objection-simulation',
          'ai-meeting-notes-workflow-summary',
          'ai-weekly-report-manager',
        ],
      },
      {
        title: '沉澱知識，守住資料底線',
        forWho: '適合：開始用 AI 處理公司資料的人',
        description: '把會議與專案變成能再用的知識，也知道哪些資料不該貼給 AI。',
        articleIds: [
          'ai-knowledge-capture-meetings-projects',
          'ai-project-review-knowledge-base',
          'ai-finance-data-security-5-bottom-lines',
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
    slug: 'notebooklm',
    lead: '用 NotebookLM 讀文件、做研究，從入門到避開常見的坑。',
    intro:
      'NotebookLM 適合拿來讀大量文件，但上傳方式與提問方式會直接決定答案品質。這個專題從入門與上傳準備開始，再到提問、常見問題、實際研究，以及和 Claude、Notion AI 的比較。',
    audience: '適合需要整理文件、做工作研究，或正在評估 NotebookLM 的人。',
    readingOrder: '先看完整入門，再做好上傳準備，最後學會怎麼問。',
    start: [
      {
        id: 'notebooklm-complete-guide-2026',
        role: '核心指南',
        outcome: '從註冊到 Audio Overview，NotebookLM 的完整用法與限制。',
      },
      {
        id: 'notebooklm-upload-preparation',
        role: '實作入口',
        outcome: '上傳 PDF 前要先檢查的三件事，避開掃描檔與中文亂碼。',
      },
      {
        id: 'notebooklm-question-types',
        role: '實作入口',
        outcome: '五種問法，各自適合什麼場景。',
      },
    ],
    directions: [
      {
        title: '遇到問題怎麼辦',
        forWho: '適合：已經在用，但結果不穩的人',
        description: 'PDF 亂碼、掃描檔讀不到、答案出現幻覺時的處理方式。',
        articleIds: ['notebooklm-problems-solutions', 'notebooklm-ocr-pdf-solution'],
      },
      {
        title: '用在工作研究與語音摘要',
        forWho: '適合：要整理大量資料或報告的人',
        description: '從整理資料到長出觀點，以及用 Audio Overview 快速掌握內容。',
        articleIds: ['notebooklm-workplace-research', 'notebooklm-audio-overview-guide'],
      },
      {
        title: '跟其他工具怎麼選',
        forWho: '適合：正在評估要用哪個工具的人',
        description: '讀內部文件、做知識庫時，NotebookLM 與 Claude、Notion AI 的差異。',
        articleIds: [
          'notebooklm-vs-claude-internal-docs',
          'notebooklm-vs-notion-ai-knowledge-base',
        ],
      },
    ],
  },
  {
    slug: 'business-marketing',
    lead: '看懂一門生意怎麼成立，也看懂行銷卡在哪一段。',
    intro:
      '商業不是一堆名詞，而是一連串選擇：為誰解決什麼問題、用什麼成本交付、靠什麼守住。這個專題從生意為什麼成立開始，再拆需求、模式、受眾、定位與文案，最後用診斷框架找出問題。',
    audience: '適合想看懂一門生意怎麼運作、判斷想法值不值得做，或想提升行銷判斷力的人。',
    readingOrder: '先理解生意為什麼成立，再驗證需求，最後用診斷框架找出問題。',
    start: [
      {
        id: 'why-business-exists-nine-questions',
        role: '核心指南',
        outcome: '用九個問題，判斷一門生意到底靠什麼活著。',
      },
      {
        id: 'validate-market-demand-five-methods',
        role: '實作入口',
        outcome: '做產品之前，怎麼確認有人真的願意付錢。',
      },
      {
        id: 'marketing-diagnosis-traffic-conversion-aov-repurchase',
        role: '案例入口',
        outcome: '業績下滑時，先看流量、轉換、客單價、回購哪一段出問題。',
      },
    ],
    directions: [
      {
        title: '從需求到商業模式',
        forWho: '適合：想判斷一個想法值不值得做的人',
        description: '把需求轉成機會，再從收入、成本與定價判斷能不能賺到錢。',
        articleIds: [
          'consumer-demand-to-business-opportunity',
          'beyond-business-model-canvas',
          'pricing-and-profit-structure',
        ],
      },
      {
        title: '商業觀察與書評',
        forWho: '適合：想練習看懂企業與市場的人',
        description: '從公開資訊、一本書與 AI 帶來的變化，看企業的選擇與競爭。',
        articleIds: [
          'analyze-company-strategy-public-info',
          'free-zero-price-business-models',
          'how-ai-changes-cost-and-competition',
        ],
      },
      {
        title: '受眾、定位與信任',
        forWho: '適合：行銷做了卻沒效果的人',
        description: '受眾不是標籤，成長也不是把曝光做大。',
        articleIds: [
          'audience-is-not-a-label',
          'audience-definition-ad-conversion',
          'brand-positioning-category-competition',
          'content-channel-trust-growth',
        ],
      },
      {
        title: '文案與 AI 行銷實作',
        forWho: '適合：要自己寫文案、做行銷的人',
        description: '提煉賣點、檢查文案，並用 AI 分析評論與受眾資料。',
        articleIds: [
          'feature-to-copywriting-selling-point',
          'ai-copywriting-audience-data',
          'ai-copywriting-mistakes',
          'ai-batch-review-analysis',
        ],
      },
    ],
  },
  {
    slug: 'career-business',
    lead: '把能力與經驗整理成帶得走的資產，再慢慢長成個人事業。',
    intro:
      '工具每個月都在變，真正能帶走的是判斷、方法與信任。這個專題從該培養什麼能力開始，延伸到職涯轉型，再到個人品牌、知識變現與一人公司。',
    audience: '適合工作已有一段時間，想累積可帶走的能力，或正在把專業做成個人事業的人。',
    readingOrder: '先看該投資什麼能力，再盤點可帶走的資產，最後看怎麼變成收入。',
    start: [
      {
        id: 'ai-era-capability-map',
        role: '核心指南',
        outcome: '判斷力、操作力、學習力三層，決定下一步要學什麼。',
      },
      {
        id: 'mid-career-portable-assets',
        role: '核心指南',
        outcome: '頭銜與預算帶不走，哪五項資產才真正屬於你。',
      },
      {
        id: 'turn-expertise-into-market-value',
        role: '實作入口',
        outcome: '六個步驟，整理出第一個可以賣的服務。',
      },
    ],
    directions: [
      {
        title: '能力盤點與學習',
        forWho: '適合：不確定下一步該學什麼的人',
        description: '盤點現在的能力、練習判斷，再把學習變成可交付的成果。',
        articleIds: [
          'capability-inventory-workshop',
          'judgment-in-ai-era',
          'deliberate-practice-knowledge-work',
          'learn-new-field-with-ai-30-days',
          'personal-knowledge-system-minimal',
        ],
      },
      {
        title: '職涯方向與轉型',
        forWho: '適合：擔心年資、AI 衝擊或想轉型的上班族',
        description: '面對 AI 與年資，怎麼重新定位、判斷機會，並保住專業判斷。',
        articleIds: [
          'career-strategy-after-35',
          'career-opportunity-cost-decision',
          'senior-employees-ai-upskilling-strategy-not-replaced',
          'middle-manager-transition-to-ai-curator-3-stages',
          'learn-ai-at-35-too-late-roi-metrics',
          'ai-data-analysis-human-ai-collaboration-professionalism',
        ],
      },
      {
        title: '個人品牌與知識變現',
        forWho: '適合：想把專業做成內容或收入的人',
        description: '從內容到產品、從專業到付費 offer，以及一人公司的工作系統。',
        articleIds: [
          'personal-brand-trust-not-reach',
          'self-media-first-month-positioning-or-posting',
          'content-to-product-knowledge-business',
          'one-person-company-ai-work-system',
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
