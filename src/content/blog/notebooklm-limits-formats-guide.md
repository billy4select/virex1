---
title: "NotebookLM 免費版上限、字數與檔案支援格式總整理（2026）"
description: >-
  NotebookLM（Gemini Notebook）免費版到底夠不夠用？這篇整理 2026 最新單檔 200MB、50 萬字、每本 50 個來源上限，以及完整支援與不支援格式速查表，幫你判斷什麼時候才需要升級 Google AI Pro。
publishedDate: 2026-11-27T01:00:00Z
updatedDate: 2026-11-27T01:00:00+08:00
author: 比利陳 Billy Chen
tags:
  - NotebookLM
  - NotebookLM教學
  - Gemini Notebook
  - AI工具
category: NotebookLM 實戰
featured: false
boost: false
draft: false
schemaType: Article
faq:
  - q: NotebookLM 免費版一本筆記本最多可以放幾個來源？
    a: 免費版每本筆記本最多可放入 50 個來源，每個來源上限為 50 萬字或 200MB。一般個人研究、專案整理或讀書筆記，免費版額度已經很充裕。
  - q: NotebookLM 免費版跟付費版（Google AI Pro / Plus）主要差在哪裡？
    a: 差別主要在「容量與每日配額」。付費方案可將每本筆記本來源數提高到最多 300 個，並放寬每日提問次數與語音摘要（Audio Overview）生成上限，另外提供回應風格自訂與較高權限的筆記本分享設定。
  - q: NotebookLM 可以直接上傳 Excel（.xlsx）或 Word（.docx）嗎？
    a: 原生支援以 PDF、純文字（.txt）、Markdown（.md）、Google 文件、Google 簡報、網頁連結、YouTube 影片與音訊檔（如 MP3、WAV）為主。Excel 或格式複雜的 Word 檔建議先轉成 PDF、Google 文件或純文字再上傳，辨識最穩。
  - q: 為什麼檔案明明沒超過 200MB，上傳 NotebookLM 卻還是失敗？
    a: 常見原因有三個：第一是文字量超過單檔 50 萬字上限；第二是掃描版 PDF 沒有內嵌文字層；第三是加密或有權限鎖定的 PDF／Google 雲端檔案。
testedAt: 2026 年 11 月於 NotebookLM（Gemini Notebook）網頁版繁體中文介面實測與對照官方規格
testNotes: 實際測試 PDF、Markdown、Google 文件、網頁連結與音訊來源匯入，並核對 Google 官方說明中心之單檔大小、字數與方案上限規格。
sources:
  - label: Gemini Notebook（NotebookLM）官方常見問題：單檔 50 萬字與 200MB 上限
    url: https://support.google.com/gemininotebook/answer/16269187?hl=en
  - label: Gemini Notebook 官方說明：支援的來源類型與匯入限制
    url: https://support.google.com/gemininotebook/answer/16215270?hl=en
  - label: Gemini Notebook 官方方案比較（免費版與 Google AI 方案）
    url: https://support.google.com/gemininotebook/answer/16213268?hl=en
---

很多人開始用 NotebookLM（Google 現亦稱 Gemini Notebook）之後，第一個卡住的問題不是不會下指令，而是**檔案傳不上去、不知道免費版夠不夠用，或搞不清楚哪些格式原生支援**。

先把結論講在前面：**一般職場研究與個人知識庫，免費版就非常夠用**；真正需要花錢升級的情況，多半是「單一專案來源超過 50 份」或「每天高頻率做語音摘要與大量提問」。

## 3 秒速查表：NotebookLM 免費版 vs 付費方案上限（2026）

| 規格項目 | 免費版 | 付費版（Google AI Pro / Workspace 方案） | 實務建議 |
| :--- | :--- | :--- | :--- |
| **每本筆記本來源上限** | 最多 **50 個**來源 | 最多 **300 個**來源 | 來源超過 40 份建議依主題拆本，回答更精準 |
| **單一來源字數上限** | **500,000 字** | **500,000 字** | 一本 300 頁專書通常不到 15 萬字，很少撞頂 |
| **單一檔案大小上限** | **200 MB** | **200 MB**（企業版更高） | 超大 PDF 建議先壓縮圖片或拆分章節 |
| **筆記本總數** | 最多 100 本 | 最多 500 本 | 定期歸檔舊專案就不太會滿 |
| **每日提問與語音摘要** | 基本每日額度 | 約 5 倍每日配額 | 只有重度每天生成語音摘要的人容易撞上限 |
| **進階自訂與分享** | 基本連結分享 | 支援回應風格設定、僅限對話分享 | 團隊共用內部手冊時較有感 |

> 提醒：Google 會持續微調各方案的每日額度，實際配額請以你的 Google 帳號介面顯示與文末官方說明頁為準。如果你想進一步評估整個 Google AI Pro 訂閱划不划算，可以直接看這篇 [Google AI Pro 值得買嗎（2026）？5 小時額度限制、家庭共享與免費版比較](/blog/google-ai-pro-vs-free-limits-family-sharing/)。

## NotebookLM 支援與不支援格式一覽表

上傳失敗有八成不是系統壞掉，而是丟了原生不支援或沒有文字層的格式。

| 格式類型 | 原生支援狀況 | 實測注意事項 |
| :--- | :--- | :--- |
| **PDF（含文字層）** | ✅ 原生支援 | 最穩定的格式；若是掃描圖檔 PDF，必須先做 OCR 轉文字 |
| **Google 文件 / Google 簡報** | ✅ 原生支援 | 雲端原文更新後，需回 NotebookLM 點選同步才會抓到新版 |
| **純文字（`.txt`）與 Markdown（`.md`）** | ✅ 原生支援 | 結構最乾淨、幾乎不會亂碼，長筆記首選 |
| **網頁連結（URL）** | ✅ 原生支援 | 需要登入、有付費牆或純前端動態載入的網頁常會抓不到 |
| **YouTube 影片連結** | ✅ 原生支援 | 僅讀取公開且有字幕（含自動字幕）的影片，不會分析畫面 |
| **音訊檔（MP3、WAV 等）** | ✅ 原生支援 | 適合會議錄音或 Podcast，上傳後會自動轉成文字索引 |
| **Excel（`.xlsx`）/ CSV** | ⚠️ 容易異常或亂碼 | 多欄數字表與編碼易錯位，建議先轉檔整理再上傳 |
| **加密 PDF / 需權限檔案** | ❌ 不支援 | 有密碼保護或未開讀取權限的檔案會直接報錯 |

如果你手上是 Excel、CSV 或掃描版 PDF，別硬塞進系統，可以接著看這兩篇排錯實作：
- [NotebookLM 讀 Excel 與 CSV 亂碼怎麼辦？3 種轉檔與整理實測](/blog/notebooklm-excel-csv-encoding-fix/)
- [NotebookLM PDF 讀不到？免費 OCR 轉換法與常見缺點排錯指南](/blog/notebooklm-problems-solutions/)

## 為什麼來源沒超過上限，回答品質卻變差？

官方寫單本可放 50 個來源、單檔可放 50 萬字，但**「放得進去」不等於「回答得好」**。實測下來有三個最常讓回答走鐘的地雷：

1. **新舊版本混在同一本**：把 2024 年舊報價單跟 2026 年新方案都丟進去，問它目前定價時它很容易兩邊混答。上傳前只留定案版，並用「日期＋主題」命名。
2. **來源太雜、跨太多主題**：與其建一本「公司所有資料」塞滿 50 份，不如依任務拆成「Q4 行銷專案」「競品研究」「客戶訪談」，每本控制 10–25 個高相關來源，引用準確度會明顯高一截。
3. **一次丟整份未整理的長表格**：NotebookLM 擅長理解語意與段落，不擅長做精密的跨欄統計加總。報表數據建議先整理成摘要文字或 Markdown 表格再放進去。

## 什麼時候真的需要升級付費版？

用下面三個條件快速判斷就好：
- **先留免費版**：每本來源都在 30 份以內、平常主要讀 PDF／網頁／逐字稿、語音摘要偶爾用。
- **考慮升級 Google AI Pro**：你已經有重度使用 Gemini 需求、單一研究專案常破 50 份來源，或想把筆記本分享給同事「只開放提問、不開放改動來源」。
- **考慮換用 Claude**：如果你的重點不是「查大量檔案來源」，而是「依固定品牌語氣反覆寫提案、改長文」，可以改看 [NotebookLM vs Claude 比較（2026）](/blog/notebooklm-vs-claude-internal-docs/)。

## 下一步：把規格搞懂後，開始建立你的知識庫

搞清楚格式與上限後，真正拉開差距的是**上傳前的整理習慣**與**提問方式**。建議直接照 [NotebookLM (Gemini Notebook) 教學 2026](/blog/notebooklm-complete-guide-2026/) 走一遍，或回到 [NotebookLM 實戰主題總覽](/topics/notebooklm/) 看完整實戰路線。
