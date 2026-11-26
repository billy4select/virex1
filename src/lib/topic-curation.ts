/**
 * 主題：依讀者需求整理的文章集結（2026-11 改版）
 *
 * 結構：領域（4 個）→ 主題（「我想…」句型，每個 3–7 篇）→ 文章。
 * - 領域 slug 與文章分類（themes.ts）相同，文章頁的麵包屑會連到領域頁。
 * - 主題是為「一個讀者處境」整理的閱讀順序，一篇文章可以出現在多個主題。
 * - 每篇文章的一句「讀完你會知道」寫在 articleOutcomes，所有主題共用。
 *
 * 新增主題：在 topics 加一筆（area 填領域 slug），並確認 articleIds 都有對應的 outcome。
 * 建置時會檢查：文章是否存在、是否有 outcome、同一主題是否重複。
 *
 * 規則：
 * 1. 一個主題 3–7 篇，articleIds 的順序就是建議閱讀順序。
 * 2. 主題名稱用讀者的口吻（我想… / 我的… / 我擔心…），不用分類名稱。
 * 3. 不是每篇文章都要進主題；沒進來的文章仍在 /blog/ 裡。
 */

export interface TopicArea {
  slug: string;
  name: string;
  /** 讀者的問題 */
  question: string;
  /** 卡片上的一句話描述 */
  summary: string;
  /** 領域頁開頭的一句話 */
  lead: string;
}

export interface TopicSeriesLink {
  name: string;
  /** 對應 homepage.ts 的 homeSeries.href */
  href: string;
}

export interface Topic {
  slug: string;
  /** 所屬領域的 slug */
  area: string;
  /** 讀者的處境，「我想…」句型 */
  name: string;
  /** 一句話承諾，顯示在標題下方 */
  lead: string;
  /** meta description 與結構化資料用 */
  intro: string;
  /** 建議閱讀順序 */
  articleIds: string[];
  /** 這個主題最完整的一套教學（選填） */
  series?: TopicSeriesLink;
}

/** 每篇文章的一句「讀完你會知道」，所有主題共用 */
export const articleOutcomes: Record<string, string> = {
  'ai-batch-review-analysis': '怎麼把大量評論，整理成可排序的改善清單。',
  'ai-copywriting-audience-data': '先餵 AI 受眾資料，為什麼文案品質差很多。',
  'ai-copywriting-mistakes': 'AI 文案最常見的三種錯，以及怎麼修。',
  'ai-data-analysis-human-ai-collaboration-professionalism': '用 AI 做分析時，怎麼保住專業判斷與可信度。',
  'ai-era-capability-map': '判斷力、操作力、學習力三層，決定下一步要學什麼。',
  'ai-finance-data-security-5-bottom-lines': '把敏感數據交給 AI 之前的五條安全底線。',
  'ai-knowledge-capture-meetings-projects': '怎麼把會議與專案，沉澱成下次能用的知識。',
  'ai-meeting-notes-workflow-summary': '怎麼把逐字稿，整理成行動清單與決策摘要。',
  'ai-output-quality-check': '交付前要過的四道關卡：事實、邏輯、語氣、責任。',
  'ai-project-review-knowledge-base': '怎麼把一次專案的經驗，變成可檢索的團隊知識庫。',
  'ai-tool-combination': 'ChatGPT、Claude、NotebookLM 怎麼分工與交接。',
  'ai-tool-evaluation': '用哪五個維度判斷工具，不再無止境換工具。',
  'ai-weekly-report-manager': '為什麼不該叫 AI 寫週報，而是叫它整理你的邏輯。',
  'ai-workflow-start-with-tasks': '怎麼把一個真實任務，變成可以重複使用的 AI 流程。',
  'analyze-company-strategy-public-info': '從收入、顧客、成本、投資、定價五條線索看策略。',
  'audience-definition-ad-conversion': '廣告轉換低時，問題可能出在受眾，而不是素材。',
  'audience-is-not-a-label': '用情境、任務、障礙、替代方案，重新定義客群。',
  'beyond-business-model-canvas': '畫布看不到的現實：收入、成本、單位經濟與護城河。',
  'brand-positioning-category-competition': '顧客把你跟誰比，才是品牌定位的起點。',
  'capability-inventory-workshop': '用 60 分鐘工作坊，盤點 T 型能力與可遷移技能。',
  'career-opportunity-cost-decision': '面對新機會，怎麼把看得見與看不見的成本都算進去。',
  'career-strategy-after-35': '35 歲後，怎麼把經驗轉成市場看得懂的判斷力。',
  'claude-objection-simulation': '簡報前，怎麼用 Claude 先找出客戶會卡住的地方。',
  'claude-vs-chatgpt-proposal': '寫提案時，Claude 和 ChatGPT 各適合做什麼。',
  'consumer-demand-to-business-opportunity': '怎麼問，才問得出對方願意付錢的需求。',
  'content-channel-trust-growth': '觸及、信任、轉換、留存、轉介，內容與通路怎麼分工。',
  'content-to-product-knowledge-business': '知識從免費內容走向產品的三種模式。',
  'deliberate-practice-knowledge-work': '用回饋迴路與作品集，練習寫作、分析與提案。',
  'feature-to-copywriting-selling-point': '怎麼把產品規格，轉成打動人的賣點文案。',
  'free-ai-tools-workflow': '四個免費 AI 工具，搭配起來能跑完多數職場任務。',
  'free-zero-price-business-models': '《免費》一書的四種免費模式，以及怎麼運用。',
  'how-ai-changes-cost-and-competition': 'AI 讓哪些成本變便宜、哪些變貴，資源該往哪移。',
  'judgment-in-ai-era': '用三個層次與決策紀錄，訓練 AI 時代的判斷力。',
  'learn-ai-at-35-too-late-roi-metrics': '為什麼十年經驗，是學 AI 時最稀缺的資產。',
  'learn-new-field-with-ai-30-days': '用四週從陌生走到能交付，而不只是大量收藏。',
  'marketing-diagnosis-traffic-conversion-aov-repurchase': '業績下滑時，先看流量、轉換、客單價、回購哪一段出問題。',
  'mid-career-portable-assets': '頭銜與預算帶不走，哪五項資產才真正屬於你。',
  'middle-manager-transition-to-ai-curator-3-stages': '中階主管轉型成 AI 策展人的三個階段。',
  'notebooklm-audio-overview-guide': 'Audio Overview 怎麼用：語音摘要、Podcast 與三個技巧。',
  'notebooklm-complete-guide-2026': '從註冊到 Audio Overview，NotebookLM 的完整用法與限制。',
  'notebooklm-ocr-pdf-solution': '掃描 PDF 讀不到時，三種 OCR 轉換法與免費工具。',
  'notebooklm-problems-solutions': 'PDF 亂碼、幻覺、格式混亂的七個解法。',
  'notebooklm-question-types': '五種問法，各自適合什麼場景。',
  'notebooklm-upload-preparation': '上傳 PDF 前要先檢查的三件事，避開掃描檔與中文亂碼。',
  'notebooklm-vs-claude-internal-docs': '讀內部文件、寫報告時，Claude 與 NotebookLM 怎麼選。',
  'notebooklm-vs-notion-ai-knowledge-base': '建知識庫時，NotebookLM 與 Notion AI 怎麼選。',
  'notebooklm-workplace-research': '怎麼從資料裡長出觀點，而不只是整理資料。',
  'one-person-company-ai-work-system': '用五個角色與一條交付鏈，建立能穩定接案的系統。',
  'personal-brand-trust-not-reach': '個人品牌靠定位、內容支柱與信任資產，不靠演算法。',
  'personal-knowledge-system-minimal': '收集、理解、輸出三層，建一個最小的知識管理系統。',
  'pricing-and-profit-structure': '營收不差卻沒剩錢，問題常出在單筆獲利結構。',
  'self-media-first-month-positioning-or-posting': '第一個月不用想完美：先寫暫定定位，再用發文測試修正。',
  'senior-employees-ai-upskilling-strategy-not-replaced': '資深員工面對 AI，可以重新定位的三個方向。',
  'three-ai-brains-division': '研究、寫作、知識庫，為什麼不要混在同一個對話。',
  'turn-expertise-into-market-value': '六個步驟，整理出第一個可以賣的服務。',
  'validate-market-demand-five-methods': '做產品之前，怎麼確認有人真的願意付錢。',
  'why-business-exists-nine-questions': '用九個問題，判斷一門生意到底靠什麼活著。',
};

export const topicAreas: TopicArea[] = [
  {
    slug: 'ai-workflow',
    name: 'AI 工作流程與工具',
    question: '怎麼把 AI 放進日常工作，而不是只停在試用？',
    summary: '任務拆解、工具選擇、會議提案與資料安全。',
    lead: '把 AI 放進日常工作，變成可重複的流程。',
  },
  {
    slug: 'notebooklm',
    name: 'NotebookLM 實戰',
    question: '怎麼用 NotebookLM 讀文件、做研究，又不踩坑？',
    summary: '入門、上傳準備、提問方式與常見問題。',
    lead: '用 NotebookLM 讀文件、做研究，並避開常見的坑。',
  },
  {
    slug: 'business-marketing',
    name: '商業與行銷',
    question: '如何理解市場、顧客與一門生意的運作？',
    summary: '需求驗證、商業模式、行銷診斷與文案。',
    lead: '看懂一門生意怎麼成立，也看懂行銷卡在哪一段。',
  },
  {
    slug: 'career-business',
    name: '職涯與個人事業',
    question: '如何把能力與經驗，變成可以帶走的資產與收入？',
    summary: 'AI 時代的職涯、能力盤點、自媒體與變現。',
    lead: '把能力與經驗整理成帶得走的資產，再慢慢長成個人事業。',
  },
];

export const topics: Topic[] = [
  {
    slug: 'start-with-ai',
    area: 'ai-workflow',
    name: '我想開始用 AI 工作，但不知道從哪裡下手',
    lead: '先拆任務、再選工具，把 AI 變成可以重複使用的工作流程。',
    intro:
      '想用 AI 工作卻不知道從哪開始？從拆任務、選工具與組合，到交付前的品質檢查，帶你把 AI 放進真實工作。',
    articleIds: [
      'ai-workflow-start-with-tasks',
      'ai-tool-evaluation',
      'ai-tool-combination',
      'three-ai-brains-division',
      'free-ai-tools-workflow',
      'ai-output-quality-check',
    ],
    series: { name: '打造 AI 工作團隊', href: '/ai-work-team/' },
  },
  {
    slug: 'ai-meetings-proposals',
    area: 'ai-workflow',
    name: '我想用 AI 處理會議、週報與提案',
    lead: '把整理交給 AI，把判斷留給自己。',
    intro:
      '用 AI 處理會議記錄、主管週報、客戶提案與簡報演練，並把會議與專案的經驗沉澱成可重複使用的知識。',
    articleIds: [
      'ai-meeting-notes-workflow-summary',
      'ai-weekly-report-manager',
      'claude-vs-chatgpt-proposal',
      'claude-objection-simulation',
      'ai-knowledge-capture-meetings-projects',
      'ai-project-review-knowledge-base',
    ],
  },
  {
    slug: 'ai-data-safety',
    area: 'ai-workflow',
    name: '我想放心地用 AI 處理公司資料與數字',
    lead: '先知道哪些資料該守，產出才敢交給別人。',
    intro:
      '財報、內部文件與分析數據交給 AI 之前，先建立資安底線，並學會檢查產出、保住專業判斷與可信度。',
    articleIds: [
      'ai-finance-data-security-5-bottom-lines',
      'ai-data-analysis-human-ai-collaboration-professionalism',
      'ai-output-quality-check',
      'notebooklm-vs-claude-internal-docs',
    ],
  },
  {
    slug: 'notebooklm-research',
    area: 'notebooklm',
    name: '我想用 NotebookLM 讀文件、做研究',
    lead: '從上傳、提問到整理觀點，把文件讀成判斷。',
    intro:
      '從 NotebookLM 的入門、上傳準備、五種提問方式，到職場研究與 Audio Overview，一次學會讀文件、做研究。',
    articleIds: [
      'notebooklm-complete-guide-2026',
      'notebooklm-upload-preparation',
      'notebooklm-question-types',
      'notebooklm-workplace-research',
      'notebooklm-audio-overview-guide',
    ],
  },
  {
    slug: 'notebooklm-troubleshooting',
    area: 'notebooklm',
    name: '我的 NotebookLM 用起來不理想，或不確定該選哪個工具',
    lead: '亂碼、幻覺、掃描檔讀不到，以及和其他工具的比較。',
    intro:
      'NotebookLM 遇到亂碼、幻覺、掃描 PDF 讀不到時的解法，以及它和 Claude、Notion AI 的差異。',
    articleIds: [
      'notebooklm-problems-solutions',
      'notebooklm-ocr-pdf-solution',
      'notebooklm-vs-claude-internal-docs',
      'notebooklm-vs-notion-ai-knowledge-base',
    ],
  },
  {
    slug: 'validate-idea',
    area: 'business-marketing',
    name: '我想驗證一個想法值不值得做',
    lead: '做產品之前，先確認這門生意成立、有人願意付錢。',
    intro:
      '從生意為什麼成立、消費者需求、需求驗證，到收入成本結構與定價，判斷一個想法值不值得做。',
    articleIds: [
      'why-business-exists-nine-questions',
      'consumer-demand-to-business-opportunity',
      'validate-market-demand-five-methods',
      'beyond-business-model-canvas',
      'pricing-and-profit-structure',
    ],
  },
  {
    slug: 'understand-company-market',
    area: 'business-marketing',
    name: '我想看懂一家公司或一個市場',
    lead: '從公開資訊與競爭，看懂企業真正在做的選擇。',
    intro:
      '用公開資訊分析公司策略、看品牌定位與競爭，並理解免費模式與 AI 如何改變成本與競爭優勢。',
    articleIds: [
      'analyze-company-strategy-public-info',
      'brand-positioning-category-competition',
      'how-ai-changes-cost-and-competition',
      'free-zero-price-business-models',
    ],
  },
  {
    slug: 'marketing-diagnosis',
    area: 'business-marketing',
    name: '我的行銷成效不好，不知道卡在哪',
    lead: '業績不好先別加預算，先找出是哪一段出問題。',
    intro:
      '用流量、轉換、客單價、回購做行銷診斷，並從受眾定義、內容與通路信任，以及評論分析找出真正的問題。',
    articleIds: [
      'marketing-diagnosis-traffic-conversion-aov-repurchase',
      'audience-definition-ad-conversion',
      'audience-is-not-a-label',
      'content-channel-trust-growth',
      'ai-batch-review-analysis',
    ],
  },
  {
    slug: 'copywriting',
    area: 'business-marketing',
    name: '我想寫出有效的文案',
    lead: '從賣點、受眾到 AI 協作，寫出打動人的文案。',
    intro:
      '把產品規格提煉成賣點、先理解受眾再下筆，並避開 AI 文案最常見的三種錯。',
    articleIds: [
      'feature-to-copywriting-selling-point',
      'audience-is-not-a-label',
      'ai-copywriting-audience-data',
      'ai-copywriting-mistakes',
    ],
  },
  {
    slug: 'ai-career',
    area: 'career-business',
    name: '我擔心 AI 時代的職涯',
    lead: '焦慮是正常的，重點是把十年經驗變成判斷力。',
    intro:
      '35 歲、資深員工與中階主管面對 AI 時的職涯定位、機會成本與轉型路徑。',
    articleIds: [
      'ai-era-capability-map',
      'senior-employees-ai-upskilling-strategy-not-replaced',
      'learn-ai-at-35-too-late-roi-metrics',
      'middle-manager-transition-to-ai-curator-3-stages',
      'career-strategy-after-35',
      'career-opportunity-cost-decision',
    ],
  },
  {
    slug: 'portable-skills',
    area: 'career-business',
    name: '我想盤點自己真正帶得走的能力',
    lead: '頭銜帶不走，先盤點哪些能力真正屬於你。',
    intro:
      '用能力盤點工作坊與可攜帶資產，找出能帶到下一個角色的能力，並培養 AI 時代的判斷力。',
    articleIds: [
      'ai-era-capability-map',
      'capability-inventory-workshop',
      'mid-career-portable-assets',
      'judgment-in-ai-era',
    ],
  },
  {
    slug: 'learn-new-things',
    area: 'career-business',
    name: '我想學新東西，建立自己的學習方法',
    lead: '把學習從大量收藏，變成能交付的成果。',
    intro:
      '用 AI 在 30 天內學新領域、用刻意練習把經驗變成能力，並建立最小的個人知識管理系統。',
    articleIds: [
      'learn-new-field-with-ai-30-days',
      'deliberate-practice-knowledge-work',
      'personal-knowledge-system-minimal',
    ],
  },
  {
    slug: 'start-self-media',
    area: 'career-business',
    name: '我想開始經營自媒體',
    lead: '不用等想清楚才開始，先發、再修正。',
    intro:
      '自媒體第一個月怎麼做、個人品牌如何建立信任、受眾怎麼定義，以及內容與通路如何分工。',
    articleIds: [
      'self-media-first-month-positioning-or-posting',
      'personal-brand-trust-not-reach',
      'audience-is-not-a-label',
      'content-channel-trust-growth',
    ],
    series: { name: 'Threads 經營教學', href: '/threads/' },
  },
  {
    slug: 'monetize-expertise',
    area: 'career-business',
    name: '我想把專業變成收入',
    lead: '專業不會自動變成收入，需要一個清楚的 offer。',
    intro:
      '從能力到第一個付費 offer、知識從內容走向產品的三種模式，以及一人公司的工作系統。',
    articleIds: [
      'turn-expertise-into-market-value',
      'content-to-product-knowledge-business',
      'one-person-company-ai-work-system',
      'free-zero-price-business-models',
    ],
  },
];

export const getArea = (slug: string): TopicArea | undefined =>
  topicAreas.find((area) => area.slug === slug);

export const getTopicsByArea = (areaSlug: string): Topic[] =>
  topics.filter((topic) => topic.area === areaSlug);

export const topicUrl = (topic: Pick<Topic, 'area' | 'slug'>): string =>
  `/topics/${topic.area}/${topic.slug}/`;
