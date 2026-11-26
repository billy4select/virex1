# 行銷教學系列（/marketing/）

## 新增

- `src/lib/marketing-series.ts`：八章內容（改文字只動這個檔）
- `src/pages/marketing/index.astro`：教學首頁（八章目錄、適合誰、單篇入口）
- `src/pages/marketing/[chapter].astro`：章節頁（Article schema、上下章 pager）

## 修改

- `src/lib/homepage.ts`：`homeSeries` 加「行銷從診斷開始」
- `src/pages/series/index.astro`：編號改 01 AI／02 SEO／03 行銷／04 Threads／05 工具
- `src/components/home/SeriesGrid.astro`：「三套」→「四套」
- `src/content/blog/marketing-diagnosis-...md`：加一條導向 `/marketing/` 的內鏈

## 八章

| # | 章節 | 核心 |
|---|---|---|
| 01 | 三個角 | 需求、渠道、訊息；工具是最後一步 |
| 02 | 業績診斷 | 流量×轉換×客單價×回購，四段定位 |
| 03 | 受眾 | 痛點時刻四元素、三個檢查題、收窄三判準 |
| 04 | 定位 | 比較組、有代價的差異點、一句話模板 |
| 05 | 內容與渠道 | 觸及／信任／轉換／留存四段分工 |
| 06 | 廣告數字 | 六公式、三層對照、損益兩平 ROAS、預算比例 |
| 07 | 數據到決策 | 四段報告、三人分工、五個指標 |
| 08 | 90 天計畫 | 診斷、只修一段、放大或止損 |

每章 2–3 篇深入閱讀，指向站上既有文章（行銷 12＋廣告 15＋商業模式 8），共 5–6 條內鏈。

## 驗證

- 建置通過；`/marketing/` 與 8 章都在 dist 與 sitemap
- 章節頁 h2 4 顆、內鏈 5–6 條，死鏈 0
- `/series/` 五張卡（AI、SEO、行銷、Threads、工具）
- 首頁「深入學習」四張卡

## 部署

```bash
npx astro build
npx pagefind --site dist
```
