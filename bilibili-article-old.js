// ==UserScript==
// @name         Bilibili专栏自动回到旧版
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @description  Bilibili专栏自动重定向至旧版页面（www.bilibili.com/opus/* -> www.bilibili.com/read/cv*）
// @author       Xyc1596
// @match        *://www.bilibili.com/opus/*
// @icon         https://www.bilibili.com/favicon.ico
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    if (window.location.href.includes("bilibili.com/opus")) {
        console.log(window.__INITIAL_STATE__);
        const basic = window.__INITIAL_STATE__.detail.basic;
        if (basic.comment_type == 12) {
            let new_href = "https://www.bilibili.com/read/cv" + basic.rid_str;
            window.location.href = new_href;
        }
    }
})();