# 色帶頁首 v2：高度一致、間距拉開、搜尋框改白

覆蓋這 9 個檔（路徑照原樣），取代上一包 `page-band-kit.zip`。

## 這輪修的四件事

1. **色帶高度全部鎖在 304px**（`.page-band` 桌機 `min-height: 19rem`）
   8 頁實測都是 304：`/blog/`、`/series/`、`/resources/`、`/topics/`、`/about/`、`/testimonials/`、`/privacy/`、`/disclaimer/`
   免費資源之所以看起來比別人長，是因為它比別人多一行 meta；現在用最小高度把短的全部補齊，視覺上就一樣長。

2. **色帶與下方內容的距離統一**
   - `/blog/` 篩選區 `pt-6 → pt-12 md:pt-14`（原本只有 24px，貼太近）
   - `/topics/` 八格 `md:pt-14`（原本 0px，直接黏在色帶下緣，這就是「跑版」的感覺）
   - `/resources/` 廣告版位 `md:pt-12`
   - 其他頁原本就是 56～96px，未動

3. **文章頁搜尋框改白底**
   `.blog-search-ui` 的 input：`background-color: var(--color-background)` + `1px solid var(--color-border)`，圓角 9999 不變。
   原本是 `bg-surface`（米色）放在同色色帶上，等於隱形。

4. **關於我：色帶只留一句摘要**
   色帶內容改成「認識 Billy 與這個知識庫的建立初衷。了解我如何整理複雜資訊，為你篩選出真正實用的解決方案。」
   原本的長篇自我介紹與經歷清單移到色帶下方的 `py-12 md:py-16` 區塊。

## 部署

```bash
npx astro build
npx pagefind --site dist
```

## 已知可再調

- 色帶用最小高度對齊，內容較短的頁（`/blog/`、`/topics/`、`/about/`）下緣會留白比較多。若想改成「內容垂直居中」，把 `.page-band` 加 `display:flex; flex-direction:column; justify-content:center` 即可，但 H1 的起點就不再固定 205px。
