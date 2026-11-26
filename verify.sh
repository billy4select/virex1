#!/usr/bin/env bash
# 部署後驗收：確認 canonical / sitemap / 舊網址全部落在 www
set -u
fail=0
chk(){ printf '%-58s %s\n' "$1" "$2"; }

echo "== 1. canonical 與 og:url"
body=$(curl -sSL --max-time 25 https://www.billy4select.com/)
echo "$body" | grep -o '<link rel="canonical"[^>]*>' | head -1
echo "$body" | grep -o '<meta property="og:url"[^>]*>' | head -1
if echo "$body" | grep -q 'canonical" href="https://www.billy4select.com/'; then chk "www canonical" "OK"; else chk "www canonical" "FAIL"; fail=1; fi

echo "== 2. sitemap 開頭"
idx=$(curl -sSL --max-time 25 https://www.billy4select.com/sitemap-index.xml)
echo "$idx" | head -c 200; echo
if echo "$idx" | grep -q 'www.billy4select.com/sitemap-0.xml'; then chk "sitemap-index 指 www" "OK"; else chk "sitemap-index 指 www" "FAIL"; fail=1; fi

echo "== 3. sitemap-0 內是否還有 blog."
sm=$(curl -sSL --max-time 30 https://www.billy4select.com/sitemap-0.xml)
n_www=$(printf '%s' "$sm" | grep -o 'https://www.billy4select.com' | wc -l)
n_old=$(printf '%s' "$sm" | grep -o 'blog.billy4select.com' | wc -l)
chk "sitemap locs = $n_www / 舊網域 = $n_old" "$([ "$n_old" -eq 0 ] && echo OK || echo FAIL)"
[ "$n_old" -eq 0 ] || fail=1

echo "== 4. 轉址三步檢查"
code(){ curl -s -o /dev/null -w '%{http_code} %{redirect_url}' --max-time 20 "$1"; }
chk "blog 首頁" "$(code https://blog.billy4select.com/)"
chk "apex" "$(code https://billy4select.com/)"
chk "舊文章 ATM" "$(code https://www.billy4select.com/2023/07/ATM.html)"
chk "sitemap.xml" "$(code https://www.billy4select.com/sitemap.xml)"

exit $fail
