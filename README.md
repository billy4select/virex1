# 修「載入先黑再白」

## 原因（已對上你描述的現象）
- `<head>` 初始化腳本讀的是舊 key `theme`，你瀏覽器裡剛好是 `dark` → 第一帧就是黑底。
- `ThemeToggle.astro`（module）讀 `theme-v2`，找不到就當 `light`，載入時呼叫 `setTheme('light')` → 再變白。

所以順序是「黑 → 白」，不是轉址造成。

## 改法
- `BaseLayout.astro`、`ErrorLayout.astro`：只認 `theme-v2`，忽略舊 key `theme`。
- `ThemeToggle.astro`：同一個 key；載入時只同步圖示，不重設 class、不覆寫 localStorage。

## 實測（本機 build + 瀏覽器）
| 情境 | 載入初期 | 0.9 秒後 |
|---|---|---|
| localStorage 只有舊 key `theme=dark` | 無 dark class（白） | 白 |
| `theme-v2=dark`（使用者選過深色） | dark | dark |

兩種都不再翻轉；你原本看到的是白，修完仍是白，只是不會先黑一下。
