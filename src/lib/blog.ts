import type { CollectionEntry } from 'astro:content';

export type BlogPost = CollectionEntry<'blog'>;

/** 每頁文章數（/blog/ 與 /blog/page/N/ 共用，避免兩邊算法不一致） */
export const POSTS_PER_PAGE = 6;

export const postUrl = (id: string) => `/blog/${id}/`;
export const tagUrl = (tag: string) => `/blog/tag/${encodeURIComponent(tag)}/`;

export function sortByDate(posts: BlogPost[]): BlogPost[] {
  return [...posts].sort(
    (a, b) => b.data.publishedDate.getTime() - a.data.publishedDate.getTime()
  );
}

/** 標籤統計：文章多的在前面，同數量時依中文排序 */
export function getTagStats(posts: BlogPost[]): { name: string; count: number }[] {
  const counts = new Map<string, number>();
  for (const post of posts) {
    for (const raw of post.data.tags || []) {
      const tag = String(raw).trim();
      if (tag) counts.set(tag, (counts.get(tag) || 0) + 1);
    }
  }
  return [...counts.entries()]
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name, 'zh-Hant'));
}

/** 熱門文章區：boost 或 featured 的最新 2 篇 */
export function getFeatured(sortedPosts: BlogPost[]): BlogPost[] {
  return sortedPosts
    .filter((p) => p.data.boost === true || p.data.featured === true)
    .slice(0, 2);
}

/** 文章索引只放一篇精選；沒有標記時退回最新一篇，避免首頁空掉。 */
export function getFeaturedPost(sortedPosts: BlogPost[]): BlogPost | undefined {
  return getFeatured(sortedPosts)[0] ?? sortedPosts[0];
}

/** 下一篇：先找同分類中最近一篇較舊文章，沒有就退到全站較舊文章。 */
export function getNextPost(post: BlogPost, all: BlogPost[]): BlogPost | undefined {
  const older = sortByDate(all).filter(
    (candidate) =>
      candidate.id !== post.id &&
      candidate.data.publishedDate.getTime() < post.data.publishedDate.getTime()
  );

  return (
    older.find((candidate) => candidate.data.category === post.data.category) ?? older[0]
  );
}

/**
 * 相關閱讀：依「共同標籤數」排序（同分類加 1 分），再依日期新到舊。
 * 結果是固定的，不會每次 build 都不一樣。
 */
export function getRelated(post: BlogPost, all: BlogPost[], limit = 3): BlogPost[] {
  const mine = new Set((post.data.tags || []).map((t) => String(t).trim()));
  return all
    .filter((p) => p.id !== post.id)
    .map((p) => {
      const shared = (p.data.tags || []).filter((t) => mine.has(String(t).trim())).length;
      const sameCategory = p.data.category === post.data.category ? 1 : 0;
      return { p, score: shared * 10 + sameCategory };
    })
    .filter(({ score }) => score >= 10)
    .sort(
      (a, b) =>
        b.score - a.score ||
        b.p.data.publishedDate.getTime() - a.p.data.publishedDate.getTime()
    )
    .slice(0, limit)
    .map(({ p }) => p);
}
