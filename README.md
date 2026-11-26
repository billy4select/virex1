# SEO 教學系列（/seo/）

## 新增檔案

- `src/lib/seo-series.ts`：七章內容資料（可改文字不用動頁面）
- `src/pages/seo/index.astro`：教學首頁（七章目錄＋適合誰＋單篇入口）
- `src/pages/seo/[chapter].astro`：章節頁（含 Article schema、上下章 pager）

## 修改檔案

- `src/lib/homepage.ts`：`homeSeries` 加入「SEO 從零開始」（首頁深入學習卡）
- `src/pages/series/index.astro`：教學總覽加入編號 02，原 Threads 改 03、工具改 04
- `src/components/home/SeriesGrid.astro`：文案「兩個」→「三套」
- `src/content/blog/seo-self-study-guide.md`：加一條導向 `/seo/` 的內鏈

## 七章

| # | 章節 | 重點 |
|---|---|---|
| 01 | 搜尋怎麼運作 | 爬取／索引／排序／呈現，各段你能控制什麼 |
| 02 | 搜尋意圖 | 四型、兩個現場測試、一個常見誤判 |
| 03 | 關鍵字 | 五種問句、長尾三段、一頁一種意圖 |
| 04 | 文章結構 | 標題／首段／H2／圖片／描述／schema 六項檢查 |
| 05 | 內部連結 | 三層集群、錨文字、3 出 1 進、孤島檢測 |
| 06 | 技術面 | 收錄優先、canonical／301／sitemap／速度三門檻 |
| 07 | 30 天計畫 | 四週任務、每週三個數字、不該期待的三件事 |

每章末尾有「深入閱讀」2 篇，直接對應站上既有文章（12 篇 SEO 內容），章節頁與文章互為入口。

## 驗證

- 建置通過；`/seo/` 與 7 個章節頁都在 `dist` 與 sitemap
- `/series/` 顯示 4 張教學卡（AI 工作團隊、SEO 從零開始、Threads、Narrative Engine）
- `/seo/` 目錄卡 7 張，pager 首尾正確（第一章回首頁、最後一章導 `/blog/?theme=seo-content`）

## 部署

```bash
npx astro build
npx pagefind --site dist
```
