/* series-shell.js — 專題外殼互動（僅手機導覽） */
(function () {
  var btn = document.querySelector('[data-sr-burger]');
  var panel = document.querySelector('.sr-mobile');
  if (!btn || !panel) return;

  btn.addEventListener('click', function () {
    var open = panel.classList.toggle('is-open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
})();
