/**
 * 轉換層 KPI 點擊追蹤（電子書導購、電子報訂閱）
 *
 * 將點擊事件推送到既有的 GTM dataLayer，完全不改動 BaseLayout.astro 內的 GTM 追蹤碼。
 */

declare global {
  interface Window {
    __virexConversionBound?: boolean;
    dataLayer?: Array<Record<string, unknown>>;
  }
}

export function initConversionTracking() {
  if (window.__virexConversionBound) return;
  window.__virexConversionBound = true;

  document.addEventListener('click', (event) => {
    const target = event.target as HTMLElement | null;
    const cta = target?.closest<HTMLElement>('[data-conversion-cta]');
    if (!cta) return;

    try {
      window.dataLayer?.push({
        event: 'conversion_click',
        cta_type: cta.dataset.conversionCta || 'unknown',
        cta_target: cta.dataset.conversionTarget || '',
        article_category: cta.dataset.conversionCategory || '',
        page_path: window.location.pathname,
      });
    } catch {
      // 忽略追蹤例外，不影響使用者跳轉
    }
  });
}

initConversionTracking();
