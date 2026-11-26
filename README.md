# 關於我：色帶改成左右滿版

只覆蓋 1 個檔：`src/pages/about.astro`

## 原因

關於我整頁被包在一個外層容器裡：

```astro
<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
  <section class="page-band"> ... </section>
```

色帶是這個 1280px 容器的子元素，所以底色只鋪到 1280（還被 px-4 再縮），看起來就比別頁窄一截。

## 修法

把 `<section class="page-band">` 拉到外層，容器改成放在色帶「裡面」；色帶結束後再開一個容器包住底下的長文 section。

- 色帶：`left 0 / width 1440`（1440 視窗實測滿版）
- H1 起點仍 205px、色帶高度仍 304px，跟其他七頁一致
- 內文左右留白不變（仍是 max-w-7xl + px）
