---
title: "Gemini AI Pro 教學（2026）：Deep Research、技能（原 Gems）與 Workspace 整合完整指南"
description: >-
  訂閱了 Google AI Pro（Gemini AI Pro）卻只拿來當一般聊天機器人？這篇完整拆解 2026 最新實戰用法：Deep Research 深度研究、技能（原 Gems）自訂工作流、Google Workspace 側邊欄整合，以及搭配 NotebookLM 的高效率分工。
publishedDate: 2026-11-27T03:00:00Z
updatedDate: 2026-11-27T03:00:00+08:00
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
  - q: Google AI Pro（Gemini AI Pro）跟一般免費版 Gemini 操作上最大的差別在哪裡？
    a: 免費版適合日常問答與輕量改寫；升級 Google AI Pro 後，核心價值在於較高階的模型配額、更充裕的 Deep Research 深度研究額度、直接在 Gmail／Google 文件／試算表側邊欄呼叫 Gemini，以及 Gemini Notebook（原 NotebookLM）單本最多 300 個來源的高階額度。
  - q: Gemini 的 Gems 去哪裡了？跟現在的「技能（Skills）」有什麼不同？
    a: Google 自 2026 年 11 月起逐步將個人帳號的 Gems 轉換為「技能（Skills）」。兩者都是把重複工作存成固定指令，但新版的技能可以直接在目前對話裡用 @ 呼叫並疊加多項技能，不需要反覆切換分頁，也支援上傳檔案或 skill.md 作為固定參考背景。
  - q: Deep Research 產出的研究報告可以直接貼進正式簡報或提案嗎？
    a: 不建議直接整段照貼。Deep Research 強在幫你幾分鐘內掃完數十個網頁並整理出帶來源連結的結構化初稿，但引用連結只代表來源存在，關鍵數字與法規條文交付前仍要點開原文核對。
  - q: 我還沒決定要不要付費，怎麼評估 Google AI Pro 划不划算？
    a: 如果你平常重度使用 Google 雲端硬碟、Gmail、Google 文件，又常做研究或需要大空間，CP 值很高；若只是偶爾聊天，先留免費版就好。詳細費用、5 小時額度消耗與家庭共享規則可看我們的專門評測文。
testedAt: 2026 年 11 月於 Gemini 網頁版與 Google Workspace（Google AI Pro 方案）繁體中文介面實測
testNotes: 實測 Deep Research 深度研究、技能（原 Gems）建立與呼叫、Gmail／Google 文件側邊欄協作，以及與 Gemini Notebook（原 NotebookLM）的跨工具交接流程，功能與方案權益對照 Google 官方說明中心。
sources:
  - label: Google One 官方說明：使用 Google AI Pro 福利與權益
    url: https://support.google.com/googleone/answer/14534406?hl=zh-Hant
  - label: Gemini 官方說明：Gemini 系列應用程式使用限制與 Google AI 方案升級
    url: https://support.google.com/gemini/answer/16275805?hl=zh-Hant
  - label: Google Gemini 官方生產力總覽（技能、任務與 Workspace 整合）
    url: https://gemini.google/tw/overview/productivity/?hl=zh-TW
---

很多人訂閱了 **Google AI Pro（常稱 Gemini AI Pro）** 之後，每天打開它還是只做一件事——在對話框裡問一般問題。如果只拿來聊天，其實免費版就夠了，付費方案真正的價值根本還沒打開。

先把結論講在前面：**Gemini AI Pro 最強的地方不在「單次對話有多聰明」，而在「整套 Google 生態系打通」**——用 Deep Research 搜資料、用技能（原 Gems）鎖定固定工作流、在 Gmail 與 Google 文件側邊欄直接改稿，再把整理好的來源交給高階額度的 NotebookLM（Gemini Notebook）做長期研究。

> 如果你還在猶豫要不要花錢訂閱，可以先看角色定位不同的評測文：[Google AI Pro 值得買嗎（2026）？5 小時額度限制、家庭共享與免費版比較](/blog/google-ai-pro-vs-free-limits-family-sharing/)；這篇專注在**「已經開通之後，怎麼把四大核心功能用進日常工作」**。

## 3 秒速查表：Gemini AI Pro 四大核心功能怎麼分工？

| 核心功能 | 解決什麼職場痛點 | 最適合的實際任務 |
| :--- | :--- | :--- |
| **1. Deep Research（深度研究）** | 查一個陌生產業要開 30 個分頁、整理一下午 | 競品調研、市場趨勢初稿、法規與技術背景整理（可一鍵匯出 Google 文件） |
| **2. 技能 Skills（原 Gems）** | 每次開新對話都要重貼品牌語氣、報告格式與 SOP | 週報產生器、品牌語氣校對、客戶信件草稿（可於對話中直接 `@` 疊加呼叫） |
| **3. Workspace 側邊欄整合** | 在 AI 網頁跟 Gmail／文件之間一直複製貼上 | Gmail 摘要長信串與回信、Google 文件草擬大綱、Drive 跨檔找資料 |
| **4. Gemini Notebook 高階額度** | 免費版單本 50 個來源不夠放大型專案資料 | 單本擴充至最多 300 個來源，搭配語音摘要與原文引用做內部研究 |

## 功能一：Deep Research 怎麼問，才不會拿到一篇空泛維基百科？

打開 Gemini 選擇 **Deep Research** 後，系統會先給你一份「研究計畫」再開始大量瀏覽網頁。**拉開報告品質差距的關鍵，就在「按下開始研究前先改計畫」**：

1. **先限定市場、時間與排除條件**：不要只打「幫我研究台灣電商趨勢」，改成「研究 2025–2026 台灣中小型品牌電商的廣告獲客成本變化，優先引用台灣媒體、電商平台官方報告與數據，排除純理論教科書定義」。
2. **要求輸出特定結構**：例如「最後請整理成一張比較表：問題、常見原因、可執行對策，並標註來源出處」。
3. **跑完直接點「匯出至 Google 文件」**：不要留在對話框裡看，匯進 Google 文件後，把要用的段落留著、沒依據的刪掉，就能直接當提案或簡報的底稿。

> 提醒：Deep Research 會消耗較多高階模型用量，而且引用連結只保證來源存在，正式對外簡報的數字務必點開原文抽查一次（詳見 [AI 產出怎麼檢查？去 AI 味、避免 AI 幻覺的 4 道交付前檢查關卡](/blog/ai-output-quality-check/)）。

## 功能二：用「技能（原 Gems）」把重複工作固定下來

以前在 Gemini 裡想建立專屬 AI 助理要開不同的 **Gem** 分頁；自 2026 年底起，Google 已將個人帳號的 Gem 逐步升級為 **「技能（Skills）」**，最大好處是**不用切分頁，在同一條對話裡用 `@技能名稱` 就能隨時呼叫，還能一次疊加多個技能**。

### 最推薦先建的 3 個職場技能
1. **`@我的寫作語氣`**：上傳 2–3 篇你平常寫得最順手的文章或信件，設定「使用台灣繁體中文、結論先行、不堆砌空泛形容詞」。
2. **`@週報整理師`**：固定格式為「本週完成事項（量化結果）→ 卡關與風險 → 下週優先順序 → 需要主管協助的事」，每週五把零散筆記貼上去就能產出。
3. **`@會議摘要轉行動`**：強制要求拆出「已定案決議」「待辦項目（負責人＋期限）」「未解決爭議」，避免整理出一堆流水帳。

建立路徑很簡單：進到 Gemini「設定 → 技能」新增指令並掛載參考檔案（也支援直接上傳 `skill.md`），之後任何重複性工作都不用再重貼長 Prompt。

## 功能三：Google Workspace 側邊欄，消滅「複製貼上」的摩擦

如果你平常工作本來就在 Gmail、Google 雲端硬碟和 Google 文件裡轉，Google AI Pro 的側邊欄整合是每天最有感的功能：

- **Gmail 側邊欄**：遇到來回 15 封的跨部門長信串，直接請它「用 3 點整理目前卡在哪、對方需要我回覆哪兩題」，再草擬禮貌但明確的回信。
- **Google 文件側邊欄**：開新空白文件時，直接呼叫它讀取雲端硬碟裡某份舊企劃或 Deep Research 報告，幫你起草第一版大綱。
- **Google 試算表**：先請它幫你整理公式寫法或欄位分類邏輯，再把乾淨的摘要表帶進簡報。

## 功能四：Gemini AI Pro＋NotebookLM 的實戰接力流程

Google AI Pro 訂閱同時包含了較高階額度的 **NotebookLM（Gemini Notebook）**，兩個工具千萬別混著用，照這條接力鏈跑最順：

1. **外部廣度收集 → 交給 Gemini Deep Research**：先把產業公開資料、法規、競品資訊搜齊，匯出成 Google 文件。
2. **內部深度消化 → 丟進 NotebookLM**：把這份 Google 文件跟你的內部財報、客戶訪談逐字稿一起放進 NotebookLM，專心查證細節與交叉比對（做法見 [NotebookLM (Gemini Notebook) 教學 2026](/blog/notebooklm-complete-guide-2026/)）。
3. **正式對外產出 → 回到 Gemini 技能或 Docs 側邊欄**：把核對完的重點帶出來，套用 `@我的寫作語氣` 產出正式簡報文字、提案或客戶信。

## 延伸閱讀

- [Google AI Pro 值得買嗎（2026）？5 小時額度限制、家庭共享與免費版比較](/blog/google-ai-pro-vs-free-limits-family-sharing/)
- [NotebookLM PDF 讀不到？免費 OCR 轉換法與常見缺點排錯指南（2026）](/blog/notebooklm-problems-solutions/)
- [會議與專案資料怎麼沉澱成知識庫？四欄模板與 AI 整理法](/blog/ai-knowledge-capture-meetings-projects/)
- 回到 [AI 工作流程與工具實戰總覽](/topics/ai-workflow/) 查看更多可重複使用的 AI 工作法。
