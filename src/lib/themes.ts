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
 * 全站四個主題（2026-11 改版）。
 * 文章分類、/topics/ 與 /blog/ 的篩選都使用這份定義，避免名稱分叉。
 */
export const blogThemes: BlogTheme[] = [
  {
    slug: 'work-efficiency',
    name: '工作與效率',
    shortName: '工作與效率',
    readerQuestion: '如何用更好的方法，完成工作與生活中的事情？',
    description:
      '從任務安排、工作系統、時間分配，到 AI 工具與自動化，整理真正能放進日常的方法。',
    indexable: true,
  },
  {
    slug: 'learning-capability',
    name: '學習與能力',
    shortName: '學習與能力',
    readerQuestion: '如何持續學習，培養真正用得上的能力？',
    description:
      '從判斷該學什麼、建立學習方法，到刻意練習與知識管理，幫助你把知識轉成實際能力。',
    indexable: true,
  },
  {
    slug: 'business-marketing',
    name: '商業與行銷',
    shortName: '商業與行銷',
    readerQuestion: '如何理解市場、顧客與一門生意的運作？',
    description:
      '從需求驗證、客群與商業模式，到行銷診斷與品牌信任，整理看懂市場與生意的方法。',
    indexable: true,
  },
  {
    slug: 'personal-development',
    name: '個人發展與事業',
    shortName: '個人發展與事業',
    readerQuestion: '如何運用自己的能力與經驗，探索更多發展機會？',
    description:
      '從職涯策略、可攜帶資產、個人品牌到知識變現，探索專業如何持續累積與發展。',
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
