# 專案協作規則（AGENTS.md）

本專案（`billy4select/virex1`）的所有修改與維護，無論任務大小，一律必須遵守以下三條核心規則：

## 1. 動工前，一定要先同步 GitHub 最新版本

- 開始修改任何檔案之前，必須先執行 `git fetch origin` 確認遠端狀態，並將本地分支同步到 `origin/main` 最新版本（例如 `git pull --ff-only origin main`）。
- 若本地已有未提交修改，或與遠端發生衝突，必須先告知使用者並確認處理方式，不可私自丟棄或強制覆蓋（禁止 `git reset --hard`、`git push --force`）。

## 2. 改完先確認沒有報錯，不直接覆蓋正式網站；等使用者說「可以上線」再推送

- 每次修改完成後，必須先進行檢查與驗證（包含語法、型別、Lint 或建置測試），確認沒有報錯。
- **未獲得明確同意前，禁止執行 `git push`、`npm run deploy`、`wrangler deploy` 或任何會覆蓋正式網站的操作。**
- 驗證完成後，先用**白話**向使用者說明：
  1. 這次改了什麼功能或畫面、影響哪些頁面。
  2. 檢查與測試的結果（若有發現其他既有的報錯也要順便提醒）。
- 務必等到使用者明確回覆 **「可以上線」** 之後，才執行提交與推送到 GitHub。

## 3. 絕對不要亂動網域設定、轉址規則和廣告設定檔

除非使用者明確點名要求調整，以下與網域、轉址、廣告驗證相關的檔案與設定**一律禁止修改或刪除**：

- **網域與部署設定**
  - `astro.config.mjs`（尤其是 `site`、`trailingSlash`、`build.format` 與 sitemap 規則）
  - `src/config/site.ts` 中的 `url`（正式網域）
  - `wrangler.jsonc`
  - `src/pages/robots.txt.ts`
  - 網站所有權驗證檔：`public/googlec0026ef1195a0d98.html`、`googlec0026ef1195a0d98.html`
- **轉址規則**
  - `public/_redirects`
  - `tools/check-redirects.mjs`
- **廣告與追蹤設定檔**
  - `public/ads.txt`
  - `src/layouts/BaseLayout.astro` 內的既有 GTM / 廣告追蹤碼設定

## 4. 新文章上架與 SEO 品質檢查清單

未來新增或大幅更新 `src/content/blog/*.md` 文章時，一律順手檢查以下五點：

- **實測證據與官方來源（工具／平台／廣告／SEO 類文章必補）**：在 frontmatter 補上 `testedAt`、`testNotes` 與官方 `sources`（`label` + `url`），讓文章頁自動顯示「實測條件與參考來源」證據卡。
- **搜尋意圖與 3 秒速查表**：凡屬「比較（A vs B）」「怎麼選」「指標差異」「流程步驟」類文章，開頭或第一個小節優先放上**結論先行**或 **Markdown 速查表**，直接完成搜尋者的任務。
- **Pillar / Cluster 內鏈收錄**：文章內文至少連回 1 個對應的 `/topics/.../` 主題頁，並將文章 slug 登記到 `src/lib/topic-curation.ts` 與對應主題支柱頁（避免孤島頁）。
- **品牌與轉換連結規範**：
  - 統一品牌稱呼為 **「比利陳｜行銷裡的路人甲」**。
  - 電子報連結一律使用 **Substack**（`https://billy4select.substack.com/`），**禁止使用已停用的 `kit.com`**。
  - **NARRATIVE ENGINE**（`/narrative-engine/`）為付費工具，不可標示為免費。
- **推送方式**：若直接推送 `main` 受分支保護阻擋，請開 feature branch 推送並使用 `gh pr create` 建立 Pull Request 交給使用者合併。

