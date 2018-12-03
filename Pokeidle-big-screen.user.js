// ==UserScript==
// @name         Pokeidle Big Screen
// @namespace    Pokeidle
// @version      1
// @description  Adds CSS to extend the game view for fullscreen browser windows 
// @author       Akerus aka Takeces
// @match        https://richardpaulastley.github.io/
// @grant        GM_addStyle
// ==/UserScript==

(function() {

    GM_addStyle('body {background-color: rgb(82, 153, 228); margin: 0;}');
    GM_addStyle('#gameContainer {width: initial; height: initial; margin: 0; padding: 0; box-shadow: none; background-color: transparent; position: initial;}');
    GM_addStyle('#player {left: 270px; top: initial; bottom: 35px; float: none;}');
    GM_addStyle('#enemy {position: absolute; top: 10px; right: 270px; float: none;}');
    GM_addStyle('#playerPokes {width: 258px; position: absolute; top: 10px; bottom: 10px; left: 10px; height: initial; max-height: none; float: none;}');
    GM_addStyle('#playerPokes ul {position: absolute; top: 110px; bottom: 0; left: 0; right: 0; height: initial; margin: 0; padding-bottom: 7px;}');
    GM_addStyle('#areasList {width: 258px; position: absolute; top: 10px; bottom: 10px; right: 10px; height: initial; max-height: none; float: none;}');
    GM_addStyle('#areasList ul.list {position: absolute; top: 32px; bottom: 0; left: 0; right: 0; height: initial; margin: 0; padding-bottom: 7px;}');
    GM_addStyle('#version {bottom: 10px; top: initial; left: 280px;}');
    GM_addStyle('#gitLink {bottom: 10px; top: initial; left: 570px;}');
    GM_addStyle('#subLink {bottom: 10px; top: initial; left: 640px;}');
    GM_addStyle('#disLink {bottom: 10px; top: initial; left: 730px;}');
})();
