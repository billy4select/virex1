---
title: 專案資料散落各處？NotebookLM 跨來源整合實戰手冊
description: >-
  合約在 PDF、會議記錄在 Google Docs、想法在備忘錄... 每次查資料都要翻箱倒櫃？本文教你如何用 NotebookLM
  整合破碎資訊，實現一站式對話查詢。
publishedDate: 2026-04-10T10:15:22Z
author: 比利陳 Billy Chen
image: /images/blog/notebooklm-integration.webp
tags:
  - AI應用
  - NotebookLM
  - 生產力
  - 精選
category: AI實戰
featured: true
boost: true
draft: false
---
每個進行中的專案都有一個共同的問題：資料在十個地方。

合約 PDF 在信箱、競品分析在書籤、會議記錄在 Google Docs、想法在備忘錄，甚至關鍵對話還在 LINE 裡面。每次需要資訊，你都要在這些地方翻找，並在腦袋裡辛苦拼接。

**NotebookLM 的核心價值就是解決這個問題：** 把散落各處的資料整合進同一個空間，讓你用「對話」的方式跨資料來源查詢。

---

## 第一步：確認資料格式

在開始整合前，先確認 NotebookLM 支援的來源（目前支援上限為每個 Notebook 50 個來源）：

* **支援格式：** Google Docs、Google Slides、PDF 檔案、網頁連結、直接貼上的文字。
* **目前限制：** 不支援 Excel 試算表、音檔（需轉文字）、純圖片 PDF（需先做 OCR）、需登入的網頁內容。

---

## 整合流程：四種來源的處理建議

### 1\. PDF 檔案（合約、報告、提案）

直接上傳即可。若是「掃描版」PDF（圖片格式），建議先上傳至 Google Drive 並用 Google Docs 開啟以進行自動 OCR 轉換，再匯入 NotebookLM。

### 2\. 網頁內容（競品分析、產業報告）

直接貼上連結。若遇到付費牆或需登入的頁面，請使用瀏覽器的「列印」功能存成 PDF 後再上傳。

### 3\. 會議記錄與筆記

* **Google Docs：** 最推薦，內容更新會自動同步。
* **Notion / Obsidian / 備忘錄：** 需輸出成 PDF 或手動複製貼上。
* **語音想法：** 建議先用語音轉文字工具生成逐字稿後貼入。

→ [別再浪費生命寫會議記錄！AI 整理術：從逐字稿到高價值決策摘要](https://blog.billy4select.com/blog/ai-meeting-notes-workflow-summary/)

### 4\. 電子郵件與通訊軟體

這是目前最難整合的部分。建議不要全放，只擷取「影響專案決策」的關鍵對話（如客戶確認需求、報價條件）貼入。

---

## 整合之後：如何有效查詢？

資料放進去後，重點在於「怎麼問」。以下是四種發揮跨來源價值的問法：

* **跨來源比對：** 「客戶在合約裡的說法，跟會議記錄裡確認的內容一致嗎？」
* **時間軸整理：** 「請根據所有資料，整理出這個專案從開始到現在的重要決策點與里程碑。」
* **決策依據追溯：** 「目前這個做法是在什麼情況下確定的？請找出當初的決策背景。」
* **缺口識別：** 「根據目前資料，專案中還有哪些問題尚未有明確答案？」

→ [NotebookLM 的提問方式決定答案品質：五種問法比較](https://blog.billy4select.com/blog/notebooklm-question-types/)

---

## 建立一個好習慣：以專案為單位

不要把所有專案的資料都塞進同一個 Notebook。**為每個專案建立獨立的 Notebook**，這樣查詢結果會更精準，資料邊界也更清楚。專案結束後，可以將 Notebook 裡的精華問答整理成結案文件存檔。

→ [上傳文件前要做的三件事，讓 NotebookLM 讀得更準](https://blog.billy4select.com/blog/notebooklm-upload-preparation/)

---

## 結語：整合不是目的，查詢才是

很多人花了時間上傳資料，卻還是習慣用老方法查資訊。讓整合發揮價值的關鍵是養成新習慣：**每次需要查專案資訊，先在 NotebookLM 裡問。** 你不再需要記住資料在哪裡，只需要記住你想問什麼問題。