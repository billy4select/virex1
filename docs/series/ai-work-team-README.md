# 打造 AI 工作團隊

免費六堂課的多頁靜態網站。沒有建置流程、沒有框架，直接開 HTML 就能看。

## 頁面

| 檔案 | 內容 |
|---|---|
| `index.html` | 首頁：課程入口、資源與案例 |
| `curriculum.html` | 課程總覽：方法、角色、案例主線、入門／進階 |
| `workflows.html` | 工作流程庫：市場研究、內容製作、簡報製作 |
| `lesson-01.html`～`lesson-06.html` | 六堂課全文、Prompt、檢查表 |
| `resources.html` | Prompt 範本庫、SOP 範本、AI 名詞字典 |
| `cases.html` | 課程示範案例、投稿格式 |
| `about.html` | 課程理念、作者、FAQ |

共用資源在 `assets/`：`style.css`、`app.js`、`og-cover.jpg`。

## 本機預覽

```bash
python3 -m http.server 8000
# http://localhost:8000/
```

## 部署方式 A：GitHub Pages

1. 建立 repo（例如 `ai-work-team`），把這個資料夾的全部檔案放在 repo 根目錄。
2. 推到 `main` 分支。
3. repo → Settings → Pages → Source 選 **GitHub Actions**。
4. `Deploy to GitHub Pages` workflow 會自動上線。
5. 網址是 `https://<你的帳號>.github.io/<repo>/`。
6. 先把 canonical 改成正式網址，再 push：

```bash
python3 tools/set-base-url.py https://billy4select.github.io/ai-work-team/
```

> GitHub Pages 的專案網址一定是 `帳號.github.io/repo/`，不能直接掛在 `www.billy4select.com/ai-work-team/` 這種子目錄底下。若一定要用 blog 網域的子目錄，請用方式 B。

## 部署方式 B：上傳到 www.billy4select.com 子目錄

1. 把全部檔案上傳到主機的 `public_html/ai-work-team/`。
2. 網址：`https://www.billy4select.com/ai-work-team/`（canonical 已設好，不用改）。
3. WordPress 選單加一個「自訂連結」指向這個網址。

## 部署方式 C：Netlify／Vercel

- Build command 留空，Publish directory 設 `.`（repo 根目錄）。
- 不需要安裝任何套件。

## 修改內容

- 文案直接改對應 `.html`。
- 樣式在 `assets/style.css`，互動在 `assets/app.js`。
- 改完記得更新 `sitemap.xml` 的 `lastmod`。
- 若網址有變，執行 `tools/set-base-url.py <新網址>`，會同步更新所有 canonical、OG URL 與 sitemap。

## 目前狀態

- 12 頁、全部相對路徑，可放在 repo 根目錄或任何子資料夾。
- 每頁有獨立 title、description、canonical、OG/Twitter、JSON-LD。
- 含 `sitemap.xml`、`robots.txt`、`.nojekyll`。
