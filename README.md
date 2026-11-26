# 全站網站地圖頁 `/site-map/`

## 覆蓋檔案（2 個）

- `src/pages/site-map.astro`（新增）
- `src/config/navigation.ts`（頁尾「法律」區加一條「網站地圖」）

## 這頁有什麼

1. 色帶標題：全站頁數（目前 231，隨文章自動變）
2. 主要頁面：首頁、關於、資源、文章、主題、系列、FAQ、讀者回饋、聯絡、隱私、免責
3. 教學專題 4 套：AI 工作團隊、SEO 七章、行銷八章、Threads，章節直接列出
4. 文章分類 9 類，每類列出全部已上線文章標題
5. 其他：Narrative Engine、RSS、XML Sitemap

文章、章節、頁數都是建置時自動抓的，之後新增文章不用回來改這頁。
排程中的文章（`publishedDate` 未到）不會出現，跟 `/blog/` 一致。

## GSC 要傳的是哪一個

**XML，不是這一頁。**

- 提交網址：`https://www.billy4select.com/sitemap-index.xml`
- `robots.txt` 裡已經有 `Sitemap:` 這一行，GSC 通常會自己抓到，也可以手動提交一次
- XML 由 `@astrojs/sitemap` 自動產生，含 231 個網址（含 `public/` 的靜態專題頁，靠 `tools/collect-static-urls.mjs` 補進去）

HTML 這頁的用途是給人看的索引、順便做內鏈，不是給 GSC 的檔案。

## 驗證

```
npx astro build   # 通過
```

- `/site-map/` 產出 60K，內含 101 篇文章連結、SEO 7 章、行銷 8 章、Threads 24 頁、AI 12 章
- `sitemap-0.xml` 已包含 `/site-map/`
