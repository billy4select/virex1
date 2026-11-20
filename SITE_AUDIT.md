# 全站健檢與調整紀錄

日期：2026-11-20  
範圍：`virex1-main` 主站（Astro）＋ `public/ai-work-team/` 40 頁子專題＋`public/threads/`、`public/narrative-engine/` 靜態頁。

## 這次已修正

### 1. 全站標題不再重複品牌

原本每一頁都出現兩次站名，例如：

`關於我 - 行銷裡的路人甲 | 比利陳 | 行銷裡的路人甲 | 比利陳`

現在 `SEO.astro` 會偵測標題是否已含站名，只補一次。首頁、文章、關於、FAQ、聯絡、法律頁都已修正；56 個主站網址沒有重複標題。

### 2. 每頁只保留一個 `<main>`

原本 `BaseLayout` 與 `MarketingLayout` 各有一層 `<main id="main-content">`，DocsLayout、免責聲明頁又各自再包一層，造成重複 ID 與語意錯誤。

現在由各版型自己提供唯一的主要內容區；主站 56 頁全部通過「一個 `<main>`、一個 `<h1>`」檢查。

### 3. FAQ／HowTo 結構化資料真的輸出

`MarketingLayout` 原本把 JSON-LD 放在 `slot="head"`，但 `BaseLayout` 沒有對應的 head slot，資料實際被忽略。

現在已補上 head slot，並移除重複的 GTM 區塊。主站目前有：

- 35 篇 `Article`
- 29 篇 `FAQPage`
- 12 篇 `HowTo`
- 55 頁 `BreadcrumbList`

### 4. Footer 社群連結恢復

`SocialLinks` 型別原本只允許 Twitter／GitHub／Discord，但設定檔寫的是 YouTube、Instagram、Threads，導致 icon 全部不顯示。

現在 footer 會顯示 YouTube、Instagram、Threads，並保留 X／GitHub／Discord 的支援。

### 5. 導覽有目前頁面狀態

Header 與 mobile menu 會依目前路徑標記 `aria-current="page"`，視覺上也有對應底色。無障礙標籤改為中文。

### 6. Open Graph 與圖示

- 新增 1200×630 的 `public/og-default.png`。
- 首頁與未指定文章圖的文章，分享時使用這張預設圖。
- 補 `og:image:width`、`og:image:height`、`og:image:alt`、`twitter:image:alt`、`og:locale`。
- 新增 `apple-touch-icon.png`（180×180）與 `favicon-32x32.png`，不再用 WebP 當 Apple touch icon。

### 7. 文章與 RSS 細節

- `Article` schema 補 `dateModified`、`publisher`、`mainEntityOfPage`、`url`。
- 文章頁補 `article:published_time`、`article:modified_time`、`article:author`、`article:tag`。
- RSS 語系由 `en-us` 改為 `zh-TW`，標題改為「文章 RSS」。

### 8. 其他站級修正

- 分頁頁面改成每頁獨立的 description。
- 404 頁語系改為 `zh-Hant-TW`，圖示同步更新。
- `robots.txt` 增加 `/ai-work-team/sitemap.xml`，讓 40 頁子專題的 sitemap 被搜尋引擎找到。
- `narrative-engine` 補「回首頁」，並修正 390px 導覽被擠成直排的問題。
- 公告列在手機版改為較短文案與較小字級，避免斷行。

## QA 結果

- 主站 56 頁：標題 0 重複、description 0 重複、`<main>` 與 `<h1>` 全部唯一。
- 全站 120 頁：2,494 個內部連結與錨點，0 壞鏈。
- 40 頁 `ai-work-team` 子專題完整保留。
- 390px：120 頁全部無橫向溢出。
- Astro build 與 Pagefind 索引均通過。

## 还可以再做，但這次先不動

1. 一篇 NotebookLM 文章標題仍為 63 字，Google 顯示時可能被截斷；可另外給該文較短的 `seoTitle`。
2. `public/images/` 有約 1.9MB 的模板時期圖片，目前幾乎沒有被頁面引用；確認後可移除，降低部署體積。
3. 首頁目前沒有「最新文章」區塊；若希望首頁帶動文章閱讀，可再加 3 篇最新文章。
4. 文章頁目前沒有視覺化 breadcrumb，只有 JSON-LD；可補上顯示型 breadcrumb。
