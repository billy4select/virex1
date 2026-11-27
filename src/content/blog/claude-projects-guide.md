---
title: "Claude Projects 教學（2026）：把常用文件與指令變成專屬 AI 工作區"
description: >-
  每次開新對話都要重貼品牌介紹、產品規格跟寫作規則？這篇完整拆解 Claude Projects 的設定邏輯、Project Instructions 寫法、知識庫檔案整理，以及跟 NotebookLM 該怎麼分工，讓 Claude 變成真正懂你業務的工作區。
publishedDate: 2026-11-27T03:00:00Z
updatedDate: 2026-11-27T03:00:00+08:00
author: 比利陳 Billy Chen
tags:
  - Claude
  - Claude Projects
  - AI工作流程
  - 提示詞
category: AI 工作流程與工具
featured: false
boost: false
draft: false
schemaType: Article
faq:
  - q: Claude Projects 免費版可以用嗎？
    a: Claude Projects（含自訂指令與專案知識庫）主要是付費方案（Pro、Max、Team、Enterprise）的核心功能。如果你每天都要反覆處理同一批品牌文件、提案或固定格式報告，光省下重貼背景資料的時間就很有感。
  - q: Claude Projects 跟一般開新對話直接貼檔案有什麼差別？
    a: 最大差別在於「固定背景＋快取省額度」。放進 Project 的檔案與指令，在該專案底下的每一次新對話都會自動生效，不用重複貼；而且官方會對專案內的固定知識做快取處理，重複使用時消耗的額度比每次重貼更省。
  - q: Claude Projects 跟 NotebookLM 該怎麼分工？
    a: 簡單記：NotebookLM 適合「先讀懂大量原始資料、查原文出處」，Claude Projects 適合「帶著固定規格與語氣規範，穩定產出提案、文章、簡報或程式」。研究靠 NotebookLM，輸出靠 Claude Projects。
  - q: Project Knowledge 裡可以塞很多檔案嗎？會不會讓回答變慢或變笨？
    a: 當專案知識超過單次脈絡容量時，Claude Projects 會啟用檢索增強生成（RAG）動態抓相關段落。但實務上仍建議「只放定案版、拆清檔名、避免塞入過期草稿」，精準度會比把整個資料夾倒進去高很多。
testedAt: 2026 年 11 月於 Claude 網頁版（Pro 方案）實測 Projects 與知識庫工作流
testNotes: 以品牌規範、行銷提案範本與產品規格檔實測建立多個 Claude Projects，測試 Project Instructions 結構、跨對話一致性與 RAG 檢索表現。
sources:
  - label: Claude Help Center：What are projects?（Projects 官方功能介紹）
    url: https://support.claude.com/en/articles/9517075-what-are-projects
  - label: Claude Help Center：How do usage and length limits work?（RAG 與額度機制）
    url: https://support.claude.com/en/articles/11647753-how-do-usage-and-length-limits-work
  - label: Claude Help Center：Usage limit best practices（專案快取與額度最佳實踐）
    url: https://support.claude.com/en/articles/9797557-usage-limit-best-practices
---

用 AI 工作一陣子後，最煩的事通常不是 AI 不夠聰明，而是**每次開新對話，你都要重新自我介紹一遍**：我們公司賣什麼、受眾是誰、語氣不能太浮誇、報告固定要分哪四段。

**Claude Projects** 就是為了解決這件事。它讓你針對「一個固定任務」或「一個客戶」，把**背景檔案（Project Knowledge）**跟**固定規則（Project Instructions）**鎖在同一個工作區裡；之後你在這個專案開的任何新對話，Claude 一開口就已經讀完資料、照你的規矩辦事。

## 3 秒速查表：Claude Projects vs 一般對話 vs NotebookLM

| 比較項目 | 一般 Claude 對話 | Claude Projects | NotebookLM |
| :--- | :--- | :--- | :--- |
| **最核心定位** | 一次性單點任務 | **固定規則＋固定背景的產出工作區** | **大量原始資料的查證與研究員** |
| **背景資料管理** | 每次重貼，容易忘 | 上傳一次，同專案所有對話共用 | 每本最多 50–300 個來源，附原文引用 |
| **固定指令（語氣／格式）** | 每次都要貼 Prompt | 寫在 Project Instructions 永久生效 | 偏向依資料回答，較不適合重度改寫語氣 |
| **額度消耗效率** | 每次重貼都重算 | 專案固定內容會快取，重複問更省額度 | 依每日提問配額計算 |
| **最適合做什麼** | 臨時翻譯、快速發想 | 寫提案、品牌文案、週報、固定格式企劃 | 讀財報、整理 20 份訪談逐字稿、查出處 |

想更深入看兩個工具的實戰搭配，可以對照 [NotebookLM vs Claude 比較（2026）：讀內部文件、Projects 與寫報告怎麼分工？](/blog/notebooklm-vs-claude-internal-docs/)。

## 建立一個好用 Claude Project 的 3 個步驟

不要一開始就建一個「我的萬能工作區」，結果什麼都塞進去。**一個 Project 只對應一種重複性高的交付任務**（例如：「A 客戶月報」「部落格長文編輯」「商業提案產出」）。

### 第一步：準備 3–5 份「定案版」核心檔案放進 Project Knowledge
這不是雲端硬碟，資料越多不代表越好。最有效的組合通常是：
1. **背景說明檔（1 頁）**：公司／產品簡介、目標客群是誰、核心賣點與禁止觸碰的紅線。
2. **2–3 份你最滿意的「歷史範例」**：例如寫得最順手的舊提案、被主管稱讚過的週報。給 AI 看「什麼叫及格」，比寫一千字形容詞更有效。
3. **詞彙與格式對照表**：台灣繁體中文慣用語、產品專有名詞、固定輸出段落結構。

檔名建議統一用清楚的英文或中文前綴（例如 `01_品牌定位與受眾.md`、`02_歷史合格提案範例.md`），並以 **Markdown（`.md`）或純文字**優先，Claude 讀起來最乾淨。

### 第二步：寫好 Project Instructions（四段式萬用模板）
Project Instructions 是整個工作區的靈魂，寫太長反而容易互相打架，建議控制在 300–600 字內，分成四段：

```markdown
# 角色與任務
你是協助我撰寫 B2B 行銷提案的資深企劃夥伴，熟悉台灣中小企業決策情境。

# 必讀參考原則
每次產出前，先對照專案知識庫裡的「01_品牌定位與受眾」與「02_合格提案範例」，
維持相同的商業邏輯與精準度，不要憑空編造產品沒有的功能或數據。

# 語氣與用語規範
- 一律使用台灣繁體中文自然口吻，避免翻譯腔與誇張行銷形容詞。
- 結論先行，優先用條列與對照表整理重點。
- 遇到檔案裡沒寫到的數字或條件，先標註「待確認」並向我提問，不要自行補完。

# 預設輸出格式
1. 一句話核心結論
2. 問題診斷與依據
3. 具體執行方案（含優先順序）
4. 風險與下一步確認事項
```

### 第三步：每個子任務開「新對話」，別把一條對話拉到天荒地老
很多人建了 Project 後，還是把整個月的事情全塞在同一個聊天室裡，結果對話越來越長、越後面越容易失焦，額度也燒特別快。

正確用法是：**把「不變的背景」放在 Project，把「每次的新任務」各自開一個新對話**。例如這週寫 Q4 提案開一條對話，下週改簡報開另一條對話；因為背景檔已經在專案裡快取，開新對話不只更省額度，回答也會乾淨很多。

## 實戰最容易踩的 3 個地雷

1. **把過期草稿跟定案版混在同一個專案**：例如同時放了 `報價單_v1` 跟 `報價單_final`，Claude 有機會抓到舊數字。規則很簡單：**更新檔案時，先刪舊檔再傳新檔**。
2. **指令寫滿抽象形容詞**：寫「請寫得專業、有深度、吸引人」幾乎沒用；改成「每段不超過 4 行、每個論點都要附一個具體情境例子、不要用『總而言之』開頭」，效果立竿見影。
3. **忘記把專案產出沉澱回知識庫**：每次做完一個好提案或複盤，挑出最精華的 1 頁結論存回專案知識庫，你的工作區才會越用越準（做法可參考 [會議與專案資料怎麼沉澱成知識庫？](/blog/ai-knowledge-capture-meetings-projects/)）。

## 延伸閱讀

- [Claude vs ChatGPT 怎麼選（2026）？寫提案與長文實測比較](/blog/claude-vs-chatgpt-proposal/)
- [Claude 簡報演練：提案前用「反對意見模擬」壓力測試客戶簡報](/blog/claude-objection-simulation/)
- 回到 [AI 工作流程與工具實戰總覽](/topics/ai-workflow/) 看更多可重複使用的 AI 工作法。
