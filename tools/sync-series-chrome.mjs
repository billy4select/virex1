/**
 * sync-series-chrome.mjs
 * 把主站樣式的外殼（頁首 / 麵包屑 / 頁尾）套用到所有系列頁。
 *
 * 特性
 * - 只替換外殼區塊，內文、課程版型、TOC 全部不動
 * - 以 <!--SR:HEAD START--> 標記包住，可重複執行（idempotent）
 * - 自動判斷系列、自動標示當前章節
 *
 * 用法
 *   node tools/sync-series-chrome.mjs
 */

import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(process.cwd(), 'public');
const MAIN_NAV = [
  { label: '主題', href: '/topics/' },
  { label: '系列', href: '/series/' },
  { label: '文章', href: '/blog/' },
  { label: '免費資源', href: '/resources/' },
  { label: '關於我', href: '/about/' },
];

const SERIES = {
  'ai-work-team': {
    name: '打造 AI 工作團隊',
    shortName: '打造 AI 工作團隊',
    root: '/ai-work-team/',
    note: '6 個主題 · 6 條流程 · 18 張任務卡',
    nav: [
      { label: '系列首頁', href: '/ai-work-team/' },
      { label: '開始探索', href: '/ai-work-team/curriculum/' },
      { label: '工作流程', href: '/ai-work-team/workflows/' },
      { label: '任務庫', href: '/ai-work-team/workflows/tasks/' },
      { label: '實用資源', href: '/ai-work-team/resources/' },
      { label: '案例', href: '/ai-work-team/cases/' },
      { label: '關於系列', href: '/ai-work-team/about/' },
    ],
  },
  threads: {
    name: 'Threads 起步心態指南',
    shortName: 'Threads 起步指南',
    root: '/threads/',
    note: '8 個起步主題',
    nav: [
      { label: '系列首頁', href: '/threads/' },
      { label: '起步', href: '/threads/rumors/' },
      { label: '心態', href: '/threads/mindset/' },
      { label: '寫作', href: '/threads/writing/' },
      { label: '節奏', href: '/threads/rhythm/' },
      { label: '選題', href: '/threads/what-to-post/' },
      { label: 'FAQ', href: '/threads/faq/' },
    ],
  },
};

const MARK_JSONLD = /<!--SR:JSONLD START-->[\s\S]*?<!--SR:JSONLD END-->/;

function jsonLd(series, currentPath) {
  const items = [
    { name: '首頁', url: 'https://blog.billy4select.com/' },
    { name: '系列', url: 'https://blog.billy4select.com/series/' },
    { name: series.name, url: 'https://blog.billy4select.com' + series.root },
  ];
  const chapter = series.nav.find(
    (item) => item.href !== series.root && currentPath.startsWith(item.href)
  );
  if (chapter && currentPath !== series.root) {
    items.push({
      name: chapter.label,
      url: 'https://blog.billy4select.com' + chapter.href,
    });
  }
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
  return `<!--SR:JSONLD START--><script type="application/ld+json">${JSON.stringify(
    data
  )}</script><!--SR:JSONLD END-->`;
}

const MARK_HEAD = /<!--SR:HEAD START-->[\s\S]*?<!--SR:HEAD END-->/;
const MARK_FOOT = /<!--SR:FOOT START-->[\s\S]*?<!--SR:FOOT END-->/;
const HEADER_TAG = /<header\b[\s\S]*?<\/header>/i;
const FOOTER_TAG = /<footer\b[\s\S]*?<\/footer>/i;
const OLD_CRUMB = /<nav class="crumb-band"[\s\S]*?<\/nav>/i;

function walk(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === 'assets' || entry.name === 'css') continue;
      out.push(...walk(full));
    } else if (entry.name === 'index.html') {
      out.push(full);
    }
  }
  return out;
}

function activeAttr(href, currentPath) {
  const isMatch =
    currentPath === href ||
    (href !== '/' && currentPath.startsWith(href));
  return isMatch ? ' aria-current="page"' : '';
}

function subLinks(series, currentPath) {
  // 先看完全相等的頁面，再取「非根目錄」裡命中最長的章節
  const exact = series.nav.find((item) => item.href === currentPath);
  let matched = exact ? exact.href : '';
  // 課程序列頁（lesson-0N）沒有獨立導覽項，統一掛在「開始探索」底下
  if (!matched && /\/lesson-\d+\//.test(currentPath)) {
    const anchor = series.nav.find((item) => item.href.includes('curriculum'));
    if (anchor) matched = anchor.href;
  }
  if (!matched) {
    for (const item of series.nav) {
      if (
        item.href !== series.root &&
        currentPath.startsWith(item.href) &&
        item.href.length > matched.length
      ) {
        matched = item.href;
      }
    }
  }
  return series.nav
    .filter((item) => item.href !== series.root)
    .map(
      (item) =>
        `<a href="${item.href}"${
          item.href === matched ? ' aria-current="page"' : ''
        }>${item.label}</a>`
    )
    .join('');
}

function headBlock(series, currentPath) {
  // 與 src/components/layout/Header.astro 對齊：品牌＝頭像＋站名＋標語，
  // 系列名稱只出現在章節列，不再當成第二個品牌
  const mainLinks = MAIN_NAV.map((item) => {
    const active =
      item.href === '/series/' ||
      (item.href !== '/' && currentPath.startsWith(item.href));
    return `<a href="${item.href}"${
      active ? ' aria-current="page"' : ''
    }>${item.label}</a>`;
  }).join('');

  const mobileLinks = MAIN_NAV.map(
    (item) => `<a href="${item.href}">${item.label}</a>`
  ).join('');

  const subNav = subLinks(series, currentPath);

  return `<!--SR:HEAD START-->
<div id="sr-announce" class="sr-announce" role="banner">
  <p>
    <span>把值得探索與思考的事情，定期寄給你</span>
    <a href="https://billy4select.substack.com/" target="_blank" rel="noopener">訂閱電子報<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 18l6-6-6-6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
  </p>
  <button type="button" class="sr-announce-x" aria-label="關閉公告" data-sr-announce-dismiss>
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
  </button>
</div>
<header id="sr-head" class="sr-head">
  <div class="sr-head-in">
    <a class="sr-brand" href="/" aria-label="比利陳，回到首頁">
      <img src="/avatar.webp" alt="比利陳" width="44" height="44" loading="eager" decoding="async">
      <span class="sr-brand-txt"><b>比利陳</b><small>行銷裡的路人甲</small></span>
    </a>
    <nav class="sr-main" aria-label="主要導覽">${mainLinks}</nav>
    <div class="sr-actions">
      <a class="sr-search" href="/blog/" aria-label="搜尋文章">
        <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7" fill="none" stroke="currentColor" stroke-width="2"/><path d="M20 20l-3.2-3.2" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
        <span>搜尋</span>
      </a>
      <span class="sr-theme-space" aria-hidden="true"></span>
      <a class="sr-cta" href="https://billy4select.substack.com/" target="_blank" rel="noopener">訂閱電子報</a>
      <button class="sr-burger" type="button" data-sr-burger aria-expanded="false" aria-controls="sr-mobile" aria-label="開啟導覽">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
      </button>
    </div>
  </div>
  <div class="sr-mobile" id="sr-mobile"><div class="sr-mobile-in">${mobileLinks}</div></div>
  <nav class="sr-sub" aria-label="系列章節">
    <div class="sr-sub-in">
      <a class="sr-sub-title" href="${series.root}"${
        currentPath === series.root ? ' aria-current="page"' : ''
      }>${series.shortName}</a>
      ${subNav}
      <span class="sr-sub-note">${series.note}</span>
    </div>
  </nav>
</header>
<!--SR:HEAD END-->`;
}

function footBlock(series) {
  return `<!--SR:FOOT START-->
<footer id="sr-foot" class="sr-foot foot footer">
  <div class="sr-foot-in">
    <div class="sr-foot-brand">
      <b>比利陳 Billy Chen</b>
      <p>十年整合行銷與產品經驗，獨立出版三本書。這裡把 AI、商業與個人發展的觀察，整理成可以照著走的系列。</p>
      <span class="sr-theme-space" aria-hidden="true"></span>
      <a class="sr-cta" href="https://billy4select.substack.com/" target="_blank" rel="noopener">訂閱電子報</a>
    </div>
    <div class="sr-foot-col">
      <b>主站</b>
      <a href="/topics/">主題</a>
      <a href="/blog/">文章</a>
      <a href="/series/">系列總覽</a>
      <a href="/resources/">免費資源</a>
      <a href="/about/">關於我</a>
    </div>
    <div class="sr-foot-col">
      <b>系列</b>
      <a href="/ai-work-team/">打造 AI 工作團隊</a>
      <a href="/threads/">Threads 起步心態指南</a>
      <a href="/narrative-engine/">AI 影片工具</a>
    </div>
    <div class="sr-foot-col">
      <b>追蹤</b>
      <a href="https://www.youtube.com/@billyselect4" target="_blank" rel="noopener">YouTube</a>
      <a href="https://www.instagram.com/billy4select" target="_blank" rel="noopener">Instagram</a>
      <a href="https://www.threads.net/@billy4select" target="_blank" rel="noopener">Threads</a>
      <a href="/rss.xml">RSS</a>
    </div>
  </div>
  <div class="sr-foot-bottom">
    <span>© ${new Date().getFullYear()} 比利陳 · ${series.name}</span>
    <nav>
      <a href="/privacy/">隱私權政策</a>
      <a href="/disclaimer/">免責聲明</a>
      <a href="/contact/">聯絡我</a>
    </nav>
  </div>
</footer>
<!--SR:FOOT END-->`;
}

function injectAssets(html, series, currentPath) {
  let out = html;
  if (!out.includes('/series-assets/series-shell.css')) {
    out = out.replace(
      /<\/head>/i,
      '  <link rel="stylesheet" href="/series-assets/series-shell.css">\n</head>'
    );
  }
  if (!out.includes('/series-assets/series-shell.js')) {
    out = out.replace(
      /<\/head>/i,
      '  <script src="/series-assets/series-shell.js" defer></script>\n</head>'
    );
  }
  const ld = jsonLd(series, currentPath);
  if (MARK_JSONLD.test(out)) {
    out = out.replace(MARK_JSONLD, ld);
  } else {
    out = out.replace(/<\/head>/i, ld + '\n</head>');
  }
  return out;
}

function processFile(file) {
  const rel = path.relative(ROOT, file).split(path.sep).join('/');
  const key = rel.split('/')[0];
  const series = SERIES[key];
  if (!series) return null;

  const currentPath = '/' + rel.replace(/index\.html$/, '');
  let html = fs.readFileSync(file, 'utf8');

  // 移除子站原本的內嵌麵包屑，避免出現兩條
  html = html.replace(OLD_CRUMB, '');
  html = html.replace(/<div class="crumb">[\s\S]*?<\/div>/g, '');
  html = html.replace(/<div class="wrap crumb">[\s\S]*?<\/div>/g, '');

  // 頁首 + 麵包屑
  if (MARK_HEAD.test(html)) {
    html = html.replace(MARK_HEAD, headBlock(series, currentPath));
  } else if (HEADER_TAG.test(html)) {
    html = html.replace(HEADER_TAG, headBlock(series, currentPath));
  } else {
    html = html.replace(/<body[^>]*>/i, (m) => `${m}\n${headBlock(series, currentPath)}`);
  }

  // 頁尾
  if (MARK_FOOT.test(html)) {
    html = html.replace(MARK_FOOT, footBlock(series));
  } else if (FOOTER_TAG.test(html)) {
    html = html.replace(FOOTER_TAG, footBlock(series));
  } else {
    html = html.replace(/<\/body>/i, `${footBlock(series)}\n</body>`);
  }

  html = injectAssets(html, series, currentPath);
  fs.writeFileSync(file, html, 'utf8');
  return rel;
}

const targets = [
  ...walk(path.join(ROOT, 'ai-work-team')),
  ...walk(path.join(ROOT, 'threads')),
];

let changed = 0;
for (const file of targets) {
  if (processFile(file)) changed += 1;
}
console.log(`[series] 外殼同步完成：${changed} 頁`);
