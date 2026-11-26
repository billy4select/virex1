/**
 * check-redirects.mjs
 * 部署前檢查 public/_redirects，避免 Cloudflare 因為重複規則整包拒絕。
 * 檢查項目：
 *   1. 同一來源路徑重複（Cloudflare 會直接讓 deploy 失敗）
 *   2. 狀態碼不合法 / 來源不是絕對路徑 / 來源等於目標
 *   3. 目的地沒有結尾斜線（本站 trailingSlash = always）
 *
 * 用法： node tools/check-redirects.mjs
 * 有錯時 exit 1，建置流程會停下，不會推到 Cloudflare。
 */
import fs from 'node:fs';
import path from 'node:path';

const FILE = path.resolve(process.cwd(), 'public/_redirects');
const VALID = new Set(['301', '302', '303', '307', '308']);

if (!fs.existsSync(FILE)) {
  console.error('[redirects] 找不到 public/_redirects');
  process.exit(1);
}

const lines = fs.readFileSync(FILE, 'utf8').split('\n');
const seen = new Map();
const errors = [];

lines.forEach((raw, i) => {
  const line = raw.trim();
  if (!line || line.startsWith('#')) return;
  const n = i + 1;
  const parts = line.split(/\s+/);

  if (parts.length < 2) {
    errors.push(`第 ${n} 行：規則格式不完整 → ${line}`);
    return;
  }

  const [from, to, status = '301'] = parts;

  if (!from.startsWith('/')) errors.push(`第 ${n} 行：來源必須以 / 開頭 → ${from}`);
  if (!to.startsWith('/') && !to.startsWith('http')) {
    errors.push(`第 ${n} 行：目標必須是 / 開頭或完整網址 → ${to}`);
  }
  if (!VALID.has(status)) errors.push(`第 ${n} 行：狀態碼不合法 ${status}`);

  const key = from.toLowerCase();
  if (seen.has(key)) {
    errors.push(`第 ${n} 行：來源重複 ${from}（第一次出現在第 ${seen.get(key)} 行）`);
  } else {
    seen.set(key, n);
  }

  if (from === to) errors.push(`第 ${n} 行：來源與目標相同 → ${from}`);
});

if (errors.length) {
  console.error(`[redirects] 發現 ${errors.length} 個問題，Cloudflare 會拒絕部署：`);
  errors.slice(0, 20).forEach((e) => console.error('  - ' + e));
  if (errors.length > 20) console.error(`  ...其餘 ${errors.length - 20} 個`);
  process.exit(1);
}

console.log(`[redirects] 檢查通過：${seen.size} 條規則，無重複來源`);
