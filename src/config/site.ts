/**
 * Site Configuration
 *
 * @description
 * Core site metadata and branding settings.
 */

import type { SocialLinks, LegalConfig } from '../lib/types';

/** 網站名稱：顯示在標題、頁尾和 SEO 標籤中 */
export const name = '行銷裡的路人甲 | 比利陳';

/** 網站描述：SEO 用，出現在搜尋結果 */
export const description = '比利陳的自我成長知識平台。從能力與學習、商業與思考、個人發展與事業、行銷與品牌四個方向，分享研究、實驗、觀察與實務經驗。';

/** 正式網址 */
export const url = 'https://blog.billy4select.com';

/** 作者名稱 */
export const author = '比利陳 Billy Chen';

/** 文章作者盒用的短自介 */
export const authorBio =
  '十多年行銷相關工作經驗，曾參與產品、品牌與數位行銷。持續研究學習、商業、行銷與個人發展，並分享實務觀察與實驗。';

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
  lastUpdated: '2026-11-20',
};