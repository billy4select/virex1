---
title: NotebookLM 讀不到掃描 PDF？OCR 轉換與檢查方式
description: >-
  把 PDF 丟進 NotebookLM 卻顯示讀不到或答非所問，多半是因為檔案是掃描圖片、沒有文字層。這篇整理快速判斷方式、免費 OCR 轉換做法與上傳前檢查重點。
publishedDate: 2026-05-27T00:00:00Z
updatedDate: 2026-11-27T00:00:00+08:00
author: 比利陳 Billy Chen
tags:
  - NotebookLM教學
  - NotebookLM疑難排解
category: NotebookLM 實戰
featured: false
boost: false
draft: false
schemaType: Article
faq:
  - q: 為什麼有些 PDF 丟進 NotebookLM 會讀不到內容？
    a: 最常見的原因是這份 PDF 本質上是掃描出來的圖片，裡面沒有可選取的文字層。你可以先在電腦裡試著用滑鼠反白內文，如果拉不起來，就需要先做 OCR 轉換。
  - q: 用 Google 雲端硬碟做中文 PDF 的 OCR 準嗎？
    a: 一般橫排印刷體的中文文件表現還不錯，而且免費又快。但如果是直排排版、字跡模糊或有很多複雜表格的檔案，轉完還是要抽查幾頁確認有沒有亂碼或漏字。
  - q: 超過一百頁的掃描 PDF 一定要整份做 OCR 嗎？
    a: 不需要。如果裡面只有某幾個章節會用到，先把需要的頁數拆出來單獨轉成文字檔或小份 PDF 再上傳，準確度更高也省時間。
testedAt: 2026-11 實測於 NotebookLM 網頁版與 Google 雲端硬碟繁體中文介面
testNotes: 以掃描圖片型中文 PDF 與混合型報表 PDF 實測反白選取、Google 文件自動 OCR 轉換與拆分頁數後匯入 NotebookLM 的讀取結果。
sources:
  - label: Google Drive 官方說明：將 PDF 和相片檔案轉換為文字（OCR）
    url: https://support.google.com/drive/answer/176692?hl=zh-Hant
  - label: NotebookLM 官方說明中心（支援來源格式與限制）
    url: https://support.google.com/notebooklm/?hl=zh-Hant
---

把 PDF 丟進 NotebookLM，結果它回你找不到資料，或者回答得牛頭不對馬嘴。

遇到這種狀況，很多人第一個反應是覺得 AI 變笨了。

其實多半跟模型無關，只是你上傳的 PDF 裡面根本沒有文字，只是一張一張掃描出來的圖片。

## 先確認你的 PDF 是哪一種

上傳前做一個最簡單的測試：在電腦打開這份 PDF，拿滑鼠去拖曳內文。

如果文字可以順利反白、複製貼上到記事本也正常，那這份檔案就有文字層，NotebookLM 讀得到。

如果整個頁面點下去像一張大圖、完全選不到字，那就是純掃描檔。還有一種比較麻煩的是「混合檔」——前面目錄選得到字，後面關鍵的報表或附錄卻全是截圖，這種最容易讓人誤以為已經讀進去了。

## 轉換之前，先找有沒有原始電子檔

在找工具轉檔之前，先花一分鐘確認手邊有沒有原始的 Word、Google 文件、網頁版或官方電子版 PDF。

原始電子檔的文字結構最乾淨，表格跟數字也不會歪掉。真的找不到，再來做 OCR（光學字元辨識）。

## 三種常用的免費 OCR 做法

現在要把掃描 PDF 轉出文字層，門檻已經很低，照檔案頁數跟機密程度挑最順手的工具就好：

| 免費 OCR 做法 | 最適合的檔案情境 | 繁中辨識表現 | 資料隱私風險 |
| :--- | :--- | :--- | :--- |
| **Google 雲端硬碟轉 Google 文件** | 10–50 頁一般橫排中文 PDF、報告與講義 | 印刷體表現穩定，但複雜表格易跑版 | 低（留在自己 Google 帳號內） |
| **Mac 預覽程式 / Windows 截圖工具** | 只需要複製少數 1–5 頁關鍵段落或截圖 | 單頁複製準確度高、幾乎免重排 | 最低（全程本機離線處理） |
| **專用免費 OCR 工具（如 OCRmyPDF）** | 需要保留原本 PDF 版面並補隱藏文字層 | 視引擎與原始掃描解析度而定 | 線上版有外洩風險；本機版安全 |

1. Google 雲端硬碟（最省事）

把 PDF 傳上 Google Drive，對檔案按右鍵選擇「選擇開啟工具 → Google 文件」。系統會自動把圖片裡的文字辨識出來，轉成一份新的 Google 文件，直接整理一下就能匯入 NotebookLM。

2. 系統內建或 PDF 閱讀器

Mac 預覽程式跟 Windows 的截圖工具都已經支援直接選取圖片上的文字；如果只有少數幾頁要處理，直接複製貼上到純文字檔最快。

3. 專用免費 OCR 網頁工具

像 OCRmyPDF 或常見的線上 PDF OCR 服務，可以把掃描檔直接補上一層隱藏文字再下載回來。但要注意，只要檔案涉及公司內部資料或客戶個資，就不要隨便丟到來路不明的免費網頁工具。

## 轉完之後一定要抽查三個地方

OCR 轉完不代表百分百準確，特別是中文文件。上傳進 NotebookLM 之前，建議抽看三件事。

先看專有名詞跟數字，中文掃描檔很常把「0」認成「O」、把「1」認成「l」，金額或百分比一旦看錯，後面問出來的分析全都會偏掉。

再看表格有沒有跑版，多欄表格轉完文字後常會全部擠成一長串，連哪個數字對應哪個欄位都分不清。

最後看頁首頁尾跟註腳有沒有混進正文裡。

## 只需要幾頁的時候，別轉整份

一份兩百頁的舊報告，你真正要研究的可能只有其中二十頁。

把需要的頁面先拆出來轉檔，辨識速度快很多，塞進 NotebookLM 之後也不會被其他無關頁面干擾回答。

更多上傳前的檔案整理細節，可以接著看[NotebookLM 上傳文件前怎麼準備](/blog/notebooklm-upload-preparation/)，或是回[NotebookLM 完整入門教學](/blog/notebooklm-complete-guide-2026/)看整個研究流程。

## 延伸閱讀

- [NotebookLM 實戰主題總覽](/topics/notebooklm/)
- [NotebookLM 常見問題怎麼排除？文件讀取、引用與回答品質](/blog/notebooklm-problems-solutions/)
- [NotebookLM 上傳文件前怎麼準備？格式、版本與來源檢查](/blog/notebooklm-upload-preparation/)
