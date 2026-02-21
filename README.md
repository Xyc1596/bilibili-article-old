# Bilibili专栏自动回到旧版

> [!NOTE]
>
> ~~**2025/12/25更新**：由于近期更新，专栏页面的回到旧版按钮已消失，旧版页面的网址现在会强制跳转至新版页面（301 Moved Permanently），故本项目已失效。~~
>
> **2026/01/01更新**：旧版页面已恢复（网址有变化），上述问题现已解决。
>
> **2025/02/21更新**：近期发布的专栏内容组件格式发生变化（`window.__INITIAL_STATE__.readInfo.type` 3 -> 4），无法在旧版页面中显示正文内容（手动将该变量改回3也不行），故暂时禁用上述新版专栏的跳转（`window.__INITIAL_STATE__.detail.basic.article_type < 4`），旧版不受影响。

B站专栏自动重定向至旧版页面

```
www.bilibili.com/opus/* -> www.bilibili.com/read/cv*/?opus_fallback=1
```

能够区分专栏与一般动态图文，并且只对前者进行重定向操作。

## 安装
[GreasyFork](https://greasyfork.org/zh-CN/scripts/546547-Bilibili专栏自动回到旧版)

## 源码
[GitHub](https://github.com/Xyc1596/bilibili-article-old)

## 原理
从网页源码的中获取原始专栏页面的cv号，并重定向至原页面，效果与点击“回到旧版”按钮相同。
* 原始专栏页面cv号：`window.__INITIAL_STATE__.detail.rid_str`
* 专栏与动态区分：`window.__INITIAL_STATE__.detail.basic.comment_type`（专栏为`12`，一般动态为`11`）
