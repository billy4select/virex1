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

## 第四輪：讀者問題入口與文章閱讀

目標是把「讀者問題 → 文章 → 下一步」變成全站一致的路徑，而不是先給分類，再讓讀者自己猜。

### 1. 首頁與 `/blog/` 改成問題入口

- 首頁 Hero 改成一句讀者問題：「新東西一直出現，但你該先理解哪一個？」
- 首頁與 `/blog/` 都在開頭接 `ThemeQuestionGrid`：四個主题各用一句讀者原話開場，下面是主题名與篇數，投資與市場 0 篇顯示「研究中」。
- `/blog/` H1 改成「新東西很多，先讀哪一篇？」，不再先列四個大分類卡。
- 桌面四欄、手機單欄；所有入口仍連到既有四個主题 hub，不新增頂層分類。

### 2. 文章 H1 下的答案先行摘要

- `BlogLayout` 在 H1 下直接渲染 frontmatter `description`，35 篇文章都有 2–3 句摘要，先回答「這篇能幫我解決什麼」。
- 摘要、日期、閱讀時間、標籤形成同一個 header，不再讓讀者先讀一大段才看到重點。

### 3. H2 問題化

- 全站 176 個 H2，原本只有 11 個是問句式。
- 這輪改寫 134 個步驟型、說明型 H2 成讀者會問的句子，例如「第一步：獲取高品質逐字稿」→「第一步：怎麼取得高品質逐字稿？」。
- 問題式 H2 由 11 個提升到 157 個；剩下 19 個是時間軸、結語、延伸閱讀，刻意保留陳述句。
- 目錄直接跟新 H2 同步，不需手動維護。

### 4. 文末固定順序

文章底部依序為：

1. `FAQ`：frontmatter 有 FAQ 才顯示，schema 與可見內容一致。
2. `ArticleNext`：單向「下一篇」，先同分类較舊文章，沒有才退到全站較舊文章。
3. `ArticleAuthor`：作者頭像、短自介、關於我／Threads／Instagram／YouTube。
4. `ArticleNewsletter`：電子報說明與訂閱 CTA。

原本的「相關閱讀」區塊移除，讓文末順序固定，不再和下一篇搶位置。

### 5. 桌面目錄只留 H2；手機成閱讀工具列

- 桌面 TOC 只取 H2，加上「常見問題」；不再把 H3 全部塞進 220px 側欄。
- 桌面 TOC 改為 `self-start` 的 sticky，卷動時留在左側，不會被 grid 拉成整篇文章高度。
- 手機在文章上方顯示閱讀工具列：目前段落、閱讀百分比、預估剩餘時間、「跳到段落」。
- 「跳到段落」展開編號目錄，點擊後自動收起；工具列在卷動時保持可見。
- 閱讀位置以目前 H2 越過視窗 55% 為切換點，比固定 150px 更符合手機閱讀。

## 第四輪 QA

- Astro build 與 Pagefind 索引通過；全站 137 頁，Pagefind 索引 35 篇文章。
- 全站 5,561 個內部連結與錨點：0 缺頁；3 個既有 `threads/*` 子頁錨點不一致，非本輪文章區改動。
- 1280、1024、640、390 四個寬度，首頁、`/blog/`、文章頁、主题頁均 0 橫向溢出。
- 深色模式：問題入口、桌面 TOC、作者盒、電子報區對比正常。
- 35 篇文章文末順序一致；`ArticleNext` 在最新文章之前都有下一篇文章。

## 第四輪修正：`/blog/` 對齊主題頁

問題：`/blog/` 與 `/blog/category/ai-tech/` 是兩套不同版面。索引頁是大 H1、四欄問題表、巨型精選卡；主題頁是小 header、pills、左內容右側欄、列表。讀者從索引進主题頁會覺得換了一個網站。

改法：以主题頁為主，索引頁只保留自己的兩個重點：四個問題入口與一篇精選文章。

### 1. Header 同一套節奏

- 同為 `max-w-5xl`、`border-b`、`pb-8 pt-10 md:pb-10 md:pt-14`。
- 補「首頁 › 文章」麵包屑。
- eyebrow 從「四個研究方向」改成「文章索引」。
- H1 從 `text-4xl md:text-6xl` 降為 `text-3xl md:text-5xl`，和主题頁一致；保留讀者問題「新東西很多，先讀哪一篇？」。
- 篇數從右上角小字改成主题頁同款 pill。

### 2. 主题導覽同一組 pills

- `<BlogTopicNav variant="pills">`，和主题頁完全同一個元件。
- 不再使用 `ThemeQuestionGrid` 的四欄 table 版型。
- Active pill 改成 token 色（`border-primary bg-primary/10 text-primary`），深色模式不再出現淺底白字。

### 3. 兩欄主體

- `lg:grid-cols-[minmax(0,1fr)_280px]`，和主题頁相同。
- 左欄：導言 → 四張問題卡（`sm:grid-cols-2`）→ 精選文章 → 最新文章。
- 問題卡沿用主题頁 `rounded-2xl border border-border bg-surface p-4`，只把「主题名＋篇數」放在底部。
- 右欄：「從這裡開始」連到 AI 工作團隊實驗室、NotebookLM 完整攻略、關於站長；另一張是電子報。
- 右欄 `lg:sticky lg:top-24`。

### 4. 精選與列表降密度

- 精選文章從 `rounded-2xl bg-surface p-6 md:p-8` 巨型卡片，改成 `border-y py-6` 的編輯式區塊。
- 標題從 `text-[2.4rem]` 降為 `text-2xl md:text-3xl`。
- 最新文章從 `PostCard` 改為主题頁同款 `ThemePostRow`。
- 搜尋留在「最新文章」右側，不再另成一套工具列。

### 修正 QA

- 1280、1024、640、390 四個寬度：`/blog/` 0 橫向溢出。
- 1280 桌面：header、pills、兩欄、問題卡、精選、列表與主题頁同一節奏。
- 390 手機：H1 單行、pills 自動換行、問題卡單欄、右欄降到文章列表之後。
- 深色模式：active pill 改為橘框＋橘字，問題卡與側欄對比正常。

## 还可以再做，但這次先不動

1. 一篇 NotebookLM 文章標題仍為 63 字，Google 顯示時可能被截斷；可另外給該文較短的 `seoTitle`。
2. `public/images/` 有約 1.9MB 的模板時期圖片，目前幾乎沒有被頁面引用；確認後可移除，降低部署體積。
3. 首頁目前沒有「最新文章」區塊；若希望首頁帶動文章閱讀，可再加 3 篇最新文章。
4. 剩下 19 個 H2 是時間軸、結語、延伸閱讀，沒有硬改成問句；若讀者回饋需要，可再局部調整。
5. 11 個 `/blog/tag/<tag>/` 仍是通用列表，尚未 noindex 或合併到四主题。
