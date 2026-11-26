# 主題改版：加入舊站內容後的重整

覆蓋 1 個檔：`src/lib/topic-curation.ts`

## 改了什麼

**領域文案**
- 「行銷與文案」→「行銷、SEO 與廣告」，summary 補上 SEO 內容與廣告數據
- 「自媒體與個人事業」summary 補上 Threads 經營

**新增 5 個主題（共 156 篇引用，一篇文章可跨主題）**

| 領域 | 新主題 | 篇數 | 這條路線在回答什麼 |
|---|---|---|---|
| 行銷 | `seo-from-zero` 我想讓網站開始有搜尋流量 | 7 | 自學順序 → 意圖 → 關鍵字 → on-page → 沒流量的原因 → 內鏈 → 速度 |
| 行銷 | `seo-authority-tools` 我想搞懂網站權重跟 SEO 工具 | 4 | 權重四線索 → 九個工具 → 數位行銷三角 → 自學順序 |
| 行銷 | `ads-numbers` 我想看懂廣告數字，決定要不要加預算 | 6 | 六個公式 → 指標層級 → ROAS → 多少算好 → 寫成報告 → 業績預估 |
| 行銷 | `ads-cost-and-budget` 我的廣告沒效果，成本還一直漲 | 7 | 三段診斷 → CTR 診斷 → A/B → 疲勞 → CAC → CPM 上漲 → 預算比例 |
| 自媒體 | `threads-growth` 我想在 Threads 上從零開始經營 | 5 | 140 天紀錄 → 品牌語氣 → vs IG → 貼文 SEO → 商業帳號（掛 `/threads/` 教學） |

**既有主題補文章**
- `know-your-audience`：加 `ta-definition-pain-moment`、`audience-broad-or-focused`
- `brand-positioning`：加 `threads-brand-z-gen-z`
- `copywriting`：換入 `story-marketing-emotional-connection`、`writing-persuasion-logic`
- `marketing-diagnosis`：加 `marketing-metrics-2026-what-to-track`、`ig-insights-report-guide`、`ads-not-working-diagnosis`
- `ai-meetings-proposals`：加 `ai-report-human-touch`

**outcomes 補齊**
原本 65 條 → 103 條，全站每篇文章都有一句「讀完你會知道」。

## 驗證

- 主題引用 156 筆，無缺 outcome、無不存在文章（腳本已驗）
- `npx astro build` 通過
- `/topics/` 仍 8 個領域；行銷 8 個主題、自媒體 4 個主題
- 新頁實測：seo-from-zero 7 篇、ads-numbers 6、ads-cost-and-budget 7、threads-growth 5、seo-authority-tools 4

## 部署

```bash
npx astro build
npx pagefind --site dist
```
