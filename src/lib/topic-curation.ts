/**
 * 主題：依讀者需求整理的文章集結（2026-11 改版）
 *
 * 結構：領域（8 個）→ 主題（「我想…」句型，每個 3–7 篇）→ 文章。
 * - 領域是 /topics/ 的瀏覽分組，和文章分類（themes.ts，只用在 /blog/ 篩選）各自獨立，
 *   所以領域可以切得比文章分類更細。
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
  'ai-copywriting-mistakes': '從賣點提煉、餵真實受眾資料到修正 AI 長文案三大毛病的完整解法。',
  'ai-data-analysis-human-ai-collaboration-professionalism': '用 AI 做分析時，怎麼保住專業判斷與可信度。',
  'ai-era-capability-map': '判斷力、操作力、學習力三層，決定下一步要學什麼。',
  'ai-finance-data-security-5-bottom-lines': '把敏感數據交給 AI 之前的五條安全底線。',
  'ai-knowledge-capture-meetings-projects': '怎麼把會議與專案，沉澱成下次能用的知識。',
  'ai-meeting-notes-workflow-summary': '怎麼把逐字稿，整理成行動清單與決策摘要。',
  'ai-output-quality-check': '交付前四道審核關卡、去 AI 味編輯三動作，以及主管週報實戰流程。',
  'ai-project-review-knowledge-base': '怎麼把一次專案的經驗，變成可檢索的團隊知識庫。',
  'analyze-company-strategy-public-info': '從收入、顧客、成本、投資、定價五條線索看策略。',
  'audience-is-not-a-label': '從情境、任務、障礙、替代方案到五個低成本市場需求實測驗證。',
  'capability-inventory-workshop': '用 60 分鐘工作坊，盤點 T 型能力與可遷移技能。',
  'career-opportunity-cost-decision': '面對新機會，怎麼把看得見與看不見的成本都算進去。',
  'career-strategy-after-35': '35 歲後，怎麼把經驗轉成市場看得懂的判斷力。',
  'claude-objection-simulation': '簡報前，怎麼用 Claude 先找出客戶會卡住的地方。',
  'claude-vs-chatgpt-proposal': '寫提案時，Claude 和 ChatGPT 各適合做什麼。',
  'content-channel-trust-growth': '觸及、信任、轉換、留存、轉介，內容與通路怎麼分工。',
  'content-to-product-knowledge-business': '知識從免費內容走向產品的三種模式。',
  'deliberate-practice-knowledge-work': '用回饋迴路與作品集，練習寫作、分析與提案。',
  'free-zero-price-business-models': '《免費》一書的四種免費模式，以及怎麼運用。',
  'google-ai-pro-vs-free-limits-family-sharing': 'Google AI Pro 與免費版的核心差距、5 小時額度消耗邏輯與家庭共享規則。',
  'how-ai-changes-cost-and-competition': 'AI 讓哪些成本變便宜、哪些變貴，資源該往哪移。',
  'judgment-in-ai-era': '用三個層次與決策紀錄，訓練 AI 時代的判斷力。',
  'learn-ai-at-35-too-late-roi-metrics': '為什麼十年經驗，是學 AI 時最稀缺的資產。',
  'learn-new-field-with-ai-30-days': '用四週從陌生走到能交付，而不只是大量收藏。',
  'mid-career-portable-assets': '頭銜與預算帶不走，哪五項資產才真正屬於你。',
  'middle-manager-transition-to-ai-curator-3-stages': '中階主管轉型成 AI 策展人的三個階段。',
  'notebooklm-complete-guide-2026': '從上傳前準備、五種提問指令到 Audio Overview 實測的完整使用指南。',
  'notebooklm-problems-solutions': '掃描 PDF 讀不到的免費 OCR 轉換法，加上亂碼、表格與引用錯誤的 7 個排錯方案。',
  'notebooklm-vs-claude-internal-docs': '讀內部文件、寫報告時，Claude 與 NotebookLM 怎麼選。',
  'notebooklm-vs-notion-ai-knowledge-base': '建知識庫時，NotebookLM 與 Notion AI 怎麼選。',
  'notebooklm-workplace-research': '怎麼從資料裡長出觀點，而不只是整理資料。',
  'one-person-company-ai-work-system': '用五個角色與一條交付鏈，建立能穩定接案的系統。',
  'personal-brand-trust-not-reach': '個人品牌靠定位、內容支柱與信任資產，不靠演算法。',
  'personal-knowledge-system-minimal': '收集、理解、輸出三層，建一個最小的知識管理系統。',
  'self-media-first-month-positioning-or-posting': '第一個月不用想完美：先寫暫定定位，再用發文測試修正。',
  'senior-employees-ai-upskilling-strategy-not-replaced': '資深員工面對 AI，可以重新定位的三個方向。',
  'turn-expertise-into-market-value': '六個步驟，整理出第一個可以賣的服務。',
  'almanack-of-naval-ravikant-book-notes': '財富與金錢的差別、專屬知識與三種槓桿，讓價值不只隨工作時間增加。',
  'expert-secrets-book-notes': '專業要變成收入，需要一條從新機會、信念到銷售漏斗與價值階梯的路徑。',
  'storytelling-marketing-book-notes': '用故事替商品與個人品牌增加心理價值，並避開為了感動而失真。',
  'laws-of-communication-book-notes': '16 項溝通法則的脈絡，以及自媒體怎麼靠一致的言行累積信任。',
  'seven-habits-book-notes': '七個習慣的順序、時間四象限與情感帳戶，怎麼放進日常決策。',
  'traffic-pool-book-notes': '把流量當成可累積的資產：流量池、品牌、裂變與存量找增量。',
  'visible-thinking-book-notes': '知道很多卻說不清楚時，怎麼用結構化思考與三種視覺化，整理出自己的觀點。',
  'what-i-didnt-learn-in-business-school': '學會所有行銷理論，為什麼到真實商場仍用不上，以及該補哪三種能力。',
  'why-business-exists-nine-questions': '九個核心問題、畫布外的四個現實透鏡，加上單筆獲利與調價打折實算。',
  'website-speed-seo-checks': 'TTFB、LCP、CLS 三個門檻，以及修復的優先順序。',
  'seo-self-study-guide': '四階段自學路徑與一份 30 天可執行計畫。',
  'search-intent-guide': '四種意圖、兩個現場測試，判斷該寫哪種內容。',
  'seo-writing-why-no-traffic': '好文章沒曝光的五個結構原因與檢測方法。',
  'domain-authority-guide': 'Google 判斷專業度的四個線索，新站該先做哪三件。',
  'free-seo-tools': '九個免費工具各自解決什麼問題、又做不到什麼。',
  'digital-marketing-basics': '需求、通路、訊息三個角，工具是最後一步。',
  'learn-marketing-roadmap': '自學行銷的正確順序，以及為什麼多數人一開始就畫錯。',
  'marketing-calculator': 'CPC、CTR、CPM、CPA、ROAS、ROI 七大公式換算、毛利損益平衡點與報表判讀順序。',
  'ctr-benchmarks-what-counts-as-good': '三層基準判斷好壞、五段漏斗排查受眾與素材，加上 2 天 A/B 測試四象限。',
  'ad-fatigue-frequency-creative-rotation': '頻率上限與素材輪替的節奏怎麼定。',
  'cac-rising-5-checks': '新客成本上升時，五個要依序排除的原因。',
  'ads-not-working-diagnosis': '曝光、點擊、轉換三段診斷，一次只改一段。',
  'ad-budget-new-vs-returning': '用回購週期與毛利率算新客舊客的預算比例。',
  'facebook-ads-cost-rising': 'CPM 上漲的四個結構原因，與三條不離場的路。',
  'ad-performance-reporting-stakeholders': '結論、對照、診斷、下一步的四段報告結構。',
  'marketing-metrics-2026-what-to-track': '從曝光到留存，2026 該追的指標與放棄的指標。',
  'sales-forecast-4-methods': '四種業績預估法、數字範例與三種情境。',
  'marketing-team-roles': '五種職能、三人小隊怎麼兼，以及外包的界線。',
  'ig-insights-report-guide': '六個真正會改變動作的數字，與三層診斷順序。',
  'audience-broad-or-focused': '市場規模、差異化、產能三個判準決定收多窄。',
  'story-marketing-emotional-connection': '具體場景、轉折、代價、留下的問題四段結構。',
  'writing-persuasion-logic': '具體對照、代價陳述、可驗證的下一步。',
  'influencer-marketing-next-step': '大網紅失效後，四種正在取代的做法。',
};

export const topicAreas: TopicArea[] = [
  {
    slug: 'ai-workflow',
    name: 'AI 工作流程與工具',
    question: '怎麼把 AI 放進日常工作，而不是只停在試用？',
    summary: '任務拆解、工具搭配、會議提案、資料分析與資安。',
    lead: '把 AI 放進日常工作，變成可重複的流程。',
  },
  {
    slug: 'notebooklm',
    name: 'NotebookLM 實戰',
    question: '怎麼用 NotebookLM 讀文件、做研究，又不踩坑？',
    summary: '入門、上傳準備、提問方式、疑難排解與工具比較。',
    lead: '用 NotebookLM 讀文件、做研究，並避開常見的坑。',
  },
  {
    slug: 'business-model',
    name: '商業模式與獲利',
    question: '一門生意為什麼成立，又怎麼賺到錢？',
    summary: '需求驗證、獲利結構、定價與公司分析。',
    lead: '先看懂一門生意怎麼成立，再判斷值不值得做。',
  },
  {
    slug: 'marketing',
    name: '行銷、SEO 與廣告',
    question: '行銷卡住的時候，該先檢查哪一段？',
    summary: '行銷診斷、受眾、SEO 內容、廣告數據與預算分配。',
    lead: '找出行銷卡在哪一段，再決定怎麼改。',
  },
  {
    slug: 'career',
    name: '職涯與 AI 時代',
    question: '面對 AI 與職涯轉折，我的能力還剩下什麼價值？',
    summary: '能力盤點、轉型決策與 AI 時代的判斷力。',
    lead: '把十年經驗整理成帶得走的能力，再決定下一步。',
  },
  {
    slug: 'learning',
    name: '學習與知識管理',
    question: '怎麼把讀到、學到的東西，變成自己的東西？',
    summary: '學習方法、知識系統、思考表達與讀書心得。',
    lead: '讓學習有產出，讓知識留得下來、用得出去。',
  },
  {
    slug: 'book-guides',
    name: '書籍導讀',
    question: '想透過一本好書，理解商業、行銷、思考與個人成長？',
    summary: '以完整讀書心得帶你理解一本書的核心觀念，並思考如何應用在工作與生活。',
    lead: '不只整理一本書說了什麼，也帶你看懂觀念背後的脈絡，以及可以怎麼用。',
  },
  {
    slug: 'personal-business',
    name: '自媒體與個人事業',
    question: '怎麼從發出第一篇內容，走到有人願意付費？',
    summary: '自媒體起步、Threads 經營、一人公司與知識變現。',
    lead: '從發出第一篇內容開始，慢慢長成自己的事業。',
  },
];

export const topics: Topic[] = [
  // ───────── AI 工作流程與工具 ─────────
  {
    slug: 'start-with-ai',
    area: 'ai-workflow',
    name: '我想開始用 AI 工作，但不知道從哪裡下手',
    lead: '先拆任務、再選工具，把 AI 變成可以重複使用的工作流程。',
    intro:
      '想用 AI 工作卻不知道從哪開始？配合《打造 AI 工作團隊》專題與交付前的品質檢查，帶你把 AI 放進真實工作。',
    articleIds: [
      'ai-output-quality-check',
      'ai-meeting-notes-workflow-summary',
      'claude-vs-chatgpt-proposal',
      'google-ai-pro-vs-free-limits-family-sharing',
    ],
    series: { name: '打造 AI 工作團隊', href: '/ai-work-team/' },
  },
  {
    slug: 'ai-tool-stack',
    area: 'ai-workflow',
    name: '我想搭配多個 AI 工具，讓它們各司其職',
    lead: '不是找一個最強的工具，而是知道每個工具該做什麼。',
    intro:
      'ChatGPT、Claude、NotebookLM 怎麼分工與交接？從免費與付費額度評估，到寫提案、讀內部文件時的選擇。',
    articleIds: [
      'google-ai-pro-vs-free-limits-family-sharing',
      'claude-vs-chatgpt-proposal',
      'notebooklm-vs-claude-internal-docs',
      'notebooklm-vs-notion-ai-knowledge-base',
    ],
    series: { name: '打造 AI 工作團隊（多工具分工）', href: '/ai-work-team/lesson-05/' },
  },
  {
    slug: 'ai-meetings-proposals',
    area: 'ai-workflow',
    name: '我想用 AI 處理會議、週報與提案',
    lead: '把整理交給 AI，把判斷留給自己。',
    intro:
      '用 AI 處理會議記錄、主管週報、報告審核、客戶提案與簡報演練，並把會議與專案的經驗沉澱成可重複使用的知識。',
    articleIds: [
      'ai-meeting-notes-workflow-summary',
      'ai-output-quality-check',
      'claude-vs-chatgpt-proposal',
      'claude-objection-simulation',
      'ai-knowledge-capture-meetings-projects',
      'ai-project-review-knowledge-base',
    ],
  },
  {
    slug: 'ai-analysis',
    area: 'ai-workflow',
    name: '我想用 AI 做資料、評論與研究分析',
    lead: '讓 AI 幫你處理量，判斷與結論留給自己。',
    intro:
      '用 AI 批次分析顧客評論、處理分析資料、從文件中長出觀點，並在交付前檢查產出的可信度。',
    articleIds: [
      'ai-batch-review-analysis',
      'ai-data-analysis-human-ai-collaboration-professionalism',
      'notebooklm-workplace-research',
      'ai-output-quality-check',
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

  // ───────── NotebookLM 實戰 ─────────
  {
    slug: 'notebooklm-research',
    area: 'notebooklm',
    name: '我想用 NotebookLM 讀文件、做研究',
    lead: '從上傳、提問到整理觀點，把文件讀成判斷。',
    intro:
      '從 NotebookLM 的完整實戰指南、上傳準備、五種提問方式、Audio Overview 到職場研究，一次學會讀文件、做研究。',
    articleIds: [
      'notebooklm-complete-guide-2026',
      'notebooklm-workplace-research',
    ],
  },
  {
    slug: 'notebooklm-troubleshooting',
    area: 'notebooklm',
    name: '我的 NotebookLM 讀不到檔案、亂碼或亂回答',
    lead: '亂碼、幻覺、掃描檔讀不到，一個一個解。',
    intro:
      'NotebookLM 遇到 PDF 亂碼、回答出現幻覺、掃描檔讀不到時，要先檢查什麼、怎麼用免費 OCR 轉換，一次排錯。',
    articleIds: [
      'notebooklm-problems-solutions',
      'notebooklm-complete-guide-2026',
    ],
  },
  {
    slug: 'notebooklm-vs-others',
    area: 'notebooklm',
    name: '我不確定該用 NotebookLM，還是其他 AI 工具',
    lead: '依任務選工具：讀文件、寫報告、建知識庫各有最適合的。',
    intro:
      'NotebookLM 與 Claude、Notion AI 的差異，以及在讀文件、寫報告、建知識庫時，怎麼分工與交接。',
    articleIds: [
      'notebooklm-vs-claude-internal-docs',
      'notebooklm-vs-notion-ai-knowledge-base',
    ],
    series: { name: '打造 AI 工作團隊（三種 AI 大腦分工）', href: '/ai-work-team/lesson-05/' },
  },

  // ───────── 商業模式與獲利 ─────────
  {
    slug: 'validate-idea',
    area: 'business-model',
    name: '我想驗證一個想法值不值得做',
    lead: '做產品之前，先確認這門生意成立、有人願意付錢。',
    intro:
      '從生意為什麼成立、受眾分析與五個低成本需求實測，到單筆獲利結構與定價，判斷一個想法值不值得做。',
    articleIds: [
      'why-business-exists-nine-questions',
      'audience-is-not-a-label',
      'audience-broad-or-focused',
    ],
  },
  {
    slug: 'profit-pricing',
    area: 'business-model',
    name: '我想搞懂一門生意怎麼賺錢、怎麼定價',
    lead: '營收不差卻沒剩錢時，問題通常出在獲利結構。',
    intro:
      '從單筆獲利結構、商業模式畫布看不到的成本，到免費模式與 AI 帶來的成本變化，看懂一門生意怎麼賺錢。',
    articleIds: [
      'why-business-exists-nine-questions',
      'free-zero-price-business-models',
      'how-ai-changes-cost-and-competition',
      'content-to-product-knowledge-business',
    ],
  },
  {
    slug: 'understand-company-market',
    area: 'business-model',
    name: '我想看懂一家公司或一個市場',
    lead: '從公開資訊與競爭，看懂企業真正在做的選擇。',
    intro:
      '用公開資訊分析公司策略、理解 AI 如何改變競爭優勢，並補上策略工具在真實商場的限制。',
    articleIds: [
      'analyze-company-strategy-public-info',
      'how-ai-changes-cost-and-competition',
      'what-i-didnt-learn-in-business-school',
    ],
    series: { name: '行銷從診斷開始（品牌定位章節）', href: '/marketing/positioning/' },
  },

  // ───────── 行銷與文案 ─────────
  {
    slug: 'marketing-diagnosis',
    area: 'marketing',
    name: '我的行銷成效不好，不知道卡在哪',
    lead: '業績不好先別加預算，先找出是哪一段出問題。',
    intro:
      '搭配《行銷從診斷開始》四段診斷章節，從核心指標、受眾定義、內容與通路信任，以及評論分析找出真正的問題。',
    articleIds: [
      'marketing-metrics-2026-what-to-track',
      'ig-insights-report-guide',
      'ads-not-working-diagnosis',
      'audience-is-not-a-label',
      'content-channel-trust-growth',
      'marketing-team-roles',
      'traffic-pool-book-notes',
    ],
    series: { name: '行銷從診斷開始（業績診斷章節）', href: '/marketing/diagnosis/' },
  },
  {
    slug: 'know-your-audience',
    area: 'marketing',
    name: '我想搞懂我的受眾到底是誰',
    lead: '受眾不是標籤，是一群有情境、任務與障礙的人。',
    intro:
      '從受眾四要素、需求驗證到評論分析，用情境、任務、障礙與替代方案，重新看清你的受眾。',
    articleIds: [
      'audience-is-not-a-label',
      'audience-broad-or-focused',
      'ai-batch-review-analysis',
    ],
    series: { name: '行銷從診斷開始（受眾定義章節）', href: '/marketing/audience/' },
  },
  {
    slug: 'brand-positioning',
    area: 'marketing',
    name: '我想讓品牌或自己有清楚的定位',
    lead: '顧客把你跟誰比，才是定位的起點。',
    intro:
      '從品類與競爭看品牌定位，再到個人品牌如何靠信任而不是觸及累積，以及內容與通路的分工。',
    articleIds: [
      'audience-is-not-a-label',
      'personal-brand-trust-not-reach',
      'content-channel-trust-growth',
    ],
    series: { name: '行銷從診斷開始（品牌定位章節）', href: '/marketing/positioning/' },
  },
  {
    slug: 'copywriting',
    area: 'marketing',
    name: '我想寫出有效的文案',
    lead: '從賣點、受眾到 AI 協作，寫出打動人的文案。',
    intro:
      '把產品規格提煉成賣點、先理解受眾再下筆，並避開 AI 文案最常見的三種錯。',
    articleIds: [
      'audience-is-not-a-label',
      'story-marketing-emotional-connection',
      'writing-persuasion-logic',
      'ai-copywriting-mistakes',
    ],
  },

  {
    slug: 'seo-from-zero',
    area: 'marketing',
    name: '我想讓網站開始有搜尋流量',
    lead: '先判斷意圖，再寫，最後把文章串成集群。',
    intro:
      '從 SEO 自學順序、搜尋意圖、無流量排錯到網站速度，並搭配《SEO 從零開始》關鍵字、文章結構與內部連結章節，把網站寫出穩定流量。',
    articleIds: [
      'seo-self-study-guide',
      'search-intent-guide',
      'seo-writing-why-no-traffic',
      'website-speed-seo-checks',
    ],
    series: { name: 'SEO 從零開始（完整 7 章教學）', href: '/seo/' },
  },
  {
    slug: 'seo-authority-tools',
    area: 'marketing',
    name: '我想搞懂網站權重跟 SEO 工具怎麼用',
    lead: '權重不是一個分數，工具也不是萬能。',
    intro:
      'Google 怎麼判斷專業度、免費 SEO 工具各自解決什麼問題，以及自學行銷該從哪一步開始。',
    articleIds: [
      'domain-authority-guide',
      'free-seo-tools',
      'digital-marketing-basics',
      'learn-marketing-roadmap',
    ],
  },
  {
    slug: 'ads-numbers',
    area: 'marketing',
    name: '我想看懂廣告數字，決定要不要加預算',
    lead: '七個公式、三層對照，先算清楚再決定加不加。',
    intro:
      '從 CPC、CTR、ROAS、ROI 公式與毛利損益平衡點，到「多少算好」與受眾素材排查，最後把數字寫成一份能說服老闆的報告。',
    articleIds: [
      'marketing-calculator',
      'ctr-benchmarks-what-counts-as-good',
      'ad-performance-reporting-stakeholders',
      'sales-forecast-4-methods',
    ],
  },
  {
    slug: 'ads-cost-and-budget',
    area: 'marketing',
    name: '我的廣告沒效果，成本還一直漲',
    lead: '先分段診斷，再談預算怎麼分。',
    intro:
      '曝光、點擊、轉換三段診斷，加上 CTR 與受眾素材排查、素材疲勞、新客成本與預算比例，找出成本上升的真正原因。',
    articleIds: [
      'ads-not-working-diagnosis',
      'ctr-benchmarks-what-counts-as-good',
      'ad-fatigue-frequency-creative-rotation',
      'cac-rising-5-checks',
      'facebook-ads-cost-rising',
      'ad-budget-new-vs-returning',
      'influencer-marketing-next-step',
    ],
  },

  // ───────── 職涯與 AI 時代 ─────────
  {
    slug: 'ai-career',
    area: 'career',
    name: '我擔心 AI 時代的職涯',
    lead: '焦慮是正常的，重點是把十年經驗變成判斷力。',
    intro:
      '35 歲與資深員工面對 AI 時，該學什麼、經驗為什麼仍是稀缺資產，以及怎麼重新定位自己。',
    articleIds: [
      'ai-era-capability-map',
      'senior-employees-ai-upskilling-strategy-not-replaced',
      'learn-ai-at-35-too-late-roi-metrics',
    ],
  },
  {
    slug: 'career-transition',
    area: 'career',
    name: '我正在考慮轉職或轉型',
    lead: '面對新機會，先把看得見與看不見的成本都算進去。',
    intro:
      '中階主管轉型、35 歲後的職涯策略、機會成本的算法，以及離開現職後還帶得走的資產。',
    articleIds: [
      'middle-manager-transition-to-ai-curator-3-stages',
      'career-strategy-after-35',
      'career-opportunity-cost-decision',
      'mid-career-portable-assets',
    ],
  },
  {
    slug: 'portable-skills',
    area: 'career',
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
    slug: 'ai-judgment',
    area: 'career',
    name: '我想培養 AI 時代的判斷力',
    lead: 'AI 能給答案，判斷要自己練。',
    intro:
      '用三個層次與決策紀錄訓練判斷力，並在用 AI 分析與交付時，保住專業判斷與可信度。',
    articleIds: [
      'judgment-in-ai-era',
      'ai-data-analysis-human-ai-collaboration-professionalism',
      'ai-output-quality-check',
      'deliberate-practice-knowledge-work',
    ],
  },

  // ───────── 學習與知識管理 ─────────
  {
    slug: 'learn-new-things',
    area: 'learning',
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
    slug: 'knowledge-system',
    area: 'learning',
    name: '我想建立自己的知識管理系統',
    lead: '收集、理解、輸出，讓經驗留得下來、找得回來。',
    intro:
      '從最小的個人知識系統，到把會議、專案經驗沉澱成知識庫，以及知識庫工具怎麼選。',
    articleIds: [
      'personal-knowledge-system-minimal',
      'ai-knowledge-capture-meetings-projects',
      'ai-project-review-knowledge-base',
      'notebooklm-vs-notion-ai-knowledge-base',
    ],
  },
  {
    slug: 'clear-thinking',
    area: 'learning',
    name: '我想把想法整理清楚，表達得有說服力',
    lead: '說不清楚，常常是因為還沒整理出自己的觀點。',
    intro:
      '用結構化思考與視覺化整理觀點，再把整理邏輯的工作，用在週報、簡報演練與日常表達上。',
    articleIds: [
      'visible-thinking-book-notes',
      'ai-output-quality-check',
      'claude-objection-simulation',
      'deliberate-practice-knowledge-work',
      'laws-of-communication-book-notes',
    ],
  },
  {
    slug: 'books-business-marketing',
    area: 'book-guides',
    name: '我想找商業與行銷的好書',
    lead: '不只是書摘，而是讀完之後怎麼用在工作上。',
    intro:
      '《不只是件白襯衫》《流量池》《故事行銷》《專家機密》《免費》的讀書心得，談策略、流量、故事、銷售漏斗與免費模式，以及讀完怎麼用。',
    articleIds: [
      'what-i-didnt-learn-in-business-school',
      'traffic-pool-book-notes',
      'storytelling-marketing-book-notes',
      'expert-secrets-book-notes',
      'free-zero-price-business-models',
    ],
  },
  {
    slug: 'books-growth-expression',
    area: 'book-guides',
    name: '我想找個人成長、思考與表達的好書',
    lead: '把一本書讀成自己的判斷與做法。',
    intro:
      '《與成功有約》《納瓦爾寶典》《溝通的黃金法則》《看得見的高效思考》的讀書心得，談時間、槓桿、溝通與結構化思考，以及怎麼用在工作與自媒體。',
    articleIds: [
      'seven-habits-book-notes',
      'almanack-of-naval-ravikant-book-notes',
      'laws-of-communication-book-notes',
      'visible-thinking-book-notes',
    ],
  },

  // ───────── 自媒體與個人事業 ─────────
  {
    slug: 'start-self-media',
    area: 'personal-business',
    name: '我想開始經營自媒體',
    lead: '不用等想清楚才開始，先發、再修正。',
    intro:
      '自媒體第一個月怎麼做、個人品牌如何建立信任、受眾怎麼定義，以及內容與通路如何分工。',
    articleIds: [
      'self-media-first-month-positioning-or-posting',
      'personal-brand-trust-not-reach',
      'audience-is-not-a-label',
      'content-channel-trust-growth',
      'storytelling-marketing-book-notes',
      'laws-of-communication-book-notes',
    ],
    series: { name: 'Threads 經營教學', href: '/threads/' },
  },
  {
    slug: 'monetize-expertise',
    area: 'personal-business',
    name: '我想把專業變成收入',
    lead: '專業不會自動變成收入，需要一個清楚的 offer。',
    intro:
      '從能力到第一個付費 offer、知識從內容走向產品的三種模式，以及一人公司的工作系統。',
    articleIds: [
      'turn-expertise-into-market-value',
      'content-to-product-knowledge-business',
      'one-person-company-ai-work-system',
      'free-zero-price-business-models',
      'almanack-of-naval-ravikant-book-notes',
      'expert-secrets-book-notes',
    ],
  },
  {
    slug: 'one-person-company',
    area: 'personal-business',
    name: '我想用一人公司的方式工作與接案',
    lead: '一個人也能有穩定的角色分工與交付流程。',
    intro:
      '用五個角色與一條交付鏈建立一人公司的 AI 工作系統，從盤點能力到整理出第一個可以賣的服務。',
    articleIds: [
      'one-person-company-ai-work-system',
      'capability-inventory-workshop',
      'turn-expertise-into-market-value',
    ],
    series: { name: '打造 AI 工作團隊', href: '/ai-work-team/' },
  },
  {
    slug: 'threads-growth',
    area: 'personal-business',
    name: '我想在 Threads 上從零開始經營',
    lead: '先有觀點，再談流量，最後才是導流與變現。',
    intro:
      '完整 Threads 140 天實戰、人設語氣、貼文 SEO、與 IG 分工及商業帳號經營皆已整併進《Threads 經營教學》專題；下方搭配個人品牌與內容通路底層邏輯文章。',
    articleIds: [
      'self-media-first-month-positioning-or-posting',
      'personal-brand-trust-not-reach',
      'content-channel-trust-growth',
      'laws-of-communication-book-notes',
    ],
    series: { name: 'Threads 經營教學', href: '/threads/' },
  },
];

export const getArea = (slug: string): TopicArea | undefined =>
  topicAreas.find((area) => area.slug === slug);

export const getTopicsByArea = (areaSlug: string): Topic[] =>
  topics.filter((topic) => topic.area === areaSlug);

export const topicUrl = (topic: Pick<Topic, 'area' | 'slug'>): string =>
  `/topics/${topic.area}/${topic.slug}/`;

/** 9 大文章分類對應到 /topics/ 領域支柱頁 */
const categoryToAreaSlug: Record<string, string> = {
  'AI 工作流程與工具': 'ai-workflow',
  'NotebookLM 實戰': 'notebooklm',
  '商業模式與獲利': 'business-model',
  '行銷策略與診斷': 'marketing',
  '廣告與投放': 'marketing',
  '內容與 SEO': 'marketing',
  '自媒體與個人事業': 'personal-business',
  '職涯與轉型': 'career',
  '書籍導讀': 'book-guides',
};

export interface ArticleTopicCluster {
  pillarName: string;
  pillarHref: string;
  pillarLead: string;
  areaName: string;
  areaHref: string;
  relatedPosts: Array<{
    id: string;
    title: string;
    summary: string;
    href: string;
  }>;
}

interface MinimalPost {
  id: string;
  data: {
    title: string;
    description: string;
    category?: string;
  };
}

/**
 * 幫單篇文章找出所屬的 /topics/ 支柱頁與 2 篇同主題延伸文章。
 * 1. 先比對精選主題（topics），連回 /topics/[area]/[topic]/ 與同主題鄰近 2 篇。
 * 2. 若文章尚未編入子主題，自動退回所屬 /topics/[area]/ 領域支柱頁與同分類 2 篇。
 */
export function getArticleTopicCluster(
  postId: string,
  categoryName: string | undefined,
  publishedPosts: MinimalPost[],
  excludeId?: string
): ArticleTopicCluster | undefined {
  const postById = new Map(publishedPosts.map((post) => [post.id, post]));
  const matchedTopic = topics.find((topic) => topic.articleIds.includes(postId));

  if (matchedTopic) {
    const area = getArea(matchedTopic.area);
    const currentIndex = matchedTopic.articleIds.indexOf(postId);
    const orderedCandidates = [
      ...matchedTopic.articleIds.slice(currentIndex + 1),
      ...matchedTopic.articleIds.slice(0, currentIndex),
    ].filter((id) => id !== postId && postById.has(id));

    // 盡量避開跟下方「下一篇」重複，若候選不足再補回
    const preferred = orderedCandidates.filter((id) => id !== excludeId);
    const pickedIds = (preferred.length >= 2 ? preferred : orderedCandidates).slice(0, 2);

    const relatedPosts = pickedIds
      .map((id) => {
        const item = postById.get(id);
        if (!item) return null;
        return {
          id: item.id,
          title: item.data.title,
          summary: articleOutcomes[item.id] || item.data.description,
          href: `/blog/${item.id}/`,
        };
      })
      .filter((item): item is NonNullable<typeof item> => Boolean(item));

    return {
      pillarName: matchedTopic.name,
      pillarHref: topicUrl(matchedTopic),
      pillarLead: matchedTopic.lead,
      areaName: area?.name ?? '所有主題',
      areaHref: area ? `/topics/${area.slug}/` : '/topics/',
      relatedPosts,
    };
  }

  const areaSlug = (categoryName && categoryToAreaSlug[categoryName]) || 'ai-workflow';
  const area = getArea(areaSlug);
  if (!area) return undefined;

  const sameCategory = publishedPosts.filter(
    (post) => post.id !== postId && post.data.category === categoryName
  );
  const preferred = sameCategory.filter((post) => post.id !== excludeId);
  const picked = (preferred.length >= 2 ? preferred : sameCategory).slice(0, 2);

  return {
    pillarName: `${area.name}主題總覽`,
    pillarHref: `/topics/${area.slug}/`,
    pillarLead: area.lead,
    areaName: area.name,
    areaHref: `/topics/${area.slug}/`,
    relatedPosts: picked.map((item) => ({
      id: item.id,
      title: item.data.title,
      summary: articleOutcomes[item.id] || item.data.description,
      href: `/blog/${item.id}/`,
    })),
  };
}

