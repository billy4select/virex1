# 新手入口 `/start-here/` ＋ sitemap lastmod

## 覆蓋檔案（3 個）

- `src/pages/start-here.astro`（新增頁）
- `astro.config.mjs`（sitemap 序列化加 lastmod）
- `src/config/navigation.ts`（Header 第一項、Footer「產品」第一項加「開始這裡」）

## `/start-here/` 內容

不是目錄，是分流。四條路，每條三個起點，每篇都寫「為什麼讀這篇」：

1. **把 AI 放進日常工作** → 工作盤點 → 建立 AI 員工 → 流程庫
2. **開始經營 Threads／自媒體** → 起步心態 → 10 個選題 → 140 天成長紀錄
3. **學行銷，先學會看懂數字** → 三個角 → 四段診斷 → 行銷計算
4. **學 SEO，讓文章被找到** → 搜尋機制 → 搜尋意圖 → 30 天計畫

下面一段「只想找一個能用的東西」放免費資源、全部文章、網站地圖。

文章與章節標題是建置時從 collection 抓的，不會和文章標題不一致；換標題不用回來改這頁。

## sitemap lastmod

`serialize()` 會把每篇 `/blog/<slug>/` 補上 `<lastmod>`：有 `updatedDate` 用更新日，否則用 `publishedDate`。

- 目前 97 篇已上線文章全部帶 lastmod（總網址 232 條：231 + `/start-here/`）
- 靜態專題頁**不給** lastmod：Cloudflare 部署時檔案 mtime 是 clone 時間，全部一樣，給了反而誤導
- `/blog/` 列表頁也不給

時間統一寫 `T00:00:00Z`，避免時區換算讓日期顯示成前一天。

## 驗證

```
npx astro build
grep -o '<lastmod>[^<]*' dist/sitemap-0.xml | sort -u | tail -3
```

## 部署後

- GSC 不用重送 sitemap，Google 下次抓 `sitemap-0.xml` 就會看到 lastmod
- 想加速：在 GSC「網址審查」對 3–5 篇主力文章按「請求建立索引」
- Header 從 5 項變 6 項，手機版如果擠，把「開始這裡」留在最前、其餘收進選單即可
