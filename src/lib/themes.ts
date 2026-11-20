import type { BlogPost } from './blog';

export interface ThemeQuestion {
  title: string;
  text: string;
}

export interface ThemeResource {
  label: string;
  href: string;
  description: string;
}

export interface ThemeSubcluster {
  slug: string;
  name: string;
  description: string;
  matchTags: string[];
}

export interface BlogTheme {
  slug: string;
  name: string;
  shortName: string;
  eyebrow: string;
  description: string;
  intro: string;
  /** 沒有內容或內容不足的主題先不進搜尋索引 */
  indexable: boolean;
  questions: ThemeQuestion[];
  resources: ThemeResource[];
  subclusters?: ThemeSubcluster[];
}

export const blogThemes: BlogTheme[] = [
  {
    slug: 'ai-tech',
    name: 'AI 與科技',
    shortName: 'AI 與科技',
    eyebrow: '研究主題 01',
    description: '研究 AI 工具、科技發展，以及這些新技術如何改變我們的工作方式與生活。',
    intro:
      '這裡不追工具的新聞熱度，而是研究一個更具體的問題：當 AI 真的放進工作裡，哪些環節會變快、哪些判斷不能交出去、哪些能力反而會增值。從會議紀錄、週報、專案複盤，到 NotebookLM 與 Claude 的實際使用邊界，都是這個主題正在累積的答案。',
    indexable: true,
    questions: [
      {
        title: '工具怎麼選',
        text: 'ChatGPT、Claude、NotebookLM、Notion AI 各自適合什麼場景，又有什麼限制？',
      },
      {
        title: '工作怎麼改',
        text: '會議、週報、專案複盤與知識管理，如何變成可重複的 AI 工作流程？',
      },
      {
        title: '判斷怎麼留',
        text: '哪些事可以交給 AI，哪些判斷仍應由人負責，界線要畫在哪裡？',
      },
    ],
    resources: [
      {
        label: 'AI 工作團隊實驗室',
        href: '/ai-work-team/',
        description: '六課 AI 工作流程教學與可下載的 SOP 模板。',
      },
      {
        label: 'NotebookLM 完整攻略',
        href: '/blog/notebooklm-complete-guide-2026/',
        description: '從建立筆記本到進階提問的長文起點。',
      },
    ],
    subclusters: [
      {
        slug: 'ai-tools',
        name: 'AI 工具選型',
        description: '把工具放回實際場景比較：輸出品質、資料邊界、價格與使用成本。',
        matchTags: ['工具比較評測', '數據與資安'],
      },
      {
        slug: 'notebooklm',
        name: 'NotebookLM',
        description: '從入門、提問、疑難排解到真實評測，讓上傳的資料變成有根據的答案。',
        matchTags: ['NotebookLM教學', 'NotebookLM疑難排解'],
      },
      {
        slug: 'ai-workflow',
        name: 'AI 工作流程',
        description: '會議、週報、專案複盤與跨工具協作，把 AI 接進真正的工作環節。',
        matchTags: ['AI工作流程', '知識管理'],
      },
    ],
  },
  {
    slug: 'business-marketing',
    name: '商業與行銷',
    shortName: '商業與行銷',
    eyebrow: '研究主題 02',
    description: '從企業、品牌、產品與市場案例，理解商業如何運作，以及一門生意如何成長。',
    intro:
      '行銷不是把東西說得更好聽，而是先理解一門生意為什麼成立。這個主題從受眾、賣點、文案與提案出發，拆解那些看起來像創意問題、其實是商業判斷的問題。AI 可以幫你寫得更快，但要不要這樣寫，仍然得由人決定。',
    indexable: true,
    questions: [
      {
        title: '受眾是誰',
        text: '廣告燒了很多錢卻沒有轉換，問題為什麼常出在受眾定義而不是創意？',
      },
      {
        title: '賣點怎麼提',
        text: '如何從產品功能提煉出使用者願意買的理由，而不是堆疊形容詞？',
      },
      {
        title: '文案怎麼判斷',
        text: 'AI 寫的文案要怎麼改、怎麼驗，才不會每篇都像同一個模板？',
      },
    ],
    resources: [
      {
        label: '受眾定義與轉換',
        href: '/blog/audience-definition-ad-conversion/',
        description: '從廣告轉換率回頭檢查受眾設定。',
      },
      {
        label: '賣點提煉實戰',
        href: '/blog/feature-to-copywriting-selling-point/',
        description: '把產品功能翻譯成使用者在乎的說法。',
      },
    ],
  },
  {
    slug: 'investment-market',
    name: '投資與市場',
    shortName: '投資與市場',
    eyebrow: '研究主題 03',
    description: '觀察企業、產業與市場變化，研究價格背後的商業邏輯。',
    intro:
      '這個主題正在研究中，目前還沒有正式發布的文章。未來會從企業、產業與市場變化出發，研究價格背後的商業邏輯，而不是追逐短線題材。如果你不想漏掉第一批內容，可以先訂閱電子報。',
    indexable: false,
    questions: [
      {
        title: '企業與產業',
        text: '一門生意的競爭優勢從哪裡來，產業結構如何影響長期結果？',
      },
      {
        title: '價格與市場',
        text: '價格變動背後是供需、情緒、資金，還是市場對未來的重新定價？',
      },
      {
        title: '決策與風險',
        text: '如何建立可重複的判斷框架，而不是每次都被市場情緒牽著走？',
      },
    ],
    resources: [
      {
        label: '訂閱電子報',
        href: 'https://billy4select.substack.com/',
        description: '第一批投資與市場研究發布時，優先收到通知。',
      },
      {
        label: '回到所有主題',
        href: '/blog/',
        description: '先看目前已經累積的其他研究主題。',
      },
    ],
  },
  {
    slug: 'personal-brand',
    name: '個人品牌與事業',
    shortName: '個人品牌與事業',
    eyebrow: '研究主題 04',
    description: '探索內容創作、個人品牌、知識產品，以及一個人建立事業的各種可能。',
    intro:
      '當工具越來越便宜，真正稀缺的是判斷、觀點與持續累積的能力。這個主題談 AI 時代的職涯轉型、中階主管的角色變化、知識資產的累積，也談一個人如何用內容與知識產品建立自己的事業。',
    indexable: true,
    questions: [
      {
        title: '能力怎麼累積',
        text: 'AI 時代哪些能力會貶值、哪些能力會增值，現在應該把時間放在哪裡？',
      },
      {
        title: '職涯怎麼轉',
        text: '中階主管與資深工作者，如何從執行者轉型成 AI 策展人？',
      },
      {
        title: '事業怎麼建',
        text: '內容、個人品牌與知識產品，如何從興趣變成可持續的事業？',
      },
    ],
    resources: [
      {
        label: '35 歲學 AI 會太晚嗎',
        href: '/blog/learn-ai-at-35-too-late-roi-metrics/',
        description: '用投資報酬率而不是焦慮，回答轉型問題。',
      },
      {
        label: '中階主管的 AI 轉型',
        href: '/blog/middle-manager-transition-to-ai-curator-3-stages/',
        description: '從旁觀者到 AI 策展人的三個階段。',
      },
    ],
  },
];

export const themeUrl = (slug: string) => `/blog/category/${slug}/`;

export function getThemeBySlug(slug: string): BlogTheme | undefined {
  return blogThemes.find((theme) => theme.slug === slug);
}

export function getThemeByName(name: string | undefined): BlogTheme {
  return blogThemes.find((theme) => theme.name === name) ?? blogThemes[0];
}

export function getThemePosts(posts: BlogPost[], theme: BlogTheme): BlogPost[] {
  return posts.filter((post) => post.data.category === theme.name);
}

export function getThemeCounts(posts: BlogPost[]): { theme: BlogTheme; count: number }[] {
  return blogThemes.map((theme) => ({
    theme,
    count: getThemePosts(posts, theme).length,
  }));
}

/** AI 與科技頁的內容分區；其他主題沒有 subclusters，回傳 null。 */
export function getSubclusterForPost(
  post: BlogPost,
  theme: BlogTheme
): ThemeSubcluster | null {
  if (!theme.subclusters) return null;
  const tags = new Set((post.data.tags || []).map((tag) => String(tag).trim()));
  return (
    theme.subclusters.find((cluster) =>
      cluster.matchTags.some((tag) => tags.has(tag))
    ) ?? theme.subclusters[theme.subclusters.length - 1]
  );
}

export function getSubclusterPosts(
  posts: BlogPost[],
  theme: BlogTheme,
  cluster: ThemeSubcluster
): BlogPost[] {
  return posts.filter((post) => getSubclusterForPost(post, theme)?.slug === cluster.slug);
}
