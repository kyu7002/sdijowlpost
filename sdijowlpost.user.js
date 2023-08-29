// ==UserScript==
// @name         시대인재 부엉이포스트 모바일 css 핵
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Set custom styles for .nav.child_menu and other elements
// @author       물량공급
// @match        *://admin.sdij.kr/*  // 원하는 URL 패턴을 설정하세요
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
        .nav-sm .nav.side-menu li a {
            font-size: 10px;
        }
        .nav-sm .nav.side-menu li.active-sm ul ul {
            width: 300%;
        }
        .nav-sm .nav.side-menu li a i {
            font-size: 0px !important;
            text-align: center;
            width: 0% !important;
        }
        .nav-sm ul.nav.child_menu {
            left: 120%;
            width: 350%;
        }
        .nav-sm ul.nav.child_menu li {
            padding: 0 1px;
        }
    `;

    // 스타일 요소를 head 태그에 추가
    document.getElementsByTagName('head')[0].appendChild(style);
})();
