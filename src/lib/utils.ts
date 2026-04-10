/**
 * 計算閱讀時間（支援中英文混合）
 * * @description
 * 針對中文字符（每個字算一個詞）與英文單字進行混合計算。
 * 預設中文閱讀速度約每分鐘 300 字，英文約 200 字。
 */
export function calculateReadingTime(text: string): number {
  if (!text) return 0;
  
  // 1. 計算中文字數 (正則表達式匹配中文字符)
  const chineseChars = (text.match(/[\u4e00-\u9fa5]/g) || []).length;
  
  // 2. 計算英文字數 (移除中文字符後按空格切分)
  const englishWords = text
    .replace(/[\u4e00-\u9fa5]/g, ' ')
    .trim()
    .split(/\s+/)
    .filter(word => word.length > 0).length;

  // 3. 綜合計算（取平均值或權重計算，這裡採簡單加總後除以平均速率）
  const totalWordCount = chineseChars + englishWords;
  const wordsPerMinute = 250; 
  
  return Math.max(1, Math.ceil(totalWordCount / wordsPerMinute));
}

/**
 * 格式化日期（支援語系切換）
 * * @description
 * 預設改為 'zh-TW' 語系，讓日期顯示為「2026年4月10日」
 */
export function formatDate(
  date: Date,
  options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
): string {
  // 將語系從 'en-US' 改為 'zh-TW'
  return new Intl.DateTimeFormat('zh-TW', options).format(date);
}