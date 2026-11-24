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
 * 全站四個主題。
 * 文章分類、/topics/ 與 /blog/ 的篩選都使用這份定義，避免名稱分叉。
 */
export const blogThemes: BlogTheme[] = [
  {
    slug: 'ability-learning',
    name: '能力與學習',
    shortName: '能力與學習',
    readerQuestion: '工具很多，哪一個真的能放進工作？',
    description: '從 AI 工具、工作流程到學習方法，整理那些真的能放進日常工作的能力。',
    indexable: true,
  },
  {
    slug: 'business-thinking',
    name: '商業與思考',
    shortName: '商業與思考',
    readerQuestion: '我怎麼看懂一門生意，找到值得解決的問題？',
    description: '從需求、客群、商業模式到成本與成長，拆解一門生意如何成立、如何被選擇。',
    indexable: true,
  },
  {
    slug: 'personal-growth',
    name: '個人發展與事業',
    shortName: '個人發展與事業',
    readerQuestion: '一個人怎麼把能力與經驗變成下一階段的機會？',
    description: '從職涯、個人品牌到知識產品，探索專業如何持續累積與發展。',
    indexable: true,
  },
  {
    slug: 'marketing-brand',
    name: '行銷與品牌',
    shortName: '行銷與品牌',
    readerQuestion: '如何理解受眾、建立品牌，讓產品與想法被看見？',
    description: '從受眾理解、內容策略到品牌溝通與 AI 行銷，整理行銷背後的判斷。',
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
