# 改寫匯入 第 1 批：廣告／成效診斷 5 篇

覆蓋：
- `src/content/blog/` 新增 5 個 md
- `public/_redirects` 更新 5 條（原本導到 `/topics/marketing/marketing-diagnosis/`，現在導到對應文章）

## 為什麼先做這 5 篇，而不是 Threads 那 21 篇

比對後發現 Threads 的舊文，內容角度已經被 `/threads/` 的章節頁吃掉了（`formula`、`frequency`、`nobody-sees`、`selling` 等，連標題都在講同一件事）。逐篇改寫只會跟自己競爭，那批維持 301 就好。

真正沒有家的是「廣告成效診斷」這條線：舊站 2026 年寫了十幾篇，全部被 301 到 `/topics/marketing/marketing-diagnosis/` 一個列表頁，讀者點進去找不到那篇。這 5 篇是其中主題最不重疊、也最常被搜尋的。

## 這批的規格

| 舊文 | 新文 | 分類 |
|---|---|---|
| 2026 行銷指標趨勢 | `/blog/marketing-metrics-2026-what-to-track/` | 商業與行銷 |
| ROAS 計算公式拆解 | `/blog/roas-formula-explained/` | 商業與行銷 |
| CTR 低於 1% 素材 vs 受眾 | `/blog/ctr-low-creative-or-audience/` | 商業與行銷 |
| 廣告疲勞怎麼解 | `/blog/ad-fatigue-frequency-creative-rotation/` | 商業與行銷 |
| CAC 飆高 5 個檢查點 | `/blog/cac-rising-5-checks/` | 商業與行銷 |

- 不是原文搬運：全部重寫成新站語感（短句、先結論、每篇 3 題 FAQ）
- 保留原始發布日（2026-04 到 05），不會在文章列表最前面插隊
- 互相內鏈，也連回站內既有文章（行銷診斷、受眾、定價）
- 沒有搬舊站圖片（Blogger CDN 圖會拖慢 LCP），需要的話我再逐篇補

## 驗收

- `npx astro build` 通過，5 篇都有獨立頁面
- `_redirects` 檢查通過（193 條、無重複來源）
- 文章頁 H1 起點 205px、麵包屑顯示「商業與行銷」，與其他頁一致

## 下一批（等你確認）

1. 廣告預算分配（新客 vs 舊客）
2. 廣告成效報告怎麼看
3. CTR A/B 測試設計
4. 網站速度優化 SEO 檢查清單
5. SEO 文章優化：標題、H2、內部連結
6. 內部連結 SEO：主題集群架構

這 6 篇裡 3、4、5、6 之間有重疊，我會把它們寫成「兩篇 pillar + 兩篇操作文」，避免互相蠶食。你只要回「繼續」就好。
