# 頁首色帶（page-band）＋搜尋框黑線修正

這一包取代上一包 `unify-kit.zip`，直接覆蓋這 9 個檔（路徑照原樣）：

| 檔案 | 改了什麼 |
|---|---|
| `src/styles/global.css` | 新增 `.page-band` token（surface 底 + 手機 40/48、桌機 56/64 padding）；追加搜尋欄統一規格（40px、清掉 border-bottom） |
| `src/pages/blog/index.astro` | hero 改 `page-band`（移除原本那條 `border-b` → 搜尋框下的黑線消失） |
| `src/pages/series/index.astro` | hero 改 `page-band`；刪掉 `Tutorial` eyebrow（原本讓 H1 低 28px） |
| `src/pages/topics/index.astro` | hero 改 `page-band`；容器 6xl → 7xl |
| `src/pages/resources.astro` | hero 也收斂成 `page-band`（規格來源就是它） |
| `src/pages/about.astro` | hero 改 `page-band`（原 `py-16 md:py-20`） |
| `src/pages/testimonials.astro` | `PageHeader` 換成 `page-band` 段落（移除未用 import） |
| `src/pages/privacy.astro` | 拆成「色帶頁首 + 內文區」，H1 加大到 lg:text-5xl |
| `src/pages/disclaimer.astro` | 同上 |

## 驗收（本地 1440 寬實測，8 頁全一致）

- H1 起點全部 205px、規格 48px / 行高 60px / 800
- 色帶底色 `oklch(0.98 0.01 50)`、padding 桌機 56 / 64
- 搜尋框 40px 高、form 與 input 皆無底線

涵蓋頁面：`/blog/`、`/series/`、`/resources/`、`/topics/`、`/about/`、`/testimonials/`、`/privacy/`、`/disclaimer/`

## 部署

```bash
npx astro build
npx pagefind --site dist   # 搜尋索引要單獨跑，不然搜尋框不會 mount
```
