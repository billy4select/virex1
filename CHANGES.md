# 域名切換：blog.billy4select.com → www.billy4select.com

## 已改的東西

1. `astro.config.mjs`：`siteUrl` → `https://www.billy4select.com`
2. `src/config/site.ts`：`url` → `https://www.billy4select.com`
3. 全站寫死網域：**103 個檔、914 處**，全部換成 `www.billy4select.com`
   （含 64 個子站 HTML、文章 frontmatter 的 canonical／og、內文連結、`static-urls.json`、`public/robots.txt`）
4. `public/_redirects`
   - 新增 96 條「舊 Blogger 網址 → 新站對應頁」規則（同域 301，`Writing Skills.html` 已編成 `%20`）
   - 新增 `/sitemap.xml → /sitemap-index.xml` 301（舊 GSC 提交的網址不再 404）
   - 現況：193 條唯一規則，`node tools/check-redirects.mjs` 通過

## 建置驗證（本機 `npx astro build` 實測）

| 檢查 | 結果 |
|---|---|
| 首頁 canonical | `https://www.billy4select.com/` ✅ |
| 首頁 og:url | `https://www.billy4select.com/` ✅ |
| `/blog/` canonical | `https://www.billy4select.com/blog/` ✅ |
| `/ai-work-team/` canonical | `https://www.billy4select.com/ai-work-team/` ✅ |
| `sitemap-index.xml` 的 loc | `https://www.billy4select.com/sitemap-0.xml` ✅ |
| `sitemap-0.xml` | 170 條，全部 `www`，`blog.` 出現 **0** ✅ |
| `rss.xml` | `blog.` 出現 **0** ✅ |
| `robots.txt` | Sitemap 指向 `https://www.billy4select.com/sitemap-index.xml` ✅ |
| 全 repo 剩餘 `blog.billy4select.com` | **0** ✅ |

## 套用

直接解壓覆蓋到 repo 根目錄，然後：

```bash
node tools/check-redirects.mjs
npm i --legacy-peer-deps   # 若依賴有變才需要
npx astro build
npx wrangler deploy        # 或你原本的 CF 佈建流程
```

## 7 篇 keep 的風險（沒放進規則）

ATM、四大超商、買網域、免費圖庫、2026 行事曆、Blogger 平台、AdSense 這 7 篇
新站沒有對應內容，我沒有替它們建規則，因為它們現在在網路上已無宿主
（`billy4select.blogspot.com` 從我這邊連線逾時，無法確認是否還活著）。
切換後這 7 個舊網址會 404。兩個選擇：
- 把 Blogger 綁到 `old.billy4select.com`，再把這 7 條 301 指過去；
- 或把它們補寫進新站，之後改成 301 到新站頁。
