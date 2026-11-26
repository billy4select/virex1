import type { BlogPost } from './blog';

export interface BlogTheme {
  slug: string;
  name: string;
  shortName: string;
  readerQuestion: string;
  description: string;
  indexable: boolean;
}

/**
 * 文章分類：每篇文章的主要歸屬（麵包屑、標籤、文章庫篩選用）。
 * 主題頁（/topics/）是另外編輯的文章集結，領域與主題都比文章分類更細，見 topic-curation.ts，兩者互相獨立。
 * 文章分類只用在文章頁麵包屑與 /blog/ 的篩選。
 */
export const blogThemes: BlogTheme[] = [
  {
    slug: 'ai-workflow',
    name: 'AI 工作流程與工具',
    shortName: 'AI 工作流程',
    readerQuestion: '怎麼把 AI 放進日常工作，而不是只停在試用？',
    description:
      '從任務拆解、工具選擇、提案與會議，到知識沉澱與資料安全，整理能重複使用的 AI 工作方式。',
    indexable: true,
  },
  {
    slug: 'notebooklm',
    name: 'NotebookLM 實戰',
    shortName: 'NotebookLM',
    readerQuestion: '怎麼用 NotebookLM 讀文件、做研究，又不踩坑？',
    description:
      '從入門、上傳準備、提問方式，到常見問題與工具比較，解決職場研究與文件整理的實際問題。',
    indexable: true,
  },
  {
    slug: 'business-marketing',
    name: '商業與行銷',
    shortName: '商業與行銷',
    readerQuestion: '如何理解市場、顧客與一門生意的運作？',
    description:
      '從需求驗證、商業模式與定價，到受眾、定位、文案與行銷診斷，整理看懂市場與生意的方法。',
    indexable: true,
  },
  {
    slug: 'self-media',
    name: '自媒體與個人事業',
    shortName: '自媒體',
    readerQuestion: '怎麼從發出第一篇內容，走到有人願意付費？',
    description:
      '自媒體起步、個人品牌、一人公司與知識變現，談內容怎麼累積成信任，再變成收入。',
    indexable: true,
  },
  {
    slug: 'career',
    name: '職涯與轉型',
    shortName: '職涯',
    readerQuestion: '面對 AI 與職涯轉折，我的能力還剩下什麼價值？',
    description:
      '能力盤點、轉型決策、學習路徑與可攜帶資產，把經驗整理成帶得走的能力。',
    indexable: true,
  },
  {
    slug: 'book-guides',
    name: '書籍導讀',
    shortName: '書籍',
    readerQuestion: '想透過一本好書，理解商業、行銷、思考與個人成長？',
    description:
      '完整的讀書心得：一本書說了什麼、背後的脈絡是什麼，以及可以怎麼用在工作與生活。',
    indexable: true,
  },
];

/** 文章分類的入口：/blog/ 的篩選（分類沒有自己的頁面） */
export const themeUrl = (slug: string) => `/blog/?theme=${slug}`;

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
