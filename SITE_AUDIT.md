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

## 第二輪：文章閱讀與主題架構

### 1. 四個研究主題 hub

依照主站首頁的四個研究方向建立分類頁：

- `/blog/category/ai-tech/`：AI 與科技，26 篇。
- `/blog/category/business-marketing/`：商業與行銷，5 篇。
- `/blog/category/personal-brand/`：個人品牌與事業，4 篇。
- `/blog/category/investment-market/`：投資與市場，目前 0 篇，設為 `noindex` 且不進 sitemap；累積 3 篇後再開索引。

AI 與科技頁再分三個內容叢集：AI 工具選型、NotebookLM、AI 工作流程。每篇文章只有一個主要 `category`，標籤保留為次要分類。

### 2. 文章左側目錄

- 使用 Astro `render()` 回傳的 `headings` 產生 H2／H3 目錄，不手寫、不 regex 爬 HTML。
- 桌面版為 220px sticky 左側欄，`top: 6rem`，過長時可滾動。
- 手機與平板（<1024px）改成文章上方的折疊目錄，按鈕有 `aria-expanded`。
- 目錄也列入 FAQ 問題；scrollspy 以標題頂端 120px 判斷 active。
- 所有 35 篇文章都有目錄；390px 無橫向溢出。

### 3. FAQ 從 schema 走回讀者眼前

原本 29 篇文章有 `FAQPage` JSON-LD，但文章頁沒有顯示 FAQ。現在文章底部會渲染可見的「常見問題」，並保留原本的 JSON-LD；標記與讀者看到的內容一致。

### 4. Schema 與麵包屑

- 文章 JSON-LD 從 `Article` 改為更精確的 `BlogPosting`，補 `articleSection`、`inLanguage`、`isPartOf`、作者 `sameAs`。
- 文章頁補視覺化麵包屑：首頁 › 文章 › 主題 › 文章。
- 分類頁補 `CollectionPage` + `ItemList`；`BreadcrumbList` 由 `SEO.astro` 統一輸出。
- 主站 sitemap 目前 59 個網址；投資與市場主題頁刻意排除。

## QA 結果

- 主站 56 頁：標題 0 重複、description 0 重複、`<main>` 與 `<h1>` 全部唯一。
- 全站 120 頁：2,494 個內部連結與錨點，0 壞鏈。
- 40 頁 `ai-work-team` 子專題完整保留。
- 390px：120 頁全部無橫向溢出。
- Astro build 與 Pagefind 索引均通過。

第二輪 QA：

- 全站 137 頁、4,530 個內部連結與錨點，0 壞鏈。
- 35 篇文章全部有目錄；29 篇 FAQ 全部可見且 schema 對應。
- 4 個主題頁文章數：26／5／4／0，合計 35。
- 390px 抽查 41 個主要頁面，0 橫向溢出。
- 投資與市場頁 `noindex, follow`，且不在 sitemap。

## 第三輪：文章索引去密度

目標是讓讀者一眼知道先讀哪一篇，而不是先看到四個大主題卡、搜尋框與十二個標籤。

### 1. 移除「研究文章」字樣

`/blog/` 的 eyebrow 不再顯示「研究文章」，直接從 H1「文章」與一句網站定位開始。

### 2. 四張主題卡改成緊湊 tabs

- 桌面：全部、AI 與科技、商業與行銷、投資與市場、個人品牌與事業，一行文字 tabs，數字縮小。
- 手機：改成可換行的 compact chips，四個主題都看得到，不再需要橫向滑動。
- 投資與市場維持 0 篇，保留入口但不搶視覺。

### 3. 一篇精選，其他進最新文章

- `/blog/` 只保留一篇「精選文章」，使用 `featured`／`boost` 標記中最新的那一篇。
- 其餘文章依日期進入「最新文章」，不再同時出現兩張「熱門文章」卡。
- 分頁第 2 頁以後同步排除同一篇精選，避免重複。

### 4. 文章列改成低密度 row

`PostCard` 從大塊卡片改成單列：分類、日期、閱讀時間、標題、兩行摘要、右側「閱讀 →」。列表用細分隔線，不再用大間距卡片堆疊。

### 5. 搜尋與標籤降級

- 搜尋改成「搜尋文章」按鈕，點開才顯示 Pagefind 輸入框，預設不佔版面。
- `/blog/` 不再放十二個標籤 chips；標籤仍可從文章頁與既有 tag 頁進入。
- 分頁頁移除重複的搜尋與標籤列，只保留標題、頁碼與文章列表。

## 第三輪 QA

- Astro build 與 Pagefind 索引通過；全站 137 頁。
- 文章區 53 個 HTML、2,233 個內部連結與錨點，0 缺頁、0 壞錨點。
- 35 篇文章分佈：第 1 頁精選 1 篇＋列表 6 篇；第 2–6 頁共 28 篇；合計 35，0 重複。
- 1280、1024、390 三個寬度檢查：0 橫向溢出；手機四個主題 chips 全部可見。
- 深色模式檢查：tabs、精選卡、文章列對比正常。

## 还可以再做，但這次先不動

1. 一篇 NotebookLM 文章標題仍為 63 字，Google 顯示時可能被截斷；可另外給該文較短的 `seoTitle`。
2. `public/images/` 有約 1.9MB 的模板時期圖片，目前幾乎沒有被頁面引用；確認後可移除，降低部署體積。
3. 首頁目前沒有「最新文章」區塊；若希望首頁帶動文章閱讀，可再加 3 篇最新文章。
4. 文章頁目前沒有視覺化 breadcrumb，只有 JSON-LD；可補上顯示型 breadcrumb。
