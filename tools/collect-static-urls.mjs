/**
 * collect-static-urls.mjs
 * 把 public/ 底下的靜態頁（專題頁、narrative-engine 等）收集成 URL 清單，
 * 讓 astro.config.mjs 的 sitemap customPages 一次收進去。
 * 產出：專案根目錄 static-urls.json
 *
 * 用法： node tools/collect-static-urls.mjs
 */
import fs from 'node:fs';
import path from 'node:path';

const SITE = 'https://blog.billy4select.com';
const PUBLIC_DIR = path.resolve(process.cwd(), 'public');
const SKIP_DIRS = new Set(['_series', 'images', 'js', 'uploads', 'assets', 'css']);

function walk(dir, relBase = '') {
  const urls = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    const rel = relBase ? `${relBase}/${entry.name}` : entry.name;
    if (entry.isDirectory()) {
      if (SKIP_DIRS.has(entry.name)) continue;
      urls.push(...walk(full, rel));
    } else if (entry.name === 'index.html') {
      const clean = rel.replace(/\/index\.html$/, '');
      urls.push(`${SITE}/${clean}/`);
    }
  }
  return urls;
}

const urls = [...new Set(walk(PUBLIC_DIR))].sort();
fs.writeFileSync(
  path.resolve(process.cwd(), 'static-urls.json'),
  JSON.stringify(urls, null, 2) + '\n',
  'utf8'
);
console.log(`[sitemap] 收集 ${urls.length} 個靜態頁網址 → static-urls.json`);
