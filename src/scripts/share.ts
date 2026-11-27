/**
 * 分享元件互動控制（複製連結、Popover 選單、系統原生分享、Toast 提示）
 */

declare global {
  interface Window {
    __virexShareBound?: boolean;
    dataLayer?: Array<Record<string, unknown>>;
  }
}

const copyTimers = new WeakMap<HTMLElement, number>();
let toastTimer: number | undefined;

function trackShare(method: string, title: string, url: string) {
  try {
    window.dataLayer?.push({
      event: 'content_share',
      share_method: method,
      share_title: title,
      share_url: url,
    });
  } catch {
    // 忽略追蹤例外，不影響分享流程
  }
}

function showShareToast(message: string) {
  let toast = document.getElementById('virex-share-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'virex-share-toast';
    toast.setAttribute('role', 'status');
    toast.setAttribute('aria-live', 'polite');
    toast.className = 'share-toast';
    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.dataset.visible = 'true';

  if (toastTimer) window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => {
    if (toast) toast.dataset.visible = 'false';
  }, 2200);
}

async function copyText(text: string): Promise<boolean> {
  if (navigator.clipboard && window.isSecureContext) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      // 降級使用 textarea 複製
    }
  }

  try {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'fixed';
    textarea.style.top = '-9999px';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    const ok = document.execCommand('copy');
    document.body.removeChild(textarea);
    return ok;
  } catch {
    return false;
  }
}

function closeAllPopovers(exceptPanel?: HTMLElement | null) {
  document.querySelectorAll<HTMLElement>('[data-share-popover]').forEach((panel) => {
    if (panel === exceptPanel) return;
    if (!panel.hidden) {
      panel.hidden = true;
      panel.dataset.open = 'false';
      const trigger = document.querySelector<HTMLElement>(
        `[data-share-trigger][aria-controls="${panel.id}"]`
      );
      trigger?.setAttribute('aria-expanded', 'false');
    }
  });
}

function adjustPopoverPosition(panel: HTMLElement) {
  panel.style.left = '';
  panel.style.right = '';
  const rect = panel.getBoundingClientRect();
  const margin = 12;

  if (rect.right > window.innerWidth - margin) {
    panel.style.left = 'auto';
    panel.style.right = '0';
  }
  const updated = panel.getBoundingClientRect();
  if (updated.left < margin) {
    panel.style.left = '0';
    panel.style.right = 'auto';
  }
}

function openPopover(trigger: HTMLElement, panel: HTMLElement) {
  closeAllPopovers(panel);
  panel.hidden = false;
  adjustPopoverPosition(panel);
  requestAnimationFrame(() => {
    panel.dataset.open = 'true';
  });
  trigger.setAttribute('aria-expanded', 'true');
}

function closePopover(trigger: HTMLElement, panel: HTMLElement) {
  panel.dataset.open = 'false';
  panel.hidden = true;
  trigger.setAttribute('aria-expanded', 'false');
}

async function triggerNativeShare(el: HTMLElement): Promise<boolean> {
  if (typeof navigator.share !== 'function') return false;
  const title = el.dataset.shareTitle || document.title;
  const text = el.dataset.shareDescription || title;
  const url = el.dataset.shareUrl || window.location.href;

  try {
    await navigator.share({ title, text, url });
    trackShare('native', title, url);
    return true;
  } catch (err) {
    if (err instanceof DOMException && err.name === 'AbortError') {
      return true;
    }
    return false;
  }
}

function revealNativeButtons() {
  if (typeof navigator.share !== 'function') return;
  document.querySelectorAll<HTMLElement>('[data-share-native]').forEach((btn) => {
    btn.hidden = false;
  });
}

export function initShareWidgets() {
  revealNativeButtons();

  if (window.__virexShareBound) return;
  window.__virexShareBound = true;

  document.addEventListener('click', async (event) => {
    const target = event.target as HTMLElement | null;
    if (!target) return;

    // 1. 頂部「分享」觸發按鈕（手機優先系統原生分享，桌機展開精緻選單）
    const trigger = target.closest<HTMLElement>('[data-share-trigger]');
    if (trigger) {
      event.preventDefault();
      const panelId = trigger.getAttribute('aria-controls');
      const panel = panelId ? document.getElementById(panelId) : null;

      const preferNative =
        typeof navigator.share === 'function' &&
        window.matchMedia('(pointer: coarse)').matches;

      if (preferNative) {
        const handled = await triggerNativeShare(trigger);
        if (handled) return;
      }

      if (panel) {
        if (panel.hidden) {
          openPopover(trigger, panel);
        } else {
          closePopover(trigger, panel);
        }
      }
      return;
    }

    // 2. 複製連結按鈕
    const copyBtn = target.closest<HTMLElement>('[data-share-copy]');
    if (copyBtn) {
      event.preventDefault();
      const url = copyBtn.dataset.shareUrl || window.location.href;
      const title = copyBtn.dataset.shareTitle || document.title;
      const ok = await copyText(url);

      if (ok) {
        copyBtn.dataset.copied = 'true';
        showShareToast('已複製連結');
        trackShare('copy', title, url);

        const prevTimer = copyTimers.get(copyBtn);
        if (prevTimer) window.clearTimeout(prevTimer);

        const timer = window.setTimeout(() => {
          copyBtn.dataset.copied = 'false';
        }, 2200);
        copyTimers.set(copyBtn, timer);

        const parentPanel = copyBtn.closest<HTMLElement>('[data-share-popover]');
        if (parentPanel) {
          window.setTimeout(() => closeAllPopovers(), 650);
        }
      } else {
        showShareToast('無法自動複製，請手動複製網址');
      }
      return;
    }

    // 3. 卡片內「更多」系統原生分享按鈕
    const nativeBtn = target.closest<HTMLElement>('[data-share-native]');
    if (nativeBtn) {
      event.preventDefault();
      await triggerNativeShare(nativeBtn);
      return;
    }

    // 4. 社群分享連結點擊（紀錄事件並順手收起選單）
    const socialLink = target.closest<HTMLElement>('[data-share-platform]');
    if (socialLink) {
      const platform = socialLink.dataset.sharePlatform || 'unknown';
      const title = socialLink.dataset.shareTitle || document.title;
      const url = socialLink.dataset.shareUrl || window.location.href;
      trackShare(platform, title, url);
      if (socialLink.closest('[data-share-popover]')) {
        closeAllPopovers();
      }
      return;
    }

    // 5. 點擊外部收起選單
    if (!target.closest('[data-share-popover]')) {
      closeAllPopovers();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape') return;
    const openPanel = document.querySelector<HTMLElement>('[data-share-popover]:not([hidden])');
    if (!openPanel) return;
    const trigger = document.querySelector<HTMLElement>(
      `[data-share-trigger][aria-controls="${openPanel.id}"]`
    );
    closeAllPopovers();
    trigger?.focus();
  });

  document.addEventListener('astro:page-load', revealNativeButtons);
}

initShareWidgets();
