/**
 * 社群分享連結產生器
 *
 * 針對台灣讀者常用管道（LINE、Threads、Facebook、X）產生標準化的分享連結，
 * 搭配網站已建置的 canonical 與 /og/*.png 分享圖卡使用。
 */

export type SharePlatformId = 'line' | 'threads' | 'facebook' | 'x';

export interface ShareChannel {
  id: SharePlatformId;
  label: string;
  ariaLabel: string;
  icon: string;
  href: string;
}

export function buildShareChannels(title: string, url: string): ShareChannel[] {
  const cleanTitle = title.trim();
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(cleanTitle);
  const encodedThreadsText = encodeURIComponent(`${cleanTitle}\n${url}`);

  return [
    {
      id: 'line',
      label: 'LINE',
      ariaLabel: '分享到 LINE',
      icon: 'simple-icons:line',
      href: `https://social-plugins.line.me/lineit/share?url=${encodedUrl}&text=${encodedTitle}`,
    },
    {
      id: 'threads',
      label: 'Threads',
      ariaLabel: '分享到 Threads',
      icon: 'simple-icons:threads',
      href: `https://www.threads.net/intent/post?text=${encodedThreadsText}`,
    },
    {
      id: 'facebook',
      label: 'Facebook',
      ariaLabel: '分享到 Facebook',
      icon: 'simple-icons:facebook',
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    },
    {
      id: 'x',
      label: 'X',
      ariaLabel: '分享到 X',
      icon: 'simple-icons:x',
      href: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
    },
  ];
}
