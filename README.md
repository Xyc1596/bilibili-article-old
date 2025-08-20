# Bilibili专栏自动回到旧版
B站专栏自动重定向至旧版页面

```
www.bilibili.com/opus/* -> www.bilibili.com/read/cv*
```

能够区分专栏与一般动态图文，并且只对前者进行重定向操作。

## 安装
[GreasyFork](greasyfork.org/zh-CN/scripts/1506999-Bilibili专栏自动回到旧版)

## 源码
[GitHub](github.com/Xyc1596/bilibili-article-old)

## 原理
从网页源码的中获取原始专栏页面的cv号，并重定向至原页面，效果与点击“回到旧版”按钮相同。
* 原始专栏页面cv号：`window.__INITIAL_STATE__.detail.rid_str`
* 专栏与动态区分：`window.__INITIAL_STATE__.detail.basic.comment_type`（专栏为`12`，一般动态为`11`）
