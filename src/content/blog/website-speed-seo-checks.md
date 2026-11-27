---
title: 網站速度怎麼檢查？用 Core Web Vitals 抓出真正影響體驗的卡點
description: >-
  網頁開太慢會讓手機讀者直接關掉，連帶拖累 SEO 表現。這篇用白話拆解 Core Web Vitals 三個核心指標，教你用免費工具快速抓出肥圖跟拖慢載入的元兇。
publishedDate: 2026-05-04T01:00:00Z
updatedDate: 2026-11-27T00:00:00+08:00
author: 比利陳 Billy Chen
tags:
  - SEO
  - 網站速度
  - Core Web Vitals
  - 技術優化
category: 內容與 SEO
featured: false
boost: false
draft: false
schemaType: Article
faq:
  - q: 網站速度要跑出 PageSpeed 100 分，SEO 才會有排名嗎？
    a: 不需要強求 100 分。網站速度主要是基本門檻：只要手機打開不要卡頓、不要讓讀者等三秒還沒看到字、版面不要亂跳，把時間拿去寫好內容比從 88 分調到 99 分划算得多。
  - q: Core Web Vitals 的三個指標（LCP、INP、CLS）分別在看什麼？
    a: LCP 看主要畫面多久出來（2.5 秒內佳）；INP 看點按鈕或選單反不反應得夠快（200 毫秒內佳）；CLS 看網頁載入時文字跟按鈕會不會突然亂跳（0.1 以下佳）。
  - q: 最快改善網站載入速度的方法是什麼？
    a: 九成的慢網站都是因為「圖片沒壓縮」跟「裝了太多第三方追蹤碼或外掛」。把圖片轉成 WebP、壓在 200KB 以內，並清掉沒在用的腳本，通常馬上就會順很多。
testedAt: 2026 年依 Google Core Web Vitals 官方門檻實測網站速度檢測流程
testNotes: 對照 LCP、INP、CLS 官方評分標準與 Search Console 體驗報表，整理實務優先修復順序。
sources:
  - label: Google 搜尋中心：了解 Core Web Vitals 與搜尋結果
    url: https://developers.google.com/search/docs/appearance/core-web-vitals?hl=zh-tw
  - label: web.dev：Web Vitals 核心指標官方標準
    url: https://web.dev/articles/vitals
  - label: Google PageSpeed Insights 官方檢測工具
    url: https://pagespeed.web.dev/
---

你在手機上點進一篇文章，結果畫面轉了五秒還是一片白，你會繼續等，還是直接按上一頁？

多數人根本不會等。

網站速度對 SEO 的影響其實很直觀：開太慢會直接拉高你在 GA4 看到的跳出率，讀者連文章第一行都還沒讀到就離開了，內容寫得再好也沒機會發揮。

## 先看懂三個核心指標（Core Web Vitals）

進 Google Search Console 的「網頁體驗」或免費的 PageSpeed Insights，會看到三個英文縮寫，其實對應的就是三個很生活化的體驗：

| 指標 | 白話意思 | 建議及格標準 | 最常見的元兇 |
| :--- | :--- | :--- | :--- |
| LCP | 主畫面（首圖或標題）多久出現 | 2.5 秒以內 | 沒壓縮的超大 PNG/JPG 首圖、太慢的主機 |
| INP | 點按鈕、開選單會不會卡頓延遲 | 200 毫秒以內 | 塞了太多第三方廣告碼、複雜動畫腳本 |
| CLS | 讀到一半版面會不會突然往下跳 | 0.1 以下 | 圖片沒寫死長寬、字體或彈窗突然插進來 |

## 最省力的三個提速檢查

不用一開始就去動複雜的伺服器程式碼，先把這三件投報率最高的事檢查完，多數網站馬上就能進綠燈區：

1. **把所有圖片壓縮並轉成 WebP**  
   很多人直接把手機拍的 4MB 原圖傳上部落格，一張圖就拖垮整個頁面。文章配圖壓在 150KB 到 200KB 以內、改用 WebP 格式，畫質幾乎看不出差別，載入速度快非常多。
2. **清掉沒在用的外掛跟追蹤碼**  
   每多裝一個聊天浮窗、熱點錄影工具或用不到的社群分享外掛，瀏覽器就要多下載一堆檔案。只留下你真的會看的追蹤碼（像 GA4）就好。
3. **幫圖片固定寬高，別讓讀者誤觸**  
   文章裡的圖如果有預留高度，圖片載入出來時底下的文字就不會突然往下彈，手機閱讀體驗會穩很多。

## 做到「綠燈順暢」就該停手

前面聊過做 SEO 最容易白忙的一件事，就是把時間全拿去把網站調得漂漂亮亮、追求跑分 100 分，卻忘了寫有人搜的文章。

速度檢查只要確認手機版打開順暢、Search Console 裡沒有大片紅燈警告，就夠了。把剩下的時間留給內容跟研究用戶反應，回報高得多。

想確認發文前還要對哪些細節，可以參考[SEO 文章發布前檢查清單](/seo/on-page/)，以及[免費 SEO 工具怎麼選](/blog/free-seo-tools/)。

## 延伸閱讀

- [SEO 與內容策略主題總覽](/topics/marketing/seo-from-zero/)
- [SEO 文章有寫卻沒流量？先檢查這五個環節](/blog/seo-writing-why-no-traffic/)
- [SEO 自學怎麼開始？別先急著調版型，照這四步把流量跑起來](/blog/seo-self-study-guide/)
