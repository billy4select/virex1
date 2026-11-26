# 專題整合套件（P0 + P1）

這一包是「可直接覆蓋」的版本：設定檔、新頁面、共用外殼，外加**已經套好外殼的 64 個專題頁**。解壓覆蓋後就能直接建置，不必先跑腳本；腳本留著是給之後新增專題、改導覽時用的。

## 一、檔案清單

| 路徑 | 類型 | 用途 |
|---|---|---|
| `public/series-assets/series-shell.css` | 新增 | 專題頁共用外殼樣式，token 對齊主站 |
| `public/series-assets/series-shell.js` | 新增 | 手機導覽開關 |
| `tools/sync-series-chrome.mjs` | 新增 | 把頁首／麵包屑／頁尾注入 64 頁，可重複執行 |
| `tools/extract-inline-css.mjs` | 新增 | 把 `/threads` 重複的 inline CSS 抽成可快取檔案 |
| `tools/collect-static-urls.mjs` | 新增 | 收集 `public/` 靜態頁，產出 `static-urls.json` |
| `src/pages/series/index.astro` | 新增 | `/series/` 專題總覽頁（導覽「專題」的落地頁） |
| `public/_redirects` | 覆蓋 | 多了 22 條 301（11 組扁平 `.html` → 目錄版） |
| `astro.config.mjs` | 覆蓋 | sitemap `customPages` 改吃 `static-urls.json` |
| `src/pages/robots.txt.ts` | 覆蓋 | sitemap 從 3 行收成 1 行 |
| `src/config/navigation.ts` | 覆蓋 | 主導覽新增「專題」，頁尾新增「專題總覽」 |
| `package.json` | 覆蓋 | 新增 `prebuild` 與 `series:*` 指令 |
| `public/ai-work-team/**/index.html` | 覆蓋 | 41 頁，已套用新頁首／麵包屑／頁尾 |
| `public/threads/**/index.html` | 覆蓋 | 23 頁，同上，且 inline CSS 已抽成外檔 |
| `public/threads/assets/css/*.css` | 新增 | 5 份共用 CSS（原本 23 頁各帶一份 inline） |

## 二、套用步驟

1. 把整包解壓到 repo 根目錄，依原路徑覆蓋（含 64 個已套用外殼的頁面）。
2. 刪掉以下檔案（**這一步不做，重複內容還在**）：

```bash
# 11 組扁平重複頁（已由 301 接手）
rm public/ai-work-team/{about,cases,curriculum,resources,workflows,lesson-01,lesson-02,lesson-03,lesson-04,lesson-05,lesson-06}.html

# 子站自己的 robots / sitemap（已併入主站）
rm public/ai-work-team/robots.txt public/ai-work-team/sitemap.xml public/threads/sitemap.xml
```

3. 把兩份開發檔移出 `public/`（內容不用改，只是不該被公開存取）：

```bash
mkdir -p docs/series
mv public/ai-work-team/README.md docs/series/ai-work-team-README.md
mv public/ai-work-team/tools/set-base-url.py docs/series/set-base-url.py
```

4. 這次解壓後頁面已經是套用過的狀態，可直接建置。只有**之後**新增專題、改 `SERIES` 設定或新增靜態頁時，才需要跑：

```bash
npm run series:sync   # 重新注入 64 頁的頁首 / 麵包屑 / 頁尾（可重複執行）
npm run series:css    # 抽出 threads 共用 CSS（只會做一次）
npm run series:urls   # 重新產生 static-urls.json
```

> `npm run build` 會自動先跑 `series:urls` 與 `series:sync`，所以 Cloudflare 的建置流程不用改設定，也不會產生額外 diff。

5. 建置與檢查：

```bash
npm run build
```

檢查這幾個位置：

- `/series/` 有新頁，導覽「專題」可點
- `/ai-work-team/lesson-01/` 頁首出現頭像、主站導覽、系列章節列、麵包屑、電子報 CTA
- `/threads/mindset/` 同上，且頁面原始碼只剩 `<link>`、沒有 `<style>`
- `/ai-work-team/about.html` 會 301 到 `/ai-work-team/about/`
- `/sitemap-index.xml` 內含 65 個專題頁；`/robots.txt` 只有一行 Sitemap
- 手機寬度下頁首只剩頭像、漢堡與可橫向滑動的章節列

6. 跑完 `series:sync` 後 HTML 會被改寫，這是預期行為。建議**獨立一個 commit**，之後 build 就不會再有 diff。

## 三、兩個可調的地方

**想保留子站原本的襯線體與米色底**：刪掉 `series-shell.css` 最下面「字族與底色統一」那一段，外殼仍會統一，內文維持原樣。

**想改系列名稱或章節導覽**：只改 `tools/sync-series-chrome.mjs` 最上方的 `SERIES` 物件，重跑 `npm run series:sync` 即可，不用碰 64 個檔案。

## 四、之後新增一個專題

現階段（還沒做 content collection）只要三步：

1. 建 `public/<slug>/` 靜態頁
2. 在 `SERIES` 加一筆 `{ name, shortName, root, note, nav }`
3. `npm run series:sync`

外殼、麵包屑、sitemap、導覽樣式都會自動套上。等專題數量超過 3 個、或開始覺得 HTML 難維護，再走 P3 的 content collection（那時這支腳本直接退役）。

## 五、不要做的事

- 不要用 301 把 `/ai-work-team/` 搬到 `/series/ai-work-team/`：41 頁已有排名，搬家損失大於路徑整齊。
- 不要同時在 `public/` 與 `src/pages/` 建同名路由：Astro 會衝突，`public` 的檔案會蓋掉新頁。
- 不要把 `series-assets/` 放進 `public/` 以外的位置：靜態頁要載入它，必須維持可公開存取。
