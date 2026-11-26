# 文章分類拆細 v2：6 類 → 9 類

## 覆蓋檔案

- `src/lib/themes.ts`（分類定義，9 類）
- `src/pages/blog/category/[category].astro`（舊 slug `business-marketing` 補 301 到新篩選）
- `src/pages/topics/index.astro`（描述改寫）
- `src/content/blog/*.md` 48 篇（只改 `category` 一行）

## 新分類與篇數

| 分類 | slug | 總篇 | 已上線 |
|---|---|---|---|
| AI 工作流程與工具 | `ai-workflow` | 15 | 15 |
| NotebookLM 實戰 | `notebooklm` | 9 | 9 |
| 商業模式與獲利 | `business-model` | 8 | 8 |
| 行銷策略與診斷 | `marketing-strategy` | 12 | 12 |
| 廣告與投放 | `advertising` | 15 | 15 |
| 內容與 SEO | `seo-content` | 12 | 12 |
| 自媒體與個人事業 | `self-media` | 10 | 10 |
| 職涯與轉型 | `career` | 13 | 13 |
| 書籍導讀 | `book-guides` | 9 | 3（6 篇 11/27–11/30 排程） |

原本「商業與行銷」48 篇，拆成四類的邏輯：

- **商業模式與獲利（8）**：需求驗證、畫布、定價、策略分析、業績預估
- **行銷策略與診斷（12）**：四段診斷、受眾、定位、團隊、指標、IG 洞察
- **廣告與投放（15）**：公式、基準值、素材診斷、疲勞、CAC、預算、報告、網紅
- **內容與 SEO（12）**：搜尋意圖、關鍵字、on-page、內鏈、速度、文案與故事

`ai-batch-review-analysis` 從行銷移到「AI 工作流程與工具」（本質是 AI 分析流程）。

## 驗證

- `/blog/` 篩選 chip 數 = 9（實測 dist）
- `/blog/category/business-marketing/` 會 301 → `/blog/?theme=marketing-strategy`（舊連結不會 404）
- 建置通過，sitemap 170→ 依新分類不變（分類頁不進 sitemap）

## 部署

```bash
npx astro build
npx pagefind --site dist
```
