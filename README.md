# 搜尋框黑線 + 四頁元素統一（含高度）

覆蓋 4 個檔，路徑照原樣：

1. `src/pages/blog/index.astro`
   - 移除 hero 的 `border-b border-border` → 搜尋框下方那條線消失（成因就在這裡，不是 Pagefind 的 input 邊框）
   - hero 下緣 `md:pb-10` → `md:pb-16`，H1 補 `leading-tight`，說明 `mt-4` → `mt-5`
2. `src/pages/series/index.astro`
   - 刪掉 H1 上方的 `Tutorial` eyebrow（它是 /series/ 的 H1 比其他頁低 28px 的原因）
3. `src/pages/topics/index.astro`
   - hero 下緣 `md:pb-14` → `md:pb-16`、容器 `max-w-6xl` → `max-w-7xl`、H1 補 `leading-tight`
4. `src/styles/global.css`
   - 追加「搜尋欄統一規格」區塊：input 高 44 → 40px、明確清掉 `border-bottom`（form 與 input 都清，含 `::after`）、focus 仍為 #ff6a00
   - Header 面板內的搜尋欄改成實線邊框（和頁面內的填色膠囊區分）

驗收數字（本地實測，1440 寬）：
| 頁 | H1 起點 | H1 規格 | hero 上下 padding |
|---|---|---|---|
| /blog/ | 205 | 48/60/800 | 56 / 64 |
| /series/ | 205 | 48/60/800 | 56 / 64 |
| /resources/ | 205 | 48/60/800 | 56 / 64 |
| /topics/ | 205 | 48/60/800 | 56 / 64 |

搜尋框：40px 高、圓角 9999、透明邊框（focus 橘色），form 無底線。

部署：
```bash
# 覆蓋後
npx astro build
npx pagefind --site dist   # 搜尋索引是獨立步驟，別漏
```
