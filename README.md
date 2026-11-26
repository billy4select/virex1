# 每篇文章自動 OG 分享圖（1200×630）

## 覆蓋檔案

- `public/og/`：103 張 PNG（每篇一張，約 6MB）
- `assets/fonts/NotoSansTC-Regular.ttf`、`NotoSansTC-Black.ttf`（OFL 授權，隨 repo 附上，共 14MB）
- `tools/og-image.mjs`：產生器
- `package.json`：新增 `satori` 依賴；`prebuild` 多一步 `node tools/og-image.mjs`（只補缺的）
- `package-lock.json`：同步 satori
- `src/pages/blog/[...slug].astro`：`image` 沒填時用 `/og/<slug>.png`
- `src/layouts/BlogLayout.astro`：`/og/` 的圖只給社群，不當文章封面

## 圖片長什麼樣

- 紙張底 `#f8f5ef`、左側 10px 分類色條、右上分類膠囊標籤
- 標題 52–76px 自動依字數縮放，最多 3 行；下面 2 行摘要
- 底部 `billy4select.com · 日期` 與「閱讀全文 →」
- 九個分類各一色（AI 藍、NotebookLM/SEO 深綠、行銷磚紅、廣告橘紅、自媒體紫、職涯藍綠、書籍棕）

字型是 Noto Sans TC 400／900，satori 會把字轉成向量再輸出 PNG，所以不依賴系統字型，Cloudflare 上不會變豆腐。

## 之後新增文章

```bash
npm run og          # 只補缺少的
npm run og:force    # 全部重產（改版型時用）
npm run og --slug <slug>   # 單篇
```

`npm run build` 的 prebuild 會自動跑 `og`，新文章部署時自動長圖；已存在的會跳過，所以不會拖慢建置。

## 驗證

```bash
npm run build
grep -o '<meta property="og:image"[^>]*>' dist/blog/marketing-calculator/index.html
# → https://www.billy4select.com/og/marketing-calculator.png
```

`twitter:card` 已是 `summary_large_image`。

## 注意

- 社群平台會快取舊預覽。已貼過的連結不會自動換新圖，要重新抓取（Facebook 分享偵錯工具、Threads 重新貼文）才會更新。
- 圖片不含作者照，維持純文字卡；要加人像可以改 `tools/og-image.mjs` 的 template。
