---
title: NotebookLM 2026 年功能更新整理：簡報生成、Gemini 串接、對話式編輯全說明
description: 2026 年 NotebookLM 更新的速度比很多人跟得上的還快。這篇把從 2025 年底到 2026 年 4 月的所有重要更新整理成一份清單，讓你知道現在這個工具能做到哪些你以前做不到的事。
publishedDate: 2026-05-07T09:28:00Z
author: 比利陳 Billy Chen
image: /images/blog/notebooklm-2026-updates.webp
tags:
  - NotebookLM
  - AI工具
  - 功能更新
  - 2026
category: AI實戰
featured: false
boost: false
draft: false
schemaType: Article
faq:
  - q: NotebookLM 2026 年還是免費嗎？
    a: >-
      免費版仍然存在，而且功能依然相當完整。2026 年 Google 把定價分成四個層級：免費版、Plus、Pro（每月 $19.99 美元）、Ultra（每月 $249.99 美元）。大多數職場使用者用免費版就夠，Cinematic Video Overview 目前是 Ultra 限定功能。
  - q: NotebookLM 和 Gemini 打通之後，我還需要分開用嗎？
    a: >-
      需要。Gemini 整合讓兩個工具的筆記本資料可以雙向同步，但功能仍然獨立。NotebookLM 有 Audio Overview、Video Overview、簡報生成等輸出格式，Gemini 有即時網路搜尋。資料同步了，用途還是不一樣。
  - q: 對話記錄現在會自動保存了嗎？
    a: >-
      是的。2026 年更新後，對話記錄會自動保存，你可以關掉瀏覽器再回來繼續。但每個筆記本的對話記錄只有你自己看得到，就算是共享筆記本，其他人也看不到你的對話內容。
---

如果你上一次認真用 NotebookLM 是在 2025 年中，你現在打開它，會發現它幾乎是另一個工具了。

2025 年底到 2026 年 4 月，Google 密集更新了 NotebookLM，更新速度快到很多人跟不上。這篇把所有重要的更新依照時間整理出來，讓你知道現在這個工具能做到哪些以前做不到的事。

---

## 2025 年 10 月：百萬 Token 上下文視窗

這個更新讓 NotebookLM 一次能處理的資料量大幅提升。百萬 Token 的上下文視窗代表你可以上傳更長的文件、更多的來源，它還能跨所有文件保持連貫的理解。

同期加入的還有「自訂研究目標」功能，你可以在筆記本裡設定一個明確的研究方向，讓它的回答更聚焦在你真正需要的角度。

---

## 2025 年 11 月：Deep Research 深度研究

這是 2025 年最重要的一個更新，讓 NotebookLM 從「回答你上傳的文件」進化成「主動幫你做研究」。

Deep Research 模式下，NotebookLM 可以自己在網路上搜尋相關資料、匯整成有引用來源的報告，不再只限於你手動上傳的文件。

同一個月，支援的來源格式也擴大了，加入 Microsoft Word 和 Google Sheets。

---

## 2025 年 12 月：升級到 Gemini 3，新增資料表格輸出

底層模型從 Gemini 2 升級到 Gemini 3，理解能力和推理品質整體提升。

Studio 面板新增了 Data Tables（資料表格）輸出格式，你可以把文件裡的數據直接整理成結構化的表格，不需要手動整理。

---

## 2026 年 1 月：NotebookLM 筆記本可以加入 Gemini

這個更新打通了 NotebookLM 和 Gemini 之間最重要的一道牆。

你可以把 NotebookLM 的筆記本直接加入 Gemini 作為來源，讓 Gemini 在回答問題的時候，同時參考你筆記本裡的內容和即時的網路資訊。這讓「你的私有知識庫 + 外部最新資訊」的組合成為可能。

---

## 2026 年 2 月：簡報對話式編輯、PPTX 匯出

這個更新解決了很多人用 NotebookLM 做簡報最大的痛點。

**Slide Revisions（簡報對話式編輯）**：生成簡報之後，你可以點擊「Revise」按鈕，對指定的投影片輸入文字指令——「把第三頁的內容精簡成兩個重點」「調整語氣讓它更適合商務場合」。AI 只修改你指定的那頁，其他頁不動。

**PPTX 匯出**：之前只能匯出 PDF，現在可以匯出 PPTX 了。一個要注意的限制：匯出的 PPTX 裡，投影片內容仍然是圖片格式，沒辦法在 PowerPoint 裡直接選取文字修改。想要可編輯的文字版本，需要搭配 Gemini Canvas 轉換。

這個更新在 2 月 18 日正式推出。

---

## 2026 年 3 月：Cinematic Video Overview、十種資訊圖表風格

**Cinematic Video Overview（電影感影片摘要）**：這是目前 NotebookLM 最具視覺衝擊力的輸出格式。它用 Google 的 Veo 3 影片生成模型，把你的文件內容轉成有流暢動畫和豐富視覺的深度影片。目前這個功能限定 Ultra 訂閱用戶使用。

**十種資訊圖表風格**：製作 Infographic 的時候，現在可以手動選擇風格，包含 Sketch Note（手繪草圖）、Kawaii（可愛風）、Clay（3D 立體質感）、Bento Grid（模組化排版）、Anime（動漫風）、Professional、Scientific 等。預設是自動選擇最適合的風格，但現在你可以自己決定。

**改善 Flashcards 和 Quiz**：學習進度現在可以跨 session 保存，你可以把卡片標記為「已理解」或「還需要複習」，也可以洗牌和刪除特定題目。

---

## 2026 年 4 月：雙向 Gemini 同步、自動標籤分類、對話記錄保存

四月是 2026 年更新最密集的一個月，重要功能接連推出。

**雙向 Gemini 同步（Notebooks 功能）**：4 月 8 日正式推出，NotebookLM 和 Gemini 的筆記本現在雙向同步。你在任何一側新增的來源，會自動出現在另一側。這是 Gemini Notebooks 功能的核心，讓兩個工具真正串聯成一個工作流程。

**自動標籤分類來源**：4 月 24 日推出，當你的筆記本來源超過 5 份，NotebookLM 會自動幫你把文件分類標籤，讓你不需要手動整理就能快速找到需要的文件。

**對話記錄自動保存**：對話現在會自動保存，關掉瀏覽器再回來還能繼續。共享筆記本裡，每個人的對話只有自己看得到。

**批量共享筆記本**：可以一次邀請多個人，不再需要一個一個輸入 email。

**EPUB 格式支援**：現在可以直接上傳 EPUB 電子書格式，不需要先轉換成 PDF。

**從對話直接生成 Artifact**：在對話框裡，你可以直接要求 NotebookLM 把當下的對話轉成 Audio Overview、Video Overview、報告或其他格式，不需要切換到 Studio 面板。

---

## 哪些更新對職場人最有感

整理完這份清單，對一般職場使用者來說，影響最大的幾個更新是：

**對話記錄保存**——這解決了之前「每次開新對話都要重新建立脈絡」的問題，長期研究專案現在容易多了。

**Gemini 雙向同步**——研究資料不再需要手動搬，兩個工具可以在同一份資料上分工。

**簡報對話式編輯**——不需要重新生成整份簡報才能改一頁，節省了大量來回的時間。

**自動標籤分類**——筆記本文件超過 20 份之後，這個功能讓管理變得可行。

如果你上次用 NotebookLM 是在這些更新之前，值得重新打開來試一次。

---

**延伸閱讀：**
- [NotebookLM + Gemini 的協作心法：兩個 Google 工具怎麼串](https://blog.billy4select.com/blog/notebooklm-gemini-collaboration/)
- [NotebookLM 做簡報的優缺點實測：哪些場景真的好用，哪些場景會讓你踩坑](/blog/notebooklm-slide-deck-review/)
- [2026 NotebookLM 完整攻略：從入門到進階，所有你需要知道的事](https://blog.billy4select.com/blog/notebooklm-complete-guide-2026/)
