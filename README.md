# 修 Cloudflare 建置失敗：`@/styles/series.css` 找不到

## 原因（已確認，不是猜的）

```
[vite]: Rollup failed to resolve import "@/styles/series.css"
from "/opt/buildhome/repo/src/pages/seo/[chapter].astro"
```

查 GitHub 上的實際檔案：

`https://raw.githubusercontent.com/billy4select/virex1/main/src/styles/series.css` → **404**

也就是 `src/styles/series.css` **沒被推上 repo**（新資料夾 `src/styles/` 沒進 commit，本機有、GitHub 沒有），所以建置時 alias 解得到路徑、檔案卻不存在，Rollup 直接失敗。
`src/components/series/*.astro` 有推上去（raw 抓得到），所以問題只卡在這一支 CSS。

## 這版怎麼修

把 709 行的 CSS 直接以 `<style is:global>` **內嵌進四個頁面**，不再有任何外部 CSS 依賴：

- `src/pages/seo/index.astro`
- `src/pages/seo/[chapter].astro`
- `src/pages/marketing/index.astro`
- `src/pages/marketing/[chapter].astro`

覆蓋這四個檔就好，**不需要** `src/styles/series.css`，也不用改 `tsconfig.json` 或 `astro.config.mjs`。
（該檔留在本機無妨，已無人引用。）

## 驗證

```bash
npx astro build
```

本機：通過，`/seo/`、`/marketing/` 輸出含 `--sp-ink` 等變數，版面正常。

## 下次推檔要注意

新增「資料夾」時，`git add -A` 才不會漏（`git add src/pages/seo` 這種只加既有路徑的寫法會漏掉新目錄）。推完可以在 GitHub 上直接點開 `src/styles/` 確認。

## 另外兩個建置警告（不影響這次）

- `The base directory ".../src/content/docs/" does not exist`：`content.config.ts` 還掛著 `docs` collection，但資料夾已不存在，警告而已。
- `Duplicate id "notebooklm-ocr-pdf-solution"`：repo 裡有兩個檔產生同一個 id（同 slug 的 `.md` 與 `.mdx`，或重複檔），後面的會蓋掉前面的。建議刪掉多餘那個，不然那篇文章的內容會不確定。
