---
title: NotebookLM 讀不到掃描版 PDF？OCR 轉換完整解法
description: 把 PDF 上傳進 NotebookLM，問它問題卻得到空洞的答案？問題很可能是你上傳的是掃描版圖片 PDF，不是文字版。這篇說清楚怎麼判斷、怎麼轉換、以及哪些工具免費可用。
publishedDate: 2026-05-27T00:00:00Z
author: 比利陳 Billy Chen
image: /images/blog/notebooklm-ocr-pdf-solution.webp
tags:
  - NotebookLM
  - OCR
  - PDF
  - 職場效率
category: AI實戰
featured: false
boost: false
draft: false
schemaType: HowTo
faq:
  - q: 怎麼判斷我的 PDF 是掃描版還是文字版？
    a: >-
      用滑鼠在 PDF 裡試著選取文字。如果能選取、能複製，是文字版，NotebookLM 可以正常讀取。如果選不起來，整份文件是圖片，需要先做 OCR 轉換才能上傳。
  - q: OCR 轉換之後，NotebookLM 一定讀得到嗎？
    a: >-
      不一定。OCR 的準確度取決於原始掃描品質。如果掃描解析度低、字體模糊、或版面複雜，OCR 辨識出來的文字可能有錯誤，NotebookLM 讀到的內容也會有對應的偏差。轉換後建議先檢查幾個段落，確認文字辨識是否準確。
  - q: 有沒有不需要 OCR 的替代方案？
    a: >-
      如果文件是你自己公司產生的，通常可以要求取得原始電子版（Word 或原生 PDF），不需要 OCR。如果是對方給的掃描版，而且文件量不大，也可以把關鍵段落直接複製貼上成文字檔上傳，省去整份文件轉換的麻煩。
steps:
  - name: 確認 PDF 是否為掃描版
    text: 打開 PDF，用滑鼠嘗試選取文字。能選取代表是文字版，可以直接上傳。選不起來代表是圖片，需要 OCR 轉換。
  - name: 選擇 OCR 工具轉換
    text: 免費方案用 Google Docs 匯入功能或 Google Drive 自動 OCR。需要更高準確度用 Adobe Acrobat 的辨識文字功能。轉換後另存為新的 PDF 或直接匯出成 Google 文件。
  - name: 確認轉換品質
    text: 轉換後打開文件，試著選取文字確認可以選取，再快速掃幾個段落檢查辨識是否準確，特別注意數字和專有名詞。
  - name: 上傳進 NotebookLM
    text: 確認文字可以選取之後，上傳轉換後的版本。如果是 Google 文件，可以直接用 Google Docs 連結匯入，不需要另外下載再上傳。
---

你把一份 PDF 上傳進 NotebookLM，問它這份文件在說什麼，它給你一個很空泛的答案。你問具體的問題，它說找不到相關資訊。

但你明明看得到文件裡有那些內容。

問題很可能不是 NotebookLM 不夠聰明，是它根本沒有讀到你的文件。

原因是：你上傳的是掃描版 PDF。

---

## 掃描版 PDF 和文字版 PDF 的差別

這兩種 PDF 看起來一樣，但本質完全不同。

**文字版 PDF**：裡面的文字是真實的文字資料，可以被選取、複製、搜尋。NotebookLM 能直接讀取這些文字。

**掃描版 PDF**：整份文件是一張張圖片，文字是圖片的一部分，不是獨立的文字資料。NotebookLM 看到的是圖片，讀不到裡面的文字內容。

最常遇到掃描版 PDF 的情況：舊版的合約、政府文件、書籍掃描、傳真轉 PDF、或對方用印表機掃進來傳給你的文件。

---

## 第一步：先確認你的 PDF 是哪一種

方法很簡單：打開 PDF，用滑鼠試著在文字上拖拉選取。

**能選取、能反白**：文字版，可以直接上傳 NotebookLM，不需要任何處理。

**選不起來、點了沒反應**：掃描版圖片，需要先做 OCR 轉換。

---

## OCR 是什麼

OCR（Optical Character Recognition，光學字元辨識）是一種把圖片裡的文字辨識成可以編輯的文字資料的技術。

把掃描版 PDF 做 OCR，就是讓軟體「看」圖片裡的文字、把它們轉成真正的文字資料，之後 NotebookLM 才讀得到。

---

## 三個 OCR 轉換方法

### 方法一：Google Docs 匯入（免費，最方便）

這是最快的免費方法，不需要安裝任何軟體。

操作步驟：

1. 打開 Google Drive
2. 把掃描版 PDF 拖入 Google Drive 上傳
3. 上傳完成後，對著那個檔案按右鍵
4. 選「使用 Google 文件開啟」
5. Google 會自動做 OCR，用 Google 文件開啟一份有文字的版本
6. 文字版本出現之後，直接複製連結匯入 NotebookLM，或者下載成 PDF 再上傳

這個方法對清晰的掃描文件效果很好，完全免費，而且不需要額外安裝任何東西。

限制：如果掃描品質很差、字體很小或版面複雜，辨識準確度會下降。繁體中文的辨識準確度比英文稍低，需要自己檢查。

---

### 方法二：Adobe Acrobat（準確度最高）

如果你有 Adobe Acrobat 的訂閱，這是準確度最高的選項。

操作步驟：

1. 用 Adobe Acrobat 開啟掃描版 PDF
2. 點選右側工具列的「掃描和 OCR」
3. 選「辨識文字」
4. 選擇語言（選繁體中文）
5. 執行辨識
6. 另存為新的 PDF，這份新 PDF 的文字就可以選取了

Adobe 的 OCR 引擎對複雜版面和多語言混排的處理比 Google Docs 更穩定。如果你的文件有大量表格、數字、或中英文混排，Adobe 的結果通常更準確。

限制：需要 Adobe Acrobat 訂閱，不是免費的。

---

### 方法三：直接貼上關鍵段落（最快但只適合少量內容）

如果你的文件很長，但你只需要 NotebookLM 讀其中幾個段落，這個方法最省事。

把你需要的段落用手機拍照，然後用 Google 翻譯的拍照翻譯功能（或 iPhone 的「即時文字」功能）把圖片裡的文字抄出來，貼成一個文字檔，上傳進 NotebookLM。

這個方法不需要任何軟體，但只適合你真正需要的段落量不多的情況。整本書這樣做不現實，一兩頁的重要段落很快。

---

## 轉換後一定要做的一件事

OCR 轉換完，不要直接上傳，先快速檢查幾個地方：

**試著選取文字**：確認轉換成功，文字真的可以被選取。

**掃幾個段落**：特別注意數字、專有名詞、人名地名。這些地方 OCR 最容易出錯。

**看一下標題和小標**：有些掃描版文件的標題字體比較特殊，OCR 辨識容易跑掉。

發現有明顯錯誤的地方，在文件裡手動修正再上傳，這樣 NotebookLM 讀到的內容才是正確的。

---

## 如果轉換之後 NotebookLM 還是讀不好

文字版 PDF 上傳進去，但答案品質還是不好——問題可能出在文件的版面結構，不是文字有沒有被辨識到。

複雜的多欄版面、密集的表格、大量的頁首頁尾和浮水印，都可能讓 NotebookLM 的理解品質下降。這種情況可以試著把主要內容複製貼上成純文字檔（.txt）再上傳，去掉版面干擾，只留下文字內容。

---

**延伸閱讀：**
- [上傳文件前要做的三件事，讓 NotebookLM 讀得更準](https://blog.billy4select.com/blog/notebooklm-upload-preparation/)
- [NotebookLM 難用？解決 PDF 亂碼、幻覺與格式混亂的 7 個實戰方案](https://blog.billy4select.com/blog/notebooklm-problems-solutions/)
- [NotebookLM 入門完整教學：第一次用，從建立筆記本到問出有用的答案](https://blog.billy4select.com/blog/notebooklm-beginner-guide/)
