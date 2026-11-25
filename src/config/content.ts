/**
 * Content Strings Configuration
 *
 * @description
 * 網站內容字串設定。
 * 修改此檔案可以自訂各個區塊的文字，而不需要動到元件本身的程式碼。
 */

import type { AnnouncementConfig, ContentStrings } from '../lib/types';

/** 全站頂部公告欄設定 */
export const announcement: AnnouncementConfig = {
  /** 是否啟用公告 (true 為顯示, false 為隱藏) */
  enabled: true,

  /** 公告唯一的 ID - 更改此 ID 可讓已關閉公告的使用者重新看到新消息 */
  id: 'line-group-launch',

  /** 公告顯示的內容文字 */
  text: '🚀 比利陳的行銷實戰 Line 社群開放',

  /** 連結網址 (指向你的 Line 群組) */
  href: 'https://line.me/ti/g2/RSL2m-6lcwDLR6RJ-XfMGMZnomMixnbD3jrBUw',

  /** 連結顯示的文字 */
  linkText: "加入社群",

  /** 視覺風格: 'primary' (主色) | 'secondary' (次色) | 'gradient' (漸層) */
  variant: 'primary',

  /** 是否允許使用者點擊「X」關閉公告 */
  dismissible: true,
};

/** 各個區塊的可自訂文字字串 */
export const content: ContentStrings = {
  /** 電子報訂閱區塊的文字 */
  newsletter: {
    title: '路人觀點',
    description: '把值得探索與思考的事情，定期分享給你。每週分享工具、知識、閱讀，以及對行銷、商業、AI、工作與個人成長的觀察。',
    placeholder: '請輸入您的電子郵件',
    buttonText: '立即訂閱',
    successMessage: '感謝訂閱！請檢查您的信箱以確認訂閱。',
    errorMessage: '發生了一些錯誤，請稍後再試。',
    privacyNote: '我們尊重您的隱私，您可以隨時取消訂閱。',
  },
};