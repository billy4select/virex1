/**
 * Site Configuration
 *
 * @description
 * Core site metadata and branding settings.
 */

import type { SocialLinks, LegalConfig } from '../lib/types';

/** 網站名稱：顯示在標題、頁尾和 SEO 標籤中 */
export const name = '比利陳 | 行銷裡的路人甲';

/** 網站描述：SEO 用，出現在搜尋結果 */
export const description =
  '讓工作與生活，多一些值得探索的可能。分享值得使用的工具、值得學習的方法、值得閱讀的內容，以及對行銷、商業、AI、工作與個人成長的觀察。';

/** 正式網址 */
export const url = 'https://www.billy4select.com';

/** 作者名稱 */
export const author = '比利陳 Billy Chen';

/** 文章作者盒用的短自介 */
export const authorBio =
  '十多年行銷與產品工作經驗，做過商品企劃、廣告投放、會員經營與內容製作，並獨立出版三本電子書。內容來自工作經驗、閱讀研究與親自實驗。';

/** Logo 路徑：已換成你的個人頭像 */
export const logo = '/avatar.webp';

/** Open Graph 預覽圖路徑 (建議之後也把這張圖換成你的頭像或品牌圖) */
export const ogImage = '/og-default.png';

/** 社群連結 */
export const social: SocialLinks = {
  youtube: 'https://www.youtube.com/@billyselect4',
  instagram: 'https://www.instagram.com/billy4select',
  x: 'https://www.threads.net/@billy4select', 
  github: '',
  discord: '',
};

/** 法律資訊與更新日期 */
export const legal: LegalConfig = {
  privacyEmail: 'billy4select@gmail.com',
  legalEmail: 'billy4select@gmail.com',
  lastUpdated: '2026-11-25',
};