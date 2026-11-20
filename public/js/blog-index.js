(function () {
  var list = document.querySelector('[data-blog-list]');
  if (!list) return;

  var rows = Array.prototype.slice.call(
    list.querySelectorAll('[data-blog-post]')
  );
  var pills = Array.prototype.slice.call(
    document.querySelectorAll('[data-blog-filter]')
  );
  var pagination = document.querySelector('[data-blog-pagination]');

  if (!rows.length) return;

  var pageSize = parseInt(list.getAttribute('data-page-size') || '6', 10);
  if (!pageSize || pageSize < 1) pageSize = 6;

  var themes = {};
  pills.forEach(function (pill) {
    themes[pill.getAttribute('data-blog-filter') || 'all'] = true;
  });

  var state = { theme: 'all', page: 1 };

  function readUrl() {
    var params = new URLSearchParams(window.location.search);
    var theme = params.get('theme') || 'all';
    state.theme = themes[theme] ? theme : 'all';

    var page = parseInt(params.get('page') || '1', 10);
    state.page = Number.isFinite(page) && page > 0 ? page : 1;
  }

  function buildUrl() {
    var params = new URLSearchParams();
    if (state.theme !== 'all') params.set('theme', state.theme);
    if (state.page > 1) params.set('page', String(state.page));
    var query = params.toString();
    return '/blog/' + (query ? '?' + query : '');
  }

  function updatePills() {
    pills.forEach(function (pill) {
      var active = (pill.getAttribute('data-blog-filter') || 'all') === state.theme;
      pill.classList.toggle('border-primary', active);
      pill.classList.toggle('bg-primary/10', active);
      pill.classList.toggle('font-semibold', active);
      pill.classList.toggle('text-primary', active);
      pill.classList.toggle('border-transparent', !active);
      pill.classList.toggle('bg-surface', !active);
      pill.classList.toggle('text-text-muted', !active);

      if (active) {
        pill.setAttribute('aria-current', 'page');
      } else {
        pill.removeAttribute('aria-current');
      }
    });
  }

  function makePageButton(label, page, disabled, current) {
    var button = document.createElement('button');
    button.type = 'button';
    button.textContent = label;
    button.className =
      'px-4 py-2 text-sm font-medium rounded-md transition-colors ' +
      (current
        ? 'bg-primary text-white'
        : 'bg-surface text-text-muted hover:bg-primary/10 hover:text-primary');

    if (disabled) {
      button.disabled = true;
      button.className += ' opacity-40 cursor-not-allowed';
    } else {
      button.addEventListener('click', function () {
        goToPage(page);
      });
    }

    return button;
  }

  function renderPagination(totalPages) {
    if (!pagination) return;
    pagination.textContent = '';
    if (totalPages <= 1) return;

    pagination.appendChild(
      makePageButton('上一頁', state.page - 1, state.page === 1, false)
    );

    for (var page = 1; page <= totalPages; page += 1) {
      pagination.appendChild(
        makePageButton(String(page), page, false, page === state.page)
      );
    }

    pagination.appendChild(
      makePageButton('下一頁', state.page + 1, state.page === totalPages, false)
    );
  }

  function apply(pushUrl) {
    var matching =
      state.theme === 'all'
        ? rows
        : rows.filter(function (row) {
            return row.getAttribute('data-theme') === state.theme;
          });

    var totalPages = Math.max(1, Math.ceil(matching.length / pageSize));
    state.page = Math.min(Math.max(1, state.page), totalPages);

    rows.forEach(function (row) {
      row.hidden = true;
    });

    matching
      .slice((state.page - 1) * pageSize, state.page * pageSize)
      .forEach(function (row) {
        row.hidden = false;
      });

    updatePills();
    renderPagination(totalPages);

    if (pushUrl) {
      window.history.pushState({}, '', buildUrl());
    }
  }

  function scrollToList() {
    var target = document.getElementById('blog-list');
    if (!target) return;
    var top = target.getBoundingClientRect().top + window.scrollY - 88;
    window.scrollTo({ top: top, behavior: 'smooth' });
  }

  function goToPage(page) {
    state.page = page;
    apply(true);
    scrollToList();
  }

  pills.forEach(function (pill) {
    pill.addEventListener('click', function (event) {
      event.preventDefault();
      state.theme = pill.getAttribute('data-blog-filter') || 'all';
      state.page = 1;
      apply(true);
    });
  });

  window.addEventListener('popstate', function () {
    readUrl();
    apply(false);
  });

  readUrl();
  apply(false);
})();
