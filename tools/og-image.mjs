#!/usr/bin/env node
/**
 * OG 分享圖產生器（1200×630 PNG）
 *
 *   node tools/og-image.mjs            只產缺少的（建置時用，很快）
 *   node tools/og-image.mjs --force    全部重產
 *   node tools/og-image.mjs --slug xxx 只產某一篇
 *
 * 產出 public/og/<slug>.png，文章頁 OG/Twitter 圖指向這裡。
 * 字型：assets/fonts/NotoSansTC-{Regular,Black}.ttf（OFL，已隨 repo 附上）。
 */
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import satori from 'satori';
import sharp from 'sharp';

const ROOT = path.resolve('.');
const BLOG_DIR = path.join(ROOT, 'src/content/blog');
const OUT_DIR = path.join(ROOT, 'public/og');
const FONT_DIR = path.join(ROOT, 'assets/fonts');
const MANIFEST = path.join(ROOT, 'tools/og-manifest.json');

const W = 1200;
const H = 630;

/** 分類色：只用在右側細條與分類標籤，主體保持紙張色，維持品牌一致 */
const ACCENT = {
  'AI 工作流程與工具': '#2f5bd6',
  'NotebookLM 實戰': '#0f5d55',
  '商業模式與獲利': '#6b4b1f',
  '行銷策略與診斷': '#a8471f',
  '廣告與投放': '#c2410c',
  '內容與 SEO': '#0f5d55',
  '自媒體與個人事業': '#7c3aed',
  '職涯與轉型': '#1f6f8b',
  '書籍導讀': '#8a5a2b',
};
const DEFAULT_ACCENT = '#ff6a00';

/** 標題長度決定字級，避免 3 行塞爆 */
function titleSize(title) {
  const len = [...title].length;
  if (len <= 16) return 76;
  if (len <= 24) return 66;
  if (len <= 34) return 58;
  return 52;
}

/** 極簡 frontmatter 取值，足夠處理 title/description/category/publishedDate */
function parseFrontmatter(raw) {
  const head = raw.split('\n---')[0].replace(/^---\n?/, '');
  const get = (key) => {
    const m = head.match(new RegExp(`^${key}:\\s*([^\\n]+)$`, 'm'));
    if (!m) return '';
    return m[1].trim().replace(/^['"]/, '').replace(/['"]$/, '');
  };
  return {
    title: get('title'),
    description: get('description'),
    category: get('category'),
    publishedDate: get('publishedDate'),
  };
}

const CATEGORY_LABEL = {
  'AI 工作流程與工具': 'AI 工作流程',
  'NotebookLM 實戰': 'NotebookLM',
  '商業模式與獲利': '商業模式',
  '行銷策略與診斷': '行銷策略',
  '廣告與投放': '廣告投放',
  '內容與 SEO': '內容與 SEO',
  '自媒體與個人事業': '自媒體',
  '職涯與轉型': '職涯轉型',
  '書籍導讀': '書籍導讀',
};

function template({ title, description, category, date }) {
  const accent = ACCENT[category] ?? DEFAULT_ACCENT;
  const label = CATEGORY_LABEL[category] ?? '文章';
  const size = titleSize(title);
  const dateText = date ? date.slice(0, 10).replace(/-/g, '.') : '';

  return {
    type: 'div',
    props: {
      style: {
        width: W,
        height: H,
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        background: '#f8f5ef',
        padding: '56px 64px 48px 72px',
        position: 'relative',
        fontFamily: 'Noto Sans TC',
      },
      children: [
        // 左側細條
        {
          type: 'div',
          props: {
            style: {
              position: 'absolute',
              left: 0,
              top: 0,
              bottom: 0,
              width: 10,
              background: accent,
            },
          },
        },
        // 頂部
        {
          type: 'div',
          props: {
            style: { display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center' },
            children: [
              {
                type: 'div',
                props: {
                  style: {
                    fontSize: 22,
                    fontWeight: 900,
                    letterSpacing: 3,
                    color: '#17130f',
                  },
                  children: 'BILLY4SELECT',
                },
              },
              {
                type: 'div',
                props: {
                  style: {
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                    fontSize: 20,
                    fontWeight: 400,
                    color: accent,
                    border: `1px solid ${accent}`,
                    borderRadius: 999,
                    padding: '6px 18px',
                  },
                  children: label,
                },
              },
            ],
          },
        },
        // 主體
        {
          type: 'div',
          props: {
            style: { display: 'flex', width: '100%', flex: 1, flexDirection: 'column', justifyContent: 'center', gap: 24 },
            children: [
              {
                type: 'div',
                props: {
                  style: {
                    width: '100%',
                    fontSize: size,
                    fontWeight: 900,
                    lineHeight: 1.32,
                    color: '#17130f',
                    lineClamp: 3,
                  },
                  children: title,
                },
              },
              description
                ? {
                    type: 'div',
                    props: {
                      style: {
                        width: '100%',
                        fontSize: 26,
                        fontWeight: 400,
                        lineHeight: 1.6,
                        color: '#6b625a',
                        lineClamp: 2,
                      },
                      children: description,
                    },
                  }
                : null,
            ],
          },
        },
        // 底部
        {
          type: 'div',
          props: {
            style: {
              display: 'flex',
              width: '100%',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              borderTop: '1px solid #ddd6c9',
              paddingTop: 20,
            },
            children: [
              {
                type: 'div',
                props: {
                  style: { display: 'flex', gap: 16, fontSize: 22, color: '#8a8078' },
                  children: [
                    { type: 'span', props: { children: 'billy4select.com' } },
                    dateText ? { type: 'span', props: { children: `· ${dateText}` } } : null,
                  ],
                },
              },
              {
                type: 'div',
                props: {
                  style: { fontSize: 22, fontWeight: 900, color: accent },
                  children: '閱讀全文 →',
                },
              },
            ],
          },
        },
      ],
    },
  };
}

async function main() {
  const args = process.argv.slice(2);
  const force = args.includes('--force');
  const slugArg = args.includes('--slug') ? args[args.indexOf('--slug') + 1] : null;

  const regular = fs.readFileSync(path.join(FONT_DIR, 'NotoSansTC-Regular.ttf'));
  const black = fs.readFileSync(path.join(FONT_DIR, 'NotoSansTC-Black.ttf'));

  fs.mkdirSync(OUT_DIR, { recursive: true });

  /** 標題／摘要／分類／日期變過就重產，避免改了標題圖還留著舊字 */
  const manifest = fs.existsSync(MANIFEST) ? JSON.parse(fs.readFileSync(MANIFEST, 'utf8')) : {};
  const nextManifest = { ...manifest };

  const files = fs
    .readdirSync(BLOG_DIR)
    .filter((f) => /\.(md|mdx)$/.test(f))
    .filter((f) => !slugArg || f.replace(/\.(md|mdx)$/, '') === slugArg);

  let made = 0;
  let skipped = 0;

  for (const file of files) {
    const slug = file.replace(/\.(md|mdx)$/, '');
    const out = path.join(OUT_DIR, `${slug}.png`);

    const raw = fs.readFileSync(path.join(BLOG_DIR, file), 'utf8');
    const fm = parseFrontmatter(raw);
    if (!fm.title) continue;

    const hash = crypto
      .createHash('sha1')
      .update([fm.title, fm.description, fm.category, fm.publishedDate].join('|'))
      .digest('hex')
      .slice(0, 12);

    if (!force && fs.existsSync(out) && manifest[slug] === hash) {
      skipped++;
      continue;
    }

    const svg = await satori(
      template({
        title: fm.title,
        description: fm.description,
        category: fm.category,
        date: fm.publishedDate,
      }),
      {
        width: W,
        height: H,
        fonts: [
          { name: 'Noto Sans TC', data: regular, weight: 400, style: 'normal' },
          { name: 'Noto Sans TC', data: black, weight: 900, style: 'normal' },
        ],
      }
    );

    await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toFile(out);
    nextManifest[slug] = hash;
    made++;
  }

  fs.writeFileSync(MANIFEST, `${JSON.stringify(nextManifest, null, 2)}\n`);

  console.log(`[og] 產生 ${made} 張，跳過 ${skipped} 張 → public/og/`);
}

main().catch((error) => {
  console.error('[og] 失敗：', error);
  process.exit(1);
});
