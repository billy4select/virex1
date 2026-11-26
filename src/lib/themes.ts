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
    slug: 'career-business',
    name: '職涯與個人事業',
    shortName: '職涯與個人事業',
    readerQuestion: '如何把能力與經驗，變成可以帶走的資產與收入？',
    description:
      '從能力盤點與學習、職涯轉型，到個人品牌與知識變現，談專業如何持續累積並長成自己的事業。',
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
