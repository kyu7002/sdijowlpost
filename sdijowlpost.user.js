// ==UserScript==
// @name         Set child_menu to display block
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Set display:block for .nav.child_menu
// @author       You
// @match        *admin.sdij.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // 새로운 스타일 요소를 생성
    var style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = `
        .nav-sm .nav.child_menu {
            display: block !important;
        }
    `;

    // 스타일 요소를 head 태그에 추가
    document.getElementsByTagName('head')[0].appendChild(style);
})();
