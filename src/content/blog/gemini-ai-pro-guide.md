---
title: "Gemini AI Pro 教學（2026）：Deep Research、技能（原 Gems）與 Workspace 整合完整指南"
description: >-
  Google AI Pro（Gemini AI Pro）到底包含哪些功能？訂閱後怎麼用才回本？這篇從方案全貌、介面開通檢查講起，手把手拆解 Deep Research 提問模板、技能（原 Gems）建立與疊加、Canvas 協作、Gmail／Google 文件側邊欄應用，以及搭配 NotebookLM 的完整職場工作流。
publishedDate: 2026-11-27T03:00:00Z
updatedDate: 2026-11-28T09:00:00+08:00
author: 比利陳 Billy Chen
tags:
  - Gemini
  - Google AI Pro
  - AI工作流程
  - AI工具
category: AI 工作流程與工具
featured: false
boost: false
draft: false
schemaType: Article
faq:
  - q: Google AI Pro（Gemini AI Pro）到底包含哪些服務？不只是聊天機器人嗎？
    a: 不是。Google AI Pro 是整合在 Google One 底下的 AI 訂閱方案，除了在 Gemini App 使用較高階的模型、Deep Research 與 Canvas 協作外，還包含 Gmail／Google 文件／試算表／簡報的側邊欄 AI 整合、高階額度的 Gemini Notebook（原 NotebookLM，單本上限 300 個來源），以及大容量 Google One 雲端空間與家庭共享。
  - q: 原本的 Gemini Gems 去哪裡了？跟現在的「技能（Skills）」有什麼不同？
    a: Google 自 2026 年 11 月起逐步將個人帳號的 Gems 升級轉換為「技能（Skills）」。兩者都是把重複工作存成專屬 AI 助手，但新版技能不需要反覆切換分頁，可以直接在任何對話裡用 @ 呼叫並同時疊加多個技能，還支援上傳檔案或 skill.md 作為固定參考背景。
  - q: Deep Research 產出的長報告可以直接貼進公司提案或簡報嗎？
    a: 不建議直接整段照貼。Deep Research 強在幾分鐘內幫你掃完數十個網站並產出帶來源連結的結構化初稿，但引用連結只代表網頁存在，關鍵數字、法規條文或市場佔比交付前仍要點開原文抽查核對。
  - q: Google AI Pro 的 5 小時額度限制很容易用完嗎？怎麼省額度？
    a: 一般文字問答不太容易撞頂，但連續跑多次 Deep Research、高階推理模型或影片／圖片生成時，額度會消耗得比較快。實務上建議把「簡單潤稿與翻譯」留在一般模式，把高階額度留給 Deep Research、複雜長文分析與多檔案整理。
  - q: 我還沒決定要不要付費，怎麼評估 Google AI Pro 划不划算？
    a: 如果你平常重度使用 Google 雲端硬碟、Gmail、Google 文件與 NotebookLM，又常需要做深度研究或大雲端空間，CP 值很高；若只是偶爾問問題，先用免費版即可。詳細費用與家庭共享拆解可看我們的專門評測文。
testedAt: 2026 年 11 月於 Gemini 網頁版與 Google Workspace（Google AI Pro 方案）繁體中文介面實測
testNotes: 實測 Google AI Pro 帳號之模型切換、Deep Research 深度研究、技能（原 Gems）建立與 @ 疊加呼叫、Canvas 互動編輯、Gmail／Google 文件側邊欄協作，以及與 Gemini Notebook（原 NotebookLM）的跨工具交接流程。
sources:
  - label: Google One 官方說明：使用 Google AI Pro 福利與權益
    url: https://support.google.com/googleone/answer/14534406?hl=zh-Hant
  - label: Gemini 官方說明：Gemini 系列應用程式使用限制與 Google AI 方案升級
    url: https://support.google.com/gemini/answer/16275805?hl=zh-Hant
  - label: Google Gemini 官方生產力總覽（技能、任務與 Workspace 整合）
    url: https://gemini.google/tw/overview/productivity/?hl=zh-TW
---

很多人訂閱了 **Google AI Pro（常稱 Gemini AI Pro，前身為 Gemini Advanced）** 之後，每天打開它還是只做一件事——在對話框裡問幾個零散問題。如果只拿來當聊天機器人，免費版其實就夠用了，你每個月付的錢有八成都浪費在沒打開的功能上。

先把這篇的核心結論講清楚：**Gemini AI Pro 真正的價值不在「單次對話有多聰明」，而在把整個 Google 工作生態打通**——用 **Deep Research** 搜齊外部情報、用 **技能（原 Gems）** 把重複工作固定成 SOP、用 **Canvas** 即時改稿與做原型、在 **Gmail 與 Google 文件側邊欄** 消滅複製貼上，最後再交給高階額度的 **NotebookLM（Gemini Notebook）** 做長期深度研究。

> 如果你還在評估要不要花錢訂閱，可以先看角色定位不同的評測文：[Google AI Pro 值得買嗎（2026）？5 小時額度限制、家庭共享與免費版比較](/blog/google-ai-pro-vs-free-limits-family-sharing/)；這篇專注在**「開通之後，怎麼把所有核心功能一步步用進日常工作」**。

## 先看全貌：Gemini AI Pro 到底包含哪些功能？（2026 速查表）

Google AI Pro 並不是單一 App，而是一整套綁在 Google 帳號裡的工作組合包：

| 核心模組 | 它實際在做什麼 | 免費版 vs Google AI Pro 體感差距 | 最適合的職場場景 |
| :--- | :--- | :--- | :--- |
| **高階 Gemini 模型** | 複雜推理、長脈絡分析、程式碼與多模態理解 | 較高階模型優先額度與更長脈絡視窗 | 拆解長報告、跨文件比對、複雜決策分析 |
| **Deep Research** | 自動拆解研究計畫、掃描數十個網頁產出帶出處的長報告 | 免費版額度極有限；Pro 版配額大幅放寬 | 產業調研、競品盤點、進入陌生領域前的背景研究 |
| **技能 Skills（原 Gems）** | 把固定角色、語氣規範與參考檔案存成可重複呼叫的助手 | 可搭配雲端檔案與 `@技能` 在對話中疊加使用 | 週報模板、品牌語氣校對、客戶信件草稿 |
| **Canvas 協作區** | 右側獨立編輯畫布，可選取局部段落請 AI 改寫或預覽網頁原型 | 搭配高階模型改稿更穩，可直接匯出 Google 文件 | 寫提案、改長文、快速做一頁式互動試算工具 |
| **Workspace 側邊欄** | 直接內嵌在 Gmail、Google 文件、試算表、簡報與雲端硬碟右側 | **付費方案核心專屬權益**，不用來回切換分頁 | 摘要 20 封長信串、抓 Drive 舊檔起草新企劃 |
| **Gemini Notebook（原 NotebookLM）** | 鎖定你上傳來源的研究工作台，附原文引用與語音摘要 | 單本來源從 **50 個提高到 300 個**，每日配額大幅提升 | 大型專案知識庫、讀整套財報與數十份訪談逐字稿 |

## 開通後先做這 2 個設定（不然一半功能你會找不到）

很多剛訂閱的人說「為什麼我的 Gemini 不能讀 Google 雲端硬碟跟 Gmail？」，十之八九是權限沒開：

1. **開啟「連結應用程式（Google Workspace 擴充功能）」**：進到 Gemini 網頁版左下角「設定 → 應用程式（Extensions）」，確認 **Google Workspace（Gmail、雲端硬碟、文件）** 與 **Google 日曆／YouTube** 的開關已打開。打開後，你才能在對話框直接輸入 `@Google 雲端硬碟` 抓自己的檔案。
2. **確認帳號介面語言與隱私活動設定**：如果處理敏感工作資料，先到「Gemini 應用程式活動」了解資料留存與審查設定，並遵守公司敏感資料去識別化原則（詳見 [財務資料能給 ChatGPT／AI 嗎？公司機密與資安的 5 條底線](/blog/ai-finance-data-security-5-bottom-lines/)）。

## 實戰一：Deep Research 深度研究——改寫「研究計畫」才是關鍵

多數人用 Deep Research 只打一句「幫我研究台灣咖啡市場」，結果拿到一篇像百科全書一樣空泛的長文。**拉開報告含金量差距的動作，發生在系統跳出「研究計畫」後、你按下開始之前**。

### 3 步把 Deep Research 變成你的專屬研究員
1. **在第一句指令就鎖死「地區、時間、對象、排除項」**：
   ```markdown
   我想做一份給台灣中小企業品牌主管看的內部評估報告。
   研究主題：2025–2026 年台灣品牌電商在 Meta 與 Google 廣告的獲客成本變化與因應做法。
   研究條件：
   1. 優先引用台灣電商平台、廣告代理商白皮書與公開產業調查數據，標註年份。
   2. 排除純基礎名詞解釋（不要教我什麼是 CPC、ROAS）。
   3. 最後請整理成一張比較表：主要挑戰、背後原因、中小企業可執行的低成本解法，並保留來源連結。
   ```
2. **檢查並修改它列出的「研究計畫」**：按下開始前，點選「編輯計畫」，把你不想看的無關章節刪掉，補上你最想追的 1–2 個子問題（例如「請特別查台灣市場在短影音素材與再行銷預算的建議比例」）。
3. **跑完立刻點「匯出至 Google 文件」**：不要在狹窄的聊天框裡硬啃五千字報告。一鍵匯出成 Google 文件後，把要用的論點標黃色、點開關鍵數據的來源網址確認不是過期文章，就能直接變成你的提案底稿。

## 實戰二：用「技能 Skills（原 Gems）」把每週重複工作變成一鍵呼叫

以前在 Gemini 裡想建立固定指令的專屬助手，要開一個個獨立的 **Gem** 分頁；自 2026 年底起，Google 已將個人帳號的 Gem 陸續升級轉換為 **「技能（Skills）」**（既有 Gem 會自動轉換不遺失）。

新版「技能」比舊版 Gem 好用兩個地方：
- **不用切分頁**：在一般對話裡直接輸入 `@技能名稱` 就能喚醒。
- **可以一次疊加多個技能**：例如在同一條對話裡同時呼叫 `@會議摘要` 跟 `@我的寫作語氣`，先整理決議再自動套用你的語氣改寫成對外信件。

### 最值得先建的 3 個職場技能（附指令骨架）
進到 Gemini 左側或設定裡的「技能管理」，建議先建這三個每天都會用到的技能，並各自掛載 1–2 份你的歷史合格範本檔案：

1. **`@我的寫作語氣`**：掛載 2 篇你寫過最滿意的文章或報告，指令寫清楚：「一律使用台灣繁體中文自然口吻、結論先行、每段不超過 4 行、禁止使用『隨著時代演變』『全方位賦能』等空泛形容詞。」
2. **`@週報整理師`**：固定輸出四段結構——「本週核心進度（只寫結果不寫流水帳）→ 目前卡關與風險 → 下週前 3 優先順序 → 需要主管或跨部門協助事項」。每週五下午把零散備忘貼上去，5 分鐘交稿。
3. **`@反對意見模擬器`**：固定角色為「重視毛利、時程與風險的資深主管」，每次寫完提案先丟進去，請它挑出 3 個最可能被電的邏輯漏洞，提早補齊數據。

## 實戰三：Canvas 協作畫布＋Workspace 側邊欄，把「改稿」效率拉滿

### 1. 用 Canvas 改長文，別再整篇重生成
寫長文章、企劃書或一頁式網頁時，在輸入框下方打開 **Canvas** 模式，畫面右側會出現獨立文件編輯區。最大的好處是：**你可以用滑鼠只反白第三段，叫它「這段太抽象，幫我改成台灣電商的具體例子」**，其他你滿意的段落完全不會被亂改；滿意後同樣一鍵匯出 Google 文件。

### 2. Workspace 側邊欄 3 個最高頻省時動作
- **Gmail 側邊欄**：打開一串來回 15 封的專案信件，點右上角 Gemini 圖示問：「用 3 點整理目前卡在哪、對方正在等我回覆哪兩件事」，再請它草擬一封簡短明確的回覆。
- **Google 文件側邊欄**：開一份空白企劃書，直接下指令「參考我雲端硬碟裡的 `@Q3結案報告` 跟 `@2026新品規格`，幫我起草一份 Q4 上市行銷大綱」。
- **Google 試算表側邊欄**：不用硬背複雜函數，直接請它幫你寫出 `QUERY`、`XLOOKUP` 公式，或把雜亂的文字問卷先歸類成 5 個痛點標籤。

## 實戰四：Gemini AI Pro ＋ NotebookLM 的「三段接力」工作流

既然訂閱 Google AI Pro 就同時拿到高階額度的 **NotebookLM（Gemini Notebook）**，最聰明的用法不是二選一，而是讓它們照各自最強的環節接力：

1. **第一棒（外部廣度搜集）→ Gemini Deep Research**：把公開產業趨勢、競品資訊與最新法規掃過一輪，一鍵匯出成 Google 文件。
2. **第二棒（內部深度查證）→ NotebookLM**：把那份 Google 文件，連同公司內部財報、客戶訪談逐字稿與歷史簡報一起放進同一本筆記本（Pro 方案上限達 300 個來源），專心做交叉比對、查原文引用與提煉核心洞察（操作見 [NotebookLM (Gemini Notebook) 教學 2026](/blog/notebooklm-complete-guide-2026/)）。
3. **第三棒（正式對外產出）→ Gemini Canvas ＋ `@我的寫作語氣`**：把核對完的事實底稿帶回 Gemini，用 Canvas 順架構、調語氣，最後照 [AI 產出怎麼檢查？去 AI 味、避免 AI 幻覺的 4 道交付前檢查關卡](/blog/ai-output-quality-check/) 把關後交付。

## 省額度與避坑的 3 個實戰提醒

1. **別把高階額度浪費在小雜事上**：單純改錯字、短句翻譯或問基本語法，用一般快速模式就好；把高階模型與 Deep Research 配額留給真正複雜的研究與長文分析。
2. **一次開一個乾淨新對話**：同一個聊天室聊超過幾十輪，脈絡越塞越滿，不只反應變慢、容易忘記前面條件，單次提問消耗的額度也會越高。換新任務就直接開新對話。
3. **Workspace 檔案命名要乾淨**：你在側邊欄叫 Gemini 去找雲端硬碟裡的報告時，如果資料夾裡同時有 `企劃_v1`、`企劃_final`、`企劃_真的最終版`，它非常容易抓錯版本。檔名加上日期與「定案」標記，能省下大量烏龍。

## 延伸閱讀

- [Google AI Pro 值得買嗎（2026）？5 小時額度限制、家庭共享與免費版比較](/blog/google-ai-pro-vs-free-limits-family-sharing/)
- [NotebookLM PDF 讀不到？免費 OCR 轉換法與常見缺點排錯指南（2026）](/blog/notebooklm-problems-solutions/)
- [Claude vs ChatGPT 怎麼選（2026）？寫提案與長文實測比較](/blog/claude-vs-chatgpt-proposal/)
- 回到 [AI 工作流程與工具實戰總覽](/topics/ai-workflow/) 查看更多可重複使用的 AI 工作法。
