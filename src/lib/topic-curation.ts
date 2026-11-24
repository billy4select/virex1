/**
 * 主題頁編輯精選
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
    slug: 'ability-learning',
    intro:
      'AI 工具、工作流程與學習方法，最後都會回到同一個問題：你能不能把知道的東西，變成做得出來的事。這個主題從能力地圖開始，再進入工具、知識管理與練習。',
    audience:
      '適合想把 AI 與新知識真正放進日常工作，卻不知道從哪裡下手的上班族、行銷人與知識工作者。',
    readingOrder:
      '先看能力地圖，知道自己要補什麼；再挑一件工作任務動手做；最後用 30 天學一個新領域。',
    start: [
      { id: 'ai-era-capability-map', role: '核心指南' },
      { id: 'ai-workflow-start-with-tasks', role: '實作入口' },
      { id: 'learn-new-field-with-ai-30-days', role: '實作入口' },
    ],
    directions: [
      {
        title: 'AI 工具與工作流程',
        description:
          '先看任務，再選工具；把研究、寫作與知識庫分開，最後用四道關卡檢查產出。',
        articleIds: [
          'ai-tool-combination',
          'ai-tool-evaluation',
          'free-ai-tools-workflow',
          'ai-output-quality-check',
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
        ],
      },
      {
        title: '知識管理與沉澱',
        description:
          '從收集、理解到輸出，並把會議、專案與客戶資料變成可重複使用的知識。',
        articleIds: [
          'personal-knowledge-system-minimal',
          'ai-knowledge-capture-meetings-projects',
        ],
      },
      {
        title: '學習、能力與判斷',
        description:
          '盤點可遷移能力，用回饋迴路練習，並在不確定中做出可承擔的判斷。',
        articleIds: [
          'capability-inventory-workshop',
          'deliberate-practice-knowledge-work',
          'judgment-in-ai-era',
        ],
      },
    ],
    series: {
      name: 'AI 工作團隊',
      href: '/ai-work-team/',
      note: '想照順序建立 AI 協作系統，從這個系列開始。',
    },
  },
  {
    slug: 'business-thinking',
    intro:
      '商業不是一堆名詞，而是一連串選擇：為誰解決什麼問題、用什麼成本交付、靠什麼守住。這個主題從生意為什麼成立開始，再拆需求、客群、模式與成長。',
    audience:
      '適合想看懂一門生意怎麼運作、判斷一個想法值不值得做的人，包含產品、行銷、創業與副業的探索者。',
    readingOrder:
      '先理解生意為什麼成立；再學怎麼驗證需求；最後用公開資料拆解一家公司的策略。',
    start: [
      { id: 'why-business-exists-nine-questions', role: '核心指南' },
      { id: 'validate-market-demand-five-methods', role: '實作入口' },
      { id: 'analyze-company-strategy-public-info', role: '案例入口' },
    ],
    directions: [
      {
        title: '從需求到商業模式',
        description:
          '把消費者需求轉成商業機會，再從收入、成本、定價與獲利結構判斷生意能不能賺到錢，並看 AI 改變了哪一條成本曲線。',
        articleIds: [
          'consumer-demand-to-business-opportunity',
          'beyond-business-model-canvas',
          'pricing-and-profit-structure',
          'how-ai-changes-cost-and-competition',
        ],
      },
    ],
  },
  {
    slug: 'personal-growth',
    intro:
      '從職涯選擇、專業累積到個人事業，整理如何把工作經驗轉成可持續發展的能力與機會。',
    audience:
      '適合工作已有一段時間、想把經驗累積成長期資產，或正在考慮個人品牌與獨立發展的人。',
    readingOrder:
      '先看專業如何變成市場價值；再理解個人品牌靠的是信任；最後用第一個月實際開始發文。',
    start: [
      { id: 'turn-expertise-into-market-value', role: '核心指南' },
      { id: 'personal-brand-trust-not-reach', role: '實作入口' },
      { id: 'self-media-first-month-positioning-or-posting', role: '實作入口' },
    ],
    directions: [
      {
        title: '職涯轉換與可攜帶資產',
        description:
          '把年資拆成判斷、關係與方法，判斷哪些能力在離開公司後仍然屬於你，並看中階以上如何在 AI 時代找到位置。',
        articleIds: [
          'career-strategy-after-35',
          'mid-career-portable-assets',
          'learn-ai-at-35-too-late-roi-metrics',
          'middle-manager-transition-to-ai-curator-3-stages',
          'senior-employees-ai-upskilling-strategy-not-replaced',
        ],
      },
      {
        title: '從專業到產品與事業',
        description:
          '把已經解決過的問題，變成可以收費、可以重複交付的知識產品，並用 AI 建立一人也能運作的交付系統。',
        articleIds: [
          'content-to-product-knowledge-business',
          'one-person-company-ai-work-system',
        ],
      },
    ],
    series: {
      name: 'Threads 怎麼經營',
      href: '/threads/',
      note: '想用內容累積信任與機會，從這個系列開始。',
    },
  },
  {
    slug: 'marketing-brand',
    intro:
      '行銷從理解受眾開始。這個主題整理如何辨識真實需求、提煉產品價值、規劃內容與建立品牌信任，也會討論 AI 如何協助行銷工作。',
    audience:
      '適合負責產品、廣告、內容或品牌的行銷人，以及想讓自己的產品與想法被對的人看見的經營者。',
    readingOrder:
      '先用四個數字診斷問題出在哪一段；再重新定義受眾；最後看內容如何累積信任。',
    start: [
      { id: 'marketing-diagnosis-traffic-conversion-aov-repurchase', role: '核心指南' },
      { id: 'audience-is-not-a-label', role: '實作入口' },
      { id: 'content-channel-trust-growth', role: '案例入口' },
    ],
    directions: [
      {
        title: '受眾與賣點',
        description:
          '從廣告轉換不佳的真實問題出發，回到受眾定義，再把產品功能提煉成用戶在意的賣點。',
        articleIds: [
          'audience-definition-ad-conversion',
          'feature-to-copywriting-selling-point',
        ],
      },
      {
        title: 'AI 與文案執行',
        description:
          '用 AI 分析評論、先給它受眾資料，再避開常見的文案錯誤；仍由人負責判斷與驗證。',
        articleIds: [
          'ai-batch-review-analysis',
          'ai-copywriting-audience-data',
          'ai-copywriting-mistakes',
        ],
      },
    ],
  },
];

export function getTopicCuration(slug: string): TopicCuration | undefined {
  return topicCurations.find((curation) => curation.slug === slug);
}
