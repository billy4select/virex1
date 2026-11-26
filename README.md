# 修「載入閃一下」

## 根因
深/淺色初始化被寫成兩套 key：

| 位置 | 讀的 key | 行為 |
|---|---|---|
| `<head>` 內嵌腳本（BaseLayout） | `theme` | 有 dark 就先加 `.dark`（避免白閃） |
| `ThemeToggle.astro`（module，deferred） | `theme-v2` | 找不到就當 `light`，載入時呼叫 `setTheme('light')` |

結果：head 套的顏色在 module 執行後被覆寫一次 → 每次載入都會「先白 → 再變深」。
`theme-v2` 有值時更明顯（head 不認得，module 才補上 dark）。

## 改法
1. `BaseLayout.astro`、`ErrorLayout.astro`：讀 `theme-v2`，沒有才退回舊 key `theme`。
2. `ThemeToggle.astro`：讀同一個 key；載入時只同步太陽／月亮圖示，
   不再呼叫 `setTheme()`（不重設 class、不覆寫 localStorage）。

## 已驗證
以 `theme-v2 = dark` 載入首頁，實測 `documentElement.className`：
- 載入初期：`dark`
- 1.2 秒後：`dark`

（修前是 `light` → `dark`，就是那一下閃。）

## 提醒
`theme` 是舊 key，若你之前在舊站用過深色，會被當成 fallback 讀到，第一次載入就會直接套深色，不會再閃。
