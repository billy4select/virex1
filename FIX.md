# 佈建失敗修正：`_redirects` 重複規則

## 發生了什麼

建置本身是成功的：Astro 產出 297 個 HTML、`sitemap-index.xml` 生成、pagefind 索引 59 頁、282 個資產上傳完成。失敗點在**部署前**的 Cloudflare 驗證：

```
Invalid _redirects configuration:
Line 108: Duplicate rule for path /ai-work-team/about.html.
...（共 11 條）
```

原因是：你的 repo 原本在第 107 行就已經有這一段

```
# AI 工作團隊：舊版 .html 網址永久導向目前的目錄網址
/ai-work-team/about.html /ai-work-team/about/ 301
...
```

我上一包又把同一批規則（22 條，包含帶斜線的版本）放在檔案最前面，於是每個來源路徑出現兩次。Cloudflare 對重複來源是「整包拒絕」，不是跳過，所以 build 成功、deploy 失敗。

## 這次改了什麼

| 檔案 | 動作 |
|---|---|
| `public/_redirects` | 去重：107 條 → 96 條唯一規則，保留新加的 `*.html/` 帶斜線版本 |
| `tools/check-redirects.mjs` | 新增：部署前檢查重複來源、狀態碼、來源格式、來源等於目標 |
| `package.json` | `prebuild` 改成先跑檢查，重複規則在 build 階段就會被擋下 |

檢查腳本會直接指出「第 N 行來源重複，第一次出現在第 M 行」，跟 Cloudflare 的錯誤訊息一致，只是提前在本地發生。

## 套用方式

把這三個檔案覆蓋回 repo（同路徑），重新部署即可。不需要清 cache。

## 驗證

```bash
node tools/check-redirects.mjs   # 應顯示：檢查通過：96 條規則，無重複來源
npm run build                     # 用 bun 的話：bun run build
```

## Log 裡另外兩個訊息，不是這次失敗的原因

- `[WARN] [glob-loader] 目錄 src/content/docs/ 不存在`：`docs` collection 是空的，無害。
- `Duplicate id "notebooklm-ocr-pdf-solution"`：你的雲端 repo 裡有兩份會解析成同一個 id 的文章，後面的會覆蓋前面的。建議檢查是不是多了一個同名檔案或子目錄，否則那篇會少一份。

## 之後做舊站 301 對映時的注意事項

舊站有 103 條 URL 要接，規則會快速增加到兩三百條。最容易出錯的兩件事：

1. **前綴重疊**：`/2026/03/blog-post.html` 這類舊網址有三篇同名 `blog-post.html`（在不同月份），一定要用完整路徑，不能只寫檔名。
2. **大小寫**：Blogger 有 `/2026/03/AI-work.html`、`/2025/12/NotebookLM-PPT.html` 這種大寫路徑，Cloudflare 路徑比對是大小寫敏感，要照原樣寫。

每次加完規則先跑 `node tools/check-redirects.mjs`，再去部署，可以省掉一輪建置等待。
