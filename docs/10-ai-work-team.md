# 打造 AI 工作團隊（/ai-work-team/）維護說明

專題是 `public/ai-work-team/` 底下的純靜態 HTML，不經過 Astro 建置，部署時原樣複製到網站 `/ai-work-team/`。

## 網址結構

每一頁都是「目錄式網址」：`public/ai-work-team/<路徑>/index.html` → `https://www.billy4select.com/ai-work-team/<路徑>/`。

| 區塊 | 路徑 | 頁數 |
|---|---|---|
| 專題首頁 | `/` | 1 |
| 開始探索（6 個主題的閱讀地圖） | `curriculum/` | 1 |
| 主題 01–06 | `lesson-01/` … `lesson-06/` | 6 |
| 工作流程庫 | `workflows/` | 1 |
| 完整／日常流程 | `workflows/market-research/`、`content-creation/`、`presentation/`、`customer-reply/`、`meeting-notes/`、`weekly-review/` | 6 |
| 單一員工案例 | `workflows/solo-case/` | 1 |
| 任務庫與 18 張任務卡 | `workflows/tasks/`、`workflows/tasks/<slug>/` | 19 |
| 實用資源 | `resources/`、`resources/prompts/`、`resources/templates/`、`resources/glossary/` | 4 |
| 案例、關於 | `cases/`、`about/` | 2 |

共 41 頁，與 `sitemap.xml` 一致。舊版 `*.html` 網址已刪除，改由 `public/_redirects` 301 到對應的目錄網址。

## 官方數字（改內容前先對照）

6 個主題、6 條流程（3 套完整流程＋3 條日常流程）＋1 個單一員工案例、18 張任務卡、13 份 Prompt、13 份工作流程模板（4 基礎＋9 進階）、15 個入門 AI 名詞。

這些數字出現在專題首頁、各列表頁、meta description，以及主站 `src/pages/resources.astro`、`src/lib/homepage.ts`。新增或刪減內容時要一起更新。

用語統一：一律稱「主題」（不是「課」或「課程」）、「個人工作說明書」（不是「數位分身」）、「資訊圖表」（不是「信息圖」）。數量用阿拉伯數字，數字與中文之間留半形空格。

## SEO 慣例

- Title：`主關鍵字：補充說明｜打造 AI 工作團隊`，主體約 22 字內；首頁與案例、關於頁因標題已含專題名稱，不再加尾綴。
- Meta description：約 60–110 字，寫清楚「做什麼、產出什麼、給誰」。`og:title`／`og:description` 與 JSON-LD 的 description 要同步改。
- 每頁只有一個 H1，且與 Title 的主關鍵字一致。
- 新增頁面時：加進 `sitemap.xml`、在至少一個列表頁與頁尾導覽加入連結、補麵包屑與 BreadcrumbList。
- 改完內容後更新 `sitemap.xml` 的 `lastmod`。

## robots.txt 與 sitemap

- 網站唯一的 robots.txt 由 `src/pages/robots.txt.ts` 產生（`public/robots.txt` 已移除，避免兩份並存）。子目錄的 robots.txt 搜尋引擎不會讀取，因此 `public/ai-work-team/robots.txt` 也已移除。
- 主站 sitemap 由 Astro 產生（`sitemap-index.xml`）；專題與 Threads 專題各有一份靜態 sitemap，三份都列在 robots.txt。

## 更換網址

若網域變更，執行：

```bash
python3 tools/set-base-url.py https://新網域/ai-work-team/
```

腳本會同步更新專題所有頁面與 sitemap 內的 canonical／OG 網址。
