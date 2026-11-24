#!/usr/bin/env python3
"""把網站內的 canonical / sitemap / OG 網址換成新的正式網址。

用法：
    python3 tools/set-base-url.py https://billy4select.github.io/ai-work-team/
    python3 tools/set-base-url.py https://blog.billy4select.com/ai-work-team/
"""
import sys
from pathlib import Path

OLD = "https://blog.billy4select.com/ai-work-team"

if len(sys.argv) != 2:
    raise SystemExit(__doc__)

new = sys.argv[1].rstrip("/")
root = Path(__file__).resolve().parent.parent / 'public' / 'ai-work-team'

changed = 0
for path in sorted(root.rglob("*")):
    if path.suffix not in {".html", ".xml"}:
        continue
    text = path.read_text(encoding="utf-8")
    if OLD in text:
        path.write_text(text.replace(OLD, new), encoding="utf-8")
        changed += 1

print(f"已更新 {changed} 個檔案 → {new}/")
