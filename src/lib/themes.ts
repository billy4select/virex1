import type { BlogPost } from './blog';

export interface BlogTheme {
  slug: string;
  name: string;
  shortName: string;
  eyebrow: string;
  readerQuestion: string;
  description: string;
  indexable: boolean;
}

/**
 * 全站只有三個主題。
 * 文章分類、/topics/ 與 /blog/ 的篩選都使用這份定義，避免名稱分叉。
 */
export const blogThemes: BlogTheme[] = [
  {
    slug: 'ability-learning',
    name: '能力與學習',
    shortName: '能力與學習',
    eyebrow: '主題 01',
    readerQuestion: '工具很多，哪一個真的能放進工作？',
    description: '從 AI 工具、工作流程到學習方法，整理那些真的能放進日常工作的能力。',
    indexable: true,
  },
  {
    slug: 'business-thinking',
    name: '商業與思考',
    shortName: '商業與思考',
    eyebrow: '主題 02',
    readerQuestion: '怎麼把產品價值說清楚，讓對的人願意買？',
    description: '從受眾、賣點、文案到提案，拆解行銷判斷與商業溝通。',
    indexable: true,
  },
  {
    slug: 'personal-growth',
    name: '個人發展與事業',
    shortName: '個人發展與事業',
    eyebrow: '主題 03',
    readerQuestion: '一個人怎麼把能力與經驗變成下一階段的機會？',
    description: 'AI 時代的職涯轉型、專業判斷與個人累積，讓能力變成可持續發展的路徑。',
    indexable: true,
  },
];

export const themeUrl = (slug: string) => `/topics/${slug}/`;

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
