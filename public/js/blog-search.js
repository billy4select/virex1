(function () {
  var mounts = Array.prototype.slice.call(
    document.querySelectorAll('[data-blog-search]')
  );

  if (!mounts.length) return;

  function showFallback() {
    mounts.forEach(function (mount) {
      var fallback = mount.parentElement
        ? mount.parentElement.querySelector('[data-blog-search-fallback]')
        : null;
      if (fallback) fallback.classList.remove('hidden');
    });
  }

  function init() {
    mounts.forEach(function (mount) {
      if (!mount.id || mount.dataset.pagefindInit === 'true') return;
      mount.dataset.pagefindInit = 'true';

      new window.PagefindUI({
        element: '#' + mount.id,
        showImages: false,
        showSubResults: false,
        pageSize: 8,
        excerptLength: 40,
        resetStyles: false,
        translations: {
          placeholder: mount.dataset.placeholder || '搜尋文章，例如：幻覺、提案、PDF',
          clear_search: '清除',
          load_more: '載入更多結果',
          search_label: '搜尋文章',
          filters_label: '篩選',
          zero_results: '找不到相關文章，換個關鍵字試試',
          many_results: '找到 [COUNT] 篇相關文章',
          one_result: '找到 [COUNT] 篇相關文章',
          alt_search: '找不到完全相符的結果，以下是相近的結果',
          search_suggestion: '找不到相關文章，可以試試其他關鍵字：',
          searching: '搜尋中…'
        }
      });
    });
  }

  if (window.PagefindUI) {
    init();
    return;
  }

  var css = document.createElement('link');
  css.rel = 'stylesheet';
  css.href = '/pagefind/pagefind-ui.css';
  document.head.appendChild(css);

  var js = document.createElement('script');
  js.src = '/pagefind/pagefind-ui.js';
  js.onload = init;
  js.onerror = showFallback;
  document.head.appendChild(js);
})();
