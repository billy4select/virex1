# /resources/ AdSense（單元 5433378708）

## 已設定
- `ADSENSE_CLIENT = ca-pub-3229697751722054`
- `ADSENSE_SLOT = 5433378708`（billy4select_resources_2026，回應式）
- loader 只在這頁：`<Fragment slot="head">`
- 版位標示：`廣告`＋「以下內容由 Google AdSense 提供，非本站編輯內容。」
- 未填充自動收合：`.adsbygoogle[data-ad-status="unfilled"]` 隱藏，連標籤卡一起收起來（`:has`）
- `public/ads.txt` 已含 `google.com, pub-3229697751722054, DIRECT, f08c47fec0942fa0`

## 佈建後驗證
```bash
curl -s https://www.billy4select.com/resources/ | grep -o 'data-ad-slot="[0-9]*"'
curl -s https://www.billy4select.com/ads.txt
curl -s https://www.billy4select.com/blog/ | grep -c adsbygoogle   # 應為 0
```

## 注意
- 新網域若尚未通過 AdSense 審查，`ins` 會是 unfilled，區塊會自動隱藏（頁面不會有空洞）。
- 通過後若仍空白，AdSense → 網站 → 確認 `www.billy4select.com` 已驗證、ads.txt 狀態為「已授權」。
