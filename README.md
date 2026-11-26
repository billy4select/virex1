# 教學頁還原：回到「好讀」的清單版

## 覆蓋檔案（4 個）

- `src/pages/seo/index.astro`、`src/pages/seo/[chapter].astro`
- `src/pages/marketing/index.astro`、`src/pages/marketing/[chapter].astro`

## 還原成什麼

就是先前那版：色帶頁首（`.page-band`）＋單欄章節清單＋每章一個「讀完這章，你會知道」框。

拿掉的東西：
- 雙欄 hero 與軌道視覺（`sp-orbit`）
- 30 秒摘要四格
- 章節卡兩欄、編號大字
- 閱讀路徑四步、適合／不適合對照帶、作者帶
- 章節頁的 01–0N 進度條、sticky 目錄、上下章大卡

## 為什麼這樣更好學

專題版把「內容」拆成很多視覺區塊，讀者要先看懂版型才看到內容。清單版視覺只有一件事：往下讀，第 01 章、第 02 章。掃讀成本低，也跟站上其他頁一致。

## 依賴

四頁只用 Tailwind 與 `MarketingLayout`，**不引用** `src/styles/series.css`、`SeriesHome.astro`、`SeriesChapter.astro`。
那三個檔留著不影響建置，之後要再試別的方向可以直接用；不想留就刪掉。

## 驗證

```
npx astro build   # 通過
```

`/seo/` 與 `/marketing/` 輸出無 `sp-*` 類別殘留，章節頁目錄與上下章為簡版樣式。
