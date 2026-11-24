/**
 * 主題頁編輯精選
 *
 * 四個主題頁不是第二個 /blog/。
 * 這裡只放經過挑選的起點與閱讀方向；完整文章留在 /blog/?theme=slug。
 *
 * 新增文章時，先判斷它值不值得進主題頁，再決定放進哪一個方向。
 * 同一個方向至少兩篇，才適合獨立成一個閱讀方向。
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
  start: TopicStartArticle[];
  directions: TopicDirection[];
  series?: TopicSeriesLink;
}

export const topicCurations: TopicCuration[] = [
  {
    slug: 'ability-learning',
    intro:
      'AI 工具、工作流程與學習方法，最後都會回到同一個問題：你能不能把知道的東西，變成做得出來的事。這個主題從能力地圖開始，再進入工具、知識管理與練習。',
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
          'ai-output-quality-check',
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
    start: [
      { id: 'why-business-exists-nine-questions', role: '核心指南' },
      { id: 'consumer-demand-to-business-opportunity', role: '實作入口' },
      { id: 'analyze-company-strategy-public-info', role: '案例入口' },
    ],
    directions: [
      {
        title: '需求、客群與成長',
        description:
          '把模糊的市場直覺變成可驗證的需求、可描述的客群，以及能累積信任的成長路徑。',
        articleIds: [
          'validate-market-demand-five-methods',
          'consumer-demand-to-business-opportunity',
        ],
      },
      {
        title: '商業模式、成本與競爭',
        description:
          '從收入結構、成本結構與單位經濟看一門生意能不能成立，再判斷 AI 改變了哪一條成本曲線。',
        articleIds: [
          'beyond-business-model-canvas',
          'how-ai-changes-cost-and-competition',
        ],
      },
    ],
  },
  {
    slug: 'personal-growth',
    intro:
      '從職涯選擇、專業累積到個人事業，整理如何把工作經驗轉成可持續發展的能力與機會。',
    start: [
      { id: 'turn-expertise-into-market-value', role: '核心指南' },
      { id: 'personal-brand-trust-not-reach', role: '實作入口' },
      { id: 'one-person-company-ai-work-system', role: '實作入口' },
    ],
    directions: [
      {
        title: '職涯策略與可攜帶資產',
        description:
          '把年資拆成判斷、關係與方法，判斷哪些能力在離開公司後仍然屬於你。',
        articleIds: [
          'career-strategy-after-35',
          'mid-career-portable-assets',
          'learn-ai-at-35-too-late-roi-metrics',
        ],
      },
      {
        title: '從專業到產品',
        description:
          '把已經解決過的問題，變成一個有明確結果、可以收費、可以重複交付的知識產品。',
        articleIds: ['content-to-product-knowledge-business'],
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
    start: [
      { id: 'audience-is-not-a-label', role: '核心指南' },
      { id: 'ai-batch-review-analysis', role: '實作入口' },
      { id: 'content-channel-trust-growth', role: '案例入口' },
    ],
    directions: [
      {
        title: '受眾、需求與品牌信任',
        description:
          '從使用者情境與購買任務理解受眾，再思考內容如何累積認知、信任與選擇。',
        articleIds: [
          'audience-definition-ad-conversion',
          'content-channel-trust-growth',
        ],
      },
      {
        title: 'AI 與行銷執行',
        description:
          '把評論、受眾資料與產品資訊交給 AI 協作，仍由人負責判斷與驗證。',
        articleIds: [
          'ai-batch-review-analysis',
          'feature-to-copywriting-selling-point',
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
