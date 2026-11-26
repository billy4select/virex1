/**
 * extract-inline-css.mjs
 * 把 /threads 各頁重複的 inline <style> 抽成可快取的 CSS 檔。
 * 相同內容只會產生一份，頁面改為 <link> 載入。
 *
 * 用法： node tools/extract-inline-css.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const ROOT = path.resolve(process.cwd(), 'public/threads');
const OUT_DIR = path.join(ROOT, 'assets/css');
const OUT_URL = '/threads/assets/css';

function walk(dir) {
  const out = [];
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      if (e.name === 'assets') continue;
      out.push(...walk(full));
    } else if (e.name === 'index.html') out.push(full);
  }
  return out;
}

fs.mkdirSync(OUT_DIR, { recursive: true });

let pages = 0;
let files = new Set();

for (const file of walk(ROOT)) {
  let html = fs.readFileSync(file, 'utf8');
  let changed = false;

  html = html.replace(/<style[^>]*>([\s\S]*?)<\/style>/g, (m, css) => {
    if (!css.trim()) return m;
    const hash = crypto.createHash('sha1').update(css).digest('hex').slice(0, 10);
    const name = `s-${hash}.css`;
    const target = path.join(OUT_DIR, name);
    if (!fs.existsSync(target)) fs.writeFileSync(target, css.trim() + '\n', 'utf8');
    files.add(name);
    changed = true;
    return `<link rel="stylesheet" href="${OUT_URL}/${name}">`;
  });

  if (changed) {
    fs.writeFileSync(file, html, 'utf8');
    pages += 1;
  }
}

console.log(`[threads] 抽出 ${files.size} 份共用 CSS，更新 ${pages} 頁`);
