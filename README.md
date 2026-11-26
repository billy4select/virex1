# 流量優先更新 第 1 批

覆蓋 4 個檔：
- `public/threads/nobody-sees/index.html`（更新）
- `public/threads/selling/index.html`（更新）
- `src/content/blog/sales-forecast-4-methods.md`（新增）
- `public/_redirects`（1 條改指向）

## 依 GSC 曝光排序，這批處理誰

| 舊網址 | 曝光 / 點擊 | 原本落點 | 這批做了什麼 |
|---|---|---|---|
| Threads 沒流量 | 997 / 25 | `/threads/nobody-sees/`（內容偏薄，約 2,000 字） | 頁面擴充到 2,600 字，補「五個讓觸及真正停滯的原因」＋「先做這三件事」＋目錄與更新日 |
| Threads 導流（blog-post_819） | 486 / 10 | `/threads/selling/`（1,700 字） | 補「四種導到官網的方法」整節（檔案連結／留言／私訊／IG 限動） |
| 業績預估計算機 | 331 / 9，**平均排名 5.5** | 只導到 `/topics/business-model/profit-pricing/` 列表頁 | 新寫 `/blog/sales-forecast-4-methods/`，舊址改指這篇 |
| ROAS 計算機 | 611 / 12 | 上一批已改寫 | 已指向 `/blog/roas-formula-explained/` |

排名 5.5 那條（業績預估）是最容易拿到搜尋流量的，原本卻掉到列表頁，這次優先補成完整文章：四種方法、公式、數字範例、三種情境、四個常見錯誤。

## 還沒處理的高流量落點（下一批）

1. 超商取貨 278 曝光、ATM 134 曝光 → 目前都導到 `/resources/`，語意不符
2. 19 本行銷書單 210 曝光 → `/topics/book-guides/books-business-marketing/`（書單頁已存在，可補導讀）
3. Threads 頻率 159、Threads 商業帳號 130、Threads 演算法 46 → 對應章節頁都偏薄
4. IG 洞察 65 曝光 → 目前導到指標文章，可獨立成篇
5. 行銷團隊分工 54 曝光 → 目前導到主題列表頁

要不要先把 3（Threads 章節頁群）做完？那三頁加起來約 335 曝光，跟這次的 997 是同一條主題線，一起補完比較好切。

## 部署

```bash
npx astro build
npx pagefind --site dist
```
