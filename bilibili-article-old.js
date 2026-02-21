// ==UserScript==
// @name         Bilibili专栏自动回到旧版
// @namespace    http://tampermonkey.net/
// @version      1.2.0
// @description  Bilibili专栏自动重定向至旧版页面（www.bilibili.com/opus/* -> www.bilibili.com/read/cv*/?opus_fallback=1）
// @author       Xyc1596
// @license      MIT
// @match        *://www.bilibili.com/opus/*
// @icon         https://www.bilibili.com/favicon.ico
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    if (window.location.href.includes("bilibili.com/opus")) {
        console.log(window.__INITIAL_STATE__);
        const basic = window.__INITIAL_STATE__.detail.basic;
        if (basic.comment_type == 12 && basic.article_type < 4) {
            let new_href = `https://www.bilibili.com/read/cv${basic.rid_str}/?opus_fallback=1`;
            window.location.href = new_href;
        }
    }
})();